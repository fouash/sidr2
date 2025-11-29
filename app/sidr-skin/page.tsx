import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "السدر للوجه والبشرة - فوائد السدر للبشرة وماسك السدر",
  description:
    "اكتشف فوائد السدر للوجه والبشرة، ماسك السدر للوجه، فوائد السدر للجسم. منتجات السدر الطبيعية للعناية بالبشرة",
  keywords: "السدر للوجه، السدر للبشرة، فوائد السدر للبشرة، ماسك السدر للوجه، السدر للجسم",
}

export default function SidrSkinPage() {
  return (
    <>
      <Navigation />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                العناية بالبشرة الطبيعية
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                السدر للوجه والبشرة
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                بشرة نضرة ومشرقة بفضل السدر الطبيعي. يرطب، ينظف، ويحمي بشرتك من العوامل الخارجية
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب منتجات السدر للبشرة
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/natural-skincare-sidr-face-mask-glowing-skin.jpg" alt="السدر للبشرة" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="بشرة نضرة وصحية مع السدر"
        description="جرّب منتجات السدر الطبيعية للعناية بالبشرة واحصل على إطلالة مشرقة"
      />

      <Footer />
    </>
  )
}
