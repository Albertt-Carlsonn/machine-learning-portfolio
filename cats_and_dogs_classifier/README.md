## CATS AND DOGS IMAGE CLASSIFICATION

Classifying photos as cats or dogs with PyTorch, comparing a CNN built from scratch against transfer learning with a pretrained EfficientNet-B0.

## DATASET

https://www.kaggle.com/datasets/tongpython/cat-and-dog/data

The data set includes information about:
* 8010 training images
* 2025 testing images

## OBJECTIVES

* Create a baseline model and a transfer learning model to classify cats and dogs image dataset using PyTorch.
* Plot a confusion matrix to analyze the two model results.
* Compare the test accuracy of both models and determine which one has a higher accuracy.
* Classify custom images using the best model.

## KEY FINDINGS

* The transfer learning model beat the baseline model (95% vs. 74%) and reached 94% after the first epoch, because the frozen layers already detect edges, textures, and animal features learned from ImageNet.
* The baseline was biased toward predicting "cat". The transfer model's errors are balanced.
* All of the 4 custom images were classified correctly, though that is too small a sample to estimate accuracy.
