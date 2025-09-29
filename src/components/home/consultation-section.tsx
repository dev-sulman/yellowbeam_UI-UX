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
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-white space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
                Free Consultation - Discover IT Solutions For Your Business
              </h2>
              <p className="mt-4 max-w-2xl text-gray-600">
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
                  <CheckCircle className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-500 pt-8 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gray-800" />
                <a
                  href="mailto:sulzax0@gmail.com"
                  className="text-lg text-gray-700 hover:text-gray-800 transition-colors"
                >
                  sulzax0@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gray-800" />
                <a
                  href="tel:03045865181"
                  className="text-lg text-gray-700 hover:text-gray-800 transition-colors"
                >
                  03045865181
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
