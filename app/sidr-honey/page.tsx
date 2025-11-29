import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BenefitCard } from "@/components/benefit-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Zap, CheckCircle2, ArrowLeft, Star } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "عسل السدر - فوائد عسل السدر الجبلي الأصلي",
  description:
    "عسل السدر الجبلي الطبيعي 100% من سدر الجوري. اكتشف فوائد عسل السدر الصحية، طعمه المميز وجودته العالية. عسل سدرة أصلي ومضمون. أفخر أنواع العسل في العالم",
  keywords: "عسل السدر، فوائد عسل السدر، عسل سدرة، عسل السدر الجبلي، عسل طبيعي، عسل أصلي، عسل سدر، سدر الجوري عسل",
  openGraph: {
    title: "عسل السدر الجبلي الأصلي | سدر الجوري",
    description: "أفخر أنواع العسل في العالم. عسل السدر الطبيعي 100% بجودة عالية وطعم مميز. فوائد صحية مذهلة",
    url: "https://sidr-aljouri.com/sidr-honey",
    siteName: "سدر الجوري",
    images: [
      {
        url: "/og-image-honey.jpg",
        width: 1200,
        height: 630,
        alt: "عسل السدر الجبلي الأصلي من سدر الجوري",
      },
    ],
    locale: "ar_SA",
    type: "product",
  },
  twitter: {
    card: "summary_large_image",
    title: "عسل السدر الجبلي الأصلي",
    description: "أفخر أنواع العسل في العالم. عسل السدر الطبيعي 100% من سدر الجوري",
    images: ["/og-image-honey.jpg"],
  },
  alternates: {
    canonical: "https://sidr-aljouri.com/sidr-honey",
  },
}

export default function SidrHoneyPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                عسل فاخر 100% طبيعي
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                عسل السدر الجبلي الأصلي
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                من أفخر أنواع العسل في العالم. عسل السدر الطبيعي بجودة عالية وطعم مميز لا يُقاوم، غني بالفوائد الصحية
                المذهلة
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="mr-2 text-muted-foreground">(4.9 من 500+ تقييم)</span>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب عسل السدر الآن
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/premium-sidr-honey-jar-golden-color-natural.jpg"
                alt="عسل السدر"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">فوائد عسل السدر الصحية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              كنز طبيعي من الفوائد الصحية والعلاجية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={Shield}
              title="تقوية المناعة"
              description="غني بمضادات الأكسدة التي تقوي جهاز المناعة وتحمي من الأمراض"
            />
            <BenefitCard
              icon={Heart}
              title="صحة القلب"
              description="يساعد في تنظيم ضغط الدم ويحسن صحة القلب والأوعية الدموية"
            />
            <BenefitCard
              icon={Zap}
              title="طاقة طبيعية"
              description="مصدر ممتاز للطاقة السريعة والسكريات الطبيعية الصحية"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
                لماذا عسل السدر الخاص بنا؟
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">جودة استثنائية ومصدر موثوق</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "مصدر طبيعي 100%",
                  description: "من أشجار السدر الجبلية في مناطق نقية بعيدة عن التلوث",
                },
                {
                  title: "بدون إضافات",
                  description: "عسل نقي تماماً بدون أي إضافات أو مواد حافظة",
                },
                {
                  title: "فحص معملي",
                  description: "جميع منتجاتنا تخضع لفحوصات جودة صارمة",
                },
                {
                  title: "تغليف محكم",
                  description: "عبوات زجاجية فاخرة تحافظ على جودة العسل ونكهته",
                },
              ].map((feature) => (
                <Card key={feature.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">منتجات عسل السدر</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">اختر الحجم المناسب لك</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "عبوة 250 جرام",
                price: "149 ريال",
                features: ["مثالي للتجربة", "عبوة زجاجية", "ضمان الجودة"],
              },
              {
                title: "عبوة 500 جرام",
                price: "279 ريال",
                features: ["الأكثر مبيعاً", "توفير 10%", "عبوة فاخرة"],
                featured: true,
              },
              {
                title: "عبوة 1 كيلو",
                price: "529 ريال",
                features: ["عرض خاص", "توفير 15%", "شحن مجاني"],
              },
            ].map((product) => (
              <Card
                key={product.title}
                className={`border-border relative ${product.featured ? "border-primary border-2 shadow-lg" : ""}`}
              >
                {product.featured && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    الأكثر مبيعاً
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{product.price}</div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">أضف للسلة</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="استمتع بأفخر أنواع العسل"
        description="اطلب عسل السدر الجبلي الأصلي الآن واحصل على شحن مجاني للطلبات فوق 200 ريال"
      />

      <Footer />
    </>
  )
}
