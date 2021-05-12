var ghpages = require('gh-pages');
 
ghpages.publish('out', {
	dotfiles: true,
	// add: true,
	branch: 'page',
	repo: 'simba@simba-fs.dev:website/fakebook',
	message: 'Deploy to github page',

}, console.error);
