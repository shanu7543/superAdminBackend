import { Router } from 'express';

import { getVidychat } from '../controllers/vidychats';

const vidyChatRoute: Router = Router();


vidyChatRoute.get('/getvidychat', getVidychat);

export default vidyChatRoute;
