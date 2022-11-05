async function getApi(){
    try {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        // send request api from server [http method: GET,POST,DELETE]
        const req = await fetch(url, {
            method:'GET'
        })
        console.log(req)
        const res = await req.json() // convert data to [JSON data]
        console.log(res)
        //javaScript [DOM]
        document.getElementById('time').innerText = res.time.updated
        document.getElementById('usd').innerText = res.time.updated
        document.getElementById('eur').innerText = res.time.updated

    } catch (error) {
        console.error(error)
    }
}
// call function.
getApi()