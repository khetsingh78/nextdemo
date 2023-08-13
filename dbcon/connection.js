import mongoose from "mongoose";

export default async function connect() {
    try {
        // console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on('connect', () => {
            console.log('connection is successfully!');
        })
        connection.on('error', (err) => {
            console.log('connetion failed' + err);
        })
        process.exit();

    } catch (error) {

        console.log('connetion error');
    }
}


