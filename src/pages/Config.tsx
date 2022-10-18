import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { List } from "../components/List";

export function Config() {
  return (
    <Card>
      <section>
        <h2>Let's start</h2>
        <Form />
        <List />
        <Footer />
      </section>
    </Card>
  )
}