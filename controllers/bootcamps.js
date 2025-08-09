// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
export const getBoocamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: 'Show all bootcamps', hello: req.hello });
};

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
export const getBoocamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp ${req.params.id}` });
};

// @desc        Create new bootcamps
// @route       POST /api/v1/bootcamps/
// @access      Private
export const createBoocamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create new bootcamp' });
};

// @desc        Update new bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
export const updateBoocamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

// @desc        Delete new bootcamps
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
export const deleteBoocamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
