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


		$.fn.initialize = function (columns, classStr) {
			/*
			 * @params [int] {columns} - number of grid columns
			 * @params [string] {classStr} - the bootstrap column string
			 * @description - creates the grid columns in wich the items will be distributed
			 */
			for (var i = 0; i<columns; i++) {
				
				var wrap = $('<div></div>').addClass(classStr);
				$(this).append(wrap);
				wrappers.push(wrap);
			
			}

			return wrappers;

		}

		$.fn.distributeItems = function ( wrappers, items ) {
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
					$heigths.push(wrappers[i].heigth());

				}

				//get the wrapper with the lowest height
				wrappers[$heights.indexOf(min($heights))].append(items[k]);
	
			}

		}


		return this.each(function () {

			var _this = $(this);
			
			var items = _this.children( (setttings.childrenClass != '' ? '.'+settings.childrenClass : 'div') ); //get the items

			var columns = settings.breakpoints.lg / 12; //find number of columns

			//build the bootstrap class string
			var classStr = "col-lg-" + settings.breakpoints.lg + " col-md-"+settings.breakpoints.md + " col-sm-" + settings.breakpoints.sm + "col-xs-" + settings.breakpoints.xs;

			var wrappers = $(this).initialize( columns ); //create columns

			_this.distributeItems( wrappers, items); //apply mansory

			if (settings.hasOwnProperty('onload')) {

				//execute on load
				settings.onload( items );

			}

		});
	}

})(jQuery);