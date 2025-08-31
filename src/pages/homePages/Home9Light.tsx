import HeaderV1 from '../../components/header/HeaderV1';
import BannerV1 from '../../components/banner/BannerV1';
import BrandV1 from '../../components/brand/BrandV1';
import AboutV1 from '../../components/about/AboutV1';
import ProjectV2Light from '../../components/project/ProjectV2Light';
import PriceV2 from '../../components/price/PriceV2';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import TeamV3 from '../../components/team/TeamV3';
import BlogV2 from '../../components/blog/BlogV2';
import FooterV3 from '../../components/footer/FooterV3';
import { Helmet } from 'react-helmet-async';
import ThemeLight from '../../components/switcher/ThemeLight';
import MultiSection from '../../components/multi/MultiSection';
import ServicesV1 from '../../components/services/ServicesV1';

const Home9Light = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 9 Light</title>
            </Helmet>

            <HeaderV1 />
            <BannerV1 />
            <BrandV1 />
            <AboutV1 lightMode={true} />
            <ServicesV1 sectionClass='default-padding bg-gray' hasTitle={true} />
            <ProjectV2Light />
            <PriceV2 />
            <TestimonialV1 />
            <TeamV3 sectionClass='bg-dark' hasTitle={true} />
            <MultiSection />
            <BlogV2 sectionClass='bg-gray' />
            <FooterV3 />
            <ThemeLight />
        </>
    );
};

export default Home9Light;