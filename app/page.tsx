import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Aquatic Shipping Services | Logistics & Customs Clearance Gandhidham",
  description:
    "Premium logistics, customs clearance, and freight forwarding from Gandhidham, Gujarat. Fast, reliable, trusted across India.",
};

const mainServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Customs Clearance",
    desc: "Seamless import & export clearance with expert documentation handling, minimizing delays and compliance risks.",
    features: ["Import Clearance", "Export Clearance", "Documentation", "Duty Optimization"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Inland Freight Forwarding",
    desc: "End-to-end freight forwarding solutions connecting Gandhidham to all major ports and industrial hubs across India.",
    features: ["Multi-modal Transport", "Real-time Tracking", "Consolidation", "Full Truck Load"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Inland Transportation",
    desc: "Reliable last-mile and long-haul transportation with a modern fleet covering all of Gujarat and beyond.",
    features: ["Door-to-Door", "Express Delivery", "Heavy Cargo", "Temperature Control"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Warehousing",
    desc: "Secure, modern warehousing facilities near Gandhidham port with advanced inventory management systems.",
    features: ["Bonded Warehouse", "24/7 Security", "Inventory Management", "Cross-docking"],
  },
];

const additionalServices = [
  { icon: "🛡️", title: "Cargo Insurance" },
  { icon: "📦", title: "Palletization" },
  { icon: "🌿", title: "Fumigation" },
  { icon: "🎁", title: "Packaging" },
  { icon: "🏷️", title: "Labeling" },
  { icon: "📡", title: "RFID Seal" },
];

const trustPoints = [
  { icon: "🚢", value: "500+", label: "Shipments / Year" },
  { icon: "🤝", value: "200+", label: "Happy Clients" },
  { icon: "📍", value: "15+", label: "Years Experience" },
  { icon: "🌏", value: "All India", label: "Coverage" },
];

const whyUs = [
  "Strategic location in Gandhidham — India's largest dry port",
  "Direct relationships with customs officials & port authorities",
  "Real-time shipment tracking and status updates",
  "Experienced team with deep knowledge of EXIM regulations",
  "Competitive pricing with zero hidden costs",
  "24/7 support for urgent shipments",
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-navy-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #FF7A00 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, #1A3A6B 0%, transparent 50%)`,
            }}
          />
          <div className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-main relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 
                              rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-brand-orange-light text-sm font-medium">
                  Gandhidham&apos;s Trusted Logistics Partner
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Move Cargo
                <span className="text-brand-orange block">Smarter.</span>
                Faster. Globally.
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
                End-to-end logistics solutions from Gandhidham — customs clearance, 
                freight forwarding, and inland transportation across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Get a Free Quote
                </Link>
                <a href="tel:+919099904497" className="btn-outline text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  +91 90999 04497
                </a>
              </div>
            </div>

            {/* Hero form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-navy-700 mb-2">Request a Quick Quote</h2>
              <p className="text-gray-500 text-sm mb-6">We respond within 2 business hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-brand-orange py-12">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-3xl mb-2">{t.icon}</div>
                <div className="text-2xl font-bold text-white">{t.value}</div>
                <div className="text-sm text-orange-100 font-medium">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-gray-50" id="services">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-title mb-5">Core Logistics Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Comprehensive supply chain solutions designed for businesses that move cargo across India and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service) => (
              <div key={service.title} className="card-service group">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center 
                                text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-700 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="px-3 py-1 bg-navy-50 text-navy-700 rounded-full text-xs font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-navy">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL SERVICES ─── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label mb-3">More We Offer</p>
            <h2 className="section-title">Value-Added Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((s) => (
              <div key={s.title}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 
                           hover:border-brand-orange hover:shadow-md transition-all duration-300 cursor-pointer group">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
                <span className="text-sm font-semibold text-navy-700 text-center">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-navy-700">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Why Aquatic Shipping</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Gandhidham&apos;s Strategic<br />Logistics Advantage
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Located at India&apos;s largest dry port and Kandla Port Trust, we offer unparalleled 
                access to shipping lanes, customs infrastructure, and road networks.
              </p>
              <div className="space-y-4">
                {whyUs.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand-orange rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "48hr", label: "Average clearance time", color: "bg-brand-orange" },
                { value: "99%", label: "On-time delivery rate", color: "bg-green-600" },
                { value: "0", label: "Hidden charges policy", color: "bg-blue-600" },
                { value: "24/7", label: "Customer support", color: "bg-purple-600" },
              ].map((stat) => (
                <div key={stat.label} className="bg-navy-800 rounded-2xl p-6 border border-navy-600">
                  <div className={`text-3xl font-bold text-white mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-4">Ready to Ship?</p>
            <h2 className="section-title mb-6">
              Get a Free Quote in<br />
              <span className="text-brand-orange">Under 2 Hours</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Contact our logistics experts today. No obligation, no hidden fees.
              Just straight answers for your shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Request a Quote
              </Link>
              <a
                href="https://wa.me/919099904497?text=Hi,%20I%20need%20a%20logistics%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 
                           text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
