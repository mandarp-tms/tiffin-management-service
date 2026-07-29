const { TiffinCenter } = require('../models');

exports.fetchTiffinCentersDropdown = async () => {
  const tiffinCenters = await TiffinCenter.findAll({
    where: { 
      isActive: true, 
      isDeleted: false,
      status: 'active' 
    },
    attributes: ['id', 'name'], // Fetch only required fields
    order: [['name', 'ASC']],   // Sort alphabetically
  });
  
  return tiffinCenters;
};
