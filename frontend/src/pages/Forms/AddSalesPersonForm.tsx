import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import SalesPersonInputs from "../../components/form/form-elements/SalesPersonInputs";

export default function FormElements() {
    return (
        <div>
            <PageMeta
                title="Skill Fort | Add Sales Person"
                description="Add a new sales person to the system"
            />
            <PageBreadcrumb pageTitle="Add Sales Person" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="col-span-12">
                    <SalesPersonInputs />
                </div>
            </div>
        </div>
    );
}
