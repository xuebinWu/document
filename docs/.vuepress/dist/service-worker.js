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
    "revision": "16ca1bbf5025f3a412a86fad800258c8"
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
    "url": "assets/js/10.85c8cfee.js",
    "revision": "5b6cbc0c4d837a74dbb87fc601aa39f6"
  },
  {
    "url": "assets/js/11.df3d89e7.js",
    "revision": "77bcdd36a72f01eec115d6290ceee802"
  },
  {
    "url": "assets/js/12.f21fe841.js",
    "revision": "0e43de2eb086909b4ac4babc9440a407"
  },
  {
    "url": "assets/js/13.05eaefaa.js",
    "revision": "5880ebae44fa71b0eaa969613b51453c"
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
    "url": "assets/js/24.45e736f0.js",
    "revision": "863eb4f8e2341b20df36263a20fa90d0"
  },
  {
    "url": "assets/js/25.0f6d64e5.js",
    "revision": "09d8fa68f4fc71b77d0aeeb6ec32373a"
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
    "url": "assets/js/28.bc81c5c1.js",
    "revision": "2589482576efafe625a70a70fd39b44b"
  },
  {
    "url": "assets/js/29.f4814ca4.js",
    "revision": "57fe1237f37cd27d9cc486fbf97ff097"
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
    "url": "assets/js/31.90d0e562.js",
    "revision": "bf9c0a7b155ed9abdb2cba85fe5750f1"
  },
  {
    "url": "assets/js/32.c6114bd8.js",
    "revision": "9620ba6151fc44d2056e81168e5f8bac"
  },
  {
    "url": "assets/js/33.2429ecef.js",
    "revision": "6568d9ad806df0d6ca266282673a093e"
  },
  {
    "url": "assets/js/34.7e07877b.js",
    "revision": "dfd4c181c64af93873f530f4de17d762"
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
    "url": "assets/js/37.6b219bca.js",
    "revision": "944947fe59dfad7109457f45d750c460"
  },
  {
    "url": "assets/js/38.47bc59cc.js",
    "revision": "813da5eaa2b9d795a7e7927bf9220779"
  },
  {
    "url": "assets/js/39.a5bf96c9.js",
    "revision": "974a5d83b2ce807251e10e5b1fc316b6"
  },
  {
    "url": "assets/js/4.03a4bf0c.js",
    "revision": "5c93b9ba8ac1eaa586dc7c75de6ae572"
  },
  {
    "url": "assets/js/40.03965342.js",
    "revision": "d68f958472d2206a46c07e2877c241fe"
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
    "url": "assets/js/45.ea4edf82.js",
    "revision": "b8d52484d968bd1d7531c754ab27c7d9"
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
    "url": "assets/js/6.c07a3363.js",
    "revision": "57cec3fcbbdac4b2e3b3887af3c98fa9"
  },
  {
    "url": "assets/js/7.09535c02.js",
    "revision": "da98e23a18d39ffddb21b179e4f8cb91"
  },
  {
    "url": "assets/js/8.4bb49b61.js",
    "revision": "ed0ec900950a1e106df1d25e9f40d053"
  },
  {
    "url": "assets/js/9.92d901e6.js",
    "revision": "5eaad40e1a94eeb7dbf52e2df6224afa"
  },
  {
    "url": "assets/js/app.43131648.js",
    "revision": "af1b988d363c230d2d998002d65e7199"
  },
  {
    "url": "common/cli.html",
    "revision": "a3c2777afa3d6e877dd056b6f9d7f1fe"
  },
  {
    "url": "common/code-review.html",
    "revision": "ccfd9c7d412b705cfb5eba66bb27cdce"
  },
  {
    "url": "common/component.html",
    "revision": "c791af8726b39bd700d540d8acb36d1d"
  },
  {
    "url": "common/directory.html",
    "revision": "c640ba7c43d0d04c2ae59c741460160e"
  },
  {
    "url": "common/env.html",
    "revision": "7e19280e61539cf1204fee53000bd110"
  },
  {
    "url": "common/index.html",
    "revision": "a74f2c5e66692bd4b822a38ffb36870b"
  },
  {
    "url": "common/locale.html",
    "revision": "17ba4208656003f0b4674de738f77f47"
  },
  {
    "url": "common/network.html",
    "revision": "ff22e8cfd1d8f3da3f4e817bc2cdfa94"
  },
  {
    "url": "common/optimize.html",
    "revision": "fe2ddf39c9c618f869a60d389d4646a6"
  },
  {
    "url": "common/permission.html",
    "revision": "887fabd99ebf821a11ebf2ab0e30c372"
  },
  {
    "url": "common/router.html",
    "revision": "2864e8924f5638257b0a847dc1789faa"
  },
  {
    "url": "common/skeleton.html",
    "revision": "3be590ee64385174d4e3d063148ae292"
  },
  {
    "url": "common/standard.html",
    "revision": "a264c64e8ed5d6a10c8bc82d3406415f"
  },
  {
    "url": "common/style.html",
    "revision": "cc35127f65f9b3e75b2753e74381c8ff"
  },
  {
    "url": "common/svg.html",
    "revision": "3fe2291db737494e5f787685eda580b7"
  },
  {
    "url": "common/template.html",
    "revision": "2765e374f1131fcae47bbf76c6a0fadc"
  },
  {
    "url": "common/themeReplace.html",
    "revision": "37edde5ae20b243f65c657db6c853226"
  },
  {
    "url": "common/tools.html",
    "revision": "652aff4afb5184ec198e5ee220556437"
  },
  {
    "url": "common/version.html",
    "revision": "bad851842a5c60e77064477e7ceb158f"
  },
  {
    "url": "common/vue-plugin.html",
    "revision": "5dd4108f476f06b968b89db785315846"
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
    "revision": "abd5066e9a6f3ca4944918c524e3afd3"
  },
  {
    "url": "experience/index.html",
    "revision": "f64622d478c588cdc0d1044899e89f5f"
  },
  {
    "url": "experience/mobile.html",
    "revision": "89bea0fc3be0efb5dfbed595859a2980"
  },
  {
    "url": "experience/pc.html",
    "revision": "ae20c0ea58348e4be8236b5cf1c9e910"
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
    "revision": "bb52511dfcef66631c97da64200a1a72"
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
    "revision": "d566402f2338107f61004adae0842257"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "b829f572893c34e75edd73e649b66ab0"
  },
  {
    "url": "mobile/fit.html",
    "revision": "4073a946eb2f1b8a998bf2401903174e"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "7584cf69ef27b364b87d77101a5aee76"
  },
  {
    "url": "mobile/index.html",
    "revision": "ba25bc7306ebef63c15272458f8eb813"
  },
  {
    "url": "mobile/install.html",
    "revision": "f383e52ae601cafa8b2dadab5ed933b9"
  },
  {
    "url": "mobile/modules.html",
    "revision": "ee2336ffc6081c30cf82b63bdc88bd67"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "5e182349aab4fa9dd54fa2435e5f4690"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "83c84af51d22a70eb93842192d7ff5f0"
  },
  {
    "url": "PC/config.html",
    "revision": "95804f5c97b72df816dc494cbe9661a2"
  },
  {
    "url": "PC/directives.html",
    "revision": "bc9b050e9938c09add2984aa75610507"
  },
  {
    "url": "PC/index.html",
    "revision": "76d386c912ee2117e8deea62869bfd2b"
  },
  {
    "url": "PC/layout.html",
    "revision": "a04662152ffa422f4d6bbcd395f7eae9"
  },
  {
    "url": "PC/plugin.html",
    "revision": "6f5bb16ca810cbd3f8dafee2b44794fa"
  },
  {
    "url": "PC/process.html",
    "revision": "61a4fe62be2faee7d28a9b717352c621"
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
