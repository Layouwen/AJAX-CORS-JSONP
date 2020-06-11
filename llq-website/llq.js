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
function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = 'JSONCallbackName' + Math.random()
        window[random] = data => {
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}
jsonp('http://lyw.com:8000/data.js').then((data) => {
    console.log(data)
})