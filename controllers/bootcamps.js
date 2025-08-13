import Bootcamp from '../models/Bootcamp.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
export const getBoocamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
export const getBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(
      new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404)
    );
    // res.status(400).json({ success: false });
  }
};

// @desc        Create new bootcamps
// @route       POST /api/v1/bootcamps/
// @access      Private
export const createBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Update new bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
export const updateBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Delete new bootcamps
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
export const deleteBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
