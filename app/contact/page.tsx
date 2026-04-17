import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Aquatic Shipping Services for a free logistics quote. Call, WhatsApp, or email us from Gandhidham, Gujarat.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 90999 04497",
    href: "tel:+919099904497",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919099904497?text=Hi,%20I%20need%20a%20logistics%20quote.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "devang@aquaticshipping.in",
    href: "mailto:devang@aquaticshipping.in",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Gandhidham, Kutch, Gujarat — 370201",
    href: "https://maps.google.com/?q=Gandhidham,Kutch,Gujarat",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-700 pt-32 pb-20">
        <div className="container-main text-center">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Let&apos;s Talk Logistics
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Request a free quote, ask about our services, or just say hello.
            We respond within 2 business hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-navy-700 mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm">Reach us through any of the channels below.</p>
              </div>

              {/* Contact Person */}
              <div className="bg-navy-700 rounded-2xl p-6 text-white">
                <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center 
                                font-bold text-xl mb-4">
                  DM
                </div>
                <p className="font-bold text-lg">Devang Mota</p>
                <p className="text-gray-300 text-sm mb-4">Director, Aquatic Shipping Services</p>
                <a
                  href="tel:+919099904497"
                  className="inline-flex items-center gap-2 text-brand-orange-light text-sm font-medium 
                             hover:text-brand-orange transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  +91 90999 04497
                </a>
              </div>

              {/* Detail Cards */}
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 
                             shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all group"
                >
                  <div className="w-11 h-11 bg-brand-orange/10 rounded-lg flex items-center justify-center 
                                  text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{detail.label}</p>
                    <p className="text-navy-700 font-semibold text-sm">{detail.value}</p>
                  </div>
                </a>
              ))}

              {/* Business Hours */}
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-navy-700 text-sm mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Monday – Saturday</span>
                    <span className="font-medium">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sunday</span>
                    <span className="font-medium text-brand-orange">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-700 mb-2">Request a Free Quote</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you within 2 hours with a tailored quote.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58899.34295743!2d70.0!3d23.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950d3a17bdb0e4b%3A0x2fdfefc9cef55ea6!2sGandhidham%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aquatic Shipping Services Location — Gandhidham, Gujarat"
        />
      </section>
    </>
  );
}
