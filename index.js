function updateDay () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];

    document.querySelector('[data-attribute="currentDayOfTheWeek"]').textContent = ` ${currentDay}`;
}

// Update the day of the week immediately and then refresh every 24 hours
updateDay();
setInterval(updateDay, 24 * 60 * 60 * 1000);


function updateTime() {
    const currentUTC = new Date();
    const utcTimeMilliseconds = currentUTC.getTime();
    const utcTimeString = currentUTC.toUTCString();
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    utcTimeElement.textContent = ` ${utcTimeMilliseconds}`;
}

// Update the UTC time immediately and then refresh every second
updateTime();
setInterval(updateTime, 1000); // 1 second