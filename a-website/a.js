const request = new XMLHttpRequest()
request.open('get', '/data.json')
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.response)
    }
}
request.send()