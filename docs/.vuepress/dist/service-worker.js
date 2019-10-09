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
    "revision": "8a937855741b3344ddb4ace4dc3cf2d9"
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
    "url": "assets/js/10.cd042d51.js",
    "revision": "767271a2833b4c82849166c6168e6eb1"
  },
  {
    "url": "assets/js/11.7850904e.js",
    "revision": "dfeb5b4a974a7e45456eded19935146c"
  },
  {
    "url": "assets/js/12.deda3794.js",
    "revision": "857d46f36d3fb4b80e15ece94a7b7ba6"
  },
  {
    "url": "assets/js/13.2ff3529b.js",
    "revision": "6a1e0d861f1a7bf7555f8f396019d7e0"
  },
  {
    "url": "assets/js/14.4d5dacaf.js",
    "revision": "4dbe11385b9bede8fea037e4ad6945b3"
  },
  {
    "url": "assets/js/15.2ac37c3d.js",
    "revision": "3860ca13d84385d533a5228446c0c81d"
  },
  {
    "url": "assets/js/16.5b66f880.js",
    "revision": "defb1a87b98522949d72c4f2bcabb71d"
  },
  {
    "url": "assets/js/17.62a06ee7.js",
    "revision": "a11abd458b3fe5962a6df0c1e9fe86e4"
  },
  {
    "url": "assets/js/18.4f90e52b.js",
    "revision": "7e535271aae621c7ead28d3df77e596c"
  },
  {
    "url": "assets/js/19.8a19bc95.js",
    "revision": "17dda2b9726dfd197a36c0c74886d717"
  },
  {
    "url": "assets/js/2.2018ae8e.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.b6527f2b.js",
    "revision": "80b59c58c07ec4babbc7aff6b8e15bd9"
  },
  {
    "url": "assets/js/21.9c231a21.js",
    "revision": "0749ab86eb52993277c7b5ea471db8b7"
  },
  {
    "url": "assets/js/22.78133f4c.js",
    "revision": "a676050f4b291e70003c3b28fb2538b9"
  },
  {
    "url": "assets/js/23.aa8ef0ad.js",
    "revision": "398eb2f540cef96dbf79c41e79f4c2bd"
  },
  {
    "url": "assets/js/24.4bb214a3.js",
    "revision": "7c5c6cdb32b96df9d0f7c08797ed58ec"
  },
  {
    "url": "assets/js/25.5b448eb4.js",
    "revision": "7d72845ca21f1b2abcfbfe7c41eb5c92"
  },
  {
    "url": "assets/js/26.83dca6a7.js",
    "revision": "0bbb6c99908facf8f52ccbfc0de90ff3"
  },
  {
    "url": "assets/js/27.2427b4f5.js",
    "revision": "144c9450101f51cae13234118e633c8f"
  },
  {
    "url": "assets/js/28.f1afb7cf.js",
    "revision": "171a31b092b321ed61aa499380e9f8f8"
  },
  {
    "url": "assets/js/29.b221a757.js",
    "revision": "f840d8467b1ddb9fda5368f416f64198"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.76497bdc.js",
    "revision": "53f769fd7e42210fd36e623938ebdae9"
  },
  {
    "url": "assets/js/31.8875ffc0.js",
    "revision": "3063f94d19ac82f268ff578ee0f51829"
  },
  {
    "url": "assets/js/32.88b5ecce.js",
    "revision": "8e33a4e622f9fb9a3c8d3837b0de4d51"
  },
  {
    "url": "assets/js/33.8b8dad2b.js",
    "revision": "93bbdd1d7cbe33444d91ddc0b1743016"
  },
  {
    "url": "assets/js/4.224869dc.js",
    "revision": "4be9025e883ee94f23ae4f980aa36763"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.b3e2dfb5.js",
    "revision": "a9f10f9081e306a6fc960fbc3d2f3c40"
  },
  {
    "url": "assets/js/7.e3402d52.js",
    "revision": "63d74400d19b45aea2975a40ab51441f"
  },
  {
    "url": "assets/js/8.090c46dc.js",
    "revision": "49e7d09e84e76df2953c60d908d4eecc"
  },
  {
    "url": "assets/js/9.75c00ee0.js",
    "revision": "8ff7866d0ec315c34bc84b2c4c053162"
  },
  {
    "url": "assets/js/app.eb92a869.js",
    "revision": "8563cc8532ea59f69e578748e3ce80f9"
  },
  {
    "url": "common/cli.html",
    "revision": "1bda032f40c49ceea2fe526662a8b35a"
  },
  {
    "url": "common/code-review.html",
    "revision": "ef3904f96ed99d1ae36b2a9ff0ea2425"
  },
  {
    "url": "common/component.html",
    "revision": "d71143ff5b1341c6857edbc06adb7863"
  },
  {
    "url": "common/directory.html",
    "revision": "ed6a074f5056db4b0d75fb8ae888e0fc"
  },
  {
    "url": "common/env.html",
    "revision": "564b89fa3324cb94b48595dc8cb11626"
  },
  {
    "url": "common/index.html",
    "revision": "a801edb02ef9adf7782c47f8ed542f0b"
  },
  {
    "url": "common/network.html",
    "revision": "501d7426cbe602f3eb6fab8e6535d19f"
  },
  {
    "url": "common/optimize.html",
    "revision": "42c4a8c77a01c8824b29b52fd2bf6a82"
  },
  {
    "url": "common/permission.html",
    "revision": "f759c8c96341a996b7c8cb3879e0e2f4"
  },
  {
    "url": "common/router.html",
    "revision": "3e977d47f289f8fe9b707e9aeab9661d"
  },
  {
    "url": "common/skeleton.html",
    "revision": "2a10bff7e6f413631f919536a6d4aeb7"
  },
  {
    "url": "common/standard.html",
    "revision": "e30a5aa766d46071798adb479a58e12c"
  },
  {
    "url": "common/style.html",
    "revision": "6bbdf439f678cc223fc0540d0c7d0349"
  },
  {
    "url": "common/svg.html",
    "revision": "31a9e51863d42e608c1c3b33b230970c"
  },
  {
    "url": "common/template.html",
    "revision": "a47f0ffd89586d0d7c342eb22401db3d"
  },
  {
    "url": "common/version.html",
    "revision": "60afa191492ab5c2f38fd94af42e4ec2"
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
    "revision": "bd21ad5bf5f2f84871b044b742964e71"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "c83d52dc9001d47c6658ba0c552d2dde"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "73ba71efa9b0f7012f57f3f70b27df1d"
  },
  {
    "url": "mobile/index.html",
    "revision": "8be3c358dfea9d777806b4b631779a28"
  },
  {
    "url": "mobile/install.html",
    "revision": "aa3aae9c15655ed508956c62c3d4d5f3"
  },
  {
    "url": "mobile/modules.html",
    "revision": "cbd8e5286414a881b2ec6d73af92c1c4"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "c71fd3efaf4ce61b85b19d4fdd0c9ead"
  },
  {
    "url": "PC/config.html",
    "revision": "7c69882f28845e9b0dbadf9223ed3053"
  },
  {
    "url": "PC/index.html",
    "revision": "c023ac92d6e21f2b4cae89dba7a20b60"
  },
  {
    "url": "PC/plugin.html",
    "revision": "306866a664fa955f6f958e6563967321"
  },
  {
    "url": "PC/process.html",
    "revision": "a69b841fcfcc74a192bee611e90fa141"
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
