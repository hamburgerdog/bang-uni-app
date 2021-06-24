import base from "./base.js"

const url = base.localhost

export default {
	getLoginUrl(code) {
		return `${url}/user/login/${code}`
	},
	getRegisterUrl() {
		return `${url}/user/register`
	},
}
