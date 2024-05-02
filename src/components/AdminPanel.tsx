import { FC, useState } from "react";
import { Badge, Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { homePageSlice } from "../store/slices/HomePage";


export const AdminPanel: FC = () => {
    const [validated, setValidated] = useState(false);
    const [isFeedAddedSuccess, setIsFeedAddedSuccess] = useState(false);

    const dispatch = useDispatch();

    const handlerOnSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        setValidated(true);
        setIsFeedAddedSuccess(false);

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            dispatch(homePageSlice.actions.addNewsItem({
                id: Math.floor(Math.random() * 9999),
                group: form.formGroup.value,
                url: form.formUrl.value,
                text: form.formPreambule.value
            }))
            form.reset();
            setValidated(false);
            setIsFeedAddedSuccess(true);
        }

    }

    return (
        <div className="admin-panel">
            <h4>Add News</h4>
            {isFeedAddedSuccess && <div style={{ textAlign: "center" }}><Badge bg="success">News added successfully</Badge></div>}
            <Card style={{ padding: '20px', marginTop: "20px" }}>
                <Form noValidate onSubmit={handlerOnSubmit} validated={validated}>
                    <Form.Group className="mb-3" controlId="formGroup">
                        <Form.Label>News Group</Form.Label>
                        <Form.Control type="text" readOnly value="Funny news from around the world" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUrl">
                        <Form.Label>URL for full description</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            The field cannot be empty
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPreambule">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            The field cannot be empty
                        </Form.Control.Feedback>

                    </Form.Group>

                    <Button variant="success" type="submit">Add</Button>
                </Form>
            </Card>
        </div>
    );

};
