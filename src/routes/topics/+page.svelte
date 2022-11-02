<script>
// @ts-nocheck

	import { asHTML, asText } from "@prismicio/helpers";
	import HBox from "components/HBox.svelte";
	import MainContainer from "components/MainContainer.svelte";
	import Skeltons from "components/Skeltons.svelte";
    /** @type {import('./$types').PageData} */
    export let data;

</script>

<MainContainer>
    <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
        {#await data}
            <Skeltons/>
        {:then value} 
            <!-- {JSON.stringify(value)} -->
            {#each value?.documents as  category}
             <HBox slug={ category?.node?._meta?.uid } description={asHTML(category?.node?.description)} category={asText(category?.node?.name)}/>                
            {/each} 
        {/await}
</div>
</MainContainer>