"use client";
import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923018204493"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
}
