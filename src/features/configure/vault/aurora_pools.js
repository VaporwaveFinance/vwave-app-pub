export const auroraPools = [
  {
    id: 'tri-usdc-tusd',
    name: 'USDT-USDC LP',
    token: 'USDT-USDC LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x2fe064B6c7D274082aa5d2624709bC9AE7D16C77', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-USDT-USDC-TRILP',
    earnedTokenAddress: '0x0Be510837509a13211793A5342E73889Da961a74', //  vault
    earnContractAddress: '0x0Be510837509a13211793A5342E73889Da961a74', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['USDT', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  // {
  //   id: 'tri-wnear-wbtc',
  //   name: 'wNEAR-wBTC LP',
  //   token: 'wNEAR-wBTC LP',
  //   tokenDescription: 'TriSolaris',
  //   tokenAddress: '0xbc8A244e8fb683ec1Fd6f88F3cc6E565082174Eb', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'VWAVE-wNEAR-wBTC-TRILP',
  //   earnedTokenAddress: '0x42b67030B3fdbDC2c1Ca62e4F8C381247BcaD06d', //  vault
  //   earnContractAddress: '0x42b67030B3fdbDC2c1Ca62e4F8C381247BcaD06d', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'boo-usdc-usdt',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'TriSolaris',
  //   assets: ['WNEAR', 'WBTC'],
  //   risks: [
  //     'COMPLEXITY_LOW',
  //     'BATTLE_TESTED',
  //     'IL_NONE',
  //     'MCAP_MEDIUM',
  //     'AUDIT',
  //     'CONTRACTS_VERIFIED',
  //   ],
  //   stratType: 'StratLP',
  //   withdrawalFee: '0.1%',
  //   addLiquidityUrl:
  //     'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  //   buyTokenUrl:
  //     'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  // },
  {
    id: 'tri-wnear-usdt',
    name: 'wNEAR-USDT LP',
    token: 'wNEAR-USDT LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x03B666f3488a7992b2385B12dF7f35156d7b29cD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-wNEAR-USDT-TRILP',
    earnedTokenAddress: '0x446A5330e88eD64E9159251F7c9Dcfd6E4d765BA', //  vault
    earnContractAddress: '0x446A5330e88eD64E9159251F7c9Dcfd6E4d765BA', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['WNEAR', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'tri-wnear-usdc',
    name: 'wNEAR-USDC LP',
    token: 'wNEAR-USDC LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x20F8AeFB5697B77E0BB835A8518BE70775cdA1b0', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-wNEAR-USDC-TRILP',
    earnedTokenAddress: '0x9b40f882B74d00B6c510F4d4427B515B5C3ca843', //  vault
    earnContractAddress: '0x9b40f882B74d00B6c510F4d4427B515B5C3ca843', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-wnear-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['WNEAR', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'tri-aurora-weth',
    name: 'WETH-AURORA LP',
    token: 'WETH-AURORA LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x5eeC60F348cB1D661E4A5122CF4638c7DB7A886e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-WETH-AURORA-TRILP',
    earnedTokenAddress: '0xF5e56ed7170Ed6D32dd4FeDf79eb6fE15688A26c', //  vault
    earnContractAddress: '0xF5e56ed7170Ed6D32dd4FeDf79eb6fE15688A26c', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-weth-aurora',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['WETH', 'AURORA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'tri-wnear-weth',
    name: 'WETH-WNEAR LP',
    token: 'WETH-WNEAR LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x63da4DB6Ef4e7C62168aB03982399F9588fCd198', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-WETH-WNEAR-TRILP',
    earnedTokenAddress: '0xb81D3567faBcFf025F8904ca96bBe1a78c402233', //  vault
    earnContractAddress: '0xb81D3567faBcFf025F8904ca96bBe1a78c402233', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-weth-wnear',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['WETH', 'WNEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'tri-wnear-tri',
    name: 'TRI-WNEAR LP',
    token: 'TRI-WNEAR LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x84b123875F0F36B966d0B6Ca14b31121bd9676AD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-TRI-WNEAR-TRILP',
    earnedTokenAddress: '0x22fAAaa5248C3F49aCe54941b021597B8e95E5aa', //  vault
    earnContractAddress: '0x22fAAaa5248C3F49aCe54941b021597B8e95E5aa', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-tri-wnear',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['TRI', 'WNEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
];
