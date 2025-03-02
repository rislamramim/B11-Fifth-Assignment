function updateWorkHistory(workName) {
    const historyList = document.getElementById("history-container");
    const newEntry = document.createElement("p");

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    
    newEntry.innerText = `You have completed the task ${workName} on ${dateString} at ${timeString}`;
                 
    historyList.appendChild(newEntry);
}

document.getElementById("clear-history").addEventListener("click", function() {
    document.getElementById("history-container").innerHTML = ""; 
})




