<script>
	import { search } from "$lib/store";
    let kw=""

   $:{
    search.set(kw.toUpperCase())
    // console.log(kw);
   }
    
</script>
 
  <form method="GET">
    <div class="relative text-white-600 rouded focus-within:text-yellow-100">
      <span name='search_btn_container' class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button name="search-btn" type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input bind:value={kw} type="search" name="q" class="py-2 text-sm text-red-800 bg-white rounded-md pl-10 focus:outline-none focus:bg-slate-800 focus:text-yellow-300" placeholder="Search..." autocomplete="off">
    </div>
  </form>
 