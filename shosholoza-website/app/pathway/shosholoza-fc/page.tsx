import Link from 'next/link';

export default function ShosholozaFCPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
            Stage 2
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Shosholoza FC
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            U12-23 | Cape Town Tygerberg Football Association
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">
            Competitive Club Football
          </h2>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Shosholoza FC is our competitive club platform for ages U12-23, registered with the Cape Town Tygerberg Football Association and SAFA. Our teams train at Pelikan Heights Sports Grounds and compete in structured league and cup competitions while being tracked through our comprehensive Futeval+ performance evaluation system.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Futeval+ Performance Tracking
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Every player in the Shosholoza FC system is tracked through Futeval+, our performance evaluation platform. This provides:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                Player Dashboards
              </h4>
              <p className="text-text-muted text-sm">
                Individual performance metrics, progress tracking, and development areas
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                Scouting Reports
              </h4>
              <p className="text-text-muted text-sm">
                Professional-standard reports for trials and pathway progression
              </p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Facility
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            <strong>Pelikan Heights Sports Grounds</strong><br />
            52 Gannet Street, Pelican Heights, Cape Town 7941
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Our home facility provides dedicated training pitches and match venues for all Shosholoza FC teams.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Diversity & Inclusion Mission
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            We take South African kids from all walks of life, with multi-cultural roots, and form racially diversified youth teams that mirror the face of today's South Africa. This is central to our mission — developing not just footballers, but citizens and leaders.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Pathway Progression
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Players who demonstrate the technical ability, tactical understanding, and character to compete at higher levels are identified for progression to Skärgård IK in Sweden, where they can develop in a professional European football environment.
          </p>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center">
            <Link 
              href="/pathway/skilz-school"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              ← Previous: Skilz School
            </Link>
            <Link 
              href="/pathway/skargard-ik"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
            >
              Next: Skärgård IK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
