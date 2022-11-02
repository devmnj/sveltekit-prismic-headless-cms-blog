<script>
	// @ts-nocheck

	import * as prismicH from '@prismicio/helpers';
	import { SliceZone } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import Heading from '$lib/slices/Heading.svelte';
	import Paragraph from '$lib/slices/Paragraph.svelte';
	import Code from '$lib/slices/Code.svelte';
	import { search } from '$lib/store';
	import { goto } from '$app/navigation';
	import PostSkelton from 'components/PostSkelton.svelte';
	import RpCard from 'components/RPCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const doc = data.document.post_type;

	let rtime = 0;
	onMount(() => {
		//  console.log('loaded');
		const el = document.getElementById('article').innerText;
		rtime = GetReadingTime(String(el));
	});

	//reading time
	function GetReadingTime(text) {
		// @ts-ignore
		const wpm = 255;
		const words = String(text).trim().split(/\s+/).length;
		console.log(words);
		const time = Math.ceil(words / wpm);
		return time;
	}

	const components = {
		heading_slice: Heading,
		paragraph_slice: Paragraph,
		code_slice: Code
	};

	$: {
		if ($search) {
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>{prismicH.asText(doc?.title)}</title>
	<meta name="description" content={prismicH.asText(doc?.post_excerpt)} />
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>
<div>
	<!-- {JSON.stringify(document.body)} -->
	<div class="   dark:bg-gray-800 max-w-6xl px-6 py-16 mx-auto space-y-12">
		{#if doc}
			<article class=" text-black flex-col space-y-8 dark:bg-gray-800 dark:text-gray-50">
				<div class="space-y-6">
					<h1 class="text-4xl font-bold md:tracking-tight md:text-5xl">
						{doc.title[0].text}
					</h1>

					<div
						class="flex flex-col items-start justify-between   md:flex-row md:items-center dark:text-gray-400"
					>
						<div class="flex items-center md:space-x-2">
							<img
								src="https://avatars.githubusercontent.com/u/28762625?v=4/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=" "
								class="f w-12 h-12 border rounded-md dark:bg-gray-500 dark:border-gray-700"
							/>

							<p class="text-sm">
								Devmnj • {prismicH.asDate(doc._meta.lastPublicationDate).toDateString()}
							</p>
						</div>
						<p class="flex-shrink-0 mt-3 text-sm md:mt-0">
							{rtime} min read
						</p>
					</div>
				</div>
				<div class="place-content-center flex">
					<img
						class="rounded   w-250 h-250"
						src={prismicH.asImageSrc(doc.featured_img_link)}
						srcset={prismicH.asImageWidthSrcSet(doc.featured_img_link).srcset}
						alt={doc.featured_img_link.alt}
					/>
				</div>
				<div class="dark:text-gray-100" id="article">
					<SliceZone
						slices={doc.body}
						{components}
						defaultComponent={() => {
							`No slice found !`;
						}}
					/>
				</div>
			</article>
			<div>
				<!-- {JSON.stringify(doc.recommended)}  -->
				{#if doc.recommended}
					<!-- {JSON.stringify(doc?.recommended)} -->
					<div class="space-y-2 mt-3  ">
						<h4 class="text-lg text-red-500 font-semibold">Recommended for Reading</h4>
						<div
							class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 mt-4 w-full"
						>
							{#await doc.recommended}
								{console.log('loading')}
							{:then value}
								{#each doc?.recommended as recommended}
									<RpCard
										slug={recommended?.post?._meta?.uid}
										title={recommended?.post?.title}
										cover={recommended?.post?.featured_img_link.url}
										summary={recommended?.post?.post_excerpt}
									/>
								{/each}
							{/await}
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<PostSkelton />
		{/if}
	</div>
</div>
