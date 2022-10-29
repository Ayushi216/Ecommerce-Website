import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import classes from "./productDetail.module.css";

const ProductDetail = (props) => {
  
  const params = useParams();
 
 

  return (
    
    <Fragment>
      {params.product_id==='1' && (<section className={classes.section}>
        <h1 className={classes.title}>COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @yushi216 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> rhea43 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
        
        
      </section>)}

      {params.product_id==='2' && (<section className={classes.section}>
        <h1 className={classes.title}>BLACK AND WHITE COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @yushi216 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> rhea43 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
        
        
      </section>)}

      {params.product_id==='3' && (<section className={classes.section}>
        <h1 className={classes.title}>YELLOW AND BLACK COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @yushi216 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> rhea43 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
  
        
      </section>)}

      {params.product_id==='4' && (<section className={classes.section}>
        <h1 className={classes.title}> BLUE COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @yushi216 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> rhea43 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aryanshi178 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
      
        
      </section>)}

     
    </Fragment>
  );
};

export default ProductDetail;
