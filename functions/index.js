const functions = require('firebase-functions');
const cors = require('cors')({origin: true})
const fs = require('fs')
const uuid = require('uuid-v4')
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'webmarket-007',
    keyFilename: 'webmarket-007.json'
})


 exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try{
            fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64')

            const bucket = storage.bucket('webmarket-007.appspot.com')
            const id = uuid()
            bucket.upload('/tmp/imageToSave.jpg', {
                uploadType: 'media',
                destination: `/images/${id}.jpg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
            },(erro, file) => {
                if (erro){
                    console.log(erro)
                    return response.status(500).json({error: erro})
                }
                else{
                    const fileName = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/' + bucket.name + '/o/' + fileName + '?alt=media&token=' + id

                    return response.status(201).json({imageUrl: imageUrl})
                }
            }
            )
        }
        catch(erro){
            coinsole.uploadImage(erro)
            return response.status(500).json({error: erro})
        }
    })
 });
