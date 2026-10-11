import Link from 'next/link';

export default function SkargardIKPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
            Stage 3
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Skärgård IK
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            Stockholm Archipelago, Sweden
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">
            European Competitive Platform
          </h2>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Skärgård IK is our competitive club platform in the Stockholm Archipelago, providing South African players progressing through the Shosholoza pathway with the opportunity to train and compete alongside Swedish talent in a professional European football environment.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Integration with Swedish Football
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Players at Skärgård IK compete within the Swedish football system, experiencing the structure, professionalism, and tactical demands of European football firsthand. This is not a training camp or showcase — it's competitive club football at a high standard.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Development Environment
          </h3>
          <div className="space-y-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                Professional Training
              </h4>
              <p className="text-text-muted">
                UEFA-licensed coaching staff and training methodologies aligned with Scandinavian standards
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                Cultural Immersion
              </h4>
              <p className="text-text-muted">
                Language learning, cultural integration, and adaptation to life as a professional athlete in Europe
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                Pathway to Nordic Pro
              </h4>
              <p className="text-text-muted">
                Direct connection to our professional representation and placement services
              </p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Why Stockholm?
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            The Stockholm Archipelago provides a structured, professional football environment with clear pathways to higher levels of Swedish football. The region's football infrastructure, combined with our established relationships, creates realistic progression opportunities for talented players.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Evidence, Not Promises
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Skärgård IK exists as concrete evidence that the Shosholoza pathway is real, not aspirational. South African players are training and competing in Swedish football today, demonstrating that this pathway delivers on its stated mission.
          </p>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center">
            <Link 
              href="/pathway/shosholoza-fc"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              ← Previous: Shosholoza FC
            </Link>
            <Link 
              href="/pathway/nordic-pro"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
            >
              Next: Nordic Pro →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
