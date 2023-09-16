import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin({
    name: 'get-user',
    parallel: true,
    async setup (nuxtApp) { 
     const authStore = useAuthStore()
     await authStore.getUser()
    },
})