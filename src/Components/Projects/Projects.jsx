import React, { useEffect } from 'react';
import './Projects.css';

const projectData = [
  {
    title: "1. Windmill & Solar Projects",
    description: "Our Project services make sure to optimize customer resources to its fullest. With clearly defined parameters from the client, we are equipped to handle any scale of Wind & solar projects from design development to turn-key EPC to project completion. Jsons Energy looks into the finer nuances of each project, especially timely execution, quality control and reducing minor complications that may arise on the field.",
    type: "section",
    subsections: [
      {
        title: "System Design & Components",
        description: "With our highly competent team, we provide a suitable system design that adheres strictly to your brief. Quality components are the key factors towards smooth functioning of the solar farm. We help in sourcing and procuring the highest quality components that harmonize our superior design, ensuring optimum energy output."
      },
      {
        title: "Construction & Development",
        description: "The most important aspect of any project is its actual construction and development. Working in unison with professionals we work towards design realization. Jsons Energy has the expertise and know-how to obtain necessary licenses, permissions and other government documentation, making sure that rules and local codes are carefully maintained. Further, we always make sure to complete the construction within the promised time frame."
      }
    ]
  },
  {
    title: "2. Electrical Infrastructures & Contracts",
    description: "Jsons has diversified into Engineering, Procurement & Construction (EPC) And has been offering turnkey solutions for MV, HV & EHV substations and Transmission lines along with undertaking turnkey jobs up to220kV. Jsons offerings include such as:",
    type: "section",
    offerings: [
      "Switchyard / Sub-stations up to 220kV",
      "Transmission Lines up to 220kV",
      "Rural Electrification",
      "Distribution Lines & HVDS",
      "Process Industry Plant Electrification"
    ],
    additionalInfo: "Jsons leverages its vast experience and expertise in the power distribution and management domain to undertake complex EPC projects. Genus has demonstrated its capability with timely completion of numerous projects across varied terrain and adverse climatic conditions. Jsons ECC division employs the advanced equipment, modern technique and software working closely with its specialists that carry vast experience in executing ECC contracts. Jsons has undertaken projects on total turnkey basis for establishing Grid Sub-Stations up to 220kV and capable of executing projects up to 400kV"
  }
];

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>
      <div className="projects-content">
        {projectData.map((section, index) => (
          <div key={index} className={`project-section ${section.type}`}>
            <h2>{section.title}</h2>
            {section.description && <p className="section-description">{section.description}</p>}
            
            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="subsection">
                <h3>{subsection.title}</h3>
                {subsection.description && <p>{subsection.description}</p>}
              </div>
            ))}

            {section.offerings && (
              <div className="offerings-section">
                <ul>
                  {section.offerings.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.additionalInfo && (
              <div className="additional-info">
                <p>{section.additionalInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 