import  {client,ALL_POSTS, STICKY_POST, ALL_POSTS_INCLUDES_STICKY} from '$lib/prismicio'
import { postCollection, stickyCollection } from '$lib/store'
import { error } from '@sveltejs/kit'
import { get } from 'svelte/store'

/** @type {import('./$types').PageLoad} */
export async function load(){
    const data=client.request(ALL_POSTS_INCLUDES_STICKY).then(res=>res.allPost_types.edges)
    const stickyData= client.request(STICKY_POST).then(res=>res.allPost_types.edges)
    const documents =await data;
    const sticjky =  await stickyData;
    postCollection.set(documents);
    stickyCollection.set(sticjky)
    // postCollection.subscribe((coll)=>console.log(coll))
    //  console.log(get(postCollection));
    

   
//    throw error(404, 'Not found');
}
