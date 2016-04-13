#jQuery Plugin - mp-mansory.js

jquery plugin to create mansory galleries with twitter bootstrap grid systyem

Feel free to request new features.

#Options

breakpoints:
	lg: 4 //default
	md: 4 //default
	sm: 6 //default
	xs: 12 //default

distributeBy:
	order: false/true, //distribute items by writing order
	height: false, //distribute items by columns with lower height
	attr: 'data-order' //distribute items by attribute value
	attrOrder: 'asc'/'desc' //distribute items by attribute value in ascending or descending order

onload: function ( items )

#How does it works

Based on the window size and the the breakpoints values passed as argument it calculates the number of columns needed and creates them as div elements with col-(viewport_slug)-(viewport_slug_value) class (you can add custom classes with the property 'columnClasses'). It repeats the same process when a breakpoint is reached.

The default breakpoints sizes are:

	lg when window.size > 1200px
	
	md when window.size > 992px && window.size < 1200px
	
	sm when window.size > 720px  && window.size < 992px
	
	xs when when window.size < 720px
