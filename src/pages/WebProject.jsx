function WebProjects ({redirectUrl, image, description}){
    return(
        <div>
            <a href={redirectUrl}target="_blank" rel="noopener noreferrer">
            <img src={image} alt={description} />
          </a>
        </div>
    )
}

export default WebProjects