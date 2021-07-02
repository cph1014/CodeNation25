
const Card = (props) => {
    return (
    <div className="card">
    <img src ={props.picture} alt={props.pictureAlt}/>
    <h3>{props.tagLine}</h3>
    <p>{props.p}</p>
    </div>
  );
};

export default Card;