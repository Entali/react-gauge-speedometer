import component, {React} from './component';

export default component('Html', function({assets}) {
    return (
        <html>
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>React Gauges</title>
            <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css' />
          </head>

          <body>
            <section id='app'></section>
            <script src={assets['app.js']} />
          </body>
        </html>
    )
});


