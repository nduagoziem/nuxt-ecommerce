<script setup>
definePageMeta({
    layout: "user-layout",
});

</script>

<template>
    <UserLayout>

        <Head>
            <Title>Infinix Phones - {{ $config.public.appName }}</Title>
        </Head>

        <main>
            <div class="container mx-auto px-4">
                <SearchBar class="mt-5 mb-6" :placeholder="'Search Infinix Phones...'" />
            </div>
        </main>
    </UserLayout>
</template>