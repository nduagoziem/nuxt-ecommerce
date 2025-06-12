<script setup>
definePageMeta({
    layout: "user-layout",
});

</script>

<template>
    <UserLayout>

        <Head>
            <Title>MSI Computers - {{ $config.public.appName }}</Title>
        </Head>

        <main>
            <div class="container mx-auto px-4">
                <SearchBar class="mt-5 mb-6" :placeholder="'Search MSI Computers...'" />
            </div>
        </main>
    </UserLayout>
</template>