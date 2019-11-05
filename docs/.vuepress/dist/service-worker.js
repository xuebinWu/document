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
    "revision": "7e06996acc8f76644c071d62e49cbbeb"
  },
  {
    "url": "assets/css/0.styles.2be7ae2e.css",
    "revision": "1658cf52813b7f8dec071b7d78d0b67e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e285c44d.js",
    "revision": "30952d65847c3035f2111840dd9754ab"
  },
  {
    "url": "assets/js/11.ef129a86.js",
    "revision": "3b158319c426a19dd93a0ebd6c3d122f"
  },
  {
    "url": "assets/js/12.ff8b812b.js",
    "revision": "bf3960fd83fc1a0e54e6d56e1e2e3694"
  },
  {
    "url": "assets/js/13.5c710875.js",
    "revision": "3ece17c54f486234f4ec04b42217e8a3"
  },
  {
    "url": "assets/js/14.b0a52f83.js",
    "revision": "c9ea71d8b652341fe7730f25b97797da"
  },
  {
    "url": "assets/js/15.ff19518e.js",
    "revision": "77f884bc85ef1b01b1dfc8df36637ddf"
  },
  {
    "url": "assets/js/16.b3fc20ea.js",
    "revision": "f29234925bb2eb3e320cfec2c20e91d5"
  },
  {
    "url": "assets/js/17.d1ea2611.js",
    "revision": "c957f8640427b775c006759e17ccd777"
  },
  {
    "url": "assets/js/18.cc5722e2.js",
    "revision": "54c550fd9d566871d43bcaecea1e8adb"
  },
  {
    "url": "assets/js/19.30d282f6.js",
    "revision": "3f98e3e183e96d876e4b9db071c700f8"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.7f20e369.js",
    "revision": "937e01b272270c53226b499489e4e9c5"
  },
  {
    "url": "assets/js/21.437785af.js",
    "revision": "bec0267668320ce66544ea45285ba59d"
  },
  {
    "url": "assets/js/22.c10f0b1f.js",
    "revision": "4cfa8a9f0f98d1ee6f019e5e2b15be7c"
  },
  {
    "url": "assets/js/23.588a09a2.js",
    "revision": "23be3f62a3594d388efc46388ee521d6"
  },
  {
    "url": "assets/js/24.7e00176b.js",
    "revision": "d05d601f52d951de2984c8ceccdc0398"
  },
  {
    "url": "assets/js/25.ae5c046f.js",
    "revision": "da2ec1ed5fe549cd6b9c6b47918a3da8"
  },
  {
    "url": "assets/js/26.bf5a51fa.js",
    "revision": "c622216a45ec45e59757325ba016c91e"
  },
  {
    "url": "assets/js/27.43458cd4.js",
    "revision": "142ad7a15c017ee98a45f86109cf3876"
  },
  {
    "url": "assets/js/28.b92e1c4b.js",
    "revision": "f8373e59297bcd8d3975d0ca969e9ed8"
  },
  {
    "url": "assets/js/29.5d6fee1a.js",
    "revision": "61add2c359a393dba0c48f287b706b1b"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.19551875.js",
    "revision": "526e18d5b5ef4b4ee6de9efda8a27fac"
  },
  {
    "url": "assets/js/31.6f36a492.js",
    "revision": "db896b2dc8923e8e1dfc2002d0611ca7"
  },
  {
    "url": "assets/js/32.f658ed69.js",
    "revision": "800e004eb829d49a832fc6a3d50fa7ac"
  },
  {
    "url": "assets/js/33.4c8d569d.js",
    "revision": "8359b7ca663600a839bd4c0affc435a8"
  },
  {
    "url": "assets/js/34.0c52f619.js",
    "revision": "e07b42b90b9a809e8d3e44384cbdd6d4"
  },
  {
    "url": "assets/js/35.24de9c61.js",
    "revision": "a1b38e06155af412e82383e5d37e4e58"
  },
  {
    "url": "assets/js/36.1ec55dfb.js",
    "revision": "b19265c1eae3b089eaaccf55c5dc7e35"
  },
  {
    "url": "assets/js/37.de33af09.js",
    "revision": "8e134a163693463dc70e286f8e8c7d14"
  },
  {
    "url": "assets/js/38.4595e03c.js",
    "revision": "3173444880972702a3db645bb73921da"
  },
  {
    "url": "assets/js/39.4f6ad419.js",
    "revision": "a0dcf7577a6bb6f32030d1b1a9a0e6d9"
  },
  {
    "url": "assets/js/4.36fcc44f.js",
    "revision": "7f6e73a74a4b2fe6efd88856a833f86b"
  },
  {
    "url": "assets/js/40.7d0fbc94.js",
    "revision": "ab9fabaa993cceb0eb97f82bcf73c89d"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.94c365dc.js",
    "revision": "9f21ccf80e29b226817c053d38157aca"
  },
  {
    "url": "assets/js/7.d180dc24.js",
    "revision": "73493b06d7937599454a31076d953009"
  },
  {
    "url": "assets/js/8.fb7e391e.js",
    "revision": "066f7051acc91afacffd9fa89abfbc95"
  },
  {
    "url": "assets/js/9.685bf3f2.js",
    "revision": "e2ab4d90628996eb272c6108fd40232d"
  },
  {
    "url": "assets/js/app.d87c5197.js",
    "revision": "498111d8188161bc6a23fe9b6233ba50"
  },
  {
    "url": "common/cli.html",
    "revision": "a15101fa2ca323bea18ba83fd2a3c535"
  },
  {
    "url": "common/code-review.html",
    "revision": "6458c7fce306c3f7c91433cb1f988c91"
  },
  {
    "url": "common/component.html",
    "revision": "7892d98e998c94f30a8168e0df5e993a"
  },
  {
    "url": "common/directory.html",
    "revision": "b2f792b131f9495505a5820846e39641"
  },
  {
    "url": "common/env.html",
    "revision": "72a9d3192a50bb6d4c0e70ac72f46166"
  },
  {
    "url": "common/index.html",
    "revision": "376c38da6f7321ab11507c2133943029"
  },
  {
    "url": "common/locale.html",
    "revision": "c2fc6af240235d35b67cd560ed0f802a"
  },
  {
    "url": "common/network.html",
    "revision": "59444995869dc119cfb6e820c02245cd"
  },
  {
    "url": "common/optimize.html",
    "revision": "18793ee4e744e0bb678855ae496419bb"
  },
  {
    "url": "common/permission.html",
    "revision": "99ff88d459cbcfa277bf5b7c3d5c0896"
  },
  {
    "url": "common/router.html",
    "revision": "bbe53b066dcdc98a01dcedeabe728e37"
  },
  {
    "url": "common/skeleton.html",
    "revision": "13ac5fa0a3294fbfa8c3ac5fdc67635e"
  },
  {
    "url": "common/standard.html",
    "revision": "34059f28de0d4f91413bc390424e8042"
  },
  {
    "url": "common/style.html",
    "revision": "8be0c85b734eca03b3dc688ff637e5b2"
  },
  {
    "url": "common/svg.html",
    "revision": "b748368c2dfdae07249c9cb43d62f986"
  },
  {
    "url": "common/template.html",
    "revision": "232e807a0d901dcfb5d691137c2f7094"
  },
  {
    "url": "common/tools.html",
    "revision": "5c386da4b38e9cb772b61ef237205236"
  },
  {
    "url": "common/version.html",
    "revision": "31774a02ca6c74c91acbe2e0ac03f91e"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "debug.jpg",
    "revision": "541f2d40f82a09173ef2b9a84453f0c0"
  },
  {
    "url": "develop.png",
    "revision": "38aeaa4c1d45c80f3d3fade2ec63ee39"
  },
  {
    "url": "experience/hybrid.html",
    "revision": "fafe65d3ad05f909490940cc4bec72fc"
  },
  {
    "url": "experience/index.html",
    "revision": "5187a61d95d06c17aa15ed133bdc866e"
  },
  {
    "url": "experience/mobile.html",
    "revision": "6ac3b663837da1f56c9269aed888ae6b"
  },
  {
    "url": "experience/pc.html",
    "revision": "4a9b6885825daec90e5159902327591c"
  },
  {
    "url": "flow.png",
    "revision": "8cd93c71cb0bed8bc99aa2cc1d32f892"
  },
  {
    "url": "fram_test.png",
    "revision": "6023cc67c2acab78dcbec7dba4fa6170"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "ec33e317babb44f7504e2d42fa23e676"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/debug.html",
    "revision": "8e50f831fc2d9635986a667526f3b572"
  },
  {
    "url": "mobile/fit.html",
    "revision": "3709073eafee35bacaea2fc4301aed90"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "099dea50f5162bd5ebec58e2bf9ce91b"
  },
  {
    "url": "mobile/index.html",
    "revision": "c38ba4ff0604c6044aede10a86026782"
  },
  {
    "url": "mobile/install.html",
    "revision": "ef071dc7efd2b29e30ac855bb106dd33"
  },
  {
    "url": "mobile/modules.html",
    "revision": "da0575131aa1192c95c24857782038a9"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "7cddd52589027274106765946f16a0ee"
  },
  {
    "url": "PC/config.html",
    "revision": "2378423b149ff514afb0d23ba73239f6"
  },
  {
    "url": "PC/index.html",
    "revision": "53020570020517d7773341e6f6fec5e1"
  },
  {
    "url": "PC/plugin.html",
    "revision": "575b6fdf3acc67af20ccabc0ca62484c"
  },
  {
    "url": "PC/process.html",
    "revision": "7e24beec2a4ba421a58d1cef78dd9f92"
  },
  {
    "url": "wisdom_app_pre.png",
    "revision": "d0125641a9ae9658fd6d49e94906b35e"
  },
  {
    "url": "wisdom_app.png",
    "revision": "f06e7111e94906b7c8c9c6afe8a72ce2"
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
