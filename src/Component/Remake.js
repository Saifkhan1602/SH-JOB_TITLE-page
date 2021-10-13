import React from "react";
const Remake = () => {
  return (
    <>
      <div className="main_Jobtle">
        <div className="logobox_Jobtle">
          <div>
            <div className="logo">
              <img
                src="https://smoothhiring.com/wp-content/uploads/2021/03/Smooth-hiring-logo-001-02.png"
                width="200"
                height="40"
                alt="logo"
              />
            </div>
          </div>
          <div className="Jobtle_list">
            <ol>
              <li>About Your Company</li>
              <li>Job Title</li>
              <li>Job Details</li>
              <li>Preview</li>
            </ol>
          </div>
          <div className="Jobtle_leftbtns">
            <div>
              <button className="Jobtle_Emailbtn">Email Us</button>
              <div className="lftmail">
                <div>
                  <i class="fas fa-envelope"></i> help@
                </div>
                <a href="https://www.smoothhiring.com">smoothhiring.com</a>
              </div>
            </div>
            <div>
              <button className="Jobtle_Supportbtn">Contact Us</button>
              <div className="lftphone">
                <i class="fas fa-phone-alt"></i>1 (877) 789-8767
              </div>
            </div>
          </div>
        </div>

        <div className="NavContainer">
          <nav className="navbar_Jobtle">
            <div className="navlist">
              <ul className="list">
                <li>
                  <a href="#">
                    <i class="fas fa-dollar-sign"></i> Pricing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-cog"></i> Settings
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-question-circle"></i> Help
                  </a>
                </li>
                <li className="Logout">
                  <a href="#">
                    <i class="fas fa-sign-out-alt"></i> Log out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="whole">
            <div className="Jobtle_btns">
              <button className="Jobtle_jobbtn">My Jobs</button>
              <button className="CrtNjob">Create New Job</button>
            </div>
            <div className="Jobtle">
              <h2>Job Title</h2>
              <div className="Jobtle_p">
                <p>
                  Think about your job title as the headline of an ad to atract
                  candidates.
                </p>
              </div>

              <form className="Jobtleform">
                <div className="Jobtlefrm">
                  <div>
                    <label for="role">Role </label>
                    <input type="text" id="role" required />
                  </div>
                  <div>
                    <label for="job_ttl">Job Title </label>
                    <input type="text" id="job_ttl" required />
                  </div>
                  <div>
                    <label for="hr_mngr">Hiring Manager </label>
                    <input type="text" id="hr_mngr" required />
                  </div>

                  <div className="job_lctn">
                    <label for="job_loctn">Job Location </label>
                    <input
                      type="text"
                      id="job_loctn"
                      className="jblctn1"
                      required
                    />
                    <input type="text" className="jblctn2" required />
                  </div>

                  <div className="Zip_code">
                    <label for="zip">Zip Code </label>
                    <input type="number" id="zip" />
                  </div>

                  <div className="Nbrhd">
                    <label for="nbrhd">
                      Neighbourhood <span>(optional)</span>
                    </label>
                    <input type="text" id="nbrhd" />
                  </div>
                  <div className="Exprnce">
                    <label for="exprnc">Experience Level </label>
                    <div className="Radios">
                      <div className="exp_rdio">
                        <input
                          type="radio"
                          id="exprnc"
                          value="Experienced"
                          name="exprnce"
                        />
                        <label for="exprnc">Experienced</label>
                      </div>
                      <div className="entr_rdio">
                        <input
                          type="radio"
                          id="entry"
                          value="Entry Level"
                          name="exprnce"
                        />
                        <label for="entry">Entry Level</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="emplmnt">Employment Status </label>
                    <input type="text" id="emplmnt" required />
                  </div>
                </div>
              </form>
              <div className="Prev_nxt">
                <button className="prev_btn">Previous</button>
                <button className="nxt_btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Remake;
