import AboutFormSwitcher from "@/components/AboutFormSwitcher";

const FunFact = () => {
  return (
    <div className="">
      <AboutFormSwitcher
        className="font-semibold text-2xl mb-2"
        title="Fun fact about me"
        section="about"
        description={`<p>
          I enjoy working out, playing video games, listening to music, watching movies especially comedy. 
          I like reading, listening and watching self-improvement programs. I also like to cook in my free time.
        </p>`}
      />
    </div>
  );
};

export default FunFact;
