import  {client} from '$lib/prismicio'
import { error } from '@sveltejs/kit'
 
/** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ params }) {

    const POST_QUERY = `query {
        post_type(uid: "${params.slug}", lang: "en-us") {
          _meta{
            lastPublicationDate
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

      const document=client.request(POST_QUERY).then(res=>res)

     if(await document){
      return{ document}
      }
     error(404, 'Not found');
    return{
       document
    };

     
  }