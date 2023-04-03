import React from 'react';

const Map = () => {
   return (
      <iframe
         title="Google Maps"
         style={{border:"none"}}
         loading="lazy"
         allowFullScreen
         src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJeS5FiNCfpBIRpGTNc-aNkiI&key=AIzaSyDgUZdlm8ZbeFTlgjplkyUL8civ3L1XScg"></iframe>
   );
};

export { Map };
