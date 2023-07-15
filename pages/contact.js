import siteConfig from "../config.mjs";
import Layout from "../layouts/page";

export default function Contact() {
  return (
    <Layout>
      <p>
        Hello there! Please use this page to contact me about work
        opportunities.
      </p>

      {siteConfig.available === false ? (
        <p>
          Currently I don't have availability but feel free to reach anyway - I
          would love to chat with you!
        </p>
      ) : null}
      {siteConfig.available === "small" ? (
        <p>
          Currently I am working on a larger project and therefore I am only
          available for one-off consulting sessions and very small projects.
        </p>
      ) : null}

      <p>
        Over my career I lived in five different countries and worked for great
        companies and with great customers: Yelp, Automattic, DatoCMS, Vercel,
        Amboss, Swiss Red Cross, PSPDFKit, Graduateland.
        <br />
        <br />
        Some of my open source work runs on word-class websites like TikTok,
        Hulu, Nike, Vercel, Tencent News (xw.qq.com).
        <br />
        <br />
        Over my career I also built direct and privileged connections with
        engineers and leaders who work at Google, Facebook, Yelp, Uber, Netflix,
        Vercel, Twitter, Amazon and many more.
      </p>

      <p>
        Generally I prefer more engineering-centric projects rather than
        crafting UIs for products, therefore I am available for consulting and
        development in the following areas:
      </p>
      <ul style={{ lineHeight: 1.3, fontSize: "0.9em" }}>
        <li>
          Frontend tooling and infrastructure, APIs and application architecture
          – I like to design and implement elegant solutions that solve problems
          and can scale
        </li>
        <li>Next.js or Remix consulting</li>
        <li>Library development (proprietary or open source)</li>
        <li>Performance or codebase audits</li>
        <li>Design systems and CSS tooling</li>
        <li>
          Ethereum smart contracts (Solidity) development and web3 tooling
        </li>
        <li>
          Technical oversight and team guidance, leading groups of engineers
        </li>
        <li>Frontend development and React centric training</li>
      </ul>

      <p>
        My main programming languages are TypeScript, JavaScript, Node and
        Solidity. I have extensive experience and deep understanding of how
        React, Next.js, Remix and many other popular solutions work.
      </p>

      <details style={{ margin: "1em 0" }} className="Copy" open={true}>
        <summary
          style={{
            fontWeight: 500,
            fontSize: "0.9em",
            marginLeft: "-1em",
            cursor: "pointer",
          }}
        >
          See Examples of Work
        </summary>

        <ul style={{ lineHeight: 1.3, fontSize: "0.9em" }}>
          <li>
            Helped{" "}
            <a href="https://datocms.com" target="_blank">
              DatoCMS
            </a>{" "}
            building their structured text (documents) solution.{" "}
            <a
              href="https://twitter.com/giuseppegurgone/status/1364141393883635712"
              target="_blank"
            >
              Details →
            </a>
          </li>
          <li>
            Worked on an optimization for a Babel plugin that made it 5x faster
            resulting in considerable increase in development speed for the
            client.{" "}
            <a
              href="https://giuseppegurgone.com/synchronizing-async-functions#an-oss-success-story"
              target="_blank"
            >
              Details →
            </a>
          </li>
          <li>
            Built an SDK for{" "}
            <a href="https://getdx.com/" target="_blank">
              getdx.com
            </a>
            's embedding functionality
          </li>
          <li>
            Worked with{" "}
            <a href="https://www.amboss.com/" target="_blank">
              AMBOSS
            </a>{" "}
            to improve their testing infrastructure and Quality Engineering
            processes.{" "}
            <a
              href="https://twitter.com/giuseppegurgone/status/1627671827546836992"
              target="_blank"
            >
              Details →
            </a>
          </li>
        </ul>
      </details>
      <p>Let me know about your project and let’s talk:</p>
      <form
        action="https://contact-form-fn.vercel.app/api"
        method="post"
        className="Form"
        style={{ margin: "2rem auto" }}
        id="form"
      >
        <label>
          Company
          <input type="text" name="company" placeholder="Acme Inc." required />
        </label>
        <label>
          Name
          <input type="text" name="fullname" placeholder="Jon Doe" />
        </label>
        <label>
          Address
          <input type="text" name="address" placeholder="Market St." />
        </label>
        <label>
          Your email address
          <input
            type="email"
            name="email"
            placeholder="contact@acme.com"
            required
          />
        </label>
        <label>
          Subject
          <input type="text" name="project" placeholder="Hello there." />
        </label>
        <label>
          Project type
          <select name="project" required>
            <option value="Infra">
              Tooling, infrastructure and application architecture
            </option>
            <option value="Next / Remix Consulting">
              Next.js / Remix Consulting
            </option>
            <option value="Library">Library development</option>
            <option value="Audit">Performance or codebase audit</option>
            <option value="Team Guidance">Team guidance</option>
            <option value="Design Systems">Design Systems</option>
            <option value="Solidity">
              Solidity smart contract or Web3 tooling
            </option>
            <option value="Training">Training</option>
            <option value="Other">Other</option>
          </select>
        </label>
        {/*<label>
    Budget
    <select name="budget" required>
      <option value="€1000-3000 EUR">€1000-2000 EUR</option>
      <option value="€3000-5000 EUR">€3000-5000 EUR</option>
      <option value="€5000-10000 EUR">€5000-10000 EUR</option>
      <option value="€10000+ EUR">€10000+ EUR</option>
    </select>
  </label>*/}

        <label>
          Message
          <textarea
            name="message"
            placeholder="Hey Giuseppe..."
            required
          ></textarea>{" "}
        </label>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button>
            Send<span aria-hidden="true"> →</span>
          </button>
        </div>
      </form>
      {/*
## Clients

Throughout my career I have lived in five different countries and worked for great companies and with great customers:

Yelp, Automattic, DatoCMS, Vercel, Swiss Red Cross, PSPDFKit, Graduateland.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;ve been working with Giuseppe for many years, he&#39;s a great engineer, understands product, and gets things done.</p><br>&mdash; Peter Steinberger, CEO at PSPDFKit GmbH.</blockquote>

Some of my open source work runs on world-class websites like TikTok, Hulu, Nike, Vercel, Tencent News (xw.qq.com).

Over the years I have also built direct and privileged connections with engineers and leaders who work at Google, Facebook, Yelp, Uber, Netflix, Vercel, Twitter, Amazon and many more.

## Open Source

Over the years, I have done highly impactful contributions to projects like SUIT CSS, Next.js, React Native for Web and many more.

My most successful open source projects are [xm](https://twitter.com/giuseppegurgone/status/1305851405660549122) and Vercel's [styled-jsx](https://www.npmjs.com/package/styled-jsx) which I co-authored.

I love to work in public on projects that have an impact on your business and the entire community.

For example the tech team at the Swiss Red Cross hired me to improve the performance of the PostCSS plugin for styled-jsx.

> With this work the plugin is now ~5x faster!
>
> The development build which previously took ~2.5 minutes
> now takes 29 seconds!

[Hit me up](#form) if you want to sponsor my work or need help with an open source project.

*/}
      <script
        dangerouslySetInnerHTML={{
          __html: `
    document.querySelector('.Form').addEventListener('submit', event => {
    event.preventDefault()
    const confirmcode = [Math.ceil(Math.random()*10),Math.ceil(Math.random()*10)]
    const typedcode = window.prompt(\`Please confirm by typing the result of the following sum:
    \${confirmcode[0]}+\${confirmcode[1]}
    \`)

    if (Number(typedcode.trim()) !== confirmcode[0]+confirmcode[1]) {
      alert('Wrong sum. Please try again.')
      return
    }

    const button = event.target.querySelector('button')
    button.disabled = true

    fetch(event.target.action, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target)))
    }).then(response => {
      button.disabled = false
      if (!response.ok) {
        if (gtag) {
          gtag("event", "contact_error", {
            "event_category": "error",
            "event_label": "contact error",
            "value": \`\${response.status} \${response.statusText}\`
          })
        }
        throw new Error()
      }
      const success = document.createElement('p')
      success.classList.add('Note')
      success.innerHTML = 'Thank you for contacting me! I will get back to you as soon as possible.<br>Have a great day!'
      event.target.replaceWith(success)
    }).catch(() => {
      button.disabled = false
      alert(\`⚠ Something went wrong. Please contact me at \${atob('Y29udGFjdEBnZ3VyZ29uZS5jb20')}\`)
    })
  })`,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `.Form > :nth-child(2), .Form > :nth-child(3) {
    position: absolute;
    visibility: hidden;
    user-select: none;
    z-index: -1
  }`,
        }}
      />
    </Layout>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
