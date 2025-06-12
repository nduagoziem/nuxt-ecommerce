<script setup>
import { ref } from 'vue';

definePageMeta({
    layout: "user-layout",
});

const activeComponent = ref("login"); // Default is "login"

const showRegisterComponent = () => {
    activeComponent.value = "register";
    localStorage.setItem("activeComponent", "register");
};
const showLoginComponent = () => {
    activeComponent.value = "login";
    localStorage.setItem("activeComponent", "login");
};

// Check localStorage for the previously selected component
// Incase the user refreshes or closes the browser
onMounted(
    () => {
        const savedComponent = localStorage.getItem("activeComponent");
        if (savedComponent) {
            activeComponent.value = savedComponent;
        }
    }
);
</script>

<template>
    <UserLayout>

        <Head>
            <Title>Account - {{ $config.public.appName }}</Title>
        </Head>

        <main>
            <div class="container mx-auto px-4">

                <div class="flex items-center justify-center h-124">
                    <div class="w-full max-w-sm space-y-4">
                        <div class="flex justify-around">
                            <button @click="showRegisterComponent"
                                class="px-3 py-2 hover:cursor-pointer block bg-black rounded-md text-white dark:bg-gray-900">Register</button>
                            <button @click="showLoginComponent"
                                class="px-3 py-2 hover:cursor-pointer block rounded-md text-white bg-custom-color">Login</button>
                        </div>
                        <LoginComponent v-if="activeComponent === 'login'"/>
                        <RegisterComponent v-if="activeComponent === 'register'"/>
                    </div>
                </div>
            </div>
        </main>
    </UserLayout>
</template>