import { getUser, getUsers } from '../model/users';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(getUsers());
});

router.get('/:userId', (req, res) => {
  return res.send(getUser(req.params.userId));
});

router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

router.put('/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete('/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

export default router;
