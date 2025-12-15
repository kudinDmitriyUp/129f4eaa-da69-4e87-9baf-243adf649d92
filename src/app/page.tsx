"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="mediumSizeExtraLargeTitles"
      background="radialGradient"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="minimal"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Disruptive AI"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839188124-6nff7lnd.jpg"
          logoAlt="Disruptive AI Logo"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Collaborate", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="WHERE AI MEETS DISRUPTION"
          description="Israel's first AI-focused Venture Capital, bringing a unique advantage to early-stage startups. We partner with passionate and visionary entrepreneurs to create success with deep domain expertise and remarkable AI technologies."
          buttons={[
            { text: "Explore Portfolio", href: "#portfolio" },
            { text: "Get In Touch", href: "#contact" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839188973-pag1luzk.jpg"
          imageAlt="AI Innovation and Technology"
          frameStyle="browser"
          ariaLabel="Disruptive AI Hero Section"
          className="hero-section"
          descriptionClassName="text-xl leading-relaxed"
          buttonContainerClassName="flex gap-4"
          buttonClassName="px-8 py-3 font-semibold"
          logoClassName="font-black tracking-tight"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="OUR VISION"
          description="Artificial Intelligence is at the heart of next-generation innovation, and Israel is at the heart of AI. Disruptive AI is the home to the Israeli AI innovation community, shaping the universe of venture creation. We believe that early leadership in the AI community combined with years of successful entrepreneurial experience creates the foundations of disruption."
          useInvertedBackground="noInvert"
          ariaLabel="About Disruptive AI"
          className="about-section"
          tagClassName="text-orange-600 font-bold"
          descriptionClassName="text-2xl leading-relaxed font-light"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardEleven
          features={[
            {
              id: 1,
              title: "Early-Stage Focus",
              description: "We specialize in early-stage AI startups, providing capital and expertise at the most critical phase of growth when founders need mentorship and resources.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839190444-1car67j6.jpg",
              imageAlt: "Early-stage startup development"
            },
            {
              id: 2,
              title: "Deep Domain Expertise",
              description: "Our team brings years of successful entrepreneurial experience combined with deep knowledge of artificial intelligence technologies and markets.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839191479-yeh3179p.jpg",
              imageAlt: "AI technology expertise"
            },
            {
              id: 3,
              title: "Founder-Centric Support",
              description: "We provide 24/7 holistic 360-degree hands-on support to our portfolio companies, acting as true partners in their success journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839189819-7y60z9um.jpg",
              imageAlt: "Founder support and mentorship"
            }
          ]}
          animationType="opacity"
          title="Our Investment Philosophy"
          description="We gather top-notch teams to back and power early-stage AI startups with a founder-centric approach and 24/7 holistic 360-degree hands-on support."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
          tag="HOW WE WORK"
          ariaLabel="Investment Philosophy"
          containerClassName="py-16"
          cardTitleClassName="text-2xl font-bold"
          cardDescriptionClassName="text-base leading-relaxed"
        />
      </div>
      
      <div id="portfolio" data-section="portfolio">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "Ivix",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839190444-1car67j6.jpg",
              imageAlt: "Ivix - Financial Crime Intelligence"
            },
            {
              id: "2",
              name: "AI Analytics Platform",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839191479-yeh3179p.jpg",
              imageAlt: "Relationship Intelligence Technology"
            },
            {
              id: "3",
              name: "Emerging AI Startup",
              price: "Seed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839188973-pag1luzk.jpg",
              imageAlt: "Next Generation AI Technology"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          title="Portfolio Highlights"
          description="We look for passionate and visionary entrepreneurs to create success with deep domain expertise and remarkable AI technologies. Here are some of our leading investments."
          tag="COMPANIES WE BACK"
          ariaLabel="Portfolio Companies"
          containerClassName="py-16"
          cardNameClassName="text-xl font-bold text-white"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          members={[
            {
              id: "1",
              name: "Founder & Partner",
              role: "AI Strategy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839193222-txootrx2.jpg",
              imageAlt: "Team member portrait"
            },
            {
              id: "2",
              name: "Partner",
              role: "Technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839193837-r1uyvuxj.jpg",
              imageAlt: "Team member portrait"
            },
            {
              id: "3",
              name: "Partner",
              role: "Operations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839194496-1jg2fkg4.jpg",
              imageAlt: "Team member portrait"
            },
            {
              id: "4",
              name: "Venture Associate",
              role: "Investments",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839195120-ucawiy11.jpg",
              imageAlt: "Team member portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          title="The Team"
          description="Our diverse team brings together entrepreneurial experience, AI expertise, and a passion for supporting the next generation of Israeli AI innovators."
          tag="LEADERSHIP"
          ariaLabel="Team Members"
          containerClassName="py-16"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          testimonials={[
            {
              id: "1",
              name: "CEO, Ivix",
              role: "Founder",
              company: "Financial Crime Intelligence",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839195810-aicv4lht.jpg",
              imageAlt: "Founder portrait"
            },
            {
              id: "2",
              name: "CTO, Analytics AI",
              role: "Technology Leader",
              company: "Enterprise AI Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839196625-cbrkicxf.jpg",
              imageAlt: "Founder portrait"
            },
            {
              id: "3",
              name: "Founder, DataAI",
              role: "AI Researcher",
              company: "Machine Learning Platform",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839197512-6r19qa2f.jpg",
              imageAlt: "Founder portrait"
            },
            {
              id: "4",
              name: "CEO, NLP Innovations",
              role: "Serial Entrepreneur",
              company: "Natural Language Processing",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839198149-jd3bpdyy.jpg",
              imageAlt: "Founder portrait"
            },
            {
              id: "5",
              name: "Founder, Computer Vision Co",
              role: "AI Expert",
              company: "Vision Technology",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839198809-zsy3agz4.jpg",
              imageAlt: "Founder portrait"
            },
            {
              id: "6",
              name: "CTO, Startup AI",
              role: "Technical Founder",
              company: "AI Infrastructure",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839199658-huw5rl8t.jpg",
              imageAlt: "Founder portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          title="Portfolio Success Stories"
          description="Hear from our founders about their experience partnering with Disruptive AI and the impact on their AI ventures."
          tag="TESTIMONIALS"
          ariaLabel="Portfolio Company Testimonials"
          containerClassName="py-16"
        />
      </div>
      
      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839200297-k2hnv36p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839201134-kgsnorvl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839201756-drllpfot.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839202886-o6k3sdep.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839203770-7arrvn4p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839204342-crkgdp8m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765839205123-rlq6h6zg.jpg"
          ]}
          title="Trusted by Leading Organizations"
          description="Disruptive AI has earned the trust of top investors, accelerators, and partners in the global AI ecosystem."
          tag="PARTNERS & INVESTORS"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={50}
          showCard={true}
          ariaLabel="Partner Logos"
          containerClassName="py-16"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="COLLABORATE WITH US"
          title="Ready to Disrupt the AI Space?"
          description="Are you an early-stage AI founder with a vision to create the next breakthrough? Join our community of innovators. Reach out to us for investment opportunities or to learn more about our AI Universe community."
          useInvertedBackground="noInvert"
          inputPlaceholder="your@email.com"
          buttonText="Get In Touch"
          termsText="We respect your privacy. Your information will be kept confidential and used only for venture collaboration discussions."
          ariaLabel="Contact Section"
          containerClassName="py-16"
          titleClassName="text-3xl font-bold"
          descriptionClassName="text-lg leading-relaxed"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Disruptive AI"
          columns={[
            {
              items: [
                { label: "Home", href: "home" },
                { label: "Portfolio", href: "portfolio" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Team", href: "team" },
                { label: "AI Universe", href: "/" },
                { label: "News", href: "/" }
              ]
            },
            {
              items: [
                { label: "Collaborate", href: "contact" },
                { label: "Contact", href: "contact" },
                { label: "info@disruptiveai.fund", href: "mailto:info@disruptiveai.fund" }
              ]
            }
          ]}
          ariaLabel="Site footer"
          containerClassName="bg-gray-900"
          logoClassName="text-white font-bold text-2xl"
          itemClassName="text-gray-300 hover:text-orange-600"
        />
      </div>
    </ThemeProvider>
  );
}