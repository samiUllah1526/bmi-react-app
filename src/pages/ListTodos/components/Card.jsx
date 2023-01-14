import React from 'react'
import { Flex, Spacer, Checkbox, Text, Heading, Box, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'



const CustomCard = ({ id, title, completed }) => {
    return (
        <Card mt='5'>
            <CardBody>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                        User ID {id}
                    </Heading>
                    <Flex>
                        <Text mr='3' fontSize='sm'>
                            {title}
                        </Text>
                        <Spacer />
                        <Checkbox isChecked={completed}>Completed</Checkbox>
                    </Flex>
                </Box>
            </CardBody>
        </Card>
    )
}

export default CustomCard;