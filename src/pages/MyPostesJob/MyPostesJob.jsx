import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyPostesJob = () => {
      const [jobs, setJobs] = useState([])
      const { user } = useAuth()
      useEffect(() => {
            fetch(`http://localhost:5000/jobs?email=${user.email}`)
                  .then(res => res.json())
                  .then(data => {
                        setJobs(data)
                  })

      }, [user.email])
      return (
            <div>
                  <h2>My Post Job: {jobs.length}</h2>
                  <div className="overflow-x-auto">
                        <table className="table table-zebra">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Job Title</th>
                                          <th>DeadLine</th>
                                          <th>Application Count</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          jobs.map((job, index) => (
                                                <tr key={index}>
                                                      <th>{index + 1}</th>
                                                      <td>{job.title}</td>
                                                      <td>{job.applicationDeadline}</td>
                                                      <td>{job.applicationCount}</td>
                                                </tr>
                                          ))
                                    }
                              </tbody>
                        </table>
                  </div>

            </div>
      );
};

export default MyPostesJob;