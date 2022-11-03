<script>
// @ts-nocheck

    import * as prismicH from '@prismicio/helpers'
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
      /**
	 * @type {never[]}
	 */
       export let categories=[]
     


</script>

 <a href={`/posts/${slug}`}>
    <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src= {cover} alt="media">

    <div class="mt-8">
        <!-- {#if  categories}
        {#each categories as cat}
            <span class="text-blue-800 uppercase text-left font-bold"><a href={`/topics/${prismicH.asText(cat?.category?.name)}`}>{prismicH.asText(cat?.category?.name)}</a></span>
        {/each} 
        {/if} -->


        <!-- <span class="text-blue-800 uppercase">Javascript</span> -->

        <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
           {title}
        </h1>

        <p class="mt-2 text-gray-500 dark:text-gray-400">
            {@html summary}
        </p>

        <div class="flex items-center justify-between mt-4">
            <div>
                <!-- <a href="/" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                   Devmnj
                </a> -->

                <p class="text-md font-bold text-gray-500 dark:text-gray-800"> {date}</p>
            </div>

            
        </div>

    </div>
</a>