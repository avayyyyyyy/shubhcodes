import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center text-center mb-10">
      <div className="space-y-3">
        <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-1 text-sm">
          Contact
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Want to chat? Just shoot me a dm{" "}
          <Link
            href={"https://x.com/shubhcodes"}
            className="text-blue-500 hover:underline"
          >
            with a direct question on x
          </Link>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </div>
  );
};

export default Contact;
