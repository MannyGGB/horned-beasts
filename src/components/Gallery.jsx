// import animal from "./assets/animal.jpg";

export default function Gallery(props) {
  class Beast {
    constructor(title, imageUrl, description) {
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  }

  return (badger = new Beast("badger", "./assets/animal.jpg", "description"));
  // <section>
  //   <div className="beast">
  //     <h2 className="title">Animal Name</h2>
  //     <img className="imageUrl" src="" alt="animal" title="animal" />
  //     <p className="description">description</p>
  //   </div>

  //   <div className="beast">
  //     <h2 className="title">Animal Name</h2>
  //     <img className="imageUrl" src="" alt="animal" title="animal" />
  //     <p className="description">description</p>
  //   </div>
  // </section>
}
