import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        About Us
      </h1>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        Welcome to <span className="font-semibold">YourCompany</span> — where quality meets trust! 
        We are a passionate team of professionals dedicated to providing top-notch products and services to make your life easier, more stylish, and efficient.
      </p>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        Founded in 2023, our mission is to offer affordable and high-quality solutions for everyone. 
        Whether you're shopping for the latest gadgets, stylish accessories, or reliable tools, we’ve got you covered.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        To become a trusted name worldwide by focusing on innovation, customer satisfaction, and sustainable business practices.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
      <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg leading-relaxed">
        <li>Customer First — Your happiness is our success.</li>
        <li>Honesty and Transparency in every transaction.</li>
        <li>Continuous Learning and Improvement.</li>
        <li>Strong Teamwork & Ethical Responsibility.</li>
      </ul>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-8">
        Thank you for trusting <span className="font-semibold">YourCompany</span>. 
        We look forward to serving you with dedication and care!
      </p>
    </div>
  );
};

export default AboutUs;
