import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Browse Skills", href: "/skills" },
        { name: "Find Tutors", href: "/tutors" },
        { name: "Become a Tutor", href: "/become-tutor" },
        { name: "How It Works", href: "/how-it-works" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety Tips", href: "/safety" },
        { name: "Success Stories", href: "/stories" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Refund Policy", href: "/refunds" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaSquareFacebook, href: "https://facebook.com" },
    { name: "Twitter", icon: FaSquareXTwitter, href: "https://twitter.com" },
    {
      name: "Instagram",
      icon: FaSquareInstagram,
      href: "https://instagram.com",
    },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="box-container px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <ChevronRight className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">SkillPop</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Connect with skilled tutors and learners worldwide. Master new
              skills, share your expertise, and grow together in our vibrant
              learning community.
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center space-x-3">
            <div className="bg-secondary rounded-lg p-2">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Email Us</p>
              <p className="text-muted-foreground text-sm">
                support@skillpop.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-secondary rounded-lg p-2">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Call Us</p>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-secondary rounded-lg p-2">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Visit Us</p>
              <p className="text-muted-foreground text-sm">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <p className="text-muted-foreground text-sm">
              © {currentYear} SkillPop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
