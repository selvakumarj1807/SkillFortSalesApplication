import PageMeta from "../../components/common/PageMeta";
import UserAuthPageLayout from "./UserAuthPageLayout";
import UserSignUpForm from "../../components/auth/UserSignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Skill Fort | SignUp"
        description="SignUp"
      />
      <UserAuthPageLayout>
        <UserSignUpForm />
      </UserAuthPageLayout>
    </>
  );
}
