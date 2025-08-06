<script setup>
import { useCookie, useFetch } from 'nuxt/app';
import { ref } from 'vue';

const showPassword = ref(false);
const config = useRuntimeConfig();
const name = ref("Anointed Nduagoziem Osondu");
const email = ref("anduagoziem@gmail.com");
const password = ref("Agent 99");

/**
 * Fetches CSRF Token from the backend before making further requests.
 * DO NOT SKIP THIS PROCESS.
 */
await useFetch(`sanctum/csrf-cookie`, {
    credentials: "include",
    baseURL: config.public.apiAuth,
})

const register = async () => {
    try {
        const response = await $fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            credentials: 'include',
            baseURL: config.public.apiBase,
            body: { name: name.value, email: email.value, password: password.value, },
        });
        alert(response.message);
    } catch (err) {
        if (err.status === 422 && err.data && err.data.error.email) {
            alert(err.data.error.email[0]);
        } else if (err.status === 422 && err.data && err.data.error.password) {
            alert(err.data.error.password[0]);
        } else {
            "Unknown Error:", err
        }
    }
}
</script>

<template>
    <div class="relative">
        <input type="text" name="full_name" id="full_name" placeholder="Full Name" v-model="name"
            class="block w-full px-4 py-2 rounded border-black focus:outline-none focus:ring-0 dark:focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10 dark:border-none dark:text-white">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UserIcon />
        </span>
    </div>
    <div class="relative">
        <input type="email" name="email" id="email" placeholder="Email" v-model="email"
            class="block w-full px-4 py-2 rounded border-black focus:outline-none focus:ring-0 dark:focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10 dark:border-none dark:text-white">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <EnvelopeIcon />
        </span>
    </div>
    <div class="relative">
        <input :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="Password"
            v-model="password"
            class="block w-full px-4 py-2 rounded border-black focus:outline-none focus:ring-0 dark:focus:border-transparent caret-gray-400 dark:bg-gray-900 pl-10 dark:border-none dark:text-white">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LockIcon />
        </span>
    </div>
    <div class="flex items-center mt-2">
        <input type="checkbox" id="show-password"
            class="mr-2 focus:outline-none focus:ring-0 dark:focus:border-transparent" v-model="showPassword">
        <label for="show-password" class="text-sm select-none dark:text-white">Show Password</label>

        <button type="button" class="px-5 py-2 dark:bg-red-700" @click="register"></button>
    </div>


</template>

<style scoped></style>