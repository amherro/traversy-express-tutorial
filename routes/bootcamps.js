import express from 'express';
import {
  getBoocamps,
  getBoocamp,
  createBoocamp,
  updateBoocamp,
  deleteBoocamp,
} from '../controllers/bootcamps.js';

const router = express.Router();

router.route('/').get(getBoocamps).post(createBoocamp);
router.route('/:id').get(getBoocamp).put(updateBoocamp).delete(deleteBoocamp);

export default router;
