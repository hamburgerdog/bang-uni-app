import base from "./base.js"

const userUrl = base.localhost
const httpUrl = base.fastmockhost
export default {
	getLoginUrl(code) {
		return `${userUrl}/user/login/${code}`
	},
	getRegisterUrl() {
		return `${userUrl}/user/register`
	},
	getAsidesUrl(offset){
		return `${httpUrl}/asides/${offset}`
	},
	getWelfaresUrl(offset){
		return `${httpUrl}/welfares/${offset}`
	},
}
