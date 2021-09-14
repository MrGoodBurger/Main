//This Component deals with the image of the div
//Eventtuly combine into Bio.js
import Q from '../images/Q_Daddy.JPG'
import AK from '../images/Ass_Ketchum.JPG'

function Image() {
    return(
        <div>
            <img src={Q} alt="Red from PokeMon" style={{width: "50"}}/>
            <img src={AK} alt="Q" style={{width: "50"}}/>
        </div>
    )
};

export default Image;