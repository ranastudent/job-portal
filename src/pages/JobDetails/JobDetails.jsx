import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
      const {_id,title, company, applicationDeadline} = useLoaderData()
      
      return (
            <div className='m-12 '>
                 <h2 className='text-3xl'>Job Details for : {title}</h2>
                 <p>Apply for: {company}</p>
                 <p>DeadLine: {applicationDeadline}</p>
                 <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
            </div>
      );
};

export default JobDetails;