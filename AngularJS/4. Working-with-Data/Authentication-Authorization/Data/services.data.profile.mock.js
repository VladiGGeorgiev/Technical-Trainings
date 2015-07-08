(function () {
	'use strict';

	var app = angular.module('profileServicesMock', ['ngMockE2E']);

	app.run(function ($httpBackend) {
		var data = [
			{
				"id": 2,
				"author": {
					"id": "85b5b101-19f2-4693-ac0b-780fa449a2ed",
					"profileImageData": null,
					"username": "Jack",
					"name": "Jack",
					"gender": 0,
					"isFriend": true,
					"hasPendingRequest": false
				},
				"wallOwner": {
					"id": "40b33ca6-2732-44da-a883-884737810658",
					"profileImageData": null,
					"username": "John",
					"name": "John",
					"gender": 0,
					"isFriend": false,
					"hasPendingRequest": true
				},
				"postContent": "Welp...", "date": "2010-10-05T00:00:00",
				"likesCount": 1,
				"liked": true,
				"totalCommentsCount": 0,
				"comments": []
			}, { "id": 3, "author": { "id": "18b330b6-9c9c-456d-a363-8a7bf288a005", "profileImageData": null, "username": "Tanio", "name": "Tanio", "gender": 0, "isFriend": false, "hasPendingRequest": false }, "wallOwner": { "id": "85b5b101-19f2-4693-ac0b-780fa449a2ed", "profileImageData": null, "username": "Jack", "name": "Jack", "gender": 0, "isFriend": true, "hasPendingRequest": false }, "postContent": "Friend wall", "date": "2005-11-11T00:00:00", "likesCount": 0, "liked": false, "totalCommentsCount": 1, "comments": [{ "id": 6, "author": { "id": "40b33ca6-2732-44da-a883-884737810658", "profileImageData": null, "username": "John", "name": "John", "gender": 0 }, "likesCount": 1, "commentContent": "unliked comment", "date": "2013-04-13T00:00:00", "liked": true }] }, { "id": 4, "author": { "id": "85b5b101-19f2-4693-ac0b-780fa449a2ed", "profileImageData": null, "username": "Jack", "name": "Jack", "gender": 0, "isFriend": true, "hasPendingRequest": false }, "wallOwner": { "id": "18b330b6-9c9c-456d-a363-8a7bf288a005", "profileImageData": null, "username": "Tanio", "name": "Tanio", "gender": 0, "isFriend": false, "hasPendingRequest": false }, "postContent": "Other wall", "date": "2005-11-11T00:00:00", "likesCount": 0, "liked": false, "totalCommentsCount": 1, "comments": [{ "id": 5, "author": { "id": "85b5b101-19f2-4693-ac0b-780fa449a2ed", "profileImageData": null, "username": "Jack", "name": "Jack", "gender": 0 }, "likesCount": 0, "commentContent": "foreign comment", "date": "2013-04-13T00:00:00", "liked": false }] }]

		var url = '/api/me/feed';
		$httpBackend.whenGET(url).respond(data);
	});
}());