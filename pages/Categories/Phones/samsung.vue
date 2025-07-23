<script setup>
definePageMeta({
    layout: "user-layout",
});
import { ref } from 'vue';

const config = useRuntimeConfig();

const brandName = "samsung";

const response = ref(null);

const { data } = await useFetch(`${config.public.apiBase}/phones?brand=${brandName}&fields[]=name&fields[]=price&fields[]=brand`);

// Initial Page Load
response.value = data.value

// Pagination Request
const paginationRequest = async (url) => {
    const data = await $fetch(url)
    return response.value = data
}

// Search Request
const searchRequest = async (input) => {
  const data = await $fetch(`${config.public.apiBase}/phones?brand=${brandName}&search=${input}`, {method: "GET"})
  return response.value = data
}

</script>

<template>
    <UserLayout>

        <Head>
            <Title>Samsung Phones - {{ $config.public.appName }}</Title>
        </Head>

        <main class="dark:text-gray-400">
            <div class="container mx-auto px-4">
                <SearchBar class="mt-5 mb-6" :placeholder="'Search Samsung Phones...'" @search="searchRequest"/>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
                    <div class="w-full flex flex-col" v-for="data in response.data" :key="data.hashid">
                        <a :href="`/categories/phones/${data.brand}/${data.hashid}`">
                            <div
                                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                <img :src="data.media[0].url" :alt="data.name" class="object-cover w-full h-full" />
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
                <div class="flex justify-center pt-52 md:pt-3 mt-5">
                    <Pagination :links="response.links" :meta="response.meta" @fetch="paginationRequest" />
                </div>
            </div>
        </main>
    </UserLayout>
</template>