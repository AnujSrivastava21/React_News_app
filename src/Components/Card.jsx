import React from 'react';

const Card = ({ data = [] }) => { // Default value as an empty array
  return (
    <>
      <div className="cardContainer">
        {data && data.length > 0 ? (
          data.map((e, index) => (
            e.urlToImage ? ( // Conditional check
              <div className="card" key={index}>
                <img src={e.urlToImage} alt="news" />
                <div className="content">
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    {e.title}
                  </a>
                  <p>{e.description}</p>
                  <button onClick={() => window.open(e.url, '_blank')}>
                    Read more
                  </button>
                </div>
              </div>
            ) : null
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </>
  );
};

export default Card;
