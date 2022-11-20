module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module",
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	extends: "google",

	// required to lint *.vue files
	plugins: [
		"html"
	],

	// add your custom rules here
	rules: {
		// don"t allow semicolons
		"semi": ["error", "never"],

		// don"t require comma in the last line of an object/dictionary declaration
		"comma-dangle": ["error", "only-multiline"],

		// ignore max-len for comments
		"max-len": [
			"error",
			{ "code": 180, "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true, "ignoreStrings": true }
		],

		// force space after and before curly braces in object/dict declarations
		"object-curly-spacing": ["error", "always"],

		// allow debugger; instruction during development

		// force "===" in comparisons when ambiguous
		"eqeqeq": ["error", "smart"],

		// force double quotes
		"quotes": ["error", "double"],

		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"no-tabs": 0,

		"require-jsdoc": 0,

		"new-cap": ["error", { "capIsNew": false }],

		"one-var": 0,

		"no-trailing-spaces": ["error", { "skipBlankLines": true, "ignoreComments": true }],

		"linebreak-style": 0,

		"spaced-comment": 0,
	}
}
