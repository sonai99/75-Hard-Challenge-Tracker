// Rules.js
import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <div className="rules-container">
        <h1 className='title'>RULES</h1>
      <div className="checkboxes">
        <div className="column">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum corrupti  1 4
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum corrupti  1 2
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum corrupti  1 3
          </label>
        </div>
        <div className="column">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum corrupti  1 4
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum corrupti  1 5
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum corrupti  1 6
          </label>
        </div>
      </div>
    </div>
  );
};

export default Rules;
