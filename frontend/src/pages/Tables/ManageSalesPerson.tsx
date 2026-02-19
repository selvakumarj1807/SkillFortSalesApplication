import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useEffect } from "react";
import ManageSalesPersonTable from "../../components/tables/BasicTables/ManageSalesPersonTable";

export default function BasicTables() {
    useEffect(() => {
        document.title = "SkillFort | Manage Sales Person";

        const meta = document.querySelector(
            "meta[name='description']"
        ) as HTMLMetaElement;

        if (meta) {
            meta.content = "SkillFort Sales Admin Manage Sales Person Overview";
        }
    }, []);
    return (
        <>
            <PageBreadcrumb pageTitle="Manage Sales Person" />
            <div className="space-y-6">

                <ManageSalesPersonTable />

            </div>
        </>
    );
}
