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
    id: 'trisolaris-usdt-usdc',
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
    id: 'trisolaris-usdt-near',
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
    id: 'trisolaris-usdc-near',
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
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-aurora-weth',
    name: 'AURORA-WETH LP',
    token: 'AURORA-WETH LP',
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
    oracleId: 'trisolaris-aurora-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
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
      'https://trisolaris.io/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-near-weth',
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
      'https://trisolaris.io/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-near-tri',
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
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },

  {
    id: 'wannaswap-wanna-near',
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
    id: 'wannaswap-usdc-usdt',
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
    id: 'wannaswap-wbtc-near',
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
      'https://trisolaris.io/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
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
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-tri',
    name: 'NEAR-TRI TLP v3',
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
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
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
  //  API price error. LP apy error. TO DO!
  // {
  //   id: 'nearpad-near-frax',
  //   name: 'NEAR-FRAX NearPad LP v3',
  //   token: 'NEAR-FRAX NearPad LP',
  //   tokenDescription: 'NearPad',
  //   tokenAddress: '0xac187A18f9DaB50506fc8111aa7E86F5F55DefE9', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-NEAR-FRAX-padV3',
  //   earnedTokenAddress: '0x9542F83473826c98839D28C325Ed66C7F507655e', //  vault
  //   earnContractAddress: '0x9542F83473826c98839D28C325Ed66C7F507655e', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'nearpad-near-frax',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'NearPad',
  //   assets: ['NEAR', 'FRAX'],
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
  //     'https://dex.nearpad.io/add/0xDA2585430fEf327aD8ee44Af8F1f989a2A91A3d2/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  //   buyTokenUrl:
  //     'https://dex.nearpad.io/swap?inputCurrency=0xDA2585430fEf327aD8ee44Af8F1f989a2A91A3d2&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  // },
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
];
