const date_update=document.getElementById("date_update");
let today_date_is=new Date();

date_update.innerText=`${today_date_is.getDate()}/${today_date_is.getMonth()+1}/${today_date_is.getFullYear()}`
