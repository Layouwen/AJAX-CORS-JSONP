// AJAX CORS
// const request = new XMLHttpRequest()
// request.open('get', 'http://lyw.com:8000/data.js')
// request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.response)
//     }
// }
// request.send()

// JSONP
const random = 'JSONCallbackName' + Math.random()
console.log(random)
window[random] = (data) => {
    console.log(data)
}
let script = document.createElement('script')
script.src = `http://lyw.com:8000/data.js?callback=${random}`
script.onload = () => {
    script.remove()
}
document.body.appendChild(script)