import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import pets from '../../../data/pets.json';
import styles from './PetPage.module.css';

export default class PetPage extends Component {
  state = {};

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          pathname: PropTypes.string,
        }),
      }),
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    location: {
      state: {
        from: {
          hash: '',
          pathname: '/pets',
          search: '',
        },
      },
    },
  };

  handleReturn = () => {
    const { state } = this.props.location;

    if (state) {
      return this.props.history.push(state.from);
    }

    return this.props.history.push({
      pathname: '/pets',
    });
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const pet = pets.find(item => item.id === id);

    if (!pet) {
      return <Redirect push to="/pets" />;
    }

    const { name, image, age, gender, color, breed, description } = pet;
    const {
      wrapper,
      button,
      title,
      card,
      img,
      info,
      infoItem,
      descript,
    } = styles;

    return (
      <>
        {pet && (
          <div className={wrapper}>
            <button
              className={button}
              type="button"
              onClick={this.handleReturn}
            >
              {`\u21D0`} Return
            </button>
            <h1 className={title}>All about {name}</h1>
            <div className={card}>
              <img className={img} src={image} alt="" />
              <div className={info}>
                <p className={infoItem}>
                  <strong>Age:</strong> {age}
                </p>
                <p className={infoItem}>
                  <strong>Gender:</strong> {gender}
                </p>
                <p className={infoItem}>
                  <strong>Color:</strong>: {color}
                </p>
                <p className={infoItem}>
                  <strong>Breed:</strong>: {breed}
                </p>
              </div>
            </div>
            <p className={descript}>{description}</p>
          </div>
        )}
      </>
    );
  }
}
