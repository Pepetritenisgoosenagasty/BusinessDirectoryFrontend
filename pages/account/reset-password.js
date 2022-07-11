import AuthLayout from "@/components/AuthLayout";
import PageTitle from "@/components/MetaHead";
import ResetPassword from "@/modules/Auth/ResetPassword";

const ResetPasswordPage = () => {
  return (
    <div>
      <AuthLayout>
        <PageTitle title="Reset Password" />
        <div>
          <ResetPassword />
        </div>
      </AuthLayout>
    </div>
  );
};

export default ResetPasswordPage;