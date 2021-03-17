function runningClock() {
    $('#clock').html(moment().format('MMMM Do, YYYY H:mm:ss'));
}
setInterval(runningClock, 1000);