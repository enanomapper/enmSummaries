
/**
 * @constructor
 * @param {string} baseURL - URL for the AMBIT API
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Egon Willighagen
 */
Ambit.Substance = function(baseURL) {
	this.baseURL = baseURL.replace(/\/$/, "");
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
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
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
 * Lists all substances related to the given compound.
 *
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Substance.prototype.listForCompound = function(compound, callback) {
	params = {};
	params['compound_uri'] = compound;
	params['type'] = 'related';
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/substance",
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
		dataType: 'json',
		data: params,
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
	params = {};
	params['search'] = query;
	params['type'] = type;
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/substance",
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
		dataType: 'json',
		data: params,
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
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
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
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
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
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
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
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}
