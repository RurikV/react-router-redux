import { FC } from "react";
import { Button, Form } from "react-bootstrap";

export const LoginPage: FC = () => {
    return <div style={{ width: "300px", margin: "auto" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="success" type="submit">Log In</Button>
        </Form>
    </div>
};
