import Link from 'next/link';

export default function NordicProPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
            Stage 4
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Nordic Pro
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            Professional Scouting & Placement
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">
            Professional Player Representation
          </h2>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Nordic Pro is our professional scouting, player development, and placement service operating within Scandinavian football. Unlike traditional agents, we operate on a non-profit-oriented model where fees are reinvested into the development pathway, supporting the entire Shosholoza ecosystem.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Player Readiness Assessment
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            We use a comprehensive readiness scoring methodology to determine which players are prepared for professional trials and placement. This data-driven approach ensures players are positioned at clubs where they have realistic chances of succeeding, not just showcased without proper preparation.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Placement Levels
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Our professional network covers Swedish football from Ettan (third tier) through Allsvenskan (top tier). Players are placed based on their current ability and development trajectory, with the goal of securing contracts where they can play, develop, and progress.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h4 className="font-heading font-semibold text-xl text-primary mb-4">
              Tiered Progression System
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-bold text-secondary">Allsvenskan</span>
                <span className="text-text-muted text-sm">Top tier, professional</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-secondary">Superettan</span>
                <span className="text-text-muted text-sm">Second tier, professional</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-secondary">Ettan</span>
                <span className="text-text-muted text-sm">Third tier, semi-professional/professional</span>
              </div>
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Non-Profit Representation Model
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Nordic Pro operates as part of the Shosholoza non-profit structure. Representation fees are reinvested into the pathway, funding grassroots programs, facility improvements, and development infrastructure. This double-bottom-line approach ensures our financial sustainability while maintaining our social mission.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Data-Driven Development
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Every player in the Nordic Pro system maintains performance data from their entire Shosholoza pathway — Futeval+ scores from Shosholoza FC, training reports from Skärgård IK, and ongoing professional metrics. This creates a complete player profile that scouts and clubs can review with confidence.
          </p>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center">
            <Link 
              href="/pathway/skargard-ik"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              ← Previous: Skärgård IK
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-heading font-bold hover:bg-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
