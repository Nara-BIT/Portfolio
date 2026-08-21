import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:narasinghjadhav03@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success("Opening your email client!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4 text-center">Let's Connect</h2>
          <div className="w-24 h-1 bg-text-primary mx-auto mt-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-secondary text-center text-lg leading-relaxed mb-12"
          >
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 glass p-8 md:p-10 rounded-3xl"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-surface border border-surface-border text-text-primary placeholder-text-muted focus:border-text-primary focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-surface border border-surface-border text-text-primary placeholder-text-muted focus:border-text-primary focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="What's on your mind?"
                className="w-full px-5 py-4 rounded-xl bg-surface border border-surface-border text-text-primary placeholder-text-muted focus:border-text-primary focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={sending}
                data-cursor="pointer"
                className="px-10 py-4 rounded-full bg-text-primary text-surface font-semibold hover:bg-accent-dim hover:text-white transition-colors duration-300 disabled:opacity-50 w-full sm:w-auto"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}