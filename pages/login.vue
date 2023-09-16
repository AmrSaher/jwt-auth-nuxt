<template>
    <div class="Login text-center">
        <h1 class="text-[30px] font-bold mb-5">Login page</h1>
        <form class="max-w-[300px] m-auto w-full" @submit.prevent="handleLoginSubmit">
            <div class="flex flex-col w-full gap-1 text-left mb-3">
                <label for="email" class="text-sm">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    class="p-2 rounded outline-none bg-slate-700"
                    v-model="formData.email"
                >
            </div>
            <div class="flex flex-col w-full gap-1 text-left mb-3">
                <label for="password" class="text-sm">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    class="p-2 rounded outline-none bg-slate-700"
                    v-model="formData.password"
                >
            </div>
            <input
                type="submit"
                value="Login"
                class="w-full p-3 bg-sky-600 rounded-md cursor-pointer"
            >
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'

definePageMeta({
    middleware: 'guest'
})

const authStore = useAuthStore()
const formData = ref({
    email: '',
    password: '',
})

const handleLoginSubmit = async () => {
    await authStore.login(formData.value)
}
</script>