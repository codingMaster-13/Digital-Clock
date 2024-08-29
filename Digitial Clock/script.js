const hour = document.querySelector('.hour'),
minute= document.querySelector('.minute'),
second = document.querySelector(".second"),
period = document.querySelector(".period");
document.oncontextmenu = e => {
    e.preventDefault();
}
setInterval(()=>{
    const h = new Date().getHours()>12?new Date().getHours()-12:new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    const hours = h<10? `0${h}`:h;
    const minutes = m<10?`0${m}`:m;
    const seconds = s<10?`0${s}`:s;
    const Hour = new Date().getHours();
    const periods = Hour<12 && Hour>0?'AM':'PM';
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
    period.innerHTML = periods;
}, 1)