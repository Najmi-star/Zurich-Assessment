import { LoginForm } from "@/app/(login)/login/form";

export default function LoginPage() {
  return (
    <>
      <section className="min-h-screen">
        <div className="h-full flex justify-center items-center">
            <LoginForm />
        </div>
      </section>
    </>
  );
}