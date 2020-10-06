import React from "react";  

const Home = () => {  
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <center><div className="image-cropper"><img src="http://austingarrett.mit.edu/wp-content/uploads/2019/07/austin-298x300.jpg" alt="" width="400" height="400" className="alignnone size-medium wp-image-34"/></div></center>
          <h1 className="uk-text-center uk-heading-small">Austin Garrett</h1>
          <hr className="uk-divider-icon" />
          <p>I am a Master&#8217;s student in electrical engineering and computer science at MIT, working with <a href="http://probcomp.csail.mit.edu/principal-investigator/">Vikash Mansinghka</a> in the <a href="http://probcomp.csail.mit.edu/">MIT Probabilistic Computing Project</a>. During my undergraduate in Computer Science and Physics at MIT, I was a part of the <a href="http://cocosci.mit.edu/">Computational Cognitive Science Group</a> under <a href="https://web.mit.edu/cocosci/josh.html">Joshua Tenenbaum</a>, where I researched deep neural network techniques for program induction and physical intuition. I also worked for the self-driving car startup <a href="https://www.isee.ai/">ISEE</a>, where I developed deep neural networks for object detection on 3D point cloud data.</p>
          <p>If you&#8217;re interested in reading about artificial intelligence, complex systems, general science, or philosophy, check out my blog, <a href="blog">αβγ</a>. Alternatively, my <a href="http://localhost:1337/uploads/d537a73e570f46aaa06f1c1362cfb7ad.pdf">CV</a> is publicly available, along with ways to <a href="contact">contact me</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;  
