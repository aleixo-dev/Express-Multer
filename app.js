import express, { response } from 'express';
import multer from 'multer';
import path from 'path';
import { admin } from './firebase-config/firebase-config-credentials.js'

const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/turism', upload.single('image'), async (request, response) => {

    try {

        if (!request.file) {
            return response.status(400).send({
                message: 'Nenhuma imagem enviada.'
            })
        }

        const bucket = admin.storage().bucket();
        const fileExtension = path.extname(request.file.originalname);
        const fileName = Date.now() + fileExtension;
        const file = bucket.file(fileName);

        file.createWriteStream().end(request.file.buffer);

        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`

        return response.status(200).send({
            message: 'upload bem sucedido.',
            imageUrl: publicUrl
        });

    } catch (error) {
        console.log(error)
    }

});

export { app };