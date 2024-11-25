import { Button, DateTimePicker, Nav, RichInput } from "components";

export function WriteNOtPage () {
    return(
        <>
          <Nav/>
           <div className="container">
            <h1>Escrever agora</h1>
            <form className="form">
              <label htmlFor="destinationName">Nome completo:</label>
              <input type="text" />
              <label htmlFor="destinationAddress">Email:</label>
              <input type="email" />
              <label htmlFor="dueDate">Data</label>
              <DateTimePicker/>
              <label htmlFor="subject">Assunto</label>
              <input type="text" />
              <label htmlFor="body">Mensagem</label>
              <RichInput/>
               
              <Button type='submit' variant="primary">Enviar</Button>
            </form>
           </div>
        </>

    )
}