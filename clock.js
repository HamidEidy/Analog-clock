

setInterval(()=>{
  d = new Date();
  hr = d.getHours();
  min =  d.getMinutes();
  sec = d.getSeconds();

  hr_rotation = 30 * hr + min / 2;
  min_roration = 6* min;
  sec_raration = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_roration}deg)`;
  second.style.transform = `rotate(${sec_raration}deg)`;
},1000)
