import { Form, Submit, SubmitHandler, TextAreaField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  input: string
}

const PromptPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Prompt" description="Prompt page" />

      <h1>PromptPage</h1>
      <p>
        <Link to={routes.prompt()}>Prompt</Link>
      </p>
      <Form onSubmit={onSubmit}>
        <TextAreaField name="input" />
        <Submit>Submit</Submit>
      </Form>
    </>
  )
}

export default PromptPage
