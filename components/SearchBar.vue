<script setup>

defineProps({
  placeholder: String
})
import { ref } from 'vue'

const emit = defineEmits(["search"])

const input = ref(null) 

const search = (input) => {
  emit("search", input)
}

</script>

<template>
  <div>
    <form class="flex items-center max-w-sm mx-auto">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
          </svg>
        </div>
        <input type="text" id="search" name="search"
          class="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0 border-0"
          :placeholder="placeholder" @input="search(input)" v-model="input"/>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
