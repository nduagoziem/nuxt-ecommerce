<script setup>

</script>

<template>
    <div class="relative">
        <input type="email" name="email" id="email" placeholder="Email"
            class="block w-full px-4 py-2 rounded focus:outline-none focus:ring-0 focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <EnvelopeIcon />
        </span>
    </div>
    <div class="relative">
        <input type="password" name="password" id="password" placeholder="Password"
            class="block w-full px-4 py-2 rounded focus:outline-none focus:ring-0 focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LockIcon />
        </span>
    </div>

</template>

<style scoped></style>