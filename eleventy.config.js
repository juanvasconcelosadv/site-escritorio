import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import site from "./src/_data/site.json" with { type: "json" };

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  eleventyConfig.addFilter("dataBR", (d) => { const x = new Date(d); return `${x.getUTCDate()} de ${meses[x.getUTCMonth()]} de ${x.getUTCFullYear()}`; });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("isoDay", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("leitura", (c) => Math.max(1, Math.round(String(c || "").replace(/<[^>]+>/g, " ").split(/\s+/).length / 200)));
  eleventyConfig.addFilter("slugArea", (nome, areas) => { const a = (areas || []).find((x) => x.titulo === nome); return a ? a.slug : ""; });
  eleventyConfig.addFilter("daCategoria", (posts, cat) => (posts || []).filter((p) => p.data.categoria === cat));
  eleventyConfig.addFilter("semAtual", (posts, url) => (posts || []).filter((p) => p.url !== url));
  eleventyConfig.addFilter("limite", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("absUrl", (u) => (u && u.startsWith("http") ? u : site.url.replace(/\/$/, "") + (u || "/")));
  eleventyConfig.addFilter("textoPuro", (c) => String(c || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/artigos/*.md").filter((p) => !p.data.rascunho).sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: { language: "pt-BR", title: site.nome + " · Artigos", subtitle: site.descricao, base: site.url + "/", author: { name: site.nome } },
  });

  return { dir: { input: "src", includes: "_includes", data: "_data", output: "_site" }, markdownTemplateEngine: "njk", htmlTemplateEngine: "njk" };
}
