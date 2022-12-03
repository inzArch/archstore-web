import './index.css';
import { MagazinesData } from './MagazinesData';

const Magazines = () => {
  return (
    <div className='Magazines-container'>
        <div className="Magazines-heading">
            <div className="Magazines-heading-container">
                <h1>Magazines  &  Exhibitions <span></span></h1>
            </div>
        </div>
        <div className="Magazines-section">
            {MagazinesData.magazines.map((magazine)=>(
                <img src={magazine.img} alt="magazine" />
            ))}
            {/* <div className="Magazine-section-layer"></div> */}
        </div>
        <div className="Exhibitions-section">
            {MagazinesData.exhibitions.map((exhibition)=>(
                <div className="Exhibition-Cell">
                    <img src={exhibition.img} alt="exhibition" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Magazines