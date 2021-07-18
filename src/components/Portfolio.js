import React from 'react';
import '../styles/style.css';
import projectsData from '../assets/projects.json';
import Project from './Project';

const Portfolio = () => {  
    return(
        <div className="wrapper">
            <h3>Portfolio</h3>
            <div className="other-projects pb-4 mb-4 d-flex">
                {projectsData.map(projectData => {
                    return (<Project key={projectData.id} project={projectData} />);
                })}
            </div>
        </div>
    )
}

export default Portfolio;