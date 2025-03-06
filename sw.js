/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/02/27/hello-world/index.html","8decefd0948deab1bd190b487de2c65c"],["/2025/02/28/1/index.html","e4884e1032e90b5cdd281cff566ffcfb"],["/2025/02/28/2/index.html","a28d70f6f5e0a3340fa45a836618c7df"],["/2025/02/28/3/index.html","feb35aa57da7a0aa5d4def662e82a08a"],["/404.html","ce7acbb0954fb8df572c508b59c8ea3c"],["/about/index.html","a5936e9c9ede441fffa2f0a21a3a64b6"],["/archives/2025/02/index.html","f2d272935dc31eff16334904449a9ef5"],["/archives/2025/index.html","c18645ff20f1865073bb74981412862f"],["/archives/index.html","2f6496f704a4ff9f478aebaaab341539"],["/categories/index.html","a75579f433d05f0c0216e13c36c716a9"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","530dbfa623251ceac26c7ff1700a6e7a"],["/css/style.css","a25e33c579c5a486b3393113632ca61f"],["/custom.js","1ab02a087ec6478df247dc7e6f8d9458"],["/friends/index.html","d3ed0d83b6a33585c68e4ac50b828d99"],["/img/1.jpg","88ed9c38dafd48fbe9290ad4171fa52f"],["/img/10.jpg","748af848d85df7228c63b3c6a86bb22f"],["/img/11.jpg","d8d8c5883619c0814de8a9de3cd9969a"],["/img/12.jpg","d4959695a8429d9c748894d91fe1f1fc"],["/img/13.jpg","d4ebf171c19267f74504bfb8ee843014"],["/img/14.jpg","ed344d295881b36fa201d31273c6ece9"],["/img/15.jpg","6d475a854319000e25f670da22e2019e"],["/img/16.jpg","e3347675ebffcd9cc43de99c72624a68"],["/img/17.jpg","65bf7cbe49e8e76f1778573c1b6dd569"],["/img/18.jpg","6fc0139d245ff6966b3a13e9022ce71d"],["/img/19.jpg","2de30d66a14421ede5890ebaae53abfe"],["/img/2.jpg","feb6aed957b50079a9d2c1b755fb7480"],["/img/20.jpg","d4166751c7dc0528b8b81fb0c80cc638"],["/img/21.jpg","33beab4f8aa2b57623bdb3517be7b9f5"],["/img/22.jpg","3c4457a2dec674361d1cda96a67c19f4"],["/img/23.jpg","df7d5a9e6c0fcc8bc4669c9d298e83d9"],["/img/24.jpg","8c797757fdedc5102989939cea87e01b"],["/img/25.jpg","c0f1d6351fe3f7aa4b16154d21c18de9"],["/img/26.jpg","f32e37618951bc4014a440b09b2cc25c"],["/img/27.jpg","ca12045e621ed5e899a2322a0eb8c7cc"],["/img/28.jpg","b36e4f8c334c18d3cc8d48b83732e6fa"],["/img/29.jpg","aa0f29d618d10099d252a188aff116a9"],["/img/3.jpg","d56703109a0d362ebf097f2b10509eaf"],["/img/30.jpg","cf6479327e76c3c730a4dcdc77013572"],["/img/31.jpg","f8622f8dbb24c16cb4a01eaf00eb61e4"],["/img/32.jpg","fff9adbcb7b8f5928626e783cb4b41e6"],["/img/33.jpg","a1d3ffb2e03c5d534279c55553f26fd7"],["/img/34.jpg","b39a6b08a08e5f74f062d49f7702e2de"],["/img/35.jpg","db3c7a5682ed2293cf4b1fa2076998b7"],["/img/36.jpg","826ef3e121e3e7abb114ebb821e739b4"],["/img/37.jpg","f3942d3e8adc40094f26699adc4eb322"],["/img/38.jpg","f78c6cc873d8d42efdb8aded115cb77c"],["/img/39.jpg","877620c027f10eb78e22039133b7f644"],["/img/4.jpg","9c181dff0b1031d403baf7b52266a848"],["/img/40.jpg","2bc6ce18f1aaa05a6f2dce7fdc69e59b"],["/img/41.jpg","8a434c5bf9918a118f69ef76d0369ee4"],["/img/42.jpg","bc1dca625a768a9de20dc0b45d3b1c8f"],["/img/43.jpg","6ecf3fcdd227c7695711443e19e2d189"],["/img/44.jpg","d4fec04c9dbec60b9a41e378e53bec0f"],["/img/45.jpg","a373cbc1935b25feb1d83a70ce247468"],["/img/46.jpg","8d80f8610064d0ec11e64622f4e8eaa3"],["/img/47.jpg","de8d97534344711544c62237743f7b6f"],["/img/48.jpg","0a33f87bf272b4e2ed1cf726c85b42cf"],["/img/49.jpg","ba08e9c9127d4a56689f16108f2e7ec6"],["/img/5.jpg","bcde7a65716e937ceb9838b4471e0bf0"],["/img/50.jpg","a9a33c0af119a0ce62723cd580727a65"],["/img/6.jpg","d92b55170ff4727f3d19f5708d311854"],["/img/7.jpg","047d43cdceb5a9e31a7f824aa2c3aa8d"],["/img/8.jpg","f70b8ea7e294cf4f566affdd40af251e"],["/img/9.jpg","94018fe37f52ef139d64ee8e3c162e42"],["/index.html","9e905f43f605c730d300fca704beb224"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/sw-register.js","c9d4340d8a53959dec3b0701d324e2be"],["/tags/index.html","920e4bc9e76a58dff22410c16f622bff"]];
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
