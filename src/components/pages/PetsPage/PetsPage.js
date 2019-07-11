import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AllPets from '../../../data/pets.json';
import style from './PetsPage.module.css';

export default class PetsPage extends Component {
  state = { pets: null };

  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.setState({ pets: AllPets });
  }

  render() {
    const { pets } = this.state;
    const { location } = this.props;
    const { container, title, petsList, petItem, petImg, petName } = style;

    return (
      <div className={container}>
        <h1 className={title}>Avaliable pets</h1>
        <ul className={petsList}>
          {pets &&
            pets.map(pet => (
              <li key={pet.id}>
                <div className={petItem}>
                  <Link
                    to={{
                      pathname: `/pets/${pet.id}`,
                      state: { from: location },
                    }}
                  >
                    <img className={petImg} src={pet.image} alt="" />
                  </Link>
                  <p className={petName}>{pet.name}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
