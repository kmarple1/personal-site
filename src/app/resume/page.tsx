import { ReactNode } from "react";
import Image from "next/image";
import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/20/solid";
import KMHeadshot from "../images/km-headshot.jpg";
import LinkedIn from "../images/linked-in.svg";
import GitHubIcon from "../images/github-mark.svg";

const InnerList = ({ children }: { children: ReactNode }) => <ul className="my-0.5">{children}</ul>;
const InnerListItem = ({ children }: { children: ReactNode }) => <li className="my-0.5">{children}</li>;
const InnerHeading = ({ children }: { children: ReactNode }) => <h4 className="mb-0.5">{children}</h4>;
const InnerLineItem = ({ children }: { children: ReactNode }) => <p className="my-0.5">{children}</p>;

const Resume = () => {
  return (
    <article className="prose">
      <h1>My Resume</h1>
      <section>
        <Image alt="photo of Kyle Marple" className="ml-4 lg:float-right" src={KMHeadshot} height="180" width="180" />
        <h2>Kyle Marple</h2>
        <a className="align-center link-hover link mb-4 flex" href="mailto:kmarple1@hotmail.com">
          <EnvelopeOpenIcon className="mr-6 size-6" /> kmarple1@hotmail.com
        </a>
        <a className="align-center link-hover link mb-4 flex" href="tel:9729554039">
          <PhoneIcon className="mr-6 size-6" /> 972-955-4039
        </a>
        <a className="align-center link-hover link mb-4 flex" href="https://linkedin.com/in/kylemarple" target="_blank">
          <LinkedIn className="mr-6 size-6" /> linkedin.com/in/kylemarple
        </a>
        <a className="align-center link-hover link mb-4 flex" href="https://github.com/kmarple1" target="_blank">
          <GitHubIcon className="link-hover link mr-6 size-6" /> github.com/kmarple1
        </a>
      </section>

      <section>
        <h3>Summary</h3>
        <p>
          At Walmart Global Tech, my tenure was marked by spearheading the development of My Assistant, a GenAI-powered
          virtual assistant revolutionizing associate workflows. My technical leadership saw the successful
          international deployment of this tool, creating tangible efficiencies with an estimated 22.5k hours saved
          since its launch.
        </p>
        <p>
          My expertise in React.js (7 years) and React Native (3 years) was crucial in driving forward our web
          application initiatives. My approach is rooted in architecting scalable solutions that not only enhance user
          engagement but also embody innovation, culminating in receiving the FY24 Tech Forward Award for outstanding
          contributions to our technology landscape.
        </p>
      </section>

      <section>
        <h3>Experience</h3>
        <ul className="list-none">
          <li>
            <InnerHeading>Staff Software Engineer</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>May 2024 - August 2024 (4 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Technical lead and architect for My Assistant, Walmart&apos;s GenAI-powered virtual assistant.
              </InnerListItem>
              <InnerListItem>Available to over 75k US and international associates across 10 countries.</InnerListItem>
              <InnerListItem>Estimated 22.5k hours saved since launch in August 2023.</InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Senior Software Engineer</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>Oct 2022 - May 2024 (1 year 8 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>Lead frontend developer for My Assistant.</InnerListItem>
              <InnerListItem>
                Oversaw the international rollout of My Assistant to 10 countries, including the United States, Canada,
                Mexico and South Africa.
              </InnerListItem>
              <InnerListItem>
                Oversaw rollout of My Assistant to Sam&apos;s Club associates in Q1 of FY25.
              </InnerListItem>
              <InnerListItem>Received FY24 Tech Forward Award from Walmart CTO.</InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Software Engineer III</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>Jan 2020 - Oct 2022 (2 years 10 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Overhauled and expanded the React-based chatbot that would eventually become My Assistant,
                Walmart&apos;s in-house GenAI tool.
              </InnerListItem>
              <InnerListItem>
                Developed and enforced coding standards, linting and automated testing to ensure code quality.
              </InnerListItem>
              <InnerListItem>Built mobile version of the chatbot using TypeScript and React Native.</InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Software Engineer II</InnerHeading>
            <InnerLineItem>Walmart Global Tech</InnerLineItem>
            <InnerLineItem>Sep 2017 - Jan 2020 (2 years 5 months)</InnerLineItem>
            <InnerList>
              <InnerListItem>
                Worked on a number of JavaScript-based software development projects using Node.js and React.
              </InnerListItem>
            </InnerList>
          </li>
          <li>
            <InnerHeading>Research Associate</InnerHeading>
            <InnerLineItem>The University of Texas at Dallas</InnerLineItem>
            <InnerLineItem>Sep 2014 - Aug 2017 (3 years)</InnerLineItem>
            <InnerList>
              <InnerListItem>Research and development related to Datalog Answer Set Programming.</InnerListItem>
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
