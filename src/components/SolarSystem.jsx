import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((Plt) => {
          console.log('teste de funcionamento');
          return (<PlanetCard
            key={ Plt.name }
            planetName={ Plt.name }
            planetImage={ Plt.image }
          />);
        })}
      </div>);
  }
}

export default SolarSystem;
