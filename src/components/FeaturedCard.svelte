<div>
    <img class="relative z-10 object-cover w-full rounded-md h-96" src={cover} alt="">

    <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
        <a href={`/posts/${slug}`} class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
            {title}
        </a>

        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
             {@html summary}        </p>

        <p class="mt-3 text-sm text-blue-500">{date}</p>
    </div>
</div>

<script>
        /**
	 * @type {any}
	 */
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