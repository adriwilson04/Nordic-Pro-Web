export default function SponsorshipPage() {
  const packages = [
    {
      title: 'Skilz School Sponsor',
      amount: 'R 50,000 / year',
      description: 'Support our grassroots foundation program',
      benefits: [
        'Name on Skilz School League kit',
        'Recognition at Pelikan Heights facility',
        'Quarterly progress reports',
        'Social media recognition',
        'Tax deductible (NPO status)',
      ],
    },
    {
      title: 'Shosholoza FC Team Sponsor',
      amount: 'R 100,000 / year',
      description: 'Sponsor a competitive age-group team',
      benefits: [
        'Logo on team kit (primary or secondary)',
        'Recognition at all home matches',
        'Match-day hospitality for 4',
        'Season report with player progress',
        'Social media and website recognition',
        'Tax deductible (NPO status)',
      ],
    },
    {
      title: 'Pathway Partner',
      amount: 'R 250,000 / year',
      description: 'Support the entire four-stage pathway',
      benefits: [
        'Primary sponsor recognition across all stages',
        'Naming rights consideration',
        'VIP match-day experiences',
        'Comprehensive annual impact report',
        'Access to player showcases and events',
        'Board consultation opportunities',
        'Tax deductible (NPO status)',
      ],
    },
    {
      title: 'Nordic Pro Placement Sponsor',
      amount: 'R 150,000 / placement',
      description: 'Fund a player\'s pathway to professional football',
      benefits: [
        'Direct support of an individual player\'s development',
        'Personal progress updates',
        'Recognition in player\'s professional profile',
        'Invitation to signing/placement events',
        'Tax deductible (NPO status)',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Sponsorship
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl">
            Partner with us to build the future of South African football
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-lg text-text-muted leading-relaxed mb-8">
            Sponsoring Shosholoza FC means supporting real player development with measurable outcomes. Our four-stage pathway provides multiple partnership opportunities, from grassroots programs to professional placement.
          </p>
          <p className="text-base text-text-muted">
            All sponsorships are tax deductible through our registered non-profit status.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Sponsorship Packages
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-primary transition-colors"
              >
                <h3 className="font-heading font-bold text-2xl text-primary mb-2">
                  {pkg.title}
                </h3>
                <div className="text-secondary font-bold text-xl mb-4">
                  {pkg.amount}
                </div>
                <p className="text-text-muted mb-6">
                  {pkg.description}
                </p>
                <div className="border-t pt-6">
                  <h4 className="font-heading font-semibold text-lg text-primary mb-3">
                    Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-muted text-sm">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4 text-center">
              Custom Partnership Opportunities
            </h2>
            <p className="text-lg text-text-muted mb-8 text-center leading-relaxed">
              We're open to discussing custom sponsorship structures that align with your company's CSI objectives and our pathway mission. This can include:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  Equipment Sponsorship
                </h4>
                <p className="text-text-muted text-sm">
                  Kit, training equipment, or technology partnerships
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  Facility Support
                </h4>
                <p className="text-text-muted text-sm">
                  Field maintenance, facility upgrades, or infrastructure
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  Program Sponsorship
                </h4>
                <p className="text-text-muted text-sm">
                  Coach education, player evaluation systems, or travel support
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  Multi-Year Partnerships
                </h4>
                <p className="text-text-muted text-sm">
                  Long-term strategic partnerships with enhanced benefits
                </p>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
              >
                Discuss Custom Partnership
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Your Sponsorship Makes a Real Difference
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Every rand goes directly into player development, facility maintenance, coach education, and pathway infrastructure. As a registered non-profit, we operate transparently with audited financials and regular impact reporting.
          </p>
          <a 
            href="/impact"
            className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-heading font-semibold hover:bg-white transition-colors"
          >
            Learn About Our Impact
          </a>
        </div>
      </section>
    </div>
  );
}
