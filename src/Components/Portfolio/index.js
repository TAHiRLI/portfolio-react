import React from 'react';
import Skills from '../Skills';
import Projects from '../Projects';
import Greeting from '../Greeting';
import Contact from '../Contact/indes';


function Portfolio() {
  return (
    <section className='p-0'>
    <Greeting/>

    <section>
      <Skills/>
    </section>
    <section>
      <Projects/>
    </section>
    <section>
    <Contact/>

    </section>
    </section>
  );
}

export default Portfolio;