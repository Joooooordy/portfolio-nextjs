// HTML email template for contact form submissions
// Uses inline CSS for maximum compatibility across email clients.
// Colors aligned with Tailwind theme:
// - Header/background accents: Oxford Blue (#0b2545)
// - Accent/link color: Syracuse Red Orange (#d84a05)
// - Neutral background: Ghost White (#f7f7ff)

type ContactEmailParams = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  ip?: string;
  siteName?: string; // default: jordybreur.nl
  siteUrl?: string;  // default: https://jordybreur.nl
};

export function buildContactEmailHTML(params: ContactEmailParams): string {
  const {
    name,
    email,
    phone,
    message,
    ip,
    siteName = "jordybreur.nl",
    siteUrl = "https://jordybreur.nl",
  } = params;

  const safe = (s: string) => String(s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const nl2br = (s: string) => safe(s).replace(/\n/g, "<br/>");

  // Colors and fonts
  const colors = {
    bg: "#f7f7ff", // ghost_white.500
    cardBg: "#ffffff",
    headerBg: "#0b2545", // oxford_blue.DEFAULT
    headerText: "#ffffff",
    bodyText: "#333333",
    labelText: "#0b2545",
    border: "#e5e5ea",
    footerBg: "#f0f2f7",
    footerText: "#555555",
    link: "#d84a05", // syracuse_red_orange.DEFAULT
  } as const;

  const containerStyles = [
    `width:100%`,
    `background-color:${colors.bg}`,
    `margin:0`,
    `padding:24px 0`,
    `-webkit-text-size-adjust:100%`,
  ].join("; ");

  const cardStyles = [
    `width:100%`,
    `max-width:600px`,
    `background-color:${colors.cardBg}`,
    `border-radius:8px`,
    `overflow:hidden`,
    `border:1px solid ${colors.border}`,
  ].join("; ");

  const headerCell = [
    `background-color:${colors.headerBg}`,
    `color:${colors.headerText}`,
    `text-align:center`,
    `padding:20px`,
    `font-size:22px`,
    `font-weight:700`,
    `letter-spacing:0.3px`,
    `font-family: Arial, Helvetica, sans-serif`,
  ].join("; ");

  const bodyCell = [
    `padding:24px`,
    `color:${colors.bodyText}`,
    `font-size:16px`,
    `line-height:1.6`,
    `font-family: Arial, Helvetica, sans-serif`,
  ].join("; ");

  const fieldLabel = [
    `display:block`,
    `font-size:13px`,
    `font-weight:700`,
    `color:${colors.labelText}`,
    `margin:16px 0 4px`,
    `font-family: Arial, Helvetica, sans-serif`,
  ].join("; ");

  const fieldValue = [
    `display:block`,
    `font-size:15px`,
    `color:${colors.bodyText}`,
    `word-break:break-word`,
    `font-family: Arial, Helvetica, sans-serif`,
  ].join("; ");

  const divider = [
    `height:1px`,
    `background:${colors.border}`,
    `border:none`,
    `margin:20px 0`,
  ].join("; ");

  const footerCell = [
    `background-color:${colors.footerBg}`,
    `padding:16px`,
    `font-size:12px`,
    `color:${colors.footerText}`,
    `text-align:center`,
    `font-family: Arial, Helvetica, sans-serif`,
  ].join("; ");

  const linkStyle = [`color:${colors.link}`, `text-decoration:none`, `font-weight:600`].join("; ");

  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${containerStyles}">
    <tr>
      <td align="center" style="padding:0 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="${cardStyles}">
          <tr>
            <td style="${headerCell}">
              <span style="display:inline-block;">${safe(siteName)} • Contactformulier</span>
            </td>
          </tr>
          <tr>
            <td style="${bodyCell}">
              <p style="margin:0 0 12px; font-weight:700;">Nieuw bericht van het contactformulier</p>
              <p style="margin:0 0 16px;">Je hebt een nieuw bericht ontvangen via ${safe(siteName)}.</p>

              <hr style="${divider}"/>

              <span style="${fieldLabel}">Naam</span>
              <span style="${fieldValue}">${safe(name)}</span>

              <span style="${fieldLabel}">E‑mail</span>
              <span style="${fieldValue}"><a href="mailto:${safe(email)}" style="${linkStyle}">${safe(email)}</a></span>

              <span style="${fieldLabel}">Telefoon</span>
              <span style="${fieldValue}">${phone ? safe(phone) : "Niet opgegeven"}</span>

              ${ip ? `<span style="${fieldLabel}">IP</span><span style="${fieldValue}">${safe(ip)}</span>` : ""}

              <span style="${fieldLabel}">Bericht</span>
              <div style="${fieldValue}; white-space:normal;">${nl2br(message)}</div>

              <hr style="${divider}"/>

              <p style="margin:0; font-size:13px; color:#666;">Je kunt rechtstreeks reageren op dit bericht door te antwoorden op deze e-mail.</p>
            </td>
          </tr>
          <tr>
            <td style="${footerCell}">
              Dit is een automatisch bericht van het contactformulier van 
              <a href="${safe(siteUrl)}" style="${linkStyle}" target="_blank" rel="noopener noreferrer">${safe(siteName)}</a>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

export function buildContactEmailText(params: ContactEmailParams): string {
  const { name, email, phone, message, ip, siteName = "jordybreur.nl", siteUrl = "https://jordybreur.nl" } = params;
  return [
    `${siteName} – Contactformulier`,
    "",
    `Naam: ${name}`,
    `E-mail: ${email}`,
    `Telefoon: ${phone || "Niet opgegeven"}`,
    ip ? `IP: ${ip}` : undefined,
    "",
    "Bericht:",
    message,
    "",
    `Dit is een automatisch bericht van het contactformulier van ${siteName} (${siteUrl}).`,
  ].filter(Boolean).join("\n");
}
