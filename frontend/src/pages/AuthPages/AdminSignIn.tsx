import PageMeta from "../../components/common/PageMeta";
import AdminAuthPageLayout from "./AdminAuthPageLayout";
import AdminSignInForm from "../../components/auth/AdminSignInForm";

export default function SignIn() {
    return (
        <>
            <PageMeta
                title="Skill Fort | Admin SignIn Form"
                description="Admin SignIn Form"
            />
            <AdminAuthPageLayout>
                <AdminSignInForm />
            </AdminAuthPageLayout>
        </>
    );
}
