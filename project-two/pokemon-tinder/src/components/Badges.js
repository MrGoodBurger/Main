//This component handles the badges display
const imgStyle = {
    height: '80px',
    width: '80px',
    objectFit: 'cover',
};

function Badges({ badge }) {
    console.log(badge);
    return(
//I want this component to display as an row with each badge having its own
            <div>
                <div>
                    <img src={Object.values(badge.pic)}alt="gym badge" style={imgStyle}/>
                </div>
                <div>
                    <p>{badge.name}</p>
                </div>
            </div>

    )
};

export default Badges;