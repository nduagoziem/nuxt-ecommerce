<script setup>
import SearchBar from "@/components/SearchBar.vue";

definePageMeta({
  layout: "user-layout",
});
</script>

<template>
  <UserLayout>

    <Head>
      <Title>Phones - {{ $config.public.appName }}</Title>
    </Head>

    <main class="dark:text-gray-400">
      <div class="container mx-auto px-4">
        <SearchBar class="mt-5 mb-6" />
        <h1 class="mb-10 text-center font-semibold uppercase dark:text-white">
          Shop Premium Smartphones
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4 mb-4">
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://etimg.etb2bimg.com/photo/105760349.cms" alt="" class="object-cover w-full h-full" />
            </div>

            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Brand New Tecno Camon 76 Pro
              </p>
              <p class="text-left font-semibold break-words">$45,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <NuxtLink to="/about">
              <div
                class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
                <img
                  src="https://www.zdnet.com/a/img/resize/2cae804ad54ac6b07834f97596dabdb6c62078e5/2022/10/23/28abbdfa-a8a0-471f-954b-f76112154543/apple-ipad-10th-gen-display.jpg?auto=webp&width=1280"
                  alt="" class="object-cover w-full h-full" />
              </div>
            </NuxtLink>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">iPad 40 Pro</p>
              <p class="text-left font-semibold break-words">$75,0000</p>
            </details>
          </div>

          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/2024/03/25/1951a828-d232-4abf-89a9-9364dc560502/20240325121331-292a5026.jpg"
                alt="" class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Digital HD Camera
              </p>
              <p class="text-left font-semibold break-words">$25,0000</p>
            </details>
          </div>
          <div class="w-full flex flex-col">
            <div
              class="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-gray-100 rounded overflow-hidden">
              <img src="https://www.nairaland.com/attachments/9383290_11_jpegf7f163af78812e58c4d3c47b4e396ae6" alt=""
                class="object-cover w-full h-full" />
            </div>
            <details class="hover:cursor-pointer">
              <p class="text-left font-semibold break-words">
                Apple iWatch Pro
              </p>
              <p class="text-left font-semibold break-words">$37,0000</p>
            </details>
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <Pagination />
        </div>
      </div>
    </main>
  </UserLayout>
</template>

<style scoped></style>
