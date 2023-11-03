import React, { Component } from 'react';
import './dropdown.css';
import { Link } from 'react-router-dom';

class DropdownMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      menuPosition: { top: 0, left: 0 },
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));

    if (this.menuRef) {
      const menuPosition = this.menuRef.getBoundingClientRect();
      this.setState({ menuPosition });
    }
  };

  render() {
    const categories = [
      'Аніме фігурки',
      'Манга',
      'Комікси',
      'Ранобе',
      'Одяг',
      'Листівки',
      'Аромасвічки',
      'Плакати',
      'Чашки',
      'Наклейки, стікери',
      'Брелоки',
    ];

    const menuClass = this.state.isOpen ? 'menu active' : 'menu';

    return (
      <div className="dropdown">
        <button onClick={this.toggleMenu}>Категорії</button>
        {this.state.isOpen && (
          <ul className={menuClass} ref={(ref) => (this.menuRef = ref)}>
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DropdownMenu;
