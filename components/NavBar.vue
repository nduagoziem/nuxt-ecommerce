<script setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite'

// if (import.meta.client) {
//     const btn = document.getElementById("theme-toggle")

//     btn.addEventListener("click", () => {

//         const selector = document.querySelectorAll("#root, #nav, #footer",)

//         selector.forEach(
//             (el) => {
//                 el.style.backgroundColor = "pink"
//                 el.style.color = "green"
//             }
//         )
//     })
// }

onMounted(() => {
    // Initialize Flowbite
    useFlowbite(() => {
        initFlowbite()
    })

});

</script>

<template>
    <nav class="bg-gray-200 border-gray-200 dark:bg-black" id="nav">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <ApplicationLogo />
            </NuxtLink>
            <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <!-- <button id="theme-toggle" type="button" class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <DarkThemeIcon id="theme-toggle-dark-icon" class="w-5 h-5" />
                    <LightThemeIcon id="theme-toggle-light-icon" class="hidden w-5 h-5" />
                </button> -->
                <button>
                    <CartIcon />
                </button>
                <button data-collapse-toggle="mega-menu" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-gray-400"
                    aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">

                    <!-- Menu 1 -->
                    <li>
                        <button id="mega-menu-dropdown-button-1" data-dropdown-toggle="mega-menu-dropdown-1"
                            class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                            PCs <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="mega-menu-dropdown-1"
                            class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-black">
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                    <li>
                                        <NuxtLink to="/categories/pc/apple"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Apple
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/pc/hp"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            HP
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/pc/dell"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Dell
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/pc/lenovo"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Lenovo
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <NuxtLink to="/categories/pc/asus"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            ASUS
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/pc/samsung"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Samsung
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/pc/acer"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Acer
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/pc/msi"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            MSI
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <ul class="space-y-4">
                                    <li>
                                        <NuxtLink to="/categories/pc/chromebook"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Chromebook
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">

                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- Menu 2-->
                    <li>
                        <button id="mega-menu-dropdown-button-2" data-dropdown-toggle="mega-menu-dropdown-2"
                            class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                            Phones <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="mega-menu-dropdown-2"
                            class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-black">
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button-2">
                                    <li>
                                        <NuxtLink to="/categories/phones/samsung"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Samsung
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/ios"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            iOS
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/tecno"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Tecno
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/itel"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            itel
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <NuxtLink to="/categories/phones/infinix"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Infinix
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/redmi"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Redmi
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/huawei"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Huawei
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/vivo"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Vivo
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <ul class="space-y-4">
                                    <li>
                                        <NuxtLink to="/categories/phones/oppo"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Oppo
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">

                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/phones/nokia"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Nokia
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- Menu 3 -->
                    <li>
                        <button id="mega-menu-dropdown-button-3" data-dropdown-toggle="mega-menu-dropdown-3"
                            class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                            Tablets <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="mega-menu-dropdown-3"
                            class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-black">
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button-3">
                                    <li>
                                        <NuxtLink to="/categories/tablets/ipad"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            iPad
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/tablets/samsung"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Samsung Tablets
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/tablets/acer"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Acer Tablets
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/tablets/dell"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Dell Tablets
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <NuxtLink to="/categories/tablets/infinix"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Infinix Tablets
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/tablets/hp"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            HP Tablets
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/categories/tablets/google-tablets"
                                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Google Tablets
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- Menu 4 -->
                    <li>
                        <NuxtLink to="/categories/accessories"
                            class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                            Accessories</NuxtLink>
                    </li>

                    <!-- Menu 4 -->
                    <li>
                        <NuxtLink to="/account"
                            class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                            Login</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
