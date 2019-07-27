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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f793b70f453f99558676afe0db29fee3"
  },
  {
    "url": "assets/css/0.styles.5a6887f8.css",
    "revision": "1658cf52813b7f8dec071b7d78d0b67e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9db15e48.js",
    "revision": "68c7f20560e6bfbfcdd5be7bd1def7f8"
  },
  {
    "url": "assets/js/11.33c30a19.js",
    "revision": "53c116283a6eadf0c981f6f458a54a10"
  },
  {
    "url": "assets/js/12.45dc7021.js",
    "revision": "d3b57812e82022377d3af4a5af2f4ccb"
  },
  {
    "url": "assets/js/13.a1e34745.js",
    "revision": "b28a165bf8dbc13213b8a11fdf278698"
  },
  {
    "url": "assets/js/14.631b5138.js",
    "revision": "92795f06760c38ab78f9912ef012dcd5"
  },
  {
    "url": "assets/js/15.195dfc2c.js",
    "revision": "9bc14d66d87c7ef488c509fafc0b8217"
  },
  {
    "url": "assets/js/16.0616f2f0.js",
    "revision": "ce447972596f47a43cfa6a28bdab5ed8"
  },
  {
    "url": "assets/js/17.072e1e4a.js",
    "revision": "19c760965fbabf1829215b0dd29472fd"
  },
  {
    "url": "assets/js/18.9831ad5f.js",
    "revision": "17400fac3a9dbdfef0d45598a69fa5e4"
  },
  {
    "url": "assets/js/19.3acbcbc3.js",
    "revision": "e70f2cfdb47f7ace88b54bf5f41db35d"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.3b82cf69.js",
    "revision": "cae5fa416ab092170a34826f0683fe69"
  },
  {
    "url": "assets/js/21.313a04a9.js",
    "revision": "54123d749247e6e355bca9ba2553ffef"
  },
  {
    "url": "assets/js/22.eef9959a.js",
    "revision": "a962c211984415afdf2633e3aad456b8"
  },
  {
    "url": "assets/js/23.ec924eec.js",
    "revision": "fb5a757a590bc98732cb9ba1e853f97a"
  },
  {
    "url": "assets/js/24.d550f913.js",
    "revision": "e4973b0c7a5232ec5ef0421e9e66aa0a"
  },
  {
    "url": "assets/js/3.08f51ac3.js",
    "revision": "71c50bb6dfbb4ff18d48c0faa4670b47"
  },
  {
    "url": "assets/js/4.c0f380be.js",
    "revision": "e30608ae7e62ada0d5de260739ffa983"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.c7005dee.js",
    "revision": "1821623a507f133ad28f140abe382d0e"
  },
  {
    "url": "assets/js/7.d623f769.js",
    "revision": "ed819f2c2609c42b47b76d6eb715300b"
  },
  {
    "url": "assets/js/8.d658fffa.js",
    "revision": "25ee6c4cf949c4993f90c36f9c7b1370"
  },
  {
    "url": "assets/js/9.1d07b01e.js",
    "revision": "353b82980079992b7d80c430ea29f3b2"
  },
  {
    "url": "assets/js/app.5f75c6bb.js",
    "revision": "aeaefb5fe6d8b63e16dad774d2976794"
  },
  {
    "url": "common/cli.html",
    "revision": "cc49c803e56186989f929cec007a1501"
  },
  {
    "url": "common/component.html",
    "revision": "158ee16ae3c3720b19d402a2805121a2"
  },
  {
    "url": "common/directory.html",
    "revision": "5efde28114b204ee04ad4e9545f0182f"
  },
  {
    "url": "common/env.html",
    "revision": "710cb4b88783cc9943ecb825130ad43e"
  },
  {
    "url": "common/index.html",
    "revision": "802521dc0aa6953f2e1d6364db661b62"
  },
  {
    "url": "common/network.html",
    "revision": "dff007b9f04b20070f9b73fac54e1327"
  },
  {
    "url": "common/optimize.html",
    "revision": "807842619158cdb6727603124db86f14"
  },
  {
    "url": "common/permission.html",
    "revision": "8f472e2b36c6a16b94a4e7f62d63caa6"
  },
  {
    "url": "common/router.html",
    "revision": "8dcc4ace0daab78e9ed179b4f3a5faad"
  },
  {
    "url": "common/standard.html",
    "revision": "dc5ac5ad94c61d37549eae5f2340aa9c"
  },
  {
    "url": "common/style.html",
    "revision": "ae9653061126c5642f2fd27388c313c7"
  },
  {
    "url": "common/svg.html",
    "revision": "5b7c83b70b6e8c0a93ca9cb856f65d04"
  },
  {
    "url": "common/template.html",
    "revision": "7a8659f67094019b30ea63f204a05862"
  },
  {
    "url": "flow.png",
    "revision": "effa0fc9a8fafd7caa7aa559bc163604"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "c4657357269a0ca19115fd064a5112e1"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "dbf51463973937f539ba23cb8bd1a96e"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "431cdc7d1d0e877e27b90e3b4f050411"
  },
  {
    "url": "mobile/index.html",
    "revision": "fd8322745a8d2c5ed5fbc3af8cad715b"
  },
  {
    "url": "PC/index.html",
    "revision": "b084dcc37a576a107dd0b2954f2ce8df"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
