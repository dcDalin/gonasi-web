import AuthFormLayout from '@/components/Forms/AuthForms/AuthFormLayout';
import LoginFormProvider from '@/components/Forms/AuthForms/LoginFormProvider';

export default function LoginForm() {
  return (
    <AuthFormLayout title='Login to your account'>
      <LoginFormProvider />
    </AuthFormLayout>
  );
}
