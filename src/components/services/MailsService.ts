import { ISendEMail } from "components/interfaces";
import { Api } from "components/providers"

const sendEmail = (data: ISendEMail) => Api.post('/api/v1/mails',data)

export const MailServices = {
    sendEmail

};