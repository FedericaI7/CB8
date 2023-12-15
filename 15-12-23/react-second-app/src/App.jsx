import CardList from "./components/cardList/CardList";
import "./App.css";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery/Gallery";
import dataGallery from "./dataGallery.json";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Carousel from "./components/carousel";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero
        title="Lorem Ipsum"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi
            voluptate accusantium odio iusto debitis quas, blanditiis expedita
            accusamus nam quod, laudantium asperiores incidunt sint saepe ut,
            nobis rem magni."
        buttonText="Click"
        img="https://images.unsplash.com/photo-1532540329746-fb0b80d73482?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altImg="woman with flowers"
      />

      {/* <button>Ciao</button> */}
      {/* <Button textContent="cliccami!" color="white" />
      <Button textContent="Accetta!" />
      <Button textContent="Annulla!" /> */}
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      {/* <Gallery dataImg={dataGallery} /> */}
      <Carousel pic={dataGallery} />
      {/* <CardList cardListObj={{ title: "Sci-Fi" }} />
      <CardList cardListObj={{ title: "Adventure" }} /> */}
      <Footer />
    </div>
  );
}

export default App;
