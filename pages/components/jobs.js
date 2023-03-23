import React from "react";

export default function Jobs() {
  return (
    <>

      <div className="pt-20">
        {/* ***************** SECTION ==> 1 **************** */}

        <div
          className="sm:flex sm:items-center text-center py-20"
          style={{ background: "#f6f6f6" }}
        >
          <div className="sm:flex-auto">
            <h1 className="text-3xl mb-10 font-bold text-gray-900">
              Bookkeeping Associate - Future Opportunities
            </h1>
            <a href="../careers" className="pt-20 text-sm text-gray-700">
              ← All Job Openings
            </a>
          </div>
        </div>

        {/* ***************** SECTION ==> 2 **************** */}

        <div className=" pt-5 items-center justify-center h-auto  bg-fixed bg-center bg-cover bg-white ">
          <div className=" max-w-2xl mx-auto lg:flex-auto lg:py-10  px-10 rounded-lg  ">
            {/* About the job */}
            <div>
              <h2 className="text-3xl  font-bold tracking-tight">
                About the job
              </h2>
              <h3 className="mt-3">Job Description</h3>
              <p className="mt-3">
                Interested Candidates can Fill out this Form : us :
              </p>
              <p className="mt-5 text-1xl leading-8">
                We are a Government of India recognized Bootstrapped Startup in
                the field of Accounting with HQ in Guntur functioning with an
                ambitious plan of Pan-India expansion and an Aim of "Empowering
                SMEs, Assisting Auditors" by Fulfilling their Accounting +
                Compliance+ MIS Requirements. Within the Span of 2 Years from
                its inception, We were able to serve 500+ clients from 25+ types
                of industries spread across 3 states (AP, TS & Ka) & 65+
                districts with our 90+ Staff from Technology & Accounting
                Domains.
              </p>
            </div>

            {/* Roles & Responsibilities */}
            <div className="mt-10">
              <p className="font-semibold">Roles & Responsibilities</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>
                  {" "}
                  Research, Create, Design & Implement New Technology based
                  Applications which will Fulfill Organization's Aspirations as
                  well as the Customer's Requirements & Expectations.
                </li>
                <li>
                  Assess & Modify Existing Applications(if required) to Provide
                  user-friendly experience to customers.
                </li>
                <li>
                  Monitor KPIs and IT budgets to assess technological
                  performance parameters like Reliability, functionality,
                  efficiency, etc. from Customers' & Companies' Perspectives.
                  Make changes wherever necessary.
                </li>
                <li>Act as a Mentor to your Team & Guide to the Board.</li>
                <li>
                  Execute any other work required for the company from Time to
                  Time to ensure a smooth flow of overall functioning.
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <p className="font-semibold">Required Qualifications</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>Graduation from IITs/IIITs/NITs. </li>
                <li>
                  In-depth knowledge of web & mobile systems architecture,
                  design, and development.
                </li>
              </ul>
            </div>

            {/* Preferred Qualifications */}

            <div className="mt-10">
              <p className="font-semibold">Preferred Qualifications</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>
                  Exposure to MVC Architecture, ASP .NET Applications,
                  MSSQL/MySQL, jQuery, Mobile Applications (Android & IOS), and
                  advanced technologies.
                </li>
                <li>
                  Experience in Handling a Team of a Minimum of 10 Members.
                </li>
                <li>
                  Prior experience in co-founding startups/ working in
                  early-stage start-ups.
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="mt-10">
              <p className="font-semibold">What We Offer</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>
                  Opportunity to Learn and Experiment with Futuristic
                  Technologies like AI, ML, IOT, OCR, etc to disrupt Accounting
                  Field with Novel Solutions.
                </li>
                <li>
                  Strong focus on a result-oriented but fun work culture that
                  values each one's uniqueness!
                </li>
              </ul>
            </div>
            <div className="my-10">
              {" "}
              <hr />
            </div>
            <div className="mt-10  items-center justify-center gap-x-6 lg:justify-start">
            
              <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl  bg-transparent hover:bg-blue-900 text-blue-900 font-medium text-base hover:text-white  border border-blue-900 hover:border-transparent rounded">
              <a href="http://bookxpert.co/"> Apply Now</a>
              </button>
            </div>
          </div>

          <div className="" style={{ background: "#e4efef" }}>
            <div className="max-w-2xl mx-auto lg:flex-auto lg:py-10  px-10 rounded-lg  ">
              {/* About the job */}
              <div className="text-center">
                <h2 className="text-3xl  font-bold tracking-tight">
                  Looking for something different?
                </h2>
                <p className="mt-3 mb-5">Take a look at what else is open.</p>
                <a href="../careers" className="pt-10 text-sm text-gray-700">
                  ← All Job Openings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
