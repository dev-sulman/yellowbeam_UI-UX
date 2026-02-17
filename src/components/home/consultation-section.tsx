'use client';

import { ContactForm } from '@/components/contact-form';
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const consultationPoints = [
  'Confirmation of appointment details',
  'Research and preparation by the IT services company',
  'Consultation to discuss technology solutions',
  'Needs assessment for tailored solutions',
  'Presentation of proposed solutions',
  'Project execution and ongoing support',
  'Follow-up to evaluate effectiveness and satisfaction',
];

export default function ConsultationSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="consultation"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#023055] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-white space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Free Consultation - Discover IT Solutions For Your Business
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">
                Unlock the full potential of your business with our free
                consultation. Our expert team will assess your IT needs,
                recommend tailored solutions, and chart a path to success. Book
                your consultation now and take the first step towards empowering
                your business with cutting-edge technology.
              </p>
            </div>
            <ul className="space-y-4">
              {consultationPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 pt-8 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6 text-accent group-hover:text-inherit" />
                </div>
                <a
                  href="mailto:info@yellowbeamtech.com"
                  className="text-lg text-white/80 hover:text-white transition-colors"
                >
                  info@yellowbeamtech.com
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6 text-accent group-hover:text-inherit" />
                </div>
                <a
                  href="tel:+12013740018"
                  className="text-lg text-white/80 hover:text-white transition-colors"
                >
                  +1 (201) 374-0018
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-gray-800" />
                <div>
                  <p className="text-lg text-gray-700">
                    Sector 3 khairan Cantt
                  </p>
                  <a
                    href="https://maps.app.goo.gl/tsc8z3Tdy2kMg4ve7"
                    target="_blank"
                    className="text-sm text-gray-800 hover:underline"
                  >
                    Open map
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            {isClient && <ContactForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
