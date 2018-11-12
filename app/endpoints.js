exports.types = {
    jpg: {
        extension: 'jpg',
        outputOptions: [
            '-pix_fmt yuv422p',
        ],
    },
    mp3: {
        extension: 'mp3',
        outputOptions: [
            '-codec:a libmp3lame',
        ],
    },
    wav: {
        extension: 'wav',
        outputOptions: [
            '-ac 1',
            '-ar 16000',
            '-t 20',
            '-sample_fmt s16'
        ],
    },
    mp4: {
        extension: 'mp4',
        outputOptions: [
            '-codec:v libx264',
            '-profile:v high',
            '-r 15',
            '-crf 23',
            '-preset ultrafast',
            '-b:v 500k',
            '-maxrate 500k',
            '-bufsize 1000k',
            '-vf scale=-2:640',
            '-threads 8',
            '-codec:a libfdk_aac',
            '-b:a 128k',
        ],
    },
};
