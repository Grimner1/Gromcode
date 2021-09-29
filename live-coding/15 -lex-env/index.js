/*
    glibal
	{
	    ‘enviromentRecord’: {
             'message': 'Test',
             'weight': 55,
             'createMessenger': func,
             ...
        },
        'outherLexicalEnv': null
    }

    createMessage
    {
        'enviromentRecord': {
            'message': 'Just learn it',
            'sender': 'Gromcode',
            'sendMessage': func,
            ...
        },
        'outherLexicalEnv': global
    }

    run
    {
        'enviromentRecord': {},
        'outherLexicalEnv': global
    }

    sendMessage
    {
        'enviromentRecord': {},
        'outherLexicalEnv': createMessenger
    }
/*





/* eslint-disable */

const message = 'Test message';
const weight = 55;

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

if (true) {
  const currentDay = 'Monday';
  console.log(message);
}

console.log(currentDay); //is not defined

function run() {
  console.log('RUN');
}

function createMessenger() {
  //   let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

console.log(sender); //is not defined

const messanger = createMessenger();
messanger.sendMessage('TestName'); // => 'Test message'

run();
