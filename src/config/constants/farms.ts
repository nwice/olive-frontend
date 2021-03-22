import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 2,
    lpSymbol: 'OLIVE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x278d8951773b4de764ec2a976c6513f9463d3092',
    },
    tokenSymbol: 'OLIVE',
    tokenAddresses: {
      97: '',
      56: '0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'OLIVE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc8b84089c11927cee32eaafd6e32401b54c1e4d0',
    },
    tokenSymbol: 'OLIVE',
    tokenAddresses: {
      97: '',
      56: '0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
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
      56: '0xE9C53B5Ab0C9cDBd72A03151a628863C28c55A6A', // OLIVE-BUSD LP
    },
    tokenSymbol: 'OLIVE',
    tokenAddresses: {
      97: '',
      56: '0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
