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
    "revision": "428d87581c7c5160497e0b1002fc46f1"
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
    "url": "assets/js/10.78e12a4b.js",
    "revision": "afd53200cd97c2d2a9dae511af39384f"
  },
  {
    "url": "assets/js/11.24d55fcf.js",
    "revision": "6b0d3a40f52a82630267cb189f39718a"
  },
  {
    "url": "assets/js/12.a3a730f9.js",
    "revision": "b34b4ce3b1a3643800f11d5851d75f41"
  },
  {
    "url": "assets/js/13.1bd719ed.js",
    "revision": "d13d1b3cefa9b81d7476a65c2e1caa5f"
  },
  {
    "url": "assets/js/14.c5348b88.js",
    "revision": "c302fd7575ba9da9a6e0d6291023ba7e"
  },
  {
    "url": "assets/js/15.2ac37c3d.js",
    "revision": "3860ca13d84385d533a5228446c0c81d"
  },
  {
    "url": "assets/js/16.23a2eedb.js",
    "revision": "0561a5c4df3c6c156707bb0117326dfc"
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
    "url": "assets/js/21.02b67ff0.js",
    "revision": "0d9343c8ba0e0ea3ab02f1a087b2bf86"
  },
  {
    "url": "assets/js/22.7d734b29.js",
    "revision": "a11ebead97a56af6c67e599572752c8a"
  },
  {
    "url": "assets/js/23.8e7637f5.js",
    "revision": "a19c1bda7ded095372ee8b230bb950c5"
  },
  {
    "url": "assets/js/24.0f5d5942.js",
    "revision": "3909ecb485d5a5270bbcf568f0a35c54"
  },
  {
    "url": "assets/js/25.24c5b8a2.js",
    "revision": "0f841cf744a6ce8ac33e5bee4bcdec35"
  },
  {
    "url": "assets/js/26.ffcfc4f9.js",
    "revision": "f0b991a406df84bd3009201c98102e78"
  },
  {
    "url": "assets/js/27.4108e693.js",
    "revision": "dfec9b0fa26a0e45367c1acb5fc6b63d"
  },
  {
    "url": "assets/js/28.0c48d306.js",
    "revision": "7fd6c530f9611e124420dbcf363136ab"
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
    "url": "assets/js/31.3f6039fd.js",
    "revision": "103581017fb45e59396f350d3355f3ae"
  },
  {
    "url": "assets/js/32.e9f4cfd3.js",
    "revision": "d99a888319e1231743735d22093720cb"
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
    "url": "assets/js/8.86b7f00e.js",
    "revision": "797cd44a6ea4135c77ee384c1c41afb6"
  },
  {
    "url": "assets/js/9.b5886028.js",
    "revision": "52de19149921e1d048e49462e94ce1a1"
  },
  {
    "url": "assets/js/app.67abe70c.js",
    "revision": "5d87472db6f946d97477614a50c68470"
  },
  {
    "url": "common/cli.html",
    "revision": "c6914b17335d9ce63c03f47d1a8b1875"
  },
  {
    "url": "common/code-review.html",
    "revision": "7cc78dbb8413cfba793077403e08dbd9"
  },
  {
    "url": "common/component.html",
    "revision": "a5cafbd6ee6b01e94066df125b045bcf"
  },
  {
    "url": "common/directory.html",
    "revision": "72129eae1bdbbf8130438b4809a6e07a"
  },
  {
    "url": "common/env.html",
    "revision": "d7d261366f9af5c2f4397e994d2ea468"
  },
  {
    "url": "common/index.html",
    "revision": "8261abb888e150bd7415649f956984b7"
  },
  {
    "url": "common/locale.html",
    "revision": "b10f586428b794be34212d9a08026b7a"
  },
  {
    "url": "common/network.html",
    "revision": "4621238af6c7fadd9e7c69339502b117"
  },
  {
    "url": "common/optimize.html",
    "revision": "d38ebf768e60c3fb22a85ba223f24a09"
  },
  {
    "url": "common/permission.html",
    "revision": "0d612e94cb60acaa0c94eb818ab30090"
  },
  {
    "url": "common/router.html",
    "revision": "53a430b74cd559605fd4e12084d35094"
  },
  {
    "url": "common/skeleton.html",
    "revision": "21bf4128c18de43e5da3a74fcc48b3c8"
  },
  {
    "url": "common/standard.html",
    "revision": "2870cc5bbd7a314fb1800bc2ca6ef3b5"
  },
  {
    "url": "common/style.html",
    "revision": "f5c6e1f0d041581774b938a723105d7b"
  },
  {
    "url": "common/svg.html",
    "revision": "5622aa26c21846e619e08baabcb1e5aa"
  },
  {
    "url": "common/template.html",
    "revision": "2c17fadbed27e7ca1d1f2947d0fac8ef"
  },
  {
    "url": "common/tools.html",
    "revision": "1338cd338594301837666be692c80748"
  },
  {
    "url": "common/version.html",
    "revision": "3ec9d3cf90f6358d6e400ac23826fa4f"
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
    "revision": "3e58aa6231431bd50872085ec9cb7f8c"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "52c56aaf19fe20aa30e0e6693f7ed703"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "ce5095b2dc307b06e423f4dbadcfaa08"
  },
  {
    "url": "mobile/index.html",
    "revision": "eb157ea763ffd3bcebcd22fd801e487f"
  },
  {
    "url": "mobile/install.html",
    "revision": "36e86353c54a072902336d5ec53ea764"
  },
  {
    "url": "mobile/modules.html",
    "revision": "b8cf260d655642bae7b45c53c980110a"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "7d2ccecf1a35dac1e7abf1d993c5f1aa"
  },
  {
    "url": "PC/config.html",
    "revision": "92b8b1b1f9dbde852a877386eb2fd204"
  },
  {
    "url": "PC/index.html",
    "revision": "f022f5b4669fe0b7ad38ec3a0a92587c"
  },
  {
    "url": "PC/plugin.html",
    "revision": "635d2895b80685adcb873dc0c0cda9aa"
  },
  {
    "url": "PC/process.html",
    "revision": "5047fdd259a64b0809276fb913b0573f"
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
