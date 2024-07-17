/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StaffContext } from '../context/StaffContext';
import { MapContainer,  Marker , TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/WorkerDetailsStyle.css';
// לצערי ניסיתי מואד לתקן את התקלה של מאפקונטאינר אבל לא עובד לי בכלל ולא יודעת מה לעשות

const WorkerDetails = () => {
  const { email } = useParams();
  const { workers, addToFavorite } = useContext(StaffContext);
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?email=${email}`);
        setMember(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching staff details:', error);
      }
    };

    const foundMember = workers.find((mem) => mem.email === email);
    if (foundMember) {
      setMember(foundMember);
    } else {
      fetchMember();
    }
  }, [email, workers]);

  if (!member) return <p>Loading...</p>;

  return (
    <div>
      <h2 className='worker-name'>{member.name.first} {member.name.last}</h2>
      <img src={member.picture.large} alt={member.name.first}/>
      <p>Phone: {member.phone}</p>
      <p>Location: {member.location.street.name} {member.location.street.number}, {member.location.city}, {member.location.country}</p>
      <div className="map">
        <MapContainer center={[member.location.coordinates.latitude, member.location.coordinates.longitude]} zoom={13}>
        <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  />
          <Marker position={[member.location.coordinates.latitude, member.location.coordinates.longitude]} />
        </MapContainer>
      </div>
      <button onClick={() => addToFavorite(member)} className="btn btn-primary mt-3">Add to Favorites</button>
    </div>
  );
};

export default WorkerDetails;
