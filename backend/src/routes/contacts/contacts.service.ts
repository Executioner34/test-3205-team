import { IContact } from "./contacts.model";
import contacts from '../../mock/contacts.json';

const getContacts = (email: string, number?: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const contact: IContact[] = contacts.filter((item: IContact) => {
                if (number) return item.number === number && item.email === email;
                return item.email === email;
            });
            contact ? resolve(contact) : reject(contact);
        }, 5000)
    })
}

export { getContacts };
