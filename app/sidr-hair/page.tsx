import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BenefitCard } from "@/components/benefit-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Droplet, Shield, Clock, CheckCircle2, ArrowLeft, Leaf } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "السدر للشعر - فوائد السدر للشعر وطريقة الاستخدام",
  description:
    "دليل شامل عن السدر للشعر: فوائد السدر للشعر، ماسك السدر للشعر، طريقة استخدام السدر للشعر، زيت السدر للشعر، سدر الشعر، مدة السدر على الشعر، شامبو السدر وورق السدر للشعر من سدر الجوري",
  keywords:
    "السدر للشعر، فوائد السدر للشعر، ماسك السدر للشعر، طريقة السدر للشعر، زيت السدر للشعر، سدر الشعر، مدة السدر على الشعر، سدر مطحون، شامبو السدر، ورق سدر، أوراق السدر، ورق السدر الأخضر، كم مدة السدر على الشعر",
  openGraph: {
    title: "السدر للشعر - فوائد وطريقة الاستخدام | سدر الجوري",
    description:
      "اكتشف فوائد السدر المذهلة للشعر. دليل شامل عن ماسك السدر، طريقة الاستخدام، المدة المناسبة. منتجات طبيعية 100%",
    url: "https://sidr-aljouri.com/sidr-hair",
    siteName: "سدر الجوري",
    images: [
      {
        url: "/og-image-hair.jpg",
        width: 1200,
        height: 630,
        alt: "السدر للشعر - فوائد السدر لتقوية الشعر ومنع التساقط",
      },
    ],
    locale: "ar_SA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "السدر للشعر - فوائد وطريقة الاستخدام",
    description: "دليل شامل عن فوائد السدر للشعر وطريقة استخدام ماسك السدر للحصول على شعر قوي وصحي",
    images: ["/og-image-hair.jpg"],
  },
  alternates: {
    canonical: "https://sidr-aljouri.com/sidr-hair",
  },
}

export default function SidrHairPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4" />
                العناية بالشعر الطبيعية
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                السدر للشعر: سر الجمال الطبيعي
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                اكتشف فوائد السدر المذهلة لشعرك. يقوي الجذور، يمنع التساقط، ويمنح شعرك لمعاناً وكثافة طبيعية
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب منتجات السدر للشعر
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/beautiful-healthy-hair-sidr-natural-treatment.jpg"
                alt="السدر للشعر"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">فوائد السدر للشعر</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              لماذا يعتبر السدر الحل الأمثل لجميع مشاكل الشعر؟
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={Sparkles}
              title="تقوية الجذور"
              description="يغذي جذور الشعر ويقويها من العمق، مما يمنع التساقط ويعزز نمو شعر جديد"
            />
            <BenefitCard
              icon={Droplet}
              title="ترطيب مكثف"
              description="يرطب الشعر الجاف ويمنحه نعومة فائقة دون أن يتركه دهنياً"
            />
            <BenefitCard
              icon={Shield}
              title="علاج القشرة"
              description="يقضي على القشرة ويهدئ فروة الرأس المتهيجة بفضل خصائصه المضادة للفطريات"
            />
            <BenefitCard
              icon={Clock}
              title="نتائج سريعة"
              description="تظهر النتائج خلال أسابيع قليلة من الاستخدام المنتظم"
            />
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
                طريقة استخدام السدر للشعر
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">دليل خطوة بخطوة للحصول على أفضل النتائج</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">التحضير</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    اخلط 3-4 ملاعق من مسحوق السدر مع الماء الدافئ حتى تحصل على عجينة ناعمة ومتماسكة
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">الانتظار</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    اترك الخليط لمدة 2-3 ساعات ليتخمر ويصبح أكثر فعالية في تغذية الشعر
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">التطبيق</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    وزع الماسك على شعرك من الجذور إلى الأطراف، مع التدليك اللطيف لفروة الرأس
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">الشطف</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    اترك الماسك لمدة 1-2 ساعة ثم اشطفه بالماء الفاتر. لا تستخدم الشامبو في نفس اليوم
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">منتجات السدر للشعر</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              اختر المنتج المناسب لنوع شعرك
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "سدر مطحون نقي",
                price: "49 ريال",
                features: ["100% طبيعي", "خالي من الإضافات", "للاستخدام الأسبوعي", "عبوة 250 جرام"],
              },
              {
                title: "زيت السدر للشعر",
                price: "79 ريال",
                features: ["زيت نقي", "سريع الامتصاص", "للاستخدام اليومي", "عبوة 100 مل"],
                featured: true,
              },
              {
                title: "شامبو السدر الطبيعي",
                price: "59 ريال",
                features: ["تركيبة طبيعية", "خالي من الكبريتات", "للاستخدام اليومي", "عبوة 300 مل"],
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
                أسئلة شائعة عن السدر للشعر
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "كم مدة السدر على الشعر؟",
                  a: "يُنصح بترك ماسك السدر على الشعر لمدة 1-2 ساعة للحصول على أفضل النتائج. يمكن زيادة المدة حتى 3 ساعات للشعر الجاف جداً.",
                },
                {
                  q: "هل السدر يغمق لون الشعر؟",
                  a: "السدر النقي لا يغير لون الشعر بشكل ملحوظ، لكنه قد يعطي لمعاناً ذهبياً خفيفاً للشعر الفاتح. إذا كنت ترغب في الحفاظ على لون شعرك الفاتح، استخدم السدر مع الماء فقط.",
                },
                {
                  q: "كم مرة أستخدم السدر للشعر في الأسبوع؟",
                  a: "للحصول على أفضل النتائج، استخدم ماسك السدر مرة واحدة أسبوعياً. أما زيت السدر فيمكن استخدامه يومياً أو عدة مرات في الأسبوع.",
                },
                {
                  q: "هل السدر مناسب لجميع أنواع الشعر؟",
                  a: "نعم، السدر آمن وفعال لجميع أنواع الشعر - الدهني، الجاف، العادي، أو المختلط. فهو يوازن إفرازات فروة الرأس بشكل طبيعي.",
                },
              ].map((faq, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="احصل على شعر قوي وصحي مع السدر"
        description="جرّب منتجات السدر الطبيعية واستمتع بشعر قوي ولامع وصحي. اطلب الآن واحصل على شحن مجاني"
      />

      <Footer />
    </>
  )
}
