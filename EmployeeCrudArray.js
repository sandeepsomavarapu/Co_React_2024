import React from "react";
class EmployeeCrudArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      salary: "",
      dept: "",
      data: [
        { id: "1", name: "Niranjan", salary: "5000", dept: "IT" },
        { id: "2", name: "Ganesh", salary: "6000", dept: "QA" },
        { id: "3", name: "Rahul", salary: "4000", dept: "HR" },
      ],
      editing: false,
      currId: null,
    };
  }

  onChangeCtrl = (e) => {
    console.log(e);
    var cname = e.target.name;
    var cval = e.target.value;
    this.setState({ [cname]: cval });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { id, name, salary, dept, data, editing, currId } = this.state;
    if (editing) {
      const updatedData = data.map((emp) =>
        emp.id === currId ? { id, name, salary, dept } : emp
      );
      this.setState({
        data: updatedData,
        editing: false,
        currId: null,
      });
    } else {
      const newData = { id, name, salary, dept };
      this.setState({
        data: [...data, newData],
      });
    }
    this.setState({
      id: "",
      name: "",
      salary: "",
      dept: "",
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((emp) => emp.id !== id),
    }));
  };
  handleUpdate = (id) => {
    const empData = this.state.data.find((emp) => emp.id === id);
    this.setState({
      id: empData.id,
      name: empData.name,
      salary: empData.salary,
      dept: empData.dept,
      editing: true,
      currId: id,
    });
  };
  handleCancel = () => {
    this.setState({
      id: "",
      name: "",
      salary: "",
      dept: "",
    });
  };

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmit}>
          <h2>ADD NEW EMPLOYEE: </h2>
          <table className="table table-bordered">
            <tr>
              <td>
                <span className="badge">ID</span>
              </td>
              <td>
                <input
                  type="text"
                  required="true"
                  name="id"
                  value={this.state.id}
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className="badge">NAME</span>
              </td>
              <td>
                <input
                  type="text"
                  required="true"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className="badge">SALARY</span>
              </td>
              <td>
                <input
                  type="text"
                  required="true"
                  name="salary"
                  value={this.state.salary}
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className="badge">DEPT</span>
              </td>
              <td>
                <input
                  type="text"
                  required="true"
                  name="dept"
                  value={this.state.dept}
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" className="btn btn-info" value="Send" />
              </td>
              <td>
                <input
                  type="reset"
                  value="Cancel"
                  onClick={this.handleCancel}
                />
              </td>
            </tr>
          </table>
        </form>
        <br />
        <div className="alert alert-danger">{this.state.fin}</div>
        <h2>ALL EMPLOYEES DETAILS: </h2>
        <div>
          <table border="2">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
                <th>DEPT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.dept}</td>
                  <td>
                    <button onClick={() => this.handleUpdate(emp.id)}>
                      UPDATE
                    </button>
                    <button onClick={() => this.handleDelete(emp.id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeCrudArray;