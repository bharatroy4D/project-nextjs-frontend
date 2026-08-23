import LoginForm from "../_component/LoginFrorm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
        {/* FROM GENERAC TEXTS */}
        <div className=" space-y-2 text-center">
          <h1 className="text-3xl font-bold">Wellcome back?</h1>
          <p className="text-gray-500 ">Enter your Credentials to access your account</p>
        </div>

        {/* LOGIN FORM */}
        <LoginForm />

      </div>
    </div>
  )
}
