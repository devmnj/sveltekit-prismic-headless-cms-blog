<script>
	import Banner from 'components/Banner.svelte';
	import Footer from 'components/Footer.svelte';
 
	import Nav from 'components/Nav.svelte';
	import '../app.css';
</script>

<div class="bg-gray-100">
 <Banner/>
	<Nav />
	<div  class="bg-slate-800 text-white items-center overflow-auto h-screen">
		<main><slot /></main>
	</div>
	 <Footer/>
</div>

