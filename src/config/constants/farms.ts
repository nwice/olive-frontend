import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 3,
    lpSymbol: 'OLIVE-USDT LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xe79B2190deC1533381059AA06d63ee7e80958e4f',
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
  {
    pid: 4,
    lpSymbol: 'AVAX-USDT LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x9EE0a4E21bd333a6bb2ab298194320b8DaA26516',
    },
    tokenSymbol: 'AVAX',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

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
  {
    pid: 1,
    isTokenOnly: true,
    lpSymbol: 'WAVAX',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x9EE0a4E21bd333a6bb2ab298194320b8DaA26516', // AVAX-USDT LP
    },
    tokenSymbol: 'WAVAX',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x1aCf1583bEBdCA21C8025E172D8E8f2817343d65', // ETH-AVAX LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBTC',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //     43114: '0x7a6131110B82dAcBb5872C7D352BfE071eA6A17C', // BTC-AVAX LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //     43114: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'PNG',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //     43114: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367', // PNG-AVAX LP
  //   },
  //   tokenSymbol: 'PNG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //     43114: '0x60781C2586D68229fde47564546784ab3fACA982',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'SUSHI',
  //   lpAddresses: {
  //     97: '',
  //     56: '',
  //     43114: '0xd8B262C0676E13100B33590F10564b46eeF652AD', // SUSHI-AVAX LP
  //   },
  //   tokenSymbol: 'SUSHI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '',
  //     43114: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
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
