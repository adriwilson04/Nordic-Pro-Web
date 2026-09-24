import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl">
            Building a pathway from Cape Town to Scandinavia
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              A group of retired international ex-professional footballers have come together to create a unique social enterprise, with the goal of introducing Cape Town youth to careers in sports, as well as developing future professional athletes.
            </p>

            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              We take South African kids from all walks of life, with multi-cultural roots, and form racially diversified youth teams that mirror the face of today's South Africa.
            </p>

            <h2 className="font-heading font-bold text-3xl text-primary mt-12 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              To build Southern Africa's leading football development pathway — from grassroots skills programs across the region to professional careers in Scandinavia.
            </p>

            <h2 className="font-heading font-bold text-3xl text-primary mt-12 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              We operate an integrated, four-stage development system, each stage built to feed the next — Skilz School, Shosholoza FC, Skärgård IK, and Nordic Pro — engineered to scale beyond Cape Town into other Southern African markets.
            </p>

            <h2 className="font-heading font-bold text-3xl text-primary mt-12 mb-6">
              The Scandinavian Connection
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Our partnership with Skärgård IK in Stockholm and our Nordic Pro professional development program provides concrete evidence that our pathway is real, not aspirational. South African players have the opportunity to compete in Swedish football and progress through the professional ranks from Ettan through Allsvenskan.
            </p>

            <h2 className="font-heading font-bold text-3xl text-primary mt-12 mb-6">
              Regional Expansion
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              While we started in Cape Town, our model is designed to be replicable across Southern Africa. We envision Skilz Schools and development programs expanding to other cities and countries in the region, creating opportunities for talented young players wherever they are.
            </p>

            <h2 className="font-heading font-bold text-3xl text-primary mt-12 mb-6">
              Non-Profit Organisation
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Shosholoza FC operates as a registered non-profit organisation (NPO), committed to our social mission while maintaining financial sustainability. Our double-bottom-line approach ensures we can continue serving our community while building towards self-sufficiency.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12 text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Explore our four-stage development pathway or get in touch to learn how you can be part of this journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pathway"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary-dark transition-colors"
              >
                Explore the Pathway
              </Link>
              <Link 
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-heading font-semibold border-2 border-primary hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
