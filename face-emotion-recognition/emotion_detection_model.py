from transformers import pipeline
classifier = pipeline("image-classification", model="mo-thecreator/vit-Facial-Expression-Recognition")
