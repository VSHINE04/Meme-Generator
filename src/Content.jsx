import React, { useEffect, useRef } from "react";


export default function Content() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS06Lv3qkW0IXtMqy_xll0d87wjMNS1vqx3Q&s",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  
  const memeRef = useRef(); // Ref to capture the meme div

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        console.log(data.data.memes); // Log the memes array here
      });
  }, []);

  function getMemeImage(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
      topText:'',
      bottomText:''
    }));

  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form>
        <label htmlFor="toptext">Top Text</label>
        <input
          type="text"
          name="topText"
          id="toptext"
          value={meme.topText}
          onChange={handleChange}
          placeholder="When you see this post"
        />
        <label htmlFor="bottomtext">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="bottomtext"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="but you don't like it"
        />
        <br />
        <button onClick={getMemeImage}>Get a new meme Image 🖼</button>
      </form>
      <div className="meme" ref={memeRef}>
        <img
          id="meme-image"
          src={meme.imageUrl}
          alt="Meme"
        />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
