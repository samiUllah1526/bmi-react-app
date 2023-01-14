import React, { useState } from 'react'
import { calculateBMI, findStatus } from './actions'
import { useNotification } from '../../hooks';
import { ResultBoard } from './resultBoard';
import {
  Select,
  Button,
  HStack,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Card,
  Divider,

} from '@chakra-ui/react'




const BMICalculator = () => {
  const [weight, setWheight] = useState(0)
  const [height, setHeight] = useState(0)
  const [weightUnit, setWheightUnit] = useState('lbs')
  const [heightUnit, setHeightUnit] = useState('inch')
  const [result, setResult] = useState(0)
  const [status, setStatus] = useState({ code: '', description: '' })


  const success = useNotification({ status: 'success', title: 'Well done!', description: "Your BMI is perfect" })
  const error = useNotification({ status: 'error', title: 'Oops!', description: "You should take care of your health!" })
  const info = useNotification({ status: 'info', title: 'Oops!', description: "Seems you forget to enter values!" })


  let color = status.code < 0 ? 'red' : 'green';


  const calculate = (e) => {
    e.preventDefault()
    if (height == 0 || weight == 0) return info();


    const value = calculateBMI(height, weight, heightUnit, weightUnit)
    setResult(value)

    const status = findStatus(value)
    setStatus(status)

    status.code == -1 && error()
    status.code == 0 && success()
  }


  const reset = (e) => {
    e.preventDefault()

    setResult(0)
    setWheight(0)
    setHeight(0)
    setHeightUnit('inch')
    setWheightUnit('lbs')
  }



  return (
    <>
      <Heading m={5}>BMI Calculator</Heading>

      <Card p='5'>
        <VStack spacing={5} align='stretch'>
          <HStack align='end'>
            <FormControl >
              <FormLabel fontSize='sm'>Enter you weight</FormLabel>
              <Input name='weight' type='number' value={weight} onChange={(e) => setWheight(e.target.value)} />
            </FormControl>
            <Select placeholder='Select unit' value={weightUnit} onChange={(e) => setWheightUnit(e.target.value)}>
              <option value='lbs'>Ponds</option>
              <option value='kg'>Kilograms</option>
            </Select>
          </HStack>

          <HStack align='end'>
            <FormControl >
              <FormLabel fontSize='sm'>Enter you height</FormLabel>
              <Input name='height' type='number' value={height} onChange={(e) => setHeight(e.target.value)} />
            </FormControl>
            <Select placeholder='Select unit' value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
              <option value='inch'>Inches</option>
              <option value='meter'>Meters</option>
            </Select>
          </HStack>

          <VStack spacing={2} align='stretch'>
            <Button colorScheme='teal' size='md' onClick={calculate}>Calculate</Button>
            <Button colorScheme='teal' size='md' variant='outline' onClick={reset}>Reset</Button>
          </VStack>
        </VStack>
      </Card>

      {!!result && <Divider mt={5} mb={5} />}
      {!!result && <ResultBoard result={result} description={status.description} color={color} />}
    </>
  )
}

export default BMICalculator;