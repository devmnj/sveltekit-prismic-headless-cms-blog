<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { search } from '$lib/store';
	import { asHTML } from '@prismicio/helpers';
	import { json } from '@sveltejs/kit';
	import Card from 'components/Card.svelte';
	import MainContainer from 'components/MainContainer.svelte';
	import Skeltons from 'components/Skeltons.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	// $: {
	// 	if ($search) {
	// 		goto('/');
	// 	}
	// }
</script>

<svelte:head>
	<title>A blog on Web technologies</title>
	<meta name="description" content="A blog on Web Frame works" />
</svelte:head>

<MainContainer>
	<section class="bg-white dark:bg-gray-900 rounded ">
		<div class="container px-6 py-10 mx-auto">
			<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
				{data?.slug} Guides
			</h1>
            <!-- {JSON.stringify(data?.documents)} -->
			<div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-1">
                 
				{#if !data.documents}
					 
                    <Skeltons/>
                {:else}

					{#each data?.documents as document}
						<Card
							slug={document?.node?._meta?.uid}
							cover={document?.node?.featured_img_link}
							summary={asHTML(document?.node.post_excerpt)}
						/>
					{/each}
				

					 
					{' '}
				{/if}
			</div>
		</div>
	</section>
</MainContainer>
