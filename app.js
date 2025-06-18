const express = require("express");

const app = express();

const dotenv = require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");

app.use(cors());

const axios = require("axios");

app.post("/api/email", async (req, res) => {
  const URL = process.env.BREVO_URL;
  const apiKey = process.env.BREVO_API_KEY;
  console.log("url: ", URL);
  const { message } = req.body;

  const emailData = {
    sender: {
      name: "Zhonghua Bao",
      email: "zhonghuabao1992@gmail.com",
    },
    to: [
      {
        email: "shawn.bao1992@gmail.com",
      },
    ],
    subject: "test email",
    htmlContent: `<html><body><h1>${message}</h1></body></html>`,
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
      .json({ message: "Email sent!", messageId: response.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
