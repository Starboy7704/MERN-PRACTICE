function setupClickCounter(buttonId, label) {
  // Each button gets its own private counter
  var count = 0;

  // Get the button from the page
  var button = document.getElementById(buttonId);

  // Attach a click listener
  button.addEventListener("click", function () {
    // This function can still see "count", "button", and "label"
    count = count + 1;
    button.textContent = label + " (" + count + ")";
  });
}

// Set up counters for Like and Share buttons
setupClickCounter("like-btn", "Like");
setupClickCounter("share-btn", "Share");
