import { Form, Row } from "./style";

const FormArea = () => (
  <Form method="POST" action={import.meta.env.VITE_ENDPOINT}>
    <Row>
      <input type="text" name="name" placeholder="your name" required />
      <input type="email" name="email" placeholder="your email" required />
    </Row>
    <textarea name="message" placeholder="your message" required></textarea>
    <button type="submit">Submit</button>
  </Form>
);

export default FormArea;
