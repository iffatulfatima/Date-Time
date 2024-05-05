function updateDateTime() {
    var currentDate = new Date();
    var date = currentDate.toDateString();
    var time = currentDate.toLocaleTimeString();
    document.getElementById('datetime').innerHTML = date + ' ' + time;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display date and time
  updateDateTime();