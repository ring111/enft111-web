(function(e){function t(t){for(var i,l,r=t[0],s=t[1],c=t[2],m=0,u=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&u.push(a[l][0]),a[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={detail:0},o=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=s;o.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("73ec")},"10d9":function(e,t,n){},1106:function(e,t,n){},"12cb":function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var i=n("47e2"),a=n("852e"),o=n.n(a),l=n("a3a5"),r={en:n("e088"),zh:n("8066")},s=Object(i["a"])({locale:c(),fallbackLocale:"en",messages:r});function c(){return o.a.get("locale")||"en"}function d(e){s.global.locale=e,o.a.set("locale",e),l["a"].emit("locale_changed",e)}t["a"]=s},3904:function(e,t,n){e.exports=n.p+"img/logo_pc@2x.b8a6ac46.png"},"3c5d":function(e,t,n){"use strict";n("46f6")},"46f6":function(e,t,n){},"73ec":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a={class:"detail"};function o(e,t,n,o,l,r){var s=Object(i["z"])("e-detail");return Object(i["s"])(),Object(i["e"])("div",a,[Object(i["h"])(s)])}var l=n("3904"),r=n.n(l),s=n("fafa"),c=n.n(s),d=Object(i["E"])("data-v-8b3cdb84");Object(i["v"])("data-v-8b3cdb84");var m={class:"e_detail"},u={class:"head"},h={key:0,class:"icon",src:r.a},p={key:1,class:"icon",src:c.a},f={class:"title"},_={class:"body"};Object(i["t"])();var T=d((function(e,t,n,a,o,l){return Object(i["s"])(),Object(i["e"])("div",m,[Object(i["h"])("div",u,[e.is_pc?(Object(i["s"])(),Object(i["e"])("img",h)):(Object(i["s"])(),Object(i["e"])("img",p))]),Object(i["h"])("div",f,Object(i["B"])(o.title),1),Object(i["h"])("div",_,[Object(i["h"])("p",{innerHTML:o.body},null,8,["innerHTML"])])])})),b=n("1da1"),g=(n("96cf"),n("12cb")),N=n("7e20"),F=n("832a"),y=n("cb27"),v={mixins:[y["a"]],data:function(){return{title:"",body:""}},watch:{title:function(){document.title=this.title}},mounted:function(){document.title=this.title,this.get_content()},methods:{get_content:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(F["a"])("id")||"",t.prev=1,t.next=4,Object(N["a"])("/org/cms/api/content",{id:n});case 4:i=t.sent,i&&i.data?(e.title=i.data.title,e.body=i.data.content):(e.title="zh"===g["a"].global.locale?"暂无信息！":"Not found!",e.body=""),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),e.title="zh"===g["a"].global.locale?"发生错误！":"Error!",e.body="";case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}};n("3c5d");v.render=T,v.__scopeId="data-v-8b3cdb84";var k=v,w={components:{EDetail:k}};n("83af");w.render=o;var E=w,O=n("6c02"),x=[{path:"/",name:"Detail",component:E}],j=Object(O["a"])({history:Object(O["b"])("/"),routes:x}),M=j,P=(n("f5df1"),n("10d9"),Object(i["d"])(E).use(M).use(g["a"]));P.config.globalProperties.$isPc=Object(F["b"])(),P.mount("#app")},"7e20":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("1da1"),a=(n("96cf"),n("d3b7"),n("4160"),n("159b"),n("b64b"),n("ac1f"),n("841c"),n("a15b"),"https://api.enft111.com");function o(e,t){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){var o="".concat(a).concat(t);if(n){var l=[];Object.keys(n).forEach((function(e){return l.push(e+"="+n[e])})),-1===o.search(/\?/)?o+="?"+l.join("&"):o+="&"+l.join("&")}var r={method:"GET",headers:{orgid:"DeOhGH58cbDONzztxG4v"}};fetch(o,r).then((function(e){return e.json()})).then((function(t){e(t)}))["catch"]((function(e){i(e)}))})));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},8066:function(e){e.exports=JSON.parse('{"common":{"title":"eNFT 社区","more":"查看详情"},"e_header":{"lang_en":"English","lang_zh":"简体中文","title":"人人 NFT 共享流量平台","white_paper":"下载白皮书","apple":"iOS(企业版)","android":"Android App","links":{"white_paper":"https://enft111.com/cn.pdf","apple":"itms-services://?action=download-manifest&url=https://h5.enft.tv/ExportOptions.plist","android":"https://h5.enft111.com/enft.apk"}},"e_runtime":{"head":"eNFT 社区实时数据","k0":"决策节点","k1":"会员","k2":"总算力（P）","k3":"项目","k4":"交易次数","k5":"交易量（ET）"},"e_community":{"entf_text0":"社区共治","entf_text1":"价值共享","entf_text2":"生态共创","entf_title":"eNFT 社区","entf_desc":"eNFT 社区志愿者包含来自全球各地的加密艺术家、NFT 爱好者、链游玩家、数字艺术学者、加密收藏品发烧友","entf_join":"加入社区志愿者","enft_manage_title":"社区治理","enft_manage_items":[{"line0":"决策节点","line1":"知名机构组成的社区议事中心"},{"line0":"国家超级节点","line1":"运营所在国家/地区的 eNFT 社区"},{"line0":"产业联盟节点","line1":"独家代理联盟内 NFT 产业服务"},{"line0":"社区节点","line1":"组建团队，运营社区节点，易恩城市和玩赚公会"}],"links":{"entf_join":"detail.html?id=","enft_manage_items":["detail.html?id=tPlrnu3MFNh4wks6aG8u","detail.html?id=yXKMxOU74sL0DNIFdsac","detail.html?id=uvQXNxCkenpX6nKNqMW9","detail.html?id=hyi2gzGWBxc4ADwClDjw"]}},"e_ecosystem":{"title":"生态布局","name0":"应用层","name1":"NFT 社交","name2":"eNFT 市场","name3":"DeFi + NFT","name4":"NFT 数据和个性化推荐","name5":"生态应用","name6":"元宇宙","name7":"协议层","name8":"流动性协议 NFT111","name9":"NFT 发行","name10":"基础层","name11":"应用链","name12":"钱包","name13":"NFT 铸造工具","name14":"其他","name15":"加密 IM","name16":"加密微博"},"e_notice":{"title":"揭榜机制","sub_title":"社区成员各显神通，赢取丰厚生态激励","categories":[{"name":"交易所","items":[{"name":"币安","status":"征集中"},{"name":"火币","status":"征集中"},{"name":"欧易","status":"征集中"}]},{"name":"生态应用","items":[{"name":"买卖朋友","status":"已完成"},{"name":"eNFT 市场","status":"待上线"},{"name":"易恩城市","status":"待上线"}]},{"name":"数字监管仓","items":[{"name":"奢侈品监管仓","status":"已完成"},{"name":"茶叶监管仓","status":"已完成"},{"name":"白酒监管仓","status":"征集中"}]}],"links":{"categories":["detail.html?id=YzbJjR4LAtG8PsPmpiiG","detail.html?id=h3oHWMGMdsXpSB1hNNSx","detail.html?id=lC14mzC0Ia2JeiBBquaE"]}},"e_protocol":{"title":"NFT111 协议","sub_title":"一个具有共有制经济特色的 NFT 协议","items":["永久拍卖","永远分佣","明确版权"],"links":{"more":"detail.html?id=do7K6PXK5jI4jvwEjNLv"}},"e_recommend":{"title":"eNFT 智能推荐系统","items":["挖掘个人大数据","挖掘 NFT 作品大数据"],"links":{"more":"detail.html?id=shb6hF1UxrAdgVPAehEK"}},"e_token":{"title":"ET 通证","sub_title":"ET通证是eNFT流量共享平台的交易通证，拥有丰富的应用场景","blocks":["易恩城市","NFT 市场","买卖朋友"],"links":{"more":"detail.html?id=gUlgekMahxbGc1B5rTlS"}},"e_right":{"title":"ET 通证专属权益","sub_title":"会员和 NFT 项目发行方可通过持有和使用 ET 通证来获得多样的权益服务","tips":["• 生态应用","• 参加课程培训","• 兑换限量 NFT","• 参与专场拍卖","• 获得项目曝光","..."],"links":{"more":"detail.html?id=1U2Gy06wq2k4B0NT8hNn"}},"e_nft":{"title":"ENFT 通证","sub_title":"应用于 eNFT Chain 应用链上铸造加密资产的原生通证，独有的应用场景和强劲的增值模型，推动价值不断上涨","tips":["NFT 铸造费","NFT 转移 Gas 费","NFT 持有税"],"links":{"more":"detail.html?id=SHbBp7s7EiYgCB6vIBV8"}},"e_foundation":{"title":"eNFT 基金会","sub_title":"由业界知名人士和机构共同发起成立基金会，支持 eNFT 社区蓬勃发展","items":[{"name":"唐儀","name_en":"Tony Tong","desc":"eNFT 基金会主席"},{"name":"周兵","name_en":"Tony Zhou","desc":"eNFT 基金会执行董事"},{"name":"艾伦·沃克","name_en":"Alan Walker","desc":"eNFT 基金首席技术官"},{"name":"DN 资本","name_en":"DN Capital","desc":"eNFT 种子基金赞助"}],"links":{"more":"detail.html?id=O06CHuj7IATmw8xDCn6M"}},"e_timeline":{"title":"eNFT 项目时间轴","times":[{"date":"2020年12月","event":"eNFT 协议等技术筹备"},{"date":"2021年2月","event":"eNFT 社区节点启动"},{"date":"2021年6月","event":"新加坡等超级节点启动"},{"date":"2021年8月","event":"挖ET活动开启"},{"date":"2021年9月","event":"eNFT应用链和ET钱包上线<br>实名认证上线"},{"date":"2021年10月","event":"答题闯关上线<br>eNFT浏览器上线"},{"date":"2021年11月起","event":"买卖好友PNFT<br>NFT111协议<br>NFT市场<br>易恩城市ENCity<br>等陆续上线"},{"date":"2021年四季度","event":"ET/ENFT上交易市场"}]},"e_footer":{"quicks":{"about":{"_self":"关于 eNFT","enft_community":"eNFT 社区","enft_protocol":"NFT111 协议","et_token":"ET 通证","enft_token":"ENFT 通证"},"community":{"_self":"社区治理","decision_node":"决策节点","national_super_node":"国家超级节点","industry_alliance_node":"产业联盟节点","community_node":"社区节点"},"announcement":{"_self":"揭榜机制","et_on_the_exchange":"ET 上交易所","ecological_application":"生态应用","digital_supervision_warehouse":"数字监管仓"},"ecological":{"_self":"生态应用","pnet":"买卖朋友","et_city":"易恩城市","nft_market":"NFT 市场"}},"find_us":"找到我们","copyright":"© 2021 Digital NFT Foundation Pte.Ltd.","links":{"quicks":{"about":{"enft_community":"detail.html?id=U2L6nGPm97OQa0fk8mKN","enft_protocol":"detail.html?id=do7K6PXK5jI4jvwEjNLv","et_token":"detail.html?id=gUlgekMahxbGc1B5rTlS","enft_token":"detail.html?id=SHbBp7s7EiYgCB6vIBV8"},"community":{"decision_node":"detail.html?id=tPlrnu3MFNh4wks6aG8u","national_super_node":"detail.html?id=yXKMxOU74sL0DNIFdsac","industry_alliance_node":"detail.html?id=uvQXNxCkenpX6nKNqMW9","community_node":"detail.html?id=hyi2gzGWBxc4ADwClDjw"},"announcement":{"et_on_the_exchange":"detail.html?id=YzbJjR4LAtG8PsPmpiiG","ecological_application":"detail.html?id=h3oHWMGMdsXpSB1hNNSx","digital_supervision_warehouse":"detail.html?id=lC14mzC0Ia2JeiBBquaE"},"ecological":{"pnet":"detail.html?id=w9bYiUiTkq87A6J1ufDJ","et_city":"detail.html?id=VtcOJdzw8PlVUdzrl53p","nft_market":"detail.html?id=FrKs8AHovFIvD4xMRXJM"}},"find_us":{"twitter":"http://twitter.com/eNFT111","telegram":"https://t.me/enft111","btok":"https://0.plus/enft111","apple":"itms-services://?action=download-manifest&url=https://h5.enft111.com/ExportOptions.plist","android":"https://h5.enft111.com/enft.apk"}}}}')},"832a":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c");function i(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function a(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}function o(){return!a()}},"83af":function(e,t,n){"use strict";n("1106")},a3a5:function(e,t,n){"use strict";var i=n("efe4"),a=n.n(i),o=a()();t["a"]=o},cb27:function(e,t,n){"use strict";var i=n("832a"),a={computed:{is_pc:function(){return Object(i["b"])()}}};t["a"]=a},e088:function(e){e.exports=JSON.parse('{"common":{"title":"eNFT community","more":"View details"},"e_header":{"lang_en":"English","lang_zh":"简体中文","title":"Everyone\'s NFT shared traffic platform","white_paper":"Download the white paper","apple":"iOS (In-house)","android":"Android App","links":{"white_paper":"https://enft111.com/en.pdf","apple":"itms-services://?action=download-manifest&url=https://h5.enft.tv/ExportOptions.plist","android":"https://h5.enft111.com/enft.apk"}},"e_runtime":{"head":"eNFT community real-time data","k0":"Nodes","k1":"Members","k2":"Total computing power（P）","k3":"Projects","k4":"Transactions","k5":"Trading volume（ET）"},"e_community":{"entf_text0":"Community governance","entf_text1":"Value sharing","entf_text2":"Ecological <br/>co-creation","entf_title":"eNFT community","entf_desc":"The eNFT community volunteers include crypto artists,NFT enthusiasts,chain gamers,digital art scholars,crypto collectors enthusiasts from all over the world","entf_join":"Become a community volunteer","enft_manage_title":"Community governance","enft_manage_items":[{"line0":"Decision Node","line1":"A community meeting center composed of well-know instituions"},{"line0":"National Super Node","line1":"The eNFT community in the country/region where it operates"},{"line0":"Industry Alliance Node","line1":"Exclusive agent for NFT industry services in the alliance"},{"line0":"Community Node","line1":"Form a team, operate community nodes, EN City and play earning guild"}],"links":{"entf_join":"detail.html?id=MTM0cGa0LOMCVesPKJ8S","enft_manage_items":["detail.html?id=rLfYrpw7wkmCca3Qk8yP","detail.html?id=jE1ih1bfO68g5zakX4Ns","detail.html?id=4BYQADQa7obk1zprGReX","detail.html?id=HeDkWKh2W83t9eFU9AMM"]}},"e_ecosystem":{"title":"Ecological layout","name0":"Application layer","name1":"NFT social","name2":"eNFT market","name3":"Defi + NFT","name4":"NFT data and personalized recommendations","name5":"Ecological application","name6":"Metaverse","name7":"Protocol layer","name8":"Liquidity Agreement NFT111","name9":"NFT issuance","name10":"Infrastructure","name11":"Side chain","name12":"Wallet","name13":"NFT casting tools","name14":"Other","name15":"Encrypted IM","name16":"Encryption Microblog"},"e_notice":{"title":"Announcement mechanism","sub_title":"Community members show their magical powers and win rich ecological incentives","categories":[{"name":"Exchange list","items":[{"name":"Binance","status":"Call for"},{"name":"Huobi Global","status":"Call for"},{"name":"OKEX","status":"Call for"}]},{"name":"Ecological application list","items":[{"name":"PNFT","status":"completed"},{"name":"eNFT Market","status":"Call for"},{"name":"EN city","status":"Call for"}]},{"name":"Digital supervision warehouse list","items":[{"name":"Luxury regulatory warehouse","status":"completed"},{"name":"Tea supervision warehouse","status":"completed"},{"name":"Liquor supervision warehouse","status":"Call for"}]}],"links":{"categories":["detail.html?id=xhySfHCVwt352aF1SlYR","detail.html?id=RSLQ8rcb9NDrrkYXIvfx","detail.html?id=6pyMu8DJXalgTXvOaprg"]}},"e_protocol":{"title":"NFT111 Liquidity Agreement","sub_title":"An NFT agreement with the characteristics of a communal economy","items":["Permanent auction","Always split commissions","Clear copyright"],"links":{"more":"detail.html?id=shb6hF1UxrAdgVPAehEK"}},"e_recommend":{"title":"eNFT intelligent reco-mmendation system","items":["Mining personal big data","Mining the big data of NFT works"],"links":{"more":"detail.html?id=dAg5n5pFAV4bPUUdanAU"}},"e_token":{"title":"ET token","sub_title":"The traffic ecological certificate applied to the eNFT network has a wealth of application scenarios","blocks":["EN city","NFT Market","PNFT"],"links":{"more":"detail.html?id=QhT5agx9RliNKbfOaErY"}},"e_right":{"title":"Exclusive rights of ET token","sub_title":"Members and NFT project issuers can obtain a variety of rights services by holding and using ET tokens","tips":["• Dapp","• Course training","• Limited Edition NFT","• Auction","• Project exposure","..."],"links":{"more":"detail.html?id="}},"e_nft":{"title":"ENFT token","sub_title":"The original token used in the casting of encrypted assets on the NFT Chain public chain, unique application scenarios and strong value-added models,promote the continuous increase in value","tips":["NFT casting fee","NFT transfer GAS fee","NFT hold tax"],"links":{"more":"detail.html?id=FiE6zbelMTKexT320u55"}},"e_foundation":{"title":"eNFT Foundation","sub_title":"Co-sponsored by industry celebrities and institutions to establish a foundation to support the vigorous development of the eNFT community","items":[{"name":"Tony Tong","name_en":"","desc":"Chairman of eNFT Foundation"},{"name":"Tony Zhou","name_en":"","desc":"Executive Director of eNFT Foundation"},{"name":"Alan Walker","name_en":"","desc":"Chief Technology Officer of eNFT Fund"},{"name":"DN Capital","name_en":"","desc":"eNFT Seed Fund Sponsor"}],"links":{"more":"detail.html?id=fznLrJs25wkMgKLJA3xv"}},"e_timeline":{"title":"eNFT project timeline","times":[{"date":"December 2020","event":"Technical preparation such as eNFT agreement"},{"date":"February 2021","event":"eNFT community nodes launched"},{"date":"June 2021","event":"Singapore and other super nodes started"},{"date":"August 2021","event":"ET founding round mining started, PNFT application launched"},{"date":"September 2021","event":"eNFT market is online"},{"date":"2021年10月","event":"答题闯关上线<br>eNFT浏览器上线"},{"date":"2021年11月起","event":"买卖好友PNFT<br>NFT111协议<br>NFT市场<br>易恩城市ENCity<br>等陆续上线"},{"date":"Fourth quarter of 2021","event":"ET is listed on Exchanges"}]},"e_footer":{"quicks":{"about":{"_self":"About eNFT","enft_community":"eNFT community","enft_protocol":"eNFT protocol","et_token":"ET token","enft_token":"ENFT token"},"community":{"_self":"Community governance","decision_node":"Decision node","national_super_node":"National Super Node","industry_alliance_node":"Industry Alliance Node","community_node":"Community node"},"announcement":{"_self":"Announcement mechanism","et_on_the_exchange":"ET is listed on Exchanges","ecological_application":"Ecological application","digital_supervision_warehouse":"Digital supervision warehouse"},"ecological":{"_self":"Ecological application","pnet":"PNFT","et_city":"EN city","nft_market":"NFT market"}},"find_us":"Find us","copyright":"© 2021 Digital NFT Foundation Pte.Ltd.","links":{"quicks":{"about":{"enft_community":"detail.html?id=MTM0cGa0LOMCVesPKJ8S","enft_protocol":"detail.html?id=dAg5n5pFAV4bPUUdanAU","et_token":"detail.html?id=QhT5agx9RliNKbfOaErY","enft_token":"detail.html?id=FiE6zbelMTKexT320u55"},"community":{"decision_node":"detail.html?id=rLfYrpw7wkmCca3Qk8yP","national_super_node":"detail.html?id=jE1ih1bfO68g5zakX4Ns","industry_alliance_node":"detail.html?id=4BYQADQa7obk1zprGReX","community_node":"detail.html?id=HeDkWKh2W83t9eFU9AMM"},"announcement":{"et_on_the_exchange":"detail.html?id=xhySfHCVwt352aF1SlYR","ecological_application":"detail.html?id=RSLQ8rcb9NDrrkYXIvfx","digital_supervision_warehouse":"detail.html?id=6pyMu8DJXalgTXvOaprg"},"ecological":{"pnet":"detail.html?id=QkDj1dhKJLcWWyEyoVgR","et_city":"detail.html?id=0H58MoTu8E013FWMXbu4","nft_market":"detail.html?id=T9oJhyLP7FL5JVTQQ2pG"}},"find_us":{"twitter":"http://twitter.com/eNFT111","telegram":"https://t.me/enft111","btok":"https://0.plus/enft111","apple":"itms-services://?action=download-manifest&url=https://h5.enft111.com/ExportOptions.plist","android":"https://h5.enft111.com/enft.apk"}}}}')},fafa:function(e,t,n){e.exports=n.p+"img/logo@2x.6d3aea32.png"}});