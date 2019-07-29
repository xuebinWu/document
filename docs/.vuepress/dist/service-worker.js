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
    "revision": "5239ec91f814510c38dce1789affca99"
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
    "url": "assets/js/11.c086ee19.js",
    "revision": "fd9ec5daeb1981d4b78871cde73d942d"
  },
  {
    "url": "assets/js/12.749e7f32.js",
    "revision": "41013d985cb60a35a196cac15a673391"
  },
  {
    "url": "assets/js/13.56602550.js",
    "revision": "89734c0cabe1d0a9d072ff31e8d273dd"
  },
  {
    "url": "assets/js/14.9aee2a1e.js",
    "revision": "4c1451abae7a5fd6e01458c1679fcfae"
  },
  {
    "url": "assets/js/15.07f38dfe.js",
    "revision": "921982be18f414f91e65d306841dca04"
  },
  {
    "url": "assets/js/16.5251e608.js",
    "revision": "b2e55b44efa7a314c19c1d8559fbf081"
  },
  {
    "url": "assets/js/17.f0fe7d57.js",
    "revision": "c793f5c9e52d5d5307fa7aa04d479477"
  },
  {
    "url": "assets/js/18.6c7df424.js",
    "revision": "d046dccedc5cb618eade82aa34f32fc6"
  },
  {
    "url": "assets/js/19.b8b195b3.js",
    "revision": "916c41415c0765b5854866eb38872568"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.0fe30727.js",
    "revision": "7245c14ffd8523fb6e6567cd59514fca"
  },
  {
    "url": "assets/js/21.2c601f5f.js",
    "revision": "8bed1b433c71efb9dd9ecb28bfbbeeec"
  },
  {
    "url": "assets/js/22.de51680a.js",
    "revision": "d22ab560a01789c3f73397911459df80"
  },
  {
    "url": "assets/js/23.979933b0.js",
    "revision": "7adc386a0a272d25d2eaf7394feb3908"
  },
  {
    "url": "assets/js/24.12b10165.js",
    "revision": "924c670b26b2e87ccf8b0dcd4aaf5ba9"
  },
  {
    "url": "assets/js/25.6e60523a.js",
    "revision": "7087ab30520debcfc00c6fbb00f68212"
  },
  {
    "url": "assets/js/26.7d696be0.js",
    "revision": "13725dc66b5a0540db65940e6213203a"
  },
  {
    "url": "assets/js/3.08f51ac3.js",
    "revision": "71c50bb6dfbb4ff18d48c0faa4670b47"
  },
  {
    "url": "assets/js/4.714efc3e.js",
    "revision": "8293a041eee7cf5b0f1ddab12a170cf4"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.e754f1e8.js",
    "revision": "f6a5fef02af26c9f54e3e48240601146"
  },
  {
    "url": "assets/js/7.5c504437.js",
    "revision": "ed3de229e2cfd090b87e1efc47b6304b"
  },
  {
    "url": "assets/js/8.d658fffa.js",
    "revision": "25ee6c4cf949c4993f90c36f9c7b1370"
  },
  {
    "url": "assets/js/9.1f5bb073.js",
    "revision": "2c8fe2debf1cb257e8bd689d7970a793"
  },
  {
    "url": "assets/js/app.fcd1b11d.js",
    "revision": "4b7d29bfd83ba32a73c042525eb64fda"
  },
  {
    "url": "common/cli.html",
    "revision": "1fcdb2a4e8f2c1bd4e49aca018fade37"
  },
  {
    "url": "common/code-review.html",
    "revision": "bb62dc2ac3dbf2f7b94254f9d4a8b71e"
  },
  {
    "url": "common/component.html",
    "revision": "e0d18e161a8cbd36da395548bead3d1c"
  },
  {
    "url": "common/directory.html",
    "revision": "ab3162be8228b9b93b0cfe4d36da2d3d"
  },
  {
    "url": "common/env.html",
    "revision": "808f135487f2f45dda0c15ca16b17114"
  },
  {
    "url": "common/index.html",
    "revision": "5a85d0ac5a60cacc1eaa8fab264b463b"
  },
  {
    "url": "common/network.html",
    "revision": "9dde4499edc369def119219064281714"
  },
  {
    "url": "common/optimize.html",
    "revision": "f556dd67de669dd27bafb6cb7ea70a18"
  },
  {
    "url": "common/permission.html",
    "revision": "cf8f05b062c71a9c201c33e348ea76fc"
  },
  {
    "url": "common/router.html",
    "revision": "677ab2e8f7fdd42c849701a18f83fd33"
  },
  {
    "url": "common/standard.html",
    "revision": "1270ae1e90b2f3706d9b648af9e84421"
  },
  {
    "url": "common/style.html",
    "revision": "9d20fe5e569b1445e14e5bd3e7975022"
  },
  {
    "url": "common/svg.html",
    "revision": "133997b05f1fac5921f782c11687c804"
  },
  {
    "url": "common/template.html",
    "revision": "41f844bdb6e08ccee5de306bb17b6beb"
  },
  {
    "url": "common/version.html",
    "revision": "cb6f99b217e1de7a325ad53512227d28"
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
    "revision": "5254c8be7409ed21ae7f4d3ae12dc9ee"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "e694fa901ad533ee8052977fefae9817"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "cdaee371a854c0f811cecdd345e803f9"
  },
  {
    "url": "mobile/index.html",
    "revision": "776f1fef08eb21fb72d653c8fe5573f9"
  },
  {
    "url": "PC/index.html",
    "revision": "5d62e81625c5dbc461c07f94d009fce4"
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
