<script>
	// @ts-nocheck

	import * as prismicH from '@prismicio/helpers';
 
     export let cover;
    /**
	 * @type {any}
	 */
     export let slug;
    /**
	 * @type {any}
	 */
     export let title;
    /**
	 * @type {any}
	 */
     export let summary;
     /**
	 * @type {any}
	 */
      export let date ;
         
  
</script>

 
	<div class="container">
		<img
			class=" z-10 object-cover w-full rounded-md h-80"
			src={cover}
			 
			alt="media"
		/>

		<div
			class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
		>
		
			<a
				href={`/posts/${slug}`}
				class="font-semibold text-gray-800 hover:underline dark:text-white  md:text-xl"
			>
				{  title }
			</a>

			<p class="mt-3 text-xl text-green-500 dark:text-red-100 md:text-sm">
				<style>
					p{
						font-size:18px;
						color:#153462;
					}
				</style>
				{@html summary}
			</p>

			<p class="mt-3 text-md text-bold font-bold text-red-800">{date}</p>
		</div>
	</div>
 
