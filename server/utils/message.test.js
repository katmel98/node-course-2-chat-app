const expect = require('expect');
const mocha = require('mocha');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Melvin';
        var lat = 15;
        var lon = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, lat, lon);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe('Melvin');
        expect(message).toMatchObject({from, url}); 
    });

});