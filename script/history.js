function updateWorkHistory(workName) {
    const historyList = document.getElementById("history-container");
    const newTag = document.createElement("p");
    newTag.classList.add("mb-3")
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    
    newTag.innerText = `You have completed the task ${workName} on ${dateString} at ${timeString}`;
                 
    historyList.appendChild(newTag);
}

document.getElementById("clear-history").addEventListener("click", function() {
    document.getElementById("history-container").innerHTML = ""; 
})




