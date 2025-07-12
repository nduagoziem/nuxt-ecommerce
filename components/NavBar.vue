<script setup>
import { onMounted, ref } from 'vue'
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

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
};


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
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <ApplicationLogo />
            </a>
            <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <!-- <button id="theme-toggle" type="button" class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <DarkThemeIcon id="theme-toggle-dark-icon" class="w-5 h-5" />
                    <LightThemeIcon id="theme-toggle-light-icon" class="hidden w-5 h-5" />
                </button> -->
                <button>
                    <CartIcon class="hover:cursor-pointer" />
                </button>
                <button data-collapse-toggle="mega-menu" type="button" @click="toggleMenu"
                    class="inline-flex items-center focus:outline-none p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-gray-400"
                    aria-controls="mega-menu" :aria-expanded="isMenuOpen">
                    <span class="sr-only">Open main menu</span>
                    <svg v-if="!isMenuOpen" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                    <CloseIcon v-if="isMenuOpen" />
                </button>
            </div>

            <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">

                    <!-- Menu 1 -->
                    <li>
                        <button id="mega-menu-dropdown-button-1" data-dropdown-toggle="mega-menu-dropdown-1"
                            class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8047e5] md:p-0 dark:text-white md:dark:hover:text-[#8047e5] dark:hover:bg-gray-700 dark:hover:text-[#8047e5] md:dark:hover:bg-transparent dark:border-gray-700">
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
                                        <a href="/categories/pc/apple"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Apple
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/pc/hp"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            HP
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/pc/dell"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Dell
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/pc/lenovo"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Lenovo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <a href="/categories/pc/asus"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            ASUS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/pc/samsung"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Samsung
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/pc/acer"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Acer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/pc/msi"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            MSI
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <ul class="space-y-4">
                                    <li>
                                        <a href="/categories/pc/chromebook"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Chromebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- Menu 2-->
                    <li>
                        <button id="mega-menu-dropdown-button-2" data-dropdown-toggle="mega-menu-dropdown-2"
                            class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8047e5] md:p-0 dark:text-white md:dark:hover:text-[#8047e5] dark:hover:bg-gray-700 dark:hover:text-[#8047e5] md:dark:hover:bg-transparent dark:border-gray-700">
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
                                        <a href="/categories/phones/samsung"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Samsung
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/ios"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            iOS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/tecno"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Tecno
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/itel"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            itel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <a href="/categories/phones/infinix"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Infinix
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/redmi"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Redmi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/huawei"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Huawei
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/vivo"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Vivo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <ul class="space-y-4">
                                    <li>
                                        <a href="/categories/phones/oppo"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Oppo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/phones/nokia"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Nokia
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- Menu 3 -->
                    <li>
                        <button id="mega-menu-dropdown-button-3" data-dropdown-toggle="mega-menu-dropdown-3"
                            class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8047e5] md:p-0 dark:text-white md:dark:hover:text-[#8047e5] dark:hover:bg-gray-700 dark:hover:text-[#8047e5] md:dark:hover:bg-transparent dark:border-gray-700">
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
                                        <a href="/categories/tablets/ipad"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            iPad
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/tablets/samsung"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Samsung Tablets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/tablets/acer"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Acer Tablets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/tablets/dell"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Dell Tablets
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <a href="/categories/tablets/infinix"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            Infinix Tablets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/categories/tablets/hp"
                                            class="text-gray-500 dark:text-gray-400 hover:text-[#8047e5] dark:hover:text-[#8047e5]">
                                            HP Tablets
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- Menu 4 -->
                    <li>
                        <a href="/categories/accessories"
                            class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8047e5] md:p-0 dark:text-white md:dark:hover:text-[#8047e5] dark:hover:bg-gray-700 dark:hover:text-[#8047e5] md:dark:hover:bg-transparent dark:border-gray-700">
                            Accessories</a>
                    </li>

                    <!-- Menu 4 -->
                    <li>
                        <a href="/account"
                            class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8047e5] md:p-0 dark:text-white md:dark:hover:text-[#8047e5] dark:hover:bg-gray-700 dark:hover:text-[#8047e5] md:dark:hover:bg-transparent dark:border-gray-700">
                            Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
