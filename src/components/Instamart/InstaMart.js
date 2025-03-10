import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border block p-2 m-2">
      <h3 className="font-bold">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <h3>{description}</h3>}
    </div>
  );
};

const InstaMart = () => {
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  const [visibleSelection, setvisibleSelection] = useState("team");
  const isLoggedIn = useSelector((store) => store?.user?.isLoggedIn);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSelection === "about"}
        setIsVisible={() => setvisibleSelection("about")}
      />

      <Section
        title={"Team Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSelection === "team"}
        setIsVisible={() => setvisibleSelection("team")}
      />

      <Section
        title={"Career Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSelection === "career"}
        setIsVisible={() => setvisibleSelection("career")}
      />
    </div>
  );
};

export default InstaMart;
