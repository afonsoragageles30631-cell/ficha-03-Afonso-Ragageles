function card ({name, attack, type}){
    return(
        <li className = "card" >

            <p>{name}</p>
            <p>{attack}</p>
            <p>{type}</p>

            {name >=5 && <span></span>}

            </li>
    );
}
export default card;