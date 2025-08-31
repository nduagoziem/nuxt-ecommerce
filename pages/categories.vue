<script setup>
definePageMeta({
    layout: "user-layout"
});

const config = useRuntimeConfig()
const { data: phoneData } = useFetch(`${config.public.apiBase}/phones?fields[]=name&fields[]=price&fields[]=brand&per_page=4`);
const { data: pcData } = useFetch(`${config.public.apiBase}/pcs?fields[]=name&fields[]=price&fields[]=brand&per_page=4`);
const { data: tabletData } = useFetch(`${config.public.apiBase}/tablets?fields[]=name&fields[]=price&fields[]=brand&per_page=4`);
const { data: accessoriesData } = useFetch(`${config.public.apiBase}/accessories?fields[]=name&fields[]=price&per_page=4`);
</script>

<template>
    <UserLayout>

        <Head>
            <Title>Product Categories - {{ $config.public.appName }}</Title>
        </Head>

        <main>
            <section class="dark:text-gray-400">
                <div class="container mx-auto pt-4">

                    <!-- Phones -->
                    <h2 class="mb-6 text-center text-xl font-semibold text-gray-900 uppercase dark:text-white">Phones
                    </h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
                        <div class="w-full flex flex-col" v-for="data in phoneData.data" :key="data.hashid">
                            <a :href="`/categories/phones/${data.brand}/${data.hashid}`">
                                <div
                                    class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                    <img :src="data.media[0].url" :alt="data.name" class="object-cover w-full h-full" />
                                </div>
                            </a>
                            <details class="hover:cursor-pointer">
                                <p class="text-left font-semibold">{{ data.name }}</p>
                                <p class="text-left font-semibold">₦{{ data.price }}</p>
                            </details>
                        </div>

                    </div>
                    <div>

                    </div>
                    <a href="/categories/phones">
                        <p class="text-center font-mono mb-5 text-pretty underline dark:text-gray-400">View All</p>
                    </a>

                    <!-- ************************************************************************************************** -->
                    <!-- Laptops -->
                    <h2 class="mb-6 text-center text-xl font-semibold text-gray-900 uppercase dark:text-white">PC
                    </h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
                        <div class="w-full flex flex-col" v-for="data in pcData.data" :key="data.hashid">
                            <a :href="`/categories/pc/${data.brand}/${data.hashid}`">
                                <div
                                    class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                    <img :src="data.media[0].url" :alt="data.name" class="object-cover w-full h-full" />
                                </div>
                            </a>

                            <details class="hover:cursor-pointer">
                                <p class="text-left font-semibold">{{ data.name }}</p>
                                <p class="text-left font-semibold">₦{{ data.price }}</p>
                            </details>

                        </div>
                    </div>
                    <a href="/categories/pc">
                        <p class="text-center mb-5 font-mono text-pretty underline dark:text-gray-400">View All</p>
                    </a>

                    <!-- *********************************************************************************************** -->
                    <!-- Tablets -->
                    <h2 class="mb-6 text-center text-xl font-semibold text-gray-900 uppercase dark:text-white">Tablets
                    </h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
                        <div class="w-full flex flex-col" v-for="data in tabletData.data" :key="data.hashid">
                            <a :href="`/categories/tablets/${data.brand}/${data.hashid}`">
                                <div
                                    class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                    <img :src="data.media[0].url" :alt="data.name" class="object-cover w-full h-full" />
                                </div>
                            </a>

                            <details class="hover:cursor-pointer">
                                <p class="text-left font-semibold">{{ data.name }}</p>
                                <p class="text-left font-semibold">₦{{ data.price }}</p>
                            </details>
                        </div>
                    </div>
                    <a href="/categories/tablets">
                        <p class="text-center font-mono mb-5 text-pretty underline dark:text-gray-400">View All</p>
                    </a>

                    <!-- **************************************************************************************************** -->
                    <!-- Accessories -->
                    <h2 class="mb-6 text-center text-xl font-semibold text-gray-900 uppercase dark:text-white">
                        Accessories
                    </h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
                        <div class="w-full flex flex-col" v-for="data in accessoriesData.data" :key="data.hashid">
                            <a :href="`/categories/accessories/${data.hashid}`">
                                <div
                                    class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                                    <img :src="data.media[0].url" :alt="data.name" class="object-cover w-full h-full" />
                                </div>
                            </a>

                            <details class="hover:cursor-pointer">
                                <p class="text-left font-semibold">{{ data.name }}</p>
                                <p class="text-left font-semibold">₦{{ data.price }}</p>
                            </details>
                        </div>
                    </div>
                    <a href="/categories/accessories">
                        <p class="text-center font-mono pb-5 text-pretty underline dark:text-gray-400">View All</p>
                    </a>
                </div>
            </section>
        </main>
    </UserLayout>
</template>

<style scoped></style>