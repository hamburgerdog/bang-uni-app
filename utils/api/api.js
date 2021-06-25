import base from "./base.js"

const userUrl = base.localhost
const httpUrl = base.fastmockhost

async function getDataList(url) {
	const request = uni.request({
		url
	})
	return await request.then((res) => {
		return res[1].data.data.list
	})
}

export default {
	getLoginUrl(code) {
		return `${userUrl}/user/login/${code}`
	},
	getRegisterUrl() {
		return `${userUrl}/user/register`
	},
	getAsides(offset) {
		return getDataList(`${httpUrl}/asides/${offset}`)
	},
	getWelfares(offset) {
		return getDataList(`${httpUrl}/welfares/${offset}`)
	},
	getDelivers(offset){
		return getDataList(`${httpUrl}/delivers/${offset}`)
	},
	getFoods(offset){
		return getDataList(`${httpUrl}/foods/${offset}`)
	}
}
