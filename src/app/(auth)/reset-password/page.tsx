import { GalleryVerticalEnd } from "lucide-react";

import { ResetPasswordFrom } from "@/components/reset-password";
import Image from "next/image";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full">
            <div className="mx-auto mb-5 flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <ResetPasswordFrom />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="auth-right relative hidden justify-center bg-[#201e1d] text-white md:flex md:items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-regular mb-2 text-center font-playfair text-3xl md:mb-4">
            Start your journey here
          </h2>
          @
          <p className="text-white-500 mb-4 max-w-sm text-center text-sm font-light leading-relaxed md:mb-6">
            Build one simple profile and let our AI work it&apos;s magic.
            We&apos;ll automatically apply to hundreds of jobs for you. Focus on
            what matters most - your skills and experience.
          </p>
          <Image
            src="/nerd.jpg"
            alt="nerd"
            width={40}
            height={40}
            className="mx-auto rounded-full"
          />
          <p className="mt-2 text-sm font-semibold md:text-base">
            Yeabsra Ashebir
          </p>
          <p className="text-xs opacity-80 md:text-sm">Developer</p>
        </div>
      </div>
    </div>
  );
}
