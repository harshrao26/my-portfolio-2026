"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { CheckCircle, ArrowLeft, Mail, Phone } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Get user data from URL parameters (primary) or sessionStorage (fallback)
    const name =
      searchParams.get("name") || sessionStorage.getItem("contactName") || "";
    const email =
      searchParams.get("email") || sessionStorage.getItem("contactEmail") || "";
    const phone =
      searchParams.get("phone") || sessionStorage.getItem("contactPhone") || "";

    setUserData({ name, email, phone });

    // Clear session storage after reading (cleanup)
    sessionStorage.removeItem("contactName");
    sessionStorage.removeItem("contactEmail");
    sessionStorage.removeItem("contactPhone");
  }, [searchParams]);

  // Extract first name from full name
  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  const handleBackToHome = () => {
    router.push("/#contact");
  };

  return (
    <main className="min-h-screen relative bg-background transition-colors duration-500 overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Top Left Background - bg2.webp */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2">
          <Image
            src="/bg2.webp"
            alt="Background Left"
            fill
            className="object-cover object-top-left  hue-rotate-[150deg]"
            priority
          />
        </div>

        {/* Top Right Background - bg6.webp */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2">
          <Image
            src="/bg6.webp"
            alt="Background Right"
            fill
            className="object-cover object-top-right  hue-rotate-[150deg]"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.08] rounded-full blur-[150px] pointer-events-none" />

      {/* Thank You Content */}
      <div className="container-custom relative z-10 text-center py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Success Icon */}

          {/* Thank You Message */}
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tighter leading-tight">
            Thank you,  {" "}
            <span className="italic font-serif font-normal text-lime-600 dark:text-lime-400">
              {getFirstName(userData.name)}
            </span>
            <span className="animate-pulse">!</span>
          </h1>

 

          {/* Additional Message */}
          <div className="mt-8 p-6 rounded-2xl bg-lime-500/5 border border-lime-500/10 max-w-2xl mx-auto">
            <p className="text-foreground/70 text-base leading-relaxed">
              🎉 I'll get back to you as soon as possible!
            </p>
          </div>

          {/* Back Button */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton strength={0.3}>
              <button
                onClick={handleBackToHome}
                className="flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold transition-all hover:scale-105"
              >
                <ArrowLeft size={20} />
                Back to Home
              </button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <a
                href="/#work"
                className="flex items-center gap-3 px-8 py-4 bg-white/10 dark:bg-white/5 text-foreground border border-black/10 dark:border-white/10 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              >
                View My Work
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-foreground">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
