export default function ImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl">
            Building more than footballers — developing leaders and opening career pathways
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">
            How Shosholoza is Different
          </h2>
          <p className="text-lg text-text-muted mb-12 leading-relaxed">
            We're not just another football academy. Shosholoza operates as an integrated pathway with a clear social mission and evidence-based outcomes.
          </p>

          {/* Diversity & Inclusion */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Diversity & Inclusion
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              We take South African kids from all walks of life, with multi-cultural roots, and form racially diversified youth teams that mirror the face of today's South Africa. This isn't a marketing statement — it's foundational to who we are and how we operate.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-text-muted italic">
                "Building teams that represent the full diversity of South Africa teaches our players to lead in the country they'll inherit."
              </p>
            </div>
          </div>

          {/* Leadership Development */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Leadership & Citizenship
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Football is the vehicle, but leadership and citizenship are core outcomes. Players learn responsibility, teamwork, discipline, and how to represent something larger than themselves.
            </p>
          </div>

          {/* Career Exposure */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Career Exposure Beyond Playing
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Not every player will become a professional footballer — and that's okay. Through the Shosholoza pathway, players are exposed to careers in:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">Coaching</h4>
                <p className="text-text-muted text-sm">UEFA coaching pathways and mentorship opportunities</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">Sports Science</h4>
                <p className="text-text-muted text-sm">Performance analysis, conditioning, and athlete development</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">Physiotherapy</h4>
                <p className="text-text-muted text-sm">Sports medicine and injury rehabilitation</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">Data Analysis</h4>
                <p className="text-text-muted text-sm">Performance tracking, scouting, and analytics</p>
              </div>
            </div>
          </div>

          {/* Regional Expansion */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Southern Africa Expansion
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Our long-term goal is to replicate the Shosholoza model across Southern Africa. The Cape Town program is deliberately designed to be scalable — Skilz Schools, club structures, and pathway connections that can be established in new markets while maintaining quality and mission alignment.
            </p>
          </div>

          {/* Social Enterprise Model */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Self-Sustaining Social Enterprise
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              We operate as a non-profit with a double-bottom-line structure: social impact and financial sustainability. Revenue from Nordic Pro representation fees is reinvested into grassroots programs, facility improvements, and pathway infrastructure. This model ensures we can continue our mission without perpetual dependence on grants or donations.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary text-white p-8 md:p-12 rounded-lg text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Be Part of the Impact
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Support the Shosholoza pathway through sponsorship, partnership, or by spreading the word
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/sponsorship"
                className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-heading font-semibold hover:bg-white transition-colors"
              >
                Sponsorship Opportunities
              </a>
              <a 
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
