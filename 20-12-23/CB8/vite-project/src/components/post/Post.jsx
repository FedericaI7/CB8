import { useEffect, useState } from "react";
import "./index.css";

const Post = ({ postData, getFromChildId }) => {
  const { title, body, tags, reactions, userId } = postData;
  const [idImg, setIdimg] = useState([]);
  const [imgUser, setImgUser] = useState("");

  getFromChildId(userId);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${userId}`)
      .then((res) => res.json())
      .then((data) => setIdimg(data.userId));
  }, []);

  useEffect(() => {
    fetch(`https://robohash.org/${userId}.png`).then((data) => {
      if (data) {
        setImgUser(data.url);
      }
    });
  }, []);

  return (
    <div className="Post">
      <div className="Post__container">
        {/* In src ho inserito {imgUser} per ottenere l'immagine da roboash, ma se avessi
       voluto sfruttare la prima chiamata con relativo State avrei 
       inserito {idImg} */}
        {/* Qui volevo implementare una funzionalità: quando non è disponibile imgUser (quindi le immagini) può lasciare
         il campo immagine vuoto e darci {idImg, al fine di evitare di avere pagina vuota, ma non lo implementa*/}
        <img src={imgUser || idImg} alt="Profile picture" />
        <h3 className="Post__title">{title}</h3>
      </div>

      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>🎁</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
