import PageBreadcrumb from "../components/common/PageBreadCrumb";
import { useEffect } from "react";
import SalesUserInfoCard from "../components/UserProfile/SalesUserInfoCard";
import SalesUserPersonalInformation from "../components/form/form-elements/SalesUserPersonalInformation";
import Footer from "../components/common/Footer";
import WhatsAppFloat from "../components/common/WhatsAppFloat";

export default function SalesUserProfile() {
    useEffect(() => {
        document.title = "SkillFort | Sales User Profile";

        const meta = document.querySelector(
            "meta[name='description']"
        ) as HTMLMetaElement;

        if (meta) {
            meta.content = "SkillFort Sales User Profile Overview";
        }
    }, []);

    return (
        <>
            <PageBreadcrumb pageTitle="Profile" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                <div className="space-y-6">
                    <SalesUserInfoCard />

                    <SalesUserPersonalInformation />
                </div>
            </div>

            <WhatsAppFloat />

            <Footer />
        </>
    );
}
