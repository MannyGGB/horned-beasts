//import animal from ""../assets/animal.jpg" LAB 01

import HornedBeast from "./HornedBeast";
import data from "../data.json"; //when we import, we can use data directly without declaring a variable

//every function needs a return; in this case, we have two returns

export default function Gallery() {
  return (
    // you can't declare variables inside the return
    <section className="animal-section">
      {data.map(function (beast) {
        // the .map method takes two parameters max (one is the array item, the other is the index)
        return (
          <HornedBeast
            title={beast.title} // we can access the beast properties with dot notation
            imageUrl={beast.image_url}
            description={beast.description}
          />
        );
      })}
    </section>
  );
}

// LAB 01
// export default function Gallery() {
//   return (
//     <section className="animal-section">
//       <div>
//         <HornedBeast
//           title="animal"
//           imageUrl={animal}
//           description="animal info"
//         />
//       </div>
//       <div>
//         <HornedBeast
//           title="animal"
//           imageUrl={animal}
//           description="animal info"
//         />
//       </div>
//     </section>
//   );
// }

// EXTRA CODE (was trying to use a class and constructor)
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
