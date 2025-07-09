/** @format */

// src/components/Certificates.jsx
import React from "react";
import EduHeading from "./EduHeading";
import { FaFilePdf } from "react-icons/fa";
export default function Certificates({ data }) {
  const { sectionHeading, allCertificates } = data;

  return (
    <section className="section gray-bg">
      <div className="container">
        <EduHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-3">
          {allCertificates?.map((item, index) => (
            <div
              className="col-12"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <div className="row gy-4">
                  <div className="col-md-4 col-lg-3">
                    <div className="ex-leftside">
                      <h4>{item.title}</h4>
                      <span>{item.issuer}</span>
                      <p>{item.duration}</p>
                      <label>{item.type}</label>
                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Certificate"
                          style={{
                            color: "#d9534f",
                            marginLeft: "8px",
                            fontSize: "1rem",
                          }}
                        >
                          <FaFilePdf />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <div className="ex-right">
                      <h5>{item.label}</h5>
                      <p className="m-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
