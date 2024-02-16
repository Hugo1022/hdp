const seconds = document.querySelector("#seconds")
const minutes = document.querySelector("#minutes")
const hours = document.querySelector("#hours")

setInterval(() => {
    let s = Math.abs(60  - new Date().getSeconds())
    let m = Math.abs( new Date().getMinutes() - 60)
    let h = Math.abs( new Date().getHours() - 24)

    if(s < 10)
    {
        s = "0" + s;
    }
    if(m < 10)
    {
        m = "0" + m;
    }
    if(h < 10)
    {
        h = "0" + h;
    }
    seconds.innerText = s;
    minutes.innerText = m;
    hours.innerText = h;
})