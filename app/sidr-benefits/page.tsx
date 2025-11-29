import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "فوائد السدر - ماهو السدر وفوائده الصحية",
  description: "تعرف على السدر، ماهو السدر، فوائد السدر الصحية، فوائد شجرة السدر، النبق، استخدامات السدر المتعددة",
  keywords: "السدر، ماهو السدر، فوائد السدر، النبق، شجرة السدر، فوائد السدر الصحية",
}

export default function SidrBenefitsPage() {
  return (
    <>
      <Navigation />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4" />
                كنز طبيعي
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                ماهو السدر وما فوائده؟
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                السدر أو النبق هو شجرة مباركة معروفة منذ القدم بفوائدها الصحية والجمالية المذهلة. اكتشف كل ما تحتاج
                معرفته عن هذا الكنز الطبيعي
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اكتشف منتجات السدر
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/sidr-tree-with-fruits-and-leaves-natural.jpg" alt="شجرة السدر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="استفد من فوائد السدر الطبيعية"
        description="اطلب منتجات السدر الأصلية واستمتع بفوائدها الصحية والجمالية"
      />

      <Footer />
    </>
  )
}
