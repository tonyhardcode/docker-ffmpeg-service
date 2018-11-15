# ffmpeg web service API

An web service for converting audio/video files using Nodejs, Express and FFMPEG

## Docker image

https://hub.docker.com/r/frederiksen/docker-ffmpeg-service/

## Endpoints

> POST /wav - Convert audio file in request body to wav

> POST /bmp - Convert image file to jpg

> GET /, /readme - Web Service Readme

### /wav, /bmp

Curl Ex:

> curl -F "file=@input.mp3" 127.0.0.1:3000/wav  > output.wav

> curl -F "file=@input.jpg" 127.0.0.1:3000/bmp  > output.bmp
