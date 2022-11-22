import cookie from "cookie"
import config from "SRC/configs/config"
// import uuid from "uuid"
// const { v4 } = uuid

export default defineNuxtPlugin((nuxtApp) => {
	if (process.server) {
		const req = nuxtApp.ssrContext.event.node.req
		const headers = req.headers
		const mobileDevice = headers["akson-front-mobile"] === "1"

		const reqCookie = cookie.parse(headers.cookie || "")
		const token = reqCookie[config.armJwtCookie] || reqCookie[config.jwtCookie] || ""
		const terminalId = reqCookie["akson_terminal_id"] || ""

		const { hostname = "" } = req
		const isB2b = ["devopt", "opt", "dopt", "opt99", "opt60", "opt194", "opt58", "opt71"].includes(hostname.split(".")[0])
		const query = nuxtApp._route.query
		const fullSite = (query.SHOW_FULL_SITE === "Y" || (reqCookie["SHOW_FULL_SITE"] === "Y" && typeof query.SHOW_FULL_SITE === "undefined"))
		const isApp = ("1" === req.headers["akson-front-app"] || (query && query.IS_NATIVE_APP === "Y") || (query && query.RETURN_TO_APP === "Y"))
		const isMobile = isApp || ((["mdev", "m", "m99", "m60", "m194", "m58", "m71"].includes(hostname.split(".")[0]) || mobileDevice) && !fullSite && !terminalId)
		const userAgent = req.headers["user-agent"]
		// const requestUuid = v4()
		let nativeAppInfo = {
			version: "",
			platform: "",
			token: "",
			storeId: null,
			cityCode: ""
		}
		const nativeInfoNewScheme = userAgent.match("native-app-akson--(.*)")?.[1]
		try {
			if (nativeInfoNewScheme) {
				const [version, platform, tokenB2c, storeId, cityCode, tokenB2b] = nativeInfoNewScheme.split(":::")
				nativeAppInfo = { version, platform, token: tokenB2c, storeId, cityCode, tokenB2b }
			} else {
				const nativeInfo = userAgent.split(/\s/).find((part) => part.match("native-app-akson"))
				if (nativeInfo) {
					try {
						const nativeDetailInfo = nativeInfo.split("-").find((part) => part.match(/v_.*/)).split("_")
						nativeAppInfo.version = nativeDetailInfo[1]
						nativeAppInfo.platform = nativeDetailInfo[2]
					} catch (e) {
						// хотим знать об ошибке только если в заголовке есть строка native-app-akson
						console.log(`Can't get app version from header: ${userAgent}`)
					}
				}
			}
		} catch (e) {
		}
		// nuxtApp.payload.state.requestUuid = requestUuid

		nuxtApp.payload.state.isB2b = isB2b
		nuxtApp.payload.state.isMobile = isMobile
		nuxtApp.payload.state.mobileDevice = mobileDevice

		nuxtApp.payload.state.cookie = reqCookie
		nuxtApp.payload.state.terminalId = terminalId
		nuxtApp.payload.state.token = token
		nuxtApp.payload.state.nativeAppInfo = nativeAppInfo
	}


	console.log(nuxtApp._route.query)
})

