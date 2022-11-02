<script>
// @ts-nocheck

	import { asHTML } from "@prismicio/helpers";
import Card from "components/Card.svelte";
import CatPostCard from "components/CatPostCard.svelte";
import MainContainer from "components/MainContainer.svelte";
	import RpCard from "components/RPCard.svelte";
	import Skeltons from "components/Skeltons.svelte";
        /** @type {import('./$types').PageData} */
    export let data; 
</script>

<!-- <MainContainer>
  
       Loading posts

        <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {' '}
        {#await data.documents}
            <Skeltons/>
        {:then value} 
            {#each value as document}
                  <CatPostCard/>
                     
            {/each}
            {' '}
        {/await}
            
      
           
        </div>
</MainContainer> -->
<MainContainer>
<section class="bg-white dark:bg-gray-900 rounded ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{data?.slug} Guides</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-1">
            {#await data.documents}
            <Skeltons/>
        {:then value} 
            {#each value as document}
                 <!-- {JSON.stringify(document)} -->
                    <Card slug={document?.node?._meta?.uid} cover={document?.node?.featured_img_link?.url} summary={asHTML( document?.node.post_excerpt)} ></Card>  
            {/each}
            {' '}
        {/await}
            
        </div>
    </div>
</section>
</MainContainer>