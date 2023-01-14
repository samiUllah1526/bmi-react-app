

import React from 'react'
import {
    Card,
    Stat,
    StatLabel,
    StatHelpText,
    StatNumber,
} from '@chakra-ui/react'



export const ResultBoard = ({ result, description, color }) => {
    return (
        <Card p='5'>
            <Stat>
                <StatLabel>BMI</StatLabel>
                <StatNumber>{result.toFixed(2)}</StatNumber>
                <StatHelpText color={color}>
                    {description}
                </StatHelpText>
            </Stat>
        </Card>)
}
