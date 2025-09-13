<script setup>
import { useFetch, useRuntimeConfig } from 'nuxt/app';
import { useRoute } from 'vue-router';

definePageMeta({
    layout: 'user-layout'
});

const route = useRoute()
const config = useRuntimeConfig()

const { data: response } = useFetch(`${config.public.apiBase}/phones?hashid=${route.params.id}`);

const { isAuthenticated } = useAuthStore();

const addToCart = async () => {
    if (!isAuthenticated.customer) {
        alert("Please Login or create an account");
        return;
    }

    try {
        const res = await $fetch("/cart/add", {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            baseURL: config.public.apiAuth,
            method: "POST",
            body: { productId: response.value?.data?.[0].id, name: response.value?.data?.[0].name, imagePath: response.value?.data?.[0].media[0]?.url },
        })
        if (res.success) {
            alert(res.message)
        }
        else alert(res.error)
    } catch (err) {
        console.log(err, "Something went wrong");
    }
}

</script>

<template>
    <UserLayout>

        <Head>
            <Title>{{ response.data[0].name }}</Title>
        </Head>

        <main class="dark:text-gray-400">
            <div class="container p-7">
                <div class="flex flex-col md:flex-row md:space-x-16 md:space-y-0 space-y-4"
                    v-for="data in response.data" :key="data.hashid">
                    <section class="md:w-140 md:h-140 flex-shrink-0">
                        <img :src="data.media[0]" :alt="data.name" class="object-cover h-full w-full" />
                    </section>

                    <section class="flex-1 min-w-0">
                        <h1
                            class="mb-3 font-bold text-pretty text-2xl uppercase break-words whitespace-normal overflow-visible">
                            {{ data.name }}</h1>
                        <p class="font-bold text-xl text-pretty">₦{{ data.price }}</p>
                        <AddToCartBtn @click="addToCart"/>

                        <ToggleDescription :description="data.description" />

                        <div class="grid grid-cols-2 gap-8 mt-6">
                            <div class="w-full flex flex-col" v-for="img in data.media.slice(1, 5)" :key="img.id">
                                <div class="flex items-center justify-center w-40 h-40 md:w-58 md:h-46
                                bg-gray-100 rounded overflow-hidden">
                                    <img :src="img.url" :alt="data.name" class="object-cover w-full h-full" />
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    </UserLayout>
</template>
