import Link from 'next/link';

export default function SkilzSchoolPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
            Stage 1
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Skilz School
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            Ages 8-12 | Pelikan Heights, Cape Town
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">
            Foundation Skills Development
          </h2>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Our Skilz School is the entry point to the Shosholoza pathway, providing ages 8-12 with European and UEFA-informed fundamentals training in small-group settings. With a maximum of 10 players per session, we ensure individualized attention and proper technical development from the earliest stages.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Program Structure
          </h3>
          <div className="space-y-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                Small-Group Training
              </h4>
              <p className="text-text-muted">
                Maximum 10 players per session ensures every child receives proper coaching attention and technical correction
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                Internal League
              </h4>
              <p className="text-text-muted">
                Color-coded teams compete in structured 7v7 Sunday matches, providing regular match experience in an age-appropriate format
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                Talent Identification
              </h4>
              <p className="text-text-muted">
                Players showing promise and commitment are identified for progression to Shosholoza FC Academy teams
              </p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            Training Philosophy
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            We follow UEFA-informed coaching methodologies adapted for the South African context. The focus at this age is on technical fundamentals, game intelligence, and fostering a love for the sport. Physical development and competition are introduced gradually and appropriately.
          </p>

          <h3 className="font-heading font-bold text-2xl text-primary mt-12 mb-4">
            The Feeder Model
          </h3>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Skilz School is deliberately designed as a feeder program. It's the first site in a model engineered to expand regionally across Southern Africa. As we grow, new Skilz Schools will serve as talent identification and development hubs in their respective communities.
          </p>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center">
            <Link 
              href="/pathway"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              ← Back to Pathway
            </Link>
            <Link 
              href="/pathway/shosholoza-fc"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
            >
              Next: Shosholoza FC →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
