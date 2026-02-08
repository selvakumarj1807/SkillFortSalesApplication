import PageBreadCrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import StudentReferalInputs from "../../components/form/form-elements/StudentReferalInputs";

export default function FormElements() {
    return (
        <div>
            <PageMeta
                title="Skill Fort | Add Student Referal"
                description="Add a new student referal to the system"
            />
            <PageBreadCrumb pageTitle="Add Student Referal" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="col-span-12">
                    <StudentReferalInputs />
                </div>
            </div>
        </div>
    );
}
