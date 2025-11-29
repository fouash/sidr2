import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "استخدامات السدر - خلطة السدر والاغتسال بالسدر",
  description:
    "تعرف على استخدامات السدر المتعددة: خلطة السدر، خلطة السدر للشعر، الاغتسال بالسدر، الاستحمام بالسدر، شرب السدر",
  keywords: "خلطة السدر، خلطة السدر للشعر، الاغتسال بالسدر، الاستحمام بالسدر، شرب السدر",
}

export default function SidrUsesPage() {
  return (
    <>
      <Navigation />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                استخدامات متعددة
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                استخدامات السدر المتنوعة
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                اكتشف الطرق المختلفة لاستخدام السدر: خلطات للشعر، الاغتسال بالسدر، شرب منقوع السدر، وأكثر
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                تسوق منتجات السدر
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/sidr-powder-mixing-bowl-preparation-natural.jpg" alt="استخدامات السدر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="جرّب السدر بطرق متعددة" description="اطلب منتجات السدر الطبيعية واستمتع بفوائدها المتنوعة" />

      <Footer />
    </>
  )
}
