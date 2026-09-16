import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-xs" />

      <div className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e6e2dd] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#e6e2dd] pb-4">
          <h3 className="font-serif text-2xl text-[#133a35]">Boutique Concierge</h3>
          <button
            onClick={onClose}
            className="p-1 text-[#414847] hover:text-[#133a35] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 bg-[#f7f3ee] rounded-xl text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-[#2e3812]">mark_email_read</span>
            <h4 className="font-serif text-xl text-[#133a35]">Message Received</h4>
            <p className="text-xs text-[#414847]">
              Our guest services team will respond to your inquiry within 4 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#133a35] text-[#ffffff] px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                className="input-underline w-full text-sm text-[#1c1c19] py-1"
                placeholder="e.g. Fatima Al Zahra"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block mb-1">
                Email / Phone
              </label>
              <input
                type="text"
                required
                className="input-underline w-full text-sm text-[#1c1c19] py-1"
                placeholder="contact@domain.ae or +971 50 ..."
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block mb-1">
                Message / Inquiries
              </label>
              <textarea
                required
                rows={3}
                className="w-full bg-[#f7f3ee] border border-[#e6e2dd] rounded-lg p-3 text-xs text-[#1c1c19] focus:outline-none focus:border-[#133a35]"
                placeholder="Tell us about special orders, dietary requests, or wholesale inquiries..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#133a35] text-[#ffffff] py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#2c514c] transition-colors"
              >
                Send Concierge Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
