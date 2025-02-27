import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="my.jpg" alt="gayasri pethum" />;
}

function Intro() {
  return (
    <div>
      <h1>Gayasri Pethum</h1>
      <p> Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
       <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div >
  );
}

function Skill(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
