export default function About() {
  return (
    <div className="section">
      <h2 className="header center-align">About Us</h2>
      
      <div className="row" style={{ marginTop: '2rem' }}>
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Our Story</span>
              <p className="flow-text">
                Dhaka Chaka is a modern web application built with Next.js and styled with Materialize CSS.
                We believe in creating beautiful, responsive, and user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m6">
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Our Mission</span>
              <p>
                To provide a seamless and enjoyable user experience through modern web technologies
                and beautiful design patterns.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Our Vision</span>
              <p>
                To become the go-to platform for users looking for a clean, efficient,
                and responsive web experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row center-align">
        <h4>Meet Our Team</h4>
        <div className="col s12 m4">
          <div className="card-panel">
            <i className="material-icons large blue-text">person</i>
            <h5>John Doe</h5>
            <p>Lead Developer</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card-panel">
            <i className="material-icons large blue-text">person</i>
            <h5>Jane Smith</h5>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card-panel">
            <i className="material-icons large blue-text">person</i>
            <h5>Mike Johnson</h5>
            <p>Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  )
} 