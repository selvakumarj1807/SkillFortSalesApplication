import PageBreadcrumb from "../components/common/PageBreadCrumb";
import { useEffect } from "react";
import SalesAdminInfoCard from "../components/UserProfile/SalesAdminInfoCard";

export default function SalesAdminProfile() {
    useEffect(() => {
        document.title = "SkillFort | Sales Admin Profile";

        const meta = document.querySelector(
            "meta[name='description']"
        ) as HTMLMetaElement;

        if (meta) {
            meta.content = "SkillFort Sales Admin Profile Overview";
        }
    }, []);

    return (
        <>
            <PageBreadcrumb pageTitle="Profile" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                <div className="space-y-6">
                    <SalesAdminInfoCard />

                </div>
            </div>

            
        </>
    );
}
