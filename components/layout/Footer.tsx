import Link from "next/link";

export function Footer() {
  const ecosystemLinks = [
    "Strategy",
    "Marketing",
    "Sales",
    "Technology",
    "Operations",
    "Leadership",
  ];

  return (
    <footer className="relative w-full bg-[#00152F] py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl relative z-10">

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Column 1: Brand Logo & Description */}
          <div className="md:col-span-4 flex flex-col items-start">
            {/* Logo Wrapper */}
            <div className="flex flex-col items-start leading-none font-sans select-none mb-6">
              <div className="flex items-start">
                <span className="text-white text-2xl font-black tracking-tight">Axudar</span>
                <span className="text-white text-[7px] font-black ml-0.5 mt-1">™</span>
              </div>
              <span className="text-[#00dfb6] text-xl font-bold tracking-wide -mt-0.5">Group</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-[280px] mb-8">
              Tell us where your business is today. We'll help you identify what needs to happen next.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
                >
                  <rect width={16} height={16} x={4} y={4} rx={4} />
                  <circle cx={12} cy={12} r={3} />
                  <circle cx={17} cy={7} r={1} />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Links */}
          <div className="md:col-span-4 flex flex-col items-start md:pl-10">
            <h3 className="text-white text-xs font-extrabold uppercase tracking-[2.75px] mb-6">
              ECOSYSTEM
            </h3>
            <ul className="flex flex-col gap-3">
              {ecosystemLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="flex items-center text-slate-400 text-xs sm:text-sm font-light hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-slate-600 group-hover:text-[#00dfb6] mr-2 select-none">
                      ›
                    </span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details (LEADERSHIP header) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h3 className="text-white text-xs font-extrabold uppercase tracking-[2.75px] mb-6">
              LEADERSHIP
            </h3>
            <ul className="flex flex-col gap-4">

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-slate-400 mt-0.5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-[260px]">
                  10808 Foothill Blvd Suite 160-580 Rancho Cucamonga, CA 91730
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-slate-400 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:Support@TreatsIslandvf.com"
                  className="text-slate-400 text-xs sm:text-sm font-light hover:text-white transition-colors duration-200"
                >
                  Support@TreatsIslandvf.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-slate-400 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.622c0-1.258.463-2.316 1.393-3.174a.75.75 0 011.06 0l2.76 2.76a.75.75 0 010 1.06l-1.12 1.12c.162.308.368.614.618.918.423.513.882.973 1.396 1.396.304.25.61.456.918.618l1.12-1.12a.75.75 0 011.06 0l2.76 2.76a.75.75 0 010 1.06c-.858.93-1.916 1.393-3.174 1.393-2.585 0-5.755-2.222-8.31-4.776C4.472 12.378 2.25 9.208 2.25 6.622z"
                  />
                </svg>
                <a
                  href="tel:8774045656"
                  className="text-slate-400 text-xs sm:text-sm font-light hover:text-white transition-colors duration-200"
                >
                  877.404.5656
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer bottom credit / Copyright (standard detail addition) */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-slate-500 text-[11px] font-light">
            &copy; {new Date().getFullYear()} Axudar Group. All rights reserved.
          </span>
          <span className="text-slate-500 text-[11px] font-light">
            Designed to scale your growth outcomes.
          </span>
        </div>

      </div>
    </footer>
  );
}
