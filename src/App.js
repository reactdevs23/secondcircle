import MainComponent from "./components/MainComponent/MainComponent";
import styles from "./App.module.css";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const userExperience = {
    title: "Mental <br /> Health Mental <br /> Health",
    fontFamily: "'Inter', sans-serif",

    feature1: {
      text: "Respect Yourself <br/> Respect Yourself",
      color: "#EDC999",
    },
    feature2: {
      text: "Manage Stress Manage Stress",
      color: "#F3A851",
    },
    feature3: {
      text: "Stay Positive Stay Positive",
      color: "#CD906E",
    },
  };
  return (
    <div className={styles.wrapper}>
      <MainComponent {...userExperience} />
    </div>
  );
}

export default App;
