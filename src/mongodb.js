const mongoose=require("mongoose")

const mongoURL= 'mongodb+srv://aktcool4:Qwerty12345@cluster0.ivdvqwg.mongodb.net/'
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// mongoose.connect("mongodb://localhost:27017/LoginDatbase")
// .then(()=>{
//     console.log('mongoose connected');
// })
// .catch((e)=>{
//     console.log('failed');
// })

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=db;
module.exports=LogInCollection;