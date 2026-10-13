from transformers import pipeline, AutoTokenizer
from langchain_text_splitters import RecursiveCharacterTextSplitter

summarize = pipeline("summarization", model="facebook/bart-large-cnn")
tokenizer = AutoTokenizer.from_pretrained('facebook/bart-large-cnn')

splitter = RecursiveCharacterTextSplitter.from_huggingface_tokenizer(
    tokenizer, chunk_size=900, chunk_overlap=50
)
