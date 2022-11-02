import * as prismic from '@prismicio/client'
import {GraphQLClient} from "graphql-request";
// Fill in your repository name
export const repositoryName = 'jsuu'
export const CATEGORIES=`query categories{
  allPost_categorys{
    edges{
      node{
        name
        description
        _meta{
          uid
        }
      }
    }
  }  
  }`
export const STICKY_POST=`query  {
    allPost_types(first:2,sortBy: meta_lastPublicationDate_DESC, where: {sticky_post: true}) {
      totalCount
      edges {
        node {
          _meta {
            uid
            firstPublicationDate
          }
          title
          post_excerpt
          featured_img_link {
            ... on _ExternalLink {
              url
            }
          }
        }
      }
    }
  }`;

  export const ALL_POSTS_INCLUDES_STICKY = `query {
    allPost_types(sortBy: meta_lastPublicationDate_DESC) {
    edges {
    node {
    _meta {
    firstPublicationDate
    id
    uid
    }
    title
    post_excerpt   
    featured_img_link {
    ...on _ExternalLink{
    url
    }
    }
    }
    }
    }
    }
    `;
    
export const ALL_POSTS = `query {
allPost_types(sortBy: meta_lastPublicationDate_DESC,where: {sticky_post: false}) {
edges {
node {
_meta {
firstPublicationDate
id
uid
}
title
post_excerpt
featured_img_link {
...on _ExternalLink{
url
}
}
}
}
}
}
`;


const prismicClient = prismic.createClient(
        prismic.getRepositoryEndpoint(repositoryName),
    {
        // If your repository is private, add an access token
        accessToken: '',

        // This defines how you will structure URL paths in your project.
        // Update the types to match the Custom Types in your project, and edit
        // the paths to match the routing in your project.
        //
        // If you are not using a router in your project, you can change this
        // to an empty array or remove the option entirely.
        routes: [
            {
                type: 'page',
                path: '/:uid',
            },
        ],
    }
)

// The rest of the file...

  export const client = new GraphQLClient(
    prismic.getGraphQLEndpoint(repositoryName),
    {
        fetch: prismicClient.graphQLFetch,
        method: "get",
    }
);

function  ExtractEntries(data){
    return data.allPost_types.edges
}
 
