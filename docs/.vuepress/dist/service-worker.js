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
    "revision": "5f0c92b225db6d8b9471a1d6992ff9c9"
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
    "url": "assets/js/10.ead48301.js",
    "revision": "8c434ddec8559ba44951ce57ea965833"
  },
  {
    "url": "assets/js/11.a038853d.js",
    "revision": "203d20fddb9f2f0b5c20e73f81730656"
  },
  {
    "url": "assets/js/12.d61f3b3c.js",
    "revision": "4655764ed70bdcccbba7eec924fcb326"
  },
  {
    "url": "assets/js/13.56602550.js",
    "revision": "89734c0cabe1d0a9d072ff31e8d273dd"
  },
  {
    "url": "assets/js/14.d0f7c088.js",
    "revision": "139fb28e8080c0b77bf4bc2ec884e8e0"
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
    "url": "assets/js/17.442bee63.js",
    "revision": "ac875de8e919b0fe8a47050827b7bd65"
  },
  {
    "url": "assets/js/18.a838dbc8.js",
    "revision": "25f3f4c84392f0e2bfccc746548edd4d"
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
    "url": "assets/js/21.a76cd600.js",
    "revision": "a6020a09cf2c3c6d400983f6e026c7fe"
  },
  {
    "url": "assets/js/22.49bb1922.js",
    "revision": "6bc067d5e72901bf154e154b06bc002d"
  },
  {
    "url": "assets/js/23.8ac382af.js",
    "revision": "66bac8d170e6328433cf2dd75c244f35"
  },
  {
    "url": "assets/js/24.2908c28c.js",
    "revision": "d1cd94e182715e1f272b12ed48a6403a"
  },
  {
    "url": "assets/js/25.7a91df40.js",
    "revision": "56d81937630a008f5955415ca8b235e7"
  },
  {
    "url": "assets/js/26.15476cef.js",
    "revision": "a61f59a22f93dd3d855fb818c37a90b2"
  },
  {
    "url": "assets/js/27.26ff8aa7.js",
    "revision": "4bc237e3eebbbb79f1e3d069f713664f"
  },
  {
    "url": "assets/js/28.a9f98dc7.js",
    "revision": "dea044c221611975b4757ebeba7cb792"
  },
  {
    "url": "assets/js/29.d39f7435.js",
    "revision": "fa2e2bad3caf87f44cd18a8ba6b227b9"
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
    "url": "assets/js/7.9d1d30e7.js",
    "revision": "320a7101d022ea07fa38978d55475421"
  },
  {
    "url": "assets/js/8.736d8eff.js",
    "revision": "a1aba966ddd01e1e7af971272fe786c5"
  },
  {
    "url": "assets/js/9.71e4dd11.js",
    "revision": "d7ac8fa75c776ff5ed5cc0d911241082"
  },
  {
    "url": "assets/js/app.51a0e635.js",
    "revision": "4fc457f40603d29bd6f719bca4714e5f"
  },
  {
    "url": "common/cli.html",
    "revision": "746b4950c7cc64a55f447e93a8dc9bae"
  },
  {
    "url": "common/code-review.html",
    "revision": "db6772e7f133708cd6178f140e8a9523"
  },
  {
    "url": "common/component.html",
    "revision": "5772fe7f54769612f3b16881d90e635b"
  },
  {
    "url": "common/directory.html",
    "revision": "355570568a2316a02b8c1a9e196abf5f"
  },
  {
    "url": "common/env.html",
    "revision": "40e6b100f610bb17bd7953eaa96a7ee1"
  },
  {
    "url": "common/index.html",
    "revision": "74958e710e06fe204e0896bd88f00f4c"
  },
  {
    "url": "common/network.html",
    "revision": "a3278ad423f286189e82e594489c5b45"
  },
  {
    "url": "common/optimize.html",
    "revision": "1f2327044dd906edf75de6a620d9a88a"
  },
  {
    "url": "common/permission.html",
    "revision": "a47fdf0446995870c5bc04186805c961"
  },
  {
    "url": "common/router.html",
    "revision": "e915a16814bbe5536b90043465067fec"
  },
  {
    "url": "common/skeleton.html",
    "revision": "ad0781da0cb4bbe36a83a9e644703764"
  },
  {
    "url": "common/standard.html",
    "revision": "e85d82e2de268551a30b85936de931d5"
  },
  {
    "url": "common/style.html",
    "revision": "cad3f677ba0ad54a77f692628a295c15"
  },
  {
    "url": "common/svg.html",
    "revision": "7a3682ac28e7a2425a3b14eb290f983a"
  },
  {
    "url": "common/template.html",
    "revision": "77f4a4281a14e51320516a40c1851c88"
  },
  {
    "url": "common/version.html",
    "revision": "c3f8fc72702df13633d76746e0e2305b"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "flow.png",
    "revision": "8cd93c71cb0bed8bc99aa2cc1d32f892"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "e8abec04c23bac50ed8616ae84d301cf"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "350f58fb3d69f54c378cdc48a8bec096"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "5c5153b06b0d26df6b58b3473e892d76"
  },
  {
    "url": "mobile/index.html",
    "revision": "ed85448597a256fa1dc0663f00964e1b"
  },
  {
    "url": "mobile/install.html",
    "revision": "76ec4886117678802497a267381b4809"
  },
  {
    "url": "mobile/modules.html",
    "revision": "c2dc316be5c824b944c280a310d47058"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "807938ec7735f7ca5a38be9e5a696920"
  },
  {
    "url": "PC/index.html",
    "revision": "c73f5912545175811b85572b1ec561ff"
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
