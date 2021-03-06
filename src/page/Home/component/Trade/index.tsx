import { SimpleGrid, VStack, Box } from "@chakra-ui/react"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets"

import Collateral from "./Collateral"
import Leverage from "./Leverage"
import MarketSelector from "./MarketSelector"
import Position from "./Position"
import React from "react"
import SideSwitcher from "./SideSwitcher"
import Slippage from "./Slippage"
import Summary from "./Summary"

function Trade() {
    return (
        <SimpleGrid columns={[1, null, 2]} spacing={16}>
            <VStack spacing={6} p={0}>
                <SideSwitcher />
                <MarketSelector />
                <Collateral />
                <Position />
                <Leverage />
                <Slippage />
            </VStack>
            <VStack p={0} spacing={6}>
                <Summary />
                <Box width="100%" height="100%">
                    <AdvancedRealTimeChart theme="dark" autosize />
                </Box>
            </VStack>
        </SimpleGrid>
    )
}

export default Trade
