import React, { useContext } from "react";
import { StaffContext } from "../context/StaffContext";
import WorkerCard from "./WorkerCard";

const WorkersList = () => {
  const { workers } = useContext(StaffContext);

  return (
    <div>
      {workers.map((member) => (
        <WorkerCard key={member.email} member={member} />
      ))}
    </div>
  );
};

export default WorkersList;
