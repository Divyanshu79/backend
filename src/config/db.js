import mongoose from 'mongoose';



let connectDB = async () => {
    try {

        const dbconnection = mongoose.connect(process.env.MONGO)
        console.log(`database is connected successfully `)

    } catch (error) {
        console.log(error)

    }
};
export default connectDB;