<script setup>

</script>

<template>
    <!-- Normal Footer -->
    <UserLayout>
        <footer class="bg-white dark:bg-black">
            <div class="mx-auto w-full max-w-screen-xl">
                <!-- <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4"> -->
                <div class="flex justify-between lg:justify-evenly px-4 py-6 lg:py-8">

                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class=" hover:underline">About</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Blog</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Products</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">FAQ</NuxtLink>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Instagram</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">X</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Facebook</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Contact Us</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Privacy Policy
                                </NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Licensing</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink :to="$config.public.appURL" class="hover:underline">Terms &amp; Conditions
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-4 py-6 bg-gray-100 dark:bg-black md:flex md:items-center md:justify-between">
                    <span class="dark:text-gray-300 sm:text-center">&copy; {{ new
                        Date().getFullYear() }} <NuxtLink to="https://flowbite.com/">Gadgets Hub™</NuxtLink>. All
                        Rights
                        Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <GPayIcon class="w-12 h-12 hover:cursor-pointer" />
                        <MasterCardIcon class="w-12 h-12 hover:cursor-pointer" />
                        <VisaIcon class="w-12 h-12 hover:cursor-pointer" />
                        <StripeIcon class="w-12 h-12 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    </UserLayout>
</template>

<style scoped></style>