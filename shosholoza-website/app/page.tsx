import Link from 'next/link';
import PathwayPipeline from '@/components/PathwayPipeline';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6">
              SHOSHOLOZA
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-semibold mb-8">
              FOOTBALL DEVELOPMENT PATHWAY
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Building Southern Africa's leading football development pathway — from grassroots Cape Town to professional careers in Scandinavia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/pathway"
                className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white transition-colors text-center"
              >
                Explore the Pathway
              </Link>
              <Link 
                href="/sponsorship"
                className="inline-block bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Visual Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
              Four Stages. One Pathway.
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              An integrated development system where each stage is engineered to feed the next
            </p>
          </div>
          <PathwayPipeline />
        </div>
      </section>

      {/* Story Teaser Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                A group of retired international ex-professional footballers have come together to create a unique social enterprise, with the goal of introducing Cape Town youth to careers in sports, as well as developing future professional athletes.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                We take South African kids from all walks of life, with multi-cultural roots, and form racially diversified youth teams that mirror the face of today's South Africa.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
              >
                Read Our Story
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-text-muted text-sm">
                    [Placeholder: Team photo or training session image]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-2">
                200+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Players in Program
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-2">
                10+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Years Operating
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-2">
                15+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                UEFA Licensed Coaches
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-2">
                3
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Countries in Pathway
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Teaser */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Partner With Us
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Support the development of future football professionals while making a real difference in young South African lives
          </p>
          <Link 
            href="/sponsorship"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-primary hover:text-white transition-colors"
          >
            View Sponsorship Opportunities
          </Link>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Latest Updates
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-text-muted mb-2">March 2026</div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                Skärgård IK Formation
              </h3>
              <p className="text-text-muted mb-4">
                Official establishment of our Stockholm-based competitive club platform
              </p>
              <Link href="/news" className="text-primary font-semibold hover:text-secondary transition-colors">
                Read more →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-text-muted mb-2">January 2026</div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                Pelikan Heights Facility
              </h3>
              <p className="text-text-muted mb-4">
                Secured long-term lease for our Cape Town training grounds
              </p>
              <Link href="/news" className="text-primary font-semibold hover:text-secondary transition-colors">
                Read more →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-text-muted mb-2">December 2025</div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                Pathway Expansion
              </h3>
              <p className="text-text-muted mb-4">
                Planning underway for regional expansion across Southern Africa
              </p>
              <Link href="/news" className="text-primary font-semibold hover:text-secondary transition-colors">
                Read more →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/news"
              className="inline-block text-primary font-semibold hover:text-secondary transition-colors"
            >
              View All News →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
