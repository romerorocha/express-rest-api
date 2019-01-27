import { getMessage, getMessages, addMessage } from '../model/messages';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(getMessages());
});

router.get('/:messageId', (req, res) => {
  return res.send(getMessage(req.params.messageId));
});

router.post('/', (req, res) => {
  return res.send(addMessage(req.body.text));
});

export default router;
