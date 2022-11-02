<div class="lg:flex">
    <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={cover} alt="">

    <div class="flex flex-col justify-between py-6 lg:mx-6">
        <a href={`/posts/${slug}`} class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
           {@html summary}        </a>
        
        <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
    </div>
</div>

<script>
    /**
	 * @type {any}
	 */
     export let slug;
    /**
	 * @type {any}
	 */
     export let summary;
    /**
	 * @type {any}
	 */
     export let cover;


</script>