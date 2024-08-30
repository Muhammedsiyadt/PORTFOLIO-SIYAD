import React from "react";
import WhatsAppIcon from '../../Assets/watsapp.jpeg'; 

const WhatsAppButton = () => {
  return (
    <a 
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",  // Changed from 'right' to 'left' to move it to the left side
        zIndex: "1000",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",  // Adding shadow effect
        transition: "transform 0.2s, box-shadow 0.2s" // Adding transition for smooth hover effect
      }}
      href="https://wa.me/917558001145?text=Hi%20there!" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover", 
          borderRadius: "10px" 
        }}  
        src={WhatsAppIcon} 
        alt="WhatsApp Icon" 
      />
    </a>
  );
}

export default WhatsAppButton;
