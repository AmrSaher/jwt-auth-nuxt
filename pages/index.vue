<template>
    <div class="Main">
        <h1>Home page</h1>
        <button
            class="p-3 bg-sky-600 rounded-md cursor-pointer"
            @click="handleLogoutSubmit"
        >Logout</button>
        <pre>{{ authStore.user }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'

definePageMeta({
    middleware: 'auth'
})

const authStore = useAuthStore()

const handleLogoutSubmit = async () => {
    await authStore.logout()
}
</script>

<style lang="scss" scoped>
</style>