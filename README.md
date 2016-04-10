#jQuery Plugin - mp-mansory.js

jquery plugin to create mansory galleries with twitter bootstrap grid systyem

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

onload: function ( otems )