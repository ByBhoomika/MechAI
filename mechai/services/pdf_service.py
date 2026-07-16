from pypdf import PdfReader
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

pdf_chunks = []
vectorizer = None
chunk_vectors = None


def extract_pdf_text(pdf_path):

    global pdf_chunks, vectorizer, chunk_vectors

    reader = PdfReader(pdf_path)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    pdf_chunks = []

    chunk_size = 800

    for i in range(0, len(text), chunk_size):

        pdf_chunks.append(text[i:i + chunk_size])

    vectorizer = TfidfVectorizer()

    chunk_vectors = vectorizer.fit_transform(pdf_chunks)


def search_pdf(query, top_k=3):

    if not pdf_chunks:

        return ""

    query_vector = vectorizer.transform([query])

    similarities = cosine_similarity(
        query_vector,
        chunk_vectors
    ).flatten()

    best_indices = similarities.argsort()[-top_k:][::-1]

    results = []

    for index in best_indices:

        results.append(pdf_chunks[index])

    return "\n\n".join(results)