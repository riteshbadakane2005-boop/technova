import { useEffect, useState } from "react";

export default function Admin() {

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/members")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

  }, []);

  return (
    <div className="admin-page">

      <div className="admin-header">
        <div>
          <p className="admin-label">TECHNOVA</p>
          <h1>Admin Dashboard</h1>
        </div>

        <div className="member-count">
          {members.length} Members
        </div>
      </div>

      {loading ? (
        <p className="admin-loading">
          Loading members...
        </p>
      ) : members.length === 0 ? (
        <p className="admin-loading">
          No members registered yet.
        </p>
      ) : (

        <div className="members-table-wrapper">

          <table className="members-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Technology</th>
                <th>Message</th>
              </tr>
            </thead>

            <tbody>

              {members.map((member) => (

                <tr key={member.id}>

                  <td>{member.id}</td>

                  <td>{member.name}</td>

                  <td>{member.email}</td>

                  <td>{member.phone}</td>

                  <td>
                    <span className="technology-badge">
                      {member.technology}
                    </span>
                  </td>

                  <td>{member.message}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}