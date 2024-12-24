import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-tutorials?email=${user?.email}`)
      .then((response) => {
        setMyTutorials(response.data);
      });
  }, []);
  return (
    <div>
      <h1>My tutorials here. {myTutorials.length}</h1>
    </div>
  );
};

export default MyTutorials;
