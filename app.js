window.addEventListener("load", function(){
    const initClock = ()=>{
        let date = new Date()
        document.getElementById("hour").innerHTML = date.toLocaleTimeString() 
        document.getElementById("date").innerHTML = date.toDateString()
    }
    
    setInterval(initClock, 1000)
})
console.log("Hello! Code by : William J.")