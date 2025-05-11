export const calculateBMI = (unit, height, weight, waist, hip, age, gender) => {
  const heightValue = parseFloat(height) / 100;
  const widthValue = parseFloat(weight);
  const waistValue = parseFloat(waist);
  const hipValue = parseFloat(hip);
  const ageValue = parseInt(age);

  switch (unit) {
    case 'BMI':
      if (isNaN(widthValue) || isNaN(heightValue)) return null;
      return widthValue / (heightValue ** 2);
    case 'BFP':
      if (isNaN(ageValue) || isNaN(waistValue)) return null;
      const bfp = (1.20 * (widthValue / (heightValue ** 2))) + (0.23 * ageValue) - 5.4 - (gender === 'male' ? 10.8 : 0);
      return bfp;
    case 'WHtR':
      if (isNaN(waistValue)) return null;
      return waistValue / heightValue;
    case 'BAI':
      if (isNaN(hipValue)) return null;
      return (hipValue / (heightValue ** 1.5)) - 18;
    case 'LBM':
      return (0.407 * widthValue) + (0.267 * heightValue * 100) - 19.2;
    default:
      return null;
  }
};

export default calculateBMI;