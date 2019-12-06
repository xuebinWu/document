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
    "revision": "5033ff57441d6fbf141d17b28429d411"
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
    "url": "assets/js/10.09cf1e6f.js",
    "revision": "ea7ce38510039cb7641f2c9ad8c9362e"
  },
  {
    "url": "assets/js/11.5024f95e.js",
    "revision": "08b6cb433e65926d1395f413143c8672"
  },
  {
    "url": "assets/js/12.e206d23c.js",
    "revision": "68423f60c8aee1a93c4cd0486ed4e92a"
  },
  {
    "url": "assets/js/13.5e7bc50b.js",
    "revision": "8320d29c2294125f0bab2ee4cd456018"
  },
  {
    "url": "assets/js/14.0b7f67d3.js",
    "revision": "8e390317a21389b23d551fa18232272e"
  },
  {
    "url": "assets/js/15.c821ee15.js",
    "revision": "697ddc8d5e809f2d04ebcf37ec5f5454"
  },
  {
    "url": "assets/js/16.0056dc0d.js",
    "revision": "4f7a5518a11422d8ffb6f2a011738eb0"
  },
  {
    "url": "assets/js/17.08abb620.js",
    "revision": "28c5298aa1d33fd621209b5b665d0aa5"
  },
  {
    "url": "assets/js/18.629779e5.js",
    "revision": "dacc96339aa0970761dbdd9cf512c8df"
  },
  {
    "url": "assets/js/19.2ab4a375.js",
    "revision": "23dae19bf226aef76b47eee5d524a948"
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
    "url": "assets/js/21.8b990e9e.js",
    "revision": "e476f79ba4924890f71db8d576be5c0c"
  },
  {
    "url": "assets/js/22.7217a53b.js",
    "revision": "e68115a4c192a36551cad88d3bd90196"
  },
  {
    "url": "assets/js/23.061f2ec2.js",
    "revision": "2fa7b0293a05af2ab284256d000885f2"
  },
  {
    "url": "assets/js/24.6eb02421.js",
    "revision": "9f6261120c17c8a97be0618c933f7cde"
  },
  {
    "url": "assets/js/25.5c16b7d8.js",
    "revision": "493ff39d310ad74f37b76902de863ad4"
  },
  {
    "url": "assets/js/26.76cba18d.js",
    "revision": "7c8c875adebf9179929bc6658518b6ee"
  },
  {
    "url": "assets/js/27.7ea6c38d.js",
    "revision": "0ee0c6c0c598301e3ad98d5c92391f0f"
  },
  {
    "url": "assets/js/28.79cf7a72.js",
    "revision": "eb5442564d363fc87f98bf86d016c22f"
  },
  {
    "url": "assets/js/29.ddf76f31.js",
    "revision": "52a559bd273bc5b01d8b0fdcefc643f6"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.d9cd09c9.js",
    "revision": "b032b789a82af525d58d100081cd1b49"
  },
  {
    "url": "assets/js/31.73e547a8.js",
    "revision": "43658dcc5b2eda162490e375b4997afa"
  },
  {
    "url": "assets/js/32.d359bab1.js",
    "revision": "224f0f1373f192ceb48e9ca840c11e68"
  },
  {
    "url": "assets/js/33.64dad00f.js",
    "revision": "189cbc6a71a920f6236fa449665b29da"
  },
  {
    "url": "assets/js/34.ea245a74.js",
    "revision": "6c135b671d9fcbc9fab3f6a5fd7fec8e"
  },
  {
    "url": "assets/js/35.d10ecb6e.js",
    "revision": "1b89a44a6299414d73665e50d08fc4ae"
  },
  {
    "url": "assets/js/36.1102cdb6.js",
    "revision": "2448398a8f7a860648af8683bef199fc"
  },
  {
    "url": "assets/js/37.63a2ed27.js",
    "revision": "c2c8503c2eed7f8ed2f67e57b2f33218"
  },
  {
    "url": "assets/js/38.425b84e6.js",
    "revision": "eeb2f4a23cf29348d3770abf0adeb4b8"
  },
  {
    "url": "assets/js/39.43f80a23.js",
    "revision": "2ee8c1a73c2caa3e6c1ff145c95ca832"
  },
  {
    "url": "assets/js/4.bffd757c.js",
    "revision": "12df2dc667b68d00a29116818db0d5c0"
  },
  {
    "url": "assets/js/40.cc13e7b8.js",
    "revision": "1b6d5f4d9f6d57dfd5976b70e3bcf137"
  },
  {
    "url": "assets/js/41.8d2ff3c3.js",
    "revision": "61ba87d985e114e38cb0590ca7a58657"
  },
  {
    "url": "assets/js/42.e03ccd49.js",
    "revision": "dd2fc4896b23d531ac876b67bc281643"
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
    "url": "assets/js/app.3e550f01.js",
    "revision": "162fd13604ead0fa14609e1bdfb03fdb"
  },
  {
    "url": "common/cli.html",
    "revision": "718942f670e6023a8dcb4f48c13b7571"
  },
  {
    "url": "common/code-review.html",
    "revision": "a1d6a253ad54aeaba50d2a9483fc4b87"
  },
  {
    "url": "common/component.html",
    "revision": "5a144be0b44384badc885f7f208e0258"
  },
  {
    "url": "common/directory.html",
    "revision": "afa19d8408a55e906bc98de4d977b1fe"
  },
  {
    "url": "common/env.html",
    "revision": "9f58754cda1c51c35eef13a3c5330b0e"
  },
  {
    "url": "common/index.html",
    "revision": "ed220f02be051ddd5170c2a3679b6269"
  },
  {
    "url": "common/locale.html",
    "revision": "f7b02c8479afe926bad3ae003196c4a9"
  },
  {
    "url": "common/network.html",
    "revision": "c19bd5ee1f320fdfe8a72295287d0ede"
  },
  {
    "url": "common/optimize.html",
    "revision": "14e8a85ffcadf8be9b4b04d08704712c"
  },
  {
    "url": "common/permission.html",
    "revision": "5ed8459c2af6ced485f745c17d35d912"
  },
  {
    "url": "common/router.html",
    "revision": "7a0d204e8566eb4611e1158df982ff58"
  },
  {
    "url": "common/skeleton.html",
    "revision": "21a18d2642b1de5324e5ece305563739"
  },
  {
    "url": "common/standard.html",
    "revision": "f72006a5b0630da23331c12aae9701f2"
  },
  {
    "url": "common/style.html",
    "revision": "118653b2908cf9c8157c8cbca2d90c0b"
  },
  {
    "url": "common/svg.html",
    "revision": "0eaa1701573adaf30d9c8d7049146952"
  },
  {
    "url": "common/template.html",
    "revision": "1d0a385f9591aa45ea5eae6086eddae5"
  },
  {
    "url": "common/tools.html",
    "revision": "153256ed08769a53ef17d502e8c1478b"
  },
  {
    "url": "common/version.html",
    "revision": "b7619e5241031b8f04401d78c74d6f40"
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
    "url": "emanage_pre.png",
    "revision": "a319d3daa2e3c47c9a6e1648d72c95b0"
  },
  {
    "url": "experience/hybrid.html",
    "revision": "979e85eb229d2d9fcecc680e761ebf82"
  },
  {
    "url": "experience/index.html",
    "revision": "6a6ee6ddcd71219b8b86aa67fdf73655"
  },
  {
    "url": "experience/mobile.html",
    "revision": "54587dcd01ffc35f90fd7bbad1a21b52"
  },
  {
    "url": "experience/pc.html",
    "revision": "40462e347fc21687abd2dfc66b64e587"
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
    "revision": "4bb90789a4c10ecb8b9784870a0c979d"
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
    "revision": "f95b7e1d18d7ad9058208fc1bb51b49e"
  },
  {
    "url": "mobile/fit.html",
    "revision": "cabf9653759059c77de0a6b55a39a443"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "2368217a141cc0cf9f29ec36956456d7"
  },
  {
    "url": "mobile/index.html",
    "revision": "61f6c932bac45595b706bff27f0abde7"
  },
  {
    "url": "mobile/install.html",
    "revision": "5d984efbcd67a0917978778b28da386c"
  },
  {
    "url": "mobile/modules.html",
    "revision": "157beeff899ac05bffdffc59083c377c"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "7d36a471a8a2285887ff322d03bb9904"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "3c82218d018aea1a2e16b88c931a6636"
  },
  {
    "url": "PC/config.html",
    "revision": "78c3feb5704029dc1a0b102f7aefaebf"
  },
  {
    "url": "PC/directives.html",
    "revision": "b297e879f344d8691c9b4720dcc983c8"
  },
  {
    "url": "PC/index.html",
    "revision": "e28dd2fb9d3aa62209da6b8e116aa00a"
  },
  {
    "url": "PC/layout.html",
    "revision": "f48b323f522617f94518ac3494b2408b"
  },
  {
    "url": "PC/plugin.html",
    "revision": "5cbad0f495bc7a8285b157ab3889e4f8"
  },
  {
    "url": "PC/process.html",
    "revision": "20e5c77e523166cd9e0bf32381d3916c"
  },
  {
    "url": "serviceapp_dev.png",
    "revision": "a4f88c724d0176c405392e5b29780b07"
  },
  {
    "url": "serviceapp_pre.png",
    "revision": "7238ef4477d08fab53eb6dd43f8587c4"
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
