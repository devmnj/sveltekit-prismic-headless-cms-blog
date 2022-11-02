<script>
		import * as prismicH from "@prismicio/helpers";
	export let slice = {};
	const html =  prismicH.asHTML(slice?.primary.header_rich_text_field)
	
</script>

<h1 class="text-2xl text-bold text-purple-700  mt-1 mb-1">{@html html}</h1>
