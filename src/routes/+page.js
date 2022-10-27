import  {client,ALL_POSTS, STICKY_POST} from '$lib/prismicio'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load(){
    const documents=client.request(ALL_POSTS).then(res=>res.allPost_types.edges)
    const sticky= client.request(STICKY_POST).then(res=>res.allPost_types.edges)
    console.log('loading posts')
    
   return{
    documents:(await documents),
    sticky:(await sticky)
   }

   
//    throw error(404, 'Not found');
}
