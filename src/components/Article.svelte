<script>
export let post =;
</script>

<div class="   dark:bg-gray-800 max-w-6xl px-6 py-16 mx-auto space-y-12">
    <article class="  flex-col space-y-8 dark:bg-gray-800 dark:text-gray-50">
        <div class="space-y-6">
            <h1 class="text-4xl font-bold md:tracking-tight md:text-5xl">
                <!-- {props.post?.title} -->
            </h1>
            <div>
                <!-- <summary>{props.post.excerpt}</summary> -->
            </div>
            <div class="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                <div class="flex items-center md:space-x-2">
                    <img
                        src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        class="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                    />
                    <p class="text-sm">
                        <!-- {props.post.postAuthor || "Leroy Jenkins"} • July 19th, 2021 -->
                    </p>
                </div>
                <p class="flex-shrink-0 mt-3 text-sm md:mt-0">
                    4 min read • 1,570 views
                </p>
            </div>
        </div>
        <div>
            <!-- <img src={props.post.featured_image} /> -->
        </div>
        <div class="dark:text-gray-100">
            <p>
                <!-- {props.post.content || "Insert the actual text content here..."} -->
            </p>
        </div>
    </article>
    <div>
        <div class="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            <!-- <Tag name={props.post.tag} /> -->
        </div>
        <div class="space-y-2 text-white">
            <h4 class="text-lg  font-semibold">Comments</h4>

            <!-- <PostComment comment={props.post.userComments[0].body} /> -->
        </div>
        <div class="space-y-2 mt-3 text-white">
            <h4 class="text-lg  font-semibold">Related posts</h4>
            <!-- <RelatedPosts tag={props.post.tag} /> -->
        </div>
    </div>
</div>