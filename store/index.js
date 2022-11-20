import { acceptHMRUpdate, defineStore } from "pinia"

export const useStore = defineStore("main", {
	state: () => {
		return {
			user: "",
		}
	},
	actions: {
		setUser(v) {
			this.user = v
			if (!this.user) return
			document.cookie = `user=${v.value};`
			const app = useNuxtApp()
			app.$router.replace("/profile")
		}
	},
	getters: {
		ser: (state) => state.user,
	},
})
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
