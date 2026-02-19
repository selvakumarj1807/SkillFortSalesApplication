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

        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        if (isMobile) {
            window.location.href = `tel:${phone}`;
        } else {
            window.open(whatsapp, "_blank");
        }
    };

    return (
        <div className="flex justify-center" style={{ marginBottom: '-15px' }}>
            <footer className="bottom-0 z-50 py-4
                text-black dark:text-white
                 w-full">

                <div className="max-w-6xl mx-auto px-4 py-3
                    flex flex-col items-center justify-center gap-4">

                    {/* ICONS */}
                    <div className="flex items-center justify-center gap-6 text-xl">

                        <a
                            href="https://instagram.com/skillfort_institute/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-pink-400"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.facebook.com/share/1AcrRyVjoU/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-blue-400"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/skillfortinstitute/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-blue-300"
                        >
                            <FaLinkedin />
                        </a>

                        <button
                            onClick={handleClick}
                            className="transition hover:text-green-400"
                            title="Call SkillFort"
                        >
                            <FaPhoneAlt />
                        </button>
                    </div>

                    {/* TEXT */}
                    <p className="text-sm">
                        © 2026 - SkillFort
                    </p>
                </div>
            </footer>
        </div>
    );
}
