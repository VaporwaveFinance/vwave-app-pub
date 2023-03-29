export const arbitrumPools = [
    {
      id: 'arbEx-ARX-USDC',
      name: 'ARX-USDC ArbXLP',
      token: 'ARX-USDC ArbXLP',
      tokenDescription: 'Arbitrum Exchange',
      tokenAddress: '0xA6efAE0C9293B4eE340De31022900bA747eaA92D', //  wantToken
      tokenDecimals: 18,
      tokenDescriptionUrl: '#',
      earnedToken: 'vapor-ARX-USDC-ArbX',
      earnedTokenAddress: '0x3705ccb75fb7dfd22a91d8b840e86765c66fe88c', //  vault
      earnContractAddress: '0x3705ccb75fb7dfd22a91d8b840e86765c66fe88c', //  vault
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'arbitrumExchange-arx-usdc',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Arbitrum Exchange',
      assets: ['ARX', 'USDC'],
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
        'https://arbidex.fi/add/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/0xD5954c3084a1cCd70B4dA011E67760B8e78aeE84/',
    },
    {
        id: 'arbEx-WETH-USDC',
        name: 'WETH-USDC ArbXLP',
        token: 'WETH-USDC ArbXLP',
        tokenDescription: 'Arbitrum Exchange',
        tokenAddress: '0x4C42fA9Ecc3A17229EDf0fd6A8eec3F11D7E00D3', //  wantToken
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'vapor-WETH-USDC-ArbX',
        earnedTokenAddress: '0xfaAC85f51920134A89570aDe52fa45B06f2E844C', //  vault
        earnContractAddress: '0xfaAC85f51920134A89570aDe52fa45B06f2E844C', //  vault
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'arbitrumExchange-weth-usdc',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Arbitrum Exchange',
        assets: ['WETH', 'USDC'],
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
          'https://arbidex.fi/add/ETH/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
      },
      {
        id: 'arbEx-USDT-USDC',
        name: 'USDT-USDC ArbXLP',
        token: 'USDT-USDC ArbXLP',
        tokenDescription: 'Arbitrum Exchange',
        tokenAddress: '0xD082d6E0AF69f74F283b90C3CDa9C35615Bce367', //  wantToken
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'vapor-USDT-USDC-ArbX',
        earnedTokenAddress: '0xc4917a477A7807Da0cB4eeB05651D134430110cC', //  vault
        earnContractAddress: '0xc4917a477A7807Da0cB4eeB05651D134430110cC', //  vault
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'arbitrumExchange-usdt-usdc',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Arbitrum Exchange',
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
          'https://arbidex.fi/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
      },
      {
        id: 'arbEx-WBTC-USDC',
        name: 'WBTC-USDC ArbXLP',
        token: 'WBTC-USDC ArbXLP',
        tokenDescription: 'Arbitrum Exchange',
        tokenAddress: '0xA6A6090749B9E3010802C5bFF3845aa6A4AC321B', //  wantToken
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'vapor-WBTC-USDC-ArbX',
        earnedTokenAddress: '0x4922b3f50bc80bd809175AfFbF518B00B357D87F', //  vault
        earnContractAddress: '0x4922b3f50bc80bd809175AfFbF518B00B357D87F', //  vault
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'arbitrumExchange-wbtc-usdc',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Arbitrum Exchange',
        assets: ['WBTC', 'USDC'],
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
          'https://arbidex.fi/add/0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
      },
      {
        id: 'arbEx-WBTC-WETH',
        name: 'WBTC-WETH ArbXLP',
        token: 'WBTC-WETH ArbXLP',
        tokenDescription: 'Arbitrum Exchange',
        tokenAddress: '0x10A12127867d3885Ac64b51cc91a67c907eE51db', //  wantToken
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'vapor-WBTC-WETH-ArbX',
        earnedTokenAddress: '0x91B7D752894B1250b53b777647D2e23206a7dDB8', //  vault
        earnContractAddress: '0x91B7D752894B1250b53b777647D2e23206a7dDB8', //  vault
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'arbitrumExchange-wbtc-weth',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Arbitrum Exchange',
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
        withdrawalFee: '0.1%',
        addLiquidityUrl:
          'https://arbidex.fi/add/0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f/ETH'
      },
      {
        id: 'arbEx-WETH-ARB',
        name: 'WETH-ARB ArbXLP',
        token: 'WETH-ARB ArbXLP',
        tokenDescription: 'Arbitrum Exchange',
        tokenAddress: '0x39511b74722afE77d532Eb70632B4B59C559019b', //  wantToken
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'vapor-WETH-ARB-ArbX',
        earnedTokenAddress: '0x3C633a423e41E7C0a3362bCa7E6A5b39F9f69a44', //  vault
        earnContractAddress: '0x3C633a423e41E7C0a3362bCa7E6A5b39F9f69a44', //  vault
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'arbitrumExchange-weth-arb',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Arbitrum Exchange',
        assets: ['WETH', 'ARB'],
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
          'https://arbidex.fi/add/ETH/0x912CE59144191C1204E64559FE8253a0e49E6548'
      },
      {
        id: 'arbEx-ARB-USDC',
        name: 'ARB-USDC ArbXLP',
        token: 'ARB-USDC ArbXLP',
        tokenDescription: 'Arbitrum Exchange',
        tokenAddress: '0xD65Ef54B1ff5D9a452B32Ac0c304d1674F761061', //  wantToken
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'vapor-ARB-USDC-ArbX',
        earnedTokenAddress: '0xd5b6ac8F0E4A74376924d6455d3a1176ffD8bE00', //  vault
        earnContractAddress: '0xd5b6ac8F0E4A74376924d6455d3a1176ffD8bE00', //  vault
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'arbitrumExchange-arb-usdc',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Arbitrum Exchange',
        assets: ['ARB', 'USDC'],
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
          'https://arbidex.fi/add/0x912CE59144191C1204E64559FE8253a0e49E6548/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
      },
  ];
  
