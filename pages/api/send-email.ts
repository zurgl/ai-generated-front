import type { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log(process.env.MAILGUN_API_KEY!);
    console.log(process.env.MAILGUN_DOMAIN!);

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY!,
    });

    console.log(mg);

    mg.messages
      .create(process.env.MAILGUN_DOMAIN!, {
        from: "AI Generated mailgun@ai-generated.dev'",
        to: ["elayar.yacine@gmail.com"],
        subject: "Mailgun is working",
        text: "Testing some Mailgun awesomness!",
        html: "<h1>Testing some Mailgun awesomness!</h1>",
      })
      .then((msg) => console.log(msg))
      .catch((err) => console.error(err));

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    let errorMessage = error instanceof Error ? error.message : "Unknown Error";
    res.status(500).json(errorMessage);
  }
}
