	export function hamButton() {
		setTimeout(() => {
			const menuButton = document.getElementById("menu-button");
			const menuItems = document.getElementById("menu");
			// const menuButtonSpans = document.querySelectorAll("#menu-button span");
			const links = document.querySelectorAll("#menu a");
				// Add a click event listener to the element and toggle the 'open' class
			menuButton.addEventListener("click", ()=> {
				menuItems.classList.toggle("hidden");
				menuButton.classList.toggle("open");
			});
			links.forEach(link => {
			  link.addEventListener("click", ()=>{
				menuItems.classList.add("hidden");
				menuButton.classList.remove("open")
			  })
			});
			window.onresize = function () {
				const w = window.outerWidth;
				if (w > 768) {
					menuItems.classList.add("hidden");
					menuButton.classList.remove("open");
				}
			}
		  }, "1000");
	}
	
export function renderWithTemplate(template, parentElement, data, callback) {
	parentElement.insertAdjacentHTML('afterbegin', template);
	if (callback) {
		callback(data);
	}
}

export async function loadTemplate(path) {
	const template = await fetch(path).then((res) => res.text());
	return template;
}

export async function loadHeaderFooter() {
	const headerTemplate = await loadTemplate('../public/partials/header.html');
	const footerTemplate = await loadTemplate('../public/partials/footer.html');
	const headerElement = document.getElementById('main-header');
	const footerElement = document.getElementById('main-footer');

	renderWithTemplate(headerTemplate, headerElement);
	renderWithTemplate(footerTemplate, footerElement);
}

// darkmode
export function darkFunction () {
	setTimeout(() => {
		const darkButton = document.querySelector("#darkButton");

		darkButton.addEventListener('click', function () {

			// if set via local storage previously
			if (localStorage.getItem('color-theme')) {
				if (localStorage.getItem('color-theme') === 'light') {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('color-theme', 'light');
				}

			// if NOT set via local storage previously
			} else {
				if (document.documentElement.classList.contains('dark')) {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('color-theme', 'light');
				} else {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
				}
			}
		
		});
	}, "1000");
}
