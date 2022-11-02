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
		font-weight: bold;
	}
	a{
	 font-weight: bold;
	}
</style>	
	{@html html}
</div>

