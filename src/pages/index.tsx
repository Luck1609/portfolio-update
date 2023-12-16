import Home from './Home'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Projects from './Projects'

export default function Page() {
  return (
    <div className="lg:col-span-10">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
