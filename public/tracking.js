(function () {
  const consentKey = "sna_google_consent";
  const googleAnalyticsId = "G-1BQGQD94CP";
  const googleAdsId = "AW-17380308355";
  const googleAdsConversion = "AW-17380308355/evoYCIjej_YaEIPryd9A";
  const googleTagManagerId = "GTM-N6DVTSQR";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500
  });
  window.gtag("set", "ads_data_redaction", true);

  const savedConsent = window.localStorage.getItem(consentKey);
  if (savedConsent === "granted") {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted"
    });
  }

  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(googleTag);

  window.gtag("js", new Date());
  window.gtag("config", googleAnalyticsId);
  window.gtag("config", googleAdsId);

  (function (windowObject, documentObject, tagName, dataLayerName, containerId) {
    windowObject[dataLayerName] = windowObject[dataLayerName] || [];
    windowObject[dataLayerName].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js"
    });
    const firstScript = documentObject.getElementsByTagName(tagName)[0];
    const managerScript = documentObject.createElement(tagName);
    const dataLayerParameter = dataLayerName !== "dataLayer" ? `&l=${dataLayerName}` : "";
    managerScript.async = true;
    managerScript.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}${dataLayerParameter}`;
    firstScript.parentNode.insertBefore(managerScript, firstScript);
  })(window, document, "script", "dataLayer", googleTagManagerId);

  window.gtag_report_conversion = function (url) {
    let completed = false;
    const navigate = function () {
      if (completed) return;
      completed = true;
      if (url) window.location.href = url;
    };

    window.gtag("event", "conversion", {
      send_to: googleAdsConversion,
      event_callback: navigate,
      event_timeout: 1800
    });

    window.setTimeout(navigate, 1900);
    return false;
  };

  function updateConsent(granted) {
    const value = granted ? "granted" : "denied";
    window.localStorage.setItem(consentKey, value);
    window.gtag("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value
    });
  }

  function showConsentBanner() {
    const existingBanner = document.querySelector(".cookie-consent");
    if (existingBanner) {
      existingBanner.hidden = false;
      return;
    }

    const banner = document.createElement("aside");
    banner.className = "cookie-consent";
    banner.setAttribute("aria-label", "Cookie preferences");
    banner.innerHTML = `
      <div>
        <strong>Your privacy</strong>
        <p>We use analytics and advertising cookies to understand visits and measure appointment bookings. You can accept or reject non-essential cookies.</p>
      </div>
      <div class="cookie-consent-actions">
        <button type="button" data-consent="denied">Reject</button>
        <button type="button" class="cookie-consent-accept" data-consent="granted">Accept</button>
      </div>
    `;
    document.body.appendChild(banner);

    banner.addEventListener("click", function (event) {
      const button = event.target.closest("[data-consent]");
      if (!button) return;
      updateConsent(button.dataset.consent === "granted");
      banner.hidden = true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!savedConsent) showConsentBanner();

    const footerLinks = document.querySelector(".footer-links");
    if (footerLinks && !footerLinks.querySelector(".cookie-settings-link")) {
      const settingsButton = document.createElement("button");
      settingsButton.type = "button";
      settingsButton.className = "cookie-settings-link";
      settingsButton.textContent = "Cookie settings";
      settingsButton.addEventListener("click", showConsentBanner);
      footerLinks.appendChild(settingsButton);
    }

    document.addEventListener("click", function (event) {
      const bookingLink = event.target.closest(
        'a[href*="book.gettimely.com"], a[href*="/loading-booking"]'
      );
      if (!bookingLink || event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      window.gtag_report_conversion(bookingLink.href);
    }, { capture: true });
  });
})();
