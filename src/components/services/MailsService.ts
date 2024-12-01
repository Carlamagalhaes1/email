import { ISendEMail } from "components/interfaces";
import { Api } from "components/providers"

const sendEmail = (data: ISendEMail) => Api.post('http://localhost:3000/data',data)

export const MailServices = {
    sendEmail

};