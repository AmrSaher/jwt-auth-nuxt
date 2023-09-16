export const useApi = (url, options) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers,
    }
    
    const { BASE_URL } = useRuntimeConfig().public

    return useFetch(BASE_URL + url, {
        watch: false,
        ...options,
        headers,
    })
}