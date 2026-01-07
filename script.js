function updateClock() {
    const now = new Date(); // Gets the current system time

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // The "Extra" Skill: Formatting
    // If minutes are "5", we want it to show as "05"
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

    // it Optional (Update the date too_
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Key Tool: setInterval(function, milliseconds)
// 1000ms = 1 second. This runs updateClock every second
setInterval(updateClock, 1000);

// Run it once immediately so the clock doesn't stay at 00:00:00 for the first second
updateClock();