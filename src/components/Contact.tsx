import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { Reveal, MagneticWrap } from "../lib/motion";
import { socials, profile } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      org: String(data.get("org") ?? ""),
      message: String(data.get("msg") ?? ""),
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!r.ok || !j.ok) {
        throw new Error(j.error || `Request failed (${r.status})`);
      }
      setStatus("sent");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 3200);
    } catch (err) {
      setStatus("error");
      setErrorMsg((err as Error).message || "Something went wrong");
      window.setTimeout(() => setStatus("idle"), 4500);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-edge">
        <div className="mb-14 grid grid-cols-12 gap-x-6 sm:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <p className="label-eyebrow mb-4">Get in touch</p>
            <Reveal>
              <h2 className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-balance">
                Have a role, a project, or an internship in mind?{" "}
                <span className="italic-display text-acid-400">Let&apos;s talk.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-x-6">
          {/* Left — direct contact */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="card-surface h-full p-7 sm:p-10">
                <p className="label-eyebrow">Direct</p>

                <button
                  type="button"
                  onClick={onCopy}
                  className="group mt-6 flex w-full items-center justify-between gap-3 rounded-[var(--radius-card)] border border-ink-700 bg-ink-950/60 p-4 text-left transition-colors hover:border-acid-400/40"
                >
                  <span className="flex items-center gap-3">
                    <EnvelopeSimple size={18} weight="bold" className="text-acid-400" />
                    <span className="font-mono text-[13px] text-ink-100">
                      {profile.email}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-300 transition-colors group-hover:text-acid-400">
                    {copied ? (
                      <>
                        <Check size={12} weight="bold" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} weight="bold" /> Copy
                      </>
                    )}
                  </span>
                </button>

                <div className="mt-4 flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-ink-700 bg-ink-950/60 p-4">
                  <span className="flex items-center gap-3">
                    <MapPin size={18} weight="bold" className="text-acid-400" />
                    <span className="font-mono text-[13px] text-ink-100">
                      {profile.location} · {profile.status}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-acid-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-acid-400" />
                    Active
                  </span>
                </div>

                <ul className="mt-8 space-y-1">
                  <li>
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between rounded-[10px] px-3 py-3 transition-colors hover:bg-ink-800/60"
                    >
                      <span className="text-sm text-ink-200">GitHub</span>
                      <ArrowUpRight size={14} weight="bold" className="text-ink-400" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between rounded-[10px] px-3 py-3 transition-colors hover:bg-ink-800/60"
                    >
                      <span className="text-sm text-ink-200">LinkedIn</span>
                      <ArrowUpRight size={14} weight="bold" className="text-ink-400" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between rounded-[10px] px-3 py-3 transition-colors hover:bg-ink-800/60"
                    >
                      <span className="text-sm text-ink-200">Twitter / X</span>
                      <ArrowUpRight size={14} weight="bold" className="text-ink-400" />
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right — message form */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="card-surface h-full p-7 sm:p-10"
                noValidate
              >
                <p className="label-eyebrow">Or a quick note</p>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Your name" id="name" name="name" type="text" placeholder="Jane Doe" required autoComplete="name" maxLength={120} />
                  <Field label="Email" id="email" name="email" type="email" placeholder="jane@company.com" required autoComplete="email" maxLength={254} />
                </div>
                <div className="mt-5">
                  <Field label="Company / college" id="org" name="org" type="text" placeholder="Optional" autoComplete="organization" maxLength={120} />
                </div>
                <div className="mt-5">
                  <label htmlFor="msg" className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-300">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    rows={5}
                    minLength={5}
                    maxLength={4000}
                    placeholder="Tell me about the role, the team, and the timeline."
                    className="mt-2 w-full rounded-[10px] border border-ink-700 bg-ink-950/60 px-4 py-3 text-[15px] text-ink-100 placeholder:text-ink-500 outline-none transition-colors focus:border-acid-400/60"
                  />
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                      status === "error" ? "text-red-400" : "text-ink-400"
                    }`}
                    role={status === "error" ? "alert" : undefined}
                  >
                    {status === "error"
                      ? errorMsg || "Failed to send"
                      : status === "sent"
                        ? "Sent — I'll reply within 24 hours"
                        : status === "sending"
                          ? "Sending…"
                          : "Replies within 24 hours"}
                  </p>
                  <MagneticWrap>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" && "Sending…"}
                      {status === "sent" && (
                        <>
                          Sent
                          <Check size={14} weight="bold" />
                        </>
                      )}
                      {(status === "idle" || status === "error") && (
                        <>
                          Send message
                          <ArrowUpRight size={14} weight="bold" />
                        </>
                      )}
                    </button>
                  </MagneticWrap>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required,
  autoComplete,
  maxLength,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-300"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="mt-2 w-full rounded-[10px] border border-ink-700 bg-ink-950/60 px-4 py-3 text-[15px] text-ink-100 placeholder:text-ink-500 outline-none transition-colors focus:border-acid-400/60"
      />
    </div>
  );
}
