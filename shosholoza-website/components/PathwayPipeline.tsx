import Link from 'next/link';

interface PathwayStage {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

const stages: PathwayStage[] = [
  {
    id: '1',
    title: 'Skilz School',
    description: 'U8-12 skills foundation program',
    href: '/pathway/skilz-school',
    icon: '⚽',
  },
  {
    id: '2',
    title: 'Shosholoza FC',
    description: 'U12-23 competitive club football',
    href: '/pathway/shosholoza-fc',
    icon: '🏆',
  },
  {
    id: '3',
    title: 'Skärgård IK',
    description: 'Stockholm competitive platform',
    href: '/pathway/skargard-ik',
    icon: '🇸🇪',
  },
  {
    id: '4',
    title: 'Nordic Pro',
    description: 'Professional scouting & placement',
    href: '/pathway/nordic-pro',
    icon: '⭐',
  },
];

interface PathwayPipelineProps {
  variant?: 'full' | 'compact';
}

export default function PathwayPipeline({ variant = 'full' }: PathwayPipelineProps) {
  return (
    <div className="w-full">
      {/* Desktop View - Horizontal */}
      <div className="hidden md:flex items-center justify-between gap-4">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center flex-1">
            <Link 
              href={stage.href}
              className="group w-full"
            >
              <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-card hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3 text-center">{stage.icon}</div>
                <h3 className="font-heading font-bold text-lg text-center mb-2 text-primary group-hover:text-secondary transition-colors">
                  {stage.title}
                </h3>
                <p className="text-sm text-center text-text-muted">
                  {stage.description}
                </p>
              </div>
            </Link>
            
            {/* Arrow connector */}
            {index < stages.length - 1 && (
              <div className="flex items-center justify-center px-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View - Vertical */}
      <div className="md:hidden space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.id}>
            <Link 
              href={stage.href}
              className="block"
            >
              <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-card active:scale-95 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="text-4xl flex-shrink-0">{stage.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg mb-1 text-primary">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Down arrow connector */}
            {index < stages.length - 1 && (
              <div className="flex justify-center py-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
