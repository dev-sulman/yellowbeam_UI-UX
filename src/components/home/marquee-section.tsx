import Image from 'next/image';

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-4">
    <span className="text-xl font-semibold uppercase tracking-widest">{text}</span>
    <span className="text-xl font-black italic text-accent px-4 border-l border-white/20">yellowbeamtech</span>
  </div>
);

export default function MarqueeSection() {
  const marqueeContent = Array(2)
    .fill([
      { text: 'EXPERIENCE SEAMLESS IT SOLUTIONS' },
      { text: 'REQUEST IT CONSULTATION' },
    ])
    .flat();

  return (
    <div className="bg-primary text-white h-[80px] flex items-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap space-x-8">
        {marqueeContent.map((item, index) => (
          <MarqueeItem key={index} text={item.text} />
        ))}
        {marqueeContent.map((item, index) => (
          <MarqueeItem key={index + marqueeContent.length} text={item.text} />
        ))}
      </div>
    </div>
  );
}
