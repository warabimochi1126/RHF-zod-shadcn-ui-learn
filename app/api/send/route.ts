import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { username, subject, email, content, file } = await request.json();

    try {
        const { data, error } = await resend.emails.send({
            from:  'Acme <onboarding@resend.dev>',
            to: ["satomi920003@yahoo.co.jp"],
            subject: subject,
            react: EmailTemplate({ 
                username, 
                email,
                content
            }) as React.ReactElement,
            attachments: [{
                filename: file.name,
                content: file
            }]
        });

        if (error) {
            return NextResponse.json({ error });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}