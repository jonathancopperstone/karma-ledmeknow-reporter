var lmk = require('led-me-know');

/**
 * Retrieves the LED matrix instance
 * from led-me-know library. Saves this
 * on the context.
 */
var LedMeKnowReporter = function(baseReporterDecorator) {

    var _this = this;

    lmk
        .getStripAsync()
        .then(function(strip) {
            _this.strip = strip;
        });
};

/**
 * Karma API fn which is triggered
 * when Karma starts running specs
 */
LedMeKnowReporter.prototype.onRunStart = function() {

    if (!this.strip) {
        console.log('No LED matrix or board found');
        return;
    }

    lmk.setStripToLoading(this.strip);
};

/**
 * Karma API fn which is triggered
 * when Karma has finished running specs
 */
LedMeKnowReporter.prototype.onRunComplete = function(results) {

    if (!this.strip) {
        console.log('No LED matrix or board found');
        return;
    }

    if (results.getResults().failed > 0) {
        lmk.setStripToFailed(this.strip);
    } else {
        lmk.setStripToSuccessful(this.strip);
    }
};

LedMeKnowReporter.$inject = ['baseReporterDecorator', 'formatError'];

module.exports = {
    'reporter:led-me-know': ['type', LedMeKnowReporter]
};
