from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from model import summarize, splitter

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SummarizeText(BaseModel):
    text: str = Field(max_length=15000)

@app.post('/summarize')
def textSum(st:SummarizeText):
    text = st.text
    if not text.strip():
        raise HTTPException(status_code=400, detail='No text found')
    
    chunks = splitter.split_text(text)

    result = summarize(chunks, max_length=130, min_length=5, do_sample=False)

    result_text = " ".join(
        item['summary_text'] for item in result
    )

    return result_text
