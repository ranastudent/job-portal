
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const JobApply = () => {
      const { id } = useParams()
      const { user } = useAuth()
      const navigate = useNavigate()
      // console.log(id, user)
      const submitJobApplication = e => {
            e.preventDefault()
            const form = e.target;
            const linked = form.linkedIn.value
            const github = form.github.value
            const resume = form.resume.value
            // console.log(linked, github, resume)

            const jobApplication = {
                  job_id: id,
                  applicant_email: user.email,
                  linked,
                  github,
                  resume
            }
            fetch('http://localhost:5000/job-application', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(jobApplication)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                              Swal.fire({
                                    title: "Good job!",
                                    text: "You clicked the button!",
                                    icon: "success"
                              });
                              navigate('/myApplications')
                        }
                  })
      }
      return (

            <div className="card bg-base-100 w-full  shadow-2xl text-center items-center">
                  <form onSubmit={submitJobApplication} className="">
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">LinkedIn Url</span>
                              </label>
                              <input type="url" name='linkedIn' placeholder="LinkedIn Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">GitHub Url</span>
                              </label>
                              <input type="url" name='github' placeholder="GitHub Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Resume Url</span>
                              </label>
                              <input type="url" name='resume' placeholder="Resume Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                              <button className="btn btn-primary">Apply</button>
                        </div>
                  </form>
            </div>


      );
};

export default JobApply;