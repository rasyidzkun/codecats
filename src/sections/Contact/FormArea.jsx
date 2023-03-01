import { Form, Row } from "./style";

const FormArea = () => (
  <Form method="POST" action={import.meta.env.VITE_ENDPOINT}>
    <Row>
      <input type="text" name="name" placeholder="your name" />
      <input type="email" name="email" placeholder="your email" />
    </Row>
    <textarea name="message" placeholder="your message"></textarea>
    <button type="submit">Submit</button>
  </Form>
);

export default FormArea;
