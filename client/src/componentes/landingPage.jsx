import { Link } from 'react-router-dom';
import "../style/landinPage.css"
function landing() {
 

  return (
  <div className='bienvenidos'>
      <h1>Bienvenidos   </h1>

    <div className='inicio'>
       <Link to="/homePage">
        <button type='submit'>VAMOS</button>
      </Link>
  </div>
    </div>
  );
}

export default landing;
