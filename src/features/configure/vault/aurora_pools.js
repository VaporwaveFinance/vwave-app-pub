export const auroraPools = [
  //  begin v6 strats
  {
    id: 'trisolaris-usdt-usdc',
    name: 'USDT-USDC TLP',
    token: 'USDT-USDC TLP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x2fe064B6c7D274082aa5d2624709bC9AE7D16C77', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-trisolV6',
    earnedTokenAddress: '0x9F92eF85432388487201A4944a4F387a519d55ba', //  vault
    earnContractAddress: '0x9F92eF85432388487201A4944a4F387a519d55ba', //  vault
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
    id: 'trisolaris-near-tri',
    name: 'WNEAR-TRI TLP',
    token: 'WNEAR-TRI LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x84b123875F0F36B966d0B6Ca14b31121bd9676AD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-NEAR-trisolV6',
    earnedTokenAddress: '0x7bD50F75721319907bD0c3cf68B701d20d8dd29B', //  vault
    earnContractAddress: '0x7bD50F75721319907bD0c3cf68B701d20d8dd29B', //  vault
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
    id: 'trisolaris-usdt-tri',
    name: 'USDT-TRI TLP',
    token: 'USDT-TRI TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x61C9E05d1Cdb1b70856c7a2c53fA9c220830633c', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-TRI-trisolV6',
    earnedTokenAddress: '0x20a8322E69eAF88d8f85D7B0ce5a6a9FE8fDA85d', //  vault
    earnContractAddress: '0x20a8322E69eAF88d8f85D7B0ce5a6a9FE8fDA85d', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['USDT', 'TRI'],
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
      'https://www.trisolaris.io/#/add/0xFa94348467f64D5A457F75F8bc40495D33c65aBB/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'trisolaris-near-weth',
    name: 'WNEAR-WETH TLP',
    token: 'WNEAR-WETH TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x63da4DB6Ef4e7C62168aB03982399F9588fCd198', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WETH-trisolV6',
    earnedTokenAddress: '0xdf7978aE3f741e00574e473158380eE3913989E9', //  vault
    earnContractAddress: '0xdf7978aE3f741e00574e473158380eE3913989E9', //  vault
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
    id: 'trisolaris-usdc-near',
    name: 'USDC-WNEAR TLP',
    token: 'USDC-WNEAR LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x20F8AeFB5697B77E0BB835A8518BE70775cdA1b0', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDC-NEAR-trisolV6',
    earnedTokenAddress: '0x1c8FF1481B9B908cB8F88cC04263fc4F55C93d05', //  vault
    earnContractAddress: '0x1c8FF1481B9B908cB8F88cC04263fc4F55C93d05', //  vault
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
    id: 'trisolaris-usdt-near',
    name: 'USDT-WNEAR TLP',
    token: 'USDT-WNEAR LP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x03B666f3488a7992b2385B12dF7f35156d7b29cD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-NEAR-trisolV6',
    earnedTokenAddress: '0x4D4956a42CaF274B27FBb087CeB39B7A6FEeEaC8', //  vault
    earnContractAddress: '0x4D4956a42CaF274B27FBb087CeB39B7A6FEeEaC8', //  vault
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
    id: 'trisolaris-near-wbtc',
    name: 'WNEAR-WBTC TLP',
    token: 'WNEAR-WBTC TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xbc8A244e8fb683ec1Fd6f88F3cc6E565082174Eb', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WNEAR-WBTC-trisolV6',
    earnedTokenAddress: '0xa30ad1f3E9364933F83ebeCF56f6B47F7F40068B', //  vault
    earnContractAddress: '0xa30ad1f3E9364933F83ebeCF56f6B47F7F40068B', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
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
      'https://www.trisolaris.io/#/add/0xf4eb217ba2454613b15dbdea6e5f22276410e89e/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  //  DEPRECATED BY TRISOLARIS
  // {
  //   id: 'trisolaris-ust-near',
  //   name: 'UST-WNEAR TLP',
  //   token: 'UST-WNEAR TLP',
  //   tokenDescription: 'TriSolaris',
  //   tokenAddress: '0xa9eded3E339b9cd92bB6DEF5c5379d678131fF90', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-UST-WNEAR-trisolV6',
  //   earnedTokenAddress: '0x1c1D7864F9bB26aEcFF66565037a80B8E774b365', //  vault
  //   earnContractAddress: '0x1c1D7864F9bB26aEcFF66565037a80B8E774b365', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'trisolaris-ust-near',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'TriSolaris',
  //   assets: ['UST', 'NEAR'],
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
  //     'https://www.trisolaris.io/#/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  //   buyTokenUrl:
  //     'https://www.trisolaris.io/#/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  // },
  // {
  //   id: 'trisolaris-near-luna',
  //   name: 'WNEAR-LUNA TLP',
  //   token: 'WNEAR-LUNA TLP',
  //   tokenDescription: 'TriSolaris',
  //   tokenAddress: '0xdF8CbF89ad9b7dAFdd3e37acEc539eEcC8c47914', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-WNEAR-LUNA-trisolV6',
  //   earnedTokenAddress: '0x6DA13149710832cb33C4f3D8997065Cf0F352437', //  vault
  //   earnContractAddress: '0x6DA13149710832cb33C4f3D8997065Cf0F352437', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'trisolaris-near-luna',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'TriSolaris',
  //   assets: ['NEAR', 'LUNA'],
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
  //     'https://www.trisolaris.io/#/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  // },
  {
    id: 'trisolaris-near-flx',
    name: 'FLX-WNEAR TLP',
    token: 'FLX-WNEAR TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x48887cEEA1b8AD328d5254BeF774Be91B90FaA09', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-FLX-NEAR-trisolV6',
    earnedTokenAddress: '0xBDf3e453Edb961Ac54bE9d8A134a99d7e3dfdD25', //  vault
    earnContractAddress: '0xBDf3e453Edb961Ac54bE9d8A134a99d7e3dfdD25', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-flx',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['NEAR', 'FLX'],
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
      'https://www.trisolaris.io/#/add/0xea62791aa682d455614eaA2A12Ba3d9A2fD197af/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xea62791aa682d455614eaA2A12Ba3d9A2fD197af&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-aurora-tri',
    name: 'TRI-AURORA TLP',
    token: 'TRI-AURORA TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xd1654a7713617d41A8C9530Fb9B948d00e162194', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-TRI-trisolV6',
    earnedTokenAddress: '0x3b1776371E957AA1Bf6b5136d5961D7B7BD8Ceb3', //  vault
    earnContractAddress: '0x3b1776371E957AA1Bf6b5136d5961D7B7BD8Ceb3', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-aurora-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['AURORA', 'TRI'],
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
    id: 'trisolaris-aurora-weth',
    name: 'AURORA-WETH TLP',
    token: 'AURORA-WETH TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x5eeC60F348cB1D661E4A5122CF4638c7DB7A886e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-WETH-trisolV6',
    earnedTokenAddress: '0x8689c967B244B9DAC763Ff78660f48aB2692d43B', //  vault
    earnContractAddress: '0x8689c967B244B9DAC763Ff78660f48aB2692d43B', //  vault
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
    id: 'trisolaris-solace-near',
    name: 'SOLACE-WNEAR TLP',
    token: 'SOLACE-WNEAR TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xdDAdf88b007B95fEb42DDbd110034C9a8e9746F2', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-SOLACE-WNEAR-trisolV6',
    earnedTokenAddress: '0xC5b7Af0c32BE95301Fb0Aac5e8D0C022EDec6f3A', //  vault
    earnContractAddress: '0xC5b7Af0c32BE95301Fb0Aac5e8D0C022EDec6f3A', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-solace-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['SOLACE', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-stnear-xtri',
    name: 'STNEAR-XTRI TLP',
    token: 'STNEAR-XTRI TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x5913f644A10d98c79F2e0b609988640187256373', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-STNEAR-XTRI-trisolV6',
    earnedTokenAddress: '0x521640256066a1e5e10A6cf4eb10E278341e2e4E', //  vault
    earnContractAddress: '0x521640256066a1e5e10A6cf4eb10E278341e2e4E', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-stnear-xtri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['STNEAR', 'XTRI'],
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
      'https://www.trisolaris.io/#/add/0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30/0x802119e4e253D5C19aA06A5d567C5a41596D6803',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30&outputCurrency=0x802119e4e253D5C19aA06A5d567C5a41596D6803',
  },
  {
    id: 'trisolaris-stnear-near',
    name: 'STNEAR-WNEAR TLP',
    token: 'STNEAR-WNEAR TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x47924Ae4968832984F4091EEC537dfF5c38948a4', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-STNEAR-NEAR-trisolV6',
    earnedTokenAddress: '0xB145b1d31Be50E8d2427DfC77354EcfB55683326', //  vault
    earnContractAddress: '0xB145b1d31Be50E8d2427DfC77354EcfB55683326', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-stnear-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['STNEAR', 'NEAR'],
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
      'https://www.trisolaris.io/#/add/0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-ausdo-usdt',
    name: 'aUSDO-USDT TLP',
    token: 'aUSDO-USDT TLP',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x6277f94a69Df5df0Bc58b25917B9ECEFBf1b846A', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-aUSDO-USDT-trisolV6',
    earnedTokenAddress: '0x139B7AD1203307135d7aAD2387259bba5c5C0743', //  vault
    earnContractAddress: '0x139B7AD1203307135d7aAD2387259bba5c5C0743', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-ausdo-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'TriSolaris',
    assets: ['aUSDO', 'USDT'],
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
      'https://www.trisolaris.io/#/add/0x293074789b247cab05357b08052468B5d7A23c5a/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x293074789b247cab05357b08052468B5d7A23c5a&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  //  XNL APY displayed is off. Keep commented out for now.
  // {
  //   id: 'trisolaris-xnl-aurora',
  //   name: 'XNL-AURORA TLP',
  //   token: 'XNL-AURORA TLP',
  //   tokenDescription: 'TriSolaris',
  //   tokenAddress: '0xb419ff9221039Bdca7bb92A131DD9CF7DEb9b8e5', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-XNL-AURORA-trisolV6',
  //   earnedTokenAddress: '0x009f1f33B02c184B62eEc582BB02e6920B38cd1b', //  vault
  //   earnContractAddress: '0x009f1f33B02c184B62eEc582BB02e6920B38cd1b', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'trisolaris-xnl-aurora',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'TriSolaris',
  //   assets: ['XNL', 'AURORA'],
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
  //     'https://www.trisolaris.io/#/add/0x7cA1C28663b76CFDe424A9494555B94846205585/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  //   buyTokenUrl:
  //     'https://www.trisolaris.io/#/swap?inputCurrency=0x7cA1C28663b76CFDe424A9494555B94846205585&outputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  // },
  // {
  //   id: 'trisolaris-xnl-near',
  //   name: 'XNL-NEAR TLP',
  //   token: 'XNL-NEAR TLP',
  //   tokenDescription: 'TriSolaris',
  //   tokenAddress: '0xFBc4C42159A5575a772BebA7E3BF91DB508E127a', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-XNL-NEAR-trisolV6',
  //   earnedTokenAddress: '0x99411caC99e559ae7d680d3B3C397FA1cD350831', //  vault
  //   earnContractAddress: '0x99411caC99e559ae7d680d3B3C397FA1cD350831', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'trisolaris-xnl-near',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'TriSolaris',
  //   assets: ['XNL', 'NEAR'],
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
  //     'https://www.trisolaris.io/#/add/0x7cA1C28663b76CFDe424A9494555B94846205585/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  //   buyTokenUrl:
  //     'https://www.trisolaris.io/#/swap?inputCurrency=0x7cA1C28663b76CFDe424A9494555B94846205585&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  // },

  //  BEGIN NEARPAD POOLS
  {
    id: 'nearpad-usdt-pad',
    name: 'USDT-PAD NearPad LP',
    token: 'USDT-PAD NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0x1FD6CBBFC0363AA394bd77FC74F64009BF54A7e9', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-PAD-NearPadV6',
    earnedTokenAddress: '0x9EB21230314E314c139cCb4a4990Bde6B6A7CE4B', //  vault
    earnContractAddress: '0x9EB21230314E314c139cCb4a4990Bde6B6A7CE4B', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-usdt-pad',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
    assets: ['USDT', 'PAD'],
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
      'https://dex.nearpad.io/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781',
  },
  {
    id: 'nearpad-pad-usdc',
    name: 'PAD-USDC NearPad LP',
    token: 'PAD-USDC NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0x73155e476D6b857fE7722AEfeBAD50F9F8bd0b38', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-USDC-NearPadV6 ',
    earnedTokenAddress: '0x1b422dB3f44CaEc57ba490B81bf0E2b976aD12AD', //  vault
    earnContractAddress: '0x1b422dB3f44CaEc57ba490B81bf0E2b976aD12AD', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
    assets: ['PAD', 'USDC'],
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
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
  },
  {
    id: 'nearpad-pad-weth',
    name: 'PAD-WETH NearPad LP',
    token: 'PAD-WETH NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0x63b4a0538CE8D90876B201af1020d13308a8B253', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-WETH-NearPadV6',
    earnedTokenAddress: '0xd91986B0C798D786ACEB1c24a9F5D58504927DE8', //  vault
    earnContractAddress: '0xd91986B0C798D786ACEB1c24a9F5D58504927DE8', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
    assets: ['PAD', 'WETH'],
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
    addLiquidityUrl: 'https://dex.nearpad.io/add/ETH/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'nearpad-pad-near',
    name: 'PAD-NEAR NearPad LP',
    token: 'PAD-NEAR NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0xc374776Cf5C497Adeef6b505588b00cB298531FD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-NEAR-NearPadV6',
    earnedTokenAddress: '0x07634291eE49ABbe1323d6AD0597E761B12d5B10', //  vault
    earnContractAddress: '0x07634291eE49ABbe1323d6AD0597E761B12d5B10', //  vault
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
    id: 'nearpad-usdt-usdc',
    name: 'USDT-USDC NearPad',
    token: 'USDT-USDC NearPad',
    tokenDescription: 'NearPad',
    tokenAddress: '0x9f31f2cFd64cEbFe021f0102E17c7Ae1c76CCb6b', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-NearPadV6',
    earnedTokenAddress: '0x705aceD9197D4B40F491819803649a03F643BEd9', //  vault
    earnContractAddress: '0x705aceD9197D4B40F491819803649a03F643BEd9', //  vault
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
    id: 'nearpad-near-weth',
    name: 'NEAR-WETH NearPad LP',
    token: 'NEAR-WETH NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0x24886811d2d5E362FF69109aed0A6EE3EeEeC00B', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WETH-NearPadV6',
    earnedTokenAddress: '0x44cA49B3eF81A22A8D574BCC4b58A20dfC11fF8B', //  vault
    earnContractAddress: '0x44cA49B3eF81A22A8D574BCC4b58A20dfC11fF8B', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-near-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
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
    addLiquidityUrl: 'https://dex.nearpad.io/add/ETH/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
  },
  {
    id: 'nearpad-near-wbtc',
    name: 'NEAR-WBTC NearPad LP',
    token: 'NEAR-WBTC NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0xA188D79D6bdbc1120a662DE9eB72384E238AF104', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR WBTC -NearPadV6',
    earnedTokenAddress: '0x2b449a929d6C485E2e1b9144b9ACc03B31906cdC', //  vault
    earnContractAddress: '0x2b449a929d6C485E2e1b9144b9ACc03B31906cdC', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
    assets: ['NEAR', 'WBTC'],
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
      'https://dex.nearpad.io/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d&outputCurrency=0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
  },
  {
    id: 'nearpad-pad-rose',
    name: 'PAD-ROSE NearPad LP',
    token: 'PAD-ROSE NearPad LP',
    tokenDescription: 'NearPad',
    tokenAddress: '0xC6C3cc84EabD4643C382C988fA2830657fc70a6B', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-ROSE-NearPadV6',
    earnedTokenAddress: '0xD66c99ae84c43972216DDB2E6e89b15848f005cE', //  vault
    earnContractAddress: '0xD66c99ae84c43972216DDB2E6e89b15848f005cE', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-rose',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'NearPad',
    assets: ['PAD', 'ROSE'],
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
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xdcD6D4e2B3e1D1E1E6Fa8C21C8A323DcbecfF970',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xdcD6D4e2B3e1D1E1E6Fa8C21C8A323DcbecfF970',
  },
  //  BEGIN POLARIS VAULTS
  {
    id: 'polaris-near-polar',
    name: 'NEAR-POLAR TLP',
    token: 'NEAR-POLAR TLP',
    tokenDescription: 'Polaris',
    tokenAddress: '0x3fa4d0145a0b6Ad0584B1ad5f61cB490A04d8242', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-POLAR-PolarisV6',
    earnedTokenAddress: '0x0566bF8C8F1e9aBB5A0da6526a3892d852AcA94A', //  vault
    earnContractAddress: '0x0566bF8C8F1e9aBB5A0da6526a3892d852AcA94A', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'polaris-near-polar',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Polaris',
    assets: ['NEAR', 'POLAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xf0f3b9Eee32b1F490A4b8720cf6F005d4aE9eA86',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xf0f3b9Eee32b1F490A4b8720cf6F005d4aE9eA86',
  },
  {
    id: 'polaris-spolar-near',
    name: 'SPOLAR-NEAR TLP',
    token: 'SPOLAR-NEAR TLP',
    tokenDescription: 'Polaris',
    tokenAddress: '0xADf9D0C77c70FCb1fDB868F54211288fCE9937DF', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-SPOLAR-NEAR-PolarisV6',
    earnedTokenAddress: '0x4eec83Bc4F775a4DdFc4A43f038165fC0936860E', //  vault
    earnContractAddress: '0x4eec83Bc4F775a4DdFc4A43f038165fC0936860E', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'polaris-spolar-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Polaris',
    assets: ['SPOLAR', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x9D6fc90b25976E40adaD5A3EdD08af9ed7a21729',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0x9D6fc90b25976E40adaD5A3EdD08af9ed7a21729',
  },
  {
    id: 'polaris-lunar-luna',
    name: 'LUNAR-LUNA TLP',
    token: 'LUNAR-LUNA TLP',
    tokenDescription: 'Polaris',
    tokenAddress: '0x3e50da46cB79d1f9F08445984f207278796CE2d2', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-LUNAR-LUNA-PolarisV6',
    earnedTokenAddress: '0xBf2aFF039F2D2069a878b6e53e8BE646bd4dc344', //  vault
    earnContractAddress: '0xBf2aFF039F2D2069a878b6e53e8BE646bd4dc344', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'polaris-lunar-luna',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Polaris',
    assets: ['LUNAR', 'LUNA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0x25e801Eb75859Ba4052C4ac4233ceC0264eaDF8c',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0x25e801Eb75859Ba4052C4ac4233ceC0264eaDF8c',
  },
  //  BEGIN AURORASWAP POOLS
  {
    id: 'auroraswap-near-weth',
    name: 'NEAR-WETH AuroraSwap LP',
    token: 'NEAR-WETH AuroraSwap LP',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xc57eCc341aE4df32442Cf80F34f41Dc1782fE067', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WETH-AuroraSwapV6',
    earnedTokenAddress: '0x178C1A77b888a523bC852252a452E4ABaF413648', //  vault
    earnContractAddress: '0x178C1A77b888a523bC852252a452E4ABaF413648', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-near-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'AuroraSwap',
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
      'https://swap.auroraswap.net/#/add/BNB/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'auroraswap-weth-wbtc',
    name: 'WBTC-WETH AuroraSwap LP',
    token: 'WBTC-WETH AuroraSwap LP',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xcb8584360Dc7A4eAC4878b48fB857AA794E46Fa8', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBTC-WETH-AuroraSwapV6',
    earnedTokenAddress: '0x153B0Fb3A8a296ebE2739a0e6bb8Db8ad4514Ea1', //  vault
    earnContractAddress: '0x153B0Fb3A8a296ebE2739a0e6bb8Db8ad4514Ea1', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-weth-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'AuroraSwap',
    assets: ['WETH', 'WBTC'],
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
      'https://swap.auroraswap.net/#/add/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB/0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  },
  {
    id: 'auroraswap-near-wbtc',
    name: 'NEAR-WBTC AuroraSwap LP',
    token: 'NEAR-WBTC AuroraSwap LP',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xe11A3f2BAB372d88D133b64487D1772847Eec4eA', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WBTC-auroraswap',
    earnedTokenAddress: '0xb2401E7C0637661Fe4833e6e65d935dF7743f09B', //  vault
    earnContractAddress: '0xb2401E7C0637661Fe4833e6e65d935dF7743f09B', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'AuroraSwap',
    assets: ['NEAR', 'WBTC'],
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
      'https://swap.auroraswap.net/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  },
  {
    id: 'auroraswap-brl-near',
    name: 'BRL-NEAR AuroraSwap LP',
    token: 'BRL-NEAR AuroraSwap LP',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x5bdac608cd38c5c8738f5be20813194a3150d4ff', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BRL-NEAR-AuroraSwapV6',
    earnedTokenAddress: '0x6EBe446E2FBEB5D8a6099ce13FEd25088bFa94Ad', //  vault
    earnContractAddress: '0x6EBe446E2FBEB5D8a6099ce13FEd25088bFa94Ad', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-brl-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'AuroraSwap',
    assets: ['BRL', 'NEAR'],
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
      'https://swap.auroraswap.net/#/add/0x12c87331f086c3C926248f964f8702C0842Fd77F/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x12c87331f086c3C926248f964f8702C0842Fd77F&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'auroraswap-usdt-usdc',
    name: 'USDT-USDC AuroraSwap LP',
    token: 'USDT-USDC AuroraSwap LP',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xEc538fAfaFcBB625C394c35b11252cef732368cd', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-AuroraSwapV6',
    earnedTokenAddress: '0xbBF813B9a3aA12C7AdDbba8Da6AB8F8fa774Ca72', //  vault
    earnContractAddress: '0xbBF813B9a3aA12C7AdDbba8Da6AB8F8fa774Ca72', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'AuroraSwap',
    assets: ['USDC', 'USDT'],
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
      'https://swap.auroraswap.net/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
  },
  {
    id: 'auroraswap-aurora-near',
    name: 'AURORA-NEAR AuroraSwap LP',
    token: 'AURORA-NEAR AuroraSwap LP',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x84567E7511E0d97DE676d236AEa7aE688221799e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-NEAR-AuroraSwapV6',
    earnedTokenAddress: '0x7Dc37797C05BD7cF2B9983757EfF677170350fff', //  vault
    earnContractAddress: '0x7Dc37797C05BD7cF2B9983757EfF677170350fff', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-aurora-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'AuroraSwap',
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
      'https://swap.auroraswap.net/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  //  BEGIN WANASWAP POOLS
  {
    id: 'wannaswap-wnear-wbtc',
    name: 'WNEAR-WBTC WLP',
    token: 'WNEAR-WBTC WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xbF58062D23f869a90c6Eb04B9655f0dfCA345947', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WNEAR-WBTC-WannaSwapV6',
    earnedTokenAddress: '0x8087b0dB82a981b8bC32c9615400bEB1F26Bd30e', //  vault
    earnContractAddress: '0x8087b0dB82a981b8bC32c9615400bEB1F26Bd30e', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wnear-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['WNEAR', 'WBTC'],
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
    id: 'wannaswap-avax-near',
    name: 'AVAX-NEAR WLP',
    token: 'AVAX-NEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x177d3bb40EAf6843d86a73F1b2a65E97d7D55d87', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AVAX-NEAR-WannaSwapV6',
    earnedTokenAddress: '0x67D1F409D37a71533CD64a184097966B4b8f518a', //  vault
    earnContractAddress: '0x67D1F409D37a71533CD64a184097966B4b8f518a', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-avax-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['AVAX', 'NEAR'],
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
      'https://wannaswap.finance/exchange/add/0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdt-near',
    name: 'USDT-WNEAR WLP',
    token: 'USDT-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x2e02Bea8e9118f7d2ccadA1d402286Cc6d54bd67', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-NEAR-WannaSwapV6',
    earnedTokenAddress: '0x9BeeE290cD4DE17ba0eb0dc9a0B539137dEF1783', //  vault
    earnContractAddress: '0x9BeeE290cD4DE17ba0eb0dc9a0B539137dEF1783', //  vault
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
    id: 'wannaswap-wanna-near',
    name: 'Wanna-Near WLP',
    token: 'Wanna-Near WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xbf9Eef63139b67fd0ABf22bD5504ACB0519a4212', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WANNA-NEAR-WannaSwapV6',
    earnedTokenAddress: '0xF32Ff086CA704D507ee3D43a4993a494C98F0188', //  vault
    earnContractAddress: '0xF32Ff086CA704D507ee3D43a4993a494C98F0188', //  vault
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
    id: 'wannaswap-aurora-near',
    name: 'AURORA-WNEAR WLP',
    token: 'AURORA-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x7E9EA10E5984a09D19D05F31ca3cB65BB7df359d', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-NEAR-WannaSwapV6',
    earnedTokenAddress: '0xE8715a2F03be4C61688c92687B3De7095ea655F8', //  vault
    earnContractAddress: '0xE8715a2F03be4C61688c92687B3De7095ea655F8', //  vault
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
    id: 'wannaswap-usdc-near',
    name: 'USDC-WNEAR WLP',
    token: 'USDC-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xBf560771B6002a58477EFBCDD6774A5a1947587B', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDC-NEAR-WannaSwapV6',
    earnedTokenAddress: '0x40a24492845e866f674a12036df98f84eDc458E6', //  vault
    earnContractAddress: '0x40a24492845e866f674a12036df98f84eDc458E6', //  vault
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
    id: 'wannaswap-near-luna',
    name: 'WNEAR-LUNA WLP',
    token: 'WNEAR-LUNA WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x24f6c59747e4AcEB3DBA365df77D68c2A3aA4fB1', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-LUNA-NEAR-WannaSwapV6',
    earnedTokenAddress: '0xb0b51Cb33A63B72865505c7aDEdFC4e99c666038', //  vault
    earnContractAddress: '0xb0b51Cb33A63B72865505c7aDEdFC4e99c666038', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-near-luna',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'WannaSwap',
    assets: ['NEAR', 'LUNA'],
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
    name: 'UST-WNEAR WLP',
    token: 'UST-WNEAR WLP',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x436C525D536adC447c7775575f88D357634734C1', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-UST-NEAR-WannaSwapV6',
    earnedTokenAddress: '0xA7471A02ffBf334C43dE0C4968fC6157466C6141', //  vault
    earnContractAddress: '0xA7471A02ffBf334C43dE0C4968fC6157466C6141', //  vault
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
  // BEGIN RETIRED POOLS STRATS v1 - v5
  // **
  // trisolaris v5 strats
  {
    id: 'trisolaris-usdt-usdc v5 retired',
    name: 'USDT-USDC TLP v5 retired',
    token: 'USDT-USDC TLP v5 retired',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x2fe064B6c7D274082aa5d2624709bC9AE7D16C77', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-trisolV5',
    earnedTokenAddress: '0x9b1298C4aDBd64290A76F53eCeAef0EA01204A3C', //  vault
    earnContractAddress: '0x9b1298C4aDBd64290A76F53eCeAef0EA01204A3C', //  vault
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'trisolaris-near-tri v5 retired',
    name: 'NEAR-TRI TLP v5 retired',
    token: 'NEAR-TRI LP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x84b123875F0F36B966d0B6Ca14b31121bd9676AD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-NEAR-trisolV5',
    earnedTokenAddress: '0x460c30A86A4888cB408fF716d37289dC367aFD48', //  vault
    earnContractAddress: '0x460c30A86A4888cB408fF716d37289dC367aFD48', //  vault
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
  },
  {
    id: 'trisolaris-usdt-tri v5 retired',
    name: 'USDT-TRI TLP v5 retired',
    token: 'USDT-TRI TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x61C9E05d1Cdb1b70856c7a2c53fA9c220830633c', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-TRI-trisolV5',
    earnedTokenAddress: '0xDFB9CF8075A07Fc92710358b598df84178a8A57d', //  vault
    earnContractAddress: '0xDFB9CF8075A07Fc92710358b598df84178a8A57d', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['USDT', 'TRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xFa94348467f64D5A457F75F8bc40495D33c65aBB/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'trisolaris-near-weth v5 retired',
    name: 'NEAR-WETH TLP v5 retired',
    token: 'NEAR-WETH TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x63da4DB6Ef4e7C62168aB03982399F9588fCd198', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WETH-trisolV5',
    earnedTokenAddress: '0x16B6937787780F66D7FFe4aA44ce2d5A3b167548', //  vault
    earnContractAddress: '0x16B6937787780F66D7FFe4aA44ce2d5A3b167548', //  vault
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-usdc-near v5 retired',
    name: 'USDC-NEAR TLP v5 retired',
    token: 'USDC-NEAR LP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x20F8AeFB5697B77E0BB835A8518BE70775cdA1b0', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDC-NEAR-trisolV5',
    earnedTokenAddress: '0x5B755FF7E9fC6cF21A04e47f6849a89fC3598de6', //  vault
    earnContractAddress: '0x5B755FF7E9fC6cF21A04e47f6849a89fC3598de6', //  vault
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-usdt-near v5 retired',
    name: 'USDT-NEAR TLP v5 retired',
    token: 'USDT-NEAR LP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x03B666f3488a7992b2385B12dF7f35156d7b29cD', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-NEAR-trisolV5',
    earnedTokenAddress: '0x3A90BD9f366303b8935bF1A2B52d7856B22ae09B', //  vault
    earnContractAddress: '0x3A90BD9f366303b8935bF1A2B52d7856B22ae09B', //  vault
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-wbtc v5 retired',
    name: 'WBTC-NEAR TLP v5 retired',
    token: 'WBTC-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xbc8A244e8fb683ec1Fd6f88F3cc6E565082174Eb', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBTC-NEAR-trisolV5',
    earnedTokenAddress: '0xA3bc7BFB3E2EDe4DEC7D2C41C0c0a6F47E2e9F5C', //  vault
    earnContractAddress: '0xA3bc7BFB3E2EDe4DEC7D2C41C0c0a6F47E2e9F5C', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xf4eb217ba2454613b15dbdea6e5f22276410e89e/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  //
  {
    id: 'trisolaris-avax-near v5 retired',
    name: 'AVAX-NEAR TLP v5 retired',
    token: 'AVAX-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x6443532841a5279cb04420E61Cf855cBEb70dc8C', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AVAX-NEAR-trisolV5',
    earnedTokenAddress: '0x37419aF93aa98CE40472fd5ec8f7cb02C01b5b17', //  vault
    earnContractAddress: '0x37419aF93aa98CE40472fd5ec8f7cb02C01b5b17', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-avax-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['AVAX', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-bnb-near v5 retired',
    name: 'BNB-NEAR TLP v5 retired',
    token: 'BNB-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x7be4a49AA41B34db70e539d4Ae43c7fBDf839DfA', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BNB-NEAR-trisolV5',
    earnedTokenAddress: '0x0aD29EeF5DC3BB24aDC002816E2651915945D7c4', //  vault
    earnContractAddress: '0x0aD29EeF5DC3BB24aDC002816E2651915945D7c4', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-bnb-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['BNB', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-matic-near v5 retired',
    name: 'MATIC-NEAR TLP v5 retired',
    token: 'MATIC-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x3dC236Ea01459F57EFc737A12BA3Bb5F3BFfD071', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-MATIC-NEAR-trisolV5',
    earnedTokenAddress: '0x5463B4eB9013c3cC738D90B6cf564Ec4a9899DF6', //  vault
    earnContractAddress: '0x5463B4eB9013c3cC738D90B6cf564Ec4a9899DF6', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-matic-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['MATIC', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  //
  {
    id: 'trisolaris-ust-near v5 retired',
    name: 'UST-NEAR TLP v5 retired',
    token: 'UST-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xa9eded3E339b9cd92bB6DEF5c5379d678131fF90', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-UST-NEAR-trisolV5',
    earnedTokenAddress: '0xAFce58562c48519c79b2444502d7CB9c55961A55', //  vault
    earnContractAddress: '0xAFce58562c48519c79b2444502d7CB9c55961A55', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-ust-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-flx v5 retired',
    name: 'FLX-NEAR TLP v5 retired',
    token: 'FLX-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x48887cEEA1b8AD328d5254BeF774Be91B90FaA09', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-FLX-NEAR-trisolV5',
    earnedTokenAddress: '0x391c1b1155fE9f022f138e9fe62FB12d45611126', //  vault
    earnContractAddress: '0x391c1b1155fE9f022f138e9fe62FB12d45611126', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-flx',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'FLX'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xea62791aa682d455614eaA2A12Ba3d9A2fD197af/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xea62791aa682d455614eaA2A12Ba3d9A2fD197af&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-luna v5 retired',
    name: 'NEAR-LUNA TLP v5 retired',
    token: 'NEAR-LUNA TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xdF8CbF89ad9b7dAFdd3e37acEc539eEcC8c47914', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-LUNA-trisolV5',
    earnedTokenAddress: '0xcd1C20D5486f921Cbd8890129D7C48870cF4054c', //  vault
    earnContractAddress: '0xcd1C20D5486f921Cbd8890129D7C48870cF4054c', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-luna',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'LUNA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-aurora-tri v5 retired',
    name: 'TRI-AURORA TLP v5 retired',
    token: 'TRI-AURORA TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xd1654a7713617d41A8C9530Fb9B948d00e162194', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-TRI-trisolV5',
    earnedTokenAddress: '0xb9dAC6bd0C83165D2B8dd41E89A8746175469Ff0', //  vault
    earnContractAddress: '0xb9dAC6bd0C83165D2B8dd41E89A8746175469Ff0', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-aurora-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['AURORA', 'TRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
  },
  {
    id: 'trisolaris-aurora-weth v5 retired',
    name: 'AURORA-WETH TLP v5 retired',
    token: 'AURORA-WETH TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x5eeC60F348cB1D661E4A5122CF4638c7DB7A886e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-WETH-trisolV5',
    earnedTokenAddress: '0x7b524420625c8f8DC3b18731AD53F32CF4e797b8', //  vault
    earnContractAddress: '0x7b524420625c8f8DC3b18731AD53F32CF4e797b8', //  vault
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-mecha-near v5 retired',
    name: 'MECHA-NEAR TLP v5 retired',
    token: 'MECHA-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xd62f9ec4C4d323A0C111d5e78b77eA33A2AA862f', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-MECHA-NEAR-trisolV5',
    earnedTokenAddress: '0x42D92314765D201FD63BC52fe758f334e8404901', //  vault
    earnContractAddress: '0x42D92314765D201FD63BC52fe758f334e8404901', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-mecha-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['MECHA', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xa33C3B53694419824722C10D99ad7cB16Ea62754/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xa33C3B53694419824722C10D99ad7cB16Ea62754&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-solace-near v5 retired',
    name: 'SOLACE-NEAR TLP v5 retired',
    token: 'SOLACE-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xdDAdf88b007B95fEb42DDbd110034C9a8e9746F2', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-SOLACE-NEAR-trisolV5',
    earnedTokenAddress: '0x50C8cAd8045923d9c7075f3A712209C39A262FA1', //  vault
    earnContractAddress: '0x50C8cAd8045923d9c7075f3A712209C39A262FA1', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-solace-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['SOLACE', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-stnear-xtri v5 retired',
    name: 'STNEAR-XTRI TLP v5 retired',
    token: 'STNEAR-XTRI TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x5913f644A10d98c79F2e0b609988640187256373', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-STNEAR-XTRI-trisolV5',
    earnedTokenAddress: '0x03551BF18412af55536f25d6D3420f5AD4E56cF3', //  vault
    earnContractAddress: '0x03551BF18412af55536f25d6D3420f5AD4E56cF3', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-stnear-xtri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['STNEAR', 'XTRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30/0x802119e4e253D5C19aA06A5d567C5a41596D6803',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30&outputCurrency=0x802119e4e253D5C19aA06A5d567C5a41596D6803',
  },
  {
    id: 'trisolaris-stnear-near v5 retired',
    name: 'STNEAR-NEAR TLP v5 retired',
    token: 'STNEAR-NEAR TLP v5 retired',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x47924Ae4968832984F4091EEC537dfF5c38948a4', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-STNEAR-NEAR-trisolV5',
    earnedTokenAddress: '0x81B935aD4cE603D0EF5ff4EA4314f82E8e9587c8', //  vault
    earnContractAddress: '0x81B935aD4cE603D0EF5ff4EA4314f82E8e9587c8', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-stnear-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['STNEAR', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x07F9F7f963C5cD2BBFFd30CcfB964Be114332E30&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  // end trisolaris v5 strats

  //  begin retired polaris v5 pools
  {
    id: 'polaris-near-polar v5 retired',
    name: 'NEAR-POLAR TLP v5 retired',
    token: 'NEAR-POLAR TLP v5 retired',
    tokenDescription: 'Polaris',
    tokenAddress: '0x3fa4d0145a0b6Ad0584B1ad5f61cB490A04d8242', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-POLAR-polarisV5',
    earnedTokenAddress: '0xBF47f8aa4e5c8918A78073fAE159e9E2CA83aBc8', //  vault
    earnContractAddress: '0xBF47f8aa4e5c8918A78073fAE159e9E2CA83aBc8', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'polaris-near-polar',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'Polaris',
    assets: ['NEAR', 'POLAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xf0f3b9Eee32b1F490A4b8720cf6F005d4aE9eA86',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xf0f3b9Eee32b1F490A4b8720cf6F005d4aE9eA86',
  },
  {
    id: 'polaris-spolar-near v5 retired',
    name: 'SPOLAR-NEAR TLP v5 retired',
    token: 'SPOLAR-NEAR TLP v5 retired',
    tokenDescription: 'Polaris',
    tokenAddress: '0xADf9D0C77c70FCb1fDB868F54211288fCE9937DF', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-SPOLAR-NEAR-polarisV5',
    earnedTokenAddress: '0xC5cE61Ad4c99c33c7bFe541F4DF7824d1F09a4f2', //  vault
    earnContractAddress: '0xC5cE61Ad4c99c33c7bFe541F4DF7824d1F09a4f2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'polaris-spolar-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'Polaris',
    assets: ['SPOLAR', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x9D6fc90b25976E40adaD5A3EdD08af9ed7a21729',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0x9D6fc90b25976E40adaD5A3EdD08af9ed7a21729',
  },

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

  //  BEGIN RETIRED trisolaris pools v3
  {
    id: 'trisolaris-usdt-usdc retired v3',
    name: 'USDT-USDC TLP retired v3',
    token: 'USDT-USDC TLP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  {
    id: 'trisolaris-near-weth retired v3',
    name: 'NEAR-WETH TLP retired v3',
    token: 'NEAR-WETH TLP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-usdt-near retired v3',
    name: 'USDT-NEAR TLP retired v3',
    token: 'USDT-NEAR LP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-usdc-near retired v3',
    name: 'USDC-NEAR TLP retired v3',
    token: 'USDC-NEAR LP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-tri retired v3',
    name: 'wNEAR-TRI TLP retired v3',
    token: 'NEAR-TRI LP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
  },
  {
    id: 'trisolaris-ust-near retired v3',
    name: 'UST-NEAR TLP retired v3',
    token: 'UST-NEAR TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xa9eded3E339b9cd92bB6DEF5c5379d678131fF90', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-UST-NEAR-miniTriV2',
    earnedTokenAddress: '0x003200C91E9242B414C047865334626D9A64BD57', //  vault
    earnContractAddress: '0x003200C91E9242B414C047865334626D9A64BD57', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-ust-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-aurora-weth retired v3',
    name: 'AURORA-WETH TLP retired v3',
    token: 'AURORA-WETH TLP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-aurora-tri retired v3',
    name: 'TRI-AURORA TLP retired v3',
    token: 'TRI-AURORA TLP retired v3',
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
    oracleId: 'trisolaris-aurora-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['AURORA', 'TRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
  },
  {
    id: 'trisolaris-near-luna retired v3',
    name: 'LUNA-NEAR TLP retired v3',
    token: 'LUNA-NEAR TLP retired v3',
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
    oracleId: 'trisolaris-near-luna',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'LUNA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },

  {
    id: 'trisolaris-usdt-tri retired v3',
    name: 'TRI-USDT TLP retired v3',
    token: 'TRI-USDT TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x61C9E05d1Cdb1b70856c7a2c53fA9c220830633c', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-TRI-USDT-miniTri',
    earnedTokenAddress: '0xBd2AE4be1E6402C9955eF322F926E8dfBFcd8825', //  vault
    earnContractAddress: '0xBd2AE4be1E6402C9955eF322F926E8dfBFcd8825', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['USDT', 'TRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xFa94348467f64D5A457F75F8bc40495D33c65aBB/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'trisolaris-near-wbtc retired v3',
    name: 'WBTC-NEAR TLP retired v3',
    token: 'WBTC-NEAR TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0xbc8A244e8fb683ec1Fd6f88F3cc6E565082174Eb', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBTC-NEAR-triV3',
    earnedTokenAddress: '0xb0A74cAb78a34d016625F3f5bf84CdFACFC15dFa', //  vault
    earnContractAddress: '0xb0A74cAb78a34d016625F3f5bf84CdFACFC15dFa', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xf4eb217ba2454613b15dbdea6e5f22276410e89e/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-avax-near retired v3',
    name: 'AVAX-NEAR TLP retired v3',
    token: 'AVAX-NEAR TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x6443532841a5279cb04420E61Cf855cBEb70dc8C', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AVAX-NEAR-miniTri',
    earnedTokenAddress: '0xBCad4b9d9739Ba4642abFDB22Dd793027C2aC906', //  vault
    earnContractAddress: '0xBCad4b9d9739Ba4642abFDB22Dd793027C2aC906', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-avax-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['AVAX', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-bnb-near retired v3',
    name: 'BNB-NEAR TLP retired v3',
    token: 'BNB-NEAR TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x7be4a49AA41B34db70e539d4Ae43c7fBDf839DfA', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BNB-NEAR-miniTri',
    earnedTokenAddress: '0x27DD66e500f28e3272079CcfcC30abDeB6d4Ee36', //  vault
    earnContractAddress: '0x27DD66e500f28e3272079CcfcC30abDeB6d4Ee36', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-bnb-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['BNB', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-matic-near retired v3',
    name: 'MATIC-NEAR TLP retired v3',
    token: 'MATIC-NEAR TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x3dC236Ea01459F57EFc737A12BA3Bb5F3BFfD071', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-MATIC-NEAR-miniTri',
    earnedTokenAddress: '0x59222408f4e089DEd163346E0fb0030CdDfD5D8B', //  vault
    earnContractAddress: '0x59222408f4e089DEd163346E0fb0030CdDfD5D8B', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-matic-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['MATIC', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-near-flx retired v3',
    name: 'FLX-NEAR TLP retired v3',
    token: 'FLX-NEAR TLP retired v3',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x48887cEEA1b8AD328d5254BeF774Be91B90FaA09', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-FLX-NEAR-miniTriV2',
    earnedTokenAddress: '0xd55a5AeD22aA1BFc70B58fd528dDaC04d67F3407', //  vault
    earnContractAddress: '0xd55a5AeD22aA1BFc70B58fd528dDaC04d67F3407', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-flx',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'TriSolaris',
    assets: ['NEAR', 'FLX'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xea62791aa682d455614eaA2A12Ba3d9A2fD197af/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xea62791aa682d455614eaA2A12Ba3d9A2fD197af&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  // end retired trisolaris v3
  // begin retired wannaswap v3
  {
    id: 'wannaswap-aurora-wanna retired v3',
    name: 'AURORA-WANNA WLP retired v3',
    token: 'AURORA-WANNA WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  },
  {
    id: 'trisolaris-ust-near retired v1',
    name: 'UST-NEAR TLP retired v1', //  the name of the vault
    token: 'UST-NEAR TLP retired v1', //  the name of the token that is deposited
    tokenDescription: 'TriSolaris', //  uses what farm
    tokenAddress: '0xa9eded3E339b9cd92bB6DEF5c5379d678131fF90', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-UST-NEAR-miniTri', //    name of vapor token symbol used on FE
    earnedTokenAddress: '0xe7c6493964C42037d77A824Ac2F514f97D9F0a89', //  vault
    earnContractAddress: '0xe7c6493964C42037d77A824Ac2F514f97D9F0a89', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-ust-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-usdt-usdc retired v1',
    name: 'USDT-USDC LP retired v1', //
    token: 'USDT-USDC LP retired v1',
    tokenDescription: 'TriSolaris',
    tokenAddress: '0x2fe064B6c7D274082aa5d2624709bC9AE7D16C77', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'VWAVE-USDT-USDC-TRILP', //
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
    withdrawalFee: '0.0%',
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
  //   withdrawalFee: '0.0%',
  //   addLiquidityUrl:
  //     'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  //   buyTokenUrl:
  //     'https://trisolaris.io/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  // },
  {
    id: 'trisolaris-usdt-near retired v1',
    name: 'USDT-NEAR LP retired v1',
    token: 'USDT-NEAR LP retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://trisolaris.io/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'trisolaris-usdc-near v1',
    name: 'USDC-NEAR LP retired v1',
    token: 'USDC-NEAR LP retired v1',
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
    withdrawalFee: '0.0%',
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
  //   withdrawalFee: '0.0%',
  //   addLiquidityUrl:
  //     'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  //   buyTokenUrl:
  //     'https://trisolaris.io/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  // },

  //  retired vaults
  {
    id: 'trisolaris-near-weth retired v1',
    name: 'NEAR-WETH LP retired v1',
    token: 'NEAR-WETH LP retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'trisolaris-near-tri retired v1',
    name: 'NEAR-TRI LP retired v1',
    token: 'NEAR-TRI LP retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  //  BEGIN WANNASWAP RETIRED POOLS
  {
    id: 'wannaswap-wanna-near retired v1',
    name: 'Wanna-Near WLP retired v1',
    token: 'Wanna-Near WLP retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdc-usdt retired v1',
    name: 'USDT-USDC WLP retired v1',
    token: 'USDT-USDC WLP retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wbtc-near retired v1',
    name: 'WBTC-WNEAR WLP retired v1',
    token: 'WBTC-WNEAR WLP retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wanna retired v1',
    logo: 'single-assets/WANNA.png',
    name: 'WANNA-retired v1',
    token: 'WANNA-retired v1',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  // end WANNASWAP RETIRED V1
  //BEGIN WANNASWAP RETIRED vaults v3-v5

  {
    id: 'wannaswap-wanna-near retired v3',
    name: 'Wanna-Near WLP retired v3',
    token: 'Wanna-Near WLP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wanna-usdt retired v3',
    name: 'Wanna-USDT WLP retired v3',
    token: 'Wanna-USDT WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'wannaswap-wanna-usdc retired v3',
    name: 'Wanna-USDC WLP retired v3',
    token: 'Wanna-USDC WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x4988a896b1227218e4a686fde5eabdcabd91571f',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f',
  },
  {
    id: 'wannaswap-usdc-usdt retired v3',
    name: 'USDT-USDC WLP retired v3',
    token: 'USDT-USDC WLP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-wbtc-near retired v3',
    name: 'WBTC-WNEAR WLP retired v3',
    token: 'WBTC-WNEAR WLP retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0xf4eb217ba2454613b15dbdea6e5f22276410e89e/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-aurora-near retired v3',
    name: 'AURORA-WNEAR WLP retired v3',
    token: 'AURORA-WNEAR WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-dai-near retired v3',
    name: 'DAI-WNEAR WLP retired v3',
    token: 'DAI-WNEAR WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0xe3520349f477a5f6eb06107066048508498a291b/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xe3520349f477a5f6eb06107066048508498a291b&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdt-near retired v3',
    name: 'USDT-WNEAR WLP retired v3',
    token: 'USDT-WNEAR WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-usdc-near retired v3',
    name: 'USDC-WNEAR WLP retired v3',
    token: 'USDC-WNEAR WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-weth-near retired v3',
    name: 'WETH-WNEAR WLP retired v3',
    token: 'WETH-WNEAR WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },

  {
    id: 'wannaswap-wanna retired v3',
    logo: 'single-assets/WANNA.png',
    name: 'WANNAX pool retired v3',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl: 'https://wannaswap.finance/stake',
    buyTokenUrl: 'https://wannaswap.finance/stake',
  },
  {
    id: 'wannaswap-luna-near v3 retired',
    name: 'LUNA-WNEAR WLP v3 retired',
    token: 'LUNA-WNEAR WLP v3 retired',
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
    oracleId: 'wannaswap-near-luna',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096&outputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
  },
  {
    id: 'wannaswap-ust-near retired v3',
    name: 'UST-WNEAR WLP retired v3',
    token: 'UST-WNEAR WLP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC&outputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
  },
  // {
  //   id: 'wannaswap-aurora-wanna',
  //   name: 'AURORA-WANNA WLP v4',
  //   token: 'AURORA-WANNA WLP',
  //   tokenDescription: 'WannaSwap',
  //   tokenAddress: '0xddCcf2F096fa400ce90ba0568908233e6A950961', //  wantToken
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'vapor-AURORA-WANNA-wannaMiniV4',
  //   earnedTokenAddress: '0x9c2a286aF3B66Dc5b89A8C699F0C1229e9964101', //  vault
  //   earnContractAddress: '0x9c2a286aF3B66Dc5b89A8C699F0C1229e9964101', //  vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'lps',
  //   oracleId: 'wannaswap-aurora-wanna',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'WannaSwap',
  //   assets: ['AURORA', 'WANNA'],
  //   risks: [
  //     'COMPLEXITY_LOW',
  //     'BATTLE_TESTED',
  //     'IL_NONE',
  //     'MCAP_MEDIUM',
  //     'AUDIT',
  //     'CONTRACTS_VERIFIED',
  //   ],
  //   stratType: 'StratLP',
  //   withdrawalFee: '0.0%',
  //   addLiquidityUrl:
  //     'https://wannaswap.finance/exchange/add/0x7faA64Faf54750a2E3eE621166635fEAF406Ab22/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  //   buyTokenUrl:
  //     'https://wannaswap.finance/exchange/swap?inputCurrency=0x7faA64Faf54750a2E3eE621166635fEAF406Ab22&outputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  // },
  {
    id: 'wannaswap-wbtc-weth retired v3',
    name: 'WBTC-WETH WLP retired v3',
    token: 'WBTC-WETH WLP retired v3',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0xf56997948d4235514Dcc50fC0EA7C0e110EC255d', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBTC-WETH-wannaV3',
    earnedTokenAddress: '0xf64938ed3da07b616fef8625A37b4A53450ee1b7', //  vault
    earnContractAddress: '0xf64938ed3da07b616fef8625A37b4A53450ee1b7', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-wbtc-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
    assets: ['WBTC', 'WETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0xf4eb217ba2454613b15dbdea6e5f22276410e89e/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'wannaswap-bnb-near retired v3',
    name: 'BNB-NEAR WLP retired v3',
    token: 'BNB-NEAR WLP retired v3',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x4BAd8241B1f3B132AdCBbf64421Db07EeAba9B01', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBNB-NEAR-wannaV3',
    earnedTokenAddress: '0x600FF56Bb9f3Ae1DDB6eD36D80175716Be441295', //  vault
    earnContractAddress: '0x600FF56Bb9f3Ae1DDB6eD36D80175716Be441295', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-bnb-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
    assets: ['BNB', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'wannaswap-avax-near retired v3',
    name: 'AVAX-NEAR WLP retired v3',
    token: 'AVAX-NEAR WLP retired v3',
    tokenDescription: 'WannaSwap',
    tokenAddress: '0x177d3bb40EAf6843d86a73F1b2a65E97d7D55d87', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AVAX-NEAR-wannaV3',
    earnedTokenAddress: '0x222F1B810d4F741986d0be99f68eEa6b077affe2', //  vault
    earnContractAddress: '0x222F1B810d4F741986d0be99f68eEa6b077affe2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'wannaswap-avax-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'WannaSwap',
    assets: ['AVAX', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://wannaswap.finance/exchange/add/0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://wannaswap.finance/exchange/swap?inputCurrency=0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },

  //  BEGIN RETIRED NEARPAD VAULTS V3
  {
    id: 'nearpad-usdt-usdc retired v3',
    name: 'USDT-USDC NearPad LP retired v3',
    token: 'USDT-USDC NearPad LP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
  },
  {
    id: 'nearpad-pad-near retired v3',
    name: 'PAD-NEAR NearPad LP retired v3',
    token: 'PAD-NEAR NearPad LP retired v3',
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
    status: 'eol',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'nearpad-pad-rose retired v3',
    name: 'PAD-ROSE NearPad LP retired v3',
    token: 'PAD-ROSE NearPad LP retired v3',
    tokenDescription: 'NearPad',
    tokenAddress: '0xC6C3cc84EabD4643C382C988fA2830657fc70a6B', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-ROSE-padV3',
    earnedTokenAddress: '0xdBBe7778b09F9568C7856036644FeCFfE46ad177', //  vault
    earnContractAddress: '0xdBBe7778b09F9568C7856036644FeCFfE46ad177', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-rose',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'NearPad',
    assets: ['PAD', 'ROSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xdcD6D4e2B3e1D1E1E6Fa8C21C8A323DcbecfF970',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xdcD6D4e2B3e1D1E1E6Fa8C21C8A323DcbecfF970',
  },
  {
    id: 'nearpad-pad-mnft retired v3',
    name: 'PAD-MNFT NearPad LP retired v3',
    token: 'PAD-MNFT NearPad LP retired v3',
    tokenDescription: 'NearPad',
    tokenAddress: '0xF5D643C8b102aCD7Ed4D841bcF06DC124280A724', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-MNFT-padV3',
    earnedTokenAddress: '0xb4bFeeB70047887390B0D168fe9a0eFBa3DE410C', //  vault
    earnContractAddress: '0xb4bFeeB70047887390B0D168fe9a0eFBa3DE410C', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-mnft',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'NearPad',
    assets: ['PAD', 'MNFT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xd126B48c072f4668e944A8895bC74044D5f2E85b',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xd126B48c072f4668e944A8895bC74044D5f2E85b',
  },
  {
    id: 'nearpad-usdt-pad retired v3',
    name: 'USDT-PAD NearPad LP retired v3',
    token: 'USDT-PAD NearPad LP retired v3',
    tokenDescription: 'NearPad',
    tokenAddress: '0x1FD6CBBFC0363AA394bd77FC74F64009BF54A7e9', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-PAD-padV3',
    earnedTokenAddress: '0x74f6E7752983A1f20793B391D52AF418392605B2', //  vault
    earnContractAddress: '0x74f6E7752983A1f20793B391D52AF418392605B2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-usdt-pad',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'NearPad',
    assets: ['USDT', 'PAD'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781',
  },
  {
    id: 'nearpad-pad-dai retired v3',
    name: 'PAD-DAI NearPad LP retired v3',
    token: 'PAD-DAI NearPad LP retired v3',
    tokenDescription: 'NearPad',
    tokenAddress: '0xaf3f197Ce82bf524dAb0e9563089d443cB950048', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-DAI-padV3',
    earnedTokenAddress: '0x81dBB20B6b3705F6eFdea3032c8e721db7aa7343', //  vault
    earnContractAddress: '0x81dBB20B6b3705F6eFdea3032c8e721db7aa7343', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'NearPad',
    assets: ['PAD', 'DAI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xe3520349f477a5f6eb06107066048508498a291b',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xe3520349f477a5f6eb06107066048508498a291b',
  },
  {
    id: 'nearpad-pad-usdc retired v3',
    name: 'PAD-USDC NearPad LP retired v3',
    token: 'PAD-USDC NearPad LP retired v3',
    tokenDescription: 'NearPad',
    tokenAddress: '0x73155e476D6b857fE7722AEfeBAD50F9F8bd0b38', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-PAD-USDC-padV3',
    earnedTokenAddress: '0xD1C277bC43d8f5Ce2453fF9feEc15734F975C93E', //  vault
    earnContractAddress: '0xD1C277bC43d8f5Ce2453fF9feEc15734F975C93E', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'nearpad-pad-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'NearPad',
    assets: ['PAD', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://dex.nearpad.io/add/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    buyTokenUrl:
      'https://dex.nearpad.io/swap?inputCurrency=0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781&outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
  },
  //  END NEARPAD RETIRED V3 VAULTS
  // BEGIN RETIRED AURORASWAP V3 VAULTS
  {
    id: 'auroraswap-usdc-near retired v3',
    name: 'NEAR-USDC AuroraSwap LP retired v3',
    token: 'NEAR-USDC AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x480A68bA97d70495e80e11e05D59f6C659749F27', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-USDC-auroraswap',
    earnedTokenAddress: '0xfE4f3c154a91007d173e1BDeff25D0cDD339eda6', //  vault
    earnContractAddress: '0xfE4f3c154a91007d173e1BDeff25D0cDD339eda6', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-usdc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'auroraswap-near-weth retired v3',
    name: 'NEAR-WETH AuroraSwap retired v3',
    token: 'NEAR-WETH AuroraSwap retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xc57eCc341aE4df32442Cf80F34f41Dc1782fE067', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WETH-auroraswap',
    earnedTokenAddress: '0xc0bBa5e2C4F1908815A0D74A74e08C62D08e4741', //  vault
    earnContractAddress: '0xc0bBa5e2C4F1908815A0D74A74e08C62D08e4741', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-near-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'auroraswap-weth-wbtc retired v3',
    name: 'WBTC-WETH AuroraSwap LP retired v3',
    token: 'WBTC-WETH AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xcb8584360Dc7A4eAC4878b48fB857AA794E46Fa8', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-WBTC-WETH-auroraswap',
    earnedTokenAddress: '0x64c9744ce1b2356aD0824204F2C65866ee419EA2', //  vault
    earnContractAddress: '0x64c9744ce1b2356aD0824204F2C65866ee419EA2', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-weth-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['WETH', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB/0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB&outputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  },
  {
    id: 'auroraswap-near-busd retired v3',
    name: 'NEAR-BUSD AuroraSwap LP retired v3',
    token: 'NEAR-BUSD AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x1C393468D95ADF8960E64939bCDd6eE602DE221C', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-BUSD-auroraswap',
    earnedTokenAddress: '0xb43eE48CD8E8343aa69a82A72993f648f7C030ca', //  vault
    earnContractAddress: '0xb43eE48CD8E8343aa69a82A72993f648f7C030ca', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-near-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['NEAR', 'BUSD'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818',
  },
  {
    id: 'auroraswap-near-matic retired v3',
    name: 'NEAR-MATIC AuroraSwap LP retired v3',
    token: 'NEAR-MATIC AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x8298B8C863c2213B9698A08de009cC0aB0F87FEe', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-MATIC-auroraswap',
    earnedTokenAddress: '0xe3eF895b193208a234E081D29d3A88a12C040334', //  vault
    earnContractAddress: '0xe3eF895b193208a234E081D29d3A88a12C040334', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-near-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['NEAR', 'MATIC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xb03595F5BdE574D9903CE5c81B1039Ee5401Cdca',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xb03595F5BdE574D9903CE5c81B1039Ee5401Cdca',
  },
  {
    id: 'auroraswap-near-wbtc retired v3',
    name: 'NEAR-WBTC AuroraSwap LP retired v3',
    token: 'NEAR-WBTC AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xe11A3f2BAB372d88D133b64487D1772847Eec4eA', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-NEAR-WBTC-auroraswap',
    earnedTokenAddress: '0x164AB880E95C6dDa87Af18eBC9b4886BD8C012d9', //  vault
    earnContractAddress: '0x164AB880E95C6dDa87Af18eBC9b4886BD8C012d9', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['NEAR', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d/0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d&outputCurrency=0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
  },
  {
    id: 'auroraswap-usdc-usdtretired v3',
    name: 'USDT-USDC AuroraSwap LP retired v3',
    token: 'USDT-USDC AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xEc538fAfaFcBB625C394c35b11252cef732368cd', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-USDT-USDC-auroraswap',
    earnedTokenAddress: '0xC62e346C26637cd2D9F87714BD44add307E293ae', //  vault
    earnContractAddress: '0xC62e346C26637cd2D9F87714BD44add307E293ae', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0x4988a896b1227218e4a686fde5eabdcabd91571f/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x4988a896b1227218e4a686fde5eabdcabd91571f&outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
  },
  {
    id: 'auroraswap-aurora-near retired v3',
    name: 'AURORA-NEAR AuroraSwap LP retired v3',
    token: 'AURORA-NEAR AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x84567E7511E0d97DE676d236AEa7aE688221799e', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-AURORA-NEAR-auroraswap',
    earnedTokenAddress: '0x8ff4edF477F5fA660408137301025cacADE3628D', //  vault
    earnContractAddress: '0x8ff4edF477F5fA660408137301025cacADE3628D', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-aurora-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
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
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'auroraswap-brl-near retired v3',
    name: 'BRL-NEAR AuroraSwap LP retired v3',
    token: 'BRL-NEAR AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0x5bdac608cd38c5c8738f5be20813194a3150d4ff', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BRL-NEAR-auroraswap',
    earnedTokenAddress: '0xaf0A920954c4F786E79F7506eBdecc0F8E5Ca30b', //  vault
    earnContractAddress: '0xaf0A920954c4F786E79F7506eBdecc0F8E5Ca30b', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-brl-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['BRL', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0x12c87331f086c3C926248f964f8702C0842Fd77F/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x12c87331f086c3C926248f964f8702C0842Fd77F&outputCurrency=0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
  },
  {
    id: 'auroraswap-brl-weth retired v3',
    name: 'BRL-WETH AuroraSwap LP retired v3',
    token: 'BRL-WETH AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xefcf518ca36dc3362f539965807b42a77dc26be0', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BRL-WETH-auroraswap',
    earnedTokenAddress: '0xD76e4ca23269Dc93F16240E5A9135F3E9B6E00B3', //  vault
    earnContractAddress: '0xD76e4ca23269Dc93F16240E5A9135F3E9B6E00B3', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-brl-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['BRL', 'WETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0x12c87331f086c3C926248f964f8702C0842Fd77F/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x12c87331f086c3C926248f964f8702C0842Fd77F&outputCurrency=0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
  {
    id: 'auroraswap-brl-aurora retired v3',
    name: 'BRL-AURORA AuroraSwap LP retired v3',
    token: 'BRL-AURORA AuroraSwap LP retired v3',
    tokenDescription: 'AuroraSwap',
    tokenAddress: '0xDB0363ee28a5B40BDc2f4701e399c63E00f91Aa8', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BRL-AURORA-auroraswap',
    earnedTokenAddress: '0x23E9e509aCe446536b280A1d6aca0dcd4b7Bb6C8', //  vault
    earnContractAddress: '0x23E9e509aCe446536b280A1d6aca0dcd4b7Bb6C8', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'auroraswap-brl-aurora',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'AuroraSwap',
    assets: ['BRL', 'AURORA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.0%',
    addLiquidityUrl:
      'https://swap.auroraswap.net/#/add/0x12c87331f086c3C926248f964f8702C0842Fd77F/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
    buyTokenUrl:
      'https://swap.auroraswap.net/#/swap?inputCurrency=0x12c87331f086c3C926248f964f8702C0842Fd77F&outputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
  },
];
