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
        href: 'https://swap.olive.cash/#/swap?outputCurrency=0x617724974218A18769020A70162165A539c07E8a',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://swap.olive.cash/#/pool',
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
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'OliveCash Token',
  //       href: 'https://info.pangolin.exchange/#/token/0x617724974218a18769020a70162165a539c07e8a',
  //       external: true,
  //     },
  //   ],
  // },
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
        href: 'https://olive-cash.gitbook.io/olive-cash/',
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
