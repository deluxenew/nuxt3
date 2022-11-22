// the environment that will be considered when building the skin, either `production` or `development`
const nodeEnv = process.env.NODE_ENV || "development"
export default {
	nodeEnv: nodeEnv,
	isProduction: nodeEnv === "production",
	isTesting: nodeEnv === "testing",
	domain: "akson.ru",
	server: {
		// TODO: Добавить env переменную process.env.SERVER_PORT
		port: 8080
	},
	jwtCookie: "akson_jwt",
	appOptIsAuthCookie: "akson_opt_is_auth",
	armJwtCookie: "armjwt",
	transitionJwtCookie: "transition_jwt"
}

