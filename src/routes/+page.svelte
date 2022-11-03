<script>
// @ts-nocheck

	import * as prismicH from '@prismicio/helpers';
	import MainContainer from 'components/MainContainer.svelte';
	import { postCollection, search, stickyCollection } from '$lib/store';
	import Skeltons from 'components/Skeltons.svelte';
	import MerCard from 'components/MerCard.svelte';
	import { asHTML, asText } from '@prismicio/helpers';
	import FeaturedCard from 'components/FeaturedCard.svelte';
	import { get } from 'svelte/store';

	/** @type {import('./$types').PageData} */
	 
	// @ts-ignore
	const sticky =  get(stickyCollection)??[];

	/**
	 * @type {any[]}
	 */

	let posts = get(postCollection)??[];
	$: {
		if ($search) {
			// @ts-ignore
			posts = posts?.filter((doc) =>
				doc.node.title[0].text.toUpperCase().includes($search)
			);
		} else {
			posts = get(postCollection)??[];
		}
		console.log($search);
	}
</script>

<svelte:head>
	<title>A blog on Web technologies</title>
	<meta name="description" content="Ablog on Web Frame works" />
</svelte:head>

<MainContainer>
   <!-- <span class="text-black">{JSON.stringify(sticky)}</span>  -->
	<div class="bg-white dark:bg-gray-900">
		<div class=" px-6 py-10 mx-auto">
			<div class="text-center">
				<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
					Featured Posts
				</h1>

				<p class="max-w-lg mx-auto mt-4 text-gray-500">Trending guides on web technologies</p>
			</div>

			<div class=" grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
				{#if  !sticky}
					<Skeltons />
                     

				{:else}   
				 <!-- <span class="text-black">{JSON.stringify(sticky)}</span>  -->
					{#each sticky as document}
				 <!-- <span class="text-black">{JSON.stringify(sticky)}</span>  -->

						<FeaturedCard
						 
						cover={prismicH.asImageSrc(document?.node?.featured_img_link)}
						title={prismicH.asText(document?.node.title)}
						summary={asHTML(document?.node?.post_excerpt)}
						date={prismicH.asDate(document?.node?._meta?.firstPublicationDate)?.toDateString()}
						slug={document?.node?._meta.uid}
						/>
					{/each}

				{/if}
			</div>
		</div>
	</div>

	<div class="bg-white dark:bg-gray-900">
		<div class="container px-6 py-10 mx-auto">
			<div class="flex items-center justify-between">
				<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
					recent posts
				</h1>

				<!-- <button class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button> -->
			</div>

			<hr class="my-8 border-gray-200 dark:border-gray-700" />
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
				 {#if !posts}
					<Skeltons />
				{:else }
					{#each posts as document}
						<MerCard
							categories={document?.node?.categories}
							cover={prismicH.asImageSrc(document?.node?.featured_img_link)}
							title={prismicH.asText(document?.node.title)}
							summary={asHTML(document?.node?.post_excerpt)}
							date={prismicH.asDate(document?.node?._meta?.firstPublicationDate)?.toDateString()}
							slug={document?.node?._meta.uid}
						/>
					{/each}
				{/if} 
			</div>
		</div>
	</div>
</MainContainer>
