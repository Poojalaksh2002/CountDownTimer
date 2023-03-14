const d=document.querySelector('#day')
const h=document.querySelector('#hrs')
const m=document.querySelector('#min')
const s=document.querySelector('#sec')

console.log(d)
function countDown(){
    const currentYr = new Date().getFullYear();
console.log(currentYr);

const nextYr = new Date(`January 1 ${currentYr+1} 00:00:00`)
console.log(nextYr)

const currentDate= new Date();
console.log(currentDate)
const diff = nextYr-currentDate
console.log(diff)

const days = Math.floor(diff/1000/60/60/24)
console.log(days);
const hours = Math.floor((diff/1000/60/60)%24)
console.log(hours);
const mins = Math.floor((diff/1000/60)%60)
console.log(mins);
const sec = Math.floor((diff/1000)%60)
console.log(sec);
 d.innerHTML= days<10?"0"+days: days
 h.innerHTML= hours<10?"0"+hours: hours
 m.innerHTML= mins<10?"0"+mins : mins
 s.innerHTML= sec<10?"0"+sec : sec

}
setInterval(countDown,1000);





