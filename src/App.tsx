import { useEffect, useState } from "react";
const reviews = [
  {
    name: "Phong",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

function App() {
  const [count, setCount] = useState(0);

  //const obj: {} = {}
  const user: {
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
    school: string[];
    score: (number | string)[];
  } = {
    firstName: "Ngo",
    lastName: "Trong",
    age: 21,
    isStudent: true,
    school: ["Phenikaa", "PKA", "PU"],
    score: [10, 9, 8, "high"],
  };

  function displayReview(totalReviews: number, name: string, premium: boolean) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by
        <strong>{name}</strong> {premium ? "⭐️ " : ""}
      </>
    );
  }
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[1].premiumUser
          )}
          {user.age}
        </div>
      </div>
    </div>
  );
}
export default App;
