const fs = require('fs');
const path = require('path');

// Path to the root directory (current directory)
const rootDir = __dirname;

// Helper function to delete files
function deleteFiles(directory, extension) {
	fs.readdir(directory, (err, files) => {
		if (err) {
			console.error(`Error reading directory ${directory}: ${err}`);
			return;
		}

		files.forEach(file => {
			const filePath = path.join(directory, file);

			// Check if file exists before deleting
			if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile() && path.extname(file) === extension) {
				fs.unlink(filePath, err => {
					if (err) {
						console.error(`Error deleting file ${filePath}: ${err}`);
					} else {
						console.log(`File deleted: ${filePath}`);
					}
				});
			}
		});
	});
}

// Helper function to delete folders with specific pattern
function deleteFolders(directory, pattern) {
	fs.readdir(directory, (err, files) => {
		if (err) {
			console.error(`Error reading directory ${directory}: ${err}`);
			return;
		}

		files.forEach(file => {
			const folderPath = path.join(directory, file);

			// Check if folder exists before deleting
			if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory() && file.match(pattern)) {
				fs.rm(folderPath, {
					recursive: true,
					force: true
				}, err => {
					if (err) {
						console.error(`Error deleting folder ${folderPath}: ${err}`);
					} else {
						console.log(`Folder deleted: ${folderPath}`);
					}
				});
			}
		});
	});
}

// Delete all .html files in the root directory
function cleanHtmlFiles() {
	deleteFiles(rootDir, '.html');
}

// Delete all "page-*" folders in the root directory
function cleanPageFolders() {
	const pageFolderPattern = /^page-\d+$/; // Matches folders like "page-2", "page-3", etc.
	deleteFolders(rootDir, pageFolderPattern);
}

// Main clean function
function clean() {
	console.log('Cleaning up HTML files and page directories...');
	cleanHtmlFiles();
	cleanPageFolders();
}

// Run the clean function
clean();
