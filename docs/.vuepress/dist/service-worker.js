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
    "revision": "439ec5727116a037d3739b769a21545f"
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
    "url": "assets/js/10.36cdd1e0.js",
    "revision": "63926780750cc370e6c8636976971975"
  },
  {
    "url": "assets/js/11.57aa8148.js",
    "revision": "ea0dc5ec32200647ffc5ac27b9fafc0b"
  },
  {
    "url": "assets/js/12.1b27162f.js",
    "revision": "bb881c50dd84ff5524528c5e428eede0"
  },
  {
    "url": "assets/js/13.e4750587.js",
    "revision": "1774b6ec464f55ad960f88b2311f4a66"
  },
  {
    "url": "assets/js/14.46d55a1c.js",
    "revision": "86f3e9df5b030385ae8a0ceec6107794"
  },
  {
    "url": "assets/js/15.d4b1569b.js",
    "revision": "341abd8674e71d58546237cacf4ea7a3"
  },
  {
    "url": "assets/js/16.7db7efbd.js",
    "revision": "7579cfb790b5150378e3a41d642d302b"
  },
  {
    "url": "assets/js/17.cde0eaa4.js",
    "revision": "abe0bca2c530caded3d2ac28dd5700b0"
  },
  {
    "url": "assets/js/18.b4e0f5be.js",
    "revision": "dcd709c70e566e8a4f72652e6b185762"
  },
  {
    "url": "assets/js/19.1d9d14e1.js",
    "revision": "4e181e3d2b2bb511ba68ed879b0b9d7f"
  },
  {
    "url": "assets/js/2.9d4046af.js",
    "revision": "27d035066564a24f76330c141bc1111d"
  },
  {
    "url": "assets/js/20.7ad0040e.js",
    "revision": "dc6edbffe0c3b85e4612fb8b25317cae"
  },
  {
    "url": "assets/js/21.06ade28a.js",
    "revision": "e68f6444cb4ed605e2f6e2decd39a494"
  },
  {
    "url": "assets/js/22.7217a53b.js",
    "revision": "e68115a4c192a36551cad88d3bd90196"
  },
  {
    "url": "assets/js/23.5103b2a9.js",
    "revision": "a09130bd6e550c5ffbd19d8cd67479c7"
  },
  {
    "url": "assets/js/24.8b7799dc.js",
    "revision": "1a3c159577a59b2b1b46b880a0d623e8"
  },
  {
    "url": "assets/js/25.7220a5c0.js",
    "revision": "c97abbc1d24693d72295bfcba9ffd39b"
  },
  {
    "url": "assets/js/26.3874a191.js",
    "revision": "b0ea650781bf4c972f413f756262bc61"
  },
  {
    "url": "assets/js/27.2570964c.js",
    "revision": "9b79edf573332d210d2b01eeab901627"
  },
  {
    "url": "assets/js/28.b03c0cb6.js",
    "revision": "28c1526f2f2377f87351246f2386a846"
  },
  {
    "url": "assets/js/29.4b82dd6a.js",
    "revision": "a6728ab4159d636eeab681b92dcb0f4e"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.73fc2a84.js",
    "revision": "d3c1af030edb14558cd80576dbe45b24"
  },
  {
    "url": "assets/js/31.2701a365.js",
    "revision": "4c30a8819ae69d638c0572e10cfb21f6"
  },
  {
    "url": "assets/js/32.c8258cdb.js",
    "revision": "00c5255700591e100bab1bcca5b44243"
  },
  {
    "url": "assets/js/33.31b1c347.js",
    "revision": "622fce17e7c03af7560d5089c23119cb"
  },
  {
    "url": "assets/js/34.0c873a20.js",
    "revision": "ac26ee3271b066beba074a337130bebf"
  },
  {
    "url": "assets/js/35.b11410b8.js",
    "revision": "402f7b9dfcf86e9a015b5d369759d5ca"
  },
  {
    "url": "assets/js/36.492354ec.js",
    "revision": "488500b02b5cf6cb261d57cb9e87824f"
  },
  {
    "url": "assets/js/37.17de797c.js",
    "revision": "8f9dc905d04f9b52f5fa4c9e8c7ac110"
  },
  {
    "url": "assets/js/38.de439eaa.js",
    "revision": "94677bd8b4f8b50aefd9a72fb0629e5d"
  },
  {
    "url": "assets/js/39.0f443211.js",
    "revision": "0fbe5fb6f08166b2f52b21e955dcd50e"
  },
  {
    "url": "assets/js/4.bffd757c.js",
    "revision": "12df2dc667b68d00a29116818db0d5c0"
  },
  {
    "url": "assets/js/40.71bc09aa.js",
    "revision": "d52d6ff76d1af1ff04272145d4e3f77e"
  },
  {
    "url": "assets/js/41.4ffff6d6.js",
    "revision": "0390cda3216ea4219f20e4c507773952"
  },
  {
    "url": "assets/js/42.bbf6ce62.js",
    "revision": "c4e3c9cc2bd3e01ad938c08bd355ce09"
  },
  {
    "url": "assets/js/43.8a06bfc4.js",
    "revision": "35375908d7776ca194e47505ab638460"
  },
  {
    "url": "assets/js/5.201ae859.js",
    "revision": "91bef36cda4ee74da084e51fbe9ed450"
  },
  {
    "url": "assets/js/6.b6528d86.js",
    "revision": "7035c06bfe4094f434366175544097f4"
  },
  {
    "url": "assets/js/7.fe8130b7.js",
    "revision": "38b4ab739567f6da8809bf735ba0d039"
  },
  {
    "url": "assets/js/8.acbf0656.js",
    "revision": "a5d0956cafd5d800ffc6f89714fce71b"
  },
  {
    "url": "assets/js/9.e562c505.js",
    "revision": "d6a9de7ca896f33b3b8e40c59b7c61fb"
  },
  {
    "url": "assets/js/app.98d9c4a2.js",
    "revision": "6fa91c78e60d2a1e2b019cb4ca80aaf4"
  },
  {
    "url": "common/cli.html",
    "revision": "62be7961cfbe43adc755ca74ee78058a"
  },
  {
    "url": "common/code-review.html",
    "revision": "ee1d50557d0b22d11afaa16c12f51278"
  },
  {
    "url": "common/component.html",
    "revision": "9db1e0ec6bc15d36a1f5b0f4478800b1"
  },
  {
    "url": "common/directory.html",
    "revision": "45db76f2430f9a90e6d2387184756ad7"
  },
  {
    "url": "common/env.html",
    "revision": "3ad5d066ec59af53b17f5725533598aa"
  },
  {
    "url": "common/index.html",
    "revision": "3e0894043fb37d7312d842e0f05dc32f"
  },
  {
    "url": "common/locale.html",
    "revision": "5ac05f66bd4164ce15d34cb8b977933c"
  },
  {
    "url": "common/network.html",
    "revision": "f38ee817161356d32bd9be3f39f59714"
  },
  {
    "url": "common/optimize.html",
    "revision": "2b23a9ad250f2b211da56fbbd14ea9b0"
  },
  {
    "url": "common/permission.html",
    "revision": "624e1838208753c6afc84c32076a6a69"
  },
  {
    "url": "common/router.html",
    "revision": "fcaa1544daeb0eedd63f477c628eb002"
  },
  {
    "url": "common/skeleton.html",
    "revision": "f37b4c6a7fd971384a0a0e5d5e4f1a66"
  },
  {
    "url": "common/standard.html",
    "revision": "2ba05094d0349e8e165ea6c32564110b"
  },
  {
    "url": "common/style.html",
    "revision": "47c5a54a10188ee8262fb4fe9b7d4478"
  },
  {
    "url": "common/svg.html",
    "revision": "dab0469a7eb556b26023d92bb054f263"
  },
  {
    "url": "common/template.html",
    "revision": "7ed0edc355dc757646efc3a8d91685eb"
  },
  {
    "url": "common/tools.html",
    "revision": "18fb768a95922bc0dc43d7825012a1c4"
  },
  {
    "url": "common/version.html",
    "revision": "41d92fc5a4532400bd347baf8b7ab7bb"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "debug.png",
    "revision": "c19d5559d9dc3c1e93a81f546939bffb"
  },
  {
    "url": "emanage_dev.png",
    "revision": "800a3d5ebc0559de2187db9af4c08de2"
  },
  {
    "url": "emanage_en.png",
    "revision": "5ac89f26d237e8e858cca4cb0956f336"
  },
  {
    "url": "experience/hybrid.html",
    "revision": "405f141ad9db6929067f60c5ef885f53"
  },
  {
    "url": "experience/index.html",
    "revision": "1dac4b3e2cfb07ceec2bd983c6d1a359"
  },
  {
    "url": "experience/mobile.html",
    "revision": "27639988cbe665a9f78ec32e7ed8f8f9"
  },
  {
    "url": "experience/pc.html",
    "revision": "bc1105b4969d66b4517edf44815e198b"
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
    "revision": "b585cc282bba75812c55952329154917"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "lifemanage.png",
    "revision": "f467dc2a67326e848f026d6430973426"
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
    "revision": "c5dc9a54c88322860cb1d0c7158193bb"
  },
  {
    "url": "mobile/fit.html",
    "revision": "b876e875e4b5a1a9c7b64422c181fe87"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "ff3f97ba3301288f0c4d5f6ee36028fb"
  },
  {
    "url": "mobile/index.html",
    "revision": "77c79e2358285cd25888e1ad61572694"
  },
  {
    "url": "mobile/install.html",
    "revision": "cf5ae2c071423407d926276aa010d49a"
  },
  {
    "url": "mobile/modules.html",
    "revision": "9138f15a4a2bf55b56d2d2d20bafb8c1"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "7cfa7fdbf89aeda2a3b3bd46a2341bcb"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "c73ee57e1ae15941d1f746a622391684"
  },
  {
    "url": "PC/config.html",
    "revision": "72537b7c5699d33af5326b9eec0b19e7"
  },
  {
    "url": "PC/directives.html",
    "revision": "9478977c6ee055b0279cab66fac07dbd"
  },
  {
    "url": "PC/index.html",
    "revision": "03ba435c99d5e30f8b25e4f25dfd7e8f"
  },
  {
    "url": "PC/layout.html",
    "revision": "2539a4962fd60e29d22e22be4680e504"
  },
  {
    "url": "PC/plugin.html",
    "revision": "6bd14f80015eab228bc523c1656005f5"
  },
  {
    "url": "PC/process.html",
    "revision": "57e917f2c6dad6b5315b31e45f8a332b"
  },
  {
    "url": "serviceapp_pre.png",
    "revision": "ff22c58d1ef20bb0fb36a90eff0bcded"
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
    "revision": "b2f9ac3c7ba8830853123affb2368e33"
  },
  {
    "url": "wisdom_app.png",
    "revision": "e0cc33607c1f1c285ee878c9b66382a1"
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
