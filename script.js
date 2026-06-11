// Set today as default date
document.getElementById("currentDate").valueAsDate = new Date();

let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

// Calculate Event
document.getElementById("calculateBtn").addEventListener("click", () => {
    if (dob.value == "" || currentDate.value == "") {
        output.innerHTML = "<span style='color: #ff6b6b;'>Please select both dates!</span>";
    } else {
        calculateAgeDifference(dob.value, currentDate.value);
    }
});

// Refresh Event
document.getElementById("refreshBtn").addEventListener("click", () => {
    dob.value = "";
    document.getElementById("currentDate").valueAsDate = new Date();
    output.innerHTML = "Ready to calculate your journey! 🚀✨";
});

function calculateAgeDifference(start, end) {
    let dobYear = parseInt(start.substring(0, 4), 10);
    let dobMonth = parseInt(start.substring(5, 7), 10);
    let dobDate = parseInt(start.substring(8, 10), 10);
    
    let currYear = parseInt(end.substring(0, 4), 10);
    let currMonth = parseInt(end.substring(5, 7), 10);
    let currDate = parseInt(end.substring(8, 10), 10);

    let yearAgeDiff = currYear - dobYear;
    let monthAgeDiff;
    
    if (currMonth >= dobMonth) {
        monthAgeDiff = currMonth - dobMonth;
    } else {
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    let dateAgeDiff;
    if (currDate >= dobDate) {
        dateAgeDiff = currDate - dobDate;
    } else {
        monthAgeDiff--;
        let noOfDaysInPrevMonth = new Date(currYear, currMonth - 1, 0).getDate();
        dateAgeDiff = noOfDaysInPrevMonth + currDate - dobDate;

        if (monthAgeDiff < 0) {
            monthAgeDiff = 11;
            yearAgeDiff--;
        }
    }

    output.innerHTML = `
        <span style="color: #ffdb70; font-size: 20px; font-weight: bold;">${yearAgeDiff}</span> Years, 
        <span style="color: #ffdb70; font-size: 20px; font-weight: bold;">${monthAgeDiff}</span> Months, 
        <span style="color: #ffdb70; font-size: 20px; font-weight: bold;">${dateAgeDiff}</span> Days.
    `;
}