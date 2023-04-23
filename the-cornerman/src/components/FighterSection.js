import React from 'react';
import "./FighterSection.css"

function FighterSection() {
  return (
    <section className="fighter-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src="./images/MvsA.jpeg" alt="Fighter Image" />
          </div>
          <div className="col-md-8">
            <h2>Conor McGregor</h2>
            <p>Record: 22-5-0 (UFC)</p>
            <p>Nickname: The Notorious</p>
            <form>
              <div className="form-group">
                <button type="button" className="btn btn-primary">Add to Favorites</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FighterSection;