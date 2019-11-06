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
    "revision": "f9826db676265cf3acc125ad9d959ea5"
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
    "url": "assets/js/10.aed98ba1.js",
    "revision": "1a818f65b6783ddc343319fabe660394"
  },
  {
    "url": "assets/js/11.aacdef66.js",
    "revision": "34c8abad4b27d18192cc74d80a2e9363"
  },
  {
    "url": "assets/js/12.d5897fb3.js",
    "revision": "4f52d2d4e4a4c9fdb11a47903c06d946"
  },
  {
    "url": "assets/js/13.8e63321c.js",
    "revision": "0713474b2dac5567eb45980edb681192"
  },
  {
    "url": "assets/js/14.056b9f46.js",
    "revision": "c22ef1fa0e26a940ea9ed883fd171e29"
  },
  {
    "url": "assets/js/15.11a37dd7.js",
    "revision": "6fb417fffd8d1c15f4492dd4ccd8b6f8"
  },
  {
    "url": "assets/js/16.5df4ccfa.js",
    "revision": "70c35f3ddd2a89954a313a470f4fcd4c"
  },
  {
    "url": "assets/js/17.a0e8fefd.js",
    "revision": "7d5855036591135aa6e98c23cb4fa95c"
  },
  {
    "url": "assets/js/18.16135082.js",
    "revision": "10ecafc4be02b589be75fbc66ea4bdc8"
  },
  {
    "url": "assets/js/19.2a07de2b.js",
    "revision": "05f8a81867523a3b6af46c0d67396957"
  },
  {
    "url": "assets/js/2.9f9b5e61.js",
    "revision": "ce94386031d194eb6883570f245b425d"
  },
  {
    "url": "assets/js/20.3f36b90c.js",
    "revision": "7061b8eb36d3bacfdb2e7fb6e37877e8"
  },
  {
    "url": "assets/js/21.7b29f4ac.js",
    "revision": "ffca3210d572f51f603b13a254ae5e36"
  },
  {
    "url": "assets/js/22.86694397.js",
    "revision": "6da2ba5043bbdd840d058120a4b55981"
  },
  {
    "url": "assets/js/23.ea79ce99.js",
    "revision": "f55771a89b45c850f7520e80cedb7e61"
  },
  {
    "url": "assets/js/24.b171b0c8.js",
    "revision": "39776c1ebbc0169d351ed70bba16131f"
  },
  {
    "url": "assets/js/25.cb85bf15.js",
    "revision": "c1e8b1223727459c63b0e4d1db100bd8"
  },
  {
    "url": "assets/js/26.b0d19a06.js",
    "revision": "1037d2193a41f709f760c9c4fba1e41e"
  },
  {
    "url": "assets/js/27.88c02349.js",
    "revision": "55306b0d40686bac817471b92268737b"
  },
  {
    "url": "assets/js/28.6445df0b.js",
    "revision": "32b1dc920897b48f2b18b0dea1719166"
  },
  {
    "url": "assets/js/29.bc4ffb85.js",
    "revision": "e4af3c0740e5edd486839e9372b6b834"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.1d64ee5e.js",
    "revision": "1bc7db0b048a29fd71acc4bca0ec17d5"
  },
  {
    "url": "assets/js/31.374e85d7.js",
    "revision": "442b84d866cc2a2236c8d40b8fff8138"
  },
  {
    "url": "assets/js/32.9557a783.js",
    "revision": "a781186e898933d1c9282747d5f1ed4a"
  },
  {
    "url": "assets/js/33.d469ce52.js",
    "revision": "4222ed2d7b149a76ab25a17fada6b279"
  },
  {
    "url": "assets/js/34.f6071acf.js",
    "revision": "3d9531d9f915cef3a14f07f5d7f22976"
  },
  {
    "url": "assets/js/35.5e4dac9e.js",
    "revision": "b2521bfaf08a7a5fe3ef7061025f10bf"
  },
  {
    "url": "assets/js/36.0ea27c2f.js",
    "revision": "7d0c8670ed1a9ee316b72cf340d6f350"
  },
  {
    "url": "assets/js/37.ac5d9211.js",
    "revision": "58cc0daf68afc13ef6d974d6d9e13fdb"
  },
  {
    "url": "assets/js/38.32c8fbeb.js",
    "revision": "c15f566785e1ad51d777c5b1a816c80c"
  },
  {
    "url": "assets/js/39.9116f524.js",
    "revision": "8093dce2a5d1e937dc3f16bf6c610238"
  },
  {
    "url": "assets/js/4.c45ec80c.js",
    "revision": "6810fc4d93b6a03258e0736afff263d8"
  },
  {
    "url": "assets/js/40.96a6279a.js",
    "revision": "2b04417a92323081b34b7b470e801a68"
  },
  {
    "url": "assets/js/5.201ae859.js",
    "revision": "91bef36cda4ee74da084e51fbe9ed450"
  },
  {
    "url": "assets/js/6.192a86ae.js",
    "revision": "f15cc8960834e09bcef931feefd87e13"
  },
  {
    "url": "assets/js/7.3fd6903f.js",
    "revision": "a60a27022628ff8f5dd3d446d1c3728f"
  },
  {
    "url": "assets/js/8.8f82ad20.js",
    "revision": "dbafd06058a0ff5a2199e8db6a2a1735"
  },
  {
    "url": "assets/js/9.d552dd32.js",
    "revision": "6f6ab21c478ee0e8b86b793b2290af8f"
  },
  {
    "url": "assets/js/app.7e595b9b.js",
    "revision": "65707c9a4a11e080512a912060f04529"
  },
  {
    "url": "common/cli.html",
    "revision": "c0249b74ebc68075ce90faa85165acf0"
  },
  {
    "url": "common/code-review.html",
    "revision": "79fc1f2bf7cf014d14d5547aa7fd9ab1"
  },
  {
    "url": "common/component.html",
    "revision": "0c2c17e18548b09133b5b4a719ae6111"
  },
  {
    "url": "common/directory.html",
    "revision": "b395f4d6c8d39f77e4387134a01dc4f1"
  },
  {
    "url": "common/env.html",
    "revision": "f96d422876b7788708303c6535a81f7c"
  },
  {
    "url": "common/index.html",
    "revision": "84d038c4c3aa316d810ff423b94cc542"
  },
  {
    "url": "common/locale.html",
    "revision": "41b2db22c2ddd3ba1ed5c70fa3f5ebec"
  },
  {
    "url": "common/network.html",
    "revision": "c7973dd15fe1fbead3b8dce13488459a"
  },
  {
    "url": "common/optimize.html",
    "revision": "124160115800a6a5e2c1130ca9d1a84e"
  },
  {
    "url": "common/permission.html",
    "revision": "dd89a5d826377a2ba6ef81685ae89351"
  },
  {
    "url": "common/router.html",
    "revision": "ae81097c61181b603cc50fa836bc978e"
  },
  {
    "url": "common/skeleton.html",
    "revision": "6941aacb814a1b74aed70dbee8116cbc"
  },
  {
    "url": "common/standard.html",
    "revision": "7735676247ad7724ed4278b02517b0f4"
  },
  {
    "url": "common/style.html",
    "revision": "6be4a4d8aef3f613b2ac2487ddff3196"
  },
  {
    "url": "common/svg.html",
    "revision": "78c878b89c148bcb1da68bec41e17100"
  },
  {
    "url": "common/template.html",
    "revision": "b31129ae9f08f55dab63399d7c524967"
  },
  {
    "url": "common/tools.html",
    "revision": "88e699452d7e5765e8308e07ccbbb2d7"
  },
  {
    "url": "common/version.html",
    "revision": "9b4a1bf9567a52ce3f41dd13c2b3ed9c"
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
    "revision": "af18cf09d5dfec75dbc7f39c0bb697d5"
  },
  {
    "url": "experience/index.html",
    "revision": "8362fd046154bb93a4829a2eb6445414"
  },
  {
    "url": "experience/mobile.html",
    "revision": "e8b9c0ca4d0ad8998fe71b3549fafaef"
  },
  {
    "url": "experience/pc.html",
    "revision": "85ddc99320cc1539c5bffc46d863f098"
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
    "revision": "e40590052789d2dd8798db601198c155"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "9e4e48dd868492746ef67835871016b9"
  },
  {
    "url": "mobile/fit.html",
    "revision": "6f939d64e5a483c290f27c2ab2ef8457"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "38b5590a8be932138665626c171b91b8"
  },
  {
    "url": "mobile/index.html",
    "revision": "f3574cc9339c350bf3cffbc90387df1f"
  },
  {
    "url": "mobile/install.html",
    "revision": "6b8510938a777251b51fac6c41fb1389"
  },
  {
    "url": "mobile/modules.html",
    "revision": "b7d64aa742840d9fe829cae9c259b477"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "1367a4ae4a1f669a457cdb584a3916a3"
  },
  {
    "url": "PC/config.html",
    "revision": "5168ab38e36fa167ef3c2a58482a404f"
  },
  {
    "url": "PC/index.html",
    "revision": "c828fb4bb6309a8f964da13b108f49c8"
  },
  {
    "url": "PC/plugin.html",
    "revision": "d54f56a37865662bb4abe828a3cc43d6"
  },
  {
    "url": "PC/process.html",
    "revision": "d801f97e4c167dd1402b619d4e60b1b6"
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
