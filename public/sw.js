if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return r;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/New name 1.svg",revision:"58aa6ff715f8d8ad72468d90662d264d"},{url:"/New name 2.png",revision:"6adca9ed29c9614166563698bb6af702"},{url:"/New name 2.svg",revision:"f6fa9561e4ccbf8410f352f4569249c5"},{url:"/New name 3.svg",revision:"90c5dcd87988b7d13b4149ac0946e530"},{url:"/_next/static/RAKfiMZey-PkBifjBp8mI/_buildManifest.js",revision:"1163e1deaaa04a47d93975955638ba54"},{url:"/_next/static/RAKfiMZey-PkBifjBp8mI/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/10.030b66957866d1a1691b.js",revision:"2640a9c10636eb7a000a35edbc4b3c6b"},{url:"/_next/static/chunks/11.e7dd0ddbc588dd28f49a.js",revision:"bba93e9beca1f65533e04444f1f0fd64"},{url:"/_next/static/chunks/12.694f9ef007705cebb576.js",revision:"f098791730230a6c408e302e65d7309d"},{url:"/_next/static/chunks/13.a1cba4c24d8dc67f965d.js",revision:"9daed6c1e0517b9a54ae77597c55a6f3"},{url:"/_next/static/chunks/14.0e2d97e13abf6910e3c9.js",revision:"93851f4ccca450975dc083a42f33fbd4"},{url:"/_next/static/chunks/17a64c0696f5b399c8a2b3cfc08b3205652fc163.8ae25983b7b1bf88bc83.js",revision:"56163fa82b44790f9ff9e16ee2def3e7"},{url:"/_next/static/chunks/5c991bd3979308779d425353ac9f9a7780f27ea6.641a9d11de2ac677153e.js",revision:"bac9d50a8ef759bfd7f46bd479a65d9b"},{url:"/_next/static/chunks/5d670c4a2ef83e79df7fcc2afa8889fb2e01ff1d.93adb0b2bb01b362f152.js",revision:"d5bc33b920c0a81fb0311c6b38749fc5"},{url:"/_next/static/chunks/5d8bd0ec69dd720749a9508d46c2296b2159a24f.ef24e64807c09f2a06bf.js",revision:"52da2131e38852136d74fe40e3e6ef99"},{url:"/_next/static/chunks/710dc3f99d3106524f2f8a4e936d596700cc5fd5.1f52a3ec41a5d5095e70.js",revision:"6133f1603763fdda32fc7f0dd21984f6"},{url:"/_next/static/chunks/b204dd143b69f8f6c61bed99d066a27225964e9d.5a4405d86d1009f95cfc.js",revision:"1106ce1add9fc2df897fd67e7afc443e"},{url:"/_next/static/chunks/d3a6511c.082508ba022a9839c0eb.js",revision:"1c52964f8a3254cb2484ddb77c0856a9"},{url:"/_next/static/chunks/f1d33384f6e5e1a32ef0c8e6f444c3a49df1d39b.5da2f41d8576235feebf.js",revision:"725ef8c84fb8409e8f21248d827eb25c"},{url:"/_next/static/chunks/f65a48b9.418d4ff76c2ba4939836.js",revision:"305d137387fdea8021bb9f68e0d5ee3f"},{url:"/_next/static/chunks/framework.0a4ee3448e098c5f4823.js",revision:"820a5cecd7b62124aa3d862a5ef39f31"},{url:"/_next/static/chunks/main-52cf60427352629233e7.js",revision:"a95a20ae8a2107b69acf35b11bcad48c"},{url:"/_next/static/chunks/pages/_app-764cb4b7dac51458b9d2.js",revision:"11dcac3d02f7c049d386bd1689743038"},{url:"/_next/static/chunks/pages/_error-fe9410a85b60e38f346e.js",revision:"761e586ef24e3cb0b8bcb666ac94681e"},{url:"/_next/static/chunks/pages/about-1cb638bab3acb5f9954b.js",revision:"ccade671e16aa59370fe9dd2fd6bf9b1"},{url:"/_next/static/chunks/pages/account-5b23c602af6f14937916.js",revision:"d857f93327e279e6e1ee632190e65c9e"},{url:"/_next/static/chunks/pages/account/%5Baccount%5D-3213a42822deb86a0b3e.js",revision:"922f71dbfb500a7ba6de8f5ee5818d0f"},{url:"/_next/static/chunks/pages/components/advpreview-38ea62907146f9dfc7aa.js",revision:"24fc90b5a1342a26985b413f0f21d8cd"},{url:"/_next/static/chunks/pages/components/login-83e0b146e296ee449597.js",revision:"267c35f1d9320ec29b64e66d374ca185"},{url:"/_next/static/chunks/pages/components/navprop-6cd6cd304810253a18d2.js",revision:"8e74cf1eed476f6bb96f07ca1eae8404"},{url:"/_next/static/chunks/pages/components/offlinepreview-96a9c8ee59967b579420.js",revision:"01cfa4a92110450eda3919e03ba95492"},{url:"/_next/static/chunks/pages/components/preview-45f324023e139d8e81cb.js",revision:"f5022651c852102dd23540db4a5fc253"},{url:"/_next/static/chunks/pages/components/register-5e358c24e0d28ff1aaf2.js",revision:"66fa217af1698fac5f7d24227bbacba0"},{url:"/_next/static/chunks/pages/components/search-a46e49fc1725d5b5afc5.js",revision:"b4db9482dbc9729ec70ee97e38bc790a"},{url:"/_next/static/chunks/pages/discovered-c1305944474e069b0abf.js",revision:"4a9a0a160c8228d2c3aa6beb5dd5ebbd"},{url:"/_next/static/chunks/pages/enter-5617536982076d83f50a.js",revision:"7e379ff7159256594eae6ae022cfcbed"},{url:"/_next/static/chunks/pages/found-77f578c8da1754ab69a6.js",revision:"3bb80d79c0226f158cd2a61893157b3c"},{url:"/_next/static/chunks/pages/index-fe0dfa159bb15533c8af.js",revision:"fd5e9a59b46434da6bd2d9e7969053fb"},{url:"/_next/static/chunks/pages/myaccount-4e0a4ec40f2279c40a05.js",revision:"5a148ee4127dac05812e98f05ae6bfcc"},{url:"/_next/static/chunks/pages/navbar-7da1419bbb3809f9c7a2.js",revision:"3b633c1cb84296315a619b8643d5513a"},{url:"/_next/static/chunks/pages/new-7933e37cec02121301df.js",revision:"f5629323e8a4432a31b19fc7858e127f"},{url:"/_next/static/chunks/pages/project-5d411f7241d1bdfa056b.js",revision:"55cb769175d676bd1e3f094e7f42afd7"},{url:"/_next/static/chunks/pages/project/%5Bproject%5D-69d4dc14cc1ab6c083a3.js",revision:"52f7abeb38ca752186b994e64771fbe6"},{url:"/_next/static/chunks/pages/test-ffec2d1567c49413542f.js",revision:"36db2ffcd0f3910994c7d4575f841c73"},{url:"/_next/static/chunks/pages/update-585876e040ddfddf0b24.js",revision:"af1a871b7b6c43000c6d277b7f8b525d"},{url:"/_next/static/chunks/polyfills-0855fbe11b6b76477d67.js",revision:"8ac1fe55622c8ef36882fce259be3d58"},{url:"/_next/static/chunks/webpack-08e768079e885859488b.js",revision:"801a5fa8cbbdb76000b008927fc9c00d"},{url:"/_next/static/css/0ec0f34f282419edb38f.css",revision:"cb630e6649074cdb63c3b155756c486f"},{url:"/_next/static/css/280b014e83d709ef3962.css",revision:"80f8116e7b51b6860ff1e34c0d3e6bfd"},{url:"/_next/static/css/33e876e74b2b4de609e0.css",revision:"01b5d5567ddea54f04a7d872f1956d3d"},{url:"/_next/static/css/38a0dcdd4f34c7bb795b.css",revision:"0868c0fec352f0fc2ad533b470afd349"},{url:"/_next/static/css/4b49b5945f30581498e1.css",revision:"4011d7b911692a40ba7ebb8ca52f869d"},{url:"/_next/static/css/5e660376b3ac0cf8f8b7.css",revision:"7065a586d4124edea09a17cf501f4527"},{url:"/_next/static/css/6430ebf87d8334160780.css",revision:"f7d461669606dd02879ee5e081407505"},{url:"/_next/static/css/99d6acf92fc20ac840a8.css",revision:"81d9979d02371e7b12b97b4dd217bafe"},{url:"/_next/static/css/b40774855bc1a2bd5995.css",revision:"6c732e9071874a557e6f8c8de7fc0d33"},{url:"/_next/static/css/bc72398ffa88d19ac0c4.css",revision:"27b25a7be1a454d9da1d8794aed50d62"},{url:"/_next/static/css/dc2a601296ba8f86d973.css",revision:"aaf0da29ac7d6800a1ca5d2e9e8aac7a"},{url:"/_next/static/css/f8b12bb91f2f117e0b76.css",revision:"be9bca35fcf3ea6ae456f94a30a1e769"},{url:"/_next/static/css/ff439acc10de92ef9457.css",revision:"0e8f379db7154d7b3a1ca8270e13ea91"},{url:"/betaE",revision:"bed072aab213152adf8ad27d691009ad"},{url:"/book.svg",revision:"1c34a91a1b62b45f8f800a8ae19eb47d"},{url:"/book1.svg",revision:"6ce80fd7ac9c7d18c2730940bc3a2679"},{url:"/bootstrap/account.svg",revision:"4b8baf5dbd2124ac873e9b79b45ec846"},{url:"/bootstrap/add.svg",revision:"95af6cd6e7cf0386344e3a227a85b0ef"},{url:"/bootstrap/enter.svg",revision:"e45708fc6b4da4859508eaf41473a6e1"},{url:"/bootstrap/home.svg",revision:"8baca7a8c0e53c838843eb265b3bb2c3"},{url:"/bootstrap/search.svg",revision:"0002e34d846137446492ae748b1c18ca"},{url:"/cards.jpeg",revision:"7bf4b0c3d6219dbad8e86b3b51ae23d2"},{url:"/delete.svg",revision:"5d27f4107b5b7ab23707c797845acb39"},{url:"/edit.svg",revision:"e2cdb632d26242b019c9d3a81bc9cd09"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/info.svg",revision:"6d199ae64a19ec7700efb1ac94ec0b4c"},{url:"/login.svg",revision:"0c375e4a0ff771b4793152303dd96360"},{url:"/manifest.json",revision:"98974fd4ad2ecaa90923b2adf79a6bb9"},{url:"/maskable_icon.png",revision:"892c01a76b88347eb38a25b870ca8b3f"},{url:"/navpreview.svg",revision:"4658f3eabc37fc01dfaee26e5e5f88d9"},{url:"/offline.svg",revision:"39ddb5e23b3886e8d5693c69dbaf464a"},{url:"/offlineprojare.svg",revision:"caec6b7f36ea36c3ae8c4c7c3c305cc4"},{url:"/paidfavicon - Copy.jpg",revision:"74e85e8b014def9047a82bd461bcc9f8"},{url:"/paidfavicon - ico.ico",revision:"e6a00402156e0c2a8eb494fb798f5876"},{url:"/paidfavicon.jpg",revision:"74e85e8b014def9047a82bd461bcc9f8"},{url:"/paidfaviconpast.jpg",revision:"76a871704cc672b328d005530f6051fb"},{url:"/pencil.svg",revision:"bc8f88f99eae0c03da966e0f09e54a7f"},{url:"/pencilprojare.svg",revision:"d386a0c417c850f1fe26937816465ae8"},{url:"/pencilprojarecolor.svg",revision:"2f03d448c2c0b3a8474cc39881e1b41c"},{url:"/plus.svg",revision:"1c66e9927e5ca0ed0defb8a830cda482"},{url:"/projareexp.png",revision:"151799e01ca659c9438f5ade512886b5"},{url:"/projareexp.svg",revision:"bc0e73ef90f2a4dd2f2fbc31fc69ebcc"},{url:"/projareexp196 - old.png",revision:"d0f5f8fd420f7147a9dded64c77257bb"},{url:"/projareexp196.png",revision:"bc76582b65e484ad25b99faa4b1665e0"},{url:"/projareexp512 - old.png",revision:"d9ed8997b97d172b74acb7f662b7d930"},{url:"/projareexp512.png",revision:"2ee117e0660df6fa96d3556a0408c97a"},{url:"/project.jpeg",revision:"c2b7d036ef6ca358d1111fc528513b5a"},{url:"/robots.txt",revision:"388ed88eec82ddeacbf877ee7dc4b225"},{url:"/search.png",revision:"d95426b3e4e29d76a58fef8bc504a8ef"},{url:"/sitemap.xml",revision:"516a516dbbfdb3436cbfd6890c129dd8"},{url:"/trashprojare.svg",revision:"1c93c27bbfa923410aa0e6cb873e9782"},{url:"/user.svg",revision:"81b8eb93b4a8a3b9bc1064084cc22a7f"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
