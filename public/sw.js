/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "About-f8af0f10.js",
    "revision": "99a30e2e1c1329898c8baeed052f2f4e"
  },
  {
    "url": "bundle.css",
    "revision": "ed6e6059134fa6ea186ce284a9fa355d"
  },
  {
    "url": "Home-18542313.js",
    "revision": "d162116a89d02f639a24f395109948a1"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "5e12f81be30297d3e58ecae76bf8eab8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "cc0149deaa554cf6ae93e75753c98829"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "6a66fd0ec64db8d87c451caa5e6a680d"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "7ff00652b9f1699439c6d0f4b17aad12"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "7ff00652b9f1699439c6d0f4b17aad12"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "7ff00652b9f1699439c6d0f4b17aad12"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "32bc84a240b3a798e4cec0ea3078d9a8"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "bc56dd52271790f822e763c8f0442172"
  },
  {
    "url": "index-fecd9fc8.js",
    "revision": "fcd6063ab3128711754c9f12fda28b28"
  },
  {
    "url": "index.html",
    "revision": "5c73c8e2d5bd89894751649f387c72c9"
  },
  {
    "url": "main.js",
    "revision": "e411bd7288aa3eb0806e6e1cb49700ed"
  },
  {
    "url": "manifest.json",
    "revision": "2d83635d610445f0fbf50cb663d2e854"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
