import { useEffect } from "react";
import AdminPageBreadCrumb from "../../components/common/AdminPageBreadCrumb";
import SalesPersonInputs from "../../components/form/form-elements/SalesPersonInputs";

export default function FormElements() {
    useEffect(() => {
    document.title = "SkillFort | Add Sales Person";

    const meta = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement;

    if (meta) {
      meta.content = "SkillFort Sales Admin Add Sales Person Overview";
    }
  }, []);
    return (
        <div>
            <AdminPageBreadCrumb pageTitle="Add Sales Person" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="col-span-12">
                    <SalesPersonInputs />
                </div>
            </div>
        </div>
    );
}
