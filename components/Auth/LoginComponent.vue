<script setup>
import { ref } from 'vue';

const showPassword = ref(false);
</script>

<template>
    <div class="relative">
        <input type="email" name="email" id="email" placeholder="Email"
            class="block w-full px-4 py-2 rounded border-black focus:outline-none focus:ring-0 dark:focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10 dark:border-none dark:text-white">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <EnvelopeIcon />
        </span>
    </div>
    <div class="relative">
        <input :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="Password"
            class="block w-full px-4 py-2 rounded border-black focus:outline-none focus:ring-0 dark:focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10 dark:border-none dark:text-white">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LockIcon />
        </span>
    </div>
    <div class="flex items-center mt-2">
        <input type="checkbox" id="show-password" class="mr-2 focus:outline-none focus:ring-0 dark:focus:border-transparent"
            v-model="showPassword">
        <label for="show-password" class="text-sm select-none dark:text-white">Show Password</label>
    </div>


</template>

<style scoped></style>