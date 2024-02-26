function updateclock(){
    const now= new Date();
    let hours =now.getHours().toString().padStart(2,0);
    const merdian= hours>12? "PM" :"AM";
    hours=hours%12|| 12;
    hours=hours.toString().padStart(2,0);
    const minuts=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${minuts}:${second} ${merdian}`;
    document.getElementById('clock').textContent=timestring;
  }
  updateclock();
  setInterval( updateclock,1000);