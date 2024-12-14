import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {
      const {user} = useAuth()
      const navigate = useNavigate()
      const handleAddJob = e => {
            e.preventDefault()
            const formData = new FormData(e.target)
            // console.log(formData.entries())
            const initialData = Object.fromEntries(formData.entries())
            console.log(initialData)
            const { min, max, currency, ...newJob } = initialData
            // console.log(newJob)
            newJob.salaryRange = { min, max, currency }
            newJob.requirements = newJob.requirements.split('\n')
            newJob.responsibilities = newJob.responsibilities.split('\n')
            console.log(newJob)
            fetch('http://localhost:5000/jobs', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newJob)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                              Swal.fire({
                                    title: "Good job!",
                                    text: "Job Has been added!",
                                    icon: "success"
                              });
                              navigate('/myPostJob')
                        }
                  })
      }
      return (
            <div>
                  <h2 className="text-3xl">Post a New Job</h2>
                  <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className=" bg-base-100 w-10/12 shadow-2xl">
                              <form onSubmit={handleAddJob} className="w-full card-body">
                                    {/* job title */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job Title</span>
                                          </label>
                                          <input type="text" name='title' placeholder="Job Title" className="input input-bordered w-full" required />
                                    </div>
                                    {/* Job Location */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job Location</span>
                                          </label>
                                          <input type="text" name='location' placeholder="Job Location" className="input input-bordered w-full" required />
                                    </div>
                                    {/* Job Type */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job Type</span>
                                          </label>
                                          <select defaultValue='Pick a Job Type' className="select select-ghost w-full">
                                                <option disabled>Pick a Job Type</option>
                                                <option>Full Time</option>
                                                <option>Part-Time</option>
                                                <option>Intern</option>
                                          </select>
                                    </div>
                                    {/* Job Category */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job Field</span>
                                          </label>
                                          <select defaultValue='Pick a Job Field' className="select select-ghost w-full">
                                                <option disabled >Pick a Job Field</option>
                                                <option>Engineering</option>
                                                <option>Marketing</option>
                                                <option>Finance</option>
                                                <option>Teaching</option>
                                          </select>
                                    </div>
                                    {/* salaryRange */}
                                    <label className="label">
                                          <span className="label-text mt-4"></span>
                                    </label>
                                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">salaryRange</span>
                                                </label>
                                                <input type="text" name='min' placeholder="min" className="input input-bordered w-full" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text"></span>
                                                </label>
                                                <input type="text" name='max' placeholder="max" className="input input-bordered w-full" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Currency</span>
                                                </label>
                                                <select defaultValue='Currency' className="select select-ghost w-full" name='currency'>
                                                      <option disabled  >Currency</option>
                                                      <option>BDT</option>
                                                      <option>USD</option>
                                                      <option>INR</option>
                                                      <option>EURO</option>
                                                </select>
                                          </div>

                                    </div>
                                    {/* job description */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job Description</span>
                                          </label>

                                          <textarea className="textarea textarea-ghost" placeholder="Job Description" name='description' required></textarea>
                                    </div>
                                    {/* company name */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">company name</span>
                                          </label>
                                          <input type="text" name='company' placeholder="company name" className="input input-bordered w-full" required />
                                    </div>
                                    {/* requirements */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job Requirements</span>
                                          </label>

                                          <textarea className="textarea textarea-ghost" placeholder="Put Each requirements in new line" name='requirements' required></textarea>
                                    </div>
                                    {/* responsibilities */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Job responsibilities</span>
                                          </label>

                                          <textarea className="textarea textarea-ghost" placeholder="Write Each responsibilities in new line" name='responsibilities' required></textarea>
                                    </div>
                                    {/* HR name */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">HR name</span>
                                          </label>
                                          <input type="text" name='hr_name' placeholder="HR name" className="input input-bordered w-full" required />
                                    </div>
                                    {/* HR email */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">HR Email</span>
                                          </label>
                                          <input type="text" defaultValue={user?.email} name='hr_email' placeholder="HR email" className="input input-bordered w-full" required />
                                    </div>
                                    {/* applicationDeadline */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">DeadLine</span>
                                          </label>
                                          <input type="date"  name='applicationDeadline' placeholder="Dead Line" className="input input-bordered w-full" required />
                                    </div>
                                    {/* company logo url */}
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Company Logo</span>
                                          </label>
                                          <input type="text" name='company_logo' placeholder="put  logo url" className="input input-bordered w-full" required />
                                    </div>
                                    {/* Submit button */}
                                    <div className="form-control mt-6">
                                          <button className="btn btn-primary w-full">Login</button>
                                    </div>
                              </form>
                        </div>
                  </div>


            </div>
      );
};

export default AddJob;