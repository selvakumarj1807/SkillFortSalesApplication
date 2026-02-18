import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
    const phoneNumber = "919344993939"; // Your WhatsApp number with country code
    const message = "Hello, I need more information";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
            <FaWhatsapp size={28} />
        </a>
    );
}
