"use client";

import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Layers,
  Cpu,
  Plug,
  Wrench,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  actionText: string;
  serviceValue: string;
  icon: typeof Monitor;
}

export function Services() {
  const services: ServiceItem[] = [
    {
      id: "web",
      tag: "01 / Web",
      title: "Websites & Portals",
      description:
        "Professional websites, booking platforms and customer portals designed around your brand and audience.",
      actionText: "Discuss a website",
      serviceValue: "Website or web portal",
      icon: Monitor,
    },
    {
      id: "mobile",
      tag: "02 / Mobile",
      title: "Mobile Applications",
      description:
        "Mobile experiences that help customers access your services and help teams work wherever business takes them.",
      actionText: "Discuss an app",
      serviceValue: "Mobile application",
      icon: Smartphone,
    },
    {
      id: "software",
      tag: "03 / Software",
      title: "Custom Business Software",
      description:
        "Dashboards, management systems and internal tools that reflect how your business actually operates.",
      actionText: "Discuss your system",
      serviceValue: "Custom business software",
      icon: Layers,
    },
    {
      id: "automation",
      tag: "04 / Automation",
      title: "Workflow Automation",
      description:
        "Connect existing tools, streamline recurring tasks and reduce unnecessary manual processes.",
      actionText: "Improve a workflow",
      serviceValue: "Workflow automation",
      icon: Cpu,
    },
    {
      id: "integration",
      tag: "05 / Integration",
      title: "APIs & Integrations",
      description:
        "Connect services, payment providers and business applications to create more cohesive systems.",
      actionText: "Discuss an integration",
      serviceValue: "API or software integration",
      icon: Plug,
    },
    {
      id: "support",
      tag: "06 / Support",
      title: "Maintenance & Support",
      description:
        "Keep your digital products reliable with technical improvements, maintenance and ongoing support.",
      actionText: "Discuss ongoing support",
      serviceValue: "Maintenance and support",
      icon: Wrench,
    },
  ];

  const handleSelectService = (serviceName: string) => {
    // Notify contact form to prefill this service
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-service", { detail: { service: serviceName } })
      );
    }
  };

  return (
    <section id="solutions" className="section-space bg-white border-y border-line scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow uppercase text-xs font-semibold text-muted mb-5">
            What we do
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
            Technology that works for your business.
          </h2>
          <p className="mt-5 text-muted leading-7 text-base sm:text-lg">
            From your first website to a custom business platform, we create digital
            products that solve real problems and support long-term growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="py-8 border-t border-line group flex flex-col justify-between"
              >
                <div>
                  <span className="text-muted text-sm font-mono">{item.tag}</span>
                  <div className="mt-6 mb-5 text-navy group-hover:translate-x-1 transition-transform inline-block">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 mb-6 text-sm text-muted leading-7">
                    {item.description}
                  </p>
                </div>

                <div>
                  <Link
                    href="#contact"
                    onClick={() => handleSelectService(item.serviceValue)}
                    className="service-link inline-flex items-center gap-3 pb-2 text-sm font-medium text-ink hover:text-navy transition-colors"
                  >
                    {item.actionText}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
