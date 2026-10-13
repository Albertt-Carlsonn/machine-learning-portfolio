# TEXT SUMMARIZER WEB APP

A web application that summarizes long texts or articles using Facebook's BART model from HuggingFace. 

## FEATURES

- Summarizes texts up to 15,000 characters.
- A simple React frontend UI.
- FastAPI backend serving a HuggingFace model

## TECHNOLOGIES USED

- **Frontend:** React (Vite), Tailwind CSS, Axios
- **Backend:** FastAPI, Uvicorn
- **Model:** `facebook/bart-large-cnn` via Hugging Face Transformers https://huggingface.co/facebook/bart-large-cnn
- **Chunking:** LangChain `RecursiveCharacterTextSplitter` (token-based)

## SCREENSHOT
<img width="1902" height="1012" alt="Screenshot 2026-10-14 003029" src="https://github.com/user-attachments/assets/3cbb8be4-7ff3-465b-add0-d4f5ffc0702c" />

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # Windows (macOS/Linux: source .venv/bin/activate)
pip install -r requirements.txt
uvicorn main:app --reload
```

The API runs at `http://localhost:8000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## API

### `POST /summarize`

Request body:

```json
{ "text": "Your long article here..." }
```

Response: the summary as a plain string.

Status: 400 - Empty input

## How It Works

1. The frontend sends the article to `/summarize`.
2. The backend splits it into chunks of up to 900 tokens, measured with BART's own tokenizer.
3. Each chunk is summarized separately by the model.
4. The partial summaries are joined and returned.

## Design Decisions

- **Chunking by tokens, not characters.** BART accepts at most 1024 tokens. Character-based splitting can't guarantee chunks fit, so the splitter uses the model's tokenizer to count.
- **Chunk size of 900.** It leaves a margin below the 1024 limit for special tokens and for small differences when text is decoded and re-tokenized.
- **Small overlap (50 tokens).** Overlap helps retrieval tasks, but for summarization it causes repeated content, so it's kept low.

## Limitations

- CPU inference is slow for long articles. A GPU speeds it up considerably.
- Summaries of each chunk are joined without a second summarization pass, so very long texts may read as separate paragraphs.
- Trained on news articles, so quality is best on news-style text.
