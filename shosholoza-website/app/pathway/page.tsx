import PathwayPipeline from '@/components/PathwayPipeline';
import Link from 'next/link';

export default function PathwayPage() {
  const stages = [
    {
      id: 1,
      title: 'Skilz School',
      subtitle: 'Ages 8-12 | Pelikan Heights, Cape Town',
      description: 'Our foundational skills development program introduces young players to European and UEFA-informed fundamentals in small-group settings of 10 players. The internal Skilz School League provides structured match experience through color-coded teams competing in 7v7 Sunday matches.',
      href: '/pathway/skilz-school',
      features: [
        'Ages 8-12 development focus',
        'Small-group training (10 players max)',
        'UEFA-informed methodology',
        'Internal league competition',
        'Talent identification for Shosholoza FC',
      ],
    },
    {
      id: 2,
      title: 'Shosholoza FC',
      subtitle: 'U12-23 | Cape Town Tygerberg Football Association',
      description: 'Competitive club football registered with the Cape Town Tygerberg Football Association and SAFA. Our teams train at Pelikan Heights Sports Grounds and compete in structured league and cup competitions while being tracked through our Futeval+ performance evaluation system.',
      href: '/pathway/shosholoza-fc',
      features: [
        'Competitive SAFA-registered teams',
        'Futeval+ performance tracking',
        'Professional coaching staff',
        'Player dashboards and scouting reports',
        'Diversity and inclusion mission',
      ],
    },
    {
      id: 3,
      title: 'Skärgård IK',
      subtitle: 'Stockholm Archipelago, Sweden',
      description: 'A competitive club platform in the Stockholm Archipelago where South African players progressing through our pathway train and compete alongside Swedish talent in a professional European environment.',
      href: '/pathway/skargard-ik',
      features: [
        'Stockholm-based competitive platform',
        'Integration with Swedish football system',
        'Professional training environment',
        'Cultural and language immersion',
        'Pathway to Nordic Pro representation',
      ],
    },
    {
      id: 4,
      title: 'Nordic Pro',
      subtitle: 'Professional Scouting & Placement',
      description: 'Professional player development, scouting, and placement services operating on a non-profit model. Fees are reinvested into future development, supporting the entire pathway ecosystem.',
      href: '/pathway/nordic-pro',
      features: [
        'Player readiness assessment',
        'Professional scouting network',
        'Placement from Ettan through Allsvenskan',
        'Non-profit representation model',
        'Data-driven development tracking',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            The Pathway
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl">
            Four integrated stages engineered to build professional football careers
          </p>
        </div>
      </section>

      {/* Pathway Visual */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              An Integrated Development System
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Each stage is built to feed the next, creating a clear progression from grassroots fundamentals to professional placement
            </p>
          </div>
          <PathwayPipeline />
        </div>
      </section>

      {/* Detailed Stage Descriptions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="space-y-16">
            {stages.map((stage, index) => (
              <div 
                key={stage.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Stage {stage.id}
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-primary mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-text-muted mb-4 font-semibold">
                    {stage.subtitle}
                  </p>
                  <p className="text-lg text-text-muted mb-6 leading-relaxed">
                    {stage.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {stage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-muted">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={stage.href}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-text-muted text-sm">
                        [Placeholder: {stage.title} image]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how Shosholoza FC can support your football development journey
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
