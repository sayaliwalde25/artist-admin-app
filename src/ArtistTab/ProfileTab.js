import React from "react";

const ProfileTab = ({ data }) => {
  return (
    <div className="data">
      <h4>ProfileTab</h4>
      <p>Name:{data?.ArtistFullName}</p>
      <p></p>
    </div>
  );
};

export default ProfileTab;
