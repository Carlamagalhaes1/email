import { useState } from "react";
import { Button, DateTimePicker, Nav, RichInput } from "components";
import { IWriteNowForm } from "components/interfaces";
import { MailServices } from "components/services";
import { WriteNowResolver } from "components/Validations";
import { FormProvider, useForm } from "react-hook-form";

export function WriteNowPage() {
  const [successMessage, setSuccessMessage] = useState(""); // Estado para a mensagem de sucesso

  const formMethods = useForm<IWriteNowForm>({ resolver: WriteNowResolver });
  const { formState: { errors }, register, handleSubmit } = formMethods;

  async function onSubmit(values: IWriteNowForm) {
    try {
      const { status, data } = await MailServices.sendEmail(values);
      console.log("status", status); 
      if (status === 201) {
        setSuccessMessage("Os dados foram enviados com sucesso!");
        setTimeout(() => setSuccessMessage(""), 5000); 
      } else {
        setSuccessMessage("Falha no envio. Tente novamente.");
        setTimeout(() => setSuccessMessage(""), 5000); 
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setSuccessMessage("Erro ao enviar, tente novamente.");
      setTimeout(() => setSuccessMessage(""), 5000); 
    }
  }


  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever agora</h1>


        {successMessage && (
          <p className="mt-4 text-center text-green-600 bg-green-100 border border-green-400 rounded-lg p-2">
            {successMessage}
          </p>
        )}

        <FormProvider {...formMethods}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="destinationName">Nome completo:</label>
            <input {...register("destinationName")} type="text" />
            {errors?.destinationName?.message && (
              <p className="error-text">{errors?.destinationName?.message}</p>
            )}

            <label htmlFor="destinationAddress">Email:</label>
            {errors?.destinationAddress?.message && (
              <p className="error-text">{errors?.destinationAddress?.message}</p>
            )}
            <input {...register("destinationAddress")} type="email" />

            <label htmlFor="dueDate">Data</label>
            <DateTimePicker name="dueDate" />
            {errors?.dueDate?.message && (
              <p className="error-text">{errors?.dueDate?.message}</p>
            )}

            <label htmlFor="subject">Assunto</label>
            {errors?.subject?.message && (
              <p className="error-text">{errors?.subject?.message}</p>
            )}
            <input {...register("subject")} type="text" />

            <label htmlFor="body">Mensagem</label>
            <RichInput name="body" />
            {errors?.body?.message && (
              <p className="error-text">{errors?.body?.message}</p>
            )}

            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
