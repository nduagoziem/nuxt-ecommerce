<script setup>
const props =  defineProps({
    description: String
})
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
        <button
            @click="isOpen = !isOpen"
            class="flex justify-between w-full mt-6 py-2 uppercase px-4 dark:text-gray-400 cursor-pointer font-semibold rounded border-t border-gray-400 dark:border-gray-800"
            :class="isOpen ? 'border-b-0' : 'border-b'"
            :aria-expanded="isOpen.toString()"
            aria-controls="collapseExample"
        >
            <span>Description</span>
            <span :class="['transition-transform duration-300', isOpen ? 'rotate-180' : 'rotate-0']">
                <PlusIcon v-if="!isOpen" />
                <MinusIcon v-else />
            </span>
        </button>
    <div id="collapseExample" class="transition-all border-b border-gray-400 dark:border-gray-800 duration-300 overflow-hidden"
        :class="isOpen ? 'opacity-100' : 'max-h-0 opacity-0'">
        <div class="dark:bg-transparent rounded shadow p-4 mt-2" v-html="props.description">
        
        </div>
    </div>
</template>
