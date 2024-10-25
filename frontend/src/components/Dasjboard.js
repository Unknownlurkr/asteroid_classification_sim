// pages/index.js

import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { useLocation } from 'react-router-dom';
import Asteroid3DView from '../components/Asteroid3DView';
import classifyAsteroid from '../utils/classifyAsteroid';

export default function Dashboard() {
    const [asteroids, setAsteroids] = useState([]);
    const [classification, setClassification] = useState(null);

    const handleSearch = async (filters) => {
        const response = await fetch(`/api/search?${new URLSearchParams(filters)}`)
        const data = await response.json();
        setAsteroids(data);
    };
    const handleClassification = (asteroid) => {
        const classification = classifyAsteroid(asteroid);
        setClassification(classification);
        };

        
}
