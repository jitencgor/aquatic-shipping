import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aquatic Shipping Services — Gandhidham's trusted logistics partner with over 15 years of experience in customs clearance and freight forwarding.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-700 pt-32 pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rooted in Gandhidham.<br />
              <span className="text-brand-orange">Built for India.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              For over 15 years, Aquatic Shipping Services has been the logistics backbone for 
              businesses importing and exporting through one of India&apos;s most strategic trade hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="section-title mb-6">Your Logistics Partner, Not Just a Vendor</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Aquatic Shipping Services was founded with a simple conviction: businesses 
                  deserve a logistics partner who takes ownership of their cargo as if it were their own.
                </p>
                <p>
                  Based in Gandhidham, Kutch — the gateway to India&apos;s most active ports including 
                  Kandla and Mundra — we are uniquely positioned to offer faster clearance times, 
                  deeper regulatory expertise, and stronger port relationships than any distant operator.
                </p>
                <p>
                  Led by <strong className="text-navy-700">Devang Mota</strong>, our team combines 
                  decades of EXIM experience with a modern, tech-forward approach to supply chain management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "15+", label: "Years in Business" },
                { value: "500+", label: "Shipments per Year" },
                { value: "200+", label: "Satisfied Clients" },
                { value: "48hr", label: "Avg. Clearance Time" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100">
                  <div className="text-3xl font-bold text-brand-orange mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-navy-700">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Making Global Trade Accessible for Indian Businesses
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe no business should be held back by logistics complexity. Our mission is to 
              simplify customs, reduce clearance times, and give Indian enterprises the logistics 
              infrastructure they need to compete globally.
            </p>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Strategic Location</p>
            <h2 className="section-title">The Gandhidham Advantage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚢",
                title: "India's Largest Dry Port",
                desc: "Gandhidham is home to India's largest inland container depot (ICD), enabling direct port delivery with reduced transit times.",
              },
              {
                icon: "⚓",
                title: "Proximity to Major Seaports",
                desc: "Within 50km of Kandla Port and Mundra Port — two of India's highest-volume cargo gateways handling millions of tonnes annually.",
              },
              {
                icon: "🛤️",
                title: "Multi-Modal Connectivity",
                desc: "Excellent road, rail, and pipeline networks connecting Gandhidham to all major industrial corridors across India.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy-700 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-main text-center">
          <h2 className="section-title mb-5">Ready to Work Together?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Talk to Devang and the team about your logistics requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:+919099904497" className="btn-navy">Call +91 90999 04497</a>
          </div>
        </div>
      </section>
    </>
  );
}
