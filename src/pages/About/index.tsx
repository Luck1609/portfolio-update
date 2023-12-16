import AboutProfileForm from './AboutProfileForm';
import Expectation from './Expectation';
import FunFact from './FunFact';
import Skills from './Skills';

export default function About() {
  return (
    <div className="container py-16">

      <div className="space-y-5">
        <AboutProfileForm />

        <div className="grid lg:grid-cols-7 gap-8">
          <div className="lg:col-span-3 bg-about bg-cover overlay relative rounded flip"></div>
          <div className="lg:col-span-4 space-y-10">
            <Expectation />
            
            <FunFact />
            
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
