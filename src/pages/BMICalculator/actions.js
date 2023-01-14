const calculateBMI = (height, weight, hUnit, wUnit) => {

    if (height == 0 || weight == 0) return 0;
  
    height = (hUnit == 'inch') ? (height / 39.3701) : height;
    weight = (wUnit == 'lbs') ? (weight / 2.20462) : weight;
  
    const bmi = weight / (height ** 2)
  
    return bmi;
  
  }


  const inRange = (value, min, max) => {
    return value >= min && value < max;
  }

const findStatus = (bmi) => {
    if (inRange(bmi, 0, 16)) return { code: -1, description: 'Severe Thinness' }
    if (inRange(bmi, 16, 17)) return { code: -1, description: 'Moderate Thinness' }
    if (inRange(bmi, 17, 18.5)) return { code: -1, description: 'Mild Thinness' }
    if (inRange(bmi, 18.5, 25)) return { code: 0, description: 'Normal' }
    if (inRange(bmi, 25, 30)) return { code: -1, description: 'Overweight' }
    if (inRange(bmi, 30, 35)) return  { code: -1, description: 'Obese Class I' }
    if (inRange(bmi, 35, 40)) return { code: -1, description: 'Obese Class II' }
    if (bmi > 40) return { code: -1, description: 'Obese Class III' }
}


export {
    calculateBMI,
    findStatus,
}
