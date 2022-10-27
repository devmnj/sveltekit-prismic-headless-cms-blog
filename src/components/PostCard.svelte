<script>
// @ts-nocheck

import * as prismicH from "@prismicio/helpers";
/**
 
/**
	 * @type {{ Node: { title: any; }; }}
	 */
 export let post;
</script>

 
    <a
        href={`/posts/${post?.node._meta.uid}`}
        rel="noopener noreferrer"
        class="rounded bg-gray-600"
        >
        <!-- svelte-ignore a11y-missing-attribute -->
        
        
            <img   role="presentation"
            src={prismicH.asImageSrc(post?.node?.featured_img_link)}
            srcset={prismicH.asImageWidthSrcSet(post?.node?.featured_img_link)?.srcset} 
            alt={post?.node?.featured_img_link.alt} 
          />
        <div class="flex justify-between ">
            <span class="mt-3 mx-3 text-yellow-200">{prismicH.asDate(post?.node?._meta?.firstPublicationDate).toDateString()}</span>
            <span class="mt-3 mx-3 text-yellow-200"> { 'Svelte'}</span>
        </div>

        <div class="px-2 py-2 space-y-2 ">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                {prismicH.asText(post?.node?.title)}
            </h3>
            <p class="align-baseline">{@html prismicH.asHTML(post?.node?.post_excerpt)}</p>
        </div>
 
    </a>
 
