import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-16 pb-16 text-center sm:px-20 sm:pt-24">
      <Reveal className="mx-auto max-w-2xl">
        <div className="text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">Let&apos;s Connect</div>
        <h2 className="font-display mt-3.5 text-[30px] leading-[1.2] sm:text-[44px]">
          Have a project in mind, or just want to talk data and AI?
        </h2>

        <a
          href="mailto:intankamilia2201@gmail.com"
          className="font-display mt-7 inline-block border-b-2 border-terracotta pb-1 text-2xl text-terracotta sm:text-[30px]"
        >
          intankamilia2201@gmail.com
        </a>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="rounded-xl border border-brown/15 bg-white px-4 py-3 text-sm outline-none focus:border-terracotta"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="rounded-xl border border-brown/15 bg-white px-4 py-3 text-sm outline-none focus:border-terracotta"
          />
          <textarea
            name="message"
            placeholder="Say hello..."
            rows={4}
            required
            className="rounded-xl border border-brown/15 bg-white px-4 py-3 text-sm outline-none focus:border-terracotta"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-br from-terracotta to-[#D9531E] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(226,112,59,0.45)]"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-3.5">
          <a
            href="https://www.linkedin.com/in/intan-kamilia-b518aa320/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/35 hover:border-terracotta hover:bg-gold-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D2A1E" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 17v-7" />
            </svg>
          </a>
          <a
            href="https://github.com/miliamacaroon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/35 hover:border-terracotta hover:bg-gold-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D2A1E" strokeWidth="1.8">
              <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.6c-2.5.55-3.04-1.2-3.04-1.2-.4-1.05-1-1.33-1-1.33-.83-.57.06-.56.06-.56.9.06 1.38.94 1.38.94.8 1.4 2.1 1 2.62.76.08-.6.32-1 .58-1.23-2-.23-4.1-1-4.1-4.4 0-.98.35-1.77.92-2.4-.1-.23-.4-1.15.1-2.4 0 0 .75-.24 2.47.92a8.4 8.4 0 0 1 4.5 0c1.7-1.16 2.46-.92 2.46-.92.5 1.25.2 2.17.1 2.4.57.63.92 1.42.92 2.4 0 3.4-2.1 4.16-4.1 4.4.33.28.62.85.62 1.7v2.5c0 .24.16.52.63.43A9 9 0 0 0 12 3z" />
            </svg>
          </a>
        </div>

        <div className="mt-14 border-t border-brown/10 pt-6 text-[13px] text-brown-soft">
          &copy; 2026 Intan Kamilia binti Roslan &middot; Putrajaya, Malaysia
        </div>
      </Reveal>
    </section>
  );
}
