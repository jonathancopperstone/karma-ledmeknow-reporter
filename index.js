var lmk = require('led-me-know');

/**
 * Retrieves the LED matrix instance
 * from led-me-know library. Saves this
 * on the context.
 */
var LedMeKnowReporter = function(baseReporterDecorator) {

    var _this = this;

    lmk
        .getPixelAsync()
        .then(function(pixel) {
            _this.pixel = pixel;
        });
};

/**
 * Karma API fn which is triggered
 * when Karma starts running specs
 */
LedMeKnowReporter.prototype.onRunStart = function() {

    if (!this.pixel) {
        console.log('No LED matrix or board found');
        return;
    }

    lmk.loading(this.pixel);
};

/**
 * Karma API fn which is triggered
 * when Karma has finished running specs
 */
LedMeKnowReporter.prototype.onRunComplete = function(results) {

    if (!this.pixel) {
        console.log('No LED matrix or board found');
        return;
    }

    if (results.getResults().failed > 0) {
        lmk.failed(this.pixel);
    } else {
        lmk.success(this.pixel);
    }
};

LedMeKnowReporter.$inject = ['baseReporterDecorator', 'formatError'];

module.exports = {
    'reporter:led-me-know': ['type', LedMeKnowReporter]
};
