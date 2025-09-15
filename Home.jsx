import React from "react";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Welcome to AI Boutique</h1>
        <p>Your personal AI stylist for the perfect outfit.</p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We help you find your style, whether for a{" "}
          <i>wedding, office, or casual outing</i>, we make fashion simple.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email us at: contact@aiboutique.com</p>
        <p>Mobile.No: 9874562356</p>
        <p>Instagram: ai_botique</p>
        <p>Facebook: Aibotique</p>
        <p>Twitter: @aibotique</p>

        {/* Add Image Below */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xZArX3HBxjfbrZVUcMUe6LWbLQlYuCwE0g&s"
          alt="AI Boutique Store"
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "10px",
            marginTop: "15px",
            display: "block",
          }}
        />
      </section>
    </div>
  );
}

export default Home;
