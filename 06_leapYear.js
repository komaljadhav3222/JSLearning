var leapYear= function(year){
    year=+year;
    if (year==null|year==0||year==undefined||isNaN(year)) {
        console.log(`Invalid Data - ${year}`);
    }
    else{
        if(year%4==0)
        {
    console.log(`Given year ${year} is Leap year`);
        }
        else{
            console.log(`Given year ${year} is not Leap year`);
        }
    }
  
}
leapYear(2020);
leapYear(0);
leapYear(100);
leapYear(1945);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1750);
leapYear(NaN);
leapYear("undefined");
leapYear(null);
leapYear(undefined);