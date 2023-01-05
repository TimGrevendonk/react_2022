import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import MockApi from "../apis/mock_api";

export default function Detail() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  const getDetails = async () => {
    if (id !== "0") {
      const result = await MockApi.getbyid(id);
      console.log(result.data);
      setCustomer(result.data);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  function handleSubmit(event) {
    if (customer.id) {
      MockApi.put(customer);
    } else {
      MockApi.post(customer);
    }
    event.preventDefault();
    console.log("submit event", event);
    console.log("customer", customer);

    navigate("/");
  }

  function handleFirstName(event) {
    console.log("firstname event", event.target.value);
    setCustomer({ ...customer, firstName: event.target.value });
  }

  function handleLastName(event) {
    console.log("latsname event", event.target.value);

    setCustomer({ ...customer, lastName: event.target.value });
  }

  function handleAgree(event) {
    console.log("agree event", !customer.iAgree);
    setCustomer({ ...customer, iAgree: !customer.iAgree });
  }

  // make controlled component of this !!!
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>firstName</label>
          <input
            value={customer.firstName}
            onChange={handleFirstName}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>lastName</label>
          <input
            value={customer.lastName}
            onChange={handleLastName}
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={customer.iAgree}
            onChange={handleAgree}
            label="I agree to the Terms and Conditions"
          />
        </Form.Field>
        <Button onClick={handleSubmit} type="button">
          {id !== "0" ? "Update" : "Add"}
        </Button>
      </Form>
    </div>
  );
}
