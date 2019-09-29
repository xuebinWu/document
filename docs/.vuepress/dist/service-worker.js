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
    "revision": "188cb6217e2a76014e943e1225dfb6f6"
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
    "url": "assets/js/10.858530fd.js",
    "revision": "d60f636eedab09b8eba18c9475d92283"
  },
  {
    "url": "assets/js/11.6d7206c2.js",
    "revision": "776160fa8f767850d5347ba1a236d5cc"
  },
  {
    "url": "assets/js/12.c909e3cd.js",
    "revision": "da7885112ad29af9de0dd9707bbd2fb1"
  },
  {
    "url": "assets/js/13.2a43ea57.js",
    "revision": "3b9a40adc09f112af53edb391d51dc8b"
  },
  {
    "url": "assets/js/14.40bb3d80.js",
    "revision": "67d11cdbb3233bcfb81e18c25ab0437c"
  },
  {
    "url": "assets/js/15.13f5a597.js",
    "revision": "6a2026316fdc30753c21a22c8942b6e0"
  },
  {
    "url": "assets/js/16.fccf8517.js",
    "revision": "ee04ca5dcded4ef7f5f0c0e5cab03d9a"
  },
  {
    "url": "assets/js/17.b4cc2ef0.js",
    "revision": "dc2d635699568619367e90362a2c568f"
  },
  {
    "url": "assets/js/18.30ac7e7c.js",
    "revision": "9141eaea2f273bf1c3debc2e2b5a7272"
  },
  {
    "url": "assets/js/19.458f8fe8.js",
    "revision": "ebff464d0699574a442fb1fa472910a4"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.17ede909.js",
    "revision": "b552eaf1bbb6fd99bbb992ade2917be2"
  },
  {
    "url": "assets/js/21.20c89e90.js",
    "revision": "5a4f6a8d042d97b9f6a81eb0da7712a1"
  },
  {
    "url": "assets/js/22.798a3b3f.js",
    "revision": "220915541461ddc848b24ccb0b3e9024"
  },
  {
    "url": "assets/js/23.a41fce0c.js",
    "revision": "14494ef22c1f9014f5911da2e17d7c51"
  },
  {
    "url": "assets/js/24.201f19c4.js",
    "revision": "bb21ce836ef1af74ee79fd67e4ef2fa6"
  },
  {
    "url": "assets/js/25.7a91df40.js",
    "revision": "56d81937630a008f5955415ca8b235e7"
  },
  {
    "url": "assets/js/26.d6fc7852.js",
    "revision": "0dc99e9b9c4c0b621b2c90e78bca4189"
  },
  {
    "url": "assets/js/27.80e1deeb.js",
    "revision": "7ec3612c462723aadfb7e8425a263614"
  },
  {
    "url": "assets/js/28.d60ad4b7.js",
    "revision": "46cb7d0909d9cc488b6aa8729609bb22"
  },
  {
    "url": "assets/js/29.1f1ad5fe.js",
    "revision": "56cee1798030e57d9cde2c3275d2dacd"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.e66dc600.js",
    "revision": "04e6deb930a1a719bda473a131582fe0"
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
    "url": "assets/js/6.c7005dee.js",
    "revision": "1821623a507f133ad28f140abe382d0e"
  },
  {
    "url": "assets/js/7.267a3177.js",
    "revision": "b04cdc1d3147a43f17457173f5ad97e4"
  },
  {
    "url": "assets/js/8.736d8eff.js",
    "revision": "a1aba966ddd01e1e7af971272fe786c5"
  },
  {
    "url": "assets/js/9.5cf4a67d.js",
    "revision": "907966f1b3ea4b4bbd79fbe7947d55d1"
  },
  {
    "url": "assets/js/app.aeaa6265.js",
    "revision": "bb4ef7d03576f07c61ca125cb88ea7d4"
  },
  {
    "url": "common/cli.html",
    "revision": "2c555c75cdf688aed2144d7a541fb1e3"
  },
  {
    "url": "common/code-review.html",
    "revision": "70032070415bab03b8519b9e37e76150"
  },
  {
    "url": "common/component.html",
    "revision": "34f61ee9a332629c30906d64dfdde45f"
  },
  {
    "url": "common/directory.html",
    "revision": "581468f640ff139c7193013f03a91c66"
  },
  {
    "url": "common/env.html",
    "revision": "15d654d3fc448570dee59821c07c5d6c"
  },
  {
    "url": "common/index.html",
    "revision": "c7ce7315f30d0c27896e0e90fe8453a8"
  },
  {
    "url": "common/network.html",
    "revision": "960cbaca76e6cec577d857a6168db4a6"
  },
  {
    "url": "common/optimize.html",
    "revision": "9038b3b59172c0772263c5ee94706e75"
  },
  {
    "url": "common/permission.html",
    "revision": "804327437eab67587f8c9f5423376fcf"
  },
  {
    "url": "common/router.html",
    "revision": "0474feff9d13ea67374d0eab22db453d"
  },
  {
    "url": "common/skeleton.html",
    "revision": "329f0ed36474a86b3bd179289d3b8040"
  },
  {
    "url": "common/standard.html",
    "revision": "54a9af8dc42ef24d9b9e64a666fddf2a"
  },
  {
    "url": "common/style.html",
    "revision": "4d37eca18b944924b7f34051fd77576c"
  },
  {
    "url": "common/svg.html",
    "revision": "c826d8ab07f91b8c1ede36bbe0b279cf"
  },
  {
    "url": "common/template.html",
    "revision": "9fd18006a24a300d92624a2804f8325c"
  },
  {
    "url": "common/version.html",
    "revision": "db74f87ec31c68c7e12bfdc274729cba"
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
    "revision": "71d31f1b718fc5cb683672aaf04433fe"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "222494d1bd83b55303cb233142753432"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "2b3ed67d6944f3ba21d3a1afbc50af0c"
  },
  {
    "url": "mobile/index.html",
    "revision": "356ff0100436891cde89e8fc62e1fa74"
  },
  {
    "url": "mobile/install.html",
    "revision": "3e59ccd11758e5d399c22ea84fb2e861"
  },
  {
    "url": "mobile/modules.html",
    "revision": "f2900108e2838418a996b20194e380c2"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "bdc564c58e43e035e6820e7fc7cf66bd"
  },
  {
    "url": "PC/index.html",
    "revision": "cc01a0fbc243ddb19bdf5e9603279b21"
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
