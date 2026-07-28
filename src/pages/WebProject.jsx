function WebProjects ({redirectUrl, image, description}){
    return(
        <div className="fill">
            <a href={redirectUrl}target="_blank" rel="noopener noreferrer">
            <img className="slideImage" src={image} alt={description}/>
          </a>
        </div>
    )
}

export default WebProjects
