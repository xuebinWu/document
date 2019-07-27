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
    "revision": "f40c3d23b7435004af1707095a0c6d22"
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
    "url": "assets/js/10.4c56d567.js",
    "revision": "05ad6253930d48936be12edcdec9fc6d"
  },
  {
    "url": "assets/js/11.9c24fb87.js",
    "revision": "f9bc5a7730627f237352d782d3677e50"
  },
  {
    "url": "assets/js/12.53d5a1a8.js",
    "revision": "0762bb8c401b92334f0811467bfaf108"
  },
  {
    "url": "assets/js/13.e37676c6.js",
    "revision": "ee7887e3bd37e3e41cbef47eaf3ebdf6"
  },
  {
    "url": "assets/js/14.ab761eb0.js",
    "revision": "75438a144d508d721ba670fcc9b71235"
  },
  {
    "url": "assets/js/15.e0eaa179.js",
    "revision": "1ea4e9fe90373294e17629b1a8266cf9"
  },
  {
    "url": "assets/js/16.853de0a6.js",
    "revision": "d98928d4d020eed26c7efdaa124b66d8"
  },
  {
    "url": "assets/js/17.1078e4d5.js",
    "revision": "857b8316f71b0f1a4c55ffbb9ce766e9"
  },
  {
    "url": "assets/js/18.2c6bdb23.js",
    "revision": "c440d9bbb611b3af98089dabb6ee6f0e"
  },
  {
    "url": "assets/js/19.fd6780f2.js",
    "revision": "88e482b3491aa661b572992e270e5cef"
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
    "url": "assets/js/22.37de2a5a.js",
    "revision": "e9ddd89718969a5793cf8a5c0173d13c"
  },
  {
    "url": "assets/js/23.93635b0d.js",
    "revision": "4651cceb12385859b1d02a254d90662f"
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
    "url": "assets/js/6.137879c0.js",
    "revision": "57ccb90b008606aa2bae7ca939a943e4"
  },
  {
    "url": "assets/js/7.02ee22ab.js",
    "revision": "56565b1ab364ac86344321ed7f91e4ed"
  },
  {
    "url": "assets/js/8.736d8eff.js",
    "revision": "a1aba966ddd01e1e7af971272fe786c5"
  },
  {
    "url": "assets/js/9.1f5bb073.js",
    "revision": "2c8fe2debf1cb257e8bd689d7970a793"
  },
  {
    "url": "assets/js/app.958da21f.js",
    "revision": "bbd757e33147247ed8c85b4b12132e47"
  },
  {
    "url": "common/cli.html",
    "revision": "c050918b72428b633657de3b27e2bffa"
  },
  {
    "url": "common/component.html",
    "revision": "fa3948bd05f1fa78a05348898b579da8"
  },
  {
    "url": "common/directory.html",
    "revision": "dab88f88bc7370e4c340b4af1d77922b"
  },
  {
    "url": "common/env.html",
    "revision": "54e701f98a66d4d401e1cd1f0c72d369"
  },
  {
    "url": "common/index.html",
    "revision": "cb73b98fadacb0e4dd64ac8080365e6f"
  },
  {
    "url": "common/network.html",
    "revision": "df2649bdf0c1edf18b6191cb66313111"
  },
  {
    "url": "common/optimize.html",
    "revision": "cfe1752457db40d1907189687d3f3b3c"
  },
  {
    "url": "common/permission.html",
    "revision": "0b36082fddc46388e205439c53c10763"
  },
  {
    "url": "common/router.html",
    "revision": "687e51a63b1646b942ca13ede4bbbf82"
  },
  {
    "url": "common/standard.html",
    "revision": "f6c432c0de99fc117d3c9fb9d7f0be3f"
  },
  {
    "url": "common/style.html",
    "revision": "f5304e2347e0bb4cb024967262f1ecc5"
  },
  {
    "url": "common/svg.html",
    "revision": "28a291eefef7e45de3f8409ab276ca1e"
  },
  {
    "url": "common/template.html",
    "revision": "092b79518ed1d461ff6f1b0d11d2c0bb"
  },
  {
    "url": "flow.png",
    "revision": "8cd93c71cb0bed8bc99aa2cc1d32f892"
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
    "revision": "bd7864abe17756a1d1a32502ac41947c"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "011585c83dc739889cf45078fbb2587b"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "ab1fda15e2fa5dc01b786a9669445fcd"
  },
  {
    "url": "mobile/index.html",
    "revision": "e3c8fafbd5e9f2afd33bef1c5ba40bf1"
  },
  {
    "url": "PC/index.html",
    "revision": "4071a9e1ab0dde84bd940e31787876f5"
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
