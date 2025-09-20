<script setup>
import auth from '@/middleware/auth';
import UpdatePassword from '@/components/Auth/UpdatePassword.vue';
import UpdateProfileInformation from '@/components/Auth/UpdateProfileInformation.vue';

definePageMeta({
    layout: "user-layout",
    middleware: auth,
})

</script>

<template>
    <UserLayout>

        <Head>
            <Title>Profile - {{ $config.public.appName }}</Title>
        </Head>
        <div class="container">
            <UpdateProfileInformation class="mt-6" />
            <UpdatePassword class="mt-6" />
        </div>
    </UserLayout>
</template>