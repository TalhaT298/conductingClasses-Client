import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="pt-40 flex">
      <div className="w-4/6">
        <div className="font-serif text-center">
          <p className="text-2xl">Admission & Routine 2023-24</p>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Notice</th>
                <th></th>
                <th>Published Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <Link to="">
                    Practical Exam Time Schedule for Theatre Department
                  </Link>
                </td>
                <td> </td>
                <td>2024-03-27</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>
                  <Link to="">
                    Practical Exam Time Schedule for Music Department
                  </Link>
                </td>
                <td></td>
                <td>2024-03-27</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>
                  <Link to="">
                    Practical and Written Exam Notice For Fine Arts, Music,
                    Theatre And English
                  </Link>
                </td>
                <td></td>
                <td>2024-03-27</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td>
                  <Link to="">
                    Selected Candidates for English Written Examination
                  </Link>
                </td>
                <td></td>
                <td>2024-03-13</td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>5</th>
                <td>
                  <Link to="">Notice For Admission Result</Link>
                </td>
                <td></td>
                <td>2024-03-13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-2/6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">Undergraduate Application 2023-24</h2>
            <p>Online Application & Result</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Final Application Guideline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
