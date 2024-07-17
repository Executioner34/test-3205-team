import { Router } from "express";
import routerContacts from './contacts/contacts.controller';

const router = Router();

router.use(routerContacts);

export default router;
