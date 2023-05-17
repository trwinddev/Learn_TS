import { useEffect, useState } from "react";
import { Permission } from "./utils/enums";
import { Age } from "./utils/types";
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

// Permission
// const ADMIN = "ADMIN";
// const EDITOR = "EDITOR";
// const MODERATOR = "MODERATOR";

function App() {
  const [count, setCount] = useState(0);

  //const obj: {} = {}
  const user: {
    firstName: string;
    lastName: string;
    age: Age;
    isStudent: boolean;
    school: string[];
    score: (number | string)[];
    contact: [number, string];
    permission: Permission;
  } = {
    firstName: "Ngo",
    lastName: "Trong",
    age: "30",
    isStudent: true,
    school: ["Phenikaa", "PKA", "PU"],
    score: [10, 9, 8, "high"],
    contact: [123456789, "phong@gmail.com"],
    permission: Permission.ADMIN,
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
