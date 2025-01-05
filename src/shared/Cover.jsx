import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

function Cover({ image, title, description }) {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="Cover image"
        strength={-200}
      >
        <div className="hero h-[600px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{description}</p>
              <button className="btn btn-primary" aria-label="Get Started">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

Cover.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Cover.defaultProps = {
  description: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
};

export default Cover;