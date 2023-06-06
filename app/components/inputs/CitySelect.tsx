'use client';

import useIndianCities from '@/app/hooks/useLocation';
import Select from 'react-select';

export type CitySelectValue = {
  value: string;
  label: string;
};

interface CitySelectProps {
  value?: CitySelectValue;
  onChange: (value: CitySelectValue) => void;
}

const CitySelect: React.FC<CitySelectProps> = (value, onChange) => {
  const { getAll } = useIndianCities();
  for (let i = 0; i < getAll().length; i++) {
    console.log(getAll()[i].value);
  }
  return (
    <Select
      placeholder='anywhere'
      isClearable
      options={getAll()}
      onChange={(value) => onChange(value as CitySelectValue)}
      formatOptionLabel={(option: any) => (
        <div
          className='
      flex flex-row items-center gap-3'
        >
          <div>
            <span className='font-bold'>{option.label},</span>
            <span className='text-neutral-500 ml-1'>{option.state}</span>
          </div>
        </div>
      )}
      classNames={{
        control: () => 'p-3 border-2',
        input: () => 'text-lg',
        option: () => 'text-lg',
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'black',
          primary25: '#ffe4e6',
        },
      })}
    />
  );
};

export default CitySelect;
