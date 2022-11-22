import { useStore } from "~/store"
export default defineNuxtRouteMiddleware(async (to, from) => {
	const app = useNuxtApp()
	const { data } = await useAsyncData(
		"mountains",
		() => $fetch("https://api.nuxtjs.dev/mountains")
	)
	// console.log(data)
	const store = useStore(app.$pinia)
	const userCookie = useCookie("user").value
	if (!store.user && !userCookie || !data) {
		return navigateTo("/auth")
	}

	// return navigateTo(to.fullPath)
})
