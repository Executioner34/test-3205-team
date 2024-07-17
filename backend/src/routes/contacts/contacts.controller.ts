import { Router, Request, Response } from 'express';
import { getContact } from "./contacts.service";
import { IContact } from "./contacts.model";

const router = Router();

router
    .get('/contacts',  async (req: Request, res: Response) => {
        const { email, number }: IContact = req.body;

        if (!email) {
            return res.status(400).send({
                message: 'Email address is required',
            })
        }

        try {
            const contact = await getContact(email, number);
            res.json(contact);
        } catch (e) {
            console.error(e);
            res.status(404).send('Not Found');
        }
    })

export default router;
