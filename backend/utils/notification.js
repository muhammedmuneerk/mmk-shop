// utils/notification.js

import nodemailer from 'nodemailer';

const sendOrderStatusUpdateEmail = async (userEmail, orderId, status) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: `Order Status Update: ${orderId}`,
    text: `Your order ${orderId} is now ${status}.`,
  };

  await transporter.sendMail(mailOptions);
};

export { sendOrderStatusUpdateEmail };
