import dotenv from 'dotenv'
import connectDB from "./db";

dotenv.config({
    path: '/.env'
})

connectDB()
// const app = express();
/*
first approch to connect database
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listing on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/

