export default defineNuxtRouteMiddleware((to, from) => {
    const jwt = useCookie('jwt')

    if (!jwt.value) return navigateTo('/login')
})