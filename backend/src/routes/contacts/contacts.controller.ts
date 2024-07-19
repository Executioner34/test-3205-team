import { Router, Request, Response } from 'express';
import { getContacts } from "./contacts.service";

const router = Router();

router
    .get('/contacts/',  async (req: Request, res: Response) => {
        const email = req.query.email as string;
        const number = Number(req.query.number) as number | undefined;

        if (!email) {
            return res.status(400).send({
                message: 'Email address is required',
            })
        }

        if (number !== undefined && isNaN(number)) {
            return res.status(400).send({
                message: 'Invalid number',
            })
        }

        try {
            const contacts = await getContacts(email, number);
            return res.status(200).json({
                data: contacts
            })
        } catch (e) {
            res.status(404).send('Error');
        }
    })

export default router;
