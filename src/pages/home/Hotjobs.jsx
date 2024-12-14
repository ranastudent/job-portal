import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import HotjobsCard from './HotjobsCard';

const Hotjobs = () => {
      const [jobs, setJobs] = useState([])
      useEffect(() => { fetch('http://localhost:5000/jobs') .then(res => res.json()) .then(data => { setJobs(data); }) .catch(error => console.error('Error fetching jobs:', error)); }, []);
      return (
            <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                        {
                              jobs.map(job =><HotjobsCard key={job._id} job={job}></HotjobsCard> )
                        }
                  </div>
            </div>
      );
};

export default Hotjobs;