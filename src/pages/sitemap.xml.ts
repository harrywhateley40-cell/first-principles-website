import { SITE_URL } from "../config";
import { subjectPages } from "../data/subjectPages";

const pages = ["/", ...subjectPages.map((page) => `/${page.slug}/`)];

export function GET() {
	const urls = pages
		.map((path) => {
			const loc = new URL(path, SITE_URL).toString();

			return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`;
		})
		.join("");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
