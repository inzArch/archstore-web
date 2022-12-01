import React from 'react';
import Card from './TrendingCard';
import './index.css';
import {EmblaCarousel} from 'components/EmblaCarousel';
const TrendingCards = () => {
  return (
    <div className='trending-moodboard-cards-section'>
    <EmblaCarousel>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </EmblaCarousel>
    </div>
  )
}

export default TrendingCards