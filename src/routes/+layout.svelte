<script>
	import Analytics from '$lib/analytics.svelte';
import Banner from 'components/Banner.svelte';
	import Footer from 'components/Footer.svelte';
 
	import Nav from 'components/Nav.svelte';
	import '../app.css';
</script>
<svelte:head>
    <title>A blog on Web technologies </title>
    <meta name="keywords" content="css,javascript,typesvript,html,tailwinccss,react,svelte,vue,golang,next,nuxt"/>
	<meta name="refresh" content="60"/>
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
	<meta name="google-site-verification" content="J9O2DP11PYXL-C38-CLPu2W6BmzoITomcjLUKyZ0m-8" />
	<meta name="msvalidate.01" content="CEC0A17FDEA4551FECB7D97C702E7E3E" />
</svelte:head>

<Analytics/>	

<div class="bg-gray-100">
 <Banner/>
	<Nav />
	<div  class="bg-slate-800 text-white items-center overflow-auto h-screen">
		<main><slot /></main>
	</div>
	 <Footer/>
</div>

