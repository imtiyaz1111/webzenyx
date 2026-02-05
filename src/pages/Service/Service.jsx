import React from "react";
import {
    Code,
    Smartphone,
    Palette,
    TrendingUp,
    Cloud,
    Shield,
    Database,
    Cpu,
    CheckCircle,
    Zap, Layers, ArrowRight
} from "lucide-react";




import "./Service.css"
import SEO from "../../components/SEO";

const servicesData = [
    {
        icon: Code,
        title: "Web Development",
        desc: "Custom websites and web applications built with cutting-edge technologies.",
        features: ["React & Next.js", "Node.js & Python", "Responsive Design", "Performance Optimization"],
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile applications for iOS and Android.",
        features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Intuitive interfaces that users love to interact with.",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
        icon: TrendingUp,
        title: "Digital Marketing",
        desc: "Data-driven strategies to grow your online presence.",
        features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics"],
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        desc: "Scalable cloud infrastructure for modern applications.",
        features: ["AWS & Azure", "DevOps", "CI/CD Pipelines", "Kubernetes"],
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        desc: "Protect your digital assets with enterprise security.",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"],
    },
    {
        icon: Database,
        title: "Database Solutions",
        desc: "Robust architecture for data-intensive applications.",
        features: ["PostgreSQL & MySQL", "MongoDB", "Data Migration", "Optimization"],
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        desc: "Intelligent solutions powered by AI.",
        features: ["Custom AI Models", "Chatbots", "Predictive Analytics", "Automation"],
    },
];


const process = [
    {
        step: "01",
        title: "Discovery",
        desc: "We analyze your needs and define project scope.",
        icon: Layers,
    },
    {
        step: "02",
        title: "Planning",
        desc: "Creating detailed roadmap and technical specifications.",
        icon: CheckCircle,
    },
    {
        step: "03",
        title: "Development",
        desc: "Building your solution with agile methodology.",
        icon: Code,
    },
    {
        step: "04",
        title: "Launch",
        desc: "Deploying and providing ongoing support.",
        icon: Zap,
    },
];

const faq = [
    {
        q: "How long does a typical project take?",
        a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months.",
    },
    {
        q: "What is your pricing structure?",
        a: "We offer both fixed-price and time-based pricing depending on project requirements. Contact us for a detailed quote.",
    },
    {
        q: "Do you provide ongoing support?",
        a: "Yes, we offer various maintenance and support packages to keep your application running smoothly.",
    },
    {
        q: "Can you work with our existing team?",
        a: "Absolutely! We frequently collaborate with in-house teams and can integrate seamlessly into your workflow.",
    },
];

const Services = () => {
    return (
        <>
         <SEO
        title="Our Services | Web Development, AI & Cloud Solutions"
        description="Explore Webzenyx services including web development, mobile apps, UI/UX design, AI & machine learning, and cloud solutions."
        keywords="web development services, AI services, cloud solutions"
        url="https://www.webzenyx.com/services"
      />
            {/* breadcrum  services section  */}
            <section className="webzenyx-breadcrum">
                <div className="container text-center position-relative z-3">

                    {/* Badge */}
                    <div className="badge-box mx-auto">
                        <span className="dot"></span>
                        <span>Our Services</span>
                    </div>

                    {/* Title */}
                    <h1 className="hero-title">
                        Comprehensive <span className="blue">Digital </span>
                        <span className="blue">Solutions</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-sub">
                        From concept to launch, we provide end-to-end digital services that drive
                        growth and innovation for your business.
                    </p>
                </div>

                {/* Glows */}
                <div className="glow glow-left"></div>
                <div className="glow glow-right"></div>
            </section>

            {/* what type of services there */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        {servicesData.map((s, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="service-card">

                                    {/* Corner Lines */}
                                    <div className="corner corner-tl"></div>
                                    <div className="corner corner-br"></div>

                                    <div className="d-flex gap-4">
                                        {/* ICON */}
                                        <div className="icon-wrap">
                                            <s.icon size={28} />
                                        </div>

                                        <div>
                                            <h3 className="title">{s.title}</h3>
                                            <p className="desc">{s.desc}</p>

                                            <div className="row g-2">
                                                {s.features.map((f, idx) => (
                                                    <div className="col-6 feature" key={idx}>
                                                        <CheckCircle size={14} />
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bottom-line"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES PROCESS SECTION  */}

            <section className="process-section">
                <div className="container text-center">
                    <h2 className="process-title">Our Process</h2>

                    <p className="process-sub">
                        A proven methodology that ensures project success every time.
                    </p>

                    <div className="row g-4 mt-4">
                        {process.map((p, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="process-card">

                                    {/* Corner Lines */}
                                    <div className="corner tl"></div>
                                    <div className="corner br"></div>

                                    <div className="step">{p.step}</div>

                                    <p.icon size={24} className="icon" />

                                    <h4>{p.title}</h4>

                                    <p className="desc">{p.desc}</p>

                                    <div className="bottom"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}

            <section className="faq">
                <div className="container">

                    <div className="text-center mb-4">
                        <h2 className="title">
                            Frequently Asked <span className="blue">Questions</span>
                        </h2>

                        <p className="sub">
                            Quick answers to common questions about our services.
                        </p>

                        <div className="line"></div>
                    </div>

                    <div className="row g-4">
                        {faq.map((f, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="faq-card">

                                    <div className="number">0{i + 1}</div>

                                    <h5>{f.q}</h5>

                                    <p>{f.a}</p>

                                    <div className="bottom"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">

                        {/* corner lines */}
                        <div className="cta-corner tl"></div>
                        <div className="cta-corner br"></div>

                        <h2 className="cta-title">
                            Need a Custom Solution?
                        </h2>

                        <p className="cta-text">
                            Every business is unique. Let’s discuss how we can tailor our services to meet
                            your specific needs.
                        </p>

                        <button className="cta-btn">
                            Request a Quote
                            <ArrowRight size={16} />
                        </button>

                    </div>
                </div>
            </section>


        </>
    );
};

export default Services;
