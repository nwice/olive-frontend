import { MenuEntry } from '@blzd-dev/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: "Exchange",
  //       href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3",
  //       external: true
  //     },
  //     {
  //       label: "Liquidity",
  //       href: "https://exchange.pancakeswap.finance/#/pool",
  //       external: true
  //     },
  //   ],
  // },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'CaveIcon',
  //   href: '/caves',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3',
  //       external: true
  //     },
  //   ],
  // },
  {
    label: 'Countdown',
    icon: 'CaveIcon',
    href: '/timer',
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/olive-cash",
        external: true
      },
      {
        label: "Docs",
        href: "https://olive-cash.medium.com",
        external: true
      },
      {
        label: "Blog",
        href: "https://olive-cash.medium.com",
        external: true
      },
    ],
  },
]

export default config
