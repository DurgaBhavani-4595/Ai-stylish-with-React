import React, { useState } from "react";

const styleOptions = [
  {
    value: "traditional",
    label: "Traditional",
    img: "https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/945fa717-e280-46e1-a22a-5c492be90200/tn",
  },
  {
    value: "western",
    label: "Western",
    img: "https://imagef2.promeai.pro/process/do/85d341ff0ee8a345c6f9ef24d68384f3.webp?sourceUrl=/g/p/gallery/publish/2024/02/12/a0ab809a556542b8b68aee22e6a47c71.jpg&x-oss-process=image/resize,w_500,h_500/format,webp&sign=41fd9dc986acc222b003b5294a65991d",
  },
  {
    value: "casual",
    label: "Casual",
    img: "https://imagef2.promeai.pro/process/do/2e870518e41d0b1aa7ae1679df6589f6.webp?sourceUrl=/g/p/gallery/publish/2025/08/08/3b081f9f4e844f9a98ff1c95bbf38812.jpg&x-oss-process=image/resize,w_500,h_500/format,webp&sign=faf4ca2a043d1ad97d50ebf3456d45b1",
  },
  {
    value: "party",
    label: "Party wear",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjzVkyX4vU-aAbKCUMbCX8EYspTKXkWmcEA&s",
  },
  {
    value: "fusion",
    label: "Fusion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nowOFl7pofpnWA-YE2e1j_Kw3FyGFQI0Ew&s",
  },
];

function StylePreferences() {
  const [formData, setFormData] = useState({
    bodyType: "slim",
    skinTone: "fair",
    style: "traditional",
    colors: ["#ff0000"],
    occasion: "wedding",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "color") {
      setFormData((prev) => ({
        ...prev,
        colors: [...prev.colors, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Your preferences have been submitted! 🎉 Our AI will recommend outfits soon.");
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <form id="styleForm" onSubmit={handleSubmit}>
        <label htmlFor="bodyType">Body Type:</label><br />
        <select id="bodyType" name="bodyType" onChange={handleChange} value={formData.bodyType}>
          <option value="slim">Slim</option>
          <option value="athletic">Athletic</option>
          <option value="curvy">Curvy</option>
          <option value="plus-size">Plus-size</option>
        </select>
        <br /><br />

        <label htmlFor="skinTone">Skin Tone:</label><br />
        <select id="skinTone" name="skinTone" onChange={handleChange} value={formData.skinTone}>
          <option value="fair">Fair</option>
          <option value="wheatish">Wheatish</option>
          <option value="dark">Dark</option>
          <option value="olive">Olive</option>
        </select>
        <br /><br />

        <label>Style Preference:</label><br />
        {styleOptions.map(({ value, label, img }) => (
          <label key={value} style={{ display: "flex", alignItems: "center", marginBottom: "8px", cursor: "pointer" }}>
            <input
              type="radio"
              name="style"
              value={value}
              checked={formData.style === value}
              onChange={handleChange}
              style={{ cursor: "pointer" }}
            />
            <img
              src={img}
              alt={label}
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "8px",
                marginRight: "8px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            {label}
          </label>
        ))}
        <br />

        <label>Favorite Colors:</label><br />
        {[
          { name: "Red", defaultColor: "#ff0000" },
          { name: "Blue", defaultColor: "#0000ff" },
          { name: "Green", defaultColor: "#00ff00" },
          { name: "Yellow", defaultColor: "#ffff00" },
          { name: "Black", defaultColor: "#000000" },
          { name: "White", defaultColor: "#ffffff" },
          { name: "Pink", defaultColor: "#ffc0cb" },
          { name: "Brown", defaultColor: "#8b4513" },
          { name: "Gray", defaultColor: "#808080" },
          { name: "Purple", defaultColor: "#800080" },
        ].map(({ name, defaultColor }, idx) => (
          <div key={idx}>
            {name}:{" "}
            <input type="color" name="colors" defaultValue={defaultColor} onChange={handleChange} />
          </div>
        ))}
        <br />

        <label htmlFor="occasion">Occasion:</label><br />
        <select id="occasion" name="occasion" onChange={handleChange} value={formData.occasion}>
          <option value="wedding">Wedding</option>
          <option value="office">Office</option>
          <option value="casual">Casual Outing</option>
          <option value="festival">Festival</option>
          <option value="party">Party</option>
        </select>
        <br /><br />

        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default StylePreferences;
