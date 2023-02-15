import React from 'react'
import {
    Link,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from '@chakra-ui/react'

const Projects = () => {
    return (
        <VStack alignItems='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
                Projects
            </Text>
            <Tabs>
                <TabList>
                    <Tab>Campus Thrift</Tab>
                    <Tab>Credit Do</Tab>
                    <Tab>Taylor Swift Lyric Guesser</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <VStack gap={2} alignItems='flex-start'>
                            <Text>
                                Vanderbilt doesn&apos;t really use Facebook Marketplace. Instead we have a GroupMe
                                with 4,000 people constantly pushing random items. I hate GroupMe so I'm building an
                                alternative no-fee second-hand market place for students.
                            </Text>
                            <Link href='https://campusthrift.vercel.app/' textDecoration='underline'>
                                Campus Thrift
                            </Link>
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <VStack gap={2} alignItems='flex-start'>
                            <Text>
                                Credit Do is a non-profit that fights student debt through financial literacy
                                education and work opportunities. To increase their impact, they want to digitize their learning experience
                                and improve student outcomes. I'm on a team of 4 that is developing a student-facing application
                                that allows students to set goals, monitor events, keep up with lessons, and receive gift card rewards.
                            </Text>
                            <Link href='https://student-app-mu.vercel.app/' textDecoration='underline'>
                                Credit Do
                            </Link>
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <VStack gap={2} alignItems='flex-start'>
                            <Text>
                                First real project. Wanted to get into a club at Vanderbilt so I did their coding challenge. Created a cursed image
                                and then wrote some ugly code that got the job done. Toggle between Taylor Swift albums and get a random
                                lyric courtesy Musixmatch API. Try to guess the song name correctly and get a high overall accuracy.
                            </Text>
                            <Link href='https://taylorswiftlyricguesser.vercel.app' textDecoration='underline'>
                                Lyric Guesser
                            </Link>
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
}

export default Projects