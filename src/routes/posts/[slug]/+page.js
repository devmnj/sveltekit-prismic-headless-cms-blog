import  {client} from '$lib/prismicio'
import { error } from '@sveltejs/kit'
 
/** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ params,routeId}) {

    const POST_QUERY = `query {
        post_type(uid: "${params.slug}", lang: "en-us") {
          _meta{
            lastPublicationDate,
            tags
          }
          categories
          {
            ... on Post_typeCategories{
              category{
                ... on Post_category{
                  name
                  description
                }
              }
            }
          }
          recommended{
            post{
              ... on _Document{
                _meta{
                  uid
                  firstPublicationDate            
                }
                ... on Post_type{
                  title
                  post_excerpt
                  featured_img_link
                  {
                    ... on _ExternalLink{
                      url
                    }
                  
                  }
                }
              }
            }
          }
        title
        post_excerpt
        featured_img_link {
          ... on _ExternalLink {
            url
          }
        }
        body {
          ... on Post_typeBodyParagraph_slice {
            label
            type
            primary {
              paragraph_rich_text_field
            }
          }
          ... on Post_typeBodyHeading_slice {
            type
            primary {
              header_rich_text_field
            }
          }
          ... on Post_typeBodyImage_slice {
            type
            primary {
              picture_field
            }
          }
          ... on Post_typeBodyCode_slice {
            type
            primary {
              cod_text_field
            }
          }
          ... on Post_typeBodyList_slice {
            type
            primary {
              list_ritch_text_field
            }
          }
          ... on Post_typeBodyQuotable {
            type
            primary {
              code_text_field
              quotes
            }
          }
        }
        }
      }  `;
 
      // console.log('Page1 :'+ JSON.stringify( routeId));
      const document=client.request(POST_QUERY).then(res=>res)
      
     if(await document){
      return{ document,params,routeId}
      }
     error(404, 'Not found');
    return{
       document 
    };

     
  }