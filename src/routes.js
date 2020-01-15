import { Router } from 'express';
import DevController from './Controllers/DevController';
import SearchController from './Controllers/SearchController';

const routes = new Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:username', DevController.update);
routes.delete('/devs/:username', DevController.destroy);

routes.get('/search', SearchController.index);

export default routes;

