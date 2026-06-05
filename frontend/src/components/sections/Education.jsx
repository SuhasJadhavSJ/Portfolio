import {
  education,
  certifications,
} from "../../data/data";

import SectionHeader from "../common/SectionHeader";
import EducationCard from "../cards/EducationCard";
import CertificationCard from "../cards/CertificationCard";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="05"
          title="education_&_certs"
          subtitle="// academic background & certifications"
        />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Education Timeline */}
          <div>
            <h3 className="font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-6">
              // education
            </h3>

            <div className="relative pl-8 border-l-2 border-cyber-border space-y-8">
              {education.map((item, index) => (
                <EducationCard
                  key={index}
                  education={item}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-6">
              // certifications
            </h3>

            <div className="space-y-3">
              {certifications.map(
                (certification, index) => (
                  <CertificationCard
                    key={index}
                    cert={certification}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}