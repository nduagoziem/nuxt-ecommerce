<script setup>
definePageMeta({
    layout: 'user-layout'
});
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
        </section>``

        <section class="pb-8 dark:text-gray-400">
            <div class="mx-auto px-4">
                <h2 class="text-center font-bold mt-4 mb-7 md:mt-0">TRENDING GADGETS</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
                    <div class="w-full flex flex-col">
                        <div
                            class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-80 xl:h-80 bg-gray-100 rounded overflow-hidden">
                            <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt=""
                                class="object-cover w-full h-full" />
                        </div>

                        <details class="pb-4 hover:cursor-pointer">
                            <p class="text-left font-semibold">Brand New Tecno Camon 76 Pro</p>
                            <p class="text-left font-semibold">$45,0000</p>
                        </details>

                    </div>
                    <div class="w-full flex flex-col">
                        <NuxtLink to="/about">
                            <div
                                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-80 xl:h-80 bg-gray-100 rounded overflow-hidden">
                                <img src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                                    alt="" class="object-cover w-full h-full" />
                            </div>

                        </NuxtLink>
                        <details class="pb-4 hover:cursor-pointer">
                            <p class="text-left font-semibold">iPad 40 Pro</p>
                            <p class="text-left font-semibold">$75,0000</p>
                        </details>
                    </div>

                    <div class="w-full flex flex-col">
                        <div
                            class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-80 xl:h-80 bg-gray-100 rounded overflow-hidden">
                            <img src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                                alt="" class="object-cover w-full h-full" />
                        </div>
                        <details class="pb-4 hover:cursor-pointer">
                            <p class="text-left font-semibold">Digital HD Camera</p>
                            <p class="text-left font-semibold">$25,0000</p>
                        </details>
                    </div>
                    <div class="w-full flex flex-col">
                        <div
                            class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-80 xl:h-80 bg-gray-100 rounded overflow-hidden">
                            <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6"
                                alt="" class="object-cover w-full h-full" />
                        </div>
                        <details class="pb-4 hover:cursor-pointer">
                            <p class="text-left font-semibold">Apple iWatch Pro</p>
                            <p class="text-left font-semibold">$37,0000</p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    </UserLayout>
</template>


<style scoped></style>