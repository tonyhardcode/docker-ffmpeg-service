exports.types = {
    bmp: {
        extension: 'bmp',
        outputOptions: [
            '-s 128x32',
            '-pix_fmt monow',
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
};
