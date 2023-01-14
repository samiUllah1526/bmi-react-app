import { useToast } from '@chakra-ui/react'

export const useNotification = ({ status, title, description }) => {
    const toast = useToast();

    return () => toast({
        title,
        description,
        status,
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      })
  }
