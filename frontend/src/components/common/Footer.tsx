import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
    const handleClick = () => {
        const phone = "+919344993939";
        const whatsapp = `https://wa.me/${phone.replace("+", "")}`;

        // Detect mobile device
        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        if (isMobile) {
            window.location.href = `tel:${phone}`;   // Mobile → Dial
        } else {
            window.open(whatsapp, "_blank");         // Desktop → WhatsApp
        }
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "-15px" }}>
            <footer className="bottom-0  text-black z-50 py-4">
                <div className="max-w-6xl mx-auto px-4 py-3
                      flex flex-col md:flex-col
                      items-center justify-center gap-2 md:gap-6">

                    {/* ICONS FIRST */}
                    <div className="flex items-center justify-center gap-6 text-xl">
                        <a href="https://www.instagram.com/skillfort_institute?igsh=MTI4bHBtZnM2MDl5dg==" className="hover:text-pink-400 transition" target="_blank">
                            <FaInstagram />
                        </a>

                        <a href="https://www.facebook.com/share/1AcrRyVjoU/" className="hover:text-blue-400 transition" target="_blank">
                            <FaFacebook />
                        </a>

                        <a href="https://www.linkedin.com/company/skillfortinstitute/" className="hover:text-blue-300 transition" target="_blank">
                            <FaLinkedin />
                        </a>

                        <button
                            onClick={handleClick}
                            className="hover:text-green-400 transition text-xl"
                            title="Call SkillFort"
                        >
                            <FaPhoneAlt />
                        </button>
                    </div>

                    {/* TEXT NEXT */}
                    <div>
                        <p className="text-sm">
                            © 2026 - SkillFort
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
