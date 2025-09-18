<script setup>
definePageMeta({
    layout: 'user-layout'
});

import { ref, onBeforeMount, computed, watch } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRuntimeConfig, useCookie } from 'nuxt/app';

const config = useRuntimeConfig();
const { isAuthenticated } = useAuthStore();

const response = ref(null);
const total = ref(0);
const inputQuantity = ref([]); // array of quantities, one per item

onBeforeMount(async () => {
    try {
        const res = await $fetch("/cart/show", {
            credentials: "include",
            baseURL: config.public.apiAuth,
            method: "GET",
        });

        response.value = res;

        // Make an array of quantities aligned with response.value.data index
        const rr = inputQuantity.value = (res.data || []).map(item => Number(item.quantity ?? 0));
    } catch (err) {
        console.log(err, "Something went wrong fetching cart");
    }

    try {
        const resTotal = await $fetch("/cart/total", {
            credentials: "include",
            baseURL: config.public.apiAuth,
            method: "GET",
        });
        total.value = resTotal.message ?? 0;
    } catch (err) {
        console.log(err, "Something went wrong fetching total");
    }
});

const updateItemQuantity = async (item, idx) => {
    try {
        const quantity = Number(inputQuantity.value[idx] ?? item.quantity);
        await $fetch("/cart/update", {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            baseURL: config.public.apiAuth,
            body: {
                name: item.name,
                productId: item.product_id,
                quantity: quantity,
            },
            method: "PATCH",
        });

        // Update local item.quantity if server returns updated item
        if (response.value?.data && response.value.data[idx]) {
            response.value.data[idx].quantity = quantity;
        }

        // Update estimated total immediately a customer changes the quantity of an item
        try {
            const resTotal = await $fetch("/cart/total", {
                credentials: "include",
                baseURL: config.public.apiAuth,
                method: "GET",
            });
            total.value = resTotal.message ?? 0;
        } catch (err) {
            console.log(err, "Something went wrong fetching total");
        }


    } catch (err) {
        console.log(err, "Something went wrong updating item quantity");
    }
};

const removeItemFromCart = async (item, idx) => {
    try {
        const name = item.name;
        const productId = item.product_id
        await $fetch("/cart/remove", {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            baseURL: config.public.apiAuth,
            body: {
                name: name,
                productId: productId
            },
            method: "POST",
        })

        // Remove the deleted item locally with refreshing for better UX
        response.value.data.splice(idx, 1)
        // return response.value.data
    } catch (err) {
        console.log(err, "Something went wrong");
    }

    // Update estimated total immediately a customer removes an item
    try {
        const resTotal = await $fetch("/cart/total", {
            credentials: "include",
            baseURL: config.public.apiAuth,
            method: "GET",
        });
        total.value = resTotal.message ?? 0;
    } catch (err) {
        console.log(err, "Something went wrong fetching total");
    }

}

// Helper: format numbers with commas
function formatNumber(n) {
    if (n === null || n === undefined || Number.isNaN(Number(n))) return '0';
    return Number(n).toLocaleString(); // e.g. 2,000
}
// Helper: format with naira sign
function formatNaira(n) {
    return `₦${formatNumber(n)}`;
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
                    <div v-for="(item, idx) in response?.data" :key="item.id"
                        class="flex items-center justify-between py-4 border-b last:border-b-0">
                        <div class="flex items-center gap-4">
                            <img :src="item.image_path" :alt="item.name" class="w-24 h-24 object-cover rounded" />
                            <div>
                                <p class="font-medium">{{ item.name }}</p>
                                <p class="font-light">In-Stock: {{ item.in_stock }}</p>
                                <div class="max-w-sm mx-auto">
                                    <select v-model.number="inputQuantity[idx]"
                                        @change="() => updateItemQuantity(item, idx)"
                                        class="bg-gray-50 border md:min-md: min-w-s border-gray-300 text-gray-900 text-sm rounded-md block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                                        <option disabled value="">Select Quantity</option>
                                        <option v-for="number in item.in_stock" :value="number" :key="number">{{ number
                                            }}</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div class="flex flex-col items-end">
                            <span class="font-semibold">{{ formatNaira(item.price * item.quantity) }}</span>
                            <button @click="removeItemFromCart(item, idx)"
                                class="text-red-500 text-xs mt-2 hover:cursor-pointer">Remove</button>
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
                        <span>₦0</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₦0</span>
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="font-semibold">Estimated Total</span>
                        <span v-if="isAuthenticated.customer" class="font-semibold">{{ formatNaira(total)
                            }}</span>
                        <span v-else class="font-semibold">₦0</span>
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