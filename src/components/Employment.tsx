import React from 'react'
import {
    HStack,
    Link,
    Text,
    VStack
} from '@chakra-ui/react'

const Employment = () => {
    return (
        <VStack alignItems='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
                Employment Status
            </Text>
            <HStack>
                <Text>
                    Forever unemployed. Catch me on Twitter though:
                </Text>
                <Link href='https://twitter.com/aaronnli' textDecoration='underline'>
                    aaronnli
                </Link>
            </HStack>
            <HStack>
                <Text>
                    GitHub bummin:
                </Text>
                <Link href='https://github.com/aaronli04/' textDecoration='underline'>
                    aaronli04
                </Link>
            </HStack>
        </VStack>
    )
}

export default Employment