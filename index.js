var Pusher = require('pusher');

const backend = async () => {
  var pusher = new Pusher({
    appId: '791849',
    key: 'cfaf7a3be30a27f2a21f',
    secret: 'ba5a642780efde345db2',
    cluster: 'ap2'
  });

  const pusherMessages = [
    {
      service: 'validation',
      message: 'validating data'
    },
    {
      service: 'validation',
      message: 'validating structure of payload'
    },
    {
      service: 'migration',
      message: 'begining migration'
    },
    {
      service: 'migration',
      message: 'migrating elements',
      totalElements: 1000,
      chunkSize: 200,
      chunkNumber: 4,
      migrating: true
    },
    {
      service: 'email',
      message: 'sending email adma@yahoo.co.uk'
    }
  ];
  for (const pusherMessage of pusherMessages) {
    pusher.trigger('my-channel', 'my-event', pusherMessage);
    await sleep(2000);
  }
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

backend();