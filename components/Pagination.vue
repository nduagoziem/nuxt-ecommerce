<script setup>

const props = defineProps({
    links: {
        type: Object,
        required: true,
    },
    meta: {
        type: Object,
        required: true,
    }
})

const emit = defineEmits(["fetch"])

const get = (link) => {
    emit("fetch", link)
}
</script>

<template>
    <div>

        <div class="flex flex-col items-center">
            <!-- Help text -->
            <span class="text-sm text-gray-700 dark:text-gray-400">
                Showing <span class="font-semibold text-gray-900 dark:text-white">{{ props.meta.current_page }}</span>
                to <span class="font-semibold text-gray-900 dark:text-white">{{ props.meta.per_page }}</span> of <span
                    class="font-semibold text-gray-900 dark:text-white">{{ props.meta.total }}</span> Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0 space-x-1">
                <!-- Links -->

                <!-- First Page -->
                <button @click="get(props.links.first)"
                    class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-800 hover:cursor-pointer bg-gray-200 rounded-s dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m17 16-4-4 4-4m-6 8-4-4 4-4" />
                    </svg>
                </button>

                <!-- Previous Page -->
                <button @click="get(props.links.prev)""
                    class=" flex items-center justify-center px-4 h-10 text-base font-medium text-gray-800 hover:cursor-pointer bg-gray-200
                    rounded-s dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                    dark:hover:text-white">
                    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Prev
                </button>

                <!-- Next Page -->
                <button @click="get(props.links.next)"
                    class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-800 hover:cursor-pointer bg-gray-200 border-0 border-gray-700 rounded-e dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>

                <!-- Last Page -->
                <button @click="get(props.links.last)"
                    class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-800 hover:cursor-pointer bg-gray-200 rounded-s dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                    </svg>
                </button>

            </div>
        </div>

    </div>
</template>