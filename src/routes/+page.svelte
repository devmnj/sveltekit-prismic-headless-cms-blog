<script>
import * as prismicH from "@prismicio/helpers";

import MainContainer from 'components/MainContainer.svelte';
import PostCard from 'components/PostCard.svelte';
import StickyPost from 'components/StickyPost.svelte';

/** @type {import('./$types').PageData} */
export let data;
// @ts-ignore
const sticky = data?.sticky;

</script>

<MainContainer>
    <!-- Sticky Post -->
    <!-- {JSON.stringify(sticky)} -->
    <StickyPost
        pubDate ={sticky[0].node._meta.firstPublicationDate}
        slug={sticky[0].node._meta.uid}
        image={sticky[0].node.featured_img_link}
        title={sticky[0].node.title}
        summary={sticky[0].node.post_excerpt}
        />
        <!-- Post Grid   -->
        <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {' '}

            {#each data?.documents as document}
            <!-- {JSON.stringify(document.node)} -->
            <PostCard
                thumb={document.node.featured_img_link.url}
                title={document.node.title[0].text}
                pubDate={ prismicH.asDate(document.node._meta.firstPublicationDate)?.toDateString()}
                slug={document.node._meta.uid}
                />
                {/each}
                {' '}
                </div>
                </MainContainer>
