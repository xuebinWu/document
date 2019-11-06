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
    "revision": "ae279957ba3879159bf22b181276e118"
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
    "url": "assets/js/10.ec6a54cd.js",
    "revision": "1c109e64cbf2bd8b39075846072b3718"
  },
  {
    "url": "assets/js/11.9c3abad5.js",
    "revision": "0c45f2a356b19cb2cf77651acca006af"
  },
  {
    "url": "assets/js/12.9e9f29bb.js",
    "revision": "cffae17e050bc04189a1651cfe272a3d"
  },
  {
    "url": "assets/js/13.06070635.js",
    "revision": "431d6d9b49f061d33e118fad1112731f"
  },
  {
    "url": "assets/js/14.23550c1a.js",
    "revision": "72ec556fb89fe0ebfdbe931eec92cb3c"
  },
  {
    "url": "assets/js/15.e0acdff2.js",
    "revision": "b48f378a65c36f92bd0ae2ad87ccb193"
  },
  {
    "url": "assets/js/16.9be30e89.js",
    "revision": "a0a8804ef3c2355366d084291f7becd0"
  },
  {
    "url": "assets/js/17.32a362cc.js",
    "revision": "adaca17d514b27ce11992bff7cf2d8b5"
  },
  {
    "url": "assets/js/18.fb98513f.js",
    "revision": "dfdcc9e46d1d0a22fbddf72c2057d3d3"
  },
  {
    "url": "assets/js/19.f26e534c.js",
    "revision": "b7ad73c00797ba4555c4b073ec0b9ea9"
  },
  {
    "url": "assets/js/2.2018ae8e.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.e8b944ca.js",
    "revision": "ae7568be31b54b3e49dfd19863ba22f4"
  },
  {
    "url": "assets/js/21.92e91483.js",
    "revision": "c52b2cbaed8551584e3fb3815145f792"
  },
  {
    "url": "assets/js/22.978379e7.js",
    "revision": "ab26f4573776895a3c9935013de18f91"
  },
  {
    "url": "assets/js/23.fe4128c0.js",
    "revision": "86cb7bbad1a508970e72748efc7c28e9"
  },
  {
    "url": "assets/js/24.cdfcd3d3.js",
    "revision": "68747c4fe8c443c41e3f76ec6bf7a9bc"
  },
  {
    "url": "assets/js/25.94dad814.js",
    "revision": "75e66b20295a047442851ceccdee0128"
  },
  {
    "url": "assets/js/26.a3cf1b7a.js",
    "revision": "a665642de6dcd59ee5559cfbc4b66a13"
  },
  {
    "url": "assets/js/27.aa4c80a9.js",
    "revision": "ca89f81ca42c2cfacf33ed7ab4011c1a"
  },
  {
    "url": "assets/js/28.1911090d.js",
    "revision": "462a8a9d420ae51a605919a81f262275"
  },
  {
    "url": "assets/js/29.124828e3.js",
    "revision": "e36ff65c204f00af8b7bf9e6120c3b93"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.56f7f234.js",
    "revision": "77e24f00a1650317ab05b351046a0289"
  },
  {
    "url": "assets/js/31.1d8e443f.js",
    "revision": "d005831c0c10751bb530f3173c066a61"
  },
  {
    "url": "assets/js/32.b962e69f.js",
    "revision": "1961f51f4105c67f76890df1fa2b05a2"
  },
  {
    "url": "assets/js/33.6fcc9693.js",
    "revision": "62aea2836b0f52950477a4fa93be3485"
  },
  {
    "url": "assets/js/34.0a58194f.js",
    "revision": "d153542f846ae070b9603b2d125f7f77"
  },
  {
    "url": "assets/js/35.15b958bc.js",
    "revision": "1eaf82ff8da59d916c03dbfe0c3406c6"
  },
  {
    "url": "assets/js/36.579ac9fe.js",
    "revision": "1782c1c1bfc817cc28f905db894462da"
  },
  {
    "url": "assets/js/37.b377b89f.js",
    "revision": "15e1fd93d254ab7a98315392cb9c1222"
  },
  {
    "url": "assets/js/38.6e3e088f.js",
    "revision": "6bc2ffbe621cc151e05e673271e83d57"
  },
  {
    "url": "assets/js/39.a7d03c2d.js",
    "revision": "9a33fddef62e5eb0359d956671c73235"
  },
  {
    "url": "assets/js/4.36fcc44f.js",
    "revision": "7f6e73a74a4b2fe6efd88856a833f86b"
  },
  {
    "url": "assets/js/40.e93331b0.js",
    "revision": "fcd3822264ccb5018b8adf76e3bc9836"
  },
  {
    "url": "assets/js/41.1ae31c53.js",
    "revision": "a48b7522b48405c2307b25ed5a31846a"
  },
  {
    "url": "assets/js/42.6f53c5a0.js",
    "revision": "960dda1b439444f3bace6c80e25412d2"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.98cc65f3.js",
    "revision": "af01b5235586608572443a2e92a194cc"
  },
  {
    "url": "assets/js/7.676a42ec.js",
    "revision": "f8972b8f7cc9278aec9d744b95bd1c63"
  },
  {
    "url": "assets/js/8.47a8eee0.js",
    "revision": "93b5a7fa2f2c1aeb0cad5b88f7e86311"
  },
  {
    "url": "assets/js/9.e55decf5.js",
    "revision": "59f3670d0195705799e2fdbcaf4ef208"
  },
  {
    "url": "assets/js/app.ce9f4b7c.js",
    "revision": "2a099c31d7e5ad1d991de96ced6e9155"
  },
  {
    "url": "common/cli.html",
    "revision": "3472c36baf5dae2bcdc492d42d448826"
  },
  {
    "url": "common/code-review.html",
    "revision": "40c1d5eccba9aee286b6631c86380887"
  },
  {
    "url": "common/component.html",
    "revision": "f88b1f1ee2d3a7e32c2cbc7db2db824c"
  },
  {
    "url": "common/directory.html",
    "revision": "8df1c5685e19a737351487e913ecea7c"
  },
  {
    "url": "common/env.html",
    "revision": "052898e8a60ba7209eca1c7de04f9d55"
  },
  {
    "url": "common/index.html",
    "revision": "aa082e5e6ffb08521bc85e0296423327"
  },
  {
    "url": "common/locale.html",
    "revision": "baaadf535ddb3e37e3b84b80b99ced94"
  },
  {
    "url": "common/network.html",
    "revision": "fced218e1f0536a9750423e9edcc4988"
  },
  {
    "url": "common/optimize.html",
    "revision": "9b6d5463328f8ff9603316ec3fc4fed4"
  },
  {
    "url": "common/permission.html",
    "revision": "bee71d2b792f1ac6c4214ab342dc3c48"
  },
  {
    "url": "common/router.html",
    "revision": "14450154cb4123abb1f6e3063b7da9d5"
  },
  {
    "url": "common/skeleton.html",
    "revision": "6de2b0987b2c1864856f7e8cae4e1f7c"
  },
  {
    "url": "common/standard.html",
    "revision": "d1d660c2d61c422364acdf45f7022510"
  },
  {
    "url": "common/style.html",
    "revision": "c687321a347cc91a0775b9729f263997"
  },
  {
    "url": "common/svg.html",
    "revision": "4c5781838a0dbc11d7973f6c065b02a0"
  },
  {
    "url": "common/template.html",
    "revision": "429c045d25db2ba4ea9118473a9f376f"
  },
  {
    "url": "common/tools.html",
    "revision": "352f2596b25da5d453cc7bb4c18dee59"
  },
  {
    "url": "common/version.html",
    "revision": "9299e668429b78c726c9498562b67abe"
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
    "revision": "d76264c240cb4eecf8d05fb18c8d2888"
  },
  {
    "url": "experience/index.html",
    "revision": "3e0fd3d0ad64e5fe2da7b14a4518e99f"
  },
  {
    "url": "experience/mobile.html",
    "revision": "e07f6fd8e267c1f6f8d353b36f5e4ebb"
  },
  {
    "url": "experience/pc.html",
    "revision": "a60c3b59662135ace772fcc498123a1d"
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
    "revision": "92a55ec953222286eb19ca4e84f6cbc0"
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
    "url": "mobile/debug.html",
    "revision": "51d2fcdb00b8b523165f218630692dd0"
  },
  {
    "url": "mobile/fit.html",
    "revision": "ea9e8b4740ca99c1dee186d14ee20cd9"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "348cde41a3a9c68acc9971e152333395"
  },
  {
    "url": "mobile/index.html",
    "revision": "0929b2d6eaf1a07623fd2c3aa26be344"
  },
  {
    "url": "mobile/install.html",
    "revision": "80073b473245903acb4a23848296b775"
  },
  {
    "url": "mobile/modules.html",
    "revision": "b44cc840dd081ab855eca32ad5ec93d2"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "1de2fad51e710d8dfcb27467cba7b109"
  },
  {
    "url": "PC/config.html",
    "revision": "fed9db11a0e1a63c296ccf3e8b3c002f"
  },
  {
    "url": "PC/directives.html",
    "revision": "f9cd354b03fb13cff52b83bab01ed56a"
  },
  {
    "url": "PC/index.html",
    "revision": "571f48146c3bc44ecb7892942cd9b8bf"
  },
  {
    "url": "PC/layout.html",
    "revision": "f3fdd7c35c98c3a164449e1756481b41"
  },
  {
    "url": "PC/plugin.html",
    "revision": "38ce1e20d8cf9098a04f66b1597f3787"
  },
  {
    "url": "PC/process.html",
    "revision": "00df83710e6bcbc4b3e13abd2ca8be8d"
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
