<script setup>
definePageMeta({
    layout: "user-layout",
});

const config = useRuntimeConfig();

const brandName = "tecno" || "Tecno";

const { data: response } = await useFetch(`${config.public.apiBase}/phones?brand=${brandName}&fields[]=name&fields[]=price&fields[]=brand`);

</script>

<template>
    <UserLayout>

        <Head>
            <Title>Tecno Phones - {{ $config.public.appName }}</Title>
        </Head>

        <main class="dark:text-gray-400">
            <div class="container mx-auto px-4">
                <SearchBar class="mt-5 mb-6" :placeholder="'Search Tecno Phones...'" />

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
                    <div class="w-full flex flex-col" v-for="data in response.data" :key="data.hashid">
                        <a :href="`/categories/phones/${data.brand}/${data.hashid}`">
                            <div
                                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                <img :src="data.media[0]" :alt="data.name"
                                    class="object-cover w-full h-full" />
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