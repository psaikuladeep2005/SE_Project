import axios from "axios";
import { useEffect, useState } from "react";

function Display() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    dept: ""
  });

  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    age: "",
    dept: ""
  });

  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  const handleAddChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/students", formData)
      .then(() => {
        alert("✅ Student Added");
        fetchStudents();
        setFormData({ id: "", name: "", age: "", dept: "" });
      })
      .catch(err => alert("❌ ID Already Exists"));
  };

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/students/${updateData.id}`, updateData)
      .then(() => {
        alert("✅ Student Updated");
        fetchStudents();
        setUpdateData({ id: "", name: "", age: "", dept: "" });
      })
      .catch(err => alert("❌ Invalid ID"));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/students/${deleteId}`)
      .then(() => {
        alert("🗑️ Student Deleted");
        fetchStudents();
        setDeleteId("");
      })
      .catch(err => alert("❌ Invalid ID"));
  };

  return (
    <div style={{ padding: "20px" }}>
      
      {/* ADD STUDENT */}
      <h2>Add Student</h2>
      <form onSubmit={handleAddSubmit}>
        <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleAddChange} required /><br/><br/>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleAddChange} required /><br/><br/>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleAddChange} required /><br/><br/>
        <input type="text" name="dept" placeholder="Department" value={formData.dept} onChange={handleAddChange} required /><br/><br/>
        <button type="submit">Add Student</button>
      </form>

      <hr />

      {/* UPDATE STUDENT */}
      <h2>Update Student</h2>
      <input type="text" name="id" placeholder="Student ID" value={updateData.id} onChange={handleUpdateChange} required /><br/><br/>
      <input type="text" name="name" placeholder="New Name" value={updateData.name} onChange={handleUpdateChange} /><br/><br/>
      <input type="number" name="age" placeholder="New Age" value={updateData.age} onChange={handleUpdateChange} /><br/><br/>
      <input type="text" name="dept" placeholder="New Dept" value={updateData.dept} onChange={handleUpdateChange} /><br/><br/>
      <button onClick={handleUpdate}>Update Student</button>

      <hr />

      {/* DELETE STUDENT */}
      <h2>Delete Student</h2>
      <input type="text" placeholder="Student ID" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} /><br/><br/>
      <button onClick={handleDelete}>Delete Student</button>

      <hr />

      {/* TABLE */}
      <h2>Student List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th><th>Dept</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s._id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;

