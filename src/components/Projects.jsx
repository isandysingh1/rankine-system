import React from 'react';

const projects = [
  { id: 1, category: 'Government', imgSrc: 'govproject1.png', title: 'Czech Embassy', location: 'New Delhi', text: '160HP' },
  { id: 2, category: 'Government', imgSrc: 'govproject2.png', title: 'Canada High Commission', location: 'New Delhi', text: '20HP' },
  { id: 3, category: 'Government', imgSrc: 'govproject3.png', title: 'RAW', location: 'New Delhi', text: '60HP' },
  { id: 4, category: 'Government', imgSrc: 'govproject4.png', title: 'NTRO(DRDO)', location: 'New Delhi', text: '80HP' },
  { id: 5, category: 'Government', imgSrc: 'govproject5.png', title: 'SSPL(DRDO)', location: 'New Delhi', text: '74HP' },
  { id: 6, category: 'Government', imgSrc: 'govproject6.png', title: 'Defence Airport', location: 'Manesar', text: '40HP' },
  { id: 7, category: 'Government', imgSrc: 'govproject7.png', title: 'Slovak Embassy', location: 'New Delhi', text: '82HP' },
  { id: 8, category: 'Hotels', imgSrc: 'hotelproject1.png', title: 'Vivanta by Taj Hotel', location: 'Faridabad', text: '20TR' },
  { id: 9, category: 'Hotels', imgSrc: 'hotelproject2.png', title: 'Le Meridian Hotel', location: 'Gurugram', text: '80HP' },
  { id: 10, category: 'Hotels', imgSrc: 'hotelproject3.png', title: 'Gala Deventure Banquet Hall', location: 'Karnal', text: '325TR' },

  { id: 11, category: 'Schools', imgSrc: 'schoolproject1.png', title: 'Ompee International School', location: 'Manesar', text: '250HP' },
  { id: 12, category: 'Schools', imgSrc: 'schoolproject2.png', title: 'Tagore Public School', location: 'Kurukshetra', text: '240HP' },
  { id: 13, category: 'Schools', imgSrc: 'schoolproject3.png', title: 'Emerald School', location: 'Gurugram', text: '100HP' },

  { id: 14, category: 'Hospitals', imgSrc: 'hospitalproject1.png', title: 'Kailash Hospital', location: 'Dehradun', text: '20HP' },
  { id: 15, category: 'Hospitals', imgSrc: 'hospitalproject2.png', title: 'Sadhu Hospital', location: 'Delhi', text: '20HP' },

  { id: 16, category: 'Retail-Showrooms', imgSrc: 'retailproject1.png', title: 'BATA Showroom', location: 'New Delhi', text: '32HP' },
  { id: 17, category: 'Retail-Showrooms', imgSrc: 'retailproject2.png', title: 'TOTO Showroom', location: 'Gurgaon', text: '40HP' },
  { id: 18, category: 'Retail-Showrooms', imgSrc: 'retailproject3.png', title: 'Fabindia', location: 'Rajori Garden', text: '30TR' },

  { id: 19, category: 'Gym-Health', imgSrc: 'gymproject1.png', title: 'Gym & Health', location: 'Lajpat Nagar', text: '32HP' },
  { id: 20, category: 'Gym-Health', imgSrc: 'gymproject2.png', title: 'Big Muscle Nutrition', location: 'Faridabad', text: '36HP' },
];

const Projects = () => {
  return (
    <section id="projects" className="padding-medium">
      <div className="container">
        <h6 className="text-center text-primary">Our Projects</h6>
        <h3 className="text-center display-5 fw-bold">View Our Latest Projects</h3>
        <div className="my-4">
          <p className="text-center">
            <button className="filter-button px-3 me-2 mb-3 active" data-filter="*">All</button>
            <button className="filter-button px-3 me-2 mb-3" data-filter=".Government">Government</button>
            <button className="filter-button px-3 me-2 mb-3" data-filter=".Hotels">Hotels</button>
            <button className="filter-button px-3 me-2 mb-3" data-filter=".Schools">Schools</button>
            <button className="filter-button px-3 me-2 mb-3" data-filter=".Hospitals">Hospitals</button>
            <button className="filter-button px-3 me-2 mb-3" data-filter=".Retail-Showrooms">Retail Showrooms</button>
            <button className="filter-button px-3 me-2 mb-3" data-filter=".Gym-Health">Gym & Health</button>
          </p>
        </div>

        <div className="isotope-container">
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className={`col-md-4 item ${project.category} mb-4`}>
                <a href="project-single.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${project.imgSrc}`}
                    alt={project.title}
                    className="img-fluid"
                  />
                </a>
                <h6 className="text-primary mt-3">{project.category}</h6>
                <h5>{project.title}</h5>
                <p className="text-muted">{project.location}</p>
                <p className="text-muted"><b>{project.text}</b></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;