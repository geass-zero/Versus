(this.webpackJsonpVersus=this.webpackJsonpVersus||[]).push([[0],{287:function(e,t,n){},293:function(e){e.exports=JSON.parse('{"contractName":"Prediction","abi":[{"inputs":[{"internalType":"address","name":"_devFund","type":"address"},{"internalType":"address","name":"_nyanRewards","type":"address"},{"internalType":"address","name":"_versusRewards","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"closePrediction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"string","name":"marketName","type":"string"}],"name":"createMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"eachMarketData","outputs":[{"internalType":"string","name":"marketName","type":"string"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"expirationBlock","type":"uint256"},{"internalType":"int256","name":"currentRound","type":"int256"},{"internalType":"int256","name":"targetPrice","type":"int256"},{"internalType":"uint256","name":"ETHLong","type":"uint256"},{"internalType":"uint256","name":"ETHShort","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"expire","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"}],"name":"getMarketDetails","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ETHAmount","type":"uint256"}],"name":"handleFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"markets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nyanRewards","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"isLonging","type":"bool"}],"name":"predict","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_versus","type":"address"}],"name":"setVersus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userPrediction","outputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"int256","name":"price","type":"int256"},{"internalType":"int256","name":"round","type":"int256"},{"internalType":"uint256","name":"ETHUsed","type":"uint256"},{"internalType":"bool","name":"isLonging","type":"bool"},{"internalType":"uint256","name":"expirationBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"versusContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"versusRewards","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')},294:function(e){e.exports=JSON.parse('{"contractName":"Versus","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"nyanClaimStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nyan","type":"address"}],"name":"nyanContractsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"nyanVersusClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_contract","type":"address"}],"name":"predictionContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"}],"name":"predictionRewarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"versusLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"rewardsContract","type":"address"}],"name":"versusRewardsContractsSet","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"claimAndLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimNyanVersus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hasNyanClaimStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isNyanEligible","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNyanLPMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNyanMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nyan","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"predictionContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rewardPrediction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nyan","type":"address"}],"name":"setNyanContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"predict","type":"address"}],"name":"setPredictionContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewards","type":"address"}],"name":"setVersusRewardsContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNyanClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userClaimLock","outputs":[{"internalType":"uint256","name":"unlockBlock","type":"uint256"},{"internalType":"bool","name":"hasClaimedNyan","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"versusOld","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"versusRewards","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]}')},304:function(e,t,n){},318:function(e,t){},341:function(e,t){},343:function(e,t){},419:function(e,t){},421:function(e,t){},453:function(e,t){},458:function(e,t){},460:function(e,t){},467:function(e,t){},480:function(e,t){},561:function(e,t){},719:function(e){e.exports=JSON.parse("{}")},727:function(e,t,n){},728:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"createInstance",(function(){return C})),n.d(a,"getInstance",(function(){return H}));var r={};n.r(r),n.d(r,"getCurrentAccount",(function(){return B}));var s={};n.r(s),n.d(s,"getVersusMarkets",(function(){return Y})),n.d(s,"getMarketDetails",(function(){return q})),n.d(s,"getUserPrediction",(function(){return X})),n.d(s,"getCurrentPairPrice",(function(){return ee})),n.d(s,"makePrediction",(function(){return ne})),n.d(s,"expireMarket",(function(){return re})),n.d(s,"closePrediction",(function(){return ie})),n.d(s,"isEligibleForClaim",(function(){return ce})),n.d(s,"claimVersus",(function(){return pe})),n.d(s,"isSettingsShowing",(function(){return L})),n.d(s,"toggleSettings",(function(){return _})),n.d(s,"settingOp",(function(){return F}));var i=n(4),u=n(5),c=n.n(u),o=n(289),p=n.n(o),d=(n(304),n(63)),l=n(733),y=n(95),m=n(20),b=n(3),f=n.n(b),h=n(15),x=n(8),v=n(9),j=n(14),w=n(13),k=n(42),T=n.n(k),g=n(292),O=n.n(g),N=n(112),M=n.n(N),P=n(46),C=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n,a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E(),n=S(t),a=!1,e.prev=3,e.next=6,n.connect();case 6:a=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),console.log("exception thrown while instantiating web3modal"),console.log(e.t0),e.abrupt("return",!1);case 14:return r=new T.a(a),e.next=17,r.eth.getAccounts();case 17:return s=e.sent,A(r,s,n),e.abrupt("return",r);case 20:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),E=function(){return{walletconnect:{package:M.a,options:{infuraId:"83301e4b4e234662b7769295c0f4a2e1"}}}},S=function(e){return new O.a({network:"mainnet",cacheProvider:!0,providerOptions:e,theme:{background:"rgb(253, 250, 250)",main:"rgb(33, 37, 41)",secondary:"rgb(136, 136, 136)",border:"rgba(195, 195, 195, 0.14)",hover:"rgb(252,163,220)"}})},H=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(P.getGlobal)().web3Instance){e.next=5;break}return e.next=4,C();case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e,t,n){Object(P.setGlobal)({web3Instance:e,accounts:t,web3Modal:n})},B=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(P.getGlobal)().accounts){e.next=10;break}return e.next=4,a.getInstance();case 4:if(!(n=e.sent)){e.next=10;break}return e.next=8,n.eth.getAccounts();case 8:return r=e.sent,e.abrupt("return",r[0]);case 10:if(!t){e.next=14;break}return e.abrupt("return",t[0]);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(n(719),n(293)),V=n(294),L=!1,R="0x147b568A032B520B93fD0680BD295761eDA9fc5f",W="0x0032983c554f08fD21675DBC83E323cc7Cf2c3fe";function _(){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L=!L;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return U.apply(this,arguments)}function U(){return(U=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return J.apply(this,arguments)}function J(){return(J=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.predictionCI,e.next=3,a.getInstance();case 3:return t=e.sent,window.predictionCI=new t.eth.Contract(I.abi,R),e.abrupt("return",window.predictionCI);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return K.apply(this,arguments)}function K(){return(K=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.nyanCI,e.next=3,a.getInstance();case 3:return t=e.sent,window.versusCI=new t.eth.Contract(V.abi,W),e.abrupt("return",window.versusCI);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return $.apply(this,arguments)}function $(){return($=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return e.sent,e.next=5,G();case 5:return t=e.sent,e.next=8,t.methods.getMarkets().call();case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return e.sent,e.next=5,G();case 5:return n=e.sent,e.next=8,n.methods.getMarketDetails(t).call();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return Z.apply(this,arguments)}function Z(){return(Z=Object(h.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return t=e.sent,e.next=5,G();case 5:return n=e.sent,e.next=8,n.methods.userPrediction(t).call();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:return n=e.sent,e.next=5,n.methods.getLatestPrice(t).call();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t,n){return ae.apply(this,arguments)}function ae(){return(ae=Object(h.a)(f.a.mark((function e(t,n,a){var s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return s=e.sent,e.next=5,G();case 5:return i=e.sent,e.next=8,i.methods.predict(t,a).send({from:s,value:n});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return se.apply(this,arguments)}function se(){return(se=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return n=e.sent,e.next=5,G();case 5:return a=e.sent,e.next=8,a.methods.expire(t).send({from:n});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return ue.apply(this,arguments)}function ue(){return(ue=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return t=e.sent,e.next=5,G();case 5:return n=e.sent,e.next=8,n.methods.closePrediction().send({from:t});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return oe.apply(this,arguments)}function oe(){return(oe=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return t=e.sent,e.next=5,z();case 5:return n=e.sent,e.next=8,n.methods.isNyanEligible(t).call();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return de.apply(this,arguments)}function de(){return(de=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrentAccount();case 2:return t=e.sent,e.next=5,z();case 5:return n=e.sent,e.next=8,n.methods.claimNyanVersus().send({from:t});case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.Component;var le=function(e){Object(j.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).state={myETHBalance:0,userHasPrediction:!1,userPredictionExp:0,userPredictionPair:"",userPredictionPrice:0,userPredictionPosition:!1,markets:[],currentBlock:0,isNyanEligible:!1},e.componentDidMount=Object(h.a)(f.a.mark((function t(){var n,a,i,u,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new T.a(new T.a.providers.HttpProvider("https://mainnet.infura.io/v3/6162d64a9204425eb2dbe20e893c85d0")),t.next=3,r.getCurrentAccount();case 3:if(a=t.sent,console.log(a),a){t.next=7;break}return t.abrupt("return");case 7:return t.t0=e,t.t1=n.utils,t.next=11,n.eth.getBalance(a);case 11:return t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),t.t4={myETHBalance:t.t3},t.t0.setState.call(t.t0,t.t4),t.prev=15,t.next=18,s.getVersusMarkets();case 18:i=t.sent,u=[],c=0;case 21:if(!(c<i.length)){t.next=29;break}return t.next=24,s.getMarketDetails(i[c]);case 24:o=t.sent,u.push({address:i[c],name:o[6],startblock:o[0],endblock:o[1],currentround:o[2],targetprice:o[3],ETHLong:n.utils.fromWei(o[4]),ETHShort:n.utils.fromWei(o[5])});case 26:c++,t.next=21;break;case 29:return e.setState({markets:u}),t.t5=e,t.next=33,n.eth.getBlockNumber();case 33:return t.t6=t.sent,t.t7={currentBlock:t.t6},t.t5.setState.call(t.t5,t.t7),t.next=38,e.hasUserPredicted();case 38:t.next=42;break;case 40:t.prev=40,t.t8=t.catch(15);case 42:return t.t9=e,t.next=45,s.isEligibleForClaim();case 45:t.t10=t.sent,t.t11={isNyanEligible:t.t10},t.t9.setState.call(t.t9,t.t11);case 48:case"end":return t.stop()}}),t,null,[[15,40]])}))),e.claimNyanVersus=Object(h.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.claimVersus();case 2:e.setState({isNyanEligible:!1});case 3:case"end":return t.stop()}}),t)}))),e.makePrediction=function(){var e=Object(h.a)(f.a.mark((function e(t,n,a){var r,i,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new T.a,"long"==a?(i=document.getElementById("long-input-"+t).value,s.makePrediction(n,r.utils.toWei(i.toString()),!0)):(u=document.getElementById("short-input-"+t).value,s.makePrediction(n,r.utils.toWei(u.toString()),!1));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),e.expireMarket=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.expireMarket(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.closeUserPrediction=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.closePrediction();case 1:case"end":return e.stop()}}),e)}))),e.isUserWinning=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.next=3,s.getCurrentPairPrice(e.state.userPredictionPair);case 3:return t.sent>e.state.userPredictionPrice?e.state.userPredictionPosition||(n=!0):e.state.userPredictionPosition&&(n=!0),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),e.hasUserPredicted=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.getUserPrediction();case 2:"0x0000000000000000000000000000000000000000"===(n=t.sent)[0]?e.setState({userHasPrediction:!1}):e.setState({userHasPrediction:!0,userPredictionPair:n[0],userPredictionExp:n[5],userPredictionPosition:n[4]});case 4:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"formatPrice",value:function(e,t){var n=new T.a(new T.a.providers.HttpProvider("https://kovan.infura.io/v3/6162d64a9204425eb2dbe20e893c85d0"));if(" ETH"==e.split("/")[1])return n.utils.fromWei(t.toString())+" ETH"}},{key:"populateMarkets",value:function(){for(var e=this,t=[],n=function(n){t.push(Object(i.jsxs)("div",{className:"each-market",children:[Object(i.jsx)("div",{className:"market-name",children:e.state.markets[n].name}),Object(i.jsxs)("div",{className:"market-target",children:["Target Price:",Object(i.jsx)("span",{className:"target-price",children:e.formatPrice(e.state.markets[n].name,e.state.markets[n].targetprice)})]}),e.state.currentBlock>e.state.markets[n].endblock?Object(i.jsx)("div",{onClick:function(){return e.expireMarket(e.state.markets[n].address)},className:"market-expired",children:"Expire!"}):Object(i.jsxs)("div",{className:"market-expiration",children:["Expires in: ",e.state.markets[n].endblock-e.state.currentBlock," blocks"]}),Object(i.jsxs)("div",{className:"predict-container",children:[Object(i.jsxs)("div",{className:"short-box",children:[Object(i.jsx)("input",{id:"short-input-"+n,placeholder:"Enter ETH to stake",type:"number",className:"predict-input"}),Object(i.jsx)("div",{onClick:function(){return e.makePrediction(n,e.state.markets[n].address,"short")},id:"short-button-"+n,className:"short-button",children:"SHORT"}),Object(i.jsxs)("div",{className:"ETH-pooled",children:[e.state.markets[n].ETHShort," ETH pooled"]})]}),Object(i.jsxs)("div",{className:"long-box",children:[Object(i.jsx)("input",{id:"long-input-"+n,placeholder:"Enter ETH to stake",type:"number",className:"predict-input"}),Object(i.jsx)("div",{onClick:function(){return e.makePrediction(n,e.state.markets[n].address,"long")},id:"long-button-"+n,className:"short-button",children:"LONG"}),Object(i.jsxs)("div",{className:"ETH-pooled",children:[e.state.markets[n].ETHLong," ETH pooled"]})]})]})]}))},a=0;a<this.state.markets.length;a++)n(a);return t}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"predict-body",children:[this.state.isNyanEligible?Object(i.jsxs)("div",{className:"nyan-claim-container",children:[Object(i.jsx)("div",{className:"nyan-detected",children:"Your address either holds Nyan-2 or stakes Nyan-2 LP"}),Object(i.jsx)("div",{className:"claim-nyan-versus",onClick:function(){return e.claimNyanVersus()},children:"CLAIM"})]}):null,Object(i.jsx)("div",{className:"my-versus",children:"My Versus: 0"}),Object(i.jsxs)("div",{className:"my-ETH",children:["ETH in Wallet: ",this.state.myETHBalance]}),Object(i.jsx)("a",{className:"profit-href",target:"_blank",href:"https://nyanfinance.medium.com/versus-decentralized-price-prediction-markets-91a88fcbc0aa",children:Object(i.jsx)("div",{className:"how-to-profit",children:"What is Versus?"})}),Object(i.jsx)("h2",{className:"market-header",children:"Markets"}),Object(i.jsx)("div",{className:"divider"}),0==this.state.markets.length?Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"reload",children:"After connecting, reload your page"}),Object(i.jsx)("div",{className:"reload",children:"Currently live on the Kovan testnet"})]}):null,this.state.userHasPrediction?Object(i.jsxs)("div",{className:"each-market",children:[Object(i.jsx)("div",{className:"market-name",children:"My Active Prediction"}),Object(i.jsx)("div",{className:"market-name",children:"Pair Name: ETH/???"}),Object(i.jsxs)("div",{className:"market-target",children:["Target Price: ",Object(i.jsx)("span",{className:"target-price",children:"$0"})]}),this.state.currentBlock>this.state.userPredictionExp?Object(i.jsx)("div",{className:"market-expired",children:"Expire!"}):Object(i.jsxs)("div",{className:"market-expiration",children:["Expires in: ",this.state.userPredictionExp-this.state.currentBlock," blocks"]}),Object(i.jsx)("div",{className:"prediction-status",children:this.isUserWinning()?Object(i.jsx)("div",{className:"user-winning",children:Object(i.jsx)("div",{className:"p-s-text",children:"Currently Winning!"})}):Object(i.jsx)("div",{className:"user-losing",children:Object(i.jsx)("div",{className:"p-s-text",children:"Currently Losing"})})})]}):null,this.populateMarkets()]})}}]),n}(u.Component),ye=function(e){var t=Object(P.useGlobal)("web3Instance");Object(y.a)(t,1)[0];return Object(i.jsxs)("div",{className:"application-body",children:[Object(i.jsx)(m.a,{exact:!0,path:"/",component:le}),Object(i.jsx)(m.a,{exact:!0,path:"/predict",component:le})]})},me=(n(727),n(287),function(e){var t=Object(P.useGlobal)("web3Instance"),n=Object(y.a)(t,1)[0],s=Object(u.useState)(0),c=Object(y.a)(s,2),o=c[0],p=c[1],l=!1;function m(){return b.apply(this,arguments)}function b(){return(b=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.createInstance();case 2:if(!e.sent){e.next=9;break}return e.t0=p,e.next=7,r.getCurrentAccount();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(),!n){e.next=5;break}return e.next=4,r.getCurrentAccount();case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.jsxs)("div",{className:"nav-bg",children:[Object(i.jsx)("h1",{className:"site-title",children:Object(i.jsx)(d.b,{to:"/",className:"router-link",children:"Versus"})}),Object(i.jsx)("div",{class:"price-feeds",children:"Price feeds by Chainlink"}),l?Object(i.jsxs)("div",{className:"settings-container",children:[Object(i.jsx)("div",{className:"settings-chain-c",children:Object(i.jsxs)("div",{className:"settings-chain",children:["Select Chain:",Object(i.jsx)("div",{className:"settings-chain-option",children:"ETHEREUM"}),Object(i.jsx)("div",{className:"settings-chain-option",children:"BINANCE SMART CHAIN (soon)"})]})}),Object(i.jsx)("div",{className:"settings-chain-c",children:Object(i.jsxs)("div",{className:"settings-chain",children:["Select Network:",Object(i.jsx)("div",{className:"settings-chain-option",children:"Mainnet"}),Object(i.jsx)("div",{className:"settings-chain-option",children:"Testnet"})]})})]}):null,o?Object(i.jsxs)("div",{className:"menu-icon",children:["Wallet:...",o.substring(o.length-8),Object(i.jsx)("div",{onClick:function(){},className:"disconnect"})]}):Object(i.jsx)("div",{onClick:function(){return m()},className:"menu-icon",children:"Connect To Wallet"})]})}),be=function(){return Object(i.jsx)(l.a,{fluid:!0,children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(me,{}),Object(i.jsx)(ye,{})]})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,734)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};p.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(be,{})}),document.getElementById("root")),fe()}},[[728,1,2]]]);
//# sourceMappingURL=main.a385b878.chunk.js.map