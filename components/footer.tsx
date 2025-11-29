import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  products: [
    { href: "/sidr-hair", label: "السدر للشعر" },
    { href: "/sidr-skin", label: "السدر للبشرة" },
    { href: "/sidr-honey", label: "عسل السدر" },
    { href: "/sidr-oil", label: "زيت السدر" },
  ],
  info: [
    { href: "/sidr-benefits", label: "فوائد السدر" },
    { href: "/sidr-tree", label: "شجرة السدر" },
    { href: "/sidr-uses", label: "استخدامات السدر" },
    { href: "/about", label: "من نحن" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Leaf className="w-7 h-7" />
              <span>سدر الجوري</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منتجات السدر الطبيعية الأصلية للعناية بالشعر والبشرة والجسم
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">المنتجات</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">معلومات</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">تواصل معنا</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>البريد: info@sidr-natural.com</li>
              <li>الهاتف: 966+ 12 345 6789</li>
              <li className="leading-relaxed">العنوان: الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} سدر الجوري. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
