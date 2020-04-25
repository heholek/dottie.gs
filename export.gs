/**
 * lib
 * @returns {DotmitizerLib}
 */
function lib() {
  return Dotmitizer;
}


/**
 * To convert manually per string use
 * @param {Object} obj
 * @param {String} path
 * @param {Any} value
 * @returns {Object}
 */
function set(obj, path, value) {
  return Dotmitizer.set({path, value, obj});
}


/**
 * Picks a value from the object without removing it. Returns null if not present.
 * @param {Object} obj
 * @param {String} path
 * @return {Any}
 */
function get(obj, path) {
  return Dotmitizer.get({path, obj});
}


/**
 * Move a property within one object to another location. In-place operation, returns obj. If sourcePath is undefined, nothing changed
 * @param {Object} obj
 * @param {String} sourcePath
 * @param {String} destPath
 * @return {Object}
 */
function move(obj, sourcePath, destPath) {
  return Dotmitizer.move({sourcePath, destPath, obj})
}


/**
 * Copy property from one object to another object. If sourcePath is undefined, nothing changed
 * @param {Object} sourceObject
 * @param {String} sourcePath
 * @param {Object} destObject 
 * @param {String} destPath
 * @returns {Object}
 */
function copy (sourceObject, sourcePath, destObject, destPath) {
  return Dotmitizer.copy({sourcePath, destPath, sourceObject, destObject});
}


/**
 * Transfer property from one object to another. Removes from sourceObject. If sourcePath is undefined, nothing happens
 * @param {Object} sourceObject
 * @param {String} sourcePath
 * @param {Object} destObject
 * @param {String} destPath
 * @return {Object}
 */
function transfer (source, sourcePath, target, destPath) {
  return Dotmitizer.transfer({sourcePath, destPath, source, target});
}


/**
 * Converts an object with dotted-key/value pairs to it's expanded/normal version
 * @param {Object} obj
 * @return {Object}
 */
function expand (obj) {
  return Dotmitizer.expand({obj});
}


/** 
 * Delete a value using dot notation
 * @param {Object} obj
 * @param {String} path
 */
function delete_(obj, path) {
  return Dotmitizer.delete_({obj, path});
}


/** 
 * Remove a value using dot notation (and keep array indexes)
 * @param {Object} obj
 * @param {String} path
 * @return {Any}
 */
function remove(obj, path) {
  return Dotmitizer.remove({obj, path});
}


/** 
 * Delete a value using dot notation (and adjust array indexes)
 * @param {Object} obj 
 * @param {Object} path
 * @return {Object}
 */
function delete_(obj, path) {
  return Dotmitizer.delete_({obj, path});
}


/**
 * Transform properties
 * @param {Object} recipe
 * @param {Object} source
 * return {Object}
 */
function transform(source, recipe) {
  return Dotmitizer.transform({recipe, source});
}


/** 
 * Convert object to dotted-key/value pair
 * @param {Object} obj
 * @return {Object}
 */ 
function dot(obj) {
  return Dotmitizer.dot({obj});
}


/**
 * Convert an array of jsons to 2d array
 * @param {Object[]} jsons
 * @return {Array[]}
 */
function jsonsToRows (jsons) {
  return Dotmitizer.jsonsToRows({jsons});
}
var jsonsTo2dArray = jsonsToRows;


/**
 * 
 * @param {Array[]} rows
 * @return {Object[]}
 */
function rowsToJsons(rows) {
  return Dotmitizer.rowsToJsons({rows});
}
