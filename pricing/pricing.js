// Add your JavaScript code here

// Pricing form submission
document.getElementById('set-price-btn').addEventListener('click', function() {
    var level = document.getElementById('level').value;
    var price = document.getElementById('price').value;
    
    // Add code to set price based on level
    console.log("Price for " + level + " level set to: " + price);
});

// Live sessions form submission
document.getElementById('schedule-session-btn').addEventListener('click', function() {
    var sessionDate = document.getElementById('session-date').value;
    var sessionTime = document.getElementById('session-time').value;
    
    // Add code to schedule session and notify students
    console.log("Session scheduled for " + sessionDate + " at " + sessionTime);
});
