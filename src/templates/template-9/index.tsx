"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Users,
  Menu,
  X,
} from "lucide-react";
import { UMKMConfig } from "@/types/config";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { getInstagramImageUrl } from "@/utils/instagram";

export default function Template9({ config }: { config: UMKMConfig }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primary = config.theme?.primaryColor || "#2563eb"; // Blue
  const secondary = config.theme?.secondaryColor || "#1e293b"; // Slate

  return (
    <div
      className="min-h-screen font-sans text-slate-600 bg-white"
      style={
        {
          "--primary": primary,
          "--secondary": secondary,
        } as React.CSSProperties
      }
    >
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className={`text-2xl font-bold tracking-tight uppercase ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            {config.businessName}
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  scrolled
                    ? "text-slate-600 hover:text-[color:var(--primary)]"
                    : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={
                config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
              }
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                scrolled
                  ? "bg-[color:var(--primary)] text-white hover:bg-blue-700"
                  : "bg-white text-[color:var(--secondary)] hover:bg-gray-100"
              }`}
            >
              {config.cta?.text || "Contact Us"}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-slate-800 hover:text-[color:var(--primary)]"
            >
              {item}
            </a>
          ))}
          <a
            href={
              config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
            }
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-3 bg-[color:var(--primary)] text-white rounded-lg font-bold text-xl"
          >
            {config.cta?.text || "Contact Us"}
          </a>
        </div>
      </header>

      {/* HERO PARALLAX */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${optimizeHeroImage(config.heroImage)})`,
        }}
      >
        <div className="absolute inset-0 bg-[color:var(--secondary)]/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium mb-6 animate-fade-in">
            Professional & Reliable
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {config.tagline}
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-4 bg-[color:var(--primary)] rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20"
            >
              Our Services
            </a>
            <a
              href={config.cta?.link}
              className="px-8 py-4 bg-transparent border border-white/30 rounded-lg font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ArrowRight className="rotate-90" />
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-xl flex flex-wrap justify-around gap-8 text-center">
        <div className="space-y-2">
          <div className="text-4xl font-bold text-[color:var(--primary)]">
            100+
          </div>
          <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
            Clients Satisfied
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-[color:var(--primary)]">
            5+
          </div>
          <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
            Years Experience
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-[color:var(--primary)]">
            24/7
          </div>
          <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
            Support Available
          </div>
        </div>
      </div>

      {/* SERVICES (Mapped from Products) */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--secondary)] mb-4">
              Our Core Services
            </h2>
            <div className="w-16 h-1 bg-[color:var(--primary)] mx-auto rounded-full" />
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              We provide top-notch solutions tailored to your business needs,
              ensuring growth and stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {(config.products || []).slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-[color:var(--primary)]/10 text-[color:var(--primary)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[color:var(--primary)] group-hover:text-white transition-colors">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-[color:var(--secondary)] mb-3">
                  {product.name}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <a
                  href={product.link || config.cta?.link}
                  className="inline-flex items-center text-[color:var(--primary)] font-semibold hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          {config.products.length > 3 && (
            <div className="mt-12">
              <a
                href={config.cta?.link}
                className="inline-block px-8 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-colors"
              >
                View All Services
              </a>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES / WHY US */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-100 rounded-3xl -z-10 translate-x-8 -translate-y-8" />
            <img
              src={optimizeProductImage(
                (config.products || [])[0]?.image || config.heroImage
              )}
              alt="About"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-[color:var(--primary)] hidden md:block">
              <p className="font-bold text-[color:var(--secondary)] italic">
                "Committed to excellence in every project we undertake."
              </p>
            </div>
          </div>

          <div>
            <span className="text-[color:var(--primary)] font-bold uppercase tracking-wider text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--secondary)] mb-6">
              Building Future-Ready Solutions For Your Business
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {config.description} We focus on delivering high-quality results
              that drive value for our clients. Our team is dedicated to
              understanding your unique challenges and providing effective
              strategies.
            </p>

            <div className="space-y-4">
              {[
                "Strategic Planning & Execution",
                "Dedicated Expert Team",
                "Innovative Technology Integration",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[color:var(--primary)]"
                  />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX TESTIMONIALS */}
      {(config.testimonials || []).length > 0 && (
        <section
          className="py-24 bg-[color:var(--secondary)] text-white relative bg-fixed bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${optimizeHeroImage(
              config.heroImage
            )})`,
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16">
              Trusted by Industry Leaders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {config.testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-1 text-yellow-400 justify-center mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-lg italic text-slate-300 mb-6">
                    "{t.comment}"
                  </p>
                  <h4 className="font-bold text-white">{t.customerName}</h4>
                  <span className="text-white/40 text-sm">Client</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-2xl font-bold mb-6">
                {config.businessName}
              </h3>
              <p className="max-w-md mb-6">{config.description}</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[color:var(--primary)] hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[color:var(--primary)] hover:text-white transition-colors"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <MapPin className="mt-1 shrink-0" size={18} />
                  <span>{config.contact.address}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="shrink-0" size={18} />
                  <span>{config.contact.whatsapp}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="shrink-0" size={18} />
                  <span>
                    contact@
                    {config.businessName.toLowerCase().replace(/\s/g, "")}.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            {config.footer?.copyrightText}
          </div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          className="flex items-center gap-2 bg-[color:var(--primary)] text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all font-bold group"
        >
          <span className="hidden group-hover:block transition-all duration-300">
            Let's Talk
          </span>
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
