import React, { useEffect } from 'react';
import './Services.css';

const serviceData = [
  {
    title: "Power & Distribution Transformers Re-manufacturing Services",
    description: "The Company has providing various services on sites. Jsons derives its strength from its customers and hence, strives to offer full customer Satisfaction by constantly working for their growth. Over the years of sincere service And dedication the company has earned the trust of distinguished customers in Different sectors such as Government and Semi-Government, Refineries, Fertilizer Plants, Cement, Steel, Chemical, Pharma, Paper, various other Industries and State Electricity Boards in India",
    type: "intro"
  },
  {
    title: "1. Transformer Repairing Services",
    type: "section",
    subsections: [
      {
        title: "a) Site Overhauling",
        description: "We undertake site overhauling / servicing work for any type and manufacture Transformers up to and including 315MVA, 400KV Class which includes:",
        items: [
          "Replacement of all Gaskets",
          "Replacement of HV, LV Metal Parts, Bushings etc.",
          "Vacuuming, Nitrogen filling etc",
          "Filtration of Transformer oil."
        ]
      },
      {
        title: "b) On Site Transformer Testing",
        description: "On Line Testing:",
        items: [
          "On line Moisture Content Measurement",
          "Transformer Oil (Screening, DGA and Furan) Test"
        ],
        subDescription: "Off Line Testing:",
        subItems: [
          "Dielectric Frequency Response Analysis [DFR]",
          "Sweep Frequency Response Analysis Measurement",
          "Capacitance And Tan Delta Measurement of Transformer",
          "Transformer Turns Ratio Measurement",
          "Magnetic Balance Measurement",
          "Excitation Current Measurement",
          "Static Winding Resistance Measurement",
          "Dynamic Winding Resistance Measurement for OLTC",
          "Insulation Resistance and Polarization Index Measurement",
          "Functional Checking of Protection Devices Like PRV, Bucholz Relay, MOG, OTI, WTI",
          "Winching of transformer"
        ]
      }
    ]
  },
  {
    title: "2. Transformer Oil Filtration",
    description: "Transformer oil filtration is carried out with oil filter machine of adequate capacity. Mobile oil filtration plant is designed to remove dissolved moisture, dirt, air and other gases from the transformer oil. This two stage plant operates on the principle of Low Temperature and High Vacuum. The transformer manufacturing plant is well equipped with machines.",
    type: "section",
    equipment: {
      title: "We are having following Filter Machines:",
      items: [
        "10000 LPH Oil filtration Machine : 01 No",
        "18000 LPH Oil filtration Machine : 01 No",
        "Upto 6000 LPH Oil Filtration Machine : 03 Nos",
        "Upto 3000 LPH Oil filtration machine : 03 Nos"
      ]
    },
    additionalEquipment: [
      "Transformer Oil filter Machine",
      "Dew Point Meter & PPM Meter",
      "DM70 Handheld Dew Point & PPM Meter For Spot-Checking Application",
      "Dry Air Generator - 'SUMESH-PET' MAKE Heatless Type air dry generator",
      "Oil Storage Tank - Oil Tank Required to store Transformer Oil"
    ]
  },
  {
    title: "3. Testing & Repairing Services",
    description: "We can offer all types of routine and type tests as per latest Standards under one roof. Our plants are equipped with following major testing facilities:",
    type: "section",
    testingFacilities: [
      "Impulse Generator to test transformers upto 200 MVA, 220 kV Class",
      "HT Capacitor Banks",
      "Motor Generator Sets",
      "Main Testing and Intermediate Testing Transformers",
      "SFRA Testing",
      "Partial Discharge Testing",
      "Noise Level Measurement",
      "Power Analyzer of 0.02% Accuracy",
      "Up-to-date Calibrated CT/PTs and Test instruments",
      "Oil Testing"
    ]
  }
];

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-content">
        {serviceData.map((section, index) => (
          <div key={index} className={`service-section ${section.type}`}>
            <h2>{section.title}</h2>
            {section.description && <p className="section-description">{section.description}</p>}
            
            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="subsection">
                <h3>{subsection.title}</h3>
                {subsection.description && <p>{subsection.description}</p>}
                {subsection.items && (
                  <ul>
                    {subsection.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {subsection.subDescription && <p>{subsection.subDescription}</p>}
                {subsection.subItems && (
                  <ul>
                    {subsection.subItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.equipment && (
              <div className="equipment-section">
                <h3>{section.equipment.title}</h3>
                <ul>
                  {section.equipment.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.additionalEquipment && (
              <div className="additional-equipment">
                <ul>
                  {section.additionalEquipment.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.testingFacilities && (
              <div className="testing-facilities">
                <ul>
                  {section.testingFacilities.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
