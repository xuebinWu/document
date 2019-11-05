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
    "revision": "2bcca7906685000f62bc62bec87bfcb5"
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
    "url": "assets/js/11.4306cece.js",
    "revision": "e84059df915d8939edb61e6cc8e7a4d2"
  },
  {
    "url": "assets/js/12.f5b1c518.js",
    "revision": "7f0e9b260919083cb3b0c1d2b198c41a"
  },
  {
    "url": "assets/js/13.8e9c7c32.js",
    "revision": "ff270c84d13bb3609d09d2e9cf07cf3d"
  },
  {
    "url": "assets/js/14.e65be9a0.js",
    "revision": "80f534b2a7638a3cd3a8f8ee9867823f"
  },
  {
    "url": "assets/js/15.2a1f1953.js",
    "revision": "16d00a9b3b2dd87fb067be92954eacf5"
  },
  {
    "url": "assets/js/16.34a51ab7.js",
    "revision": "77e68d63cfa44c29c400b4119ca4717d"
  },
  {
    "url": "assets/js/17.317d9fc4.js",
    "revision": "61af5639d17082e05dabf427a6dc8de1"
  },
  {
    "url": "assets/js/18.090f041b.js",
    "revision": "9e5f25f2c6d8b9f1b9a60d5b9ece5749"
  },
  {
    "url": "assets/js/19.820631b9.js",
    "revision": "cede29b2c8119f23509f07333d5e6921"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.84ef10d9.js",
    "revision": "1e228d4554108aaef63f8a48c206ed70"
  },
  {
    "url": "assets/js/21.437785af.js",
    "revision": "bec0267668320ce66544ea45285ba59d"
  },
  {
    "url": "assets/js/22.a8135464.js",
    "revision": "c50698b6dfdcd68fc42ed24db911f86f"
  },
  {
    "url": "assets/js/23.b19eaa13.js",
    "revision": "05d638eacd890a7ab0416f9df79ff04b"
  },
  {
    "url": "assets/js/24.c1762c9d.js",
    "revision": "fd0ea0693090ec518ecc2487d483527f"
  },
  {
    "url": "assets/js/25.178a7858.js",
    "revision": "ecaf89984e77454d9d8586ca0d4e48cc"
  },
  {
    "url": "assets/js/26.11dbb967.js",
    "revision": "82d5b9030f5aa8ff55184ef0c6f43356"
  },
  {
    "url": "assets/js/27.b36746e6.js",
    "revision": "805b8a9547b2f7cc6c25caf90513d707"
  },
  {
    "url": "assets/js/28.3a3cc5ec.js",
    "revision": "2c65b94a5c254b20391e6229cf5f1794"
  },
  {
    "url": "assets/js/29.97d8c2ae.js",
    "revision": "1d23df65707228b79646b9038afc4d43"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.8f598357.js",
    "revision": "595d7a017f357ee1d3087e5e5819c261"
  },
  {
    "url": "assets/js/31.f37323e2.js",
    "revision": "96954c93b2a8493b1a3a036394c74874"
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
    "url": "assets/js/34.975deefe.js",
    "revision": "01d648b47304413cf0af27cc8b4d6e0e"
  },
  {
    "url": "assets/js/35.aeebe04a.js",
    "revision": "5af833d988f048cebe3cc5c4e26c6987"
  },
  {
    "url": "assets/js/36.22535b14.js",
    "revision": "55b14e313e5c62b62ffeebe531a8ade0"
  },
  {
    "url": "assets/js/37.ea8fa0db.js",
    "revision": "f7a12fa5611ecd7c2898b85881b86638"
  },
  {
    "url": "assets/js/38.f3c5abe4.js",
    "revision": "27df927423ea8b8a97cb6c062205a612"
  },
  {
    "url": "assets/js/39.45ebfd41.js",
    "revision": "d2beb63f58b9f5f30c2a9a031137b5ec"
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
    "url": "assets/js/app.f8a5ff45.js",
    "revision": "d587b01874603a3686c03fd202c8214b"
  },
  {
    "url": "common/cli.html",
    "revision": "c713638e223a79c2108e436318f96db7"
  },
  {
    "url": "common/code-review.html",
    "revision": "0c5787d2206c9c663d8d0a8bfe60ad7d"
  },
  {
    "url": "common/component.html",
    "revision": "ad83b088cc4823415b1eeaae7f2f297a"
  },
  {
    "url": "common/directory.html",
    "revision": "23494c7f1394a1a67c13d89c323cdd57"
  },
  {
    "url": "common/env.html",
    "revision": "eebfeecf6655b2d56fe64e38a91f3812"
  },
  {
    "url": "common/index.html",
    "revision": "97f5244d4b7fcbbac47a6b15efbd82a6"
  },
  {
    "url": "common/locale.html",
    "revision": "5b43d24da96c9d93b834b488e4b3e0f0"
  },
  {
    "url": "common/network.html",
    "revision": "6ecb940b3bc5067577ef469905bda387"
  },
  {
    "url": "common/optimize.html",
    "revision": "2e967f8a517ea69d4bd290fc9440d2f9"
  },
  {
    "url": "common/permission.html",
    "revision": "1bbd23a5749fab0c9ded4c60f771f43d"
  },
  {
    "url": "common/router.html",
    "revision": "a1b5979371bd64673fe612b68b9e0afe"
  },
  {
    "url": "common/skeleton.html",
    "revision": "fd46c2df2b7b0e89396527e8c9051640"
  },
  {
    "url": "common/standard.html",
    "revision": "81c76a3c69226e960d97532edfc0800f"
  },
  {
    "url": "common/style.html",
    "revision": "d0b488f703cba470a5ba9da392f1b20c"
  },
  {
    "url": "common/svg.html",
    "revision": "a1c2e78316142148a3e54de05e94b51b"
  },
  {
    "url": "common/template.html",
    "revision": "be7cf073e981b06a8a6692c883dd7002"
  },
  {
    "url": "common/tools.html",
    "revision": "40dbdfea5199a2e6a922bb6e92358b6e"
  },
  {
    "url": "common/version.html",
    "revision": "098262c761e681ffd493dc1a503098d4"
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
    "revision": "afe1d04275313ea00035f03c6ed0aab7"
  },
  {
    "url": "experience/index.html",
    "revision": "579bcc6bfe44d723610551edc6943070"
  },
  {
    "url": "experience/mobile.html",
    "revision": "b6af456f9457632d44b8b87b93996b33"
  },
  {
    "url": "experience/pc.html",
    "revision": "51dcc500577b8144d5408d15de35eee5"
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
    "revision": "e0644db6d245c32f7eed1185afad6a92"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/debug.html",
    "revision": "f10811a777a7743cb90a4f27e911a50e"
  },
  {
    "url": "mobile/fit.html",
    "revision": "4c16e0d274856531594289392e402fee"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "e001d184de1bfd7206ffcecb68b0da10"
  },
  {
    "url": "mobile/index.html",
    "revision": "21070db3a6732b3054952b0a77c8e7bb"
  },
  {
    "url": "mobile/install.html",
    "revision": "8e3260fe1adca38349595dc34261ffce"
  },
  {
    "url": "mobile/modules.html",
    "revision": "f5cd994fa098eaeae3e2f466cbbab790"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "dfa87857242c9d38749640fbcc356f55"
  },
  {
    "url": "PC/config.html",
    "revision": "4ef4ccd8293a01f91eb41620d823b44f"
  },
  {
    "url": "PC/index.html",
    "revision": "b0bdee2761f5b88d66fdf2cdf1dc865f"
  },
  {
    "url": "PC/plugin.html",
    "revision": "f3233be2a188fa3168778f0daab69771"
  },
  {
    "url": "PC/process.html",
    "revision": "144a00ff1b96106b238d68b624521f0d"
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
