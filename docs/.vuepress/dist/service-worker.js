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
    "revision": "7df6db63f96ad620ab6449c7624b1db6"
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
    "url": "assets/js/11.9da62fb3.js",
    "revision": "8d8e15e5bf9238ea6f256f799128843a"
  },
  {
    "url": "assets/js/12.d4b82a80.js",
    "revision": "65ce0357084d71ac2b19ba49118d58bf"
  },
  {
    "url": "assets/js/13.53a66034.js",
    "revision": "e7fbd393009b8e5d7db2d8d338522420"
  },
  {
    "url": "assets/js/14.1c7aeaa2.js",
    "revision": "91ae24dc35c042b04d4c4134cd338c70"
  },
  {
    "url": "assets/js/15.deffbf7c.js",
    "revision": "e51a871ec66385546a4128cd214a9685"
  },
  {
    "url": "assets/js/16.9be30e89.js",
    "revision": "a0a8804ef3c2355366d084291f7becd0"
  },
  {
    "url": "assets/js/17.f668513e.js",
    "revision": "0a564ccea7a2baa3cddacb0efd6262ac"
  },
  {
    "url": "assets/js/18.b6d44c90.js",
    "revision": "0a86efb6363acbaa4ef985791b84e084"
  },
  {
    "url": "assets/js/19.91655849.js",
    "revision": "5b1594ed06f3d408cf4d77cab17322b7"
  },
  {
    "url": "assets/js/2.2018ae8e.js",
    "revision": "3db1cdec6ac4c909964081dd9d1c0bd5"
  },
  {
    "url": "assets/js/20.74730e10.js",
    "revision": "91dd29981cd810970651af9306d56b10"
  },
  {
    "url": "assets/js/21.f87605d0.js",
    "revision": "4918be4d6819ec76dd87b454a19b9e5c"
  },
  {
    "url": "assets/js/22.659f9eac.js",
    "revision": "9346c23ccb9ca23aee6cd7d74f96509f"
  },
  {
    "url": "assets/js/23.fe4128c0.js",
    "revision": "86cb7bbad1a508970e72748efc7c28e9"
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
    "url": "assets/js/26.23b141b0.js",
    "revision": "b3526bbce1ab617c8a593b879c38504e"
  },
  {
    "url": "assets/js/27.6b9545a6.js",
    "revision": "c8b27f612fd2ef6b18e4817f1c6b26c5"
  },
  {
    "url": "assets/js/28.7c821531.js",
    "revision": "2638b0224fbebb1f064cb82fbf32742a"
  },
  {
    "url": "assets/js/29.f38167a4.js",
    "revision": "60faadee232910a9bade069d458c9913"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.ef642bbb.js",
    "revision": "87503fbd44e0c60d2735108818be6ad2"
  },
  {
    "url": "assets/js/31.f9ad3afc.js",
    "revision": "3b1568d728254ff1fde22bd232489667"
  },
  {
    "url": "assets/js/32.352675d1.js",
    "revision": "501736404c1964198ea14a5049cd28c5"
  },
  {
    "url": "assets/js/33.b5cc4acd.js",
    "revision": "87608554d13422db852843acd40b7b4a"
  },
  {
    "url": "assets/js/34.7e07877b.js",
    "revision": "dfd4c181c64af93873f530f4de17d762"
  },
  {
    "url": "assets/js/35.479bd5a2.js",
    "revision": "c33dff0f506b211b949833a5a49a1316"
  },
  {
    "url": "assets/js/36.6c2a196c.js",
    "revision": "64857a472ff95ddf96f157b4b3031b24"
  },
  {
    "url": "assets/js/37.6b219bca.js",
    "revision": "944947fe59dfad7109457f45d750c460"
  },
  {
    "url": "assets/js/38.b6dbbabd.js",
    "revision": "6490b733963538cad74b8f89a140b298"
  },
  {
    "url": "assets/js/39.a2b86fe9.js",
    "revision": "030529b30d0254f8dcae7817de82a5f5"
  },
  {
    "url": "assets/js/4.03a4bf0c.js",
    "revision": "5c93b9ba8ac1eaa586dc7c75de6ae572"
  },
  {
    "url": "assets/js/40.0131b389.js",
    "revision": "a80d19c47b058ac87cc70cd21c570ff3"
  },
  {
    "url": "assets/js/41.be818f69.js",
    "revision": "f1befbae63fca53156d4707edde2fbdc"
  },
  {
    "url": "assets/js/42.32a7497a.js",
    "revision": "1ac5abc1794e350da28b76179f95103a"
  },
  {
    "url": "assets/js/43.69285fa8.js",
    "revision": "4b6074cfcb235495d2dac59903174362"
  },
  {
    "url": "assets/js/44.171aa188.js",
    "revision": "78777d307e7a1d2fe9db8b49b99b3246"
  },
  {
    "url": "assets/js/45.cd8de480.js",
    "revision": "e08ef14829bee6974b2b6956bf49cb05"
  },
  {
    "url": "assets/js/46.165480cb.js",
    "revision": "73e4c1b461596af52e29b721632646d8"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.da57cff5.js",
    "revision": "311f0e15c006f09e36746a67119a5d5c"
  },
  {
    "url": "assets/js/7.dfc9cb91.js",
    "revision": "f22b10fb2d992db0ea3b0acd5d090600"
  },
  {
    "url": "assets/js/8.9e7f22f4.js",
    "revision": "b33a2441ee641617cdf550c7e60b09f4"
  },
  {
    "url": "assets/js/9.a670404d.js",
    "revision": "fe2559a2d82261ee2dfc5f5b6187ed40"
  },
  {
    "url": "assets/js/app.60444894.js",
    "revision": "eaed1f9e83efb86a0cd6a2ba71c2e83b"
  },
  {
    "url": "common/cli.html",
    "revision": "c5d030502809ed8aeccbf3fdd0bf9b9e"
  },
  {
    "url": "common/code-review.html",
    "revision": "f282ec02ab90453917edea94fa383d4b"
  },
  {
    "url": "common/component.html",
    "revision": "0d7faf7184704ec3462cc0952e5af3aa"
  },
  {
    "url": "common/directory.html",
    "revision": "284a2b6c97d21ab31be1ca55aab8684a"
  },
  {
    "url": "common/env.html",
    "revision": "69de30b80a29cc2b68bc90de218454b9"
  },
  {
    "url": "common/index.html",
    "revision": "2ab2c58c7320ec451baec7cdfd92b212"
  },
  {
    "url": "common/locale.html",
    "revision": "5c85177c84a2f296851ba33a3332579d"
  },
  {
    "url": "common/network.html",
    "revision": "9b79d6b06d18ff10a90215a586712972"
  },
  {
    "url": "common/optimize.html",
    "revision": "4f7da3e50ddccab10b9ec248033682b6"
  },
  {
    "url": "common/permission.html",
    "revision": "855ae95a5b5958f64c89db9e384ca0ee"
  },
  {
    "url": "common/router.html",
    "revision": "2d2b2c2bcd14e148b2fdc86e00555391"
  },
  {
    "url": "common/skeleton.html",
    "revision": "cdc7f32e7d68a8bca7c2cec6e281b179"
  },
  {
    "url": "common/standard.html",
    "revision": "c5e1213726d917e4d7ff9f67311af15e"
  },
  {
    "url": "common/style.html",
    "revision": "6f8affdb3726618b74cbb0554e53cd79"
  },
  {
    "url": "common/svg.html",
    "revision": "7e05082e7e2516e0e2361b2026a8133d"
  },
  {
    "url": "common/template.html",
    "revision": "5e7acc3cdf6a2a44e8429ba02f528ad1"
  },
  {
    "url": "common/themeReplace.html",
    "revision": "233a172fed6744d195261d5a7f9d9084"
  },
  {
    "url": "common/tools.html",
    "revision": "afb9e0e0263ecd0afc88d636d4f084cb"
  },
  {
    "url": "common/version.html",
    "revision": "79a0216ae359b78d2b3b8e679e8a392b"
  },
  {
    "url": "common/vue-plugin.html",
    "revision": "62ea0f081bd1fbc973fc276e621b8b86"
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
    "revision": "dd19e1b6559c6a27cad3c303f7cc9352"
  },
  {
    "url": "experience/index.html",
    "revision": "fc3b7376c0a75a803ed5915cd9f3f81e"
  },
  {
    "url": "experience/mobile.html",
    "revision": "b351a5bb4339fec7525baac3ee722be3"
  },
  {
    "url": "experience/pc.html",
    "revision": "2df1fefdf9951ce97d784d3b023015b4"
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
    "revision": "8fe629631e0d13bde1f5d08dfa225be1"
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
    "url": "miniprogrammer/index.html",
    "revision": "812f3212b888c04f7a489163cb90c7f7"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "150dd92be6d32b350c412d3ec56efe61"
  },
  {
    "url": "mobile/fit.html",
    "revision": "0188569e2e7764e2c213f6349b615554"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "1e3d5c35717bc605441106d2919dfd67"
  },
  {
    "url": "mobile/index.html",
    "revision": "ad215bf64f0d53a17227fab2fccb93f9"
  },
  {
    "url": "mobile/install.html",
    "revision": "35ef9d4ae4f5f35ef104b3571d3b42ab"
  },
  {
    "url": "mobile/modules.html",
    "revision": "1b5ed518e40add6a4478e094e0206083"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "4ca506a2b6f9ae8301798cfbac72409a"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "e5a9d6d81a666cb67631bc410ad25ae0"
  },
  {
    "url": "PC/config.html",
    "revision": "309a0c59c266c40c1f7a2927e346b9dc"
  },
  {
    "url": "PC/directives.html",
    "revision": "043d88376b483e8b0ba091657319f6b4"
  },
  {
    "url": "PC/index.html",
    "revision": "cc7e47e864b990c5cc154edaec52b293"
  },
  {
    "url": "PC/layout.html",
    "revision": "42d4a7c0564943aa598ffe76cb7fc5a4"
  },
  {
    "url": "PC/plugin.html",
    "revision": "06fa8a90ae88af19ad6936c1d6f65025"
  },
  {
    "url": "PC/process.html",
    "revision": "a9dcfda6232a1bc5b1d9501789345ed0"
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
