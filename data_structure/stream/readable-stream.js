const { Readable } = require("stream");

const inStream = new Readable();

inStream.on('data', (chunk) => {
    console.log('Received ${chunk.length} bytes of data.');
});

inStream.on('end', () => {
    console.log('There will be no more data.');
  });


inStream.push("ABCDEFGHIJKLM");
inStream.push("NOPQRSTUVWXYZ");

inStream.push(null); // No more data

inStream.pipe(process.stdout);