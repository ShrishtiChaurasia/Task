import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { data } from "./Data.jsx";
import "./form.css";

function Filterform() {
  console.log(data);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="app ">
        <Container>
          <div className="text-center mt-8">FORM FILTER</div>
          <Form className="form-inline">
            <InputGroup className="my-3">
              <Form.Control
                placeholder="search data"
                onChange={(e) => setSearch(e.target.value)}
                className="search"
              />
            </InputGroup>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(search);
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default Filterform;
