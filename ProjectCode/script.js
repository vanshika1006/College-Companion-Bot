// JavaScript for chatbot popup

// Get the chatbot popup and close button
var chatbotPopup = document.getElementById("chatbotPopup");
var closeChatbot = document.getElementById("closeChatbot");

// Get the button that opens the chatbot popup
var openChatbotBtn = document.getElementById("openChatbot");

// When the user clicks the button, open the chatbot popup
openChatbotBtn.onclick = function() {
    chatbotPopup.style.display = "block";
}

// When the user clicks on the close button, close the chatbot popup
closeChatbot.onclick = function() {
    chatbotPopup.style.display = "none";
}

// When the user clicks anywhere outside of the chatbot popup, close it
window.onclick = function(event) {
    if (event.target == chatbotPopup) {
        chatbotPopup.style.display = "none";
    }
}
