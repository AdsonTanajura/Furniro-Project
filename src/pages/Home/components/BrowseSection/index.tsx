import HomeSectionHeader from '../HomeSectionHeader';
import {
  Section,
  BrowseCardList,
  BrowseCard,
  BrowseCardDescription,
} from './styles';

import { useNavigate } from 'react-router-dom';
const BrowseSection = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <HomeSectionHeader
        title="Browse The Range"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <BrowseCardList>
        <BrowseCard onClick={() => navigate('/home/shop?category=dining')}>
          <img
            src="https://res.cloudinary.com/dth7akzlq/image/upload/v1741821697/image_106_bvdmxk.png"
            alt=""
          />
          <BrowseCardDescription>Dining</BrowseCardDescription>
        </BrowseCard>
        <BrowseCard onClick={() => navigate('/home/shop?category=living')}>
          <img
            src="https://res.cloudinary.com/dth7akzlq/image/upload/v1741821697/image_100_xk7ekp.png"
            alt=""
          />
          <BrowseCardDescription>Living</BrowseCardDescription>
        </BrowseCard>
        <BrowseCard onClick={() => navigate('/home/shop?category=bedroom')}>
          <img
            src="https://res.cloudinary.com/dth7akzlq/image/upload/v1741821697/image_101_vogt9m.png"
            alt=""
          />
          <BrowseCardDescription>Bedroom</BrowseCardDescription>
        </BrowseCard>
      </BrowseCardList>
    </Section>
  );
};

export default BrowseSection;
