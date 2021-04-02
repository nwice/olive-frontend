import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 2,
  //   lpSymbol: 'OLIVE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb23bE2398f3397A6e0F014cCe5DA25975de1c197',
  //   },
  //   tokenSymbol: 'OLIVE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x617724974218A18769020A70162165A539c07E8a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'OLIVE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8E9A1C74f8b194933f1B520CE58Eb3405ea68008',
  //   },
  //   tokenSymbol: 'OLIVE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x617724974218A18769020A70162165A539c07E8a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },

  // single pools
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'OLIVE',
    lpAddresses: {
      97: '',
      56: '0xb23bE2398f3397A6e0F014cCe5DA25975de1c197', // OLIVE-BUSD LP
      43114: '0xe79B2190deC1533381059AA06d63ee7e80958e4f', // OLIVE-USDT LP
    },
    tokenSymbol: 'OLIVE',
    tokenAddresses: {
      97: '',
      56: '0x617724974218A18769020A70162165A539c07E8a',
      43114: '0x617724974218A18769020A70162165A539c07E8a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524', // BTC-BNB LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422', // ETH-BNB LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 7,
  //   isTokenOnly: true,
  //   lpSymbol: 'BIFI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd132d2c24f29ee8abb64a66559d1b7aa627bd7fd', // BIFI-BNB LP
  //   },
  //   tokenSymbol: 'BIFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 8,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // CAKE-BNB LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
