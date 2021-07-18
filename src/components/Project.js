import React from 'react';
import '../styles/style.css';

const Project = ({project}) => {
    return (
        <div className="col-sm-12 col-md-6 col-xl-3 pb-4 mb-4">
            <div className="card">
                <img className="card-img-top" src={project.image} alt={project.name} />
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="row justify-content-center">
                        <a href={project.deployed_url} className="btn btn-primary mr-2">View project</a>
                        <a href={project.github} className="btn btn-primary">View github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;