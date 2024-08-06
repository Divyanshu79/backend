import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




const connectDB = async () => {
    try {
        const dbConnection = await mongoose.connect(`${process.env.MONGO}/${DB_NAME}`)
        console.log(`Database is connectd successfully!! DB HOST ${dbConnection.connection.host}`)

    }
    catch (error) {
        console.log("Error", error);
        process.exit(1);
        // throw error;

    }
}


export default connectDB;










// This is efis concept to immediately execute the function and we put semicoln        before using efis it may be that there is missig semicoln in previous statement ; ()()
/*
(async () => {
    try {
        const connectDB = await mongoose.connect(`${process.env.MONGO} / ${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error

        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
        throw error;

    }
})()


*/