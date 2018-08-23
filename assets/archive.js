define([], function () {
    return {
	init: function (element) {

	    var $archive = element.find('.archive_wrapper');

	    //set variables
	    var $wrapper = $archive.find(".archive_menu");
	    var $tabbar = $wrapper.find("ul");
	    var $tabs = $tabbar.find("li");
	    var $prev = $archive.find(".prev");
	    var $next = $archive.find(".next");
	    var tabswidth = 0;
	    var firstVisibleIndex = 0;
	    var $contents = $archive.find(".archive_item");

	    var active = "active";

	    //if a tab-li is clicked and
	    //case1: clicked item is already active => do nothing
	    //case2: clicked item != active => rm .active class from items and add .active to chosen item
	    $archive.on("click", ".archive_menu li", function (i) {

		var $self = $(this);
		var current = $self.index();

		if ($self.hasClass(active))
		    return;

		var $allActives = element.find("." + active);
		$allActives.removeClass(active);

		$self.addClass(active);
		$contents.eq(current).addClass(active);
		// adjust hash for deeplinking
		window.location.hash = '!' + $contents.eq(current).find(".tab-body").children().attr('id');
	    });



	    // return the combined width of a set of elements
	    var calculateCombinedWidth = function ($elements) {

		var combinedWidth = 0;
		$elements.each(function (index) {
		    combinedWidth += $elements.eq(index).outerWidth(true);
		});

		return combinedWidth;

	    };

	    // filter all element whose size would increase the combined width of
	    // the previos ones compared to the `width` parameter
	    var filterElementsThatDontFitWidth = function ($elements, width) {

		var $filteredElements = $();
		var combinedWidth = 0;

		$elements.each(function (index) {
		    combinedWidth += $elements.eq(index).outerWidth(true);
		    if (combinedWidth <= width) {
			$filteredElements = $filteredElements.add($elements.eq(index));
		    } else {
			return;
		    }
		});

		return $filteredElements;

	    };


	    // Resize handler enabling responsiveness of tabbar
	    var onResize = function () {

		// get the combined width of all tabs, but only once!
		tabswidth = tabswidth || calculateCombinedWidth($tabs);

		// remove events first to avoid multiple bindings
		$archive.off('click', 'span.prev:not(.inactive)');
		$archive.off('click', 'span.next:not(.inactive)');

		// show prev/next buttons only if tabs do not fit in visible area
		if (tabswidth > $wrapper.outerWidth()) {

		    var visiblewidth = $wrapper.outerWidth() - parseInt($tabbar.css('padding-left'), 10);
		    var $visibleTabs = filterElementsThatDontFitWidth($tabs.slice(firstVisibleIndex), visiblewidth);
		    var tabsvisiblewidth = calculateCombinedWidth($visibleTabs);

		    var offset = -calculateCombinedWidth($tabs.slice(0, firstVisibleIndex));
		    if( $('body').hasClass('dir-rtl') ){
   				$tabbar.css('margin-right', offset);
   			}else{
   				$tabbar.css('margin-left', offset);	   	
			}
		    $archive.addClass("scroll");
		    $prev.toggleClass('inactive', offset >= 0);
		    $next.toggleClass('inactive', offset <= -(tabswidth - visiblewidth));

		    //handler to backward tablist by number of visible tabs
		    $archive.on('click', 'span.prev:not(.inactive)', function (i) {
			$visibleTabs = $($tabs.slice(0, firstVisibleIndex).get().reverse());
			$visibleTabs = filterElementsThatDontFitWidth($visibleTabs, visiblewidth);
			tabsvisiblewidth = calculateCombinedWidth($visibleTabs);

			firstVisibleIndex -= $visibleTabs.length;
			offset = -calculateCombinedWidth($tabs.slice(0, firstVisibleIndex));

			if (offset >= 0) {
			    $prev.addClass('inactive');
			    $next.removeClass('inactive');
			} else {
			    $prev.add($next).removeClass('inactive');
			}

			if( $('body').hasClass('dir-rtl') ){
   				$tabbar.css('margin-right', offset);
   			}else{
   				$tabbar.css('margin-left', offset);	   	
			}
		    });

		    //handler to forward tablist by number of visible tabs
		    $archive.on('click', 'span.next:not(.inactive)', function (i) {
			$visibleTabs = filterElementsThatDontFitWidth($tabs.slice(firstVisibleIndex), visiblewidth);
			
			tabsvisiblewidth = calculateCombinedWidth($visibleTabs);

			firstVisibleIndex += $visibleTabs.length;
			offset = -calculateCombinedWidth($tabs.slice(0, firstVisibleIndex));
			
			if (offset - tabsvisiblewidth <= -(tabswidth)) {
			    $next.addClass('inactive');
			    $prev.removeClass('inactive');
			} else {
			    $next.add($prev).removeClass('inactive');
			}

			if( $('body').hasClass('dir-rtl') ){
   				$tabbar.css('margin-right', offset);
   			}else{
   				$tabbar.css('margin-left', offset);	   	
			}
		    });
		} else {
		    $archive.removeClass('scroll');
		    $tabbar.css('margin-left', 0);
		}

	    };
	    onResize();
	    $(window).resize(function () {
		setTimeout(onResize, 500);
	    });

	    if (window.location.hash.length > 0) {

		var hash = window.location.hash.slice(1);
		var id = hash.indexOf('!') === 0 ? hash.slice(1) : hash;
		var $tab = $('#' + id).parent();

		if ($tab.parent().hasClass('archive_wrapper')) {
		    $(window).load(function () {
			setTimeout(function () {

			    var $pagination = $tab.siblings('.archive_menu');

			    if (allianz.softscroll) {
				allianz.softscroll(null, $tab.closest('.container').attr('id'));
			    }

			    $pagination.find('li').eq($tab.index('.archive_content')).trigger('click');


			}, 0);
		    });

		}
	    }
	}
    };


});
