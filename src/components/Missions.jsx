import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((spaceM) => {
          console.log('Teste 2');
          return (
            <MissionCard
              key={ spaceM.name }
              name={ spaceM.name }
              year={ spaceM.year }
              country={ spaceM.country }
              destination={ spaceM.destination }
            />
          );
        })}
      </div>
    );
  }
}

export default Missions;
