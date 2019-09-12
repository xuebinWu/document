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
    "revision": "0c170f0a1b5f0e210dbfb2b15a00dac2"
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
    "url": "assets/js/10.ead48301.js",
    "revision": "8c434ddec8559ba44951ce57ea965833"
  },
  {
    "url": "assets/js/11.a038853d.js",
    "revision": "203d20fddb9f2f0b5c20e73f81730656"
  },
  {
    "url": "assets/js/12.d61f3b3c.js",
    "revision": "4655764ed70bdcccbba7eec924fcb326"
  },
  {
    "url": "assets/js/13.56602550.js",
    "revision": "89734c0cabe1d0a9d072ff31e8d273dd"
  },
  {
    "url": "assets/js/14.bd43af54.js",
    "revision": "3f6481322b222cc4bf3c021f795313c4"
  },
  {
    "url": "assets/js/15.7c8706de.js",
    "revision": "a7b203a922eff125ed287feb409e5e9b"
  },
  {
    "url": "assets/js/16.5921ee06.js",
    "revision": "00790b7461746c5e011df66ccc8ff1d1"
  },
  {
    "url": "assets/js/17.1b8c532e.js",
    "revision": "98b2e64fd96a93850468d25f5d15376d"
  },
  {
    "url": "assets/js/18.fb240c28.js",
    "revision": "f13f1a6a91f3ac17f1d96bf182d8b015"
  },
  {
    "url": "assets/js/19.a56c5258.js",
    "revision": "095e5790d867b1404509ba9aba30493c"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.17ede909.js",
    "revision": "b552eaf1bbb6fd99bbb992ade2917be2"
  },
  {
    "url": "assets/js/21.049259a0.js",
    "revision": "0c9da5c441e59ec8df55b1214c5b51c1"
  },
  {
    "url": "assets/js/22.6aa0b800.js",
    "revision": "67d8fb7f0d668c761e1cf71403c18e19"
  },
  {
    "url": "assets/js/23.80dc3806.js",
    "revision": "d3ec4344a29665aa9ce5131cd3e938c9"
  },
  {
    "url": "assets/js/24.2908c28c.js",
    "revision": "d1cd94e182715e1f272b12ed48a6403a"
  },
  {
    "url": "assets/js/25.2f724797.js",
    "revision": "afddd00566050c08f130f877145752a9"
  },
  {
    "url": "assets/js/26.fec15117.js",
    "revision": "13329b1e1d8cb355f322ae11b4aa0e82"
  },
  {
    "url": "assets/js/27.650d2881.js",
    "revision": "7fd5713ea085f01aed353e99e116d0e4"
  },
  {
    "url": "assets/js/28.68fc608c.js",
    "revision": "edf800d9c46e5bc5919f06529e972e5d"
  },
  {
    "url": "assets/js/29.1f1ad5fe.js",
    "revision": "56cee1798030e57d9cde2c3275d2dacd"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.e66dc600.js",
    "revision": "04e6deb930a1a719bda473a131582fe0"
  },
  {
    "url": "assets/js/4.b220b74b.js",
    "revision": "044fddc0f108b940fb1b6af1ac78a25a"
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
    "url": "assets/js/7.9d1d30e7.js",
    "revision": "320a7101d022ea07fa38978d55475421"
  },
  {
    "url": "assets/js/8.736d8eff.js",
    "revision": "a1aba966ddd01e1e7af971272fe786c5"
  },
  {
    "url": "assets/js/9.71e4dd11.js",
    "revision": "d7ac8fa75c776ff5ed5cc0d911241082"
  },
  {
    "url": "assets/js/app.021e5ab0.js",
    "revision": "b5ff364ad0ebb7b2e753e6a8307426cc"
  },
  {
    "url": "common/cli.html",
    "revision": "5f5e7a1951e1a53e9c2bf35892f480f1"
  },
  {
    "url": "common/code-review.html",
    "revision": "32d263adbfc48e03a4e45b9fa0515041"
  },
  {
    "url": "common/component.html",
    "revision": "2c6438a1b45b791bdf4b8af9c33f06f5"
  },
  {
    "url": "common/directory.html",
    "revision": "ce30ddc3483b0aeb00fa72864f9dbdd3"
  },
  {
    "url": "common/env.html",
    "revision": "4e4e09916fe87f01a3ea0548825917bd"
  },
  {
    "url": "common/index.html",
    "revision": "f9780f7bd1994d33d3fb0f36a4882c12"
  },
  {
    "url": "common/network.html",
    "revision": "b31cc341fdb594e3a5a4ac8fb4ac0d26"
  },
  {
    "url": "common/optimize.html",
    "revision": "ad26d11063121fcbaf3cb4e134c7813a"
  },
  {
    "url": "common/permission.html",
    "revision": "dae8274c4dddd67f4d44bd7f2b999c5e"
  },
  {
    "url": "common/router.html",
    "revision": "932f6e2451288af7d6f7d1d5083b1348"
  },
  {
    "url": "common/skeleton.html",
    "revision": "6281c895064fb9a325c1119f0bd64d46"
  },
  {
    "url": "common/standard.html",
    "revision": "3f7de32720e88578acc1e50cb8564113"
  },
  {
    "url": "common/style.html",
    "revision": "f9ebab6c27f6f0eb9533284b1e7b7d29"
  },
  {
    "url": "common/svg.html",
    "revision": "4a9586f51bbc765e623c79abfa2d95e5"
  },
  {
    "url": "common/template.html",
    "revision": "d14977ab88bae800e9dff1786f529976"
  },
  {
    "url": "common/version.html",
    "revision": "c3edffa4b8e04ef238ee3289c1a45eeb"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
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
    "url": "index.html",
    "revision": "16af42fecfd0f872730b376a5fda0d58"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "0622dc713fc6f6256c734aed00ba9bf6"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "0d2071f0287711f9509ddb7baf6c3460"
  },
  {
    "url": "mobile/index.html",
    "revision": "b6fde701726ef9248036417242b64132"
  },
  {
    "url": "mobile/install.html",
    "revision": "f540eda876f12512c16de7e4ed79c9ef"
  },
  {
    "url": "mobile/modules.html",
    "revision": "58004e15d1fdfd71f7783e8ffbe00bf0"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "c490f2c9aa2e43df7f29a8a976383118"
  },
  {
    "url": "PC/index.html",
    "revision": "8abc21e0d068c97871253eb4ddec3327"
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
