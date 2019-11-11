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
    "url": "404.html",
    "revision": "a840be753c6c55a35b3d85fbb92c2cee"
  },
  {
    "url": "assets/css/0.styles.7abad64f.css",
    "revision": "6f46d69c9b530225dab758c08b8bb4d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.40d677e6.js",
    "revision": "b020b09c24139ac37d33ad2179d8d9c3"
  },
  {
    "url": "assets/js/11.f604e81a.js",
    "revision": "58fd776aaa950f270920d1c8878bb209"
  },
  {
    "url": "assets/js/12.299d3e98.js",
    "revision": "f83f9fc5a0a9b81de9c0def71e725d95"
  },
  {
    "url": "assets/js/13.7f599216.js",
    "revision": "597cae602278e95c400c5f93bf44ec06"
  },
  {
    "url": "assets/js/14.590a1728.js",
    "revision": "9263f50a0f6e66aa6e0621cf4891b477"
  },
  {
    "url": "assets/js/15.a5203967.js",
    "revision": "f016f29bcfe8e78a8b510de214657cad"
  },
  {
    "url": "assets/js/16.b50f0f54.js",
    "revision": "2ec95e7f08f93b77aa467c75e2bd9f7a"
  },
  {
    "url": "assets/js/17.15c9e7a8.js",
    "revision": "5b95e9043351f5ed593572e42315e103"
  },
  {
    "url": "assets/js/18.11ea747f.js",
    "revision": "3ba90557b441bdf3ad2fa341366543a3"
  },
  {
    "url": "assets/js/19.32249de8.js",
    "revision": "4d15e400333b0610248de680713a01e6"
  },
  {
    "url": "assets/js/2.9d4046af.js",
    "revision": "27d035066564a24f76330c141bc1111d"
  },
  {
    "url": "assets/js/20.8af08776.js",
    "revision": "2a91dbb62a544b8f21dba0fa0f03f72e"
  },
  {
    "url": "assets/js/21.b37ee73e.js",
    "revision": "391c6f69dc63b756a7464053136ceab4"
  },
  {
    "url": "assets/js/22.38690f0b.js",
    "revision": "0a590c29380885d521955c17099b040c"
  },
  {
    "url": "assets/js/23.a4e2ae71.js",
    "revision": "befbadd0680c8d0c1eb2cdc043aa3b33"
  },
  {
    "url": "assets/js/24.e9936af3.js",
    "revision": "2bc36e5567a31ef2cf11b41808fd69bc"
  },
  {
    "url": "assets/js/25.4491b141.js",
    "revision": "c2ae8a42ca892d956911198dd92fcfcf"
  },
  {
    "url": "assets/js/26.8d8c1583.js",
    "revision": "a6fddac104d36ee492463a9b8a1ffe5c"
  },
  {
    "url": "assets/js/27.1acd5be1.js",
    "revision": "9448e192617def771a2ef9991e3cafee"
  },
  {
    "url": "assets/js/28.c58f4d2a.js",
    "revision": "0e8176e7e502029b4c14dd29182e2764"
  },
  {
    "url": "assets/js/29.01d42b75.js",
    "revision": "82dd45f4a9842365c5ce18ee59edf9c8"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.89b63a99.js",
    "revision": "804d10c8a9f04abb04c2c0eac14db5cf"
  },
  {
    "url": "assets/js/31.811632cf.js",
    "revision": "dc85e22f618fcd4a8aa0bf3dc6f1896f"
  },
  {
    "url": "assets/js/32.22a569fe.js",
    "revision": "a91cd3f561c41436ebb00d3ab715b968"
  },
  {
    "url": "assets/js/33.583578e4.js",
    "revision": "f1117d9f138232b1139d5ddb978ca69d"
  },
  {
    "url": "assets/js/34.a8fee30b.js",
    "revision": "322a050e64f8a10efd698aefcbbf3b89"
  },
  {
    "url": "assets/js/35.c93899f9.js",
    "revision": "68b6c1ccdff3f278dfa0ad7324822fa8"
  },
  {
    "url": "assets/js/36.3e427b99.js",
    "revision": "4292e0bbf79c23f340d7cdf9c26ae0f5"
  },
  {
    "url": "assets/js/37.0b37c2f7.js",
    "revision": "82ae85e67cf759af5f40d09d18a2b3bb"
  },
  {
    "url": "assets/js/38.66c11a18.js",
    "revision": "4cd81a488950d04365771da0c77e4c9e"
  },
  {
    "url": "assets/js/39.fed8d1a3.js",
    "revision": "60e34909b6bb56033aae33ec3996e73a"
  },
  {
    "url": "assets/js/4.c45ec80c.js",
    "revision": "6810fc4d93b6a03258e0736afff263d8"
  },
  {
    "url": "assets/js/40.7d7ca3d5.js",
    "revision": "dfc867d7005985a5019ddaab3f197d61"
  },
  {
    "url": "assets/js/41.dafe1e58.js",
    "revision": "e4582f69aa13c4ed5530b76343882ebc"
  },
  {
    "url": "assets/js/42.2d32b325.js",
    "revision": "b87df823f0043dfc3e3c70f56b37a8a2"
  },
  {
    "url": "assets/js/5.201ae859.js",
    "revision": "91bef36cda4ee74da084e51fbe9ed450"
  },
  {
    "url": "assets/js/6.068c0c89.js",
    "revision": "27c993bac0ee076f4fae27a537e82cc4"
  },
  {
    "url": "assets/js/7.4bd43000.js",
    "revision": "2b49d8b5040159c429c45cd3d84872e6"
  },
  {
    "url": "assets/js/8.997d6469.js",
    "revision": "f405404bfde89f2f9a85c4270e5aabdb"
  },
  {
    "url": "assets/js/9.3c1edcb9.js",
    "revision": "b18d879e1a6ef93dd078a3c0d318cc2f"
  },
  {
    "url": "assets/js/app.2376870a.js",
    "revision": "961ac6ff794e5054e7c2ccc8f4dfcb83"
  },
  {
    "url": "common/cli.html",
    "revision": "b78cf454efe92fdea6416d367c322439"
  },
  {
    "url": "common/code-review.html",
    "revision": "f06c422f577861bc6d5b8ade84e9ba50"
  },
  {
    "url": "common/component.html",
    "revision": "cf149979374a7b5b7490400898383c3e"
  },
  {
    "url": "common/directory.html",
    "revision": "8c7e8e46fb9077c2906778e4ea2815d4"
  },
  {
    "url": "common/env.html",
    "revision": "40024d8e2fe3cc4cd606b52e2e2d51c4"
  },
  {
    "url": "common/index.html",
    "revision": "58d5277d88767ad2fcae12d41921b83d"
  },
  {
    "url": "common/locale.html",
    "revision": "4170d1db750a013b15c8144fbf5ec957"
  },
  {
    "url": "common/network.html",
    "revision": "dbac95ec8a721326cfe9084b35d18c8e"
  },
  {
    "url": "common/optimize.html",
    "revision": "c69cce6b20edc06b6a828a91f8ac3302"
  },
  {
    "url": "common/permission.html",
    "revision": "eca959bec32fa026881c2512972d8178"
  },
  {
    "url": "common/router.html",
    "revision": "e703b02a1115b14b7d37d824c0e2e76b"
  },
  {
    "url": "common/skeleton.html",
    "revision": "74d675e3c84cb2a346fc53384cec8e41"
  },
  {
    "url": "common/standard.html",
    "revision": "4c81a9232ba35df7a057e6d619360b6e"
  },
  {
    "url": "common/style.html",
    "revision": "24d5d92d5a04954d78cc98a2eb605e1b"
  },
  {
    "url": "common/svg.html",
    "revision": "42455f9e12e84ad15b0ebcfb598c0081"
  },
  {
    "url": "common/template.html",
    "revision": "85335656cfb1fcd2c285bbfe838b5d35"
  },
  {
    "url": "common/tools.html",
    "revision": "a349183e9516934c209a9fc63adadbc1"
  },
  {
    "url": "common/version.html",
    "revision": "3d396c9001c5756dab7cf9fe454c3a8e"
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
    "revision": "a14dcb23c4f9896bdef9875ff9a8ca04"
  },
  {
    "url": "experience/index.html",
    "revision": "27012e945762fbbc93aa57e6b54ea7ff"
  },
  {
    "url": "experience/mobile.html",
    "revision": "2c6e661295b70623dacb29f4ef9fddf5"
  },
  {
    "url": "experience/pc.html",
    "revision": "659c53d87e99d1e5651471ba5a98349e"
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
    "revision": "3324b19c8922cd91c49cc70b1e51a222"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "loginLayout.png",
    "revision": "a00379641a0c0e4f54b2e72195eed145"
  },
  {
    "url": "mainLayout.png",
    "revision": "e7dc470ce9aacca7047a1bdc53cf6b62"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "29bae3fd1e57fe6a2ac708c1e359d75c"
  },
  {
    "url": "mobile/fit.html",
    "revision": "de4dbf7600520335ae2ce83c2749d6f4"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "abbb1bde71dfbdfc0b52142f26cfbeb8"
  },
  {
    "url": "mobile/index.html",
    "revision": "6b1881e339d9cb8b3754cb4c848c1faa"
  },
  {
    "url": "mobile/install.html",
    "revision": "5c41298f47b52eb6af2bb81ee3565b5a"
  },
  {
    "url": "mobile/modules.html",
    "revision": "c9d5b72d4745ea8af9ab752a7729f8ff"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "39bbf85d87e0e98f39e44497529f4cd6"
  },
  {
    "url": "PC/config.html",
    "revision": "0c79b6d1d735750cb7dacfa9cface2a1"
  },
  {
    "url": "PC/directives.html",
    "revision": "5249cb7520918e482214c4f9538ed97e"
  },
  {
    "url": "PC/index.html",
    "revision": "d3b7ee9d3cd74e69853732d5e314ba45"
  },
  {
    "url": "PC/layout.html",
    "revision": "0ca74e3a847395d262eb88296167a9ec"
  },
  {
    "url": "PC/plugin.html",
    "revision": "f4462996513775d21c93f92035656119"
  },
  {
    "url": "PC/process.html",
    "revision": "aeb87a705362fe24b4bf3634d4d6f635"
  },
  {
    "url": "siderbar.png",
    "revision": "c133c7c4699ec323464b58567261cc4f"
  },
  {
    "url": "simpleLayout.png",
    "revision": "94ecf32931a8d153073ee2bf166ab682"
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
