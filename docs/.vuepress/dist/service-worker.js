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
    "revision": "183988ac949f323b9ede56e117abaaa4"
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
    "url": "assets/js/10.3de0beef.js",
    "revision": "4c39e78aa318da467eaad397a3225866"
  },
  {
    "url": "assets/js/11.10b5d1d6.js",
    "revision": "1fe59032d87b0ad987ba883665e5397f"
  },
  {
    "url": "assets/js/12.508e0772.js",
    "revision": "e05d35e454e895c5eb68a44f2059ce33"
  },
  {
    "url": "assets/js/13.0262e762.js",
    "revision": "ab6a58926489d77545eb7db5289cc072"
  },
  {
    "url": "assets/js/14.9529f1a8.js",
    "revision": "6055f5d128c2d80442f3b0c25a2630ec"
  },
  {
    "url": "assets/js/15.ff19518e.js",
    "revision": "77f884bc85ef1b01b1dfc8df36637ddf"
  },
  {
    "url": "assets/js/16.aae94ada.js",
    "revision": "1661ad1cc8d20c9ee85510a26ffe4f1d"
  },
  {
    "url": "assets/js/17.317d9fc4.js",
    "revision": "61af5639d17082e05dabf427a6dc8de1"
  },
  {
    "url": "assets/js/18.b489e0b6.js",
    "revision": "5f77fbd99282f33fe2f387c9f0e62d3f"
  },
  {
    "url": "assets/js/19.f7f93f57.js",
    "revision": "12669e1314ec8a8ccb061f0731059fa4"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.c1625d18.js",
    "revision": "60ead7a4bf6b96dfd78629d33a3ba15c"
  },
  {
    "url": "assets/js/21.db8a0da9.js",
    "revision": "aeb1bb41a6e250fb5b1778eb2578496a"
  },
  {
    "url": "assets/js/22.7d734b29.js",
    "revision": "a11ebead97a56af6c67e599572752c8a"
  },
  {
    "url": "assets/js/23.e18df41e.js",
    "revision": "fa80a64122fbd082b2deb0b3091de47e"
  },
  {
    "url": "assets/js/24.eebb0eab.js",
    "revision": "58d57c48c12188508e913e445036df1b"
  },
  {
    "url": "assets/js/25.bade5db6.js",
    "revision": "f1d9309234b71004333fee340dae8b86"
  },
  {
    "url": "assets/js/26.de121b84.js",
    "revision": "fff625bee0c420a7348321f77986d728"
  },
  {
    "url": "assets/js/27.cd0135e0.js",
    "revision": "50a8008377de8d161da051f41bf94fc3"
  },
  {
    "url": "assets/js/28.131a672f.js",
    "revision": "c77dc34aa5dcae101b93aadaac2920cf"
  },
  {
    "url": "assets/js/29.47bf5a29.js",
    "revision": "9fe080b6e067521bfbb952912b41eb1c"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.03f2f436.js",
    "revision": "d2553f932d0099c8abfab518a12feab5"
  },
  {
    "url": "assets/js/31.7af8667b.js",
    "revision": "db69a16d397c568507cd90c88809f912"
  },
  {
    "url": "assets/js/32.f7f4bac9.js",
    "revision": "dd07bb49297ae8c787a0d026ee07a37b"
  },
  {
    "url": "assets/js/33.0d06853e.js",
    "revision": "accba5fdd9ffdebdf4ecca7715b51913"
  },
  {
    "url": "assets/js/34.ba93003d.js",
    "revision": "19ae285221f6b4ef790b332b5f25c427"
  },
  {
    "url": "assets/js/35.4568a978.js",
    "revision": "1e7d63680d1ba8ae0452751a5b3098b9"
  },
  {
    "url": "assets/js/4.2583487d.js",
    "revision": "fb33b1c9bee5b478a20d7cf52a3101d1"
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
    "url": "assets/js/7.6f88ce79.js",
    "revision": "9a642e466f756da3eff3d3c5ec5bd090"
  },
  {
    "url": "assets/js/8.47ff2dfd.js",
    "revision": "f95e7fd9aa6e3a095deacaa8d459722c"
  },
  {
    "url": "assets/js/9.2d1333b0.js",
    "revision": "4f0310032647b2f892feedeaf195f0da"
  },
  {
    "url": "assets/js/app.b6b972b0.js",
    "revision": "757af84139b200458c9789cd1846a367"
  },
  {
    "url": "common/cli.html",
    "revision": "59d407125c9b32c9832d79a6964deca7"
  },
  {
    "url": "common/code-review.html",
    "revision": "93d47372404fe88bef0e59e2ea2af957"
  },
  {
    "url": "common/component.html",
    "revision": "a64273976ecfdf60f55bd7c6926c1e43"
  },
  {
    "url": "common/directory.html",
    "revision": "2d0601d21d2c82e2839752f36f0936a2"
  },
  {
    "url": "common/env.html",
    "revision": "4f05e550637c9154c573cdc9b543a18f"
  },
  {
    "url": "common/index.html",
    "revision": "c4f11fe50b579229b012a4646d850dba"
  },
  {
    "url": "common/locale.html",
    "revision": "6147065ae6c8611be801d7d201268f21"
  },
  {
    "url": "common/network.html",
    "revision": "26ec1f8afc5edede14d307166e5f017b"
  },
  {
    "url": "common/optimize.html",
    "revision": "5ab09b6469c1f34b60e84f14d0bdf7da"
  },
  {
    "url": "common/permission.html",
    "revision": "f68b1e3c81f40cee2620a5b9796252ba"
  },
  {
    "url": "common/router.html",
    "revision": "cdf030894f36216c09e7b65dab0fa915"
  },
  {
    "url": "common/skeleton.html",
    "revision": "b29178cfcfd0210d27345d46e0fd2cc5"
  },
  {
    "url": "common/standard.html",
    "revision": "b950f699cbfa85ad607a7e731dd7be3d"
  },
  {
    "url": "common/style.html",
    "revision": "b5d0dc2ae23615e0b84878a607cff362"
  },
  {
    "url": "common/svg.html",
    "revision": "3588c22a9d1daf000b2e5cb235e73400"
  },
  {
    "url": "common/template.html",
    "revision": "0bca9d4c9175f4f1407b21171ed9cc07"
  },
  {
    "url": "common/tools.html",
    "revision": "1f6ad4337dd61852d470a154ebcf3850"
  },
  {
    "url": "common/version.html",
    "revision": "e4b40a0c341c1cf8a818a48db440aee6"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "develop.png",
    "revision": "38aeaa4c1d45c80f3d3fade2ec63ee39"
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
    "revision": "480200f8daad12508181ae27a9a83117"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "4d741adea5454a273b957ed4f8e5022a"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "51dec89d53a7abc4b43ddb845f70253b"
  },
  {
    "url": "mobile/index.html",
    "revision": "7b0847829a322a1ded7563f5762e5215"
  },
  {
    "url": "mobile/install.html",
    "revision": "4d8ccbb9f0b1c29358ab75b0c40a4c81"
  },
  {
    "url": "mobile/modules.html",
    "revision": "6133b50b234b04580cd111fa9f3ec9af"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "b0b96495a053e7083aae7abcc986e7c8"
  },
  {
    "url": "PC/config.html",
    "revision": "868017824ed3af6dd8299422e1953289"
  },
  {
    "url": "PC/index.html",
    "revision": "6a619e5e057fd7e3aa7cded91fa92699"
  },
  {
    "url": "PC/plugin.html",
    "revision": "ba95367faefa82dda50ee2c2a34a9b20"
  },
  {
    "url": "PC/process.html",
    "revision": "32ed244aaf7e8e172e5114f50ae61ede"
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
