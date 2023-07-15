---
layout: post
title: Cloudflare Workers for Noobs
date: 2023/04/20
preview_image: https://github.com/giuseppeg/xm/assets/711311/f2083308-16c2-4774-b15b-36e613bea7a3
suggested: true
---

Hello there, I am the noob writing down notes about my learnings while I play with Cloudflare Workers. My aim is to provide a TL;DR resource for people who are approaching them for the first time.

This article focuses on the Cloudflare Workers developer experience and talks about deploying, managing environment variables and doing other configuration/operation tasks.

Here I assume that you know what [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) is.

This is a work in progress so please [suggest an edit](https://github.com/giuseppeg/giuseppegurgone.com/edit/master/posts/cloudflare-workers.md) if any of the information in this page is inaccurate or can be improved.

## Environments

In workers you define environments upon deploy or when you run in development with the wrangler flag `--env`:

```sh
wrangler dev --env dev
wrangler deploy --env production
```

This is for example because you can have a remote dev environment or [insert other clever reasons here].

Every environment then can have its own configuration in `wrangler.toml` under `[env.name]`:

```toml
#########################################################
## common

main = "src/worker.ts"
compatibility_date = "2023-05-18"

#########################################################
## development

[env.dev]
name = "giuseppe-worker-dev"

#########################################################
## production

[env.production]
name = "giuseppe-worker"
```

Each environment will inherit the common config.

## Environment Variables

Environment variables in workers are not global. They are passed to your worker handler as the `env` argument:

```typescript
async fetch(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {

  console.log(JSON.stringify(env, null, 2));
}
```

This means that you need to pass the `env` object around whenever you need to access an environment variable.

If you are coming from Node.js this will be annoying - deal with it. There is however the possibility to [define global constants](#defining-global-constants) (more on it later).

If you scaffold the worker with wrangler you can define the type definitions for `Env` in `worker-configuration.d.ts`.

### Defining Variables

Generally Cloudflare suggests to use `wrangler.toml` rather than the Cloudflare Dashboard (or CLI?) as **the source of truth**. I am not sure I like this a lot but shrug.

What I learnt the hard way is that you cannot have some environment vars defined in the dashboard and others in `wrangler.toml`.

Well actually you can but probably it is a bad idea.

If you like bad ideas and want to spread your variables here and there you will need to add a configuration flag to your `wrangler.toml` called `keep_vars` to preserve your dashboard variables on publish:

```toml
keep_vars = true
```

Anyway I wouldn't use this.

What really matters is that you figure out what is an actual secret and what is an environment variable that can easily go public to GitHub for example.

Probably most of your variables are API keys, access tokens and are confidential therefore they should be secrets that should be stored encrypted via the dashboard or with the CLI.

### Development Variables

In contrast to other Verce...rvices, you won't host your local env variables on Cloudflare and pull them locally when developing. That would be an incredible DX.

Instead you need to keep them local either in `wrangler.toml` or, if you don't want to version control them, put them in a file called `.dev.vars`.

In `.dev.vars` (remember to add it to `.gitignore`):

```
myVar = "myValue"
```

alternatively in `wrangler.toml` (this will go to GitHub etc):

```toml
#########################################################
## development

[env.dev]
name = "giuseppe-worker-dev"

[env.dev.vars]
myVar = "myValue"
```

Now `myVar` can be accessed via `env` (remember to `wrangle dev --env dev`):

```typescript
async fetch(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {

  console.log(env.myVar)
}
```

In local development you will end up defining secrets as regular environment variables therefore probably `.dev.vars` is a better place to store variables.

## Defining Global Constants

In addition to variables it is possible to define global constants that will be statically replaced at build time.

This can be useful to define the equivalent of Node.js `process.env.NODE_EV` for example.

To do so you can declare a `define` section in your `wrangler.toml`:

```toml
#########################################################
## common

main = "src/worker.ts"
compatibility_date = "2023-05-18"

#########################################################
## development

[env.dev]
name = "giuseppe-worker-dev"

[env.dev.define]
ENVIRONMENT = "'development'"

#########################################################
## production

[env.production]
name = "giuseppe-worker"

[env.production.define]
ENVIRONMENT = "'production'"
```

and magically you can access it in your worker:

```typescript
async fetch(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {

  if (ENVIRONMENT === "development") {
    console.log(crackAJoke());
  }
}
```

Keep in mind that this is not a replacement for environment variables and shouldn't be used to store secrets.

Finally you may want to add `ENVIRONMENT` to your Worker's type definitions in `worker-configuration.d.ts`:

```typescript
declare var ENVIRONMENT: "development" | "production";

interface Env {
  myVar: string;
}
```

---

To be continued...
