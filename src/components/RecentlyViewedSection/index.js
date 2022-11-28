import {EmblaCarousel} from "../EmblaCarousel";
import React from 'react';
import './index.css';

const itemURL = "https://img.edilportale.com/product-thumbs/";
const brandURL = "https://cdn.archilovers.com/people/thumb3_"
const viewedItems = [
    { item: "b_alberese-sofa-with-chaise-longue-de-padova-607048-relca1ec319.jpg", brand:"DE-PADOVA-a8aaaf04-log1.gif"},
    { item: "b_unic-slate-construplas-613271-rel26684149.jpg", brand:"CONSTRUPLAS-S-L-4e4df19b-log1.gif"},
    { item: "b_alberese-sofa-with-chaise-longue-de-padova-607048-relca1ec319.jpg", brand:"DE-PADOVA-a8aaaf04-log1.gif"},
    { item: "b_unic-slate-construplas-613271-rel26684149.jpg", brand:"CONSTRUPLAS-S-L-4e4df19b-log1.gif"},
    { item: "b_BOMBO-Martinelli-Luce-446597-rel8a0d3c18.jpg", brand:"e82c357c-746b-40ae-bac5-44cb2560572f-log1.gif"},
    { item:"b_easy-chair-minotti-599722-rela125438b.jpg", brand:"Minotti-4987a333-log1.gif"},
    { item: "b_BOMBO-Martinelli-Luce-446597-rel8a0d3c18.jpg", brand:"e82c357c-746b-40ae-bac5-44cb2560572f-log1.gif"},
    { item:"b_easy-chair-minotti-599722-rela125438b.jpg", brand:"Minotti-4987a333-log1.gif"},
    { item:"b_easy-chair-baxter-598301-rel22e4c75e.jpg", brand:"e8034b39-d6cb-4c2d-a5fd-c7c3d3070788-log1.gif"},
    { item:"b_EGO-MIRROR-Abimis-is-a-Prisma-S-r-L-brandmark-301359-rel8808ebd6.jpg", brand:"Abimis-is-a-Prisma-S-r-L-brandmark-47b7b8d5-log1.gif"},
    { item:"b_easy-chair-baxter-598301-rel22e4c75e.jpg", brand:"e8034b39-d6cb-4c2d-a5fd-c7c3d3070788-log1.gif"},
    { item:"b_EGO-MIRROR-Abimis-is-a-Prisma-S-r-L-brandmark-301359-rel8808ebd6.jpg", brand:"Abimis-is-a-Prisma-S-r-L-brandmark-47b7b8d5-log1.gif"}
]

const RecentlyViewedSection = () => {
  return (
    <div className="px-3 recently-viewed-section">
        <h2 className="fs-3 my-4">Recently Viewed</h2>
        <EmblaCarousel>
        {viewedItems.map(({ item, brand }, i) => (
					<div className='recently-viewed-card' key={i}>
						<div className='recently-viewed-image img-fluid'>
							<img src={itemURL + item} alt="" />
						</div>
						<div className='recently-viewed-brand-image'><img src={brandURL + brand} alt="" /></div>
					</div>
				))}
        </EmblaCarousel>
    </div>
  )
}

export default RecentlyViewedSection