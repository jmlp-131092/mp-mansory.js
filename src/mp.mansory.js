(function ( $ ) {

	$.fn.mpmansory = function ( options ) {

		var settings = $.extend({
			childrenClass: '',
			breakpoints: {
					lg: 4,
					md: 4,
					sm: 6,
					xs: 12
			},
			onload: function ( items ) {
				return true;
			}
			
		}, options);

		Array.min = function( array ){
		    return Math.min.apply( Math, array );
		};

		$.emptyArray = function ( array ) {
			for (var i = 0; i<array.length; i++) {
				array[i].remove();
				console.log("removed");
			}

			return new Array();
		}

		$.fn.initialize = function ( columns, classStr ) {
			/*
			 * @params [string] {classStr} - the bootstrap column string
			 * @return [Array] - list of columns to create
			 * @description - creates the grid columns in wich the items will be distributed
			 */
			
			var cols = [];

			for (var i = 0; i<columns; i++) {
				
				var wrap = $('<div></div>');
				wrap.addClass(classStr);
				$(this).append(wrap);
				cols.push(wrap);
			
			}

			return cols;

		}

		$.fn.distributeItemsByHeight = function ( wrappers, items ) {
			/*
			 * @params [Array] {wrappers} - the array containing the columns elements
			 * @params [Array] {items} - the array containing items
			 * @description - distribute the items through the columns - to the columns with lowest height
			 */
			var counter = 0;

			for (var k = 0; k<items.length; k++) {

				var $heights = new Array();

				for (var i = 0; i<wrappers.length; i++ ) {

					//get the wrappers height
					
					$heights.push(wrappers[i].height());

				}

				//get the wrapper with the lowest height
				var min = Array.min($heights) == Number.POSITIVE_INFINITY || Array.min($heights) == Number.NEGATIVE_INFINITY ? 0 : Array.min($heights);
				wrappers[$heights.indexOf(min)].append(items[k]);
	
			}

		}

		$.fn.getCurrentColumnSize = function () {

			if ($(window).width() > 1200) {
				return 'lg';
			} else if ($(window).width() > 992) {
				return 'md';
			} else if ($(window).width() > 720) {
				return 'sm';
			} else if ($(window).width() > 480) {
				return 'xs';
			} else if ($(window).width() > 320) {
				return 'xs';
			}

		}

		$.fn.distributeItemsByOrder = function ( wrappers, items ) {
			/*
			 * @params [Array] {wrappers} - the array containing the columns elements
			 * @params [Array] {items} - the array containing items
			 * @description - distribute the items through the columns - to the columns with lowest height
			 */
			var counter = 0;

			for (var k = 0; k<items.length; k++) {
				if (counter == wrappers.length) counter = 0; 
				wrappers[counter].append(items[k]);
				counter++;
	
			}

		}

		$.fn.distributeItemsByAttr = function ( wrappers, items, attr, order) {

			for ( var k = 0; k<wrappers.length; k++ ) {

			}

		}

		$.fn.apply = function ( settings, nrOfColumns, wrappers, items ) {

			var _this = $(this);
			
			var currentSize = _this.getCurrentColumnSize();

			var columns = nrOfColumns; //find number of columns

			//build the bootstrap class string
			var classStr = "col-lg-" + settings.breakpoints.lg + " col-md-"+settings.breakpoints.md + " col-sm-" + settings.breakpoints.sm + " col-xs-" + settings.breakpoints.xs + " " + settings.columnClasses;

			wrappers = $(this).initialize( columns, classStr ); //create columns

			_this.distributeItemsByHeight( wrappers, items); //apply mansory

			

			if (settings.hasOwnProperty('onload')) {

				//execute on load
				settings.onload( items );

			}

			return wrappers;
		}



		return this.each(function () {

			var _this = $(this);

			var currentSize = _this.getCurrentColumnSize();

			var numberOfColumns = 12 / settings.breakpoints[currentSize];

			var items = _this.children( (settings.childrenClass != '' ? '.'+settings.childrenClass : 'div') );

			var wrappers = new Array();

			wrappers = _this.apply( settings, numberOfColumns, wrappers, items );
			
			$(window).on('resize', function ( e ) {

				if (_this.getCurrentColumnSize() != currentSize ) {
					numberOfColumns = 12 / settings.breakpoints[_this.getCurrentColumnSize()];
					wrappers = $.emptyArray(wrappers);
					wrappers = _this.apply( settings , numberOfColumns, wrappers, items);
					currentSize = _this.getCurrentColumnSize();
				}

			});

		});
	}

})(jQuery);