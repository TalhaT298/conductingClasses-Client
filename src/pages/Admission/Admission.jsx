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
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
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
