import React from 'react'
import { Card, CardBody, Heading, Text } from '@olive-dev/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceOliveBusd } from '../../../state/hooks'

const StyledOliveStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const OliveStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceOliveBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let olivePerBlock = 0;
  if(farms && farms[0] && farms[0].olivePerBlock){
    olivePerBlock = new BigNumber(farms[0].olivePerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledOliveStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'OLIVE Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total OLIVE Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total OLIVE Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New OLIVE/block')}</Text>
          <Text bold fontSize="14px">{olivePerBlock}</Text>
        </Row>
      </CardBody>
    </StyledOliveStats>
  )
}

export default OliveStats
