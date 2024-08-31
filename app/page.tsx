import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="hero mx-auto mb-6 h-fit w-fit justify-self-center bg-base-200">
        <div className="hero-content text-center">
          <div className="prose max-w-md">
            <h1>Hello!</h1>
            <p>
              Welcome to my personal playground and portfolio. I will be using this site both to keep my skills sharp
              and to show off the technologies that I am proficient with. Please keep in mind that I am not a UX
              designer, so this is mainly a tech demo.
            </p>
          </div>
        </div>
      </div>
      <article>
        <section className="prose max-w-prose pb-8">
          <h2>About Me</h2>
          <p>
            <Image
              alt="photo of Kyle Marple"
              className="float-right my-0 ml-4"
              src="/images/km-headshot.jpg"
              height="256"
              width="256"
            />
            My name is Kyle Marple, and until recently I was a staff software engineer at Walmart Global Tech. I am
            currently looking for a new role as either a senior or staff frontend software engineer. At this time, I am
            considering only fully remote, full-time positions. Please do not contact me regarding part-time, contract
            or hybrid positions.
          </p>
          <p>
            I have 7 years of experience with React and JavaScript in general, as well as 3 years with TypeScript and
            React Native. I also have extensive experience developing frontends for conversational GenAI tools and
            chatbots, having served as the frontend tech lead for My Assistant, Walmart&apos;s internal GenAI tool for
            employees.
          </p>
          <p>
            I enjoy bringing order to chaos. Messy code? Inconsistent styles? Non-existant unit tests? Other forms of
            tech debt? These are my bread and butter. I have personally brought linting and unit testing to most of the
            projects I have been part of, establishing standards for code quality and testing, then enforcing and
            maintaining them with tools like Husky and github branch policies.
          </p>
          <p>
            In addition to coding, I also have a great deal of experience leading and mentoring other developers. I have
            given multiple workshops on frontend development and related technologies. I am also accustomed to working
            closely with leadership, product, UX and business to develop, clarify and refine requirements, allowing us
            to deliver what the customer wants, on-time and with minimal surprises.
          </p>
        </section>
        <section className="prose max-w-prose pb-8">
          <h2>About this Site</h2>
          <p>
            This site is a React app being deployed to Github Pages. The full source code is available in its git
            repository, accessible by clicking the Github icon in the right side of the header. Among other things, this
            site has been designed mobile-first and is fully responsive and screen-reader accessible. Feel free to try
            it in a variety of different sizes. It also has full support for light- and dark-mode themes, which can be
            switched from the header. The major packages and frameworks used are listed below:
          </p>
          <p>Core</p>
          <ul>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Yarn</li>
          </ul>
          <p>UI</p>
          <ul>
            <li>DaisyUI</li>
            <li>Tailwind CSS</li>
          </ul>
          <p>Code Quality and Testing</p>
          <ul>
            <li>ESlint</li>
            <li>Husky</li>
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>Stylelint</li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Home;
