import React from 'react';

const NumOfDays = ({DOB}) => {
    var date1, date2;
         date1 = new Date();
         date2 = new Date( DOB );
         // get total seconds between two dates
         var res = Math.abs(date1 - date2)/ 1000;
         var days = Math.floor(res / 86400); //total seconds divided by seconds per day
         console.log("days: "+res)
    return(
        <div>Number of days spent on Earth: {days} days</div>
    )
}

export default NumOfDays;