import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Define your FAQ data array with 20 questions and answers
  const faqData = [
    {
      question: 'Q: What is the cost of using this platform?',
      answer: 'A: There are no upfront costs to use our platform. We charge a small monthly fee based on your usage.',
    },
    {
      question: 'Q: Can I cancel my subscription anytime?',
      answer: 'A: Yes, you can cancel your subscription at any time. There are no long-term contracts.',
    },
    {
      question: 'Q: How can I contact customer support?',
      answer: 'A: You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567.',
    },
    {
      question: 'Q: Is my data secure on this platform?',
      answer: 'A: Yes, we take data security very seriously. We use encryption and follow industry best practices to protect your data.',
    },
    {
      question: 'Q: Do you offer a free trial?',
      answer: 'A: Yes, we offer a free trial period for new users. You can sign up and try out our platform for free for a limited time.',
    },
    {
      question: 'Q: Can I upgrade or downgrade my plan?',
      answer: 'A: Yes, you can upgrade or downgrade your plan at any time. Just contact our support team, and they will assist you with the process.',
    },
    {
      question: 'Q: How often do you update your platform?',
      answer: 'A: We regularly update our platform with new features and improvements. Updates are usually rolled out every month.',
    },
    {
      question: 'Q: Can I customize my profile?',
      answer: 'A: Yes, you can customize your profile with your personal information, profile picture, and other details.',
    },
    {
      question: 'Q: How long does it take to set up an account?',
      answer: 'A: Setting up an account is quick and easy. It usually takes just a few minutes to complete the registration process.',
    },
    {
      question: 'Q: Do you offer discounts for non-profit organizations?',
      answer: 'A: Yes, we offer special discounts for non-profit organizations. Contact our sales team to learn more about our non-profit pricing.',
    },
    {
      question: 'Q: What payment methods do you accept?',
      answer: 'A: We accept payments via credit card, debit card, PayPal, and bank transfer. You can choose the payment method that works best for you.',
    },
    {
      question: 'Q: Can I access my account from multiple devices?',
      answer: 'A: Yes, you can access your account from any device with an internet connection. Just log in using your username and password.',
    },
    {
      question: 'Q: Is there a mobile app available?',
      answer: 'A: Yes, we have a mobile app available for iOS and Android devices. You can download it from the App Store or Google Play Store.',
    },
    {
      question: 'Q: Can I share my account with others?',
      answer: 'A: No, sharing your account with others is not allowed. Each user should have their own account with their unique login credentials.',
    },
    {
      question: 'Q: How do I reset my password?',
      answer: 'A: You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions to reset your password.',
    },
    {
      question: 'Q: Are there any restrictions on file uploads?',
      answer: 'A: Yes, there are certain file size and format restrictions for uploads. Refer to our documentation for more information on supported file types and sizes.',
    },
    {
      question: 'Q: Can I change my username?',
      answer: 'A: Yes, you can change your username in your account settings. Choose a new username and save your changes to update your profile.',
    },
    {
      question: 'Q: Do you offer training for new users?',
      answer: 'A: Yes, we offer training sessions for new users to help them get started with our platform. Contact our support team to schedule a training session.',
    },
    {
      question: 'Q: How do I delete my account?',
      answer: 'A: You can delete your account by contacting our support team and requesting an account deletion. Once your account is deleted, all your data will be permanently removed from our system.',
    },
    {
      question: 'Q: Can I export my data from your platform?',
      answer: 'A: Yes, you can export your data from our platform in various formats. Visit the data export section in your account settings to download your data.',
    },
  ];

  return (

    <div className="faq-main-container">
      <h1 className='faq-heading'>Frequently Asked Questions (FAQ's)</h1>

      <div className='faq-container'>
        {faqData.map((faq, index) => (
          <details key={index} open={openIndex === index} onClick={() => handleToggle(index)}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
