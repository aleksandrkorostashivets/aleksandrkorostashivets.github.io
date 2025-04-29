const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// Directories
const sourceDir = path.join(__dirname, 'source'); // Directory for page templates
const pagesDir = path.join(sourceDir, 'pages'); // Directory for page templates
const templatesDir = path.join(sourceDir, 'templates'); // Directory for common templates (layout, header, footer, etc.)
const dataDir = path.join(sourceDir, 'data'); // Directory for data files (navigation.json, post.json, casino.json, events.json)
const outputDir = path.join(__dirname); // Directory to save generated static pages

// Read data files
const navigation = JSON.parse(fs.readFileSync(path.join(dataDir, 'navigation.json'), 'utf-8')); // Read navigation data
const posts = JSON.parse(fs.readFileSync(path.join(dataDir, 'post.json'), 'utf-8')); // Read post data
const casinoData = JSON.parse(fs.readFileSync(path.join(dataDir, 'casino.json'), 'utf-8')); // Read casino data
const eventsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'events.json'), 'utf-8')); // Read events data
const reviewsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'rewiews.json'), 'utf-8'));
const faqData = JSON.parse(fs.readFileSync(path.join(dataDir, 'faq.json'), 'utf-8'));
const galData = JSON.parse(fs.readFileSync(path.join(dataDir, 'gal.json'), 'utf-8'));
// Variables
const postsPerPage = 50; // Number of posts per page

const websiteName = "Spelavonturen.com "; // Define the website name

// Function to render a page using the layout
function renderPage(contentTemplatePath, data, outputFileName) {
	// Find the navigation name for the current page
	const navItem = navigation.links.find(link => link.url === data.currentPage);
	const pageTitle = navItem ? `${navItem.name} - ${websiteName}` : `${data.title} - ${websiteName}`;

	ejs.renderFile(contentTemplatePath, data, (err, contentStr) => {
		if (err) {
			console.error(err);
		} else {
			// Ensure eventsData is included in the data passed to the layout
			const layoutData = {
				title: pageTitle,
				body: contentStr,
				navigation: navigation,
				currentPage: data.currentPage,
				posts: data.posts,
				showSidebar: data.showSidebar,
				containerClass: data.containerClass,
				page: data.page,
				totalPages: data.totalPages || 1,
				eventsData: eventsData,
				reviewsData: reviewsData,
				faqData: faqData,
				galData: galData
			};

			ejs.renderFile(path.join(templatesDir, 'layout.ejs'), layoutData, (err, layoutStr) => {
				if (err) {
					console.error(err);
				} else {
					fs.writeFileSync(path.join(outputDir, outputFileName), layoutStr);
					console.log(`Page created: ${outputFileName}`);
				}
			});
		}
	});
}

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir);
	console.log('Output directory created.');
}



// Render static pages (like contact, privacy, etc.)
const staticPages = ['feature-of-cruise-casino', 'about-us', 'contacts', 'terms', 'cookie-policy', 'privacy-policy', 'hotel-casino-package-holidays']; // Add more static pages if needed
staticPages.forEach(page => {
	const templatePath = path.join(pagesDir, `${page}.ejs`);
	if (!fs.existsSync(templatePath)) {
		console.log(`Template not found: ${templatePath}. Skipping page.`);
		return; // Skip rendering this page
	}

	const showSidebar = !['hotel-casino-package-holidays'].includes(page);
	const containerClass = ['hotel-casino-package-holidays'].includes(page) ? 'px-3 main' : 'container-xl main py-5';

	const data = {
		title: page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, ' '),
		posts: posts, // Pass post data in case the page needs it
		navigation: navigation,
		currentPage: `${page}.html`,
		showSidebar: showSidebar,
		containerClass: containerClass,
		eventsData: eventsData,
		reviewsData: reviewsData, // Include eventsData here
		faqData: faqData,
		galData: galData,
		page: 1 // Default to page 1 for static pages
	};

	// if (page === 'hotel-casino-package-holidays') {
	// 	data.casinoData = casinoData;
	// 	data.eventsData = eventsData;
	// }

	renderPage(templatePath, data, `${page}.html`);
});

// Function to render paginated posts (index page and paginated pages)
function renderPaginatedPages(posts, postsPerPage) {
	const totalPages = Math.ceil(posts.length / postsPerPage); // Calculate total pages based on posts per page
	for (let page = 1; page <= totalPages; page++) {
		const start = (page - 1) * postsPerPage;
		const paginatedPosts = posts.slice(start, start + postsPerPage);

		const templatePath = path.join(pagesDir, 'index.ejs');
		const showSidebar = true;
		const containerClass = 'container-xl main py-5';

		const data = {
			title: 'Index',
			posts: paginatedPosts,
			navigation: navigation,
			currentPage: page === 1 ? 'index.html' : `${page}/index.html`,
			showSidebar: showSidebar,
			containerClass: containerClass,
			page: page,
			reviewsData: reviewsData, // Include eventsData here
			faqData: faqData,
			eventsData: eventsData,
			galData: galData,
			totalPages: totalPages // Pass total number of pages to the template
		};

		const outputFileName = page === 1 ? 'index.html' : `${page}/index.html`;

		// Ensure directory exists for pages like page-2, page-3, etc.
		if (page > 1) {
			const pageDir = path.join(outputDir, `page-${page}`);
			if (!fs.existsSync(pageDir)) {
				fs.mkdirSync(pageDir);
			}
		}

		renderPage(templatePath, data, outputFileName);
	}
}

// Render paginated post pages (index.html and page-X)
renderPaginatedPages(posts, postsPerPage);

// Render individual post pages
posts.forEach((post, index) => {
	const postSlug = post.title.toLowerCase().replace(/ /g, '-');
	renderPage(path.join(templatesDir, 'post.ejs'), {
		title: post.title,
		post: post,
		navigation: navigation,
		currentPage: `${postSlug}.html`,
		posts: posts,
		showSidebar: true,
		containerClass: 'container-xl main py-5',
		isFirstPost: index === 0,
		eventsData: eventsData,
		reviewsData: reviewsData,
		faqData: faqData,
		galData: galData,
		page: 1
	}, `${postSlug}.html`);
});

eventsData.forEach((event) => {
	const eventSlug = event.title.toLowerCase().replace(/ /g, '-');
	renderPage(path.join(templatesDir, 'event.ejs'), {
		title: event.title,
		event: event,
		navigation: navigation,
		currentPage: `${eventSlug}.html`,
		posts: posts,
		showSidebar: true,
		containerClass: 'container-xl main py-5',
		eventsData: eventsData,
		reviewsData: reviewsData,
		faqData: faqData,
		galData: galData,
		page: 1
	}, `${eventSlug}.html`);
});
