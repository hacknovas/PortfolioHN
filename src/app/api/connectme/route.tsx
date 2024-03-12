import { modelConnect } from "@/utils/models/myconnects"
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

    const saveDate = new modelConnect(data);
    saveDate.save();

    const mailOptions = {
        from: "Prathamesh Doni",
        to: data.Email,
        subject: "Hello from Prathamesh Doni",
        text: "Thank For reaching out...! \n\n We Recieved details...Stay tuned for reply.",
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
        result: "Email sent."
    })
}