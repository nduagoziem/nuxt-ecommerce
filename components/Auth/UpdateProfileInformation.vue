<script setup>
import { useCustomerInfoStore } from '@/stores/customerInfo';

const { customerInfo } = useCustomerInfoStore();

const submit = () => {
    alert("This feature will soon be available.")
}

</script>

<template>
    <div class="flex justify-center items-center">
        <div class="w-full max-w-2xl">
            <!-- Profile Information Form -->
            <h2 class="text-[22px] font-medium mb-6 text-center dark:text-gray-400">Profile Information</h2>

            <form class="max-w-md mx-auto" @submit.prevent="submit">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="name" name="floating_name" id="floating_name" v-model="customerInfo.name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                        placeholder=" " required />
                    <label for="floating_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" v-model="customerInfo.email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8047e5] focus:outline-none focus:ring-0 focus:border-[#8047e5] peer"
                        placeholder=" " required />
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8047e5] peer-focus:dark:text-[#8047e5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <button type="submit"
                    class="text-white hover:cursor-pointer bg-[#8047e5] hover:bg-[#6f3ccf] uppercase focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-[#8047e5] dark:hover:bg-[#6f3ccf] dark:focus:ring-[#8047e5]">Update</button>
            </form>

        </div>

    </div>
</template>