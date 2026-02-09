import PageMeta from "../../components/common/PageMeta";
import UserAuthPageLayout from "./UserAuthPageLayout";
import UserSignInForm from "../../components/auth/UserSignInForm";

export default function SignIn() {
    return (
        <>
            <PageMeta
                title="Skill Fort | User SignIn Form"
                description="User SignIn Form"
            />
            <UserAuthPageLayout>
                <UserSignInForm />
            </UserAuthPageLayout>
        </>
    );
}
