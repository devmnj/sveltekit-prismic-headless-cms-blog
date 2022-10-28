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

<svelte:head>
    <title>A blog on Web technologies </title>
    <meta name="description" content="Ablog on Web Frame works"/>    
    <meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>
<MainContainer>
    <!-- Sticky Post -->
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
                 post={document}
                />
            {/each}
            {' '}
        </div>
</MainContainer>
