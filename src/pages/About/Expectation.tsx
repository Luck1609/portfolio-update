import AboutFormSwitcher from "@/components/AboutFormSwitcher";

const Expectation = () => {

  return (
    <div className="">
      <AboutFormSwitcher 
        className="font-semibold text-2xl mb-2"
        title="What I am looking for"
        section="about"
        description={`<p>
          I am looking for a frontend developer role with much focus on react,
          but I am open to learning any framework or language that get the job
          done. I get bored when I stay on a single project for long, so I am
          hoping to work with a company with dynamic projects. I am also open
          to explore backend opportunities. I prefer a company that is less
          formal.
        </p>`}
      />
    </div>
  );
};

export default Expectation;
