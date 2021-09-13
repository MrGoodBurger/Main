//This is the Main Component page
import React, { useEffect, useState } from "react";
import Bio from "./components/Bio";
import Image from "./components/Image";

const badges =[
  { name: "Boulder Badge",
    earned: true,
  },
  { name: "Cascade Badge",
    earned: true,
  },
  { name: "Thunder Badge",
    earned: true,
  },
  { name: "Rainbow Badge",
    earned: true,
  },
  { name: "Soul Badge",
    earned: false,
  },
  { name: "Marsh Badge",
    earned: true,
  },
  { name: "Volcano Badge",
    earned: true,
  },
  { name: "Earth Badge",
    earned: true}
  
];


function App() {
  return ( 
    <div>
      <Image
      />
      <Bio
      />

    </div>
   );
}

export default App;
