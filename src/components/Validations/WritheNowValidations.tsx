import * as yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup'

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Preeemcha o nome completo'),
  destinationAddress: yup.string().email('Preeencha o email válido').required('Preeencha o email válido'),
  dueDate: yup.string().required('Preencha uma data'), // caso 'dueDate' seja uma string
  subject: yup.string().required('Preencha o assunto'),
  body: yup.string().required('Preencha o corpo da mensagem'),
});

export const WriteNowResolver = yupResolver (WriteNowValidationSchema);
