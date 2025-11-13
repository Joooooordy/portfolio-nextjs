"use client";

import React from "react";

type ConsentStatus = "accepted" | "declined";

function getStoredConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem("cookie-consent");
    if (v === "accepted" || v === "declined") return v;
  } catch {
    // ignore storage errors (private mode, etc.)
  }
  return null;
}

function setStoredConsent(status: ConsentStatus) {
  try {
    window.localStorage.setItem("cookie-consent", status);
    // Optional: dispatch a custom event so analytics initializers can listen for consent
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { status } }));
  } catch {
    // ignore storage errors
  }
}

/**
 * CookieConsent
 *
 * Note: This site currently does not use non-essential cookies (no analytics/ads).
 * Under EU/UK rules, consent is not required for strictly necessary cookies. We
 * include this unobtrusive banner to future‑proof the site; when you add
 * analytics, initialize them only after a user has pressed "Accepteren".
 */
export default function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Show banner only if there is no stored decision
    setVisible(getStoredConsent() === null);
  }, []);

  const accept = () => {
    setStoredConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    setStoredConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie melding"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-xl border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 shadow-lg">
        <div className="p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-ghost_white-800">
            Deze website gebruikt alleen functionele (essentiële) cookies en slaat geen
            trackinggegevens op. Voor toekomstige, niet-essentiële cookies (zoals analytics)
            vragen we eerst om toestemming.
            {" "}
            <a href="/privacy" className="underline underline-offset-4 hover:text-dark_spring_green-600">
              Meer info
            </a>
            .
          </p>
          <div className="flex gap-2 sm:shrink-0">
            <button
              type="button"
              onClick={decline}
              className="inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm bg-syracuse_red_orange-600 font-medium hover:opacity-80 text-ghost_white-800"
            >
              Weigeren
            </button>
            <button
              type="button"
              onClick={accept}
              className="inline-flex cursor-pointer items-center justify-center rounded-md bg-dark_spring_green-600 text-primary-foreground px-3 py-2 text-sm font-medium hover:opacity-80"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
