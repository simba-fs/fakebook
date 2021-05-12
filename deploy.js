var ghpages = require('gh-pages');
 
ghpages.publish('out', {
	dotfiles: true,
	add: true,
	message: 'Deploy to github page',

}, console.error);
