(function(e){function t(t){for(var i,l,c=t[0],r=t[1],s=t[2],m=0,u=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&u.push(a[l][0]),a[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={detail:0},o=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=r;o.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("73ec")},"10d9":function(e,t,n){},1106:function(e,t,n){},"12cb":function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var i=n("47e2"),a=n("852e"),o=n.n(a),l=n("a3a5"),c={en:n("e088"),zh:n("8066")},r=Object(i["a"])({locale:s(),fallbackLocale:"en",messages:c});function s(){return o.a.get("locale")||"en"}function d(e){r.global.locale=e,o.a.set("locale",e),l["a"].emit("locale_changed",e)}t["a"]=r},3904:function(e,t,n){e.exports=n.p+"img/logo_pc@2x.b8a6ac46.png"},"73ec":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a={class:"detail"};function o(e,t,n,o,l,c){var r=Object(i["z"])("e-detail");return Object(i["s"])(),Object(i["e"])("div",a,[Object(i["h"])(r)])}var l=n("3904"),c=n.n(l),r=n("fafa"),s=n.n(r),d=Object(i["E"])("data-v-cef0b5e8");Object(i["v"])("data-v-cef0b5e8");var m={class:"e_detail"},u={class:"head"},h={key:0,class:"icon",src:c.a},p={key:1,class:"icon",src:s.a},f={class:"title"},_={class:"body"};Object(i["t"])();var g=d((function(e,t,n,a,o,l){return Object(i["s"])(),Object(i["e"])("div",m,[Object(i["h"])("div",u,[e.is_pc?(Object(i["s"])(),Object(i["e"])("img",h)):(Object(i["s"])(),Object(i["e"])("img",p))]),Object(i["h"])("div",f,Object(i["B"])(o.title),1),Object(i["h"])("div",_,[Object(i["h"])("p",{innerHTML:o.body},null,8,["innerHTML"])])])})),T=n("1da1"),b=(n("96cf"),n("12cb")),N=(n("d3b7"),n("159b"),n("b64b"),n("ac1f"),n("841c"),n("a15b"),"https://artemis.yucent.com");function y(e,t){return F.apply(this,arguments)}function F(){return F=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){var a="".concat(N).concat(t);if(n){var o=[];Object.keys(n).forEach((function(e){return o.push(e+"="+n[e])})),-1===a.search(/\?/)?a+="?"+o.join("&"):a+="&"+o.join("&")}var l={method:"GET",headers:{orgid:"DeOhGH58cbDONzztxG4v"}};fetch(a,l).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){i(e)}))})));case 1:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}var v=n("832a"),k=n("cb27"),w={mixins:[k["a"]],data:function(){return{title:"",body:""}},watch:{title:function(){document.title=this.title}},mounted:function(){document.title=this.title,this.get_content()},methods:{get_content:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(v["a"])("id")||"",t.prev=1,t.next=4,y("/org/cms/api/content",{id:n});case 4:i=t.sent,i&&i.data?(e.title=i.data.title,e.body=i.data.content):(e.title="zh"===b["a"].global.locale?"暂无信息！":"Not found!",e.body=""),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),e.title="zh"===b["a"].global.locale?"发生错误！":"Error!",e.body="";case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}};n("c389");w.render=g,w.__scopeId="data-v-cef0b5e8";var E=w,j={components:{EDetail:E}};n("83af");j.render=o;var O=j,x=n("6c02"),P=[{path:"/",name:"Detail",component:O}],A=Object(x["a"])({history:Object(x["b"])("/"),routes:P}),C=A,D=(n("f5df1"),n("10d9"),Object(i["d"])(O).use(C).use(b["a"]));D.config.globalProperties.$isPc=Object(v["b"])(),D.mount("#app")},"7dab":function(e,t,n){},8066:function(e){e.exports=JSON.parse('{"common":{"title":"eNFT 社区","more":"查看详情"},"e_header":{"lang_en":"English","lang_zh":"简体中文","title":"人人 NFT 共享流量平台","white_paper":"下载白皮书","apple":"iPhone App","android":"Android App","links":{"white_paper":"detail.html?id=1","apple":"detail.html?id=2","android":"detail.html?id=3"}},"e_runtime":{"head":"eNFT 社区实时数据","k0":"节点","k1":"成员","k2":"总算力（P）","k3":"项目","k4":"交易次数","k5":"交易量（ET）"},"e_community":{"entf_text0":"社区共治","entf_text1":"价值共享","entf_text2":"生态共创","entf_title":"eNFT 社区","entf_desc":"eNFT 社区志愿者包含来自全球各地的加密艺术家、NFT 爱好者、链游玩家、数字艺术学者、加密收藏品发烧友","entf_join":"加入社区志愿者","enft_manage_title":"社区治理","enft_manage_items":[{"line0":"决策节点","line1":"知名机构组成的社区议事中心"},{"line0":"国家超级节点","line1":"运营所在国家/地区的 eNFT 社区"},{"line0":"产业联盟节点","line1":"独家代理联盟内 NFT 产业服务"},{"line0":"社区节点","line1":"组建团队，运营社区节点，易恩城市和玩赚公会"}],"links":{"entf_join":"detail.html?id=","enft_manage_items":["detail.html?id=","detail.html?id=","detail.html?id=","detail.html?id="]}},"e_ecosystem":{"title":"生态布局","name0":"应用层","name1":"NFT 社交","name2":"eNFT 市场","name3":"DeFi + NFT","name4":"NFT 数据和个性化推荐","name5":"生态应用","name6":"元宇宙","name7":"协议层","name8":"流动性协议 eNFT111","name9":"NFT 发行","name10":"基础层","name11":"侧链","name12":"钱包","name13":"NFT 铸造工具","name14":"其他","name15":"加密 IM","name16":"加密微博"},"e_notice":{"title":"揭榜机制","sub_title":"社区成员各显神通，赢取丰厚生态激励","categories":[{"name":"交易所","items":[{"name":"币安","status":"征集中"},{"name":"火币","status":"征集中"},{"name":"欧易","status":"征集中"}]},{"name":"生态应用","items":[{"name":"买卖朋友","status":"已完成"},{"name":"eNFT 市场","status":"已完成"},{"name":"易恩城市","status":"已完成"}]},{"name":"数字监管仓","items":[{"name":"奢侈品监管仓","status":"已完成"},{"name":"茶叶监管仓","status":"已完成"},{"name":"白酒监管仓","status":"征集中"}]}],"links":{"categories":["detail.html?id=1","detail.html?id=2","detail.html?id=3"]}},"e_protocol":{"title":"eNFT111 流动性协议","sub_title":"一个具有共有制经济特色的 NFT 协议","items":["永久拍卖","永远分佣","明确版权"],"links":{"more":"detail.html?id="}},"e_recommend":{"title":"eNFT 智能推荐系统","items":["挖掘个人大数据","挖掘 NFT 作品大数据"],"links":{"more":"detail.html?id="}},"e_token":{"title":"ET 通证","sub_title":"应用于 eNFT 网络的流量生态通证，拥有丰富的应用场景","blocks":["易恩城市","NFT 市场","买卖朋友"],"links":{"more":"detail.html?id="}},"e_right":{"title":"ET 通证专属权益","sub_title":"会员和 NFT 项目发行方可通过持有和使用 ET 通证来获得多样的权益服务","tips":["• 生态应用","• 参加课程培训","• 兑换限量 NFT","• 参与专场拍卖","• 获得项目曝光","..."],"links":{"more":"detail.html?id="}},"e_nft":{"title":"ENFT 通证","sub_title":"应用于 eNFT Chain 公链上铸造加密资产的原生通证，独有的应用场景和强劲的增值模型，推动价值不断上涨","tips":["NFT 铸造费","NFT 转移 Gas 费","NFT 持有税"],"links":{"more":"detail.html?id="}},"e_foundation":{"title":"eNFT 基金会","sub_title":"由业界知名人士和机构共同发起成立基金会，支持 eNFT 社区蓬勃发展","items":[{"name":"唐儀","name_en":"Tony Tong","desc":"eNFT 基金会主席"},{"name":"周兵","name_en":"Tony Zhou","desc":"eNFT 基金会执行董事"},{"name":"艾伦·沃克","name_en":"Alan Walker","desc":"eNFT 基金首席技术官"},{"name":"DN 资本","name_en":"DN Capital","desc":"eNFT 种子基金赞助"}],"links":{"more":"detail.html?id="}},"e_timeline":{"title":"eNFT 项目时间轴","times":[{"date":"2020年12月","event":"eNFT 协议等技术筹备"},{"date":"2021年2月","event":"eNFT 社区节点启动"},{"date":"2021年6月","event":"新加坡等超级节点启动"},{"date":"2021年8月","event":"ET 创始轮挖矿开启， PNFT 应用上线"},{"date":"2021年9月","event":"eNFT 市场上线"},{"date":"2021年第四季度","event":"ET 上交易所"}]},"e_footer":{"quicks":{"about":{"_self":"关于 eNFT","enft_community":"eNFT 社区","enft_protocol":"eNFT 协议","et_token":"ET 通证","enft_token":"ENFT 通证"},"community":{"_self":"社区治理","decision_node":"决策节点","national_super_node":"国家超级节点","industry_alliance_node":"产业联盟节点","community_node":"社区节点"},"announcement":{"_self":"揭榜机制","et_on_the_exchange":"ET 上交易所","ecological_application":"生态应用","digital_supervision_warehouse":"数字监管仓"},"ecological":{"_self":"生态应用","pnet":"买卖朋友","et_city":"易恩城市","nft_market":"NFT 市场"}},"find_us":"找到我们","copyright":"© 2021 Digital NFT Foundation Pte.Ltd.","links":{"quicks":{"about":{"enft_community":"detail.html?id=","enft_protocol":"detail.html?id=","et_token":"detail.html?id=","enft_token":"detail.html?id="},"community":{"decision_node":"detail.html?id=","national_super_node":"detail.html?id=","industry_alliance_node":"detail.html?id=","community_node":"detail.html?id="},"announcement":{"et_on_the_exchange":"detail.html?id=","ecological_application":"detail.html?id=","digital_supervision_warehouse":"detail.html?id="},"ecological":{"pnet":"detail.html?id=","et_city":"detail.html?id=","nft_market":"detail.html?id="}},"find_us":{"twitter":"http://twitter.com","telegram":"http://telegram.com","wechat":"http://wechat.com","apple":"http://apple.com","android":"http://android.com"}}}}')},"832a":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c");function i(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function a(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}function o(){return!a()}},"83af":function(e,t,n){"use strict";n("1106")},a3a5:function(e,t,n){"use strict";var i=n("efe4"),a=n.n(i),o=a()();t["a"]=o},c389:function(e,t,n){"use strict";n("7dab")},cb27:function(e,t,n){"use strict";var i=n("832a"),a={computed:{is_pc:function(){return Object(i["b"])()}}};t["a"]=a},e088:function(e){e.exports=JSON.parse('{"common":{"title":"eNFT community","more":"View details"},"e_header":{"lang_en":"English","lang_zh":"简体中文","title":"Everyone\'s NFT shared traffic platform","white_paper":"Download the white paper","apple":"iPhone App","android":"Android App","links":{"white_paper":"detail.html?id=1","apple":"detail.html?id=2","android":"detail.html?id=3"}},"e_runtime":{"head":"eNFT community real-time data","k0":"Nodes","k1":"Members","k2":"Total computing power（P）","k3":"Projects","k4":"Transactions","k5":"Trading volume（ET）"},"e_community":{"entf_text0":"Community governance","entf_text1":"Value sharing","entf_text2":"Ecological <br/>co-creation","entf_title":"eNFT community","entf_desc":"The eNFT community volunteers include crypto artists,NFT enthusiasts,chain gamers,digital art scholars,crypto collectors enthusiasts from all over the world","entf_join":"Become a community volunteer","enft_manage_title":"Community governance","enft_manage_items":[{"line0":"Decision Node","line1":"A community meeting center composed of well-know instituions"},{"line0":"National Super Node","line1":"The eNFT community in the country/region where it operates"},{"line0":"Industry Alliance Node","line1":"Exclusive agent for NFT industry services in the alliance"},{"line0":"Community Node","line1":"Form a team, operate community nodes, EN City and play earning guild"}],"links":{"entf_join":"detail.html?id=","enft_manage_items":["detail.html?id=","detail.html?id=","detail.html?id=","detail.html?id="]}},"e_ecosystem":{"title":"Ecological layout","name0":"Application layer","name1":"NFT social","name2":"eNFT market","name3":"Defi + NFT","name4":"NFT data and personalized recommendations","name5":"Ecological application","name6":"Metaverse","name7":"Protocol layer","name8":"Liquidity Agreement eNFT111","name9":"NFT issuance","name10":"Infrastructure","name11":"Side chain","name12":"Wallet","name13":"NFT casting tools","name14":"Other","name15":"Encrypted IM","name16":"Encryption Microblog"},"e_notice":{"title":"Announcement mechanism","sub_title":"Community members show their magical powers and win rich ecological incentives","categories":[{"name":"Exchange list","items":[{"name":"Binance","status":"Call for"},{"name":"Huobi Global","status":"Call for"},{"name":"OKEX","status":"Call for"}]},{"name":"Ecological application list","items":[{"name":"PNFT","status":"completed"},{"name":"eNFT Market","status":"completed"},{"name":"EN city","status":"completed"}]},{"name":"Digital supervision warehouse list","items":[{"name":"Luxury regulatory warehouse","status":"completed"},{"name":"Tea supervision warehouse","status":"completed"},{"name":"Liquor supervision warehouse","status":"Call for"}]}],"links":{"categories":["detail.html?id=1","detail.html?id=2","detail.html?id=3"]}},"e_protocol":{"title":"eNFT111 Liquidity Agreement","sub_title":"An NFT agreement with the characteristics of a communal economy","items":["Permanent auction","Always split commissions","Clear copyright"],"links":{"more":"detail.html?id="}},"e_recommend":{"title":"eNFT intelligent reco-mmendation system","items":["Mining personal big data","Mining the big data of NFT works"],"links":{"more":"detail.html?id="}},"e_token":{"title":"ET token","sub_title":"The traffic ecological certificate applied to the eNFT network has a wealth of application scenarios","blocks":["EN city","NFT Market","PNFT"],"links":{"more":"detail.html?id="}},"e_right":{"title":"Exclusive rights of ET token","sub_title":"Members and NFT project issuers can obtain a variety of rights services by holding and using ET tokens","tips":["• Dapp","• Course training","• Limited Edition NFT","• Auction","• Project exposure","..."],"links":{"more":"detail.html?id="}},"e_nft":{"title":"ENFT token","sub_title":"The original token used in the casting of encrypted assets on the NFT Chain public chain, unique application scenarios and strong value-added models,promote the continuous increase in value","tips":["NFT casting fee","NFT transfer GAS fee","NFT hold tax"],"links":{"more":"detail.html?id="}},"e_foundation":{"title":"eNFT Foundation","sub_title":"Co-sponsored by industry celebrities and institutions to establish a foundation to support the vigorous development of the eNFT community","items":[{"name":"Tony Tong","name_en":"","desc":"Chairman of eNFT Foundation"},{"name":"Tony Zhou","name_en":"","desc":"Executive Director of eNFT Foundation"},{"name":"Alan Walker","name_en":"","desc":"Chief Technology Officer of eNFT Fund"},{"name":"DN Capital","name_en":"","desc":"eNFT Seed Fund Sponsor"}],"links":{"more":"detail.html?id="}},"e_timeline":{"title":"eNFT project timeline","times":[{"date":"December 2020","event":"Technical preparation such as eNFT agreement"},{"date":"February 2021","event":"eNFT community nodes launched"},{"date":"June 2021","event":"Singapore and other super nodes started"},{"date":"August 2021","event":"ET founding round mining started, PNFT application launched"},{"date":"September 2021","event":"eNFT market is online"},{"date":"Fourth quarter of 2021","event":"ET is listed on Exchanges"}]},"e_footer":{"quicks":{"about":{"_self":"About eNFT","enft_community":"eNFT community","enft_protocol":"eNFT protocol","et_token":"ET token","enft_token":"ENFT token"},"community":{"_self":"Community governance","decision_node":"Decision node","national_super_node":"National Super Node","industry_alliance_node":"Industry Alliance Node","community_node":"Community node"},"announcement":{"_self":"Announcement mechanism","et_on_the_exchange":"ET is listed on Exchanges","ecological_application":"Ecological application","digital_supervision_warehouse":"Digital supervision warehouse"},"ecological":{"_self":"Ecological application","pnet":"PNFT","et_city":"EN city","nft_market":"NFT market"}},"find_us":"Find us","copyright":"© 2021 Digital NFT Foundation Pte.Ltd.","links":{"quicks":{"about":{"enft_community":"detail.html?id=","enft_protocol":"detail.html?id=","et_token":"detail.html?id=","enft_token":"detail.html?id="},"community":{"decision_node":"detail.html?id=","national_super_node":"detail.html?id=","industry_alliance_node":"detail.html?id=","community_node":"detail.html?id="},"announcement":{"et_on_the_exchange":"detail.html?id=","ecological_application":"detail.html?id=","digital_supervision_warehouse":"detail.html?id="},"ecological":{"pnet":"detail.html?id=","et_city":"detail.html?id=","nft_market":"detail.html?id="}},"find_us":{"twitter":"http://twitter.com","telegram":"http://telegram.com","wechat":"http://wechat.com","apple":"http://apple.com","android":"http://android.com"}}}}')},fafa:function(e,t,n){e.exports=n.p+"img/logo@2x.6d3aea32.png"}});