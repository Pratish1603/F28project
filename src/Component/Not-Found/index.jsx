import './index.css'
import errorImage from '../../assets/error-page-not-found-png-image.png';

const NotFound = ()=>(

    <div className='not-found'>
          
        <img src={errorImage} alt="https://png.pngtree.com/png-clipart/20220109/original/pngtree-404-error-page-not-found-png-image_7021505.png" width= "300px"/>
        <br/>
        <h1>The Page You Are Trying Is Not Found </h1>
        <br/>
        <button type="button" class="btn btn-outline-dark">GO BACK</button>

    </div>
)
export default NotFound;