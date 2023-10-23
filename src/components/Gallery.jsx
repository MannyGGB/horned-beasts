import HornedBeast from "./HornedBeast";

export default function Gallery(props) {
  return (
    <section>
      <div>
        <HornedBeast title="animal" />
        <HornedBeast imageUrl="https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales-1024x654.jpg" />
        <HornedBeast description="animal info" />
      </div>
      <div>
        <HornedBeast title="animal" />
        <HornedBeast imageUrl="https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales-1024x654.jpg" />
        <HornedBeast description="animal info" />
      </div>
    </section>
  );
}

// export default function Gallery(props) {
//   class Beast {
//     constructor(title, imageUrl, description) {
//       this.title = title;
//       this.imageUrl = imageUrl;
//       this.description = description;
//     }
//   }

//   return (badger = new Beast("badger", "./assets/animal.jpg", "description"));
//   <section>
//     <div className="beast">
//       <h2 className="title">Animal Name</h2>
//       <img className="imageUrl" src="" alt="animal" title="animal" />
//       <p className="description">description</p>
//     </div>

//     <div className="beast">
//       <h2 className="title">Animal Name</h2>
//       <img className="imageUrl" src="" alt="animal" title="animal" />
//       <p className="description">description</p>
//     </div>
//   </section>
// }
