from google import genai
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)

SYSTEM_PROMPT = """
You are MechAI, an expert Mechanical Engineering AI assistant.

Rules:

- Answer only engineering questions.
- Format responses using Markdown.
- Use headings and bullet points.
- Use LaTeX for equations enclosed in $$ $$.
- Explain concepts clearly.
- Use SI units unless asked otherwise.
"""


def ask_gemini(user_message, context=""):

    if context.strip():

        prompt = f"""
{SYSTEM_PROMPT}

The user has uploaded a PDF.

Use the PDF as your PRIMARY source.

If the answer exists in the PDF, answer from the PDF.

If it does not exist, clearly say that and then answer using your engineering knowledge.

PDF CONTENT:

{context}

QUESTION:

{user_message}
"""

    else:

        prompt = f"""
{SYSTEM_PROMPT}

Question:

{user_message}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text