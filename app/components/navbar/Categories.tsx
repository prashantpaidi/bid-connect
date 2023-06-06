'use client';
import Container from '../Container';
import { LuConstruction } from 'react-icons/Lu';
import { HiCurrencyRupee, HiVideoCamera } from 'react-icons/Hi';
import { IoIosFlash } from 'react-icons/io';
import { GiTruck, GiFactory, GiShoppingBag } from 'react-icons/Gi';
import {
  FaLaptopCode,
  FaBriefcase,
  FaHandHoldingMedical,
  FaGraduationCap,
  FaLandmark,
  FaHome,
  FaLeaf,
  FaHotel,
} from 'react-icons/Fa';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: 'Construction',
    icon: LuConstruction,
    description:
      'This category includes tenders related to construction projects such as building construction, infrastructure development, and civil engineering.',
  },
  {
    label: 'Information Technology',
    icon: FaLaptopCode,
    description:
      'This category includes tenders related to information technology services, software development, hardware procurement, and IT consulting.',
  },
  {
    label: 'Consulting Services',
    icon: FaBriefcase,
    description:
      'This category includes tenders for various consulting services such as management consulting, financial consulting, legal consulting, and strategic planning.',
  },
  {
    label: 'Financial Services',
    icon: HiCurrencyRupee,
    description:
      'This category includes tenders related to financial services, banking, insurance, investment, and accounting.',
  },
  {
    label: 'Healthcare',
    icon: FaHandHoldingMedical,
    description:
      'This category includes tenders related to healthcare services, medical equipment procurement, pharmaceuticals, and healthcare facility management.',
  },
  {
    label: 'Education',
    icon: FaGraduationCap,
    description:
      'This category includes tenders related to education and training services, school infrastructure projects, educational technology, and curriculum development.',
  },
  {
    label: 'Transportation',
    icon: GiTruck,
    description:
      'This category includes tenders related to transportation and logistics services, road construction, airport development, and public transportation systems.',
  },
  {
    label: 'Manufacturing',
    icon: GiFactory,
    description:
      'This category includes tenders related to manufacturing processes, industrial equipment procurement, production facilities, and manufacturing technology.',
  },
  {
    label: 'Energy and Utilities',
    icon: IoIosFlash,
    description:
      'This category includes tenders related to energy production, renewable energy projects, utility services, and energy infrastructure development.',
  },
  {
    label: 'Retail and E-commerce',
    icon: GiShoppingBag,
    description:
      'This category includes tenders related to retail and e-commerce, including online marketplace development, retail store construction, and supply chain management.',
  },
  {
    label: 'Government',
    icon: FaLandmark,
    description:
      'This category includes tenders related to government projects, public services, administrative support, and public infrastructure development.',
  },
  {
    label: 'Agriculture',
    icon: FaLeaf,
    description:
      'This category includes tenders related to agriculture, farming equipment procurement, agricultural research, and agribusiness development.',
  },
  {
    label: 'Real Estate',
    icon: FaHome,
    description:
      'This category includes tenders related to real estate development, property management, land acquisition, and construction of residential and commercial properties.',
  },
  {
    label: 'Media and Entertainment',
    icon: HiVideoCamera,
    description:
      'This category includes tenders related to media production, advertising, event management, broadcasting, and entertainment industry projects.',
  },
  {
    label: 'Hospitality and Tourism',
    icon: FaHotel,
    description:
      'This category includes tenders related to hospitality services, hotel construction, tourism promotion, and travel agency services.',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <Container>
      <div
        className='pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto'
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            // selected={false}
            // description={item.description}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
