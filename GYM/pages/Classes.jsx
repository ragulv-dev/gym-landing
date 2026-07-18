import React from "react";

const Classes = () => {
  return (
    <section id="classes" className="container">
      <h2 className="section-title">Weekly Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Day</th>
            <th>Time</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yoga Flow</td>
            <td>Monday</td>
            <td>6:00 PM - 7:00 PM</td>
            <td>Anna</td>
          </tr>
          <tr>
            <td>HIIT</td>
            <td>Tuesday</td>
            <td>7:00 AM - 7:45 AM</td>
            <td>Mike</td>
          </tr>
          <tr>
            <td>Spin Cycle</td>
            <td>Thursday</td>
            <td>6:30 PM - 7:30 PM</td>
            <td>Jessica</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Classes;
