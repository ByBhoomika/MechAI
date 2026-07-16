const chatBox = document.getElementById("chatBox");

const input = document.getElementById("userInput");

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const text=input.value.trim();

    if(text==="") return;

    addMessage(text,"user");

    input.value="";

    input.focus();

    setTimeout(function(){

        addMessage(

            "I'm still under development. Soon I'll answer Mechanical Engineering questions!",

            "bot"

        );

    },500);

}

function addMessage(text,type){

    const msg=document.createElement("div");

    msg.className="message "+type;

    msg.innerText=text;

    chatBox.appendChild(msg);

    chatBox.scrollTop=chatBox.scrollHeight;

}