var LED = require('led-me-know');

var LedMeKnowReporter = function(baseReporterDecorator) {

    var _this = this;
    baseReporterDecorator(_this);
};

LedMeKnowReporter.prototype.onBrowserComplete = function(a, b) {
    console.log('onBrowserComplete', a, b);
};

LedMeKnowReporter.prototype.onRunComplete = function(a, b) {
    console.log('onRunComplete', a, b);
};

LedMeKnowReporter.prototype.onRunStart = function(a, b) {
    console.log('onRunStart', a, b);
}

LedMeKnowReporter.$inject = ['baseReporterDecorator', 'formatError'];

module.exports = {
    'reporter:led-me-know': ['type', LedMeKnowReporter]
};
