import fs from "fs";
import remarkautoHeading from "remark-autolink-headings";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import remarkFrontmatter from "remark-frontmatter";
import remarkHighlight from "remark-highlight.js";
import remarkHTML from "remark-html";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import { read } from "to-vfile";
import { unified } from "unified";
import { parse as yamlParse } from "yaml";

export async function compile(path, slug) {
  if (!fs.existsSync(`${path}/${slug}.md`)) {
    return null;
  }
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkExtractFrontmatter, { yaml: yamlParse })
    .use(remarkHighlight)
    .use(remarkSlug)
    .use(remarkautoHeading)
    .use(remarkHTML, { sanitize: false })
    .process(await read(`${path}/${slug}.md`));

  // @TODO Compile front matter tldr markdown when present.
  return { content: String(result), meta: { slug, ...result.data } };
}
