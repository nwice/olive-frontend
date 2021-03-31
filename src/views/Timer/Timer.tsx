import React from 'react'
import Page from 'components/layout/Page'
import Countdown from 'react-countdown'
import styled from 'styled-components'
import { Heading, Text } from '@blzd-dev/uikit'
import useI18n from 'hooks/useI18n'

const Completionist = () => <span>The time is Now! Earn Olives and become rich!</span>;

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg.svg');
  background-size: 110px;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg.svg'), url('/images/pan-bg.svg');
    background-size: 150px;
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Timer: React.FC = () => {
  const TranslateString = useI18n()
  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(729, 'Olive.cash will start')}
        </Heading>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          <Countdown date={1617278400000}>
            <Completionist />
          </Countdown>
        </Heading>
        <Text>{TranslateString(730, 'Thu Apr 01 2021 12:00:00 GMT+0000')}</Text>
      </Hero>
    </Page>
  )
}

export default Timer
