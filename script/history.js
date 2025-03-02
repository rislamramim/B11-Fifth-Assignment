function updateWorkHistory(workName) {
    const historyList = document.getElementById("history-container");
    const newEntry = document.createElement("p");

    // Get current date and time
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    // Set text content
    newEntry.innerText = `You have completed the task ${workName} on ${dateString} at ${timeString}`;
     
            // Append new entry to the list
            historyList.appendChild(newEntry);
}

document.getElementById("clear-history").addEventListener("click", function() {
    document.getElementById("history-container").innerHTML = ""; // Clears the history list
});