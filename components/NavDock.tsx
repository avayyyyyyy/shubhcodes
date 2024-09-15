"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  //   Computer,
  Home,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  //   Globe
} from "lucide-react";
import Link from "next/link";

export default function NavDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock
        direction="middle"
        className="z-50 bottom-6 m-auto pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu"
      >
        <TooltipProvider>
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" })
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator
            orientation="vertical"
            className="mx-2 h-8 self-center bg-black/40"
          />
          {Object.entries(DATA.contact.social).map(
            ([key, value]) =>
              value.navbar && (
                <DockIcon key={key}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={value.url}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-xl transition-all duration-300 hover:bg-accent"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <value.icon className="size-6" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={5}>
                      <p>{key}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              )
          )}
          <Separator
            orientation="vertical"
            className="mx-2 h-8 self-center bg-black/40"
          />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </TooltipProvider>
      </Dock>
    </div>
  );
}

const DATA = {
  navbar: [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    // {
    //   href: "/projects",
    //   label: "Projects",
    //   icon: Computer,
    // },
  ],
  contact: {
    social: {
      Twitter: {
        url: "https://x.com/shubhcodes",
        icon: TwitterIcon,
        navbar: true,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/shubhcodes",
        icon: LinkedinIcon,
        navbar: true,
      },
      GitHub: {
        url: "https://github.com/avayyyyyyy",
        icon: GithubIcon,
        navbar: true,
      },
      //   Portfolio: {
      //     url: "https://shubhcodes.me",
      //     icon: GlobeIcon,
      //     navbar: true,
      //   },
    },
  },
};
