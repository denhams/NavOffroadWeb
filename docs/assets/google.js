// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16958382109');

function gtag_report_app_store_click(url) {
  var redirected = false;

  var callback = function () {
    if (!redirected && typeof url !== 'undefined') {
      redirected = true;
      window.location = url;
    }
  };

  // Fallback redirect after 1 second if Google Analytics/Ads fails or is blocked
  setTimeout(callback, 1000);

  gtag('event', 'conversion', {
    'send_to': 'AW-16958382109/p2cGCN-gs-gcEJ3AsZY_',
    'event_callback': callback
  });

  return false;
}
