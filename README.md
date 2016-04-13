#jQuery Plugin - mp-mansory.js

jquery plugin to create mansory galleries with twitter bootstrap grid systyem

Feel free to request new features.

#Options
	{
		itemClasses: '', //add classes to items
		columnClasses: '', //add classes to columns
		breakpoints: {
			lg: 4, //default
			md: 4, //default
			sm: 6, //default
			xs: 12, //default
		},
		distributeBy: {
			order: false, // if true distribute items by default order 
			height: false, // if true distribute items to the column with the lowest height,
			attr: 'data-order', // Distribute items by attribute value,
			attrOrder: 'asc'/'desc' // Only applied if is used 'attr' property, order items in ascending or descending order
		},
		onload: function ( items ) {
			//do something with the items
		}
	}


#Why i made this

I made this because I'm a javascript, jQuery and Bootstrap lover who cant stand complex CSS hackings and also because StackOverflow didn't help me resolving this issue.

#Why am I sharing this

Like it is helpfull for me, it can be helpfull for you


#How does it works

Based on the window size and the the breakpoints values passed as argument it calculates the number of columns needed and creates them as div elements with col-(viewport_slug)-(viewport_slug_value) class (you can add custom classes with the property 'columnClasses'). It repeats the same process when a breakpoint is reached.

The default breakpoints sizes are:

	lg when window.size > 1200px
	
	md when window.size > 992px && window.size < 1200px
	
	sm when window.size > 720px  && window.size < 992px
	
	xs when when window.size < 720px
