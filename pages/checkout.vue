<script setup>
definePageMeta({
    layout: 'user-layout',
    middleware: auth,
});

import auth from '@/middleware/auth';
import { useCustomerInfoStore } from '@/stores/customerInfo';
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount, ref } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

const { isAuthenticated } = useAuthStore();
const config = useRuntimeConfig();
const total = ref(0);

// Contact and Delivery Info
const { customerInfo } = useCustomerInfoStore();
const phoneNumber = ref();
const country = ref('Nigeria');
const firstName = ref();
const lastName = ref();
const address = ref();
const apartment_name = ref();
const state = ref();
const city = ref();
const postalCode = ref();

onBeforeMount(
    async () => {
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
)

// Helper: format numbers with commas
function formatNumber(n) {
    if (n === null || n === undefined || Number.isNaN(Number(n))) return '0';
    return Number(n).toLocaleString(); // e.g. 2,000
}
// Helper: format with naira sign
function formatNaira(n) {
    return `₦${formatNumber(n)}`;
}

const payNow = async () => {
    try {
        const res = await $fetch("/customer/order", {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            baseURL: config.public.apiAuth,
            body: {
                email: customerInfo.email,
                phone_number: phoneNumber.value,
                first_name: firstName.value,
                last_name: lastName.value,
                country: country.value,
                state: state.value,
                postal_code: postalCode.value,
                apartment_name: apartment_name.value,
                city: city.value,
                address: address.value,
            },
            method: "POST",
        });
        if (res.success) {
            window.location.href = res.message.url;
        }
        else console.log(res.error)

    } catch (err) {
        console.log(err, "Something went wrong during payment");
    }

}

</script>

<template>
    <UserLayout>

        <Head>
            <Title> Checkout - {{ $config.public.appName }}
            </Title>
        </Head>

        <h1 class="text-2xl text-center uppercase mt-10 dark:text-white text-pretty font-medium">Checkout</h1>

        <main class="dark:text-white">
            <div class="grid gap-x-2 lg:grid-cols-2 md:gap-8">
                <!-- Info and Payment Section -->
                <section class="w-full mx-auto p-8 bg-white dark:bg-black rounded-lg">
                    <div class="container">

                        <!-- Contact Info -->
                        <h2 class="text-xl text-center uppercase font-semibold mb-4">Contact</h2>

                        <div class="container grid grid-cols-2 gap-8">
                            <!-- Contact via Email -->
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email"
                                    v-model="customerInfo.email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <!-- Contact via Phone Number -->
                            <div class="relative z-0 w-full mb-5 group">
                                <input type='text' name="floating_phone_number" id="floating_phone_number"
                                    v-model="phoneNumber"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " required />
                                <label for="floating_phone_number"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                    Number</label>

                            </div>
                        </div>

                        <!-- Delivery Info -->
                        <h2 class="text-xl text-center uppercase font-semibold mt-4 mb-4">Delivery</h2>

                        <!-- Country -->
                        <div class="container relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_country" id="floating_country" v-model="country"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                placeholder=" " required readonly />
                            <label for="floating_country"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country
                                / Region</label>

                        </div>

                        <!-- First Name and Last Name -->
                        <div class="container grid grid-cols-2 gap-8">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name"
                                    v-model="firstName"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " required />
                                <label for="floating_first_name"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                    Name</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" v-model="lastName"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " required />
                                <label for="floating_last_name"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                    Name</label>

                            </div>
                        </div>

                        <!-- Address -->
                        <div class="container relative z-0 w-full mb-5 group">
                            <input type="tel" name="floating_address" id="floating_address" v-model="address"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                placeholder=" " required />
                            <label for="floating_address"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>

                        </div>

                        <!-- Apartment -->
                        <div class="container relative z-0 w-full mb-5 group">
                            <input type="tel" name="floating_apartment" id="floating_apartment" v-model="apartment_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                placeholder=" " />
                            <label for="floating_apartment"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apartment,
                                suite, etc. (Optional)</label>

                        </div>

                        <!-- State, City and Postal Code -->
                        <div class="grid grid-cols-1 gap-2 container lg:grid-cols-3 lg:gap-8">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_state" id="floating_state" v-model="state"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " required />
                                <label for="floating_state"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_city" id="floating_city" v-model="city"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " required />
                                <label for="floating_city"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>

                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_postal_code" id="floating_postal_code"
                                    v-model="postalCode"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                                    placeholder=" " />
                                <label for="floating_postal_code"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:truncate peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal
                                    Code (Optional)</label>

                            </div>
                        </div>
                    </div>
                </section>
                <!-- Order Summary Section -->
                <section class="w-full mx-auto p-8 bg-white dark:bg-black rounded-lg">
                    <aside class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 h-fit">
                        <h2 class="text-xl text-center font-semibold mb-4">Order Summary</h2>
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
                        <button @click="payNow"
                            class="w-full bg-[#8047e5] text-white py-2 uppercase rounded hover:cursor-pointer hover:bg-[#6f3ccf] transition">Pay
                            Now</button>
                    </aside>

                </section>
            </div>

        </main>

    </UserLayout>
</template>