let targetTime;
let intervalId;

function startTimer() {
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  //calculating time
  targetTime =
    new Date().getTime() +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000;

  //counting
  intervalId = setInterval(updateCountdown, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  document.getElementById("countdown").innerHTML = "00h 00m 00s";
}

function updateCountdown() {
  const currentDate = new Date().getTime();
  const remainingTime = targetTime - currentDate;

  // Check if the countdown has ended
  if (remainingTime < 0) {
    clearInterval(intervalId);
    document.getElementById("countdown").innerHTML = "Countdown expired";
    let audio = new Audio("alertAudio.mp3");
    audio.play();

  } else {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById(
      "countdown"
    ).innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
}
