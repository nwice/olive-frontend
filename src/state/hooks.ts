import BigNumber from 'bignumber.js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchPoolsUserDataAsync, fetchPoolsPublicDataAsync } from './actions'
import { State, Farm, Pool } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)
  const bnbPrice = usePriceBnbBusd()

  const stakedBalance = farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0)

  const stakedInQuoteToken = stakedBalance.dividedBy(farm.lpTokenBalanceMC).multipliedBy(farm.lpTotalInQuoteToken)
  let stakedUsd = new BigNumber(0)
  if (farm.quoteTokenSymbol === QuoteToken.AVAX) {
    stakedUsd = bnbPrice.times(stakedInQuoteToken)
  } else if (!farm.isTokenOnly && farm.quoteTokenSymbol === QuoteToken.BUSD) { // USDT on avax 6 decimals
    stakedUsd = new BigNumber(10).pow(12).times(stakedInQuoteToken)
  }

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance,
    stakedUsd,
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 10 // AVAX-USDT
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceOliveBusd = (): BigNumber => {
  const pid = 9 // OLIVE-USDT LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const olivePrice = usePriceOliveBusd()
  let value = new BigNumber(0)
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteTokenSymbol === QuoteToken.AVAX) {
        val = bnbPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.OLIVE) {
        val = olivePrice.times(farm.lpTotalInQuoteToken)
      } else if (!farm.isTokenOnly && farm.quoteTokenSymbol === QuoteToken.BUSD) { // USDT on avax 6 decimals
        val = new BigNumber(10).pow(12).times(farm.lpTotalInQuoteToken)
      } else {
        val = farm.lpTotalInQuoteToken
      }
      value = value.plus(val)
    }
  }
  return value
}
