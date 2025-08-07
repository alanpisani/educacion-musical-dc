function TitleAndSubtitleComponent( { subtitle, isPinkySubtitle, titleChildren } ){
    return (
        <div className="title-subtitle-container">
            <h3 className={isPinkySubtitle ? "subtitle pink" : "subtitle"}>{subtitle}</h3>
            {titleChildren}
        </div>

    );
}

export default TitleAndSubtitleComponent;