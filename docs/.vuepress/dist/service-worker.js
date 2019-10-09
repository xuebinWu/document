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
    "revision": "647f34c3c829ca00efef1489e9227d7b"
  },
  {
    "url": "assets/css/0.styles.2be7ae2e.css",
    "revision": "1658cf52813b7f8dec071b7d78d0b67e"
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
    "url": "assets/js/10.3881a43d.js",
    "revision": "7ef66fff09607794edf4f7e6d7c1532b"
  },
  {
    "url": "assets/js/10.cd042d51.js",
    "revision": "767271a2833b4c82849166c6168e6eb1"
  },
  {
    "url": "assets/js/11.7638e78e.js",
    "revision": "a2710afea9dad1db5fc9250d5a83fdf6"
  },
  {
    "url": "assets/js/11.7850904e.js",
    "revision": "dfeb5b4a974a7e45456eded19935146c"
  },
  {
    "url": "assets/js/12.9b5e6c9c.js",
    "revision": "22aadb3c926227c103703f99a3372ae0"
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
    "url": "assets/js/13.56602550.js",
    "revision": "89734c0cabe1d0a9d072ff31e8d273dd"
  },
  {
    "url": "assets/js/14.4d5dacaf.js",
    "revision": "4dbe11385b9bede8fea037e4ad6945b3"
  },
  {
    "url": "assets/js/14.bd43af54.js",
    "revision": "3f6481322b222cc4bf3c021f795313c4"
  },
  {
    "url": "assets/js/15.2ac37c3d.js",
    "revision": "3860ca13d84385d533a5228446c0c81d"
  },
  {
    "url": "assets/js/15.7c8706de.js",
    "revision": "a7b203a922eff125ed287feb409e5e9b"
  },
  {
    "url": "assets/js/16.5921ee06.js",
    "revision": "00790b7461746c5e011df66ccc8ff1d1"
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
    "url": "assets/js/17.c5918d06.js",
    "revision": "83fc059ad74598bc1bbc51000c58d26d"
  },
  {
    "url": "assets/js/18.30ac7e7c.js",
    "revision": "9141eaea2f273bf1c3debc2e2b5a7272"
  },
  {
    "url": "assets/js/18.4f90e52b.js",
    "revision": "7e535271aae621c7ead28d3df77e596c"
  },
  {
    "url": "assets/js/19.458f8fe8.js",
    "revision": "ebff464d0699574a442fb1fa472910a4"
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
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.03807b1d.js",
    "revision": "33ff14272979eaa50d7b140137357cb0"
  },
  {
    "url": "assets/js/20.b6527f2b.js",
    "revision": "80b59c58c07ec4babbc7aff6b8e15bd9"
  },
  {
    "url": "assets/js/21.0a2c1d6e.js",
    "revision": "2e990451f88eb416d3d0f863ad6fa3bf"
  },
  {
    "url": "assets/js/21.9c231a21.js",
    "revision": "0749ab86eb52993277c7b5ea471db8b7"
  },
  {
    "url": "assets/js/22.5a4313e8.js",
    "revision": "c1eca73f9e741b36ac35e0f6c4e627a1"
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
    "url": "assets/js/23.d7280bd9.js",
    "revision": "0b209d49be25f1e313b7b03fcc3a7964"
  },
  {
    "url": "assets/js/24.4bb214a3.js",
    "revision": "7c5c6cdb32b96df9d0f7c08797ed58ec"
  },
  {
    "url": "assets/js/24.56d2bbcf.js",
    "revision": "e66e7513769f4814242e994495bfca0b"
  },
  {
    "url": "assets/js/25.0bfa08a2.js",
    "revision": "2e927ca1b424499adc20baf4ead74ab6"
  },
  {
    "url": "assets/js/25.5b448eb4.js",
    "revision": "7d72845ca21f1b2abcfbfe7c41eb5c92"
  },
  {
    "url": "assets/js/26.3da5eae8.js",
    "revision": "b9e11b74f7b2934edf487d257b19c0aa"
  },
  {
    "url": "assets/js/26.83dca6a7.js",
    "revision": "0bbb6c99908facf8f52ccbfc0de90ff3"
  },
  {
    "url": "assets/js/27.06d6901a.js",
    "revision": "b7c704b6982a9d204d7dcc30b5f8a650"
  },
  {
    "url": "assets/js/27.2427b4f5.js",
    "revision": "144c9450101f51cae13234118e633c8f"
  },
  {
    "url": "assets/js/28.68aec20d.js",
    "revision": "a9e518901fa0ab4f56488c62500d691b"
  },
  {
    "url": "assets/js/28.f1afb7cf.js",
    "revision": "171a31b092b321ed61aa499380e9f8f8"
  },
  {
    "url": "assets/js/29.1f1ad5fe.js",
    "revision": "56cee1798030e57d9cde2c3275d2dacd"
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
    "url": "assets/js/30.e66dc600.js",
    "revision": "04e6deb930a1a719bda473a131582fe0"
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
    "url": "assets/js/4.b220b74b.js",
    "revision": "044fddc0f108b940fb1b6af1ac78a25a"
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
    "url": "assets/js/6.df485da9.js",
    "revision": "2445d196d677a882f55f74bd1094d98b"
  },
  {
    "url": "assets/js/7.92d41d6f.js",
    "revision": "3589383833f9239f0b628da1107219ca"
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
    "url": "assets/js/8.9cffb85e.js",
    "revision": "a08a83970b2da1a7991da358013a9508"
  },
  {
    "url": "assets/js/9.5cf4a67d.js",
    "revision": "907966f1b3ea4b4bbd79fbe7947d55d1"
  },
  {
    "url": "assets/js/9.75c00ee0.js",
    "revision": "8ff7866d0ec315c34bc84b2c4c053162"
  },
  {
    "url": "assets/js/app.9b5668f8.js",
    "revision": "ca3b744ce7b0716310e9ec18c17767f7"
  },
  {
    "url": "assets/js/app.eb92a869.js",
    "revision": "8563cc8532ea59f69e578748e3ce80f9"
  },
  {
    "url": "common/cli.html",
    "revision": "8a983752b1b595e3fa54224081140d50"
  },
  {
    "url": "common/code-review.html",
    "revision": "35c6063dd7af412edbbb299935eeb1b9"
  },
  {
    "url": "common/component.html",
    "revision": "f976384c8acd2ea320b117f54d05d17f"
  },
  {
    "url": "common/directory.html",
    "revision": "fe5cbff7e0a6e385f0b5bab98913e765"
  },
  {
    "url": "common/env.html",
    "revision": "50857da93f039c64e03ff7f964eb2752"
  },
  {
    "url": "common/index.html",
    "revision": "16611d35527138bf2b8bc46a946f0fd9"
  },
  {
    "url": "common/network.html",
    "revision": "226f3132504299f53172a97eabcff1ea"
  },
  {
    "url": "common/optimize.html",
    "revision": "00ffa2fcb7417faf5a6a2fd75e41899b"
  },
  {
    "url": "common/permission.html",
    "revision": "1894da2b0e0dab925d2dfcc796df150c"
  },
  {
    "url": "common/router.html",
    "revision": "c4523d0c3c1b73a7e6f8de02974b24d3"
  },
  {
    "url": "common/skeleton.html",
    "revision": "155beee26489863de62d55447bfbf464"
  },
  {
    "url": "common/standard.html",
    "revision": "dfc0ec2d34e6f7ccd7ba02a43367a566"
  },
  {
    "url": "common/style.html",
    "revision": "45c8eded0d6fdd7b5b8c0040f89fd5fa"
  },
  {
    "url": "common/svg.html",
    "revision": "e72f67c888b5c188fa62e7dcf420ab81"
  },
  {
    "url": "common/template.html",
    "revision": "15f17bd25452b33976a2eed98493c98e"
  },
  {
    "url": "common/version.html",
    "revision": "7da735cfae252fcafbb84733483e6a52"
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
    "revision": "23060e45173a737ed034b0bf43a10f19"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "ac0929e24b79999772adfee02312c15a"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "e7a5edac2dd08540f9f86ee40ee5f825"
  },
  {
    "url": "mobile/index.html",
    "revision": "97f693f10c844543f4ea8bcc8870111e"
  },
  {
    "url": "mobile/install.html",
    "revision": "bbd58943627438f45fa9a6bd0d8b631d"
  },
  {
    "url": "mobile/modules.html",
    "revision": "9f81539599636a217f76cf6971b5f029"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "0c6556641e42efec6e595e5ad8bc164d"
  },
  {
    "url": "PC/config.html",
    "revision": "7c69882f28845e9b0dbadf9223ed3053"
  },
  {
    "url": "PC/index.html",
    "revision": "681c049cd8bd56b6610256c33a3b80fe"
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
