<script>
import * as prismicH from "@prismicio/helpers"
export let slug= " ";
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
 export let image ;
 /**
	 * @type {any}
	 */
  export let pubDate;
/**
	 * @type {{ feaured_img_link: any; title: any; }}
	 */
</script>

 <a
 rel="noopener noreferrer"
 href={`/posts/${slug || '404'}`}
 class="bg-gray-900 block max-w-sm  mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-800"
>
 <img
   src={prismicH.asImageSrc(image)}
   alt=""
   class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
 />
 <div class="bg-gray-900 rounded-md p-6 space-y-2 lg:col-span-5">
   <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
     { prismicH.asText(title) || "Noster tincidunt reprimique ad pro"}
   </h3>
   <span class="text-xs dark:text-gray-400">{ prismicH.asDate( pubDate)?.toDateString()  || "February 19, 2021"}</span>
   <p>
     {@html prismicH.asHTML(summary)  ||
       "Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est ingraece fuisset, eos affert putent doctus id."}
   </p>
 </div>
</a>