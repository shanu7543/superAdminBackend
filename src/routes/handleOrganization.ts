import { Router } from 'express';

import {getOrg}  from '../controllers/org';

const organizationRoute: Router = Router();

organizationRoute.get('/getorg', getOrg);


export default organizationRoute;
