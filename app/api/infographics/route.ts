import { NextRequest, NextResponse } from "next/server";
import path from "path";
const nodemailer = require("nodemailer");

  const infographics = [
    {
      title: "Green Card Pathways",
      pdfUrl: "TPL Global - Infographic (1).pdf",
    },
    {
      title: "Visitor VISA Process Timeline",
      pdfUrl: "TPL Global - Infographic 2 (1).pdf",
    },
    {
      title: "K-1 vs CR-1",
      pdfUrl: "T.P.L. Global - Infographic 3 (2).pdf",
    },
    {
      title: "Family Preference Chart Simplified",
      pdfUrl: "T.P.L. Infographic 4 (1).pdf",
    },
    {
      title: "U.S. Citizenship Process Roadmap",
      pdfUrl: "T.P.L. Infographic 5 (1).pdf",
    },
    {
      title: "Asylum Application Flow in the U.S",
      pdfUrl: "T.P.L. Infographic 6.pdf",
    },
    {
      title: "U Visa Benefits Breakdown",
      pdfUrl: "T.P.L. Infographic 7.pdf",
    },
    {
      title: "T Visa Protections Explained",
      pdfUrl: "T.P.L. Infographic 8.pdf",
    },
    {
      title: "Visitor Visa Denial Reasons",
      pdfUrl: "T.P.L. Global ( IG-Nov 1 ).pdf",
    },
    {
      title: "Marriage Green Card Document Checklist",
      pdfUrl: "T.P.L. Global ( IG-Nov 2 ).pdf",
    },
  ];

export async function POST(req: NextRequest) {
  if (req.method !== "POST") return NextResponse.json({});
  const { email, selectedInfographic } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
const selectedItem = infographics.find(
  (item) => item.title === selectedInfographic
);

  console.log(process.env.MAIL_PASS)
const fileName = selectedItem ? selectedItem.pdfUrl : null;

  try {
    const pdfPath = path.join(process.cwd(), "public", "assets", `${fileName}`)
    await transporter.sendMail({
      from: `T.P.L.Global ${process.env.MAIL_USER}`,
      to: email,
      subject: `Your Infographics is here!`,
      html: `
          <p>Hi there,</p>
          <p>Your <strong>${selectedInfographic} Infographics</strong> is here.</p>

          
          <p>Best regards,<br/>T.P.L. Global, LLC Team</p>
        `,
      attachments: {
        filename: `${selectedInfographic}.pdf`,
        path: pdfPath,
        FileType: "application/pdf",
      },
    });

    return NextResponse.json({ message: "success" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: e });
  }
}
