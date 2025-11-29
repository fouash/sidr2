import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TreeDeciduous } from "lucide-react"

export const metadata: Metadata = {
  title: "شجرة السدر - معلومات عن شجر السدر والنبق",
  description: "تعرف على شجرة السدر، شجر السدر، السدرة، النبق، خصائص شجرة السدر المباركة وأهميتها التاريخية",
  keywords: "شجرة السدر، شجر السدر، السدرة، النبق، شجره السدر",
}

export default function SidrTreePage() {
  return (
    <>
      <Navigation />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <TreeDeciduous className="w-4 h-4" />
                شجرة مباركة
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                شجرة السدر المباركة
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                شجرة السدر أو النبق هي من أقدم الأشجار المعروفة وأكثرها بركة. تعرف على خصائصها وفوائدها وأهميتها
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                منتجات شجرة السدر
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/majestic-sidr-tree-in-nature-landscape.jpg" alt="شجرة السدر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="منتجات من شجرة السدر المباركة"
        description="استفد من خيرات شجرة السدر بمنتجاتنا الطبيعية 100%"
      />

      <Footer />
    </>
  )
}
