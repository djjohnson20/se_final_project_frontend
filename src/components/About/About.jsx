import "./About.css";

import Me from "../../assets/me.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img src={Me} alt="picture of author" className="about__image" />
      </div>
      <div className="about__description">
        <h1 className="about__title">About the author</h1>
        <p className="about__text">
          Hello, my name is Donald Johnson. I am a Software Engineering student
          at TripleTen. The development technologies that I know are HTML5, CSS,
          JavaScript, BEM, Git, GitHub, Responsive Design, Figma, OOP, npm,
          Node.js, MongoDB, RESTful APIs, React, Google Cloud Deployment.
        </p>
        <p className="about__text">
          My experience at TripleTen has been amazing! They have been the best
          coding camp that I have found online. The success coaches are very
          supportive and helped me with any need I encountered during my
          studies. The tutors have been very helpful in the times where I need
          more help with problem-solving issues I encountered with my projects.
          Overall, I have had a great experience with TripleTen.
        </p>
        <p className="about__text">
          I have learned a lot while at TripleTen that can help me when it comes
          to potential customers. I have learned how to expand my critical
          thinking when it comes to projects that will help with issues that
          come about with future projects. Working with Figma designs will help
          me to be able to interpret customers' needs into fully functional code
          to create what they are looking for.
        </p>
      </div>
    </div>
  );
}

export default About;
