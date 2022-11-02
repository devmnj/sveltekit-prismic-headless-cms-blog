import  {CATEGORIES, client} from '$lib/prismicio'
import { error } from '@sveltejs/kit'
 
export async function load(){
    const documents=client.request(CATEGORIES).then(res=>res.allPost_categorys.edges) 
    console.log('loading posts !!')    
   return{
    documents:(await documents), 
   }

   
//    throw error(404, 'Not found');
}
