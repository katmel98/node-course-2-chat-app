const expect = require('expect');
const mocha = require('mocha');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Melvin';
        var text = 'Testing generator';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe('Melvin');
        expect(message).toMatchObject({from, text}); 
    });

});