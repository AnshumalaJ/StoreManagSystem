import React from 'react';

function Log() {
    const u_details= sessionStorage.getItem("validated_date");
    document.write(u_details);

  
  
}

export default Log;
