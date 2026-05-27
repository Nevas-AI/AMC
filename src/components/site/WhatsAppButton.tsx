import { FaWhatsapp } from "react-icons/fa";

const PHONE = "+15122164230"; // country code + number, no +
const MESSAGE = "Hi Avinya, I'd like to discuss a construction project.";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <FaWhatsapp size={28} className="relative" />
      </span>
    </a>
  );
}
