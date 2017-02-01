// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
// Note that during the validation of the tests the browser will be
// directed to download invalid URLs which will result in error messages
// in the console:
//     GET https://webdev-dummy.herokuapp.com/badURL 404 (Not Found)
// this is expected and is not an error with your code.
//
(function(exports) {

    'use strict'

    function countWords(url) {
        //IMPLEMENT ME
        return fetch(url)
        .then(res => res.json())
        .then(res => {
            var articles = res.articles;
            var map = {};
            articles.forEach(doc => {
                var text = doc['text'];
                var len = text.split(' ').length;
                map[(doc['_id'])] = len;
            });
            return map;
        });
    }

    function countWordsSafe(url) {
        // IMPLEMENT ME
        return fetch(url)
        .then(res => res.json())
        .then(res => {
            var articles = res.articles;
            var map = {};
            articles.forEach(doc => {
                var text = doc['text'];
                var len = text.split(' ').length;
                map[(doc['_id'])] = len;
            });
            return map;
        })
        .catch(err => {
            console.log(err);
            return {};
        })
    }


    function getLargest(url) {
        // IMPLEMENT ME
        return fetch(url)
        .then(res => res.json())
        .then(res => {
            var articles = res.articles;
            var maxLen = 0;
            var maxId;
            articles.forEach(doc => {
                var text = doc['text'];
                var len = text.split(' ').length;
                if (len > maxLen) {
                    maxLen = len;
                    maxId = doc['_id'];
                }
            });
            console.log(maxId);
            return maxId.toString();
        })
        .catch(err => {
            console.log(err);
            return {};
        })
    }


    exports.inclass = {
        author: 'yg33',
        countWords, countWordsSafe, getLargest
    }

})(this);
