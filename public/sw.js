if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/New name 1.svg",revision:"58aa6ff715f8d8ad72468d90662d264d"},{url:"/New name 2.png",revision:"6adca9ed29c9614166563698bb6af702"},{url:"/New name 2.svg",revision:"f6fa9561e4ccbf8410f352f4569249c5"},{url:"/New name 3.svg",revision:"90c5dcd87988b7d13b4149ac0946e530"},{url:"/_next/static/RRANPaC6EzZQDuxaY2m6A/_buildManifest.js",revision:"acc0e52e21cd74ec91e9e0e315974247"},{url:"/_next/static/RRANPaC6EzZQDuxaY2m6A/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/10.6ffd4a655a4109267d08.js",revision:"e09e57d350adde5642508756ef39ae6a"},{url:"/_next/static/chunks/11.301f4861ec7b97616af4.js",revision:"05906fa9cbefa570dea07054b525718e"},{url:"/_next/static/chunks/12.6c11c7840444013059a1.js",revision:"366f5f814cf68891eb40e409ad2742b0"},{url:"/_next/static/chunks/13.094665a013e0a2141aba.js",revision:"652986301fd2ce25e58f558cb42f403b"},{url:"/_next/static/chunks/302f48baed0013cde7a9104305a71335ffdf7399.1027d52b5eac815f5437.js",revision:"7281b64d370e97a85579e695d8350a14"},{url:"/_next/static/chunks/5b59078be68465afbffa95f2d8a27a2cca8e6474.1c5b54dd912ab6d90fba.js",revision:"d0c04a25a3985bec4e7b9af293154aba"},{url:"/_next/static/chunks/5d8bd0ec69dd720749a9508d46c2296b2159a24f.80d38c69f8dc8a7287bf.js",revision:"09635a901b0de633c465e9c7e7b084c3"},{url:"/_next/static/chunks/6eeb8b8de0298e3e04276152ee90290d990891f5.0b32488a2c4f236f8e29.js",revision:"7b1b440742dd7f6deb3aec4c034ef857"},{url:"/_next/static/chunks/75d332581f0163573aae2c7dd2f86f98e8db741e.ad859677b34dbfbb8464.js",revision:"5fb0bd2840c5c3ba31c6c7db65d2ef33"},{url:"/_next/static/chunks/9.ebb602875977becb892b.js",revision:"e498feee4426f19c716d5177b600ac8e"},{url:"/_next/static/chunks/af339f6563feafed709f96e0f0e0dfa50c24b413.13aef609c0c9817b3a8a.js",revision:"a463d2b69b9613620bb6faab265488d3"},{url:"/_next/static/chunks/b1f31165.ba36a6d9659dca84917c.js",revision:"092922c847857276e09f07690ba228b6"},{url:"/_next/static/chunks/f65a48b9.4721f5433e86a1e51469.js",revision:"b76059323689455da661eaa437314544"},{url:"/_next/static/chunks/framework.1ae6aab54c557c2f6555.js",revision:"74625b3116df178c04437f7484571353"},{url:"/_next/static/chunks/main-c43e03c530f279987f2f.js",revision:"49601c34b15122e3953256f100969649"},{url:"/_next/static/chunks/pages/_app-98656ca5ba83b6bbf346.js",revision:"17ad4c70237a89f62d45b4037a70e222"},{url:"/_next/static/chunks/pages/_error-07b61053bae64e152862.js",revision:"49d09406b53b7196b5b86bfa61de8eca"},{url:"/_next/static/chunks/pages/account-8069ffc00ecc7f1bba97.js",revision:"a9f98eb66a4a1c4d7e06dd539ffe8197"},{url:"/_next/static/chunks/pages/components/advpreview-9c185e4f6d51529fc0a7.js",revision:"d9708e16e3331bf5f37d2c10f09fdba0"},{url:"/_next/static/chunks/pages/components/login-2257767224dc8f7b07ae.js",revision:"5bd4caac18fca12961e049f3ba493e33"},{url:"/_next/static/chunks/pages/components/navprop-2393f178151bb9f27adb.js",revision:"b4404d9507ab8011978f2a7fe7313336"},{url:"/_next/static/chunks/pages/components/offlinepreview-d0e91cff8e0e9c2cc0d7.js",revision:"daabac5f8f747ff20fdec9f0c38c8ddd"},{url:"/_next/static/chunks/pages/components/preview-c253fd26569b6c5948e2.js",revision:"c14dfa97a2aa0fd718e274809090670a"},{url:"/_next/static/chunks/pages/components/register-657ce4d5745897466a8b.js",revision:"1d55fbbb7e4f9850e30bfeb018821f09"},{url:"/_next/static/chunks/pages/components/search-1d70b2b00a1eb65b272e.js",revision:"6d5862033e687a8e2799895f9c746675"},{url:"/_next/static/chunks/pages/enter-6a630859f31d38031563.js",revision:"2ae3cb18e22df0c1f39ee1a1e86c11fa"},{url:"/_next/static/chunks/pages/found-e024a9fec5ab05671097.js",revision:"06f2d4e759886d347032b1d02bdf5748"},{url:"/_next/static/chunks/pages/index-1266b71dd4458632d4d6.js",revision:"1ed42652842bbf8663bcb9d1aba45e27"},{url:"/_next/static/chunks/pages/myaccount-2076d42338f2fa3e2f8d.js",revision:"2051f5de7f73e6379b433662b4385508"},{url:"/_next/static/chunks/pages/navbar-c5cea0254bf33c43ad29.js",revision:"14b2037244890052304bfa32b612213a"},{url:"/_next/static/chunks/pages/new-78ffa1581e1c58b4cb72.js",revision:"202dde2b35e5730621e50ebe572d5774"},{url:"/_next/static/chunks/pages/project-62de6a161ace15bad0c8.js",revision:"aa517c843037266db60d8f336ff1351f"},{url:"/_next/static/chunks/pages/update-8b1a0a4eb9bd54eb0ae2.js",revision:"b8576f751fea1d53ff7c4a681b5dd48c"},{url:"/_next/static/chunks/polyfills-27dc28ccefd05775aba3.js",revision:"4600031ea3da9214ef09bcd0319e496a"},{url:"/_next/static/chunks/webpack-cd906d5b5b39e14de104.js",revision:"5abca0443906ef50213d33d1edf8ce41"},{url:"/_next/static/css/06c25a6d3b47084fac18.css",revision:"ca75a2c9658b3d98500dd5a3381fe470"},{url:"/_next/static/css/2ca40512b6a3c31df95b.css",revision:"392c07fe963d5301e12ce51164c92f9a"},{url:"/_next/static/css/41bdff3ae3ca4b0fdf57.css",revision:"6616e636931cf9cec79094999958ba56"},{url:"/_next/static/css/50d12b348c2b7501afb3.css",revision:"d73a6b674851233df89307f0a99a2a97"},{url:"/_next/static/css/55815ce4e1bfd366b170.css",revision:"59343d9a5196b7383ab95af6e3fe1576"},{url:"/_next/static/css/612adede07a1b7a0ebc1.css",revision:"97197d6097cae04a37897896ca571ebc"},{url:"/_next/static/css/7a00dbdb470848819424.css",revision:"95d23344dd43d6dc8e52c71e8632a874"},{url:"/_next/static/css/8105134aa55157aeff8e.css",revision:"c1d1432674b172ba83d6c34106a5b0b0"},{url:"/_next/static/css/82b3ecd5a2b70851a197.css",revision:"82d6c3d81d87b86c74e3ca325d0b28ca"},{url:"/_next/static/css/85ce593c7875954b50ed.css",revision:"966caab167dc13d1fcd7df1ee830c7c5"},{url:"/_next/static/css/bf35206d657cf3b35276.css",revision:"07f452e5a07beb8852b6b0e1e4456936"},{url:"/_next/static/css/d6091229dcfdbbfd6a23.css",revision:"a0e4dedcf0837fb24dec6bfeff7c2df3"},{url:"/betaE",revision:"bed072aab213152adf8ad27d691009ad"},{url:"/book.svg",revision:"1c34a91a1b62b45f8f800a8ae19eb47d"},{url:"/book1.svg",revision:"6ce80fd7ac9c7d18c2730940bc3a2679"},{url:"/bootstrap/account.svg",revision:"4b8baf5dbd2124ac873e9b79b45ec846"},{url:"/bootstrap/add.svg",revision:"95af6cd6e7cf0386344e3a227a85b0ef"},{url:"/bootstrap/enter.svg",revision:"e45708fc6b4da4859508eaf41473a6e1"},{url:"/bootstrap/home.svg",revision:"8baca7a8c0e53c838843eb265b3bb2c3"},{url:"/bootstrap/search.svg",revision:"0002e34d846137446492ae748b1c18ca"},{url:"/delete.svg",revision:"5d27f4107b5b7ab23707c797845acb39"},{url:"/edit.svg",revision:"e2cdb632d26242b019c9d3a81bc9cd09"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/login.svg",revision:"0c375e4a0ff771b4793152303dd96360"},{url:"/manifest.json",revision:"b3296da63c45b5f2a9bc698272d02ee3"},{url:"/maskable_icon.png",revision:"892c01a76b88347eb38a25b870ca8b3f"},{url:"/navpreview.svg",revision:"477aaf666dc3b1de58deba600fb343f9"},{url:"/offline.svg",revision:"48d2b661b256fe0c47f6556576720339"},{url:"/plus.svg",revision:"1c66e9927e5ca0ed0defb8a830cda482"},{url:"/search.png",revision:"d95426b3e4e29d76a58fef8bc504a8ef"},{url:"/user.svg",revision:"81b8eb93b4a8a3b9bc1064084cc22a7f"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
