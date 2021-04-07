import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 8,
    lpSymbol: 'OLIVE-AVAX LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x57cc32Cd7F5a531953E9af25e1C9394093428082',
    },
    tokenSymbol: 'OLIVE',
    tokenAddresses: {
      97: '',
      56: '0x617724974218A18769020A70162165A539c07E8a',
      43114: '0x617724974218A18769020A70162165A539c07E8a',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'OLIVE-USDT LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xf54a719215622f602fca5bf5a6509734c3574a4c',
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
    pid: 10,
    lpSymbol: 'USDT-AVAX LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xbfc3C72Bab7252341dC90A1E85797Ebd8C79c338',
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
  {
    pid: 11,
    lpSymbol: 'SUSHI-AVAX LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xbcD81aAA76D9C1E3aED31c315761c0D9779751B5',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    lpSymbol: 'ETH-AVAX LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x76FbCE48D9dCE3d04bfAc318d1fDeb3a78e903A9',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 13,
    lpSymbol: 'WBTC-AVAX LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x79C1B4Ee613F29a8c0aae563Ef445317D99a6906',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'PNG-AVAX LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xaD786Dfe6aC4a68dd3F9a5400DdeE5DedD20d109',
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    lpSymbol: 'DAI-USDT LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xd3566eC8Cdf8cb4E66B9F958ddb47E225C51E58b',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0xba7deebbfc5fa1100fb055a87773e1e99cd3507a',
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
      43114: '0xf54a719215622f602fca5bf5a6509734c3574a4c', // OLIVE-USDT LP
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
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'PNG',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367', // PNG-AVAX LP
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    isTokenOnly: true,
    lpSymbol: 'SUSHI',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xd8B262C0676E13100B33590F10564b46eeF652AD', // SUSHI-AVAX LP
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      56: '',
      43114: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
    },
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
