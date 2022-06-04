import cv2
import numpy as np
import os
from os import listdir
from os.path import isfile, join
import sys

# Load HAAR face classifier
face_classifier = cv2.CascadeClassifier('./controllers/haarcascade_frontalface_alt.xml')

# Get the training data from file
data_path = './controllers/Fox/'
onlyfiles = [f for f in listdir(data_path) if isfile(join(data_path, f))]

# Create arrays for training data and labels
Training_Data, Labels = [], []

# Open training images in our datapath
# Create a numpy array for training data
for i, files in enumerate(onlyfiles):
    if "jerry" in onlyfiles[i]:
        Labels.append(0)
    elif "tim" in onlyfiles[i]:
        Labels.append(1)
    else:
        Labels.append(2)
    image_path = data_path + onlyfiles[i]
    images = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    Training_Data.append(np.asarray(images, dtype=np.uint8))
    #Labels.append(i)

# Create a numpy array for both training data and labels
Labels = np.asarray(Labels, dtype=np.int32)

# Initialize facial recognizer
model = cv2.face.LBPHFaceRecognizer_create()

# Model train
model.train(np.asarray(Training_Data), np.asarray(Labels))
#print("Model trained sucessefully")
#print(model)

#-------------------------------------------------------------------

def face_detector(img, size=0.5):

    # Convert image to grayscale
    gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces = face_classifier.detectMultiScale(gray, 1.3, 5)
    if faces is ():
        return img, []

    for (x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,255),2)
        roi = img[y:y+h, x:x+w]
        roi = cv2.resize(roi, (200, 200))
    return img, roi

# Get the image from /uploads
uploads_path = './uploads'
old_name = [f for f in listdir(uploads_path) if isfile(join(uploads_path, f))]

new_name = "image.jpg"

full_new_path = uploads_path + "/" + new_name

os.rename(uploads_path + "/" + old_name[0], full_new_path)

frame = cv2.imread(full_new_path)

os.remove(full_new_path)

image, face = face_detector(frame)

try:
    face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)

    # Pass face to prediction model
    results = model.predict(face)

    if results[0] == 0:
        username = "jerryberry"
    elif results[0] == 1:
        username = "tim"
    else:
        username = "fox"
    if results[1] < 500:
        confidence = int( 100 * (1 - (results[1])/400) )
        display_string = str(confidence) + '% Confident it is ' + username

    cv2.putText(image, display_string, (100, 120), cv2.FONT_HERSHEY_COMPLEX, 1, (255,120,150), 2)

    if confidence > 80:
        if (sys.argv[1] == username):
            cv2.putText(image, "Unlocked", (250, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (0,255,0), 2)
            #print(display_string)
            print("Unlocked")
    else:
        cv2.putText(image, "Locked", (250, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (0,0,255), 2)
        #print(display_string)
        print("Locked")

except:
    cv2.putText(image, "No Face Found", (220, 120) , cv2.FONT_HERSHEY_COMPLEX, 1, (0,0,255), 2)
    cv2.putText(image, "Locked", (250, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (0,0,255), 2)
    print("No Face Found")
    pass

#cv2.waitKey()