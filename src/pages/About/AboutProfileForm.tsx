import AboutFormSwitcher from "@/components/AboutFormSwitcher";

const AboutProfileForm = () => {

  return (
    <AboutFormSwitcher 
      className="font-bold text-3xl border-b-4 border-primary"
      title="About"
      container="mb-11"
      section="about"
      description={`<p className="text-justify">
        I am a fullstack developer with more than 3 years of experience mostly
        in freelancing and contract jobs. I now want to specialize as a
        frontend developer. I have passion for learning new to update myself
        professionally and I would love to work for a company that can help me
        achieve this.
      </p>`}
    />
  );
};

export default AboutProfileForm;
