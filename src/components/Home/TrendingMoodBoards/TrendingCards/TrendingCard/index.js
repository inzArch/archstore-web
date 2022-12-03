
import './index.css';
const TrendingImage1 = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/trendingmoodboard1.1c669cb7f0713ae4f264.png';
const TrendingImage2 = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/trendingmoodboard2.d80be694903efd9838d3.png';
const TrendingImage3 = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/trendingmoodboard3.4b0e3ae6489843a52e44.png';
const TrendingUser1 = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/trendingmoodboarduser1.54ac4fe8d0cddf2adaddbb2fead9cd6a.svg';

const TrendingCard = () => {

  return (
    <div className='trending-moodboard-image-card'>
      <div className='trending-moodboard-image-card-item'><img src={TrendingImage1} alt="" /></div>
      <div className='trending-moodboard-image-card-item'><img src={TrendingImage2} alt="" /></div>
      <div className='trending-moodboard-image-card-item'><img src={TrendingImage3} alt="" /></div>
      <div className='trending-moodboard-image-card-item'></div>
      <div className='trending-moodboard-image-card-item'></div>
      <div className='trending-moodboard-image-card-item'></div>
      <div className='trending-moodboard-image-card-item'></div>

      <div  className='trending-moodboard-image-card-hover'  >
        <h6>Tribhuvan Residency</h6>
        <span className='trending-moodboard-image-card-hover-user'><img src={TrendingUser1} alt="user1" /> <p>Christian Henry     |  3BHK </p></span>
      </div>
    </div>
  )
}

export default TrendingCard