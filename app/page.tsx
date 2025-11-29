import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BenefitCard } from "@/components/benefit-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Star, ArrowLeft, CheckCircle2, Droplet, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                منتج طبيعي 100%
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                اكتشف قوة السدر الطبيعي
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                منتجات السدر الأصلية للعناية بالشعر والبشرة والجسم. استمتع بفوائد شجرة السدر المباركة التي استخدمت منذ
                آلاف السنين
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  تسوق الآن
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  اعرف المزيد
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+5000 عميل راضٍ</span>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/natural-sidr-tree-leaves-and-products-photography.jpg" alt="منتجات السدر الطبيعية" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">لماذا السدر الطبيعي؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              فوائد مذهلة لصحة الشعر والبشرة من الطبيعة مباشرة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={Sparkles}
              title="تقوية الشعر"
              description="يقوي جذور الشعر ويمنع التساقط ويعزز النمو الصحي"
            />
            <BenefitCard icon={Droplet} title="ترطيب عميق" description="يرطب الشعر والبشرة بعمق ويمنحهما نعومة فائقة" />
            <BenefitCard icon={Sun} title="علاج طبيعي" description="يعالج مشاكل فروة الرأس والقشرة بشكل طبيعي" />
            <BenefitCard icon={Heart} title="آمن 100%" description="منتج طبيعي خالٍ من المواد الكيميائية الضارة" />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">منتجاتنا المميزة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              اختر المنتج المناسب لاحتياجاتك
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "السدر للشعر",
                description: "لشعر قوي وصحي ولامع",
                image: "/sidr-powder-for-hair-care.jpg",
                link: "/sidr-hair",
                features: ["تقوية الجذور", "منع التساقط", "علاج القشرة"],
              },
              {
                title: "عسل السدر",
                description: "عسل السدر الجبلي الأصلي",
                image: "/natural-sidr-honey-jar.jpg",
                link: "/sidr-honey",
                features: ["فوائد صحية", "طعم مميز", "جودة عالية"],
              },
              {
                title: "زيت السدر",
                description: "زيت طبيعي للشعر والبشرة",
                image: "/sidr-oil-bottle-natural.jpg",
                link: "/sidr-oil",
                features: ["ترطيب عميق", "تغذية مكثفة", "نتائج سريعة"],
              },
            ].map((product) => (
              <Card
                key={product.title}
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={product.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90">اعرف المزيد</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">آراء عملائنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              تجارب حقيقية من عملاء سعداء
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "فاطمة أحمد",
                text: "السدر غير شعري تماماً! أصبح أقوى وأطول وأكثر كثافة. منتج رائع ونتائج واضحة",
                rating: 5,
              },
              {
                name: "سارة محمد",
                text: "عسل السدر من أفضل أنواع العسل التي جربتها. طعمه مميز وفوائده الصحية رائعة",
                rating: 5,
              },
              {
                name: "نورة عبدالله",
                text: "زيت السدر ممتاز للبشرة والشعر. طبيعي 100% وآمن للاستخدام اليومي. أنصح به بشدة",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="جرّب السدر الطبيعي اليوم"
        description="استمتع بفوائد السدر الطبيعي واحصل على شعر وبشرة صحية. اطلب الآن واستفد من عروضنا الخاصة"
      />

      <Footer />
    </>
  )
}
