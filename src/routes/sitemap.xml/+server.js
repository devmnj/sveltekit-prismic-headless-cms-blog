 
import { postCollection } from "$lib/store";
import { get } from "svelte/store";

// @ts-ignore
export async function GET({url}) {
  
   /**
   * @type {never[]}
   */
   const data = get(postCollection)
  console.log(data);
    // const posts=await getPosts() ?? [];
  
  const postList=data?.map((/** @type {{ node: { _meta: { uid: any; }; }; }} */ p)=>
  `<url>
  <loc>https://${url.hostname}/posts/${p.node._meta.uid}</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>)
  </url>
  `); 
  return new Response( 
    `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>https://${url.hostname}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url> 
   ${postList}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}