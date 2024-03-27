// import { modelConnect } from "@/utils/models/myconnects"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "creatives.doni@gmail.com",
            pass: process.env.NEXT_PUBLIC_EMAIL_KEY,
        },
    });

    const data = await req.json();

    // const saveDate = new modelConnect(data);
    // saveDate.save();

    const mailOptions = {
        from: "Prathamesh Doni",
        to: [data.Email, "creatives.doni@gmail.com"],
        subject: "Hello from Prathamesh Doni..!",
        html: `<p>Hello ${data.Name},</p>
    
        <p>Thank you for reaching out! Your message has been received and I will get back to you as soon as possible. Your patience is greatly appreciated.</p>
        
        <p>
        Here is your:
        <ul style="list-style-type:disc;">
            <li>Message: "${data.Message}"<br></li>
            <li>Contact Number: ${data.Phone}</li>
        </ul>
        
        
        </p>
        
        <p>Best regards,<br>
        <strong>Prathamesh Doni</strong></p>`,
    };


    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                console.error("Error sending email: ", error);
                reject(error);
            } else {
                console.log("Email sent: ", info.response);
                resolve(info);
            }
        });
    });

    return NextResponse.json({
        result: "Email Sent."
    })
}