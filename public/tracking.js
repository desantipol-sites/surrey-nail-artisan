(function () {
  const googleAnalyticsId = "G-1BQGQD94CP";
  const googleAdsId = "AW-17380308355";
  const googleAdsConversion = "AW-17380308355/evoYCIjej_YaEIPryd9A";
  const googleTagManagerId = "GTM-N6DVTSQR";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

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
      event_timeout: 1200
    });

    window.setTimeout(navigate, 1300);
    return false;
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
      const bookingLink = event.target.closest(
        'a[data-book], a[href*="book.gettimely.com"], a[href*="bookings.gettimely.com"], a[href*="/loading-booking"]'
      );
      if (!bookingLink || event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      window.gtag("event", "book_appointment_click", {
        send_to: googleAnalyticsId,
        booking_location: "Hampton",
        booking_url: bookingLink.href,
        link_url: bookingLink.href,
        link_text: bookingLink.textContent.trim(),
        page_path: window.location.pathname
      });
      window.gtag_report_conversion(bookingLink.href);
    }, { capture: true });
  });
})();
