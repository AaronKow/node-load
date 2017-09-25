'use strict';

const express = require('express'),
    app = express(),
    http = require('http');

const winston = require('winston'),
    logger = new(winston.Logger)({
        transports: [
        new(winston.transports.File)({
                level: 'debug',
                filename: './debug.log',
                handleExceptions: true
            }),
        new(winston.transports.Console)({
                level: 'debug',
                json: true,
                handleExceptions: true
            })
    ],
        exitOnError: false
    });



const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
app.use(express.static('public'));
// app.use(require('morgan')('combined', {
//     stream: {
//         write: message => {
//             logger.log('info', message);
//         }
//     }
// }));
app.use(require('winston-request-logger').create(logger, {
    'response-time': ':responseTime ms', // outputs '5 ms'
    'url': ':url[pathname]',
    'ip': ':ip',
    'status-code': ':statusCode',
    'date': ':date',
    'method': ':method',
    'user-agent': ':userAgent'
}));
app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
    });
    res.write('<h1>This is my ninja way!</h1>');
    res.write(`
      <img src="/boruto.jpg" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim. Vestibulum lectus mauris ultrices eros in. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Est pellentesque elit ullamcorper dignissim cras. Elementum nisi quis eleifend quam adipiscing vitae proin. Morbi tincidunt ornare massa eget egestas purus. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ullamcorper morbi tincidunt ornare massa eget. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Quis enim lobortis scelerisque fermentum dui faucibus. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Eget gravida cum sociis natoque penatibus et magnis. Vivamus at augue eget arcu. Dignissim sodales ut eu sem integer. Ut eu sem integer vitae justo eget magna fermentum. Massa enim nec dui nunc mattis enim. Enim ut sem viverra aliquet eget. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Cum sociis natoque penatibus et.

        Adipiscing elit pellentesque habitant morbi tristique senectus et. Praesent elementum facilisis leo vel fringilla. Lectus vestibulum mattis ullamcorper velit sed. Nisi vitae suscipit tellus mauris a. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Eu sem integer vitae justo eget. Vulputate dignissim suspendisse in est. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Feugiat in ante metus dictum at. Risus ultricies tristique nulla aliquet enim tortor at. Nibh ipsum consequat nisl vel pretium. Sed augue lacus viverra vitae congue eu. Mauris in aliquam sem fringilla ut. Senectus et netus et malesuada fames ac turpis egestas integer. Tristique sollicitudin nibh sit amet commodo. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.

        Consequat id porta nibh venenatis cras sed felis eget. Dolor sit amet consectetur adipiscing elit duis tristique. Quis commodo odio aenean sed adipiscing diam donec. Magna eget est lorem ipsum dolor sit. Mauris cursus mattis molestie a iaculis at erat pellentesque. Suspendisse interdum consectetur libero id. Natoque penatibus et magnis dis. Blandit cursus risus at ultrices mi tempus. Dolor sit amet consectetur adipiscing elit. Augue interdum velit euismod in. Lorem ipsum dolor sit amet consectetur. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Lectus mauris ultrices eros in.

        Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ut venenatis tellus in metus vulputate eu scelerisque felis. Egestas integer eget aliquet nibh. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut tellus elementum sagittis vitae et. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Egestas sed sed risus pretium. Mi bibendum neque egestas congue quisque. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Eget aliquet nibh praesent tristique magna sit amet purus. Enim ut tellus elementum sagittis vitae et leo duis ut. A cras semper auctor neque vitae tempus quam. Nulla facilisi morbi tempus iaculis.

        Velit aliquet sagittis id consectetur purus. Eget magna fermentum iaculis eu non diam phasellus. Id diam maecenas ultricies mi eget mauris pharetra et. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Elementum pulvinar etiam non quam lacus. Eget nunc lobortis mattis aliquam faucibus. Viverra aliquet eget sit amet tellus cras adipiscing enim. Dolor sit amet consectetur adipiscing elit. In iaculis nunc sed augue. In fermentum et sollicitudin ac orci phasellus. Quam vulputate dignissim suspendisse in est ante.

        Feugiat nisl pretium fusce id velit ut. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Sagittis vitae et leo duis ut diam quam. Enim eu turpis egestas pretium aenean pharetra. Turpis tincidunt id aliquet risus feugiat in ante. Sed velit dignissim sodales ut. Elementum tempus egestas sed sed risus pretium quam. Sed id semper risus in hendrerit gravida rutrum quisque non. Eros in cursus turpis massa tincidunt. Tellus mauris a diam maecenas. Lectus magna fringilla urna porttitor rhoncus. Tortor id aliquet lectus proin nibh nisl condimentum id. Lectus urna duis convallis convallis tellus. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sed arcu non odio euismod. Sit amet nisl suscipit adipiscing bibendum est ultricies.

        Proin libero nunc consequat interdum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Est sit amet facilisis magna etiam. Elementum sagittis vitae et leo duis. Commodo viverra maecenas accumsan lacus vel facilisis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Sed euismod nisi porta lorem mollis. Non pulvinar neque laoreet suspendisse interdum consectetur. Adipiscing tristique risus nec feugiat in fermentum posuere urna. In aliquam sem fringilla ut morbi. Felis imperdiet proin fermentum leo. Magna eget est lorem ipsum dolor sit. Dui ut ornare lectus sit. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.

        Amet luctus venenatis lectus magna fringilla. Sit amet cursus sit amet dictum sit. Leo urna molestie at elementum. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. In arcu cursus euismod quis viverra nibh cras pulvinar. Tortor dignissim convallis aenean et tortor at risus viverra. Dignissim cras tincidunt lobortis feugiat vivamus at. Ornare arcu dui vivamus arcu felis bibendum ut tristique. In metus vulputate eu scelerisque. Neque gravida in fermentum et sollicitudin ac orci.

        Mauris rhoncus aenean vel elit scelerisque mauris. Id consectetur purus ut faucibus pulvinar. Turpis massa sed elementum tempus egestas sed sed risus pretium. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. In dictum non consectetur a. Vulputate enim nulla aliquet porttitor. Egestas pretium aenean pharetra magna ac placerat vestibulum. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Habitant morbi tristique senectus et. Nec ultrices dui sapien eget mi proin sed libero enim. At tellus at urna condimentum mattis. Laoreet sit amet cursus sit amet dictum sit. Lobortis feugiat vivamus at augue eget arcu dictum varius.

        In fermentum et sollicitudin ac. Magna eget est lorem ipsum dolor sit. Sollicitudin nibh sit amet commodo. Massa sed elementum tempus egestas sed sed. Egestas sed tempus urna et pharetra pharetra massa massa. Enim sit amet venenatis urna cursus eget. Risus pretium quam vulputate dignissim. Condimentum id venenatis a condimentum vitae sapien pellentesque. Facilisis volutpat est velit egestas. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Interdum velit euismod in pellentesque massa. Fusce id velit ut tortor pretium viverra. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Non arcu risus quis varius quam quisque id. Odio tempor orci dapibus ultrices. Lectus urna duis convallis convallis tellus id. Lobortis mattis aliquam faucibus purus in massa tempor nec. Leo urna molestie at elementum. Sapien pellentesque habitant morbi tristique senectus et netus et. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
      </p>
  `);
    res.end();
});
http.createServer(app).listen(port, host);

logger.log('info', `App running at http://${host}:${port}`);
