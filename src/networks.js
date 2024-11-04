// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
var coins = require('./coins')

const bcrypto = require('./crypto')

const hashFunctions = {
  address: bcrypto.hash256, // sha256x2
  transaction: bcrypto.hash256 // sha256x2
}

const groestlHashFunctions = {
  address: bcrypto.groestl,
  transaction: bcrypto.sha256
}

module.exports = {
  vidulum: {
    messagePrefix: '\x18Vidulum Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1dd8,
    scriptHash: 0x1dde,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      //4: 0x00,
      4: 0x76b809bb,
      5: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  veruscoin: {
    messagePrefix: '\x18VerusCoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  ilcoin: {
    messagePrefix: '\x18ILCoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  "5gcash": {
    messagePrefix: '\x185G-Cash Signed Message:\n',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x0a, // https://github.com/5G-Cash/5G/blob/5799c7365d7655837d6e0f45dfce8dda69009566/src/chainparams.cpp#L191
    scriptHash: 0x0b,
    wif: 0xd2,
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  realcoin: {
    messagePrefix: '\x18RealCoin Signed Message:\n',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x3c, // https://github.com/realcoin-rea/rea/blob/007dea995bca2a77a27f0e01c6493ed053b48551/src/chainparams.cpp#L186
    scriptHash: 0x3d,
    wif: 0xbc, // https://github.com/realcoin-rea/rea/blob/007dea995bca2a77a27f0e01c6493ed053b48551/src/chainparams.cpp#L188
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  frenchdigital: {
    messagePrefix: '\x18French Digital Reserve Signed Message:\n',
    bip32: {
      public: 0x022d2523,
      private: 0x0221311b
    },
    pubKeyHash: 0x5f, // https://github.com/fdreserve/fdr-blockchain/blob/2db358b0c3fa9196e7c1b63d6645e55e6a6acb7b/src/chainparams.cpp#L162
    scriptHash: 0x5c,
    wif: 0x61, // https://github.com/fdreserve/fdr-blockchain/blob/2db358b0c3fa9196e7c1b63d6645e55e6a6acb7b/src/chainparams.cpp#L164
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  simplesoftwaresolutions: {
    messagePrefix: '\x18Simple Signed Message:\n',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x3f, // https://github.com/Simple-Software-Solutions/SSS-Core/blob/d29a5328168c612d98877c52b951976e56478fe2/src/chainparams.cpp#L226
    scriptHash: 0x13,
    wif: 0x2e,
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    coin: coins.LTC,
    hashFunctions: hashFunctions
  },
  scriv: {
    messagePrefix: '\x19SCRIV Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x7d, // Starts with 's'
    scriptHash: 0x10,
    wif: 0xcc,
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  dash: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x4c, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x10,
    wif: 0xcc,
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  dashTest: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x8c, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x13,
    wif: 0xef, // https://github.com/dashpay/godashutil/blob/master/wif.go#L72
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  bitcoincash: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BCH,
    forkId: 0x00,
    hashFunctions: hashFunctions
  },
  bitcoincandy: {
    messagePrefix: '\x18BitcoinCandy Signed Message:\n',
    bech32: 'cdy',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1c, // C
    scriptHash: 0x58, // c
    wif: 0x80,
    coin: coins.BCH,
    forkId: 0x6F,  // 111
    hashFunctions: hashFunctions
  },
  bitcoincashTestnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BCH,
    hashFunctions: hashFunctions
  },
  litecoinz: {
    messagePrefix: '\x18LitecoinZ Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x0ab3,
    scriptHash: 0x0ab8,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb //https://github.com/litecoinz-core/litecoinz/blob/8b9aa0e4a0f0aac48b4a9299c48b63305f709242/src/consensus/upgrades.cpp#L29
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  zcash: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0xc8e71055
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  zcashTest: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x1d25,
    scriptHash: 0x1cba,
    wif: 0xef,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  bitcoingold: {
    messagePrefix: '\x18Bitcoin Gold Signed Message:\n',
    bech32: 'btg',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x17,
    wif: 0x80,
    coin: coins.BTG,
    forkId: 0x4F, /* 79 */
    hashFunctions: hashFunctions
  },
  komodo: {
    messagePrefix: '\x18Komodo Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  safecoin: {
    messagePrefix: '\x18Safecoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21f,
      private: 0x0488ade5
    },
    pubKeyHash: 0x3d,
    scriptHash: 0x56,
    wif: 0xbd,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  pivx: {
    messagePrefix: "\x18PIVX Signed Message:\n",
    bech32: "bc",
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x1e,
    scriptHash: 0xd0,
    wif: 0xd4,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  bithereum: {
    messagePrefix: '\x18Bithereum Signed Message:\n',
    bech32: 'bth',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x19,
    scriptHash: 0x28,
    wif: 0x80,
    coin: coins.BTH,
    forkId: 0x55, /* 85 */
    hashFunctions: hashFunctions
  },
  zelcash: {
    messagePrefix: '\x18ZelCash Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  zero: {
    messagePrefix: '\x18Zero Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x6f76727a,
      4: 0x7361707a
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  gemlink: {
    messagePrefix: '\x18Gemlink Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1c28,
    scriptHash: 0x1c2d,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  snowgem: {
    messagePrefix: '\x18Snowgem Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1c28,
    scriptHash: 0x1c2d,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  commercium: {
    messagePrefix: '\x18Commercium Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x33,
    wif: 0x8c,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  groestlcoin: {
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'grs',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x24,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.GRS,
    hashFunctions: groestlHashFunctions
  },
  zclassic: {
    messagePrefix: '\x18Zclassic Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x930b540d
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  bzedge: {
    messagePrefix: '\x18Bzedge Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x6f77627a,
      4: 0x736c627a
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  genesis: {
    messagePrefix: "\x18Genesis Signed Message: \n",
    bech32: "genx",
    bip32: {
      public: 0x53414645,
      private: 0x53616665,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x3f,
    wif: 0x30,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  bitcoinzero: {
    messagePrefix: "\x18BitcoinZero Signed Message: \n",
    bech32: "bzx", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x22,
    wif: 0xd2,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  bitcoinz: {
    messagePrefix: '\x18BitcoinZ Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  hush: {
    messagePrefix: '\x18Hush Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  ravencoin: {
    messagePrefix: "\x18Ravencoin Signed Message: \n",
    bech32: "rvn", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x7a,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  ravencoinclassic: {
    messagePrefix: "\x18Ravencoin Classic Signed Message: \n",
    bech32: "rvn", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x7a,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  satoxcoin: {
    messagePrefix: "\x18Satoxcoin Signed Message: \n",
    bech32: "", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3F,
    scriptHash: 0x7A,
    wif: 0x70,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  frencoin: {
    messagePrefix: "\x18Frencoin Signed Message: \n",
    bech32: "rvn", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x5f,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  neurai: {
    messagePrefix: "\x18Neurai Signed Message: \n",
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x35, //N
    scriptHash: 0x75,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  neoxachain: {
    messagePrefix: "\x18Neoxa Signed Message: \n",
    // bech32: "rvn", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x7,
    wif: 0x70,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  meowcoin: {
    messagePrefix: "\x18Meowcoin Signed Message: \n",
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x7a,
    wif: 0x70,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  raptoreum: {
    messagePrefix: "\x18Raptoreum Signed Message: \n",
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x10,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  cloreai: {
    messagePrefix: "\x18Clore Signed Message: \n",
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x7a,
    wif: 0x70,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  bitcore: {
    messagePrefix: "\x18Bitcore Signed Message: \n",
    bech32: "btx", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x03,
    scriptHash: 0x7d,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  zcoin: {
    messagePrefix: "\x18Zcoin Signed Message: \n",
    bech32: "xzc", // not known
    bip32: {
      public:  0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x52,
    scriptHash: 0x07,
    wif: 0xd2,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  axe: {
    messagePrefix: '\x19Axe Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x37, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x10,
    wif: 0xcc,
    coin: coins.DASH,
    hashFunctions: hashFunctions
  },
  dogecoin: {	
    messagePrefix: '\x19Dogecoin Signed Message:\n',	
    bip32: {	
      public: 0x02facafd,	
      private: 0x02fac398	
    },	
    pubKeyHash: 0x1e, // https://dash-docs.github.io/en/developer-reference#opcodes	
    scriptHash: 0x16,	
    wif: 0x9e,	
    coin: coins.BTC,	
    hashFunctions: hashFunctions	
  },	
  dogecash: {	
    messagePrefix: '\x19Dogecash Signed Message:\n',	
    bip32: {	
      public: 0x022d2533,	
      private: 0x0221312b	
    },	
    pubKeyHash: 0x1e, 	
    scriptHash: 0x13,	
    // https://github.com/dogecash/dogecash/blob/9c83bb764d05b18225a43fc977fededa074cf7b1/src/chainparams.cpp#L269
    // convert decimal to hex
    wif: 0x7a,
    coin: coins.BTC,	
    hashFunctions: hashFunctions	
  },	
  dynamo: {	
    messagePrefix: '\x19Dynamo Signed Message:\n',
    bech32: "dy",
    bip32: {	
      public: 0x0488b21e,	
      private: 0x0488ade4	
    },	
    pubKeyHash: 0x00, // https://github.com/dynamofoundation/dynamo-core/blob/2992e41077d16a453b89f7156b2383db12502d8d/src/chainparams.cpp#L182	
    scriptHash: 0x05,	
    wif: 0x80,	
    coin: coins.BTC,	
    hashFunctions: hashFunctions	
  },
  digibyte: {	
    messagePrefix: '\x19Digibyte Signed Message:\n',
    bech32: "dgb",
    bip32: {	
      public: 0x0488b21e,	
      private: 0x0488ade4	
    },	
    pubKeyHash: 0x1e, // https://dash-docs.github.io/en/developer-reference#opcodes	
    scriptHash: 0x3f,	
    wif: 0x80,	
    coin: coins.BTC,	
    hashFunctions: hashFunctions	
  },	
  sinovate: {	
    messagePrefix: '\x18Sinovate Signed Message:\n',	
    bip32: {	
      public: 0x0488b21e,	
      private: 0x0488ade4	
    },	
    pubKeyHash: 0x3f, // https://dash-docs.github.io/en/developer-reference#opcodes	
    scriptHash: 0x05,	
    wif: 0xbf,	
    coin: coins.BTC,	
    hashFunctions: hashFunctions	
  },
  anonymous: {
    messagePrefix: '\x18Anon Signed Message:\n',
    bech32: 'btg',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x0582,
    scriptHash: 0x5389,
    wif: 0x80,
    coin: coins.BTG,
    forkId: 0x2a,
    hashFunctions: hashFunctions
  },
  '3dcoin': {
    messagePrefix: '\x18Verus Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x17,
    scriptHash: 0x82,
    wif: 0x08,
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  ritocoin: {
    messagePrefix: "\x18RitoCoin Signed Message: \n",
    bech32: "rvn", // not known
    bip32: {
      public:  0x0534e7ca,
      private: 0x05347eac,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x69,
    wif: 0x8b,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
  zencash: { 
    messagePrefix: '\x18Horizen Signed Message:\n',
    bech32: 'zen',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x2089,
    scriptHash: 0x2096,
    wif: 0x80,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    hashFunctions: hashFunctions
  },
  /* btcp: { // TODO
    messagePrefix: '\x18Bitcoin Private Signed Message:\n',
    bech32: 'btg',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1325,
    scriptHash: 0x13af,
    wif: 0x80,
    coin: coins.BTG,
    forkId: 0x2a,
    hashFunctions: hashFunctions
  },
   */
}
