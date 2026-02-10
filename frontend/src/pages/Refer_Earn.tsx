import PageBreadCrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

// const REFER_LINK = "https://skill-fort-sales-application.vercel.app/refer?code=SKILL123";

const REFER_LINK = "https://skill-fort-sales-application.vercel.app/";

export default function Refer_Earn() {
    const handleWhatsAppShare = () => {
        const text = `Join Skill Fort using my referral link and earn rewards! \n${REFER_LINK}`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    const handleCopyLink = async () => {
        await navigator.clipboard.writeText(REFER_LINK);
        alert("Referral link copied!");
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: "Refer & Earn",
                text: "Join Skill Fort and earn rewards!",
                url: REFER_LINK,
            });
        } else {
            alert("Sharing not supported on this device");
        }
    };

    return (
        <>
            <PageMeta
                title="SkillFort | Refer & Earn"
                description="Refer Skill Fort to your friends and earn rewards"
            />

            <PageBreadCrumb pageTitle="Refer & Earn" />

            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[680px] text-center">

                    {/* Hero Image */}
                    <img
                        src="/images/sfImg/referImg.png"
                        alt="Refer & Earn"
                        className="mx-auto w-full max-w-sm rounded-xl"
                    />

                    {/* Title */}
                    <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                        Spread the word
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Refer <span className="font-semibold">Skill Fort</span> to your friends today
                    </p>

                    {/* Referral Link Box */}
                    <div className="mt-6 flex items-center justify-between gap-2 rounded-xl border border-gray-300 bg-gray-50 p-3 text-sm dark:border-gray-700 dark:bg-gray-900">
                        {/* Clickable Referral Code */}
                        <a
                            href={REFER_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="truncate font-semibold text-black-600 hover:underline"
                        >
                            SKILL123
                        </a>

                        {/* Copy Button */}
                        <button
                            onClick={handleCopyLink}
                            className="rounded-lg bg-orange-500 px-4 py-1 text-white hover:bg-orange-600"
                        >
                            Copy
                        </button>
                    </div>


                    {/* Actions */}
                    <div className="mt-8 flex justify-center gap-4">

                        {/* WhatsApp */}
                        <button
                            onClick={handleWhatsAppShare}
                            className="flex w-32 flex-shrink-0 flex-col items-center gap-2 rounded-xl border border-gray-200 p-4 transition hover:bg-green-50 dark:border-gray-700 dark:hover:bg-green-900/20"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.645.86 5.096 2.313 7.086L4 29l7.127-2.279A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16.001 3zm0 21.818a9.8 9.8 0 0 1-4.999-1.366l-.357-.212-4.23 1.352 1.382-4.117-.232-.375A9.79 9.79 0 1 1 16 24.818zm5.29-7.307c-.288-.145-1.703-.84-1.966-.936-.262-.096-.453-.145-.644.145-.192.288-.741.936-.908 1.127-.167.192-.333.216-.62.072-.288-.145-1.217-.448-2.319-1.43-.857-.765-1.435-1.709-1.603-1.997-.167-.288-.018-.444.126-.588.129-.128.288-.333.432-.5.144-.167.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.145-.644-1.552-.884-2.127-.233-.56-.47-.484-.644-.493l-.552-.01c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.145.192 2.032 3.108 4.92 4.356.687.296 1.223.473 1.64.605.688.218 1.314.187 1.808.113.552-.083 1.703-.696 1.943-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z" />
                                </svg>

                            </div>

                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                WhatsApp
                            </span>
                        </button>

                        {/* Share */}
                        <button
                            onClick={handleNativeShare}
                            className="flex w-32 flex-shrink-0 flex-col items-center gap-2 rounded-xl border border-gray-200 p-4 transition hover:bg-purple-50 dark:border-gray-700 dark:hover:bg-purple-900/20"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.02-4.11A2.99 2.99 0 1 0 14 5c0 .24.04.47.09.7L7.07 9.81A3 3 0 1 0 7 14c.24 0 .47-.04.7-.09l7.11 4.16c.5.46 1.17.75 1.89.75a3 3 0 1 0 0-6z" />
                                </svg>

                            </div>

                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                Share
                            </span>
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
}
