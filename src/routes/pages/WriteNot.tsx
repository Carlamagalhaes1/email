import { Button, DateTimePicker, Nav, RichInput } from "components";
import { FormProvider, useForm } from "react-hook-form";

export function WriteNOtPage() {
  const formMethods = useForm()
  const { register, handleSubmit } = formMethods;
  function onSubmit(values: any) {
    console.log(
      'lalalalal', values
    )

  }


  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever agora</h1>
        <FormProvider {...formMethods}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="destinationName">Nome completo:</label>
            <input {...register('destinationName')} type="text" />
            <label htmlFor="destinationAddress">Email:</label>
            <input {...register('destinationAddress')} type="email" />
            <label htmlFor="dueDate">Data</label>
            <DateTimePicker name="dueDate" />
            <label htmlFor="subject">Assunto</label>
            <input {...register('subjetc')} type="text" />
            <label htmlFor="body">Mensagem</label>
            <RichInput name="body" />

            <Button type='submit' variant="primary">Enviar</Button>
          </form>

        </FormProvider>


      </div>
    </>

  )
}