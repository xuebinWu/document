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
    "revision": "56d195cba29d1e9b589fb34abe9672a5"
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
    "url": "assets/js/10.e285c44d.js",
    "revision": "30952d65847c3035f2111840dd9754ab"
  },
  {
    "url": "assets/js/11.4306cece.js",
    "revision": "e84059df915d8939edb61e6cc8e7a4d2"
  },
  {
    "url": "assets/js/12.f5b1c518.js",
    "revision": "7f0e9b260919083cb3b0c1d2b198c41a"
  },
  {
    "url": "assets/js/13.8e9c7c32.js",
    "revision": "ff270c84d13bb3609d09d2e9cf07cf3d"
  },
  {
    "url": "assets/js/14.e65be9a0.js",
    "revision": "80f534b2a7638a3cd3a8f8ee9867823f"
  },
  {
    "url": "assets/js/15.2a1f1953.js",
    "revision": "16d00a9b3b2dd87fb067be92954eacf5"
  },
  {
    "url": "assets/js/16.34a51ab7.js",
    "revision": "77e68d63cfa44c29c400b4119ca4717d"
  },
  {
    "url": "assets/js/17.317d9fc4.js",
    "revision": "61af5639d17082e05dabf427a6dc8de1"
  },
  {
    "url": "assets/js/18.090f041b.js",
    "revision": "9e5f25f2c6d8b9f1b9a60d5b9ece5749"
  },
  {
    "url": "assets/js/19.820631b9.js",
    "revision": "cede29b2c8119f23509f07333d5e6921"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.84ef10d9.js",
    "revision": "1e228d4554108aaef63f8a48c206ed70"
  },
  {
    "url": "assets/js/21.437785af.js",
    "revision": "bec0267668320ce66544ea45285ba59d"
  },
  {
    "url": "assets/js/22.5f2b2a46.js",
    "revision": "25dec1fc45e4bd6452ee04a2a29fd8bc"
  },
  {
    "url": "assets/js/23.588a09a2.js",
    "revision": "23be3f62a3594d388efc46388ee521d6"
  },
  {
    "url": "assets/js/24.68e70217.js",
    "revision": "20e67d0254b9a98d44632faa009aae54"
  },
  {
    "url": "assets/js/25.178a7858.js",
    "revision": "ecaf89984e77454d9d8586ca0d4e48cc"
  },
  {
    "url": "assets/js/26.11dbb967.js",
    "revision": "82d5b9030f5aa8ff55184ef0c6f43356"
  },
  {
    "url": "assets/js/27.b36746e6.js",
    "revision": "805b8a9547b2f7cc6c25caf90513d707"
  },
  {
    "url": "assets/js/28.3a3cc5ec.js",
    "revision": "2c65b94a5c254b20391e6229cf5f1794"
  },
  {
    "url": "assets/js/29.97d8c2ae.js",
    "revision": "1d23df65707228b79646b9038afc4d43"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.6c54aa5b.js",
    "revision": "4ff6cac5bc8c15ff13186061c8677eaf"
  },
  {
    "url": "assets/js/31.e436664d.js",
    "revision": "4d24d5bcf7c2fb4e657028ee89041245"
  },
  {
    "url": "assets/js/32.1ed4f1dc.js",
    "revision": "243f008757fd8d421f63758ade7c94e0"
  },
  {
    "url": "assets/js/33.4c8d569d.js",
    "revision": "8359b7ca663600a839bd4c0affc435a8"
  },
  {
    "url": "assets/js/34.975deefe.js",
    "revision": "01d648b47304413cf0af27cc8b4d6e0e"
  },
  {
    "url": "assets/js/35.aeebe04a.js",
    "revision": "5af833d988f048cebe3cc5c4e26c6987"
  },
  {
    "url": "assets/js/36.22535b14.js",
    "revision": "55b14e313e5c62b62ffeebe531a8ade0"
  },
  {
    "url": "assets/js/37.baa56faa.js",
    "revision": "6f2daf5d6f97b7d4e3f16f9505b8f6ef"
  },
  {
    "url": "assets/js/38.f3c5abe4.js",
    "revision": "27df927423ea8b8a97cb6c062205a612"
  },
  {
    "url": "assets/js/39.45ebfd41.js",
    "revision": "d2beb63f58b9f5f30c2a9a031137b5ec"
  },
  {
    "url": "assets/js/4.36fcc44f.js",
    "revision": "7f6e73a74a4b2fe6efd88856a833f86b"
  },
  {
    "url": "assets/js/40.7d0fbc94.js",
    "revision": "ab9fabaa993cceb0eb97f82bcf73c89d"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.94c365dc.js",
    "revision": "9f21ccf80e29b226817c053d38157aca"
  },
  {
    "url": "assets/js/7.d180dc24.js",
    "revision": "73493b06d7937599454a31076d953009"
  },
  {
    "url": "assets/js/8.fb7e391e.js",
    "revision": "066f7051acc91afacffd9fa89abfbc95"
  },
  {
    "url": "assets/js/9.685bf3f2.js",
    "revision": "e2ab4d90628996eb272c6108fd40232d"
  },
  {
    "url": "assets/js/app.1cc3a349.js",
    "revision": "b3955cdc12dc294cb3f2203d2644b644"
  },
  {
    "url": "common/cli.html",
    "revision": "5d2b22430f58467295d73ef754a9967b"
  },
  {
    "url": "common/code-review.html",
    "revision": "d1f2fcc40a50bc50c01254880bdc0e06"
  },
  {
    "url": "common/component.html",
    "revision": "90dff9373af555a594177c830c0a4641"
  },
  {
    "url": "common/directory.html",
    "revision": "8a22d300d9a33aee9f4a4491e5ba8b13"
  },
  {
    "url": "common/env.html",
    "revision": "84abc6f9dd9a791877d1c3806582632e"
  },
  {
    "url": "common/index.html",
    "revision": "d0365a484942d5182899e60566160685"
  },
  {
    "url": "common/locale.html",
    "revision": "6bff3377c58e99fabc86e700cf29365b"
  },
  {
    "url": "common/network.html",
    "revision": "e8fcf3a7f303e577fdf87b1a7b4173c2"
  },
  {
    "url": "common/optimize.html",
    "revision": "9ce5c8f98cdab92fe4cc4809f61aa471"
  },
  {
    "url": "common/permission.html",
    "revision": "4dc7d6f3b902dc19f4e80ea3ce88d81a"
  },
  {
    "url": "common/router.html",
    "revision": "035abe0f8f30d93d7a2d1deb1b2da337"
  },
  {
    "url": "common/skeleton.html",
    "revision": "c3cac4e0cbadf4338ee5166138eefbb0"
  },
  {
    "url": "common/standard.html",
    "revision": "9964e58389654612e4b95d013bcc2deb"
  },
  {
    "url": "common/style.html",
    "revision": "c5b3f9e1e480a0263ced12c3ca30ec4b"
  },
  {
    "url": "common/svg.html",
    "revision": "22980d4fec3fafa7f44aff5319c160ea"
  },
  {
    "url": "common/template.html",
    "revision": "3c540cb94eef7f508ad1e9afb705c5a2"
  },
  {
    "url": "common/tools.html",
    "revision": "b1ef11cddfb797605e4c7f1b92b2940b"
  },
  {
    "url": "common/version.html",
    "revision": "0adeaca14ddb418a7f5b4dcf07339719"
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
    "revision": "1a4f0b9dfa5ef2640c04de7e07ba5bef"
  },
  {
    "url": "experience/index.html",
    "revision": "ab8bc819a72eaafd4728dcf03ef6aedb"
  },
  {
    "url": "experience/mobile.html",
    "revision": "fe6d8e4c24864980afe494c9e3e860b1"
  },
  {
    "url": "experience/pc.html",
    "revision": "e179cffaa063eb663f41ed2669327154"
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
    "revision": "0f6499347d4db998726aca8ff1022e89"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/debug.html",
    "revision": "f9755c76f8c0c0b969d406e12b3e02a0"
  },
  {
    "url": "mobile/fit.html",
    "revision": "5fb58e4e97969989b8289293a1341327"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "c1dc2196a2df83b41ef5e1e3c4b66c1a"
  },
  {
    "url": "mobile/index.html",
    "revision": "e841500822ffe22cabcaa4a51189f389"
  },
  {
    "url": "mobile/install.html",
    "revision": "da3eed024282d79eca34714762966fce"
  },
  {
    "url": "mobile/modules.html",
    "revision": "e9d38f52435ac672eee007f067ccc94b"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "030cc576f541f5ec73a7160eaf9cea75"
  },
  {
    "url": "PC/config.html",
    "revision": "2b85ad02f6d5c38091159975553da711"
  },
  {
    "url": "PC/index.html",
    "revision": "6d1775cd86f56a07d7cca7d52852324d"
  },
  {
    "url": "PC/plugin.html",
    "revision": "da59375205a7eecd98e7976530c50f80"
  },
  {
    "url": "PC/process.html",
    "revision": "f5ad7d71edbb873c80ec30cd15f9e6a4"
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
