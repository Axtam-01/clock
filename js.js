function Time() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let c = date.getSeconds();

  
    if (h < 10) {
        h = "0" + h;
    } else {
        h = h;
    }
    
    if (m < 10) {
        m = "0" + m;
    } else {
        m = m;
    }
    
    if (c < 10) {
        c = "0" + c;
    } else {
        c = c;
    }
    let clocks = document.getElementsByClassName("clock");

    if (clocks.length >= 3) {
        clocks[0].getElementsByTagName("h1")[0].innerText = h;
        clocks[1].getElementsByTagName("h1")[0].innerText = m;
        clocks[2].getElementsByTagName("h1")[0].innerText = c;

     
    }
   
    setTimeout(Time, 1000); 

    }
    
Time();


function moon() {
    let obj = new Date();
    let day = obj.getDate();
    let month = obj.getMonth() + 1;
    let year = obj.getFullYear();
    let moons = document.getElementsByClassName("clock");
    if (moons.length >= 3) {

        moons[0].getElementsByTagName("h4").innerHTML = day;

        moons[1].getElementsByTagName("h4").innerHTML = month;

        moons[2].getElementsByTagName("h4").innerHTML= year;
    }

    setTimeout(moon, 1000); 

}

moon();