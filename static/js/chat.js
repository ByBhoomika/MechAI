const hero = document.getElementById("hero");
const featureGrid = document.getElementById("featureGrid");

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const uploadBtn = document.getElementById("uploadBtn");
const pdfUpload = document.getElementById("pdfUpload");

let firstMessage = true;

// -------------------------
// Event Listeners
// -------------------------

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

uploadBtn.addEventListener("click", () => {
    pdfUpload.click();
});

pdfUpload.addEventListener("change", uploadPDF);

// -------------------------
// Send Chat Message
// -------------------------

async function sendMessage() {

    const message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    if (firstMessage) {
        hero.style.display = "none";
        featureGrid.style.display = "none";
        firstMessage = false;
    }

    input.value = "";
    input.focus();

    const typing = addTypingIndicator();

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        typing.remove();

        addMessage(data.response, "bot");

    } catch (error) {

        typing.remove();

        addMessage(
            "❌ Connection error. Please try again.",
            "bot"
        );

        console.error(error);

    }

}

// -------------------------
// Upload PDF
// -------------------------

async function uploadPDF() {

    const file = pdfUpload.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("pdf", file);

    try {

        const response = await fetch("/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        addMessage("📄 " + data.message, "bot");

    } catch (error) {

        addMessage("❌ PDF upload failed.", "bot");

        console.error(error);

    }

}

// -------------------------
// Add Message
// -------------------------

function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "message " + type;

    message.innerHTML = marked.parse(text);

    if (typeof renderMathInElement !== "undefined") {

        renderMathInElement(message, {

            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false }
            ]

        });

    }

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;

}

// -------------------------
// Typing Indicator
// -------------------------

function addTypingIndicator() {

    const typing = document.createElement("div");

    typing.className = "message bot";

    typing.id = "typing";

    typing.innerHTML = `
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    return typing;

}