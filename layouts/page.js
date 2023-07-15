import config from "../config.mjs";
import BaseLayout from "./base";

export default function Page({ meta = {}, children, pfp = false }) {
  return (
    <BaseLayout meta={meta}>
      <style>
        {`.Article-header .Avatar {
            display: block;
            margin: 3em 0;
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }
          .Article-header .Avatar img {
            display: block;
            width: 64px;
            height: 64px;
            border-radius: 100%;
          }
          @media (min-width: 520px) {
            .Article-header {
              position: relative;
              padding-right: 84px;
            }
            .Article-header .Avatar {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              margin-top: 0;
            }
          }
          .Article-meta {
            margin-top: 0.25em;
          }`
          .split("\n")
          .map((l) => l.trim())
          .join(" ")}
      </style>
      <article className="Article">
        <header className="Article-header">
          <h1 className="Article-title">
            <a href="/">{meta.title || config.title}</a>
          </h1>
          <p className="Article-meta">{meta.subtitle || config.subtitle}</p>
          {pfp === true ? (
            <img
              className="Avatar"
              src="/img/pfp.jpeg"
              alt=""
              role="presentation"
            />
          ) : null}
        </header>
        <section className="Article-content">
          <div className="Copy">{children}</div>
        </section>
      </article>
    </BaseLayout>
  );
}
