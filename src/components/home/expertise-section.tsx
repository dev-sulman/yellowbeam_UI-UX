import { Card } from '@/components/ui/card';
import Image from 'next/image';

const expertisePoints = [
  {
    icon: (
      <Image src="/icons/Expertise.png" alt="Expertise" width={40} height={40} />
    ),
    title: 'Expertise',
    description:
      'Access to specialized knowledge and technology expertise for effective IT solutions.',
  },
  {
    icon: (
      <Image
        src="/icons/savingMoney.png"
        alt="Cost Savings"
        width={40}
        height={40}
      />
    ),
    title: 'Cost Savings',
    description:
      'Avoiding expenses associated with maintaining an in-house IT department.',
  },
  {
    icon: (
      <Image
        src="/icons/EnhancedSecurity.png"
        alt="Enhanced Security"
        width={40}
        height={40}
      />
    ),
    title: 'Enhanced Security',
    description:
      'Robust measures to protect against cyber threats and ensure data security.',
  },
  {
    icon: (
      <Image
        src="/icons/IncreasedEfficiency1.png"
        alt="Increased Efficiency"
        width={40}
        height={40}
      />
    ),
    title: 'Increased Efficiency',
    description:
      'Streamlined operations, automation, and proactive monitoring for improved productivity.',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-slate-500 to-slate-400 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertisePoints.map((point, index) => (
              <Card
                key={index}
                className="bg-transparent shadow-none border-none text-center"
              >
                <div className="flex justify-center items-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-200">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
