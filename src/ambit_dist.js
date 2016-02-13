// This content is released under the MIT License, http://opensource.org/licenses/MIT.
// See LICENSE for more details.

/**
 * Main container of the ambit.js library.
 * 
 * @namespace
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Egon Willighagen
 */
var Ambit = Ambit || {};

/**
 * General callback for any ambit.js API call.
 *
 * @callback requestCallback
 * @param {Boolean} success - True or False, indicating the outcome of the API call
 * @param {Number} status - HTTP status code returned by the server
 * @param {string} response - Response message in JSON format
 */

/**
 * @constructor
 * @param {string} baseURL - URL for the AMBIT API
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Egon Willighagen
 */
Ambit.Substance = function(baseURL) {
	this.baseURL = baseURL;
}

/**
 * Lists all the substances.
 *
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.list = function(callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/substance",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

/**
 * Search for substances.
 *
 * @param {string} query - The search query
 * @param {string} type - The search type (e.g. name, citation, ownerName)
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.search = function(query, type, callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/substance",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

/**
 * Returns information about a single substance.
 *
 * @param {string} uri - The URI for the substance
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.info = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/study",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

/**
 * Summarizes the information about a single substance.
 *
 * @param {string} uri - The URI for the substance
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.summary = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/studysummary",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

/**
 * Returns the chemical composition of the substance.
 *
 * @param {string} uri - The URI for the substance
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.composition = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/composition",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

/**
 * Returns the chemical composition of the substance as a list.
 *
 * @param {string} uri - The URI for the substance
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.compositionAsList = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/structures",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}
