// Scroll to Top
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Show the button when the user scrolls down 20px from the top
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // scrollToTopButton.style.display = "block";
            scrollToTopButton.style.opacity = "1";
            scrollToTopButton.style.transform = "scale(1)";
        } else {
            // scrollToTopButton.style.display = "none";
            scrollToTopButton.style.opacity = "0";
            scrollToTopButton.style.transform = "scale(0)";
        }
    });

    // Smoothly scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        scrollToTop();
    });

    function scrollToTop() {
        var currentPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }
});


// Data attribute for adding inline style 
const inlineStyle = () => {
	const elements = document.querySelectorAll( 'body *' );

	element_array = 0;
	
	elements.forEach((element) => {
		element_array++;

		if (element.hasAttributes()) {
			let output = "";
			for (const attr of element.attributes) {
	        	output += `${attr.name} -> ${attr.value}\n`;	        	
	        	element.style.setProperty(attr.name, attr.value);
	        }
		}
	});
}


// Fixed header (header.fixed) & Fullpage hero (#hero.fullpage)
const headerHeightChange = () => {
	const main = document.querySelector('main');
	const header = document.querySelector('header');	
	const nav_menu = document.querySelector('nav');
	const hero = document.querySelector('.fullpage');
	const header_height = header.offsetHeight;

	if (header.classList.contains('fixed') ) {
		main.style.marginTop = `${header_height}px`;
	} else {
		main.style.marginTop = '0';
	}

	hero.style.height = `calc(100vh - ${header_height}px)`;
	nav_menu.style.top = `${header_height}px`;
}

// If .img-cover added to .img-container (.image-container.img-cover),
// it will convert the image as background of the container and
// auto-resize image when width exceeded to the size of the screen
const imgAutoresize = () => {
	const imgs = document.querySelectorAll('.img-cover img');
	const container_width = screen.width * 0.9;

	imgs.forEach((img) => {
		//convert the image as a background of the .img-container
		img.parentElement.style.backgroundImage = `url(${img.src})`;

		let img_width = img.naturalWidth;
		if (img_width >= container_width) {
			img.style.width = '100%';
		} else {
			img.style.width = 'auto';
		}
	});

	const textImgs = document.querySelectorAll('.text-img img');
	textImgs.forEach((img) => {
		img.parentElement.style.backgroundImage = `url(${img.src})`;
		img.style.opacity = '0';
	});
}

const clog = (logtext) => {
	console.log(logtext);
}


// Calculate the flex-basis value 
const cols = document.querySelectorAll('.col-4');
cols.forEach((col) => {
	if (col.style.flexBasis = '50%') {
	    if (col.parentNode.classList.contains('gap-5')) {
	    	calcFlexBasis(col);
	    } 
	    if (col.parentNode.classList.contains('gap-4')) {
	    	calcFlexBasis(col);
	    } 
	    if (col.parentNode.classList.contains('gap-3')) {
	    	calcFlexBasis(col);
	    } 
	    if (col.parentNode.classList.contains('gap-2')) {
	    	calcFlexBasis(col);
	    } 
	    if (col.parentNode.classList.contains('gap-1')) {
	    	calcFlexBasis(col);
	    }
	} 
});

function calcFlexBasis(col) {
	const row = col.parentNode;
	const computedStyles = window.getComputedStyle(row);
	const getGap = computedStyles.getPropertyValue('gap');
	col.style.flexBasis = `calc(50% - ${getGap} )`;
}

window.addEventListener('DOMContentLoaded', headerHeightChange);
window.addEventListener('DOMContentLoaded', imgAutoresize);
window.addEventListener('DOMContentLoaded', inlineStyle);

window.addEventListener('resize', headerHeightChange);
window.addEventListener('resize', imgAutoresize);