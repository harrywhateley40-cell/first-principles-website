import { SITE_URL } from "../config";

export function GET() {
	const sitemapUrl = new URL("/sitemap.xml", SITE_URL).toString();

	return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
}
