
import express from 'express';
import { 
    addEvent,
    delEvent,
    getEvent,
    getAllEvents,
    modifyEvent,
    getPublicEvent
} from '../controllers/eventController';
import { authenticateSession } from '../middleware/auth';

const router = express.Router();

router.get('/event/:eventId', authenticateSession,getEvent);
router.get('/public/:eventId',getPublicEvent);
router.post('/addevent/',authenticateSession,addEvent);
router.get('/getall/',authenticateSession,getAllEvents);
// router.post('/event/:eventId/delete', delEvent);
// router.post('/event/:eventId/update', modifyEvent);

export default router; 


