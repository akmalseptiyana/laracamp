import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Navbar } from "./navbar";
import { Button } from "../ui/button";

type Props = {
  children: ReactNode;
};

export function LayoutRoot({ children }: Props) {
  const { pathname } = useRouter();

  return (
    <>
      <Navbar
        className={{
          active: "text-purple",
          idle: "text-navy",
        }}
        cta={
          <>
            <Link href="/sign-in">
              <Button className="relative px-8" variant="secondary">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="relative px-8" variant="primary">
                Sign Up
              </Button>
            </Link>
          </>
        }
        pathname={pathname}
      >
        <Link href="/">Program</Link>
        <Link href="/mentor">Mentor</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/business">Business</Link>
      </Navbar>
      {children}
    </>
  );
}
