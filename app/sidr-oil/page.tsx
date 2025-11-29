import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "زيت السدر - فوائد زيت السدر للشعر والبشرة",
  description: "زيت السدر الطبيعي للشعر والبشرة. فوائد زيت السدر، استخدامات زيت السدر، منتج طبيعي 100%",
  keywords: "زيت السدر، زيت السدر للشعر، فوائد زيت السدر، زيت طبيعي",
}

export default function SidrOilPage() {
  return (
    <>
      <Navigation />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Droplet className="w-4 h-4" />
                زيت نقي 100%
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                زيت السدر الطبيعي
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                زيت السدر النقي لترطيب وتغذية عميقة للشعر والبشرة. امتصاص سريع ونتائج واضحة
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب زيت السدر الآن
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/natural-sidr-oil-bottle-premium-quality.jpg" alt="زيت السدر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="ترطيب عميق وتغذية مكثفة" description="جرّب زيت السدر النقي واحصل على شعر وبشرة صحية ومتألقة" />

      <Footer />
    </>
  )
}
