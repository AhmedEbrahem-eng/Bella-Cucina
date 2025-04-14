function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h2>Our Story</h2>
        <p>Authentic Italian flavors since 1995</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h3>Our Heritage</h3>
          <p>
            Founded by Chef Antonio Rossi, Bella Cucina brings the authentic taste of Italy to your table.
            Our recipes have been passed down through generations, ensuring the true essence of Italian cuisine.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Philosophy</h3>
          <p>
            We believe in using only the finest ingredients, sourced locally whenever possible.
            Each dish is prepared with passion and attention to detail, just like in a traditional Italian home.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Team</h3>
          <p>
            Our team of experienced chefs and staff are dedicated to providing you with an unforgettable
            dining experience. We take pride in our warm hospitality and authentic Italian atmosphere.
          </p>
        </section>

        <div className="about-features">
          <div className="feature">
            <span className="feature-icon">🍝</span>
            <h4>Authentic Recipes</h4>
            <p>Traditional Italian cooking methods</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🌿</span>
            <h4>Fresh Ingredients</h4>
            <p>Locally sourced produce</p>
          </div>
          <div className="feature">
            <span className="feature-icon">👨‍🍳</span>
            <h4>Expert Chefs</h4>
            <p>Years of culinary experience</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🍷</span>
            <h4>Wine Selection</h4>
            <p>Curated Italian wines</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 