import  {ALL_POSTS, ALL_POSTS_INCLUDES_STICKY, client} from '$lib/prismicio'
import { error } from '@sveltejs/kit'
import { doc } from 'prettier';
 /** @type {import('./$types').PageLoad} */
export async function load({params}){
    const data=client.request(ALL_POSTS_INCLUDES_STICKY).then(res=>res.allPost_types.edges) 
      
    const collection = (await data);
 console.log(collection);
    // @ts-ignore
    const docs = collection.filter((/** @type {{ node: { _meta: { ui: string; }; }; }} */ m)=>m?.node?.categories?.map((c)=>c?._meta.uid===params.slug))??[];
  console.log(docs);
   return{
    documents:collection, 
    slug:params.slug
   }

   
//    throw error(404, 'Not found');
}
