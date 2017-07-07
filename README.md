# Immutable Paint Application

This is a [Paint] application using [React] backed with a [persistent data
structure].

## App Features

- Built using [React]
- Uses [mori] for the persistent data structure.
- The drawing area is 500,000 pixels.
- Pixels support 256 colors (ie: [8-bit]).
- There is an "infinite undo" feature. Any action the user takes, they are able to reverse.
- The user is able to save their drawing to [localStorage] to be recalled
  later.
- When a drawing is recovered from a saved state, the last 20 operations of
  "undo" are remembered.
- There is an adjustable-pixel brush, a circle tool, a rectangle tool, and
  a bucket tool, in addition to a few other fun tools.

### Bonus Features

- Save user's drawings to an online database like [Firebase], [Amazon S3], or
  other service.
  - Note: this might be a good time to invest in a shared hosting account
    service like [a2hosting] or similar.
- Support loading a user's drawing via URL. ie: `my-paint-app.com/3887` or
  `my-paint-app.com/index.html?id=8991`, etc

[Paint]:https://en.wikipedia.org/wiki/Microsoft_Paint
[persistent data structure]:https://en.wikipedia.org/wiki/Persistent_data_structure
[React]:https://facebook.github.io/react/
[functional, stateless components]:https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only
[8-bit]:https://en.wikipedia.org/wiki/Color_depth
[localStorage]:https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[mori]:http://swannodette.github.io/mori/
[Firebase]:https://firebase.google.com/
[Amazon S3]:https://aws.amazon.com/s3/
[a2hosting]:https://www.a2hosting.com/
[Redux]:http://redux.js.org/
