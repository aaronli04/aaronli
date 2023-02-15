import React from 'react'
import {
    Text,
    VStack
} from '@chakra-ui/react'

const Header = () => {
    return (
        <VStack alignItems='flex-start' gap={0.5}>
            <Text fontSize='5xl' fontWeight='bold'>
                Aaron Li
            </Text>
            <Text>
                What's good, I'm Aaron and I'm trying to get addicted to coding by doing random, cool projects.
            </Text>
            <Text>
                I don't really know what I'm doing most of the time, so I've gotten used to copying code from Stack Overflow.
            </Text>
            <Text>
                Here's some stuff I've worked on over the past ~3 months.
            </Text>
        </VStack>
    )
}

export default Header