import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4e8dc9d24b52cb",
        pass: "361d629f08cf0d",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Feedget Team <hello@feedget.com",
            to: "Arthur David <arthurdavid000@gmail.com>",
            subject,
            html: body,
        });
    }
}
