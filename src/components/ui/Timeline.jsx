import React from 'react';
import { Reveal } from './Reveal';

export const Timeline = ({ t }) => {
  const events = t.about_page.timeline_events;

  return (
    <div className="relative py-10">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2"></div>
      <div className="space-y-12">
        {events.map((event, i) => (
          <Reveal key={i}>
            <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full md:w-auto pl-12 md:pl-0 md:text-right">
                {i % 2 === 0 && (
                  <div className="hidden md:block">
                    <span className="text-5xl font-black text-slate-200 dark:text-slate-800">{event.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{event.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">{event.desc}</p>
                  </div>
                )}
                <div className="md:hidden">
                    <span className="text-4xl font-black text-blue-600 dark:text-blue-400">{event.year}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{event.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{event.desc}</p>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 transform -translate-x-1/2 z-10 shadow-lg"></div>
              
              <div className="flex-1 w-full md:w-auto pl-12 md:pl-0 md:text-left">
                {i % 2 !== 0 && (
                  <div className="hidden md:block">
                    <span className="text-5xl font-black text-slate-200 dark:text-slate-800">{event.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{event.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">{event.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
