export const mantlePools = [
 {
    id: 'mantleTestnet-bit-test',
    name: 'BIT-TEST PhotonLP',
    token: 'BIT-TEST PhotonLP',
    tokenDescription: 'Photonswap',
    tokenAddress: '0x36047876cd5d68C58d1972fd567b6edc3788F93a', //  wantToken
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'vapor-BIT-TEST-photonswap',
    earnedTokenAddress: '0xcDB200B954180505B03207aB1b5ff7e01cdf5faD', //  vault
    earnContractAddress: '0xcDB200B954180505B03207aB1b5ff7e01cdf5faD', //  vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mantleTestnet-bit-test',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Photonswap',
    assets: ['BIT', 'TEST'],
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
  },
 ];
