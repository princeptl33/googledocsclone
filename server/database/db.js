import mongoose from "mongoose";

const Connection = async (username = 'prince', password = 'prince123') => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.wmjmq.mongodb.net/googledoc?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewurlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Erroe while connecting database', error);
    }
}

export default Connection;