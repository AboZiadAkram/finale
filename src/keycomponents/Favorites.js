import React, { useContext } from "react";
import { StaffContext } from "../context/StaffContext";
import WorkerCard from "./WorkerCard";

const Favorites = () => {
  const { favoriteWorkers } = useContext(StaffContext);

  return (
    <div>
      {favoriteWorkers.map((member) => (
        <WorkerCard key={member.email} member={member} />
      ))}
    </div>
  );
};

export default Favorites;
