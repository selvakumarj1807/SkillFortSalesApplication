import { useEffect } from "react";
import Footer from "../components/common/Footer";
import PageBreadCrumb from "../components/common/PageBreadCrumb";
import WhatsAppFloat from "../components/common/WhatsAppFloat";

export default function Blank() {
    useEffect(() => {
    document.title = "SkillFort | User Blank Page";

    const meta = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement;

    if (meta) {
      meta.content = "SkillFort Sales User Blank Page Overview";
    }
  }, []);
    return (
        <>
            <div>
                
                <PageBreadCrumb pageTitle="Blank Page" />
                <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                    <div className="mx-auto w-full max-w-[630px] text-center">
                        <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                            Card Title Here
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                            Start putting content on grids or panels, you can also use different
                            combinations of grids.Please check out the dashboard and other pages
                        </p>
                    </div>
                </div>

                <WhatsAppFloat />

                <Footer />
            </div>
        </>
    );
}
