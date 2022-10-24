<script>
 
	import Prism from './../components/PrismJS.svelte';
	import * as prismicH from "@prismicio/helpers";

    // @ts-ignore
    
	export let slice = {};
	const html= prismicH.asText( slice?.primary.cod_text_field);
</script>
<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css" integrity="sha512-XZoe1WroNfbcndQJexn+pbMEytiaSYRHDuKjew+Nn0xYSTmB4sfoZnBdqYCrXq2IwAcPZS/sXE5ju/JbppYOsA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-dark.min.css" rel="stylesheet" /> -->
 <!-- <link href="@\prism-themes\themes\prism-atom-dark.css" rel="stylesheet"> -->
 <!-- <link href="..\..\node_modules\prism-themes\themes\prism-one-dark.min.css" rel="stylesheet"> -->
 
  </svelte:head>
 
 
<Prism language="javascript" code="{html}" header="Source code"/>
  