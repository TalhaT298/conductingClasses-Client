import React from "react";

const Admission = () => {
  return (
    <div className="pt-20">
      <div className="w-4/6">
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
                <td>Practical Exam Time Schedule for Theatre Department</td>
                <td> </td>
                <td>2024-03-27</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Practical Exam Time Schedule for Music Department</td>
                <td></td>
                <td>2024-03-27</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Practical and Written Exam Notice For Fine Arts, Music, Theatre And English</td>
                <td></td>
                <td>2024-03-27</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td>Selected Candidates for English Written Examination</td>
                <td></td>
                <td>2024-03-13</td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>5</th>
                <td>Notice For Admission Result</td>
                <td></td>
                <td>2024-03-13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-2/6"></div>
    </div>
  );
};

export default Admission;
