import { ReactNode } from "react";
import Image from "next/image";

import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/20/solid";

import Github from "../../public/images/github-mark.svg";
import LinkedIn from "../../public/images/linked-in.svg";

const InnerList = ({ children }: { children: ReactNode }) => <ul className="my-0.5">{children}</ul>;
const InnerListItem = ({ children }: { children: ReactNode }) => <li className="my-0.5">{children}</li>;
const InnerHeading = ({ children }: { children: ReactNode }) => <h4 className="mb-0.5">{children}</h4>;
const InnerLineItem = ({ children }: { children: ReactNode }) => <p className="my-0.5">{children}</p>;

const Resume = () => {
  return (
    <article className="prose">
      <h1>My Resume</h1>
      <section>
        <Image
          alt="photo of Kyle Marple"
          className="my-0 ml-4 lg:float-right"
          src={"/images/km-headshot.jpg"}
          height="216"
          width="216"
        />
        <h2>Kyle Marple</h2>
        <a className="align-center link-hover link mb-4 flex" href="mailto:kmarple1@hotmail.com">
          <EnvelopeOpenIcon className="mr-6 size-6" /> kmarple1@hotmail.com
        </a>
        <a className="align-center link-hover link mb-4 flex" href="tel:9729554039">
          <PhoneIcon className="mr-6 size-6" /> 972-955-4039
        </a>
        <a className="align-center link-hover link mb-4 flex" href="https://linkedin.com/in/kylemarple" target="_blank">
          <LinkedIn className="link-hover link my-0 mr-6 size-6 bg-base-100" />
          linkedin.com/in/kylemarple
        </a>
        <a className="align-center link-hover link mb-4 flex" href="https://github.com/kmarple1" target="_blank">
          <Github className="link-hover link my-0 mr-6 size-6 bg-base-100" />
          github.com/kmarple1
        </a>
      </section>

      <section>
        <h3>Summary</h3>
        <p>
          Lead/Staff Frontend Software Engineer with strong expertise in React.js and React Native, driving web
          application initiatives at Walmart Global Tech and Fortitude Systems. Spearheaded the development of My
          Assistant, a GenAI-powered virtual assistant, enhancing workflows and saving significant hours. Recognized for
          architecting scalable solutions that boost user engagement and innovation.
        </p>
      </section>

      <section>
        <h3>Experience</h3>
        <ul className="list-none">
          <li>
            <InnerHeading>Lead Software Engineer (Frontend)</InnerHeading>
            <InnerLineItem>Fortitude Systems - Contract</InnerLineItem>
            <InnerLineItem>December 2024 - Present</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Led initiatives to address technical debt, enhancing code quality and maintainability, resulting in more
                efficient development cycles
              </InnerListItem>
              <InnerListItem>
                Implemented automated linting and testing processes for pull requests using CI/CD pipelines, which
                improved code quality and reduced manual review time
              </InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Staff Software Engineer</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>May 2024 - August 2024 (4 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Led and architected the development of My Assistant, Walmart&apos;s GenAI-powered virtual assistant,
                using React.js, React Native and TypeScript
              </InnerListItem>
              <InnerListItem>
                Expanded the availability of My Assistant to over 75k US and international associates across 10
                countries, improving accessibility and support
              </InnerListItem>
              <InnerListItem>
                An estimated 22.5k hours were saved in the first year by streamlining processes and enhancing virtual
                assistant capabilities
              </InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Senior Software Engineer</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>Oct 2022 - May 2024 (1 year 8 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Led the frontend development for My Assistant using React.js, React Native and TypeScript, enhancing
                user experience and interface design
              </InnerListItem>
              <InnerListItem>
                Oversaw the international rollout of My Assistant to 10 countries, including the United States, Canada,
                Mexico and South Africa
              </InnerListItem>
              <InnerListItem>Oversaw rollout of My Assistant to Sam&apos;s Club associates in Q1 of FY25</InnerListItem>
              <InnerListItem>
                Received the FY24 Tech Forward Award from Walmart CTO for leading the My Assistant project that
                significantly enhanced user productivity
              </InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Software Engineer III</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>Jan 2020 - Oct 2022 (2 years 10 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Overhauled and expanded a React-based chatbot that would become My Assistant, enhancing user interaction
                and support
              </InnerListItem>
              <InnerListItem>
                Developed and enforced coding standards, linting and automated testing to ensure code quality
              </InnerListItem>
              <InnerListItem>
                Built the mobile version of the chatbot using TypeScript and React Native, enhancing accessibility and
                user engagement on mobile platforms
              </InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Software Engineer II</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>Sep 2017 - Jan 2020 (2 years 5 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Developed JavaScript-based software projects using Node.js and React, enhancing application performance
                and user experience
              </InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Research Associate</InnerHeading>
            <InnerLineItem>The University of Texas at Dallas</InnerLineItem>
            <InnerLineItem>Sep 2014 - Aug 2017 (3 years)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Conducted research and development on Datalog Answer Set Programming, resulting in the creation of
                s(ASP), the first system to support ungrounded answer set programs, which improved the expressiveness
                and complexity of programs that could be developed
              </InnerListItem>
            </InnerList>
          </li>
        </ul>
      </section>

      <section>
        <h3>Education</h3>
        <ul className="list-none">
          <li>
            <InnerHeading>The University of Texas at Dallas</InnerHeading>
            <InnerLineItem>Doctor of Philosophy (PhD), Computer Science</InnerLineItem>
            <InnerLineItem>2008 - 2014</InnerLineItem>
            <InnerLineItem>My dissertation is titled &quot;Goal-Directed Answer Set Programming&quot;.</InnerLineItem>
          </li>
          <li>
            <InnerHeading>The University of Texas at Dallas</InnerHeading>
            <InnerLineItem>Master of Science (MS), Computer Science</InnerLineItem>
            <InnerLineItem>2008 - 2009</InnerLineItem>
            <InnerLineItem>My dissertation is titled &quot;Goal-Directed Answer Set Programming&quot;.</InnerLineItem>
          </li>
          <li>
            <InnerHeading>Cameron University</InnerHeading>
            <InnerLineItem>Bachelor of Science (BS), Computer Science</InnerLineItem>
            <InnerLineItem>2004 - 2007</InnerLineItem>
            <InnerLineItem>Graduated with a minor in mathematics.</InnerLineItem>
          </li>
        </ul>
      </section>

      <section>
        <h3>Honors &amp; Awards</h3>
        <ul className="list-none">
          <li>
            <InnerHeading>FY24 Tech Forward Award</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>November 2023</InnerLineItem>
            <InnerLineItem>
              Awarded by Walmart CTO for work on My Assistant, Walmart&apos;s GenAI-powered virtual assistant.
            </InnerLineItem>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
