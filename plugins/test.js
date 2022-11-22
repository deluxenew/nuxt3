export default defineNuxtPlugin((nuxtApp) => {
	if (process.server) {
		console.log(nuxtApp.ssrContext.event.node.req.headers)

		if (nuxtApp.ssrContext.event.node.req.headers.cookie.indexOf("sdsd") > -1) 		nuxtApp.payload.state.rrrrrrrr = "sdadadasdasdasdasdasdadasd"
	}
	nuxtApp.vueApp.config.globalProperties.$auth = true
	console.log(nuxtApp.payload.state.rrrrrrrr )
	console.log(nuxtApp.vueApp.config.globalProperties.$auth)
})

