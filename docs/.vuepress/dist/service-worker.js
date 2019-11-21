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
    "revision": "65d63cbc5816b88b82e0cdfd0a794139"
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
    "url": "assets/js/10.09cf1e6f.js",
    "revision": "ea7ce38510039cb7641f2c9ad8c9362e"
  },
  {
    "url": "assets/js/11.3f9b56b2.js",
    "revision": "60ea61ab3087da6075aa90377bddbbeb"
  },
  {
    "url": "assets/js/12.1b27162f.js",
    "revision": "bb881c50dd84ff5524528c5e428eede0"
  },
  {
    "url": "assets/js/13.eacbe05e.js",
    "revision": "f85e8709cc46a6beca2fc61fb1cc630e"
  },
  {
    "url": "assets/js/14.51df97b6.js",
    "revision": "c50451e99a341dccadbe9d297c87085f"
  },
  {
    "url": "assets/js/15.1d78f955.js",
    "revision": "de2d522b986272bbeaa55b2e3459be3d"
  },
  {
    "url": "assets/js/16.6c79fbe7.js",
    "revision": "d4a92c9ef26965780bb0db525aa876f7"
  },
  {
    "url": "assets/js/17.44daaa13.js",
    "revision": "84025b22a3f2004361e8c98d096049dc"
  },
  {
    "url": "assets/js/18.629779e5.js",
    "revision": "dacc96339aa0970761dbdd9cf512c8df"
  },
  {
    "url": "assets/js/19.2ab4a375.js",
    "revision": "23dae19bf226aef76b47eee5d524a948"
  },
  {
    "url": "assets/js/2.9d4046af.js",
    "revision": "27d035066564a24f76330c141bc1111d"
  },
  {
    "url": "assets/js/20.247086a9.js",
    "revision": "e620fdb312161deb003e989be1dccfdb"
  },
  {
    "url": "assets/js/21.5c7a0499.js",
    "revision": "32a70e8dd327105bdaaac127ff429228"
  },
  {
    "url": "assets/js/22.22fab03c.js",
    "revision": "4ef8e705de2c4da0373c8f20f2a698e7"
  },
  {
    "url": "assets/js/23.d185a71e.js",
    "revision": "e4070cced2a098f5e1d8e03a73a5f503"
  },
  {
    "url": "assets/js/24.6eb02421.js",
    "revision": "9f6261120c17c8a97be0618c933f7cde"
  },
  {
    "url": "assets/js/25.7220a5c0.js",
    "revision": "c97abbc1d24693d72295bfcba9ffd39b"
  },
  {
    "url": "assets/js/26.3170b4a0.js",
    "revision": "6e5faf75b16851a988faaadf79ea1cc5"
  },
  {
    "url": "assets/js/27.b67c6475.js",
    "revision": "58f0fb37e406ae83b1485a9768a459ee"
  },
  {
    "url": "assets/js/28.1b947005.js",
    "revision": "7291f4818e63bed84f4ce4982037ce8a"
  },
  {
    "url": "assets/js/29.251bf52f.js",
    "revision": "02946ccf7eeef3782a5789d357a64859"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.19a9055c.js",
    "revision": "8af2e98d1525d4f44ca1ea5233e0d3bb"
  },
  {
    "url": "assets/js/31.833581fc.js",
    "revision": "340365d2a01c453ded0f83c3b775e35a"
  },
  {
    "url": "assets/js/32.f28ec50a.js",
    "revision": "0f3c7b8136c4ac5f2ded6f9a610a97bb"
  },
  {
    "url": "assets/js/33.ee959a6b.js",
    "revision": "6ca74104f0af69f2ac09d4785cc1499d"
  },
  {
    "url": "assets/js/34.74f01a9b.js",
    "revision": "d2c34bfa5ff4f9bacadbebae50f06dfe"
  },
  {
    "url": "assets/js/35.b11410b8.js",
    "revision": "402f7b9dfcf86e9a015b5d369759d5ca"
  },
  {
    "url": "assets/js/36.99c79904.js",
    "revision": "e866ec3657ad6e49f0b79f794ab0803f"
  },
  {
    "url": "assets/js/37.74492d97.js",
    "revision": "5a00f62904c06d9b021f7369c8b9e45d"
  },
  {
    "url": "assets/js/38.eff99ada.js",
    "revision": "e48fd6e569715ebf091f2c8ffb2452c5"
  },
  {
    "url": "assets/js/39.209a9243.js",
    "revision": "ae37b88de0c0cee01cea82dcf1e23969"
  },
  {
    "url": "assets/js/4.bffd757c.js",
    "revision": "12df2dc667b68d00a29116818db0d5c0"
  },
  {
    "url": "assets/js/40.71bc09aa.js",
    "revision": "d52d6ff76d1af1ff04272145d4e3f77e"
  },
  {
    "url": "assets/js/41.4ffff6d6.js",
    "revision": "0390cda3216ea4219f20e4c507773952"
  },
  {
    "url": "assets/js/42.e03ccd49.js",
    "revision": "dd2fc4896b23d531ac876b67bc281643"
  },
  {
    "url": "assets/js/43.8a06bfc4.js",
    "revision": "35375908d7776ca194e47505ab638460"
  },
  {
    "url": "assets/js/5.201ae859.js",
    "revision": "91bef36cda4ee74da084e51fbe9ed450"
  },
  {
    "url": "assets/js/6.f5b94ef0.js",
    "revision": "860c1411f0da5b03510447ef49dac37a"
  },
  {
    "url": "assets/js/7.bea4d2bf.js",
    "revision": "03eaf21f2835ae9518487c787eb4a6f1"
  },
  {
    "url": "assets/js/8.5e167782.js",
    "revision": "5e01faa1a3bb3268cdc559c43940adb4"
  },
  {
    "url": "assets/js/9.2e6e0ea7.js",
    "revision": "5955811bf5ff4ab4c8306260ec07555f"
  },
  {
    "url": "assets/js/app.b98af68c.js",
    "revision": "376f3cd47c9abd85b2cdc081e707726d"
  },
  {
    "url": "common/cli.html",
    "revision": "6252f6f8e5c730dd090af4c1e3a687eb"
  },
  {
    "url": "common/code-review.html",
    "revision": "71c6469128c7d824347fcc28fdc7e6eb"
  },
  {
    "url": "common/component.html",
    "revision": "cd40a956a53322da73dabb5e5fe68725"
  },
  {
    "url": "common/directory.html",
    "revision": "ccab20bee4748c68b570158b5822af46"
  },
  {
    "url": "common/env.html",
    "revision": "3678643377131112ace1703c0988b2d7"
  },
  {
    "url": "common/index.html",
    "revision": "76550896da19e97c24e31332e6f6b932"
  },
  {
    "url": "common/locale.html",
    "revision": "44dcd5a4a13088e981312ed8ae45301b"
  },
  {
    "url": "common/network.html",
    "revision": "8c571ad2cc042feab0d8c853b7ca7e40"
  },
  {
    "url": "common/optimize.html",
    "revision": "7367cff5bf31142784ba32ff58b354b6"
  },
  {
    "url": "common/permission.html",
    "revision": "a6e6a7f4ae4b67baab41cd31c71dfaf7"
  },
  {
    "url": "common/router.html",
    "revision": "a6f03e173f5498187a7e60850350b260"
  },
  {
    "url": "common/skeleton.html",
    "revision": "839182604288879435df78c6af0d97d2"
  },
  {
    "url": "common/standard.html",
    "revision": "7b8ca3253323f4e0da8b4aa829c80acb"
  },
  {
    "url": "common/style.html",
    "revision": "c29c7aaff4cf81074bb2e84ada4a74bc"
  },
  {
    "url": "common/svg.html",
    "revision": "a10e4e72e5d76c0a1d1db0e23651c4ab"
  },
  {
    "url": "common/template.html",
    "revision": "2405e2e4e07f66850208ad68bb1dd70b"
  },
  {
    "url": "common/tools.html",
    "revision": "a3206be7e9b38d00bfdd4ecedaf71d57"
  },
  {
    "url": "common/version.html",
    "revision": "41f836e07d6974bf0dcf3357e5ae006c"
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
    "url": "emanage_dev.png",
    "revision": "800a3d5ebc0559de2187db9af4c08de2"
  },
  {
    "url": "experience/hybrid.html",
    "revision": "ec76476050a1a252a402171244d6a663"
  },
  {
    "url": "experience/index.html",
    "revision": "2e5d4fc85f59e6a50e8cd0e1c598d355"
  },
  {
    "url": "experience/mobile.html",
    "revision": "a8f3090e911dfcf6c585447f232e9159"
  },
  {
    "url": "experience/pc.html",
    "revision": "b5c48060bd25d056b9752afbac569f5d"
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
    "revision": "54e08b4b5f11c42df11341e2b0f9194d"
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
    "revision": "408620fcf75978d43c6560dfbe59b7e3"
  },
  {
    "url": "mobile/fit.html",
    "revision": "bd44e22bf37155ab7cbbf0f3067f1b13"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "502ed20c7a50c779a3946ed9ac971ebc"
  },
  {
    "url": "mobile/index.html",
    "revision": "68548455ba77bfef8fddd6cd6fd567b0"
  },
  {
    "url": "mobile/install.html",
    "revision": "0cfebfbf67c61c7fa357a972be4cb012"
  },
  {
    "url": "mobile/modules.html",
    "revision": "744e8434f663216a3f43be90376bef39"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "23ba7a8e0a266ce99a116f4da55d5d41"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "1059f3bc12aa400f2f76e8b88086a582"
  },
  {
    "url": "PC/config.html",
    "revision": "e556b1836657dd088b31b182a8332fac"
  },
  {
    "url": "PC/directives.html",
    "revision": "fe32a4df9c857f829704712f50f29de6"
  },
  {
    "url": "PC/index.html",
    "revision": "445602a2e4ded5bc5f9eac9526e8c953"
  },
  {
    "url": "PC/layout.html",
    "revision": "837e6901d4fe4c5eaf8e7d4f28e76ac5"
  },
  {
    "url": "PC/plugin.html",
    "revision": "db75256adbff754a1da9728546015751"
  },
  {
    "url": "PC/process.html",
    "revision": "10def241e4fa6c6d3f9a0e080c360f4d"
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
