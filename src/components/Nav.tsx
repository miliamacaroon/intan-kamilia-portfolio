export default function Nav() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-brown/10 bg-bg/85 px-6 py-5 backdrop-blur-md sm:px-20">
      <div className="font-display text-2xl font-semibold text-brown">Intan Kamilia</div>
      <div className="hidden items-center gap-9 sm:flex">
        <a href="#about" className="text-sm font-medium text-brown-soft hover:text-terracotta">About</a>
        <a href="#experience" className="text-sm font-medium text-brown-soft hover:text-terracotta">Experience</a>
        <a href="#projects" className="text-sm font-medium text-brown-soft hover:text-terracotta">Projects</a>
        <a href="#skills" className="text-sm font-medium text-brown-soft hover:text-terracotta">Skills</a>
        <a
          href="#contact"
          className="rounded-full border border-sage px-5 py-2.5 text-sm font-semibold text-sage transition-colors hover:bg-sage hover:text-white"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
}
