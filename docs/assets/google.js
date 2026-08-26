// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16958382109');

function gtag_report_app_store_click(url) {
  var callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };

  gtag('event', 'conversion', {
    'send_to': 'AW-16958382109/p2cGCN-gs-gcEJ3AsZY_',
    'event_callback': callback
  });

  return false;
}
