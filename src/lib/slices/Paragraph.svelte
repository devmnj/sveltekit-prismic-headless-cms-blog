<script>
 
	import * as prismicH from "@prismicio/helpers";
    // @ts-ignore
    
	export let slice = {};
	// @ts-ignore
	const html= prismicH.asHTML(slice?.primary.paragraph_rich_text_field);
 
</script>
<div class=" mb-1 text-lg">
<style>
	a:hover {
		color: orange;
	}
</style>	
	{@html html}
</div>

