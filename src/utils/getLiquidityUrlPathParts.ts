// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
// In the URL, using the quote token 'BNB' is represented by 'ETH'
const getLiquidityUrlPathParts = ({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  // eslint-disable-next-line no-nested-ternary
  const firstPart = quoteTokenSymbol === 'BNB' ? 'ETH' : quoteTokenSymbol === 'AVAX' ? 'AVAX' : quoteTokenAdresses[chainId]
  const secondPart = tokenAddresses[chainId] === '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7' ? 'AVAX' : tokenAddresses[chainId]
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
