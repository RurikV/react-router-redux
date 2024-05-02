import { FC } from "react";
import { Button, Form } from "react-bootstrap";

export const RegisterPage: FC = () => {
    return <div style={{ width: "300px", margin: "auto" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Button variant="success" type="submit">Register</Button>
        </Form>
    </div>
};
