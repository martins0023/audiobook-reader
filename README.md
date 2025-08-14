# My Audiobook Reader
## Project Overview
My Audiobook Reader is a cross-platform mobile application built with React Native and Expo that allows users to listen to their local text files as audiobooks. The application includes a scalable backend processing pipeline on Google Cloud that handles file uploads and generates high-quality, emotionally-toned audio from text.

The project is designed with a clear separation of concerns, ensuring a clean and maintainable codebase for both the frontend and the backend.

# Features
   * File Selection: Users can upload a local .txt file directly from their device.

   * Text-to-Speech (TTS): The app reads the content of a .txt file aloud using the native device's Text-to-Speech capabilities.

   * Audio Controls: Play, pause, and stop controls for a seamless listening experience.

   * Scalable Backend: An event-driven backend pipeline built on Google Cloud Functions and Storage.

   * Automated Processing: Automatically generates audio from uploaded .txt files.

   * Emotional Tone Analysis: Processes text to determine its emotional tone (positive, negative, neutral) and includes this metadata with the generated audio.

   * Clean UI: A simple and intuitive user interface built with Tailwind CSS for React Native.

# Technologies Used
Frontend (Client)
   * React Native: The core framework for building the mobile application.

  * Expo: The platform for building, deploying, and running the React Native app.

  * Expo Router: Used for file-system-based navigation.

  * Tailwind CSS: For fast and responsive styling.

  * expo-document-picker: For selecting files from the device.

  * expo-file-system: For reading and handling local files.

  * expo-speech: For the core Text-to-Speech functionality.

  * Backend (Cloud)
  * Google Cloud Functions: The serverless compute service that runs the processing logic.

  * Google Cloud Storage: Used for storing raw text files and processed audio files.

  * Google Cloud Text-to-Speech API: Generates high-quality, natural-sounding audio from text.

  * Node.js: The runtime environment for the Cloud Functions.

  * sentiment: A lightweight npm package for basic text sentiment analysis.

# Project Structure
my-audiobook-reader/

├── app/

│   ├── (tabs)/

│   │   └── reader/

│   │       └── index.tsx      # The main reader screen component

│   └── _layout.tsx

├── backend/

│   ├── package.json

│   └── index.js             # The backend Cloud Functions

├── app.json

├── package.json

└── README.md


# Getting Started
* Prerequisites
Node.js (LTS version)
```
npm
```
Expo CLI (npm install -g expo-cli)

Google Cloud SDK (gcloud) configured with a project.

# Frontend Setup
Clone the repository:

```
git clone https://github.com/your-username/my-audiobook-reader.git
cd my-audiobook-reader
```
Install the dependencies:
```
npm install
```
Run the app:
```
npx expo start
```
Scan the QR code with the Expo Go app on your mobile device.

# Backend Setup
Navigate to the backend/ directory:
```
cd backend
```
Install backend dependencies:
```
npm install
```
Create a Google Cloud Storage bucket for your files:
```
gsutil mb -p [YOUR_PROJECT_ID] gs://my-audiobook-reader-files
```
# Deploy the Cloud Functions:

File Upload Function:
```
gcloud functions deploy uploadBook --runtime=nodejs20 --trigger-http --allow-unauthenticated
```
Processing Function:
```
gcloud functions deploy processBook --runtime=nodejs20 --trigger-bucket=my-audiobook-reader-files
```
# Usage
  * Open the app in Expo Go.

  * Tap the upload icon (cloud with an arrow) to select a .txt file from your device.

  * The text will appear on the screen.

  * Tap the play button to start listening to the text as a synthesized audiobook.

# Future Plans
  * PDF Text Extraction: Implement a solution for extracting text from PDFs to be used with the TTS function. This will likely involve a separate backend service that uses a robust library.

  * User Authentication: Add user login to store user-specific books and audio files securely.

  * Progress Tracking: Save the user's reading progress and bookmarks.

  * Advanced NLP: Integrate with a more sophisticated NLP model to capture more nuanced emotional tones and speaking styles.

  * UI/UX Improvements: Refine the user interface with more professional controls and animations.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.
