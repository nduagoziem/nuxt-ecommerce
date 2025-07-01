<script setup>
definePageMeta({
    layout: 'user-layout'
});

const config = useRuntimeConfig();

const { data } = await useFetch(`${config.public.apiBase}/accessories?per_page=4`)
</script>

<template>
    <UserLayout>

        <Head>
            <Title>{{ $config.public.appName }}</Title>
            <Meta name="description"
                content="Home of premium digital devices and accessories. Explore innovation at its peak with Gadgets Hub" />
        </Head>

        <header class="flex flex-col justify-start space-x-0 space-y-0 md:flex-row">
            <div class="relative flex align-center justify-center w-screen space-x-0">
                <div class="">
                    <img src="https://i.pcmag.com/imagery/reviews/04zMbMnUoRseZs38ofIvFUe-1.jpg"
                        class="w-screen hidden md:block" alt="Macbook Pro">
                </div>
            </div>
            <div class="relative flex align-center justify-center w-screen space-x-0">
                <img src="https://www.ungeek.ph/wp-content/uploads/2020/08/asus_rog_strix_prebuilt_desktop_pc_image1-jpg.webp"
                    class="w-screen" alt="Gaming Accessories Setup">
            </div>
        </header>

        <section class="h-64 dark:text-gray-200">
            <div class="container">
                <h1 class="font-bold text-center pt-16 w-full">ELEVATE YOUR DIGITAL LIFESTYLE TODAY</h1>
                <p class="font-semibold text-center mt-7">UNLOCK THE FUTURE OF INNOVATION WITH OUR PREMIUM GADGETS
                    AND TECH ACCESSORIES</p>
                <div class="flex justify-center mt-7">
                    <NuxtLink to="/categories"> <button
                            class="bg-custom-color text-white font-bold px-3 py-2 rounded-md hover:cursor-pointer">SHOP
                            NOW</button>
                    </NuxtLink>

                </div>
            </div>
        </section>

        <section class="pb-8 dark:text-gray-400">
            <div class="mx-auto px-4">
                <h2 class="text-center font-bold mt-4 mb-7 md:mt-0">FEATURED GADGETS</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
                    <div class="w-full flex flex-col" v-for="data in data.data" :key="data.id">
                        <div
                            class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-80 xl:h-80 bg-gray-100 rounded overflow-hidden">
                            <img :src="Array.isArray(data.accessories_images) ? data.accessories_images[0] : []"
                                :alt="data.name" class="object-cover w-full h-full" />
                        </div>

                        <details class="pb-4 hover:cursor-pointer">
                            <p class="text-left font-semibold">{{ data.name }}</p>
                            <p class="text-left font-semibold">₦{{ data.price }}</p>
                        </details>

                    </div>
                </div>
            </div>
        </section>
    </UserLayout>
</template>
