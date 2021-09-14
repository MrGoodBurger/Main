//This Component deals with the image of the div
//Eventtuly combine into Bio.js
import Q from '../images/Q_Daddy.JPG'

function Image() {
    return(
        <div>
            <img src={Q} alt="Red from PokeMon" style={{width: "50"}}/>
            <h1>Q Daddy</h1>
        </div>
    )
};

export default Image;