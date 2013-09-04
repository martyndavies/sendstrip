var assert = require('assert');
var should = require('should');
var sendstrip = require('../sendstrip');
var email = "\"BillyBob\" <billybob@gmail.com>";
var email2 = "\"BillyBob Cornelius Roberts\" <billybob@gmail.com>";

describe('Sendsplit: ', function(){
	describe('Email with single sender name', function() {
		it('should return BillyBob as value for name', function(){
			sendstrip(email, function(err, name){
				name.should.equal('BillyBob');
			});
		});
	});

	describe('Email with a full sender name', function(){
		it('should return BillyBob Cornelius Roberts as value for name', function(){
			sendstrip(email2, function(err, name){
				name.should.equal('BillyBob Cornelius Roberts');
			});
		});	
	});

	describe('Email address', function(){
		it('should return billybob@gmail.com as value for address', function(){
			sendstrip(email, function(err, name, address){
				address.should.equal("billybob@gmail.com");
			});		
		});
	});

	describe('Has to address', function(){
		it('should return billybob as value for to', function(){
			sendstrip(email, function(err, name, address, to){
				to.should.equal("billybob");
			});
		});
	});

	describe('Has domain name', function(){
		it('should return gmail.com as value for domain', function(){
			sendstrip(email, function(err, name, address, to, domain){
				domain.should.equal("gmail.com");
			});
		});
	});
});