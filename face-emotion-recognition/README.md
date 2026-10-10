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

### HOW TO RUN
```bash
git clone https://github.com/Albertt-Carlsonn/machine-learning-portfolio.git
cd face-emotion-recognition
pip install -r requirements.txt
python main.py
```
press the `q` key to quit.
