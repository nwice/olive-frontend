import { MenuEntry } from '@olive-dev/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x617724974218A18769020A70162165A539c07E8a',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
        external: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'CaveIcon',
    href: '/pools',
  },
  {
    label: 'Listings',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x617724974218A18769020A70162165A539c07E8a',
        external: true,
      },
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0x617724974218a18769020a70162165a539c07e8a-bsc',
        external: true,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/olive-cash',
        external: true,
      },
      {
        label: 'Docs',
        href: 'https://olive-cash.medium.com',
        external: true,
      },
      {
        label: 'Blog',
        href: 'https://olive-cash.medium.com',
        external: true,
      },
    ],
  },
]

export default config
