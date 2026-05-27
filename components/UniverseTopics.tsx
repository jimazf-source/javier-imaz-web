"use client";

import { useState } from "react";
import { universeTopics } from "@/data/site";

export function UniverseTopics() {
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const topic = universeTopics.find((item) => item.title === openTopic);

  return (
    <div className="mt-9">
      <div className="flex flex-wrap gap-3">
        {universeTopics.map((item) => {
          const expanded = openTopic === item.title;

          return (
            <button
              key={item.title}
              type="button"
              aria-expanded={expanded}
              aria-controls="universe-comment"
              onClick={() => setOpenTopic(expanded ? null : item.title)}
              className={`rounded-full border px-5 py-2 font-display text-xl transition ${
                expanded
                  ? "border-gold bg-gold/15 text-gold-light"
                  : "border-gold/25 text-parchment hover:border-gold/60 hover:text-ivory"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div
        id="universe-comment"
        className={`grid transition-all duration-300 ${
          topic ? "mt-7 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {topic && (
            <p className="border-l border-gold/50 bg-panel/45 px-6 py-5 text-sm leading-8 text-parchment">
              <span className="mr-2 font-display text-2xl text-gold-light">
                {topic.title}.
              </span>
              {topic.comment}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
