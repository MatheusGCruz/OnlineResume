function WebProjects ({redirectUrl, image, description}){
    return(
        <div class="fill">
            <a href={redirectUrl}target="_blank" rel="noopener noreferrer">
            <img className="slideImage" src={image} alt={description}/>
          </a>
        </div>
    )
}

export default WebProjects