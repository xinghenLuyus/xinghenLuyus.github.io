/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/02/27/hello-world/index.html","ca58d1eba3b164f60c3ca0211fe4d119"],["/2025/02/28/1/index.html","121bd5eef99f8d314ebcc2b22434fe11"],["/2025/02/28/2/index.html","cad11112ab4fbb6aabfaf782b28b369e"],["/2025/02/28/3/index.html","eeb91dc168d3ad939853ec93c4f8abec"],["/404.html","e164e9dfa0ab861f16d8e23bcda84188"],["/about/index.html","5b29373a84f26fe8c1ab1c355b1df63d"],["/archives/2025/02/index.html","61d473e8009ba58ceb974b62bbdc260f"],["/archives/2025/index.html","0bd1c5f43c7e5a6b830181a1c1c0afbd"],["/archives/index.html","46aff2a7fddd90b80b0af713d7869ed1"],["/categories/index.html","83fe893945469d3122ba75cad09f590f"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","530dbfa623251ceac26c7ff1700a6e7a"],["/css/style.css","476c5397359d76617a476bde788cb5cc"],["/custom.js","105eb965e89e6e53133b1e79f5bcfca8"],["/friends/index.html","f2bd451608b42e75cac37c06ed3b5d10"],["/img/1.jpg","7bd6bbd1caee0f4f4e68beda998c2b1a"],["/img/10.jpg","fbf733d8a555016065f8c31be65678c9"],["/img/13.jpg","69a24f9b3f77361ccb0483fdbd9c8067"],["/img/14.jpg","5332b44f16e3647728f853b5ab5efc98"],["/img/15.jpg","1fbf3b81ba40175f53b57ea5517a71cd"],["/img/16.jpg","7730a568890b591f1e02b577a9be739b"],["/img/17.jpg","79072ebdd8e955b1f25562c7ddd00bde"],["/img/18.jpg","dd69dd1231033183f3ad0b786c45d0ee"],["/img/19.jpg","f6b8e46f7f6718e04cc1378e969ba4f2"],["/img/2.jpg","4fbfcb7f1b983f231be46ae591e83c71"],["/img/20.jpg","bd9f358885e6d5a83c44ae1db85da2d0"],["/img/21.jpg","17a2cb4763a0d888b2eef2abacd8a87e"],["/img/23.jpg","6e2eb89bf6450f8bf092b23d70a28bf5"],["/img/24.jpg","e57e93c6400b8a49ed99e69043c49afa"],["/img/25.jpg","b2c12c89c5bb0caa17f2a2de4a0a1068"],["/img/26.jpg","6e349fdc376abf480d2c19b3bfe7288a"],["/img/27.jpg","02effeef50d5f87e3a3ed56d10bca205"],["/img/28.jpg","eb9bd414c5be4d234accae68add332a7"],["/img/29.jpg","b049aa00cb1fafeb27696afbd4097328"],["/img/3.jpg","e37d23948de44ac29f9172ae53a58aed"],["/img/30.jpg","cd90f2f68e6a74d0c4d9d0a1029fc54c"],["/img/31.jpg","150fb41d52d08cbf88ff47d84d17ed85"],["/img/32.jpg","d783f335720c4cb6fefd87f5da236a35"],["/img/33.jpg","be41bf2c27cd4e06cbc9892eb2efd103"],["/img/34.jpg","c3edf41db0f9c9b71ec704b53194f6bb"],["/img/35.jpg","6677e5bc0dcebb7e122b28a4cd31a344"],["/img/36.jpg","e8bdd3a968ac52f091dfce96b51d4dbc"],["/img/37.jpg","d8604130e4feb282e3b188f1a20bf7ad"],["/img/38.jpg","08ca07f25667a159729ca7d005541afe"],["/img/39.jpg","99627d9ede1e5e412a70611f6c30f79e"],["/img/4.jpg","7bb45b659de4c5b50a2b130234d078a8"],["/img/40.jpg","b19615d3e11d5e2d88b160e3a682ec14"],["/img/41.jpg","d97efc0079eef54a87ab7341f7cd9dda"],["/img/42.jpg","f39c86f6f132b4e5e94cacabd9c04857"],["/img/43.jpg","3138df9cade82fdaf41c02128ded96b2"],["/img/44.jpg","4b1ffe8c83d328370828f7f33a11b79d"],["/img/45.jpg","86b71f656e311051f9e6b14863292d06"],["/img/46.jpg","80c854f46ac329a794f13dad36754221"],["/img/47.jpg","dcdf3a6bb6790a064ef761304912212d"],["/img/48.jpg","715f1b4c400829d21d620e159f03db3d"],["/img/49.jpg","3c0ee3272f24472f66156f066252917b"],["/img/5.jpg","9ae5fa181cc6ab6ca4a6856f82028be5"],["/img/50.jpg","1a6d1bd0ea0ff380649d9c61efa0547d"],["/img/6.jpg","b80ab7630b98163874d48929557e37b9"],["/img/7.jpg","55f300aee7e55f264ea7d8d86ac29be8"],["/img/8.jpg","3cf266b807098bde257f071dbe18484e"],["/img/9.jpg","95d5ce8c4970d624d5513829ac8c6d13"],["/index.html","c6095af7db91d6b3c5e835d72c1b9a74"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/sw-register.js","241e7bc3538a1c2d6a6bb197254e9ce6"],["/tags/index.html","1ba25e900ad7ec1961e4611bfa3f37fc"]];
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
