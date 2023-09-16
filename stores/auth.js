import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)
    const isLoggedIn = ref(false)

    const getJWTToken = () => token.value ?? useCookie('jwt').value

    // Cache JWT token as state in store and as a cookie
    const cacheJWTToken = (jwt) => {
        token.value = jwt
        jwt = useCookie('jwt')
        jwt.value = token.value
    }

    // Fetch user data with JWT token
    const getUser = async () => {
        try {
            const { data } = await useApi('/api/user', {
                headers: {
                    Authorization: `Bearer ${getJWTToken()}`,
                },
            })

            user.value = data.value
            isLoggedIn.value = true
        } catch(e) {
            const jwt = useCookie('jwt')
            jwt.value = null
            user.value = null
            token.value = null
            isLoggedIn.value = false
        }
    }

    const login = async (payload) => {
        const { data } = await useApi('/api/login', {
            method: 'post',
            body: payload,
        })

        cacheJWTToken(data.value.access_token)
        navigateTo('/')

        await getUser()
    }

    const register = async (payload) => {
        const { data } = await useApi('/api/register', {
            method: 'post',
            body: payload,
        })

        cacheJWTToken(data.value.access_token)
        navigateTo('/')

        await getUser()
    }

    const logout = async () => {
        await useApi('/api/logout', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${getJWTToken()}`,
            },
        })

        const jwt = useCookie('jwt')
        jwt.value = null
        token.value = null
        isLoggedIn.value = false

        navigateTo('/login')
    }

    return {
        user,
        token,
        login,
        getUser,
        register,
        logout,
    }
})