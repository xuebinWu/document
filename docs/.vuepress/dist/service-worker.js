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
    "revision": "709b16dd4af1acffe8ea232cf51a91bd"
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
    "url": "assets/js/10.fe8c049c.js",
    "revision": "6775a8cc0a7a148c8011d118cc5f92a3"
  },
  {
    "url": "assets/js/11.f449efdb.js",
    "revision": "46826f4f4f8b836fc4967c78a9a31b0e"
  },
  {
    "url": "assets/js/12.01dd2dee.js",
    "revision": "dd440ceaefab3c091d5c3c4a5a824cf3"
  },
  {
    "url": "assets/js/13.44e809d8.js",
    "revision": "5671402975f84875fd08b9f3ae89e2e7"
  },
  {
    "url": "assets/js/14.20248acc.js",
    "revision": "6ee8b3a453b16d83368807d7bdf48446"
  },
  {
    "url": "assets/js/15.c4c3ea8e.js",
    "revision": "b8e845961b06a198f3f35b5b08533b5b"
  },
  {
    "url": "assets/js/16.b50f0f54.js",
    "revision": "2ec95e7f08f93b77aa467c75e2bd9f7a"
  },
  {
    "url": "assets/js/17.44daaa13.js",
    "revision": "84025b22a3f2004361e8c98d096049dc"
  },
  {
    "url": "assets/js/18.11ea747f.js",
    "revision": "3ba90557b441bdf3ad2fa341366543a3"
  },
  {
    "url": "assets/js/19.0a7413c7.js",
    "revision": "828263cd47eba6c62dbccc56fd1a87ba"
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
    "url": "assets/js/21.487edb8d.js",
    "revision": "86c14ac589aea7aa47986278db976c44"
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
    "url": "assets/js/24.02a71912.js",
    "revision": "036ee5cfe163bdf6d77ecab886570fab"
  },
  {
    "url": "assets/js/25.9a37bc41.js",
    "revision": "e638900f1c961f9f4a05d49866ca09c7"
  },
  {
    "url": "assets/js/26.a8dd7054.js",
    "revision": "3de4ab60139c934e31fa1f9f6bddc65e"
  },
  {
    "url": "assets/js/27.7d66c513.js",
    "revision": "a36aa959a1b671a6a76bc2b23e2d1677"
  },
  {
    "url": "assets/js/28.e583c3ac.js",
    "revision": "a65725ddfc49979f4c4a305c010a5bf2"
  },
  {
    "url": "assets/js/29.891f51f8.js",
    "revision": "fe9cd8a63632cedb992f23c88526572b"
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
    "url": "assets/js/31.1835ac6e.js",
    "revision": "03d9019fbf5f4a52e9fb228a0f82a91e"
  },
  {
    "url": "assets/js/32.1723775e.js",
    "revision": "f01aeac24ed63ec993b0038133a71f8e"
  },
  {
    "url": "assets/js/33.64dad00f.js",
    "revision": "189cbc6a71a920f6236fa449665b29da"
  },
  {
    "url": "assets/js/34.bc0ecff8.js",
    "revision": "12c09b1848ccedb9fb7d57cc28b3b201"
  },
  {
    "url": "assets/js/35.fcb68b66.js",
    "revision": "2552b5d352ed4d347085ecfcda943258"
  },
  {
    "url": "assets/js/36.6067056a.js",
    "revision": "980b22f7889cb7ed1ed9a0e7710afdf2"
  },
  {
    "url": "assets/js/37.383a5743.js",
    "revision": "c8cb9ea6aeb1a028cd3d59557beae3e7"
  },
  {
    "url": "assets/js/38.d326a2e7.js",
    "revision": "9ec1a985708e81f5b8f9dd7eab0cdf6e"
  },
  {
    "url": "assets/js/39.e26a7162.js",
    "revision": "e95d469fd4fb2a89071ee45c354ce965"
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
    "url": "assets/js/41.5f8525fc.js",
    "revision": "69f0b891190e509afa242ef70511066a"
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
    "url": "assets/js/7.3fd6903f.js",
    "revision": "a60a27022628ff8f5dd3d446d1c3728f"
  },
  {
    "url": "assets/js/8.a0a318dd.js",
    "revision": "42754691a1b977adeacc5217fcf2a70c"
  },
  {
    "url": "assets/js/9.2d918282.js",
    "revision": "13415bc53f6ba05b4e9020acf97de3d7"
  },
  {
    "url": "assets/js/app.bb5f3f71.js",
    "revision": "5b45bd36ac8d1621195fb622022fb474"
  },
  {
    "url": "common/cli.html",
    "revision": "0e92915f7368f82a5c864c39eb7e4981"
  },
  {
    "url": "common/code-review.html",
    "revision": "85acfc3e42f6557d8b27ce419c9d4e9c"
  },
  {
    "url": "common/component.html",
    "revision": "2b71cc3540136d6c54acd5a73661d3de"
  },
  {
    "url": "common/directory.html",
    "revision": "0697a0cdd158ee7dd00a219e08444016"
  },
  {
    "url": "common/env.html",
    "revision": "d83d1d5163943612a5d44e1ba7312e00"
  },
  {
    "url": "common/index.html",
    "revision": "21a51dd42cc2fba5bc7057108527d34c"
  },
  {
    "url": "common/locale.html",
    "revision": "a6d0e21cb6ea6c660c2cc9d10c2ba54a"
  },
  {
    "url": "common/network.html",
    "revision": "00ac825b749ac83a28d3fb31af9a8c91"
  },
  {
    "url": "common/optimize.html",
    "revision": "5c2b07df0650769a2be6051ad5c356e8"
  },
  {
    "url": "common/permission.html",
    "revision": "f1cd0a80a302cef2b1e985fd21361d52"
  },
  {
    "url": "common/router.html",
    "revision": "4dbb7b671e65c0b5cdca99ddbce32178"
  },
  {
    "url": "common/skeleton.html",
    "revision": "d9db23c2e6b2a8337be9e9fba707cb84"
  },
  {
    "url": "common/standard.html",
    "revision": "bc8511f242f3c52daba6263170605515"
  },
  {
    "url": "common/style.html",
    "revision": "e2001cdb2696c805658954e5d4041781"
  },
  {
    "url": "common/svg.html",
    "revision": "f9bd6e966c091a3e0b3ab62af1cca58b"
  },
  {
    "url": "common/template.html",
    "revision": "92d593e9985ec7e62917b1496c8fd6d8"
  },
  {
    "url": "common/tools.html",
    "revision": "d5aaaccd1db3bd9701ddc56974d18eb8"
  },
  {
    "url": "common/version.html",
    "revision": "51b9ad6a20f1b8aa4b90dfdb6b78d09d"
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
    "revision": "d69299a286440dbf98bd32bc758e046c"
  },
  {
    "url": "experience/index.html",
    "revision": "b17b37594cf98767b303319e56167ed6"
  },
  {
    "url": "experience/mobile.html",
    "revision": "b70a27e696ded882514a0eb7b253c6ec"
  },
  {
    "url": "experience/pc.html",
    "revision": "8144c25feb3b008d7915d02f2c0b8010"
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
    "revision": "369513d68ec8ef9018df5b1ea949c6f8"
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
    "revision": "3c07037f6dad7cfbc2cac12930d32a32"
  },
  {
    "url": "mobile/fit.html",
    "revision": "7819d1e214b1b052ee60937de2271f20"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "414316cc9f803d94cff1a46689f6bbc4"
  },
  {
    "url": "mobile/index.html",
    "revision": "9b3d5534280e3df60cf967c18a3b7230"
  },
  {
    "url": "mobile/install.html",
    "revision": "68205002626989f3b929e768b78f331c"
  },
  {
    "url": "mobile/modules.html",
    "revision": "087ae92c4bf67e6ab32532a1fc26afa2"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "f337a67ebbb6929666f98f7f180ee1be"
  },
  {
    "url": "PC/config.html",
    "revision": "ba54ec70aed626f45533cf2665dcbb0e"
  },
  {
    "url": "PC/directives.html",
    "revision": "33d4b40afb12770e989b9012b0e18a5c"
  },
  {
    "url": "PC/index.html",
    "revision": "f4f79f10413746bdfd00fd524db670e8"
  },
  {
    "url": "PC/layout.html",
    "revision": "9ff57c487e8567fabf630e44defe7146"
  },
  {
    "url": "PC/plugin.html",
    "revision": "e2099e9f866a583938a3d305c7980073"
  },
  {
    "url": "PC/process.html",
    "revision": "c3157b9abb942c9786f234207c09e0ba"
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
