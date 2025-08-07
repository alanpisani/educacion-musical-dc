import "./InfoContainer.css"

import TitleAndSubtitleComponent from "../TitleAndSubtitleComponent/TitleAndSubtitleComponent";

import CoshitaButton from "../CoshitaButton/CoshitaButton";

function InfoContainer( { subtitle, titleChildren, description, labelBtn, isPinkySubtitle } ){
    return(
        <div className="info-container">
            <TitleAndSubtitleComponent subtitle={subtitle} 
                isPinkySubtitle={isPinkySubtitle}
                titleChildren={titleChildren}
            />
            <p className="info-description" >{description}</p>
            <CoshitaButton label={labelBtn} />
        </div>
    )
}

export default InfoContainer;