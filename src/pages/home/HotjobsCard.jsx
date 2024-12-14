
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HotjobsCard = ({ job }) => {
      const { title, company, company_logo, requirements,
            description, location, salaryRange, _id } = job
      return (
            <div className="card card-compact bg-base-100  shadow-xl">
                  <div className='flex gap-2 m-2'>
                        <div>
                              <figure>
                                    <img
                                          className='w-12'
                                          src={company_logo}
                                          alt="Shoes" />
                              </figure>
                        </div>
                        <div>
                              <h4 className='text-2xl '>{company}</h4>
                              <div className='flex items-center'>
                                    <FaLocationDot /><p className='ml-1'>{location}</p>
                              </div>
                        </div>
                  </div>
                  <div className="card-body">
                        <h2 className="card-title">{title}
                              <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <p>{description}</p>
                        <div className='flex gap-2 flex-wrap'>
                              {
                                    requirements.map((requirement, index) => (
                                          <p key={index}
                                                className='border rounded-md text-center px-2 hover:text-purple-950 hover:bg-gray-400'
                                          >
                                                {requirement}
                                          </p>
                                    ))
                              }

                        </div>
                        <div className="card-actions justify-end items-center mt-4">
                              <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                              <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default HotjobsCard;