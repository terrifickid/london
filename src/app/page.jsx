import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { Testimonial } from "@/components/Testimonial";
import logoBrightPath from "@/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "@/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "@/images/clients/green-life/logo-light.svg";
import logoHomeWork from "@/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "@/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "@/images/clients/north-adventures/logo-light.svg";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import logoPhobiaLight from "@/images/clients/phobia/logo-light.svg";
import logoUnseal from "@/images/clients/unseal/logo-light.svg";
import imageLaptop from "@/images/laptop.jpg";
import { loadCaseStudies } from "@/lib/mdx";

const clients = [
  ["Phobia", logoPhobiaLight],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Introducing Actia Advisors"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          With Actia Advisors as a part of your advisory board, you'll gain
          access to a wide range of expert advice. Actia Advisors has an
          established track record of successfully building some of the world's
          most prosperous tech companies.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split("-")[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="The Ultimate Web Start Up Advisor"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Embark on a transformative journey with Actia Advisors, where
          innovation meets strategy. Elevate your business with our
          expert-guided services
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Strategic Planning and Execution">
              At Actia Advisors, we specialize in crafting and executing
              strategic plans tailored to your organization's unique goals. Our
              seasoned advisors work closely with your team to identify growth
              opportunities, navigate challenges, and implement strategies that
              drive success. With a proven track record in strategic planning,
              we ensure your business is equipped to thrive in a dynamic and
              competitive landscape.
            </ListItem>
            <ListItem title="Technology Innovation Consulting">
              Stay at the forefront of technological advancements with Actia
              Advisors. Our expert consultants guide you through the rapidly
              evolving tech landscape, helping you harness the latest
              innovations to enhance efficiency and drive innovation within your
              organization. From adopting cutting-edge solutions to fostering a
              culture of continuous innovation, we empower you to lead in the
              digital age.
            </ListItem>
            <ListItem title="Leadership Development Programs">
              Unlock the full potential of your leadership team with Actia
              Advisors' tailored leadership development programs. Our
              experienced advisors provide personalized coaching, training, and
              mentorship to cultivate strong, adaptive leaders. By honing
              leadership skills, fostering collaboration, and promoting
              strategic thinking, we empower your executives to navigate
              challenges and drive organizational excellence.
            </ListItem>
            <ListItem title="Investor Relations and Funding Strategies">
              Navigate the complexities of fundraising and investor relations
              with confidence. Actia Advisors brings a wealth of experience in
              securing investments for tech companies. Our team assists you in
              developing compelling investment narratives, refining pitch decks,
              and connecting with the right investors. From seed funding to
              Series rounds, we guide you through the entire fundraising
              journey.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3);

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display font-medium text-5xl tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Accelerating innovation for startups, investors, and fund managers.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Our primary aim is to package and curate data on startups and
            opportunities within the community to members. This enables a
            stronger, more connected network that increases the capacity of
            founders and companies in the ecosystem.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Aristole", logo: logoPhobiaDark }}
      >
        A person s potential is greater than what it IS, and that potential is
        only unlocked when he or she interacts with another person
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  );
}
