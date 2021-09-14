//This component handles the badges display


function Badges({ badges }) {
    console.log(badges[0].pic.boulder);
    return(
//I want this component to display as an row with each badge having its own
        <section>
            <div>
                <img src={badges[0].pic.boulder} alt="rock"/>
                <p>{badges[0].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[1].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[2].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[3].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[4].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[5].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[6].name}</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>{badges[7].name}</p>
            </div>
        </section>

    )
};

export default Badges;