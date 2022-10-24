<script>
/**
 * @type {any}
 */

export let slug=" ";
export let thumb = "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm8lMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60";
export let category = " "
export let title = " ";
export let summary = " ";
export let pubDate =" "
</script>

 
    <a
        href={`/posts/${slug}`}
        rel="noopener noreferrer"
        class="rounded bg-gray-600"
        >
        <!-- svelte-ignore a11y-missing-attribute -->
        
        <img
            role="presentation"
            class=""
            src={ thumb}
            />
          
        <div class="flex justify-between ">
            <span class="mt-3 mx-3 text-yellow-200">{pubDate || " June 4, 2020"}</span>
            <span class="mt-3 mx-3 text-yellow-200"> {category || 'Reactjs'}</span>
        </div>

        <div class="px-2 py-2 space-y-2 ">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title || "In usu laoreet repudiare legendos"}
            </h3>
            <p class="align-baseline">{summary.trim()}</p>
        </div>
 
    </a>
 
