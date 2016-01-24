'use strict';

// Parses a string and returns a json object
exports.parse = function(req, res) {
  let fileSize = req.file.size;
  return res.json({fileSize});
};
