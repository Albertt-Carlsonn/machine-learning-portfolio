# FACE EMOTION RECOGNITION
A real-time facial emotion recognition using OpenCV and a pretrained HuggingFace model.

### WHAT IT DOES
1. Opens your webcam using OpenCV.
2. Finds faces in each frames.
3. Predicts the emotion on each face.
4. Shows the predicted emotion.

### HOW IT WORKS
* `emotion_detection_model.py` loads the pretrained model.
* `main.py` reads webcam frames, detects faces with a Haar cascade, crops each face, and sends it to the model.

For this small project I used a pretrained model called `vit-Facial-Expression-Recognition` from HuggingFace.

https://huggingface.co/mo-thecreator/vit-Facial-Expression-Recognition

### DEMO
<img width="576" height="1024" alt="demo" src="https://github.com/user-attachments/assets/fae214ad-917f-4b0b-8bb3-5a298a4c01ec" />


### HOW TO RUN
```bash
git clone https://github.com/Albertt-Carlsonn/machine-learning-portfolio.git
cd face-emotion-recognition
pip install -r requirements.txt
python main.py
```
press the `q` key to quit.
