var api = 'https://karbo.club/services/node_web';
var apiList = ["http://45.32.232.11:32348", "http://95.46.98.64:32348/"];
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'KRB';
var refreshDelay = 30000;
var whiteTheme = "css/themes/white-theme.css";
var nightTheme = "css/themes/dark-theme.css";
// pools stats by MainCoins
var poolsStat = 
	[
		["karbo.hashvault.pro", "https://karbo.hashvault.pro/api/pool/stats"],
		["krb.semipool.com", "https://webkrb.semipool.com/api/pool/stats"],
		["krb.mypool.name", "https://api.krb.mypool.online/stats"],
		["democats.org/pool/?name=karbowanec", "http://pool2.democats.org:7673/stats"],
		["pool.karbowanec.com", "http://pool.karbowanec.com:8117/stats"],
		["krb.cryptonotepool.com", "http://5.189.135.137:8618/stats"],
		["krb.crypto-coins.club", "http://krb.crypto-coins.club:8118/stats"],
		["krb.sberex.com", "http://krb.sberex.com:7006/stats"],
		["krb.cryptomine.pro", "http://krb.cryptomine.pro:8117/stats"],
		["karbo-pool.pp.ua", "http://karbo-pool.pp.ua:25417/stats"],
		["easyhash.io/pools/krb", "https://api-krb.easyhash.io/stats"],
		["krbpool.ml", "http://krbpool.ml:8117/stats"],
		["krb.kopanka.com", "http://kopanka.com:8117/stats"],
		["usa.krb.kopanka.com", "http://usa.krb.kopanka.com:8117/stats"],
		["karbowanec.hashparty.io", "http://karbowanec.hashparty.io:8117/stats"],
		["karbo.farm", "https://eu1.karbo.farm/api/stats"],
		["krbpool.com", "http://pool.krbpool.com:8117/stats"],
		["krb.multipool.online", "http://krb.multipool.online:8119/stats"],
		["krb.miner.rocks", "https://krb.miner.rocks/api/stats"],
		["krb.dreampool.info", "https://krb.dreampool.info/api/stats"],
		["krb.soyminero.es", "http://krb.soyminero.es:8119/stats"],
		["krb.mininglamp.ml", "http://35.197.65.235:8117/stats"],
		["karbo.coinwire.eu", "http://karbo.coinwire.eu:8118/stats"],
		["karbunkul.ga", "http://karbunkul.ga:3389/stats"],
		["krb.ocukminingpool.com", "http://ocukminingpool.com:8118/stats"],
		["krb.fastpool.io", "http://krb.fastpool.io:8185/stats"],
		["karbowanec.hashparty.io", "http://karbowanec-pool.hashparty.io:8117/stats"],
		["pool.krb-ua.tk", "http://pool.krb-ua.tk:8117/stats"],
		["krb.pool.ualinux.com", "http://krb.pool.ualinux.com:8117/stats"],
		["krb.agilepools.com", "https://krb.agilepools.com/api/stats"],
		["krb.fastpool.eu", "http://krb.fastpool.eu:8118/stats"],
		["karbo.luckypool.org", "https://karbo.luckypool.org/api/stats"],
		["krbpool.pp.ua", "https://krbpool.pp.ua:8118/stats"],
		["krb.freshpool.org", "https://krb.freshpool.org:13001/stats"],
		["krb.tfoto.com.ua", "http://178.150.34.202:8117/stats"],
		["pool.mineallcrypto.com", "http://pool.mineallcrypto.com/pool/stats/?symbol=KRB"],
		["krb.mine.nu", "http://krb.mine.nu:8117/stats"],
		["krb.i-holder.net", "http://krb.i-holder.net:8117/stats"],
		["karbo.proofpool.org", "http://proofpool.org:8119/stats"],
		["karbo.pool.multed.com", "http://karbo.pool.multed.com:8117/stats"],
		["cryptoknight.cc/karbo", "https://cryptoknight.cc/rpc/karbo/stats"],
		["mineallcrypto.com/karbowanec", "https://mineallcrypto.com/karbowanec/pool/stats"],
		["krb.irdpool.ru", "http://krb.irdpool.ru:8112/stats"],
		["krb.simplypool.net", "http://85.10.204.245:1117/stats"],
		["krb.x-i-tech.com", "http://krb.x-i-tech.com:8117/stats"],
		["krb.sintezpool.com", "http://206.189.168.140:8117/stats"],
		["karbo.fairhash.org", "https://karbo.fairhash.org/api/stats"],
		["karbo.herominers.com", "https://karbo.herominers.com/api/stats"],
		["krb.hashgang.io", "https://eu1.krb.hashgang.io/api/stats"],
		["easyhash.pro/krb", "https://easyhash.pro/krb/api/stats"],
		["krb.mychainpools.com", "https://krb.mychainpools.com:8148/stats"],
		["krb.superpools.online", "http://krb.superpools.online:8117/stats"],
		["newpool.pw/krb", "https://minenice.newpool.pw:8215/stats"],
		["karbo.asiapool.io", "https://karbo.asiapool.io/api/stats"],
		["youpool.io/KARBO", "http://149.28.85.162:8128/stats"]
    ];
var nodesStat = 
	[
        ["https://grabbers.pp.ua:32448"],
        ["http://krbnode.cf:32348"],
		["http://krb.sberex.com:32348"],
		["http://n.karboon.pp.ua:32348"],
		["http://karboon.pp.ua:32348"],
		["http://51.15.201.166:32348"],
		["http://51.15.218.183:32348"],
		["http://51.15.74.207:32348"],
		["http://krbnode.ocukminingpool.com:32348"],
		["http://85.194.241.83:32348"],
		["http://212.80.59.96:32348"],
		["http://45.77.141.1:32348"],
		["http://free.rublin.org:32348"],
		["http://looongcat.pp.ua:32348"],
		["http://karbo.world:32348"],
		["http://karbo.cash:32348"],
		["http://node.karbo.space:32348"],
		["http://212.24.106.170:32348"],
		["http://138.201.91.104:32348"],
		["http://178.212.197.205:32348"],
		["http://krb.i-holder.net:55555"],
		["http://node.krb.mypool.online:32348"],
		["http://tonykarbo.tk:32348"],
		["http://176.9.107.175:32348"],
		["http://80.211.164.116:32348"],
		["http://37.139.4.158:32348"],
		["http://45.63.41.207:32348"],
		["http://45.63.105.210:32348"],
		["http://217.12.221.20:32348"],
		["http://128.0.174.209:32348"],
		["http://krb.master-node.network:32348"],
		["http://132.148.19.74:32348"],
		["http://158.140.206.99:32348"],
		["http://148.251.11.177:32348"],
		["http://104.199.88.35:32348"],
		["http://node.karbo-exchange.com.ua:32348"],
		["http://krb.thatsmy.tech:32348"],
		["http://karbo.pool.multed.com:32348"],
		["http://91.239.235.16:32348"],
		["http://karbo.dlinkddns.com:32348"],
		["http://173.212.201.123:32348"],
		["http://95.67.41.41:32348"],
		["http://krb.pool.ualinux.com:32348"],
		["http://krb.00.net.ua:32348"],
		["http://95.46.98.29:32348"],
		["http://krb.gordon.host:32348"],
		["http://karbonode.pp.ua:32348"],
		["http://node.karbo.farm:32348"],
		["http://5.189.135.137:32348"],
		["http://arbitmaster.com:32348"],
		["http://krbnode.3t.org.ua:32348"],
		["http://108.61.198.115:32348"],
		["http://31.41.219.221:32348"],
		["http://80.211.139.102:32348"],
		["http://node.krbpool.pp.ua:32348"],
		["http://88.198.25.81:32348"],
		["http://101.100.139.22:32348"],
		["http://35.240.206.232:32348"],
		["http://107.174.15.131:32348"],
		["http://178.234.37.123:32348"],
		["http://51.15.119.96:32348"],
		["http://51.15.232.206:32348"],
		["http://51.15.71.187:32348"],
		["http://95.46.98.64:32348"],
		["http://45.32.232.11:32348"],
		["http://51.15.252.228:32348"],
		["http://krb.nodemaster.pro:32348"],
		["http://krb2.nodemaster.pro:32348"],
		["http://noda.pp.ua:32348"],
		["http://35.237.126.109:32348"],
		["http://144.76.140.59:32348"],
		["http://178.63.69.60:32348"],
		["http://195.26.92.156:32348"],
		["http://karb.pp.ua:32348"],
		["http://krbnode.pp.ua:32348"],
		["http://karbonode.top:32348"],
		["http://krb.hashgang.io:32348"],
		["http://kabany.tk:32348"],
		["http://212.227.192.145:32348"],
		["http://51.15.75.207:32348"],
		["http://104.207.130.36:32348"]
    ];