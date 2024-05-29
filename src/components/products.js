import one from "../Images/img_1.avif"
import two from "../Images/img_2.jpg"
import three from "../Images/img_3.jpg"
function Products()
{
  return (
    <div className="products">
     <div className="products_items">
     <img src={one} alt="Image1"/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam eveniet, accusantium saepe rerum quo natus neque alias officiis voluptates.</p>
     </div>
     <div className="products_items">
     <img src={two} alt="Image2"/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam eveniet, accusantium saepe rerum quo natus neque alias officiis voluptates.</p>
     </div>
     <div className="products_items">
     <img src={three} alt="Image3"/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam eveniet, accusantium saepe rerum quo natus neque alias officiis voluptates.</p>
     </div>
    </div>
  )
}
export default Products;