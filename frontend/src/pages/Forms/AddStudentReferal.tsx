import { useEffect } from "react";
import AdminPageBreadCrumb from "../../components/common/AdminPageBreadCrumb";
import StudentReferalInputs from "../../components/form/form-elements/StudentReferalInputs";

export default function FormElements() {
    useEffect(() => {
    document.title = "SkillFort | Add Student Referal";

    const meta = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement;

    if (meta) {
      meta.content = "SkillFort Sales Admin Add Student Referal Overview";
    }
  }, []);
    return (
        <div>
            <AdminPageBreadCrumb pageTitle="Add Student Referal" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="col-span-12">
                    <StudentReferalInputs />
                </div>
            </div>
        </div>
    );
}
