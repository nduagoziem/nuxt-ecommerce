<script setup>
import SearchBar from "@/components/SearchBar.vue";

definePageMeta({
    layout: "user-layout",
});

const config = useRuntimeConfig();
const { data: response } = await useFetch(`${config.public.apiBase}/accessories?fields[]=name&fields[]=price`);
</script>

<template>
    <UserLayout>

        <Head>
            <Title>Tech Accessories - {{ $config.public.appName }}</Title>
        </Head>

        <main class="dark:text-gray-400">
            <div class="container mx-auto px-4">
                <SearchBar class="mt-5 mb-6" :placeholder="'Looking for an accessory...'" />
                <h1 class="mb-10 text-center font-semibold dark:text-white">
                    SHOP PREMIUM TECH ACCESSORIES
                </h1>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
                    <div class="w-full flex flex-col" v-for="data in response.data" :key="data.hashid">
                        <a :href="`/categories/accessories/${data.hashid}`">
                            <div
                                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                <img :src="data.media[0].url" class="object-cover w-full h-full" />
                            </div>

                        </a>
                        <details class="hover:cursor-pointer">
                            <p class="text-left font-semibold break-words">
                                {{ data.name }}
                            </p>
                            <p class="text-left font-semibold break-words">₦{{ data.price }}</p>
                        </details>
                    </div>

                </div>
                <div class="flex justify-center mt-5 py-3">
                    <Pagination />
                </div>
            </div>
        </main>
    </UserLayout>
</template>

<style scoped></style>
