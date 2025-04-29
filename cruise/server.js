const browserSync = require('browser-sync').create();
const {
	exec
} = require('child_process');

// Function to run the test script (in this case, test.js)
function runTestScript() {
	exec('node test.js', (err, stdout, stderr) => {
		if (err) {
			console.error(`Error: ${stderr}`);
			return;
		}
		console.log(stdout);
	});
}

// Setup browser-sync
browserSync.init({
	server: {
		baseDir: './', // Root directory of the project
	},
	files: ['**/*.html', '**/*.ejs', '**/*.json'], // Files to watch for changes
	watchEvents: ['change'], // Watch for change events
	open: true, // Automatically open the browser
	notify: false // Disable notifications in the browser
});

// Run the initial build and trigger it when changes are detected
runTestScript();

// Use nodemon to watch for changes in files
const nodemon = require('nodemon');
nodemon({
	script: 'test.js',
	ext: 'js ejs json scss', // Watch .js, .ejs, and .json files for changes
	watch: ['source', 'test.js', 'post.json', 'pages', 'scss'], // Directories and files to watch
});

// Restart browser-sync on file changes
nodemon.on('restart', () => {
	console.log('Changes detected, restarting...');
	runTestScript(); // Re-run test.js when files change
	browserSync.reload(); // Reload the browser
});
