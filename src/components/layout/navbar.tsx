import { ReactNode, useState, Children } from "react";
import { Poppins } from "next/font/google";

import { Brand } from "../ui/brand";
import { cn } from "@/utils/classnames";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

interface NavbarProps {
  children: ReactNode;
  cta: ReactNode;
  pathname: string;
  className: {
    active: string;
    idle: string;
  };
}

export function Navbar({ children, cta, pathname, className }: NavbarProps) {
  const [isMenuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className="shadow-[0px_6px_60px_rgba(22,28,51,0.06)]">
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        <Brand variant="dark" className="mr-12 flex h-10 w-44 items-center" />

        <button
          className="relative z-30 flex h-7 w-7 flex-col items-center justify-center gap-y-1 transition-all hover:gap-y-2 lg:hidden"
          onClick={() => setMenuActive((prev) => !prev)}
        >
          <span
            className={cn(
              "h-1 w-7 bg-purple transition-all",
              isMenuActive ? "absolute top-3 rotate-45" : "rotate-0"
            )}
          ></span>
          <span
            className={cn(
              "h-1 w-7 bg-purple transition-all",
              isMenuActive ? "absolute top-3 rotate-45" : "rotate-0"
            )}
          ></span>
          <span
            className={cn(
              "h-1 w-7 bg-purple transition-all",
              isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0"
            )}
          ></span>
        </button>

        <div
          className={cn(
            "z-20 w-full flex-col items-center justify-center gap-y-8 bg-white lg:flex-row lg:justify-between",
            isMenuActive
              ? "fixed inset-0 flex"
              : "relative hidden md:flex md:bg-transparent"
          )}
        >
          <ul
            className={cn(
              "ml-auto mr-auto flex flex-col items-center gap-x-8 gap-y-8 lg:ml-0 lg:flex",
              isMenuActive ? "flex" : "md:hidden md:flex-row"
            )}
          >
            {Children.toArray(children).map((menu: any, i: number) => {
              return (
                <li className={poppins.className} key={i}>
                  {
                    <menu.type
                      {...menu.props}
                      className={
                        pathname === menu.props.href
                          ? className.active
                          : className.idle
                      }
                    >
                      {menu.props.children}
                    </menu.type>
                  }
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              "mx-auto flex flex-col gap-x-4 gap-y-8",
              isMenuActive ? "lg:mr-0 lg:flex-row" : "md:mr-0 md:flex-row"
            )}
          >
            {cta}
          </div>
        </div>
      </div>
    </header>
  );
}
