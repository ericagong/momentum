const clock = document.querySelector('h2#clock');

function getTime() {
    const date = new Date();
    const hour = String(date.getHours());
    const min = String(date.getMinutes());
    const sec = String(date.getSeconds());
    const time = `${hour.padStart(2, "0")} : ${min.padStart(2, "0")} : ${sec.padStart(2, "0")}`; // str.padStart(len, x) checks if str < len then pad with x.
    clock.innerText = time;
}

getTime();
setInterval(getTime, 1000); // setInterval(func, num) calls func every num ms vs setTimeout(func, num) calls func after num ms