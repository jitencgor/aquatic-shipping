import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive logistics services: customs clearance, freight forwarding, warehousing, inland transportation and value-added services from Gandhidham, Gujarat.",
};

const services = [
  {
    id: "customs",
    title: "Customs Clearance",
    subtitle: "Import & Export",
    description:
      "We handle all aspects of customs documentation, duty payment, and compliance on your behalf. Our deep relationships with Customs authorities at Kandla Port ensure your cargo clears quickly and without complications.",
    features: [
      "Import / Export documentation preparation",
      "Bill of entry & shipping bill filing",
      "Duty calculation & payment management",
      "Compliance with EXIM regulations",
      "DPD (Direct Port Delivery) clearance",
      "Project cargo clearance",
      "Advance Bill of Entry",
      "Post-import audit support",
    ],
    icon: "🛡️",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "freight",
    title: "Inland Freight Forwarding",
    subtitle: "Pan-India Coverage",
    description:
      "Strategic freight forwarding from Gandhidham to every corner of India. We coordinate multi-modal transport with precision timing and full cargo visibility.",
    features: [
      "Full Truck Load (FTL) & Less Than Load (LTL)",
      "Multi-modal freight solutions",
      "Cargo consolidation services",
      "Real-time GPS tracking",
      "Dedicated fleet for OOG (Out-of-Gauge) cargo",
      "Cold chain logistics",
      "Hazardous material transport",
      "Port-to-door delivery",
    ],
    icon: "🚛",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-brand-orange",
  },
  {
    id: "transport",
    title: "Inland Transportation",
    subtitle: "Last-Mile & Long-Haul",
    description:
      "Reliable road transportation across Gujarat and all major industrial corridors. Our modern fleet ensures your cargo arrives on time, every time.",
    features: [
      "Express delivery within 24–48 hours",
      "Bulk & oversized cargo handling",
      "Temperature-controlled vehicles",
      "Container transportation",
      "Flat-bed & low-bed trailers",
      "Door-to-door pickup & delivery",
      "Cross-docking facilities",
      "Scheduled routes across Gujarat",
    ],
    icon: "🚚",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    id: "warehouse",
    title: "Warehousing",
    subtitle: "Secure & Modern",
    description:
      "State-of-the-art warehousing near Gandhidham with bonded storage options, advanced WMS, and seamless integration with our transport network.",
    features: [
      "Bonded & CFS warehousing",
      "24/7 CCTV surveillance",
      "Inventory management system (WMS)",
      "Pick, pack & labeling services",
      "Cross-docking operations",
      "Rack & bulk storage",
      "Fire suppression systems",
      "Flexible rental terms",
    ],
    icon: "🏭",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
];

const valueAdded = [
  {
    icon: "🛡️",
    title: "Cargo Insurance",
    description: "Comprehensive marine cargo insurance covering all transit risks. We partner with leading insurers to protect your goods.",
  },
  {
    icon: "📦",
    title: "Palletization",
    description: "Professional palletizing services to optimize cargo space and protect goods during transit.",
  },
  {
    icon: "🌿",
    title: "Fumigation",
    description: "ISPM-15 certified fumigation for wooden packaging materials required for international shipments.",
  },
  {
    icon: "🎁",
    title: "Packaging",
    description: "Custom industrial packaging solutions — from corrugated boxes to heavy-duty crating for fragile cargo.",
  },
  {
    icon: "🏷️",
    title: "Labeling",
    description: "Accurate and compliant cargo labeling meeting international shipping standards and regulations.",
  },
  {
    icon: "📡",
    title: "RFID Seal",
    description: "Electronic RFID seal solutions for high-security cargo, providing tamper-evidence and real-time alerts.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-700 pt-32 pb-20">
        <div className="container-main text-center">
          <p className="section-label mb-4">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Logistics Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From customs clearance to last-mile delivery — we handle your entire supply chain from Gandhidham.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-main space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6 ${service.color}`}>
                  <span className="text-xl">{service.icon}</span>
                  <span className={`text-sm font-semibold ${service.iconColor}`}>{service.subtitle}</span>
                </div>
                <h2 className="text-3xl font-bold text-navy-700 mb-4">{service.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                <Link href="/contact" className="btn-primary">
                  Get a Quote for This Service
                </Link>
              </div>
              <div className={`bg-gray-50 rounded-2xl p-8 ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="font-bold text-navy-700 mb-5 text-sm uppercase tracking-wider">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Added */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Extra Mile</p>
            <h2 className="section-title">Value-Added Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAdded.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-navy-700 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-700">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Every shipment is different. Talk to our experts and get a tailored logistics plan.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
