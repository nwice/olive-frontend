import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceOliveBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@olive-dev/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const olivePriceUsd = usePriceOliveBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={olivePriceUsd.toNumber()}
      links={config}
      priceLink="https://pancakeswap.info/token/0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3"
      {...props}
    />
  )
}

export default Menu
