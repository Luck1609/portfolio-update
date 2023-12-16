import AboutFormSwitcher from "@/components/AboutFormSwitcher";

export default function ProjectProfiler() {
  return (
    <AboutFormSwitcher
      title="Projects"
      section="projects"
      container="mb-11"
      className="font-bold text-3xl border-b-4 inline-block border-primary"
      description={`<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolore
        ad voluptas praesentium aliquid fuga doloribus itaque veniam. Animi eos
        libero praesentium ab quod, veritatis rerum sunt dolor odio quisquam.
      </p>`}
    />
  );
}
