import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SideForm = (props) => {
  return (
    <div className="border rounded-left text-center">
      <h5 className="bg-primary w-100 p-2 text-white">Narrow your search</h5>
    <Form className="p-3">
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="e.g $demouser10" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Children</option>
          <option>Adult</option>
          <option>Teens</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">States</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Lagos</option>
          <option>Abia</option>
          <option>Kwara</option>
          <option>Kano</option>
          <option>Abuja</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Private lessons</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Yes</option>
          <option>No</option>
        </Input>
      </FormGroup>
      <Button color="primary">Submit</Button>
      </Form>
      </div>
  );
}

export default SideForm;