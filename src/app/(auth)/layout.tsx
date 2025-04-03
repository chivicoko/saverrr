import { ReactNode } from 'react';

export const metadata = {
  title: "Authentication",
  description: "Sign up and Login in with your details very well secure.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
      {children}
    </section>
  );
}
