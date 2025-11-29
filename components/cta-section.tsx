import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
}

export function CTASection({ title, description, buttonText = "اطلب الآن" }: CTASectionProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Button size="lg" variant="secondary" className="gap-2">
          {buttonText}
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
