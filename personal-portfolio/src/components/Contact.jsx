import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Have a project in mind? Let’s talk.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950"
                placeholder="Tell me about your project"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-500"
            >
              Send Message
            </button>
          </form>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Find me on these platforms:
            </p>
            <div className="mt-4 flex gap-3">
              <a
                aria-label="GitHub"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <FaGithub />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <FaLinkedinIn />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
