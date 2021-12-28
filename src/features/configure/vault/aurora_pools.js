export const auroraPools = [
  // {
  //   id: 'weth-vwave-maxi',
  //   logo: 'single-assets/VWAVE.png',
  //   name: 'VWAVE Maxi',
  //   token: 'VWAVE',
  //   tokenDescription: 'Vaporwave.Farm',
  //   tokenAddress: '0x2451dB68DeD81900C4F16ae1af597E9658689734',
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vaporWethVWAVE',
  //   earnedTokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
  //   earnContractAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'tokens',
  //   oracleId: 'VWAVE',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'Vaporwave.farm',
  //   assets: ['VWAVE'],
  //   risks: [
  //     'COMPLEXITY_LOW',
  //     'BATTLE_TESTED',
  //     'IL_NONE',
  //     'MCAP_MEDIUM',
  //     'AUDIT',
  //     'CONTRACTS_VERIFIED',
  //   ],
  //   stratType: 'Maxi',
  //   withdrawalFee: '0.05%',
  //   buyTokenUrl: 'https://www.trisolaris.io/#/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0x2451dB68DeD81900C4F16ae1af597E9658689734',
  // },
  {
    id: 'trisolaris-usdt-usdc retired',
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
    oracleId: 'trisolaris-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
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
      'https://trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  // {
  //   id: 'trisolaris-near-wbtc',
  //   name: 'NEAR-WBTC LP',
  //   token: 'NEAR-WBTC LP',
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
  //   oracleId: 'trisolaris-near-wbtc',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'TriSolaris',
  //   assets: ['NEAR', 'WBTC'],
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
  //     'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  //   buyTokenUrl:
  //     'https://trisolaris.io/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  // },
  {
    id: 'trisolaris-usdt-near retired',
    name: 'USDT-NEAR LP',
    token: 'USDT-NEAR LP',
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
    oracleId: 'trisolaris-usdt-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['USDT', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-usdc-near retired',
    name: 'USDC-NEAR LP',
    token: 'USDC-NEAR LP',
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
    oracleId: 'trisolaris-usdc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['USDC', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  // {
  //   id: 'trisolaris-aurora-weth retired',
  //   name: 'AURORA-WETH LP',
  //   token: 'AURORA-WETH LP',
  //   tokenDescription: 'TriSolaris',
  //   tokenAddress: '0x5eeC60F348cB1D661E4A5122CF4638c7DB7A886e', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'VWAVE-WETH-AURORA-TRILP',
  //   earnedTokenAddress: '0xF5e56ed7170Ed6D32dd4FeDf79eb6fE15688A26c', //  vault
  //   earnContractAddress: '0xF5e56ed7170Ed6D32dd4FeDf79eb6fE15688A26c', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'trisolaris-aurora-weth',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'eol',
  //   platform: 'TriSolaris',
  //   assets: ['AURORA', 'WETH'],
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
  //     'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  //   buyTokenUrl:
  //     'https://trisolaris.io/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  // },
  {
    id: 'trisolaris-near-weth retired',
    name: 'NEAR-WETH LP',
    token: 'NEAR-WETH LP',
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
    oracleId: 'trisolaris-near-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'WETH'],
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
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-near-tri retired',
    name: 'NEAR-TRI LP',
    token: 'NEAR-TRI LP',
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
    oracleId: 'trisolaris-near-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'TRI'],
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
      'https://www.trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },

  {
    id: 'wannaswap-wanna-near retired',
    name: 'Wanna-Near WLP',
    token: 'Wanna-Near WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xbf9Eef63139b67fd0ABf22bD5504ACB0519a4212', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-Wanna-Near-Wanna',
    earnedTokenAddress: '0xCEd467680B5f0920118EB8B2712819B9b44423e1', //  vault
    earnContractAddress: '0xCEd467680B5f0920118EB8B2712819B9b44423e1', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wanna-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
    assets: ['WANNA', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdc-usdt retired',
    name: 'USDT-USDC WLP',
    token: 'USDT-USDC WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x3502eaC6Fa27bEebDC5cd3615B7CB0784B0Ce48f', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-Wanna',
    earnedTokenAddress: '0x2d2A32e2FEfb449591eb5eb61De81C87ad0143d0', //  vault
    earnContractAddress: '0x2d2A32e2FEfb449591eb5eb61De81C87ad0143d0', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wbtc-near retired',
    name: 'WBTC-WNEAR WLP',
    token: 'WBTC-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xbF58062D23f869a90c6Eb04B9655f0dfCA345947', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-Wbtc-Near-Wanna',
    earnedTokenAddress: '0xbE5088c894c59ba375163b58B52ADF6dcaE0470E', //  vault
    earnContractAddress: '0xbE5088c894c59ba375163b58B52ADF6dcaE0470E', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wbtc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
    assets: ['WBTC', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  // live vaults
  {
    id: 'trisolaris-usdt-usdc',
    name: 'USDT-USDC TLP v3',
    token: 'USDT-USDC TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x2fe064B6c7D274082aa5d2624709bC9AE7D16C77', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDC-USDT-triV3',
    earnedTokenAddress: '0x7E12E16FD40499C718C53ca79A1b3038a27AE981', //  vault
    earnContractAddress: '0x7E12E16FD40499C718C53ca79A1b3038a27AE981', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-usdc',
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
      'https://trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'trisolaris-near-weth',
    name: 'NEAR-WETH TLP v3',
    token: 'NEAR-WETH TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x63da4DB6Ef4e7C62168aB03982399F9588fCd198', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WETH-triV3',
    earnedTokenAddress: '0x07E5fF3Ab7Ba290605079016b1778D8818bEDA65', //  vault
    earnContractAddress: '0x07E5fF3Ab7Ba290605079016b1778D8818bEDA65', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['NEAR', 'WETH'],
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
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-usdt-near',
    name: 'USDT-NEAR TLP v3',
    token: 'USDT-NEAR LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x03B666f3488a7992b2385B12dF7f35156d7b29cD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-NEAR-triV3',
    earnedTokenAddress: '0xDc2fC1Ad35f9FB2872d7550654950fA8bc293d61', //  vault
    earnContractAddress: '0xDc2fC1Ad35f9FB2872d7550654950fA8bc293d61', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['USDT', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-usdc-near',
    name: 'USDC-NEAR TLP v3',
    token: 'USDC-NEAR LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x20F8AeFB5697B77E0BB835A8518BE70775cdA1b0', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDC-NEAR-triV3',
    earnedTokenAddress: '0xBf17177af8312d6b4D38585ea0563bd483Aa60d0', //  vault
    earnContractAddress: '0xBf17177af8312d6b4D38585ea0563bd483Aa60d0', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['USDC', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-tri',
    name: 'wNEAR-TRI TLP v3',
    token: 'NEAR-TRI LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x84b123875F0F36B966d0B6Ca14b31121bd9676AD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-NEAR-triV3',
    earnedTokenAddress: '0xF82C81531Fe51b79627148E7F42b5a769f389DA2', //  vault
    earnContractAddress: '0xF82C81531Fe51b79627148E7F42b5a769f389DA2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['NEAR', 'TRI'],
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
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
  },
  {
    id: 'wannaswap-wanna-near',
    name: 'Wanna-Near WLP v3',
    token: 'Wanna-Near WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xbf9Eef63139b67fd0ABf22bD5504ACB0519a4212', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WANNA-NEAR-wannaV3',
    earnedTokenAddress: '0x4b8e3F7b9ae148D7327eA67aADdf59bF15362051', //  vault
    earnContractAddress: '0x4b8e3F7b9ae148D7327eA67aADdf59bF15362051', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wanna-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WANNA', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wanna-usdt',
    name: 'Wanna-USDT WLP v3',
    token: 'Wanna-USDT WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xcA461686C711AeaaDf0B516f9C2ad9d9B645a940', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WANNA-USDT-wannaV3',
    earnedTokenAddress: '0x5b4765A1772ab81D35980CcF1f6D4d3b78d27370', //  vault
    earnContractAddress: '0x5b4765A1772ab81D35980CcF1f6D4d3b78d27370', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wanna-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WANNA', 'USDT'],
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'wannaswap-wanna-usdc',
    name: 'Wanna-USDC WLP v3',
    token: 'Wanna-USDC WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x523faE29D7ff6FD38842c8F271eDf2ebd3150435', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WANNA-USDC-wannaV3',
    earnedTokenAddress: '0x97D25D8C41f4E44D71fF643e207042cf4BE51Aa7', //  vault
    earnContractAddress: '0x97D25D8C41f4E44D71fF643e207042cf4BE51Aa7', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wanna-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WANNA', 'USDC'],
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'wannaswap-usdc-usdt',
    name: 'USDT-USDC WLP v3',
    token: 'USDT-USDC WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x3502eaC6Fa27bEebDC5cd3615B7CB0784B0Ce48f', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-wannaV3',
    earnedTokenAddress: '0xFe868b390A7925adDa5582fb3Cf7b17cB8e450c2', //  vault
    earnContractAddress: '0xFe868b390A7925adDa5582fb3Cf7b17cB8e450c2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wbtc-near',
    name: 'WBTC-WNEAR WLP v3',
    token: 'WBTC-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xbF58062D23f869a90c6Eb04B9655f0dfCA345947', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBTC-NEAR-wannaV3',
    earnedTokenAddress: '0xe87f550A433b6294c64BcEd4F77566B227da6E54', //  vault
    earnContractAddress: '0xe87f550A433b6294c64BcEd4F77566B227da6E54', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wbtc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WBTC', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0xf4eb217ba2454613b15dbdea6e5f22276410e89e/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-aurora-near',
    name: 'AURORA-WNEAR WLP v3',
    token: 'AURORA-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x7E9EA10E5984a09D19D05F31ca3cB65BB7df359d', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-NEAR-wannaV3',
    earnedTokenAddress: '0xf2aE8a4B65e740e777F5f85C33B9e42D155BB45F', //  vault
    earnContractAddress: '0xf2aE8a4B65e740e777F5f85C33B9e42D155BB45F', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-aurora-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['AURORA', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-dai-near',
    name: 'DAI-WNEAR WLP v3',
    token: 'DAI-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xE6c47B036f6Fd0684B109B484aC46094e633aF2e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-DAI-NEAR-wannaV3',
    earnedTokenAddress: '0x471b995E6B8beFa50191b4d0aF198D4d302E204b', //  vault
    earnContractAddress: '0x471b995E6B8beFa50191b4d0aF198D4d302E204b', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-dai-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['DAI', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0xe3520349f477a5f6eb06107066048508498a291b/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xe3520349f477a5f6eb06107066048508498a291b&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdt-near',
    name: 'USDT-WNEAR WLP v3',
    token: 'USDT-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x2e02Bea8e9118f7d2ccadA1d402286Cc6d54bd67', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-NEAR-wannaV3',
    earnedTokenAddress: '0x1f8eC3b973d68108Dc490C3CFf646532DD7A0096', //  vault
    earnContractAddress: '0x1f8eC3b973d68108Dc490C3CFf646532DD7A0096', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-usdt-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['USDT', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdc-near',
    name: 'USDC-WNEAR WLP v3',
    token: 'USDC-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xBf560771B6002a58477EFBCDD6774A5a1947587B', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDC-NEAR-wannaV3',
    earnedTokenAddress: '0xE93066e1931BE68a600e5141FDC4638734C5d123', //  vault
    earnContractAddress: '0xE93066e1931BE68a600e5141FDC4638734C5d123', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-usdc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['USDC', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-weth-near',
    name: 'WETH-WNEAR WLP v3',
    token: 'WETH-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x256d03607eeE0156b8A2aB84da1D5B283219Fe97', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WETH-NEAR-wannaV3',
    earnedTokenAddress: '0x2e5Cb9100dF7F24092eb900032490E4AA397FA2b', //  vault
    earnContractAddress: '0x2e5Cb9100dF7F24092eb900032490E4AA397FA2b', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-weth-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WETH', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  //begin retired
  {
    id: 'wannaswap-wanna-retired',
    logo: 'single-assets/WANNA.png',
    name: 'WANNA-retired',
    token: 'WANNA-retired',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x7faA64Faf54750a2E3eE621166635fEAF406Ab22', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WANNAX-wannaV3',
    earnedTokenAddress: '0x5883557ba420763DaF2d44eC585FeB43eE58B536', //  vault
    earnContractAddress: '0x5883557ba420763DaF2d44eC585FeB43eE58B536', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WANNA',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
    assets: ['WANNA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  // end retired
  {
    id: 'wannaswap-wanna',
    logo: 'single-assets/WANNA.png',
    name: 'WANNAX pool',
    token: 'WANNAX',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x5205c30bf2E37494F8cF77D2c19C6BA4d2778B9B', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WANNAX-wanV3',
    earnedTokenAddress: '0x3AcEF6D602323C4506A5Ad5d9C7FDC1149ae1ae5', //  vault
    earnContractAddress: '0x3AcEF6D602323C4506A5Ad5d9C7FDC1149ae1ae5', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WANNA',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WANNA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0.1%',
    addLiquidityUrl: 'https://wannaswap.finance/stake',
    buyTokenUrl: 'https://wannaswap.finance/stake',
  },
  //
  {
    id: 'nearpad-usdt-usdc',
    name: 'USDT-USDC NearPad LP v3',
    token: 'USDT-USDC NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0x9f31f2cFd64cEbFe021f0102E17c7Ae1c76CCb6b', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-padV3',
    earnedTokenAddress: '0x5fFdf52F174285802193abBAeF13C7a138571eF3', //  vault
    earnContractAddress: '0x5fFdf52F174285802193abBAeF13C7a138571eF3', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
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
      'https://dex.nearpad.io/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
  },
  {
    id: 'nearpad-pad-near',
    name: 'PAD-NEAR NearPad LP v3',
    token: 'PAD-NEAR NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0xc374776Cf5C497Adeef6b505588b00cB298531FD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-NEAR-padV3',
    earnedTokenAddress: '0xdE59Bf850bC0dD5b90950d16aD8Ec64bB73ec1b2', //  vault
    earnContractAddress: '0xdE59Bf850bC0dD5b90950d16aD8Ec64bB73ec1b2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
    assets: ['PAD', 'NEAR'],
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
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-luna-near',
    name: 'LUNA-WNEAR WLP v3',
    token: 'LUNA-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x24f6c59747e4AcEB3DBA365df77D68c2A3aA4fB1', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-LUNA-NEAR-wannaV3',
    earnedTokenAddress: '0xc93c61C01eD9bC6eb9298BD067315CA30Ba3380F', //  vault
    earnContractAddress: '0xc93c61C01eD9bC6eb9298BD067315CA30Ba3380F', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-luna-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['LUNA', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
  },
  {
    id: 'wannaswap-ust-near',
    name: 'UST-WNEAR WLP v3',
    token: 'UST-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x436C525D536adC447c7775575f88D357634734C1', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-UST-NEAR-wannaV3',
    earnedTokenAddress: '0x1FD3b5a36402019bD2253D139B072402d24725a7', //  vault
    earnContractAddress: '0x1FD3b5a36402019bD2253D139B072402d24725a7', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-ust-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['UST', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
  },

  {
    id: 'trisolaris-ust-near',
    name: 'UST-NEAR TLP v3',
    token: 'UST-NEAR TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xa9eded3E339b9cd92bB6DEF5c5379d678131fF90', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-UST-NEAR-miniTri',
    earnedTokenAddress: '0xe7c6493964C42037d77A824Ac2F514f97D9F0a89', //  vault
    earnContractAddress: '0xe7c6493964C42037d77A824Ac2F514f97D9F0a89', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-ust-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['UST', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-aurora-weth',
    name: 'AURORA-WETH TLP v3',
    token: 'AURORA-WETH TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x5eeC60F348cB1D661E4A5122CF4638c7DB7A886e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-WETH-miniTri',
    earnedTokenAddress: '0x6CFfbeE906e270C7D6ab84555f89af87ED08e959', //  vault
    earnContractAddress: '0x6CFfbeE906e270C7D6ab84555f89af87ED08e959', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-aurora-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['AURORA', 'WETH'],
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
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
    'https://www.trisolaris.io/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-tri-aurora',
    name: 'TRI-AURORA TLP v3',
    token: 'TRI-AURORA TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xd1654a7713617d41A8C9530Fb9B948d00e162194', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-TRI-miniTri',
    earnedTokenAddress: '0x6270cd3f6E43322Fb1Ca3d4f8715c9aBb9496430', //  vault
    earnContractAddress: '0x6270cd3f6E43322Fb1Ca3d4f8715c9aBb9496430', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-tri-aurora',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['TRI', 'AURORA'],
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
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
  },
  {
    id: 'trisolaris-luna-near',
    name: 'LUNA-NEAR TLP v3',
    token: 'LUNA-NEAR TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xdF8CbF89ad9b7dAFdd3e37acEc539eEcC8c47914', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-LUNA-NEAR-miniTri',
    earnedTokenAddress: '0xbC3f89e03BD4Be3E523e79Ab095Ce5cC3Ef6177b', //  vault
    earnContractAddress: '0xbC3f89e03BD4Be3E523e79Ab095Ce5cC3Ef6177b', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-luna-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['LUNA', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-aurora-wanna',
    name: 'AURORA-WANNA WLP v3',
    token: 'AURORA-WANNA WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xddCcf2F096fa400ce90ba0568908233e6A950961', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-WANNA-wannaV3',
    earnedTokenAddress: '0x83b732e9a1B6DaaFbB74915A7FAA0B0a4550F9d0', //  vault
    earnContractAddress: '0x83b732e9a1B6DaaFbB74915A7FAA0B0a4550F9d0', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-aurora-wanna',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['AURORA', 'WANNA'],
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
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  },


  // auroraswap 
  // {
  //   id: 'auroraswap-near-usdc',
  //   name: 'NEAR-USDC AURLP v3',
  //   token: 'NEAR-USDC AURLP',
  //   tokenDescription: 'Auroraswap',
  //   tokenAddress: '0x480A68bA97d70495e80e11e05D59f6C659749F27', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-NEAR-USDC-aurora',
  //   earnedTokenAddress: '0xbC3f89e03BD4Be3E523e79Ab095Ce5cC3Ef6177b', //  vault
  //   earnContractAddress: '0xbC3f89e03BD4Be3E523e79Ab095Ce5cC3Ef6177b', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'auroraswap-near-usdc',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'Auroraswap',
  //   assets: ['NEAR', 'USDC'],
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
  //     'https://www.trisolaris.io/#/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  //   buyTokenUrl:
  //     'https://trisolaris.io/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  // },
];
