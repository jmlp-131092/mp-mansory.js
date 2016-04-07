(function ( $ ) {
	$.fn.rbbMansory = function () {

		return this.each(function () {
			var _this = $(this);

			var items = _this.find('.rbb-mansory-item');
			var wrappers = new Array();
			console.log(items);

			for (var i = 0; i<3; i++) {
				var wrap = $('<div></div>').addClass('col-lg-4 col-md-4 co-sm-6 col-xs-12');
				_this.append(wrap);
				wrappers.push(wrap);
			}


			var columns = 3;
			var rows = Math.ceil(items.length / columns);
			var counter = 0;

			for (var k = 0; k<rows; k++) {
				if (items.length - 1 >= counter) {
					wrappers[0].append(items[counter]);
					counter++;
				}
				if (items.length - 1 >= counter) {
					wrappers[1].append(items[counter]);
					counter++;
				}
				if (items.length - 1 >= counter) {
					wrappers[2].append(items[counter]);
					counter++;
				}

				
			}

			/*
			items.each(function (k) {
				
				wrappers[counter-decrement].append(items[k]);

				if (k % match == 0 && k > 0) {
					counter = 0;
					decrement = 0;
					
				} else {
					counter++;
					mastch = 3;
				}
			});
			*/
			


		});
	}

})(jQuery);