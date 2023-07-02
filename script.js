//VARIABLES

const year = document.querySelector(".year");
const month = document.querySelector(".month");
const days = document.querySelector(".days");
const imagen = document.getElementById('img');
const textDay = document.querySelector(".section-text_day");
const textMonth = document.querySelector(".section-text_month");
const textYear = document.querySelector(".section-text_year");

// VARIABLES DE INPUTS

const inputDays = document.querySelector('.inputDays');
const inputMonth = document.querySelector('.inputMonth');
const inputYear = document.querySelector('.inputYear');

// VARIABLE DE FECHA

const todayDate = new Date();

const fechaDia = todayDate.getDate();
const fechaMes = todayDate.getMonth() + 1;
const fechaAnio = todayDate.getFullYear();


year.innerHTML = "- -";
month.innerHTML = "- -"; 
days.innerHTML = "- -"; 

imagen.addEventListener('click', function(){ 

    const iDay = document.getElementById('idDay');
    const iMonth = document.getElementById('idMonth');
    const iYear = document.getElementById('idYear');
    const datoDay = iDay.value;
    const datoMonth = iMonth.value;
    const datoYear = iYear.value;


    const errorDay = document.querySelector('.error-day');
    const errorMonth = document.querySelector('.error-month');
    const errorYear = document.querySelector('.error-year');;

    booleanDay = false;
    booleanMonth = false;
    booleanYear = false;


    if (datoDay < 0 || datoDay > 31){
        
        textDay.style.color = 'red';
        textMonth.style.color = 'red';
        textYear.style.color = 'red';
        errorDay.innerHTML = "Must be a valid date";
        inputDays.style.borderColor = 'red';
        inputMonth.style.borderColor = 'red';
        inputYear.style.borderColor = 'red';

    }else if (datoDay == ''){
        textDay.style.color = 'red';
        textMonth.style.color = 'red';
        textYear.style.color = 'red';
        errorDay.innerHTML = "This field is required";
        inputDays.style.borderColor = 'red';
        inputMonth.style.borderColor = 'red';
        inputYear.style.borderColor = 'red';
        
    } else {
        booleanDay = true;
    }

    if (datoMonth < 0 || datoMonth > 12){
        textDay.style.color = 'red';
        textMonth.style.color = 'red';
        textYear.style.color = 'red';
        errorMonth.innerHTML = "Must be a valid date";
        inputDays.style.borderColor = 'red';
        inputMonth.style.borderColor = 'red';
        inputYear.style.borderColor = 'red';
        

    }else if (datoMonth == ''){
        textDay.style.color = 'red';
        textMonth.style.color = 'red';
        textYear.style.color = 'red';
        errorMonth.innerHTML = "This field is required";
        inputDays.style.borderColor = 'red';
        inputMonth.style.borderColor = 'red';
        inputYear.style.borderColor = 'red';
        
    } else {
        booleanMonth = true;
    }
    

    if (datoYear < 0 || datoYear > 2022){
        textDay.style.color = 'red';
        textMonth.style.color = 'red';
        textYear.style.color = 'red';
        errorYear.innerHTML = "Must be a valid date";
        inputDays.style.borderColor = 'red';
        inputMonth.style.borderColor = 'red';
        inputYear.style.borderColor = 'red';
        

    }else if (datoYear == ''){
        textDay.style.color = 'red';
        textMonth.style.color = 'red';
        textYear.style.color = 'red';
        errorYear.innerHTML = "This field is required";
        inputDays.style.borderColor = 'red';
        inputMonth.style.borderColor = 'red';
        inputYear.style.borderColor = 'red';
        
    } else {
        booleanYear = true;
    }

    if (booleanDay && booleanMonth && booleanYear == true) {
        year.innerHTML = fechaAnio - datoYear;

        if (iMonth.value > fechaMes){
            month.innerHTML = 12 - (datoMonth - fechaMes);
            year.innerHTML = (fechaAnio - datoYear) - 1;
        }else if (iMonth.value <= fechaMes){
            month.innerHTML =  (fechaMes - datoMonth);
           
        }
        if (iDay.value > fechaDia){
            days.innerHTML = 30 - (datoDay - fechaDia);
        }else if (iDay.value <= fechaDia){
            days.innerHTML = fechaDia - datoDay;
        }
        textDay.style.color = 'hsl(0, 1%, 44%)';
        textMonth.style.color = 'hsl(0, 1%, 44%)';
        textYear.style.color = 'hsl(0, 1%, 44%)';
        errorDay.innerHTML = "";
        errorMonth.innerHTML = "";
        errorYear.innerHTML = "";
        
    }
});

inputDays.addEventListener('click', function(){
    inputDays.style.borderColor = 'hsl(259, 100%, 65%)';
    inputMonth.style.borderColor = 'hsl(0, 0%, 86%)'; 
    inputYear.style.borderColor = 'hsl(0, 0%, 86%)'; 
});

inputMonth.addEventListener('click', function(){
    inputMonth.style.borderColor = 'hsl(259, 100%, 65%)';
    inputDays.style.borderColor = 'hsl(0, 0%, 86%)';
    inputYear.style.borderColor = 'hsl(0, 0%, 86%)';  
});

inputYear.addEventListener('click', function(){
    inputYear.style.borderColor = 'hsl(259, 100%, 65%)';
    inputDays.style.borderColor = 'hsl(0, 0%, 86%)';
    inputMonth.style.borderColor = 'hsl(0, 0%, 86%)';
});







