import type { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY!,
  });

  mg.messages
    .create(process.env.MAILGUN_DOMAIN!, {
      from: "Excited User <mailgun@ai-generated.dev>",
      to: ["elayar.yacine@gmail.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomness!",
      html: "<h1>Testing some Mailgun awesomness!</h1>",
    })
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));

  return res.status(200).json({ message: "Email sent successfully" });
}
