const BASE_URL = "http://bluesun.natapp1.cc"
export const doGet = function(url, data) {
    return axios.get(BASE_URL + url, data)
}

export const doPost = (url, data) => {
    return axios.post(BASE_URL + url, data)
}