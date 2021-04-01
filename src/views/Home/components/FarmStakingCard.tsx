import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@olive-dev/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import OliveHarvestBalance from './OliveHarvestBalance'
import OliveWalletBalance from './OliveWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/olive-oil-bg.svg');
  background-size: 256px;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const TokenImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-right: 8px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const addWatchOliveToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0x72274dfaa72ef6a466d9586c5f911d50e5ce98c3',
              symbol: 'Olive',
              decimals: '18',
              image: 'https://olive.cash/images/farms/olive.png',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
  }, [])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <TokenImageWrapper>
          <CardImage src="/images/olive/2.png" alt="OLIVE logo" width={64} height={64} />
          <Button onClick={addWatchOliveToken} scale="sm">
            + <img style={{ marginLeft: 8 }} width={16} src="/images/wallet/metamask.png" alt="metamask logo" />
          </Button>
        </TokenImageWrapper>
        <Block>
          <OliveHarvestBalance />
          <Label>{TranslateString(544, 'OLIVE to Harvest')}</Label>
        </Block>
        <Block>
          <OliveWalletBalance />
          <Label>{TranslateString(546, 'OLIVE in Wallet')}</Label>
        </Block>
        <Actions>
          {account ? (
            <Button id="harvest-all" disabled={balancesWithValue.length <= 0 || pendingTx} onClick={harvestAllFarms}>
              {pendingTx
                ? TranslateString(548, 'Collecting OLIVE')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
