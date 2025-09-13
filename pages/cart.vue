<script setup>
definePageMeta({
    layout: 'user-layout'
});

import { ref, onBeforeMount } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const { isAuthenticated } = useAuthStore();
const response = ref();
const total = ref();
const inputQuantity = ref(Number);

onBeforeMount(
    async () => {
        try {
            const res = await $fetch("/cart/show", {
                credentials: "include",
                baseURL: config.public.apiAuth,
                method: "GET",
            });
            response.value = res;
            inputQuantity.value = response.value?.data[0].quantity;
        } catch (err) {
            console.log(err, "Something went wrong");
        }
    }
)

// Fetch total from server
onBeforeMount(
    async () => {
        try {
            const res = await $fetch("/cart/total", {
                credentials: "include",
                baseURL: config.public.apiAuth,
                method: "GET",
            })
            total.value = res.message;
        } catch (err) {
            console.log(err, "Something went wrong");
        }
    }
)

const updateItemQuantity = async () => {
    try {
        await $fetch("/cart/update", {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            baseURL: config.public.apiAuth,
            body: {
                name: response.value?.data[0]?.name,
                productId: response.value?.data[0].product_id,
                quantity: inputQuantity.value,
            },
            method: "PATCH",
        })

    } catch (err) {
        console.log(err, "Something went wrong");
    }

}

const removeItemFromCart = async () => {
    try {
        await $fetch("/cart/remove", {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            baseURL: config.public.apiAuth,
            body: {
                name: response.value?.data[0]?.name,
                productId: response.value?.data[0].product_id
            },
            method: "POST",
        })
    } catch (err) {
        console.log(err, "Something went wrong");
    }
}

</script>

<template>
    <UserLayout>

        <Head>
            <Title> Cart - {{ $config.public.appName }}
            </Title>
        </Head>

        <h1 class="text-2xl text-center uppercase mt-10 dark:text-white text-pretty font-medium">Shopping Cart</h1>

        <main class="dark:text-white">
            <div class="flex flex-col md:flex-row gap-8 mt-8">
                <!-- Cart Items Section -->
                <section class="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 class="text-xl text-center font-semibold mb-4">Items in your cart</h2>
                    <!-- Example cart item -->
                    <div v-for="item in response?.data" :key="item.id"
                        class="flex items-center justify-between py-4 border-b last:border-b-0">
                        <div class="flex items-center gap-4">
                            <img :src="item.image_path" :alt="item.name" class="w-24 h-24 object-cover rounded" />
                            <div>
                                <p class="font-medium">{{ item.name }}</p>
                                <p class="font-light">In-Stock: {{ item.in_stock }}</p>
                                <div class="max-w-sm mx-auto">
                                    <select @change="updateItemQuantity" id="in_stock"
                                        v-model="inputQuantity"
                                        class="bg-gray-50 border md:min-md: min-w-s border-gray-300 text-gray-900 text-sm rounded-md block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                                        <option selected disabled>Select Quantity</option>
                                        <option  v-for="number in item.in_stock" :key="number" :value="number">{{ number
                                            }}</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div class="flex flex-col items-end">
                            <span class="font-semibold">₦{{ (item.price * inputQuantity).toFixed(2) }}</span>
                            <button @click="removeItemFromCart"
                                class="text-red-500 text-xs mt-2 hover:underline">Remove</button>
                        </div>
                    </div>
                    <div v-if="!response || response.data < 1" class="text-center text-gray-500 py-8">Your cart is
                        empty.</div>
                    <NuxtLink v-if="!isAuthenticated.customer" to="/login">
                        <div class="text-center text-gray-500 py-8">Please Login</div>
                    </NuxtLink>
                </section>

                <!-- Cart Summary Section -->
                <aside class="w-full md:w-80 bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 h-fit">
                    <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₦0.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₦0.00</span>
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="font-semibold">Estimated Total</span>
                        <span v-if="isAuthenticated.customer" class="font-semibold">₦{{ total }}</span>
                        <span v-else class="font-semibold">₦0.00</span>
                    </div>
                    <button
                        class="w-full bg-[#8047e5] text-white py-2 rounded hover:cursor-pointer hover:bg-[#6f3ccf] transition">Proceed
                        to
                        Checkout</button>
                </aside>
            </div>

        </main>
    </UserLayout>
</template>