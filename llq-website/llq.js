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
let script = document.createElement('script')
script.src = 'http://lyw.com:8000/data.js'
script.onload = () => {
    console.log(window.xxx)
}
document.body.appendChild(script)