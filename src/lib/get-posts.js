    import  {client,ALL_POSTS, STICKY_POST} from '$lib/prismicio'
    import { error } from '@sveltejs/kit'

    export const query=`query  {
        allPost_types(sortBy: meta_lastPublicationDate_DESC) {
          totalCount
          edges {
            node {
              _meta {
                uid
              }              
            }
          }
        }
      }`;
       
export async function getPosts() {    
        const data=client.request(query).then(res=>res.allPost_types.edges)
        const posts=(await data) 
        if(posts){
              return posts;
        }    
      throw error(404, 'Not found');
}
 