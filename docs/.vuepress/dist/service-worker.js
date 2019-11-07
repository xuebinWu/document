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
    "revision": "27c528c18c95bf69fe778e6e8b548f4b"
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
    "url": "assets/js/10.a52244dd.js",
    "revision": "2741941dc271bda9f06d44bc2f7c14e9"
  },
  {
    "url": "assets/js/11.820c31b7.js",
    "revision": "444c20459511a826859a66d877e13b93"
  },
  {
    "url": "assets/js/12.01dd2dee.js",
    "revision": "dd440ceaefab3c091d5c3c4a5a824cf3"
  },
  {
    "url": "assets/js/13.baa5f8e0.js",
    "revision": "ce6ee2ce46114f40663a1c829e4a6981"
  },
  {
    "url": "assets/js/14.590a1728.js",
    "revision": "9263f50a0f6e66aa6e0621cf4891b477"
  },
  {
    "url": "assets/js/15.b26e035c.js",
    "revision": "673606f9bf0a8fa58e3b8b670349af10"
  },
  {
    "url": "assets/js/16.b50f0f54.js",
    "revision": "2ec95e7f08f93b77aa467c75e2bd9f7a"
  },
  {
    "url": "assets/js/17.e7670c28.js",
    "revision": "ac16db7706c0222dc321a6c849186248"
  },
  {
    "url": "assets/js/18.3ff74b18.js",
    "revision": "74f0e84594fdc64e6dd29e34c44a8670"
  },
  {
    "url": "assets/js/19.5af53604.js",
    "revision": "932cba403dfade54a903612ea5d6decc"
  },
  {
    "url": "assets/js/2.9d4046af.js",
    "revision": "27d035066564a24f76330c141bc1111d"
  },
  {
    "url": "assets/js/20.7457e0d3.js",
    "revision": "57ac2b7d4f15e6246f7fb1398a673687"
  },
  {
    "url": "assets/js/21.c45cae53.js",
    "revision": "90d622a22064f75aa94fbbc1c473a498"
  },
  {
    "url": "assets/js/22.2c699991.js",
    "revision": "028c5183e137f4a13e2c8aa7f1eae17b"
  },
  {
    "url": "assets/js/23.b63df870.js",
    "revision": "9c1c95903e9dfb98778c9a927ddb8528"
  },
  {
    "url": "assets/js/24.e9936af3.js",
    "revision": "2bc36e5567a31ef2cf11b41808fd69bc"
  },
  {
    "url": "assets/js/25.4ce60a82.js",
    "revision": "ed48c9dde93404b3e2d691db92a078b3"
  },
  {
    "url": "assets/js/26.524cee97.js",
    "revision": "ecaccfa43040797dabb50dfb80692289"
  },
  {
    "url": "assets/js/27.7d66c513.js",
    "revision": "a36aa959a1b671a6a76bc2b23e2d1677"
  },
  {
    "url": "assets/js/28.c58f4d2a.js",
    "revision": "0e8176e7e502029b4c14dd29182e2764"
  },
  {
    "url": "assets/js/29.d028ed45.js",
    "revision": "1d881a682d1555a2dcb49846d37a3ad4"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.71e02b15.js",
    "revision": "53f5844ec542c64201babfb5edfb0dc3"
  },
  {
    "url": "assets/js/31.811632cf.js",
    "revision": "dc85e22f618fcd4a8aa0bf3dc6f1896f"
  },
  {
    "url": "assets/js/32.1723775e.js",
    "revision": "f01aeac24ed63ec993b0038133a71f8e"
  },
  {
    "url": "assets/js/33.9fd41c51.js",
    "revision": "e560e705ea69d5e113e2a035ad9c9c59"
  },
  {
    "url": "assets/js/34.aa2c9502.js",
    "revision": "4605b2f21def197bb842854807c4ab33"
  },
  {
    "url": "assets/js/35.c4901fe8.js",
    "revision": "17df9839fa228850e84d3bd083e32048"
  },
  {
    "url": "assets/js/36.cc439f3d.js",
    "revision": "893775ccc7109c9d6fdf13309d79b104"
  },
  {
    "url": "assets/js/37.383a5743.js",
    "revision": "c8cb9ea6aeb1a028cd3d59557beae3e7"
  },
  {
    "url": "assets/js/38.3f9e1af6.js",
    "revision": "344c3ebf035910ccce6766c8e44175a6"
  },
  {
    "url": "assets/js/39.874033fd.js",
    "revision": "0e00ea8ae530f7afcfe626b3714e017e"
  },
  {
    "url": "assets/js/4.c45ec80c.js",
    "revision": "6810fc4d93b6a03258e0736afff263d8"
  },
  {
    "url": "assets/js/40.5f40c228.js",
    "revision": "ee2d2a0bc56f0cea834c0fb81dbb2632"
  },
  {
    "url": "assets/js/41.857240ce.js",
    "revision": "239f298b824b2204eb75a2a82fafafbb"
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
    "url": "assets/js/8.b0fe09b1.js",
    "revision": "b3a82b4ecf2e146fe9e4ea3f2c0b8ba5"
  },
  {
    "url": "assets/js/9.2d918282.js",
    "revision": "13415bc53f6ba05b4e9020acf97de3d7"
  },
  {
    "url": "assets/js/app.f0800824.js",
    "revision": "64c458fa4b4b2bae3fe7529fc7ca6fa3"
  },
  {
    "url": "common/cli.html",
    "revision": "46c94079949ee34964f530a4a8f57fcd"
  },
  {
    "url": "common/code-review.html",
    "revision": "8b7315ed829c1cff8c8e67c6171188a9"
  },
  {
    "url": "common/component.html",
    "revision": "57a4ed1e8e41f12746d536da89a49d3e"
  },
  {
    "url": "common/directory.html",
    "revision": "0c18ab0bd9c3219dbc354246ccc4518b"
  },
  {
    "url": "common/env.html",
    "revision": "22fe6a8cd7e2b9227443c5cf678ac016"
  },
  {
    "url": "common/index.html",
    "revision": "73b071587b6e7eeb9fde7b30d9ba994a"
  },
  {
    "url": "common/locale.html",
    "revision": "53a2f183070eff57bab29dfcba851439"
  },
  {
    "url": "common/network.html",
    "revision": "ff19df542f5002c5da3e9f93c4b5fc12"
  },
  {
    "url": "common/optimize.html",
    "revision": "647e06598d7c6ffa10840e131ddc6a71"
  },
  {
    "url": "common/permission.html",
    "revision": "2e5c520345df4b8b0e37d88aa0290fd4"
  },
  {
    "url": "common/router.html",
    "revision": "ed816a24166aa28d82db4064b3b43973"
  },
  {
    "url": "common/skeleton.html",
    "revision": "749c63c80e8aa27f8bef5d58d324e67b"
  },
  {
    "url": "common/standard.html",
    "revision": "36ffc1dddd90dc6cccfcc188158ba85e"
  },
  {
    "url": "common/style.html",
    "revision": "8f5004a6b882b74e4d84a5ffe5dd1720"
  },
  {
    "url": "common/svg.html",
    "revision": "761bf7fbbfec409cb6d432be5bfa7062"
  },
  {
    "url": "common/template.html",
    "revision": "e3c3b1be9e80e0596d75be0b8404034c"
  },
  {
    "url": "common/tools.html",
    "revision": "f47eeaeed9fa29ce951eb815be18fb65"
  },
  {
    "url": "common/version.html",
    "revision": "7dc33a939abf10985fea3a1ff2bb00e5"
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
    "revision": "96a8bd2ae693056115944e1a10e7e83a"
  },
  {
    "url": "experience/index.html",
    "revision": "0984836b5cb2a9454dbf1bba6a314ef7"
  },
  {
    "url": "experience/mobile.html",
    "revision": "2d864136932530125f704c1cafee58db"
  },
  {
    "url": "experience/pc.html",
    "revision": "f8f4bbc04b7e1ca3ded1ff40ad252b04"
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
    "revision": "f85ffc8d45ec0d0eb3bf15dfaa9c3d0a"
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
    "revision": "f659aa7216c81c874e5771388a4abb73"
  },
  {
    "url": "mobile/fit.html",
    "revision": "94b991a1609b1e4a1739d643484462f4"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "b7e1b798511e0e09c6af44fb075aa7e2"
  },
  {
    "url": "mobile/index.html",
    "revision": "f510c0c236b26932c61fadec52dccf76"
  },
  {
    "url": "mobile/install.html",
    "revision": "19633a3f1bd41b9cd2a6591f99fa920f"
  },
  {
    "url": "mobile/modules.html",
    "revision": "687aee8f2eb7786cff44cf03a9401065"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "7955f743134d83410532e20564c5a406"
  },
  {
    "url": "PC/config.html",
    "revision": "e42baad87aba5739b7803d08774f4bea"
  },
  {
    "url": "PC/directives.html",
    "revision": "fa5483af6e0fd5cf2a8e91ab103831f7"
  },
  {
    "url": "PC/index.html",
    "revision": "e0e538b1af6edd054cee2cf4b922edd5"
  },
  {
    "url": "PC/layout.html",
    "revision": "9388a478e7d55430ff6620324226b7f1"
  },
  {
    "url": "PC/plugin.html",
    "revision": "e4e4b0301a58d1e7ce884a5917aaf251"
  },
  {
    "url": "PC/process.html",
    "revision": "799999ff9cd2aa7b6fdab72a4ed7f8d1"
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
