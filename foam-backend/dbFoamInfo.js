import mongoose from 'mongoose';
import validator from 'mongoose-validator';


const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You need to set a name'],
    },
    description: {
        type: String,
        required: [true, 'You need to set a description']
    },
    imgUrl: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    }
});

cardSchema.path('imgUrl').validate((val) => {
    const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');



export default mongoose.model('foamproducts', cardSchema);