/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/03/10/2025-3-10/index.html","3f621dbf6734ce9906938948441eb9e1"],["/2025/03/15/2025-3-15/index.html","d17a8c464a613ec62d49e0832372c9d2"],["/2025/03/18/2025-3-18/index.html","eb91780ede5fbc9b355e6a0da486ddcf"],["/2025/03/30/2025-3-30/index.html","d37312ba4317d9dc9d14a970c2cf2355"],["/2025/06/12/2025-6-12/index.html","167dc77df5465bf21a1a7aecec8680cc"],["/2025/06/27/2025-6-27/index.html","5a7ecf559c0d6ea204d1917b1298a7da"],["/2025/07/28/2025-7-28/index.html","4fbd2359e50da7b6b1263a0396415dc2"],["/2025/08/05/2025-8-5/index.html","baa18d84fccef32150dfd6f3cbd51121"],["/2025/08/18/2025-8-18/index.html","e639b62dedc2197f2bf51d1ded4b52d9"],["/2025/08/20/2025-8-20/index.html","6ed608a093f7cfa16cbf50af6d7592a6"],["/2025/09/15/2025-9-15/index.html","24a2089096ec0018bac08d3be8f88da6"],["/2025/10/15/2025-10-15/index.html","801be172b60ce5db0ae8b02020307a0d"],["/2025/12/15/2025-12-15/index.html","284b9d49a9f0dd2962ffde68bd84fdcb"],["/2026/04/29/2026-4-29/index.html","438a143845f4d4989b52c0639e8e951a"],["/404.html","435c92f920d9dfd0d8fa23fb2672072c"],["/about/index.html","d03545ed9154eb0045a495ec5122772b"],["/archives/2025/03/index.html","06c5dcbd021fd24caee54a54242d0182"],["/archives/2025/06/index.html","7d8004e9c34610db682ed24414c4b5d3"],["/archives/2025/07/index.html","b5b1d26e2166a16866ce3fb0ee9ea83d"],["/archives/2025/08/index.html","5814d105f9408e6ad1fb77232845d003"],["/archives/2025/09/index.html","3873531f6af91e932dd3cd5c0e0f969d"],["/archives/2025/10/index.html","8a76105039288d2cce00c49d803929ba"],["/archives/2025/12/index.html","0b781d31d487488b63adfb1ad1a708cc"],["/archives/2025/index.html","dbffe81158c31a81824e81b71df61eb5"],["/archives/2025/page/2/index.html","c0cc5f1db7132f6e363eebb6d2d87f6c"],["/archives/2026/04/index.html","568d593723f7f3a341bbed3a416b0a55"],["/archives/2026/index.html","2556590e9fd72200c5c6a0935dc03c6d"],["/archives/index.html","b0a3beb9e0e36c8cc45bfe080a05ca3d"],["/archives/page/2/index.html","4ad1544b559ab03bc6b8298707ee77ca"],["/categories/Java后端/index.html","62edab0c2436f702fa4ab42c0c36b021"],["/categories/index.html","45160c2212fc9010f6bcffd1eb2576fa"],["/categories/模型部署/index.html","c6ba81f83d60f368b5c97d96ebe8bb9b"],["/categories/编程之外/index.html","b7f50c00a61ed9ed362193ae22dedd19"],["/categories/计算机网络/index.html","d6994073f3c069ab59abcce0214a39ef"],["/categories/软件下载/index.html","cf7b381ec89316a865d60a0266a2cda2"],["/categories/运维/index.html","29d11af92cb7bdb9ca01b627e367ad79"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","b7f5ec796154d5eb0abc5e17e8fceab6"],["/css/style.css","2b3ab866eb4cd1bfe27fa24a5aebdb7f"],["/custom.js","4429227a8e4f51ea0b4e7faf147c1d57"],["/friends/index.html","1cd5bf780e9cf68b1c95cb5f1d1884ae"],["/index.html","928fd4432dc085c895c1cc941b0c5d98"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","f72f0b6e354789e6ddcb5f1e573203fa"],["/picture/filing.png","1b78b4ec62395e9d017fdd0d4465ab18"],["/picture/ico.jpg","92b46f995a193b87b9a5ee3876f5d82b"],["/sw-register.js","67b9736ed9a2d848ca2f20530117732d"],["/tags/Clash/index.html","646b5ca440ae31a618c4af307a7bd6fd"],["/tags/Wireguard/index.html","35782c282256978d9c67b165124b9f69"],["/tags/index.html","53e77a3d3ee7959ca8d6a7f0ec3f4829"],["/tags/光猫/index.html","f19e02cf849f7c08542a59794ccbdbfa"],["/tags/异地组网/index.html","4d0b6201b76f9e639a70ec698c5b8baa"],["/tags/教程/index.html","2a687d96c8eaaf3466f2bfdd50fb9988"],["/tags/磁盘管理/index.html","a0ca337bd63c996d334981fa3909705a"],["/tags/踩坑日记/index.html","c4d3dd9a2914ebf17324a94d6dbfa16d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
