import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProviderProps {
    showProviderData?: boolean;
}

export function Profile({showProviderData= true}: ProviderProps ){
    return(
        <Flex align="center">
               { showProviderData && (
                    <Box mr="4" textAlign="right"> 
                    <Text>Álvaro Braz</Text>
                    <Text color="gray.300" fontSize="small">alvarobraz83@gmail.com</Text>
                </Box>
               ) }

                <Avatar size="md" name="Álvaro Braz" src="https://avatars.githubusercontent.com/u/60791524?s=400&u=725be38cea0da2569dc2c253495873cad76206db&v=4"></Avatar>
        </Flex>
    )
}