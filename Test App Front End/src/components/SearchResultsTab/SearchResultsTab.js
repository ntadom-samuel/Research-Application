import { useEffect, useState } from "react";
import styles from "./SearchResultsTab.module.css";
let professor_profiles = [
  {
    name: "Samuel Ntadom",
    degrees: [
      "Bachelor of Computer Science, Calvin University",
      "Masters in Computer Science",
    ], //an array of strings
    image: "person.jpg",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Doe",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },

  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
  {
    name: "John Does",
    degrees: ["Bachelor of Computer Science, Calvin University"],
    image: "",
    researchInterests: ["AI", "Math", "Physics"],
    description: "I love Computer Science",
    myProfessors: null,
  },
];

function SearchResultsTab() {
  //States
  const [searchResult, setSearchResult] = useState("");

  //Effects

  //Event handlers

  return (
    <div>
      <input
        className={styles.searchBar}
        value={searchResult}
        onChange={(e) => {
          e.preventDefault();
          setSearchResult((result) => (result = e.target.value));
        }}
      />
      <ul className={styles.professorList}>
        {professor_profiles.map((obj, i, _) => (
          <li key={i}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsTab;
