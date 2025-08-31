<script setup>
import UpdatePassword from '../components/Auth/UpdatePassword.vue';
import auth from '../middleware/auth';
import { useFetch, useRuntimeConfig } from 'nuxt/app';
import UpdateProfileInformation from '../components/Auth/UpdateProfileInformation.vue';

definePageMeta({
    layout: "user-layout",
    middleware: auth,
})

const config = useRuntimeConfig();

const { data: customerData } = await useFetch("/customer", {
    baseURL: config.public.apiAuth,
    method: 'GET',
    lazy: true,
    server: false,
    headers: {
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
    },
    credentials: 'include',
});

const customer = computed(() => customerData.value?.message);

</script>

<template>
    <UserLayout>

        <Head>
            <Title>Profile - {{ $config.public.appName }}</Title>
        </Head>
        <div class="container">
            <UpdateProfileInformation class="mt-6" :name="customer?.name" :email="customer?.email" />
            <UpdatePassword class="mt-6" />
        </div>
    </UserLayout>
</template>