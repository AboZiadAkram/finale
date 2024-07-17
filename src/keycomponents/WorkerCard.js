/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StaffContext } from '../context/StaffContext';
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
// I tried to have this file's css in a separate file but it didn't work

const cardStyle = css`
  .card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: calc(33.33% - 20px);
    margin-right: 20px; /* Add space between cards */
    margin-bottom: 20px;
    display: inline-block; /* Ensure each card appears in line */
    vertical-align: top; /* Align cards to top */
    box-sizing: border-box; /* Include padding and border in width calculation */
  }

  .card:last-of-type {
    margin-right: 0; /* Remove margin from last card to prevent overflow */
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    margin-bottom: 10px;
    text-align: center;
  }

  .card-text {
    margin-bottom: 10px;
  }

  .card-footer {
    padding: 20px;
    background-color: #f8f9fa;
  }

  .btn {
    flex: 1;
    margin: 0 5px;
  }

  .btn:first-of-type {
    margin-left: 0;
  }

  .btn:last-of-type {
    margin-right: 0;
  }
`;

const WorkerCard = ({ member }) => {
  const { addToFavorite, removeFromFavorite, favoriteWorkers } = useContext(StaffContext);
  const isFavorite = favoriteWorkers.some((fav) => fav.email === member.email);

  return (
    <>
    <div className="card" css={cardStyle}>
      <img src={member.picture.large} className="card-img-top" alt={`${member.name.first} ${member.name.last}`} />
      <div className="card-body">
        <h5 className="card-title">{member.name.first} {member.name.last}</h5>
        <p className="card-text font-weight-bold">Age: {member.dob.age}</p>
        <p className="card-text">Location: {member.location.city}, {member.location.country}</p>
        <Link to={`/staff/${member.email}`} className="btn btn-primary">More Details</Link>
      </div>
      <div className="card-footer d-flex ">
        {isFavorite ? (
          <button onClick={() => removeFromFavorite(member.email)} className="btn btn-danger"> Unfavorite  <RiStarSLine /></button>
        ) : (
          <button onClick={() => addToFavorite(member)} className="btn btn-success"> Favorite  <RiStarSFill /></button>
        )}
      </div>
    </div>
    <div style={{ height: '20px' }}></div>
    </>
  );
};

export default WorkerCard;
