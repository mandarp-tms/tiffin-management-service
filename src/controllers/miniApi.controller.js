const miniApiService = require('../services/miniApi.service');

exports.getTiffinCentersDropdown = async (req, res, next) => {
  try {
    const tiffinCenters = await miniApiService.fetchTiffinCentersDropdown();

    res.status(200).json({
      status: 'success',
      data: tiffinCenters
    });
  } catch (error) {
    next(error);
  }
};
