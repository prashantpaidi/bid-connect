const citiesInIndia = [
  { value: 'Mumbai', label: 'Mumbai', state: 'Maharashtra' },
  { value: 'Delhi', label: 'Delhi', state: 'Delhi' },
  { value: 'Bengaluru', label: 'Bengaluru', state: 'Karnataka' },
  { value: 'Hyderabad', label: 'Hyderabad', state: 'Telangana' },
  { value: 'Chennai', label: 'Chennai', state: 'Tamil Nadu' },
  { value: 'Kolkata', label: 'Kolkata', state: 'West Bengal' },
  { value: 'Jaipur', label: 'Jaipur', state: 'Rajasthan' },
  { value: 'Ahmedabad', label: 'Ahmedabad', state: 'Gujarat' },
  { value: 'Lucknow', label: 'Lucknow', state: 'Uttar Pradesh' },
  { value: 'Pune', label: 'Pune', state: 'Maharashtra' },
  { value: 'Chandigarh', label: 'Chandigarh', state: 'Chandigarh' },
  { value: 'Coimbatore', label: 'Coimbatore', state: 'Tamil Nadu' },
  { value: 'Indore', label: 'Indore', state: 'Madhya Pradesh' },
  { value: 'Agra', label: 'Agra', state: 'Uttar Pradesh' },
  { value: 'Kochi', label: 'Kochi', state: 'Kerala' },
  // Add more cities and states as needed
];

const useIndianCities = () => {
  const getAll = () => citiesInIndia;

  const getByValue = (value: string) => {
    return citiesInIndia.find((item) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useIndianCities;
