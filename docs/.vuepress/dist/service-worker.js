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
    "revision": "bb60a2dd2903e05914aaffdf047b2746"
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
    "url": "assets/js/10.b0a98566.js",
    "revision": "58caf8784ef7f28d3efce05283b7e268"
  },
  {
    "url": "assets/js/11.df3d89e7.js",
    "revision": "77bcdd36a72f01eec115d6290ceee802"
  },
  {
    "url": "assets/js/12.9e42a164.js",
    "revision": "de56cc972bb8730416502da9aad0c60f"
  },
  {
    "url": "assets/js/13.53a66034.js",
    "revision": "e7fbd393009b8e5d7db2d8d338522420"
  },
  {
    "url": "assets/js/14.a76268f7.js",
    "revision": "ab0370939541ce6f9b1152aa243c0939"
  },
  {
    "url": "assets/js/15.deffbf7c.js",
    "revision": "e51a871ec66385546a4128cd214a9685"
  },
  {
    "url": "assets/js/16.a1a42fc7.js",
    "revision": "2bf7c4a203f86ac8141ad791194d7410"
  },
  {
    "url": "assets/js/17.7b5de9fd.js",
    "revision": "bb2ab798d4d37170d15ae77afc4899d9"
  },
  {
    "url": "assets/js/18.a18ce881.js",
    "revision": "a6d7d01eb222c3b9003bd038c80b1ff9"
  },
  {
    "url": "assets/js/19.b464d71b.js",
    "revision": "4e3377462cfdbc63180120fdfc248753"
  },
  {
    "url": "assets/js/2.2018ae8e.js",
    "revision": "3db1cdec6ac4c909964081dd9d1c0bd5"
  },
  {
    "url": "assets/js/20.ce9938af.js",
    "revision": "2a23170aac15fb396d60bedc6a0db431"
  },
  {
    "url": "assets/js/21.0c8eb455.js",
    "revision": "fc1d39d800f0092229efa724bfb2a07c"
  },
  {
    "url": "assets/js/22.993c43a1.js",
    "revision": "197d61cd6b481ab94aff72bc1e931348"
  },
  {
    "url": "assets/js/23.dede317a.js",
    "revision": "7b1326e96ea4f90197f49ee32c22473f"
  },
  {
    "url": "assets/js/24.2723aba7.js",
    "revision": "1124ba5c02c0d0d4a91163235034ab15"
  },
  {
    "url": "assets/js/25.24695020.js",
    "revision": "73b69d24475a05d6c7f70214f7deefdf"
  },
  {
    "url": "assets/js/26.138f6755.js",
    "revision": "0c68667d44718f2e722902dfab15ef05"
  },
  {
    "url": "assets/js/27.98a5700f.js",
    "revision": "ce60bb1f3a32431081f3e6614a7f333c"
  },
  {
    "url": "assets/js/28.7c821531.js",
    "revision": "2638b0224fbebb1f064cb82fbf32742a"
  },
  {
    "url": "assets/js/29.c65edf8c.js",
    "revision": "2f729ba8f23d9c82fadacecd49e222a6"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.f3033751.js",
    "revision": "67779f98b1c6fef16855a8a1bf29aa08"
  },
  {
    "url": "assets/js/31.3465047e.js",
    "revision": "cbe02e8c54aa4a064325c577490f3e20"
  },
  {
    "url": "assets/js/32.352675d1.js",
    "revision": "501736404c1964198ea14a5049cd28c5"
  },
  {
    "url": "assets/js/33.2429ecef.js",
    "revision": "6568d9ad806df0d6ca266282673a093e"
  },
  {
    "url": "assets/js/34.f85d2a32.js",
    "revision": "97c416f072f8f7dfdff4fcac35bac605"
  },
  {
    "url": "assets/js/35.4a52f4c9.js",
    "revision": "47ea1dbd8fc5c2c4053ae34212606637"
  },
  {
    "url": "assets/js/36.b1e8d927.js",
    "revision": "98f31dc74ebd34a81ed1c29e1c06a558"
  },
  {
    "url": "assets/js/37.b0a1eb72.js",
    "revision": "944947fe59dfad7109457f45d750c460"
  },
  {
    "url": "assets/js/38.cecb8f76.js",
    "revision": "91c19f7ee9ff24699e9548cf99d2cdc2"
  },
  {
    "url": "assets/js/39.cdbc2a03.js",
    "revision": "228c59dbc6009f268fe5111d5edf081c"
  },
  {
    "url": "assets/js/4.aff1b213.js",
    "revision": "fc05ad842b69e1d67318703b760eca85"
  },
  {
    "url": "assets/js/40.27a74981.js",
    "revision": "d725b62519b983eb7c2016b2917d05b5"
  },
  {
    "url": "assets/js/41.6f1035d7.js",
    "revision": "26c806dc789f288d2eda599daa8724ea"
  },
  {
    "url": "assets/js/42.cc542e79.js",
    "revision": "5e40d0c80e3e4cceb1c77d5351540777"
  },
  {
    "url": "assets/js/43.11c5cfa7.js",
    "revision": "d30cb8d3c4889808a783d6e711fcdc5d"
  },
  {
    "url": "assets/js/44.428bf4eb.js",
    "revision": "69f5a4e4364fd4426c8e2d449daa928e"
  },
  {
    "url": "assets/js/45.41515835.js",
    "revision": "f1c500ccfb173206b0f67a12d7a8c473"
  },
  {
    "url": "assets/js/46.324f3561.js",
    "revision": "f31124fe584bf7eceba32c35a84f3d98"
  },
  {
    "url": "assets/js/47.8669f02d.js",
    "revision": "5aab39110df538ce6cf6a7816766de57"
  },
  {
    "url": "assets/js/48.a87f9b5e.js",
    "revision": "9782531c6a13e0b22bd4d0f3a507c171"
  },
  {
    "url": "assets/js/49.dba8f1db.js",
    "revision": "3abd23a10606f791717185ebe9257f1e"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.631cab59.js",
    "revision": "327415bc9367e077edadc7bcb0645858"
  },
  {
    "url": "assets/js/7.6a1cdb60.js",
    "revision": "4dd57a5c8e11eaab36bf2b7c6505824f"
  },
  {
    "url": "assets/js/8.be64825b.js",
    "revision": "f5e6b64c2d120690efdd60a5b75dad15"
  },
  {
    "url": "assets/js/9.608d4275.js",
    "revision": "96205eada677ea782478e0f731931bd7"
  },
  {
    "url": "assets/js/app.897749ec.js",
    "revision": "99f1ea316de99854ef1f041ce290f937"
  },
  {
    "url": "common/cli.html",
    "revision": "d5dc93bd48a8495a3997064f6274c4f3"
  },
  {
    "url": "common/code-review.html",
    "revision": "3a0ce25453da9dee28192c0463fa51d1"
  },
  {
    "url": "common/component.html",
    "revision": "4898227848df6a9fc3cd2293ae54cd29"
  },
  {
    "url": "common/directory.html",
    "revision": "f0d5370be97e1ed365cce30b5bd1ac75"
  },
  {
    "url": "common/env.html",
    "revision": "c7a6a51ccd946dcbc0214a7daf4b0c28"
  },
  {
    "url": "common/index.html",
    "revision": "408f55986e669f38f882b3a43f1d6a0b"
  },
  {
    "url": "common/locale.html",
    "revision": "bd0838b293a292486095242f2051d1fc"
  },
  {
    "url": "common/network.html",
    "revision": "ae59c25c5ea9e40c7965857cdd57205e"
  },
  {
    "url": "common/optimize.html",
    "revision": "096c9246d773d43ed9f3926d59425fc1"
  },
  {
    "url": "common/permission.html",
    "revision": "8a1ee3420a3e6b474872d39a910a10dd"
  },
  {
    "url": "common/router.html",
    "revision": "60ddcaf4501849984e8dacc91ee29400"
  },
  {
    "url": "common/skeleton.html",
    "revision": "ca9ab38b97600f2975046a8baa6e90a3"
  },
  {
    "url": "common/standard.html",
    "revision": "7e8f64472458284ea21a662a985c6d1b"
  },
  {
    "url": "common/style.html",
    "revision": "54ee686973bc74b86b51c845cbee5229"
  },
  {
    "url": "common/svg.html",
    "revision": "d8a9035c59053bafe8f321241709627e"
  },
  {
    "url": "common/template.html",
    "revision": "5598c870f8ed51633e168c311ce17d4b"
  },
  {
    "url": "common/themeReplace.html",
    "revision": "452198e18f60c8c47a5b2c382702af7f"
  },
  {
    "url": "common/tools.html",
    "revision": "fb4f8fdf86bf6cdde2af286c3fd50a6c"
  },
  {
    "url": "common/version.html",
    "revision": "05e2c14743fd40639203df46e8b90ac2"
  },
  {
    "url": "common/vue-plugin.html",
    "revision": "0e9f4b61f9b4a82b02b94152f435cef7"
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
    "revision": "3eda246f8b6f5e5d41b146e4e900422d"
  },
  {
    "url": "experience/index.html",
    "revision": "e0546c522210b4e4cc4921a438b8deca"
  },
  {
    "url": "experience/mobile.html",
    "revision": "9ff4112e21b0549274e008ad9a122a42"
  },
  {
    "url": "experience/pc.html",
    "revision": "5a5e9006d51b9a454aa7416061b1c69d"
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
    "revision": "ec2f1701444c0d3fee28abbaef4f67b1"
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
    "url": "miniprogramme/components.html",
    "revision": "4a2b760760e5800a79deb49d19a99639"
  },
  {
    "url": "miniprogramme/constructor.html",
    "revision": "be96d6b44b5145a5197dcd7949247e77"
  },
  {
    "url": "miniprogramme/index.html",
    "revision": "2b3d7d196415dd8c74c8f7c48ad8328a"
  },
  {
    "url": "miniprogramme/request.html",
    "revision": "6adffb4cf531f7c057c514f4f98647f5"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "15f898ebb9f5365f034e7924a3957f87"
  },
  {
    "url": "mobile/fit.html",
    "revision": "ba48faf3adbf2282f1b06d731c690226"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "05bba59dfbc54a5bf2261eb60e168b8a"
  },
  {
    "url": "mobile/index.html",
    "revision": "8996f327ac74cbd07a5be358a8875fce"
  },
  {
    "url": "mobile/install.html",
    "revision": "9549db4c4838290ce8397412b3dbf365"
  },
  {
    "url": "mobile/modules.html",
    "revision": "ea74f060ef759085eea031e2dd47c346"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "4d961f7ba2d202005f09c9328a035248"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "caf06d0460259e0b62af94a537e0f447"
  },
  {
    "url": "PC/config.html",
    "revision": "dde16b1d9888ee84549c42a70682acee"
  },
  {
    "url": "PC/directives.html",
    "revision": "9f08d7443c6be4fe3533b2cccc7edc24"
  },
  {
    "url": "PC/index.html",
    "revision": "cb3cff426377f9425694c070beac2557"
  },
  {
    "url": "PC/layout.html",
    "revision": "0aab31e5e543641d0e10dfa8b09c5bff"
  },
  {
    "url": "PC/plugin.html",
    "revision": "192354432fc73db3831b9543f1b31c89"
  },
  {
    "url": "PC/process.html",
    "revision": "707a4d8e420f7453a51579e28e39e4b7"
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
