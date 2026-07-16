import os

from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename

from mechai.chatbot import get_response
from mechai.services.pdf_service import extract_pdf_text

chat = Blueprint("chat", __name__)

UPLOAD_FOLDER = "uploads"

# Create uploads folder if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@chat.route("/chat", methods=["POST"])
def chat_api():

    data = request.get_json()

    message = data.get("message", "")

    response = get_response(message)

    return jsonify({
        "response": response
    })


@chat.route("/upload", methods=["POST"])
def upload_pdf():

    if "pdf" not in request.files:
        return jsonify({"error": "No file selected"}), 400

    file = request.files["pdf"]

    filename = secure_filename(file.filename)

    filepath = os.path.join(UPLOAD_FOLDER, filename)

    file.save(filepath)

    # Extract and store PDF text
    extract_pdf_text(filepath)

    return jsonify({
        "message": "PDF uploaded successfully!"
    })