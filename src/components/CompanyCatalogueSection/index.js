import React from 'react';
import {EmblaCarousel} from '../EmblaCarousel';
import './index.css';

const catalogURL = "https://catalogs.edilportale.com/"
const catalogs = [
    {name:"BeB The Collection 2019 (it, en)", pdf:"BeB-The-Collection-2019-it-en-B-B-Italia-0-catf2356857.jpg"},
    {name:"B&B Italia Views - Issue 01 (en)", pdf:"B-B-Italia-Views-Issue-01-en-B-B-Italia-0-cat397ac74c.jpg"},
    {name:"BeB The Collection 2019 (it, en)", pdf:"BeB-The-Collection-2019-it-en-B-B-Italia-0-catf2356857.jpg"},
    {name:"B&B Italia Views - Issue 01 (en)", pdf:"B-B-Italia-Views-Issue-01-en-B-B-Italia-0-cat397ac74c.jpg"},
    {name:"The Storage Systems 2018 (it, en)", pdf:"The-Storage-Systems-2018-it-en-B-B-Italia-0-cat3b80b9bf.jpg"},
    {name:"B&B Italia - Sofas & Armchairs (it, en)", pdf:"B-B-Italia-Sofas-Armchairs-it-en-B-B-Italia-0-catb9ef9c70.jpg"},
    {name:"The Storage Systems 2018 (it, en)", pdf:"The-Storage-Systems-2018-it-en-B-B-Italia-0-cat3b80b9bf.jpg"},
    {name:"B&B Italia - Sofas & Armchairs (it, en)", pdf:"B-B-Italia-Sofas-Armchairs-it-en-B-B-Italia-0-catb9ef9c70.jpg"}
]

const CompanyCatalogueSection = () => {
  return (
    <div className='company-catalog-section'>
        <div className='company-catalog-heading'>
        <h2 className='my-4'>Catalogs B & B Italia</h2>
				<button className='company-catalog-button'>
					<span>View All</span>
				</button>
        </div>
        <EmblaCarousel>
        {catalogs.map(({ name, pdf }, i) => (
					<div className='company-catalog-card' key={i}>
						<div className='company-catalog-img img-fluid'>
							<img src={catalogURL + pdf} alt={name} />
						</div>
                        <div className='company-catalog-pdf'>PDF</div>
                        <div className='company-catalog-name text-dark'>{name}</div>
					</div>
                    
				))}   
        </EmblaCarousel>
    </div>
  )
}

export default CompanyCatalogueSection