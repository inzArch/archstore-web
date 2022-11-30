
import './index.css';
import TrendingImage1 from '../../../../../assets/images/home/TrendingMoodboards/trendingmoodboard1.png';
import TrendingImage2 from '../../../../../assets/images/home/TrendingMoodboards/trendingmoodboard2.png';
import TrendingImage3 from '../../../../../assets/images/home/TrendingMoodboards/trendingmoodboard3.png';
import TrendingUser1 from '../../../../../assets/images/home/TrendingMoodboards/trendingmoodboarduser1.png';
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