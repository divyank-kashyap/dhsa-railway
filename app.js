const { userModel } = require("./db");
const express = require("express");
const z = require("zod");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

// validateUser =(req, res, next)=> {
//     const { fullName, phoneNumber, collegeName, courseName, year, nativePlace, email } = req.body;
//     console.log(fullName);
    
//     const userSchema = z.object({
//         fullName: z.string(),
//         phoneNumber: z.number(),
//         collegeName: z.string(),
//         courseName: z.string(),
//         year: z.number(),
//         nativePlace: z.string(),
//         email: z.string().email()
//     });

//     const result = userSchema.safeParse({fullName, phoneNumber, collegeName, courseName, year, nativePlace, email});

//     if (!result.success) {
//         console.log(result)
//         return res.status(400).json({
//             message: "Validation failed"
//         })
//     }
//     next();
    
// }


app.post('/signup',async (req, res) => {
    const { fullName, phoneNumber, collegeName, courseName, year, nativePlace, email } = (req.body);
    console.log("fullName in index.js: " + fullName);
    await userModel.create({
        fullName: fullName,
        phoneNumber: phoneNumber,
        collegeName: collegeName,
        courseName: courseName,
        year: year,
        nativePlace: nativePlace,
        email: email
    });
    console.log("You are signed up")

    res.json("Your are signed up");

})

app.listen(port, ()=> {
    console.log(`dhsa app runnning on port ${port}`);
});

