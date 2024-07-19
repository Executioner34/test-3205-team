import { defineStore } from "pinia";
import api from "../api/api.ts";

interface IContact {
    email: string;
    number?: number;
}

interface IFetchContacts {
    data: IContact[]
}

export const useContacts = defineStore('contacts', {
    state: () => {
        return {
            contacts: [] as IContact[],
        }
    },

    actions: {
        async getContact(options: IContact) {
            const { email, number } = options;

            const { data }: IFetchContacts = await api.get(`/contacts/?email=${email}&number=${number ? number.toString() : ''}`);
            this.contacts = data
        },
    }
})
