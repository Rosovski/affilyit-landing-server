const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

const axios = require("axios");

const { subscribeTemplate, partnerTemplate } = require("./utils/emailTemplate");

app.post("/api/email", async (req, res) => {
  const URL = process.env.BREVO_URL;
  const apiKey = process.env.BREVO_API_KEY;

  const { type, email, partnerRequest } = req.body;

  let subject;
  let htmlContent;

  switch (type) {
    case "subscribeNewsLetter":
      subject = "You've got 1 new subscriber!";
      htmlContent = subscribeTemplate(email);
      break;
    case "partnerWithAffilyit":
      subject = "You've got 1 new partner request!";
      htmlContent = partnerTemplate(partnerRequest);
      break;
    default:
      break;
  }

  const emailData = {
    sender: {
      name: "Zhonghua Bao",
      email: "zhonghuabao1992@gmail.com",
    },
    to: [
      {
        email: "gi@affilyit.ai",
      },
    ],
    subject,
    htmlContent,
  };

  try {
    const response = await axios.post(URL, emailData, {
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
    });
    res
      .status(201)
      .json({ message: "Success!", messageId: response.data.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  const WEBHOOK_URL = process.env.WEBHOOK_URL;

  try {
    await axios.post(
      WEBHOOK_URL,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json({ message: "Success!" });
  } catch (error) {
    console.error("Error sending to GoHighLevel webhook:", error);
    res.status(500).json({ message: "Failed to send to GoHighLevel webhook" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
