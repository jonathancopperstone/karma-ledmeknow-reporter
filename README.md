# LED Me Know Reporter: Karma

This is a custom karma reporter, using [`led-me-know`](https://github.com/johnnycopperstone/led-me-know) to report the results from the specs via an LED matrix.

For more information you can check out the docs in the [`led-me-know`](https://github.com/johnnycopperstone/led-me-know) library or see the [blog post](http://blog.johnnycopperstone.me/led-me-know).

### Using this Reporter

To use this reporter, you need to install this npm as a dev dependency.

    npm install --save-dev karma-ledmeknow-reporter

Next, in your karma configuration object, simply add the name of this reporter, _led-me-know_, to the `reporters` property.

    // In your karma config

    config.set({
        reporters: ['progress', 'led-me-know']
    });
