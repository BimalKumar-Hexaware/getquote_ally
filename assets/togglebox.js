define([], function () {
    return {
	init: function (element) {

	    var isArchive = element.hasClass("top_style");

	    var menu = element.find(".tab_menu"),
		    mode = (menu.is(":visible")) ? "desktop" : "mobile",
		    tabs = menu.find(".tab"),
		    content = element.find(".tab_content"),
		    bodies = content.find(".body"),
		    tabs_m = content.find(".tab-head"),
		    bodies_m = content.find(".tab-body"),
		    archive_menu = element.find(".archive_menu");

	    if (isArchive) {
		mode = (archive_menu.is(":visible")) ? "desktop" : "mobile";
		var $tab_components = tabs_m.find(".block-togglebox_tab-component");
		$tab_components.addClass("accordion_tabs");
	    }
	    
	    tabs.on('click', function (e) {
		var that = $(this),
			n = that.closest('li').prevAll().size();
		tabs.removeClass("open");
		that.addClass("open");
		bodies.hide();
		$(bodies.get(n)).show();
		$(bodies_m.get(n)).show();
		
		return false;
	    });

	    tabs_m.on('click', function (e) {
		var that = $(this),
			n = that.closest('.body').prevAll().size(),
			b = $(bodies_m.get(n)),
			topVal;
		tabs_m.not(that).removeClass("open");
		that.toggleClass("open");
		bodies_m.not(b).hide();
		b.toggle();
		topVal = that.offset().top;
		//fix for Tab Container in Accordion style jumps when opening the tabs 
		//$('body').scrollTop(topVal);
		
		return false;
	    });

	    var initialize = function (mode) {
		
		if (mode !== "mobile") {
		    var menu_height = menu.find("ul").css('height');
		    bodies.not(':first').hide();
		    content.css({height: menu_height});
		    if (!menu.find(".open").get(0)) {
			$(tabs.get(0)).addClass("open").trigger('click');
		    } else {
			menu.find(".open").trigger('click');
		    }
		    
		    if (isArchive) {
			archive_menu.find("li:first").trigger('click');
		    }
		} else {
		    
		    var allActives = element.find(".active");
		    allActives.removeClass("active");
		    menu.find(".open").removeClass("open");
		    bodies.show();
		    content.css({height: 100 + "%"});
		    menu.hide();
		    bodies_m.hide();
		    tabs_m.show();
		    
		}
		
	    };
	    $(window).on("resize",function(e) {
		var m = (menu.is(":visible")) ? "desktop" : "mobile";
		if (isArchive) {
		    m = (archive_menu.is(":visible")) ? "desktop" : "mobile";
		}
		if (m !== mode) {
		    initialize(m);
		}
		mode = m; 
	    });
	    initialize(mode);
	    //}
	}
    };
});
