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
    "revision": "0272d229926c6f7acae3891ef126886a"
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
    "url": "assets/js/10.d7a7c8a6.js",
    "revision": "2ac51f7ebb68933b41ac09dd4ae23cd1"
  },
  {
    "url": "assets/js/11.ba01cf6b.js",
    "revision": "ac6ba3df31fc728cd0ac534cf5faa420"
  },
  {
    "url": "assets/js/12.6c685b8e.js",
    "revision": "290379902f83ac022296cc6feb571f22"
  },
  {
    "url": "assets/js/13.84f64784.js",
    "revision": "d91fd0ac8f79c9d3ee2bc85228bb7fb1"
  },
  {
    "url": "assets/js/14.2844c8e9.js",
    "revision": "dcd16ba5db9c669517ff6d9ec72024c1"
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
    "url": "assets/js/17.eda04c0c.js",
    "revision": "be10653dd5c733c1254a69198e63df93"
  },
  {
    "url": "assets/js/18.e26a0590.js",
    "revision": "b27a7cb9b06aa263bbda2eaa7c6c620e"
  },
  {
    "url": "assets/js/19.81a1192b.js",
    "revision": "599b5cf0e43ef1ef17b4675d059bd726"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.32b4bfac.js",
    "revision": "8d8e9efc2a9fd7146fd051878161e13f"
  },
  {
    "url": "assets/js/21.6d895d98.js",
    "revision": "51f7da7171810aa4b25ffa9772398dcd"
  },
  {
    "url": "assets/js/22.b5d504e3.js",
    "revision": "e80528c6d93606733c920ec128e1140e"
  },
  {
    "url": "assets/js/23.71584362.js",
    "revision": "d18ab58234530fc0eec37b6085d9cd7c"
  },
  {
    "url": "assets/js/24.0f5d5942.js",
    "revision": "3909ecb485d5a5270bbcf568f0a35c54"
  },
  {
    "url": "assets/js/25.6885cd23.js",
    "revision": "9f89ecccc85e094504e1c4e75a018928"
  },
  {
    "url": "assets/js/26.c0ec3874.js",
    "revision": "a54fd539bf6e4ff45b2e63cd9b918a56"
  },
  {
    "url": "assets/js/27.f60d9300.js",
    "revision": "453a02842a2677349096d6479188e1ee"
  },
  {
    "url": "assets/js/28.3dfccb34.js",
    "revision": "f2583c6645cfdc9cdfdbf52290870d37"
  },
  {
    "url": "assets/js/29.cdf7ce3c.js",
    "revision": "bb47ecffe89cc07f6eb4af256799d587"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.abc99679.js",
    "revision": "97f4576c114f944e8a804d5efa2d852a"
  },
  {
    "url": "assets/js/31.a0451503.js",
    "revision": "1844d51f99d8bd82e66b73f1ce32d626"
  },
  {
    "url": "assets/js/32.acd93372.js",
    "revision": "0aedb770b1fafc1d074efe1656b3104b"
  },
  {
    "url": "assets/js/33.1488553f.js",
    "revision": "4ff7cb5f910009a023fd086548f7e2ff"
  },
  {
    "url": "assets/js/34.f7cee3b0.js",
    "revision": "1f4ccf2dca43cefb5549357e50e75832"
  },
  {
    "url": "assets/js/35.4568a978.js",
    "revision": "1e7d63680d1ba8ae0452751a5b3098b9"
  },
  {
    "url": "assets/js/4.6fb07404.js",
    "revision": "cdacccb2ce97835ae4cc80036c4c679a"
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
    "url": "assets/js/7.648e9669.js",
    "revision": "ca6a1705e204611ee0ac991e5a05ccbc"
  },
  {
    "url": "assets/js/8.0aa1ad59.js",
    "revision": "68d40c30162fb9935bf6314f31a4c744"
  },
  {
    "url": "assets/js/9.673c16c2.js",
    "revision": "07732a0b162507d08bc29bea61773ab2"
  },
  {
    "url": "assets/js/app.fc2cfcf1.js",
    "revision": "4774e248bed1bb4d4886edff8f2a1695"
  },
  {
    "url": "common/cli.html",
    "revision": "a660a3706fbe8e1b6fd809e2ea1b98dd"
  },
  {
    "url": "common/code-review.html",
    "revision": "f8b82547b938aaf464d24d72831938aa"
  },
  {
    "url": "common/component.html",
    "revision": "5ea3f8015a2c3f1aa23dd3483ddae26e"
  },
  {
    "url": "common/directory.html",
    "revision": "3dfc42afcbfed839033a67778e942f06"
  },
  {
    "url": "common/env.html",
    "revision": "25f5509c9a2cc05eb418483804e56997"
  },
  {
    "url": "common/index.html",
    "revision": "79424f3eaee1bb77e6bedb472f9e981f"
  },
  {
    "url": "common/locale.html",
    "revision": "21ca0a29d1b8098ae4fc4dcd8b2d23dc"
  },
  {
    "url": "common/network.html",
    "revision": "3365ce8146a1139d81fa007ccff4eee9"
  },
  {
    "url": "common/optimize.html",
    "revision": "cab52108e39437c4aa0d9e2cfeac6547"
  },
  {
    "url": "common/permission.html",
    "revision": "0e4f25805b48e04abfc2cc5583507eb9"
  },
  {
    "url": "common/router.html",
    "revision": "90e790f56fc46cfc71c3c317e354e4e4"
  },
  {
    "url": "common/skeleton.html",
    "revision": "cc33be027da82928e022894d04b7b02b"
  },
  {
    "url": "common/standard.html",
    "revision": "5f9a27afb2d3e1e3033265e3a56513d5"
  },
  {
    "url": "common/style.html",
    "revision": "af5cb33eeaf799f17be94d0c3dd8f65a"
  },
  {
    "url": "common/svg.html",
    "revision": "79f2ce001b69c5fec376dd899ff1dcf8"
  },
  {
    "url": "common/template.html",
    "revision": "f8a1f9e88468af9d599dd6a0c82d2b63"
  },
  {
    "url": "common/tools.html",
    "revision": "03c6324d5e3a75999b9c7e4243a5413b"
  },
  {
    "url": "common/version.html",
    "revision": "639f9018322344037a2ba2ee8abe51ad"
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
    "revision": "2d0e06def3f425568e050aaa84f08dca"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "46c223f624c1b8ca1fcd5ab7c1a5e1fb"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "eeaa14b001e6fa4de6d45a61b6aba21f"
  },
  {
    "url": "mobile/index.html",
    "revision": "32d5891d43751d7bbf70238b7975f939"
  },
  {
    "url": "mobile/install.html",
    "revision": "444a76e2e7e5ac601464c58bdce613a0"
  },
  {
    "url": "mobile/modules.html",
    "revision": "034a5488021f148f235b94b99cd5690b"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "05da1c9ab9631487d7b04ff9b22e7329"
  },
  {
    "url": "PC/config.html",
    "revision": "1e6eb9e87e342890de2faaeae654196f"
  },
  {
    "url": "PC/index.html",
    "revision": "20ec0431f771a3413f301005c51973e6"
  },
  {
    "url": "PC/plugin.html",
    "revision": "0bdda6cf8ae2b8e7dcc93110811637ba"
  },
  {
    "url": "PC/process.html",
    "revision": "ed6acf7cf1baeb0c7b5a70baeffa9d6a"
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
