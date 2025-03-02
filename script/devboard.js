// Fix Mobile Button Issue
document.getElementById('fix-button').addEventListener('click',function(event){
    event.preventDefault();
    const completeWork = document.getElementById("work-number").innerText;
    const convertedCompleteWork = parseInt(completeWork);
    const sum = convertedCompleteWork + 1;
    document.getElementById("work-number").innerText = sum;
    const fixButton = document.getElementById('fix-button');     
    fixButton.disabled = true;
    fixButton.classList.add('disabled');    
})
// Add Dark Mode
document.getElementById('dark-button').addEventListener('click',function(event){
    event.preventDefault();
    const completeWork = document.getElementById("work-number").innerText;
    const convertedCompleteWork = parseInt(completeWork);
    const sum = convertedCompleteWork + 1;
    document.getElementById("work-number").innerText = sum;
    const darkButton = document.getElementById('dark-button');     
    darkButton.disabled = true;
    darkButton.classList.add('disabled');    
})
// Optimize Home Page
document.getElementById('home-button').addEventListener('click',function(event){
    event.preventDefault();
    const completeWork = document.getElementById("work-number").innerText;
    const convertedCompleteWork = parseInt(completeWork);
    const sum = convertedCompleteWork + 1;
    document.getElementById("work-number").innerText = sum;
    const homeButton = document.getElementById('home-button');     
    homeButton.disabled = true;
    homeButton.classList.add('disabled');    
})
// Add new emoji 
document.getElementById('emoji-button').addEventListener('click',function(event){
    event.preventDefault();
    const completeWork = document.getElementById("work-number").innerText;
    const convertedCompleteWork = parseInt(completeWork);
    const sum = convertedCompleteWork + 1;
    document.getElementById("work-number").innerText = sum;
    const emojiButton = document.getElementById('emoji-button');     
    emojiButton.disabled = true;
    emojiButton.classList.add('disabled');    
})
// Integrate OpenAI API
document.getElementById('openai-button').addEventListener('click',function(event){
    event.preventDefault();
    const completeWork = document.getElementById("work-number").innerText;
    const convertedCompleteWork = parseInt(completeWork);
    const sum = convertedCompleteWork + 1;
    document.getElementById("work-number").innerText = sum;
    const openaiButton = document.getElementById('openai-button');     
    openaiButton.disabled = true;
    openaiButton.classList.add('disabled');
})  
// Improve Job searching
document.getElementById('job-button').addEventListener('click',function(event){
    event.preventDefault();
    const completeWork = document.getElementById("work-number").innerText;
    const convertedCompleteWork = parseInt(completeWork);
    const sum = convertedCompleteWork + 1;
    document.getElementById("work-number").innerText = sum;
    const jobButton = document.getElementById('job-button');     
    jobButton.disabled = true;
    jobButton.classList.add('disabled');    
})



document.getElementById('fix-button').addEventListener('click',function(event){
    event.preventDefault();
    const remainWork = document.getElementById('remain-work').innerText;
    const convertedRemainWork = parseInt(remainWork);
    const sum = convertedRemainWork - 1;
    document.getElementById("remain-work").innerText = sum;

})
document.getElementById('dark-button').addEventListener('click',function(event){
    event.preventDefault();
    const remainWork = document.getElementById('remain-work').innerText;
    const convertedRemainWork = parseInt(remainWork);
    const sum = convertedRemainWork - 1;
    document.getElementById("remain-work").innerText = sum;

})
document.getElementById('home-button').addEventListener('click',function(event){
    event.preventDefault();
    const remainWork = document.getElementById('remain-work').innerText;
    const convertedRemainWork = parseInt(remainWork);
    const sum = convertedRemainWork - 1;
    document.getElementById("remain-work").innerText = sum;

})
document.getElementById('emoji-button').addEventListener('click',function(event){
    event.preventDefault();
    const remainWork = document.getElementById('remain-work').innerText;
    const convertedRemainWork = parseInt(remainWork);
    const sum = convertedRemainWork - 1;
    document.getElementById("remain-work").innerText = sum;

})
document.getElementById('openai-button').addEventListener('click',function(event){
    event.preventDefault();
    const remainWork = document.getElementById('remain-work').innerText;
    const convertedRemainWork = parseInt(remainWork);
    const sum = convertedRemainWork - 1;
    document.getElementById("remain-work").innerText = sum;

})
document.getElementById('job-button').addEventListener('click',function(event){
    event.preventDefault();
    const remainWork = document.getElementById('remain-work').innerText;
    const convertedRemainWork = parseInt(remainWork);
    const sum = convertedRemainWork - 1;
    document.getElementById("remain-work").innerText = sum;

})

















// linkup with two html file
document.getElementById('discover').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "quesans.html";
})