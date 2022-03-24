var s=Object.defineProperty;var d=(a,t,e)=>t in a?s(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e),h=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var c=(a,t,e,l)=>(h(a,t,"write to private field"),l?l.call(a,e):t.set(a,e),e);var r;class DatePicker{constructor(){n(this,"monthData",["January","February","March","April","May","June","July","August","September","October","November","December"]);r.set(this,{data:"",date:0,month:0,year:0});n(this,"datePickerEl");n(this,"dateInputEl");n(this,"calendarMonthEl");n(this,"monthContentEl");n(this,"nextBtnEl");n(this,"prevBtnEl");n(this,"calendarDatesEl");this.initCalendarDate(),this.assignElement(),this.addEvent()}initCalendarDate(){const t=new Date,e=t.getDate(),l=t.getMonth(),i=t.getFullYear();c(this,r,{data:t,date:e,month:l,year:i})}assignElement(){this.datePickerEl=document.getElementById("date-picker"),this.dateInputEl=this.datePickerEl.querySelector("#date-input"),this.calendarEl=this.datePickerEl.querySelector("#calendar"),this.calendarMonthEl=this.calendarEl.querySelector("#month"),this.monthContentEl=this.calendarMonthEl.querySelector("#content"),this.nextBtnEl=this.calendarMonthEl.querySelector("#next"),this.prevBtnEl=this.calendarMonthEl.querySelector("#prev"),this.calendarDatesEl=this.calendarEl.querySelector("#dates")}addEvent(){this.dateInputEl.addEventListener("click",this.toggleCalendar.bind(this))}toggleCalendar(){this.calendarEl.classList.toggle("active")}}r=new WeakMap,new DatePicker;
