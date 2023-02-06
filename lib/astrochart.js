// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;
		
	// BG color
	astrology.COLOR_BACKGROUND = "#fff";		 
				
	// Color of planet's symbols
	astrology.POINTS_COLOR = "#000";
	
	// Size of description text next to the planet: angle, retrograde, dignities, ...
	astrology.POINTS_TEXT_SIZE = 8;
	
	// Points strength of lines
	astrology.POINTS_STROKE = 1.8;
		
	// Font color of signs symbols
	astrology.SIGNS_COLOR = "#000"; 
	
	// Signs strength of lines
	astrology.SIGNS_STROKE = 1.5;
	
	// Chart margin
	astrology.MARGIN = 50; //px
		
	// Chart Padding  
	astrology.PADDING = 18; //px
	
	// Module wrapper element ID
	astrology.ID_CHART = "astrology";
	
	// Radix chart element ID
	astrology.ID_RADIX = "radix";
	
	// Transit chart element ID
	astrology.ID_TRANSIT = "transit";
	
	// Aspects wrapper element ID
	astrology.ID_ASPECTS = "aspects";
	
	// Aspects wrapper element ID
	astrology.ID_POINTS = "planets"; 
	
	// Signs wrapper element ID
	astrology.ID_SIGNS = "signs"; 
	
	// Circles wrapper element ID
	astrology.ID_CIRCLES = "circles";
	
	// Axis wrapper element ID
	astrology.ID_AXIS = "axis";
	
	// Cusps wrapper element ID
	astrology.ID_CUSPS = "cusps";
		
	// Cusps wrapper element ID
	astrology.ID_RULER = "ruler";
	
	// Background wrapper element ID
	astrology.ID_BG = "bg";
	
	// Color of circles in charts
	astrology.CIRCLE_COLOR = "#333";
	
	// Circles strength of lines
	astrology.CIRCLE_STRONG = 2;
	
	// Color of lines in charts
	astrology.LINE_COLOR = "#333";
	
	// radius / INDOOR_CIRCLE_RADIUS_RATIO
	astrology.INDOOR_CIRCLE_RADIUS_RATIO = 2;
	
	// radius - radius/INNER_CIRCLE_RADIUS_RATIO
	astrology.INNER_CIRCLE_RADIUS_RATIO = 8;
	
	// ( radius / astrology.INNER_CIRCLE_RADIUS_RATIO ) / astrology.RULER_RADIUS 
	astrology.RULER_RADIUS = 4;
		
	// Points
	astrology.SYMBOL_SUN = "Sun";
	astrology.SYMBOL_MOON = "Moon";
	astrology.SYMBOL_MERCURY = "Mercury";
	astrology.SYMBOL_VENUS = "Venus";
	astrology.SYMBOL_MARS = "Mars";
	astrology.SYMBOL_JUPITER = "Jupiter";
	astrology.SYMBOL_SATURN = "Saturn";
	astrology.SYMBOL_URANUS = "Uranus";
	astrology.SYMBOL_NEPTUNE = "Neptune";
	astrology.SYMBOL_PLUTO = "Pluto";
	astrology.SYMBOL_CHIRON = "Chiron";
	astrology.SYMBOL_LILITH = "Lilith";
	astrology.SYMBOL_NNODE = "NNode";
	
	// Axis
	astrology.SYMBOL_AS = "As";
	astrology.SYMBOL_DS = "Ds";
	astrology.SYMBOL_MC = "Mc";
	astrology.SYMBOL_IC = "Ic";
		
	astrology.SYMBOL_AXIS_FONT_COLOR = "#333";
	astrology.SYMBOL_AXIS_STROKE = 1.6;
		
	// Cusps
	astrology.SYMBOL_CUSP_1 = "1";
	astrology.SYMBOL_CUSP_2 = "2";
	astrology.SYMBOL_CUSP_3 = "3";
	astrology.SYMBOL_CUSP_4 = "4";
	astrology.SYMBOL_CUSP_5 = "5";
	astrology.SYMBOL_CUSP_6 = "6";
	astrology.SYMBOL_CUSP_7 = "7";
	astrology.SYMBOL_CUSP_8 = "8";
	astrology.SYMBOL_CUSP_9 = "9";
	astrology.SYMBOL_CUSP_10 = "10";
	astrology.SYMBOL_CUSP_11 = "11";
	astrology.SYMBOL_CUSP_12 = "12";
	
	// Cusps strength of lines
	astrology.CUSPS_STROKE = 1;
	astrology.CUSPS_FONT_COLOR = "#000";	
	
	//Signs
	astrology.SYMBOL_ARIES = "Aries";
	astrology.SYMBOL_TAURUS = "Taurus";
	astrology.SYMBOL_GEMINI= "Gemini";
	astrology.SYMBOL_CANCER = "Cancer"; 
	astrology.SYMBOL_LEO = "Leo"; 
	astrology.SYMBOL_VIRGO = "Virgo"; 
	astrology.SYMBOL_LIBRA = "Libra";  
	astrology.SYMBOL_SCORPIO = "Scorpio";  
	astrology.SYMBOL_SAGITTARIUS = "Sagittarius";
	astrology.SYMBOL_CAPRICORN = "Capricorn"; 
	astrology.SYMBOL_AQUARIUS = "Aquarius"; 
	astrology.SYMBOL_PISCES = "Pisces";
	astrology.SYMBOL_SIGNS = [astrology.SYMBOL_ARIES, astrology.SYMBOL_TAURUS, astrology.SYMBOL_GEMINI, astrology.SYMBOL_CANCER, astrology.SYMBOL_LEO, astrology.SYMBOL_VIRGO, astrology.SYMBOL_LIBRA, astrology.SYMBOL_SCORPIO, astrology.SYMBOL_SAGITTARIUS, astrology.SYMBOL_CAPRICORN, astrology.SYMBOL_AQUARIUS, astrology.SYMBOL_PISCES];
			 
	// http://www.rapidtables.com/web/color/html-color-codes.htm
	astrology.COLOR_ARIES = "#FF4500";
	astrology.COLOR_TAURUS = "#8B4513";
	astrology.COLOR_GEMINI= "#87CEEB";
	astrology.COLOR_CANCER = "#27AE60"; 
	astrology.COLOR_LEO = "#FF4500"; 
	astrology.COLOR_VIRGO = "#8B4513"; 
	astrology.COLOR_LIBRA = "#87CEEB";  
	astrology.COLOR_SCORPIO = "#27AE60";  
	astrology.COLOR_SAGITTARIUS = "#FF4500";
	astrology.COLOR_CAPRICORN = "#8B4513"; 
	astrology.COLOR_AQUARIUS = "#87CEEB"; 
	astrology.COLOR_PISCES = "#27AE60"; 	        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];

	astrology.CUSTOM_SYMBOL_FN = null
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
	
	// No fill, only stroke
	astrology.STROKE_ONLY = false;

	astrology.ADD_CLICK_AREA = false;
	
	// Planets collision circle radius for astrology.SYMBOL_SCALE = 1
	// Scaling changes the collision radius 
	astrology.COLLISION_RADIUS = 10; //px
	
	// Aspects	
	astrology.ASPECTS = { 
		"conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
		"square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
		"trine":{"degree":120, "orbit":8, "color":"#27AE60"},
		"opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
		};	
	
	// Aspects Settings
	// Format: { orbits: { [point]: { [aspect]: orbit } } }
	astrology.RADIX_ASPECTS_SETTINGS = { orbits: {} };
	astrology.TRANSIT_ASPECTS_SETTINGS = { orbits: {} };

	// Dignities
	astrology.DIGNITIES_RULERSHIP = "r";			
	astrology.DIGNITIES_DETRIMENT = "d";			
	astrology.DIGNITIES_EXALTATION = "e";			
	astrology.DIGNITIES_EXACT_EXALTATION = "E";		
	astrology.DIGNITIES_FALL = "f";	
	
	// Source: Aleister Crowley
	astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT = [
		{"name":"Sun", "position":19, "orbit":2}, // 19 Arise
		{"name":"Moon", "position":33, "orbit":2}, //3 Taurus
		{"name":"Mercury", "position":155, "orbit":2}, //15 Virgo
		{"name":"Venus", "position":357, "orbit":2}, //27 Pisces
		{"name":"Mars", "position":298, "orbit":2}, //28 Capricorn
		{"name":"Jupiter", "position":105, "orbit":2}, //15 Cancer
		{"name":"Saturn", "position":201, "orbit":2}, //21 Libra
		{"name":"NNode", "position":63, "orbit":2}, //3 Geminy
	];
	
	// 0 - 4
	astrology.ANIMATION_CUSPS_ROTATION_SPEED = 2;
	
	astrology.DEBUG = false;
									       	      
}( window.astrology = window.astrology || {}));
// ## SVG #####################
(function( astrology ) {
	
	var context;
		
	/**
	 * SVG tools.
	 * 
	 * @class
	 * @public
	 * @constructor
	 * @param {String} elementId - root DOM Element 
	 * @param {int} width
	 * @param {int} height 
	 */
	astrology.SVG = function( elementId, width, height){		
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");		
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		svg.setAttribute('style', "position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);		
		svg.setAttribute('viewBox', "0 0 "+ width + " " + height);									
		document.getElementById( elementId ).appendChild( svg );
		
		astrology._paperElementId = elementId + "-" + astrology.ID_CHART;		
		
		var wrapper = document.createElementNS(svg.namespaceURI, "g");
		wrapper.setAttribute('id', astrology._paperElementId );
		svg.appendChild( wrapper );
						
		this.DOMElement = svg;				
		this.root = wrapper;
		this.width = width;
		this.height = height;
										
		context = this;
	};	
	
	astrology.SVG.prototype._getSymbol = function( name, x, y){
		switch(name) {
			case astrology.SYMBOL_SUN:		        
		        return sun( x, y);		        
		        break;
		    case astrology.SYMBOL_MOON:		        
		        return moon( x, y);		        
		        break;
		   case astrology.SYMBOL_MERCURY:		        
		        return mercury( x, y);		        
		        break;     
		    case astrology.SYMBOL_VENUS:		        
		        return venus( x, y);		        
		        break;	
		    case astrology.SYMBOL_MARS:		        
		        return mars( x, y);		        
		        break;
		    case astrology.SYMBOL_JUPITER:		        
		        return jupiter( x, y);		        
		        break;
		    case astrology.SYMBOL_SATURN:		        
		        return saturn( x, y);		        
		        break; 
		    case astrology.SYMBOL_URANUS:		        
		        return uranus( x, y);		        
		        break;
		    case astrology.SYMBOL_NEPTUNE:		        
		        return neptune( x, y);		        
		        break;
		    case astrology.SYMBOL_PLUTO:		        
		        return pluto( x, y);		        
		        break;
		    case astrology.SYMBOL_CHIRON:		        
		        return chiron( x, y);		        
		        break;
		    case astrology.SYMBOL_LILITH:		        
		        return lilith( x, y);		        
		        break;
		    case astrology.SYMBOL_NNODE:		        
		        return nnode( x, y);		        
		        break;
		    case astrology.SYMBOL_ARIES:		        
		        return aries( x, y);		        
		        break; 
		    case astrology.SYMBOL_TAURUS:		        
		        return taurus( x, y);		        
		        break;
		    case astrology.SYMBOL_GEMINI:		        
		        return gemini( x, y);		        
		        break;
		    case astrology.SYMBOL_CANCER:		        
		        return cancer( x, y);		        
		        break;
		    case astrology.SYMBOL_LEO:		        
		        return leo( x, y);		        
		        break;
		    case astrology.SYMBOL_VIRGO:		        
		        return virgo( x, y);		        
		        break;
		    case astrology.SYMBOL_LIBRA:		        
		        return libra( x, y);		        
		        break;
		    case astrology.SYMBOL_SCORPIO:		        
		        return scorpio( x, y);		        
		        break;
		    case astrology.SYMBOL_SAGITTARIUS:		        
		        return sagittarius( x, y);		        
		        break;
		    case astrology.SYMBOL_CAPRICORN:		        
		        return capricorn( x, y);		        
		        break;
		    case astrology.SYMBOL_AQUARIUS:		        
		        return aquarius( x, y);		        
		        break; 
		    case astrology.SYMBOL_PISCES:		        
		        return pisces( x, y);		        
		        break;		        
		    case astrology.SYMBOL_AS:		        
		        return ascendant( x, y );		        
		        break;		    
		    case astrology.SYMBOL_DS:		        
		        return descendant( x, y );		        
		        break;
		    case astrology.SYMBOL_MC:		        
		        return mediumCoeli( x, y );		        
		        break;
		    case astrology.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;	
		    case astrology.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;		    
		    case astrology.SYMBOL_CUSP_1:		        
		        return number1( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_2:		        
		        return number2( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_3:		        
		        return number3( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_4:		        
		        return number4( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_5:		        
		        return number5( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_6:		        
		        return number6( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_7:		        
		        return number7( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_8:		        
		        return number8( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_9:		        
		        return number9( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_10:		        
		        return number10( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_11:		        
		        return number11( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_12:		        
		        return number12( x, y );		        
		        break; 		                                                                                              	
		    default:
		    	var unknownPoint = this.circle(x, y, 8);
		    	unknownPoint.setAttribute("stroke", "#ffff00");		 
				unknownPoint.setAttribute("stroke-width", 1);
		    	unknownPoint.setAttribute("fill", "#ff0000");		    							    			    			    			    		
		    	return unknownPoint;	 
		}			
	};


	/**
	 * Get a required symbol. 
	 * 
	 * @param {String} name
	 * @param {int} x
	 * @param {int} y
	 * 
	 * @return {SVG g}
	 */
	 astrology.SVG.prototype.getSymbol = function( name, x, y){
		if(astrology.CUSTOM_SYMBOL_FN == null) return astrology.SVG.prototype._getSymbol(name, x, y);

		const symbol = astrology.CUSTOM_SYMBOL_FN(name, x, y, context);
		if(symbol == null || symbol == undefined) return astrology.SVG.prototype._getSymbol(name, x, y);

		return symbol;
	}


	/**
	 * Create transparent rectangle. 
	 * 
	 * Used to improve area click, @see astrology.ADD_CLICK_AREA
	 * 
	 * @param {Number} x
	 * @param {Number} y
	 * 
	 * @return {HTMLElement} rect
	 */
	function createRectForClick(x, y) {
		var rect = document.createElementNS(context.root.namespaceURI, 'rect')
		rect.setAttribute('x', x - astrology.SIGNS_STROKE)
		rect.setAttribute('y', y - astrology.SIGNS_STROKE)
		rect.setAttribute('width', '20px')
		rect.setAttribute('height', '20px')
		rect.setAttribute('fill', 'transparent')
		return rect
	}
	
	/**
	 * Get ID for sign wrapper. 
	 * 
	 * @param {String} sign
	 * 
	 * @return {String id}
	 */
	function getSignWrapperId(sign) {
		return astrology._paperElementId + '-' + astrology.ID_RADIX + '-' + astrology.ID_SIGNS + '-' + sign
	}

	/**
	 * Get ID for house wrapper. 
	 * 
	 * @param {String} house
	 * 
	 * @return {String id}
	 */
	function getHouseIdWrapper(house) {
		return astrology._paperElementId + '-' + astrology.ID_RADIX + '-' + astrology.ID_CUSPS + '-' + house
	}

	/*
	 * Sun path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVG g}
	 */
	function sun( x, y ){
		
		// center symbol
		var xShift = -10; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
					
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
						
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 8.9879 -17.9758 c 3.8269 0.0878 6.3635 2.6244 6.3635 2.6244 c 2.5366 2.5366 2.6244 6.3635 2.6244 6.3635 c -0.0878 3.8269 -2.6244 6.3635 -2.6244 6.3635 c -2.5366 2.5366 -6.3635 2.6244 -6.3635 2.6244 c -3.8269 -0.0878 -6.3635 -2.6244 -6.3635 -2.6244 c -2.5366 -2.5366 -2.6244 -6.3635 -2.6244 -6.3635 c 0.0878 -3.8269 2.6244 -6.3635 2.6244 -6.3635 c 2.5366 -2.5366 6.3635 -2.6244 6.3635 -2.6244 h 0 z m 0 0 z m 0 1.6852 c -3.1071 0.0702 -5.1698 2.1329 -5.1698 2.1329 c -2.0627 2.0627 -2.1329 5.1698 -2.1329 5.1698 c 0.0702 3.1071 2.1329 5.1698 2.1329 5.1698 c 2.0627 2.0627 5.1698 2.1329 5.1698 2.1329 c 3.1071 -0.0702 5.1698 -2.1329 5.1698 -2.1329 c 2.0627 -2.0627 2.1329 -5.1698 2.1329 -5.1698 c -0.0702 -3.1071 -2.1329 -5.1698 -2.1329 -5.1698 c -2.0627 -2.0627 -5.1698 -2.1329 -5.1698 -2.1329 h 0 z m 0 0 z m 0 5.6526 c 0.7022 0.0176 1.1674 0.4827 1.1674 0.4827 c 0.4652 0.4652 0.4652 1.1674 0.4652 1.1674 c 0 0.7022 -0.4652 1.1674 -0.4652 1.1674 c -0.4652 0.4652 -1.1674 0.4652 -1.1674 0.4652 c -0.7022 0 -1.1674 -0.4652 -1.1674 -0.4652 c -0.4652 -0.4652 -0.4652 -1.1674 -0.4652 -1.1674 c 0 -0.7022 0.4652 -1.1674 0.4652 -1.1674 c 0.4652 -0.4652 1.1674 -0.4827 1.1674 -0.4827 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
																	
		return wrapper;
	};
	
	/*
	 * Moon path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function moon( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 11.5158 -17.9758 c -3.8269 0.0878 -6.3635 2.6244 -6.3635 2.6244 c -2.5366 2.5366 -2.6244 6.3635 -2.6244 6.3635 c 0.0878 3.8269 2.6244 6.3635 2.6244 6.3635 c 2.5366 2.5366 6.3635 2.6244 6.3635 2.6244 c 1.7906 0 3.4231 -0.6846 3.4231 -0.6846 c 0.5266 -0.2458 0.5266 -0.7724 0.5266 -0.7724 c 0 -0.5266 -0.5266 -0.7724 -0.5266 -0.7724 c -2.0539 -0.8777 -3.2739 -2.6771 -3.2739 -2.6771 c -1.22 -1.7993 -1.2376 -4.0814 -1.2376 -4.0814 c 0.0176 -2.2821 1.2376 -4.0814 1.2376 -4.0814 c 1.22 -1.7993 3.2739 -2.6771 3.2739 -2.6771 c 0.5266 -0.2458 0.5266 -0.7724 0.5266 -0.7724 c 0 -0.5266 -0.5266 -0.7724 -0.5266 -0.7724 c -1.6326 -0.6846 -3.4231 -0.6846 -3.4231 -0.6846 h 0 z m 0 0 z m 0.3686 1.7028 c 0.1755 0 0.3511 0.0176 0.3511 0.0176 l 0.1755 0.0176 l -0.0176 0.0176 c -1.7028 1.2639 -2.6683 3.1423 -2.6683 3.1423 c -0.9655 1.8783 -0.9831 4.0902 -0.9831 4.0902 v 0.316 c 0.0878 2.0363 0.9743 3.7654 0.9743 3.7654 c 0.8865 1.7291 2.4137 2.9579 2.4137 2.9579 l 0.2809 0.2107 l -0.1755 0.0176 c -0.3511 0.0351 -0.7197 0.0351 -0.7197 0.0351 c -3.1071 -0.0702 -5.1698 -2.1329 -5.1698 -2.1329 c -2.0627 -2.0627 -2.1329 -5.1698 -2.1329 -5.1698 c 0.0702 -3.1071 2.1329 -5.1698 2.1329 -5.1698 c 2.0627 -2.0627 5.1698 -2.1329 5.1698 -2.1329 l 0.3686 0.0176 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mercury path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mercury( x, y ){
		
		// center symbol
		var xShift = -7; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " z m 12.253 -17.9758 c 0.3511 0.0176 0.5881 0.2545 0.5881 0.2545 c 0.237 0.237 0.2545 0.5881 0.2545 0.5881 c -0.0176 1.0006 -0.4476 1.8432 -0.4476 1.8432 c -0.4301 0.8426 -1.1674 1.4219 -1.1674 1.4219 c 0.7373 0.5617 1.1674 1.4044 1.1674 1.4044 c 0.4301 0.8426 0.4476 1.8432 0.4476 1.8432 c -0.0351 1.5097 -0.9392 2.6068 -0.9392 2.6068 c -0.9041 1.0972 -2.326 1.4131 -2.326 1.4131 v 1.6501 h 2.4225 c 0.3511 0.0176 0.5881 0.2545 0.5881 0.2545 c 0.237 0.237 0.237 0.5793 0.237 0.5793 c 0 0.3423 -0.2019 0.5705 -0.2019 0.5705 c -0.2019 0.2282 -0.5179 0.2809 -0.5179 0.2809 h -2.5278 v 2.4225 c 0 0.3511 -0.237 0.5881 -0.237 0.5881 c -0.237 0.237 -0.5793 0.2458 -0.5793 0.2458 c -0.3423 0.0088 -0.5793 -0.2019 -0.5793 -0.2019 c -0.237 -0.2107 -0.2721 -0.5091 -0.2721 -0.5091 l -0.0176 -2.5454 h -2.405 c -0.3686 0 -0.6056 -0.237 -0.6056 -0.237 c -0.237 -0.237 -0.237 -0.5793 -0.237 -0.5793 c 0 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2019 -0.2282 0.5179 -0.2809 0.5179 -0.2809 l 2.5278 -0.0176 v -1.6501 c -1.3693 -0.316 -2.2558 -1.3429 -2.2558 -1.3429 c -0.8865 -1.0269 -0.9918 -2.4489 -0.9918 -2.4489 v -0.2282 c 0 -1.0006 0.4301 -1.8432 0.4301 -1.8432 c 0.4301 -0.8426 1.1674 -1.4044 1.1674 -1.4044 c -0.7373 -0.5793 -1.1674 -1.4219 -1.1674 -1.4219 c -0.4301 -0.8426 -0.4301 -1.8432 -0.4301 -1.8432 c 0 -0.3511 0.237 -0.5881 0.237 -0.5881 c 0.237 -0.237 0.5969 -0.237 0.5969 -0.237 c 0.3599 0 0.5969 0.237 0.5969 0.237 c 0.237 0.237 0.2545 0.5881 0.2545 0.5881 c 0.0176 1.0182 0.7022 1.7028 0.7022 1.7028 c 0.6846 0.6846 1.7028 0.7197 1.7028 0.7197 c 1.0357 -0.0351 1.7116 -0.7197 1.7116 -0.7197 c 0.6758 -0.6846 0.711 -1.7028 0.711 -1.7028 c 0 -0.3511 0.237 -0.5881 0.237 -0.5881 c 0.237 -0.237 0.6056 -0.2545 0.6056 -0.2545 h 0 z m 0 0 z m -3.2651 4.9504 c -1.0182 0.0176 -1.7028 0.7022 -1.7028 0.7022 c -0.6846 0.6846 -0.7022 1.7028 -0.7022 1.7028 c 0.0176 1.0357 0.7022 1.7116 0.7022 1.7116 c 0.6846 0.6758 1.7028 0.711 1.7028 0.711 c 1.0357 -0.0351 1.7116 -0.711 1.7116 -0.711 c 0.6758 -0.6758 0.711 -1.7116 0.711 -1.7116 c -0.0351 -1.0182 -0.711 -1.7028 -0.711 -1.7028 c -0.6758 -0.6846 -1.7116 -0.7022 -1.7116 -0.7022 h 0 z");
			body.setAttribute("stroke", "none");
			body.setAttribute("stroke-width", 0);
			body.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild( body );
											
		return wrapper;

	};
		
	/*
	 * Venus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function venus( x, y ){
		
		// center symbol
		var xShift = -7; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 8.9879 -17.9758 c 2.089 0.0527 3.4758 1.4395 3.4758 1.4395 c 1.3868 1.3868 1.4395 3.4758 1.4395 3.4758 c -0.0351 1.8608 -1.1674 3.1861 -1.1674 3.1861 c -1.1323 1.3254 -2.9053 1.6589 -2.9053 1.6589 v 2.4576 l 3.23 0 c 0.3686 0.0176 0.6056 0.2545 0.6056 0.2545 c 0.237 0.237 0.237 0.5793 0.237 0.5793 c 0 0.3423 -0.2019 0.5705 -0.2019 0.5705 c -0.2019 0.2282 -0.5179 0.2809 -0.5179 0.2809 h -3.3529 l 0 3.23 c 0 0.3511 -0.237 0.5881 -0.237 0.5881 c -0.237 0.237 -0.5793 0.2458 -0.5793 0.2458 c -0.3423 0.0088 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2107 -0.2809 -0.5091 -0.2809 -0.5091 l -0.0176 -3.3529 h -3.2125 c -0.3686 -0.0176 -0.6056 -0.2545 -0.6056 -0.2545 c -0.237 -0.237 -0.237 -0.5793 -0.237 -0.5793 c 0 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2019 -0.2282 0.5179 -0.2809 0.5179 -0.2809 l 3.3354 0 v -2.4576 c -1.7028 -0.3335 -2.8175 -1.5799 -2.8175 -1.5799 c -1.1147 -1.2464 -1.2376 -3.0194 -1.2376 -3.0194 v -0.2458 c 0.0527 -2.089 1.4307 -3.4758 1.4307 -3.4758 c 1.378 -1.3868 3.467 -1.4395 3.467 -1.4395 h 0 z m 0 0 z m 0 1.6853 c -1.3693 0.0351 -2.2821 0.9479 -2.2821 0.9479 c -0.9128 0.9128 -0.9304 2.2821 -0.9304 2.2821 c 0.0176 1.3693 0.9304 2.2821 0.9304 2.2821 c 0.9128 0.9128 2.2821 0.9479 2.2821 0.9479 c 1.3868 -0.0351 2.2909 -0.9479 2.2909 -0.9479 c 0.9041 -0.9128 0.9392 -2.2821 0.9392 -2.2821 c -0.0351 -1.3693 -0.9392 -2.2821 -0.9392 -2.2821 c -0.9041 -0.9128 -2.2909 -0.9479 -2.2909 -0.9479 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mars path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mars( x, y ){
		
		// center symbol
		var xShift = -12; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");								
			node.setAttribute("d", "m" + x + ", " + y + " z m 17.1507 -17.9758 h 0.0176 h 0.0527 h -0.0702 c 0.0702 0 0.1404 0.0176 0.1404 0.0176 l 0.2107 0.0702 l 0.1404 0.0878 c 0.1053 0.0702 0.1755 0.158 0.1755 0.158 l -0.0878 -0.0878 c 0.0702 0.0702 0.1229 0.1404 0.1229 0.1404 l 0.0527 0.1053 c 0.0527 0.1053 0.0702 0.2282 0.0702 0.2282 l 0.0176 7.0042 c -0.0176 0.3511 -0.2545 0.5881 -0.2545 0.5881 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 l -0.0176 -4.9504 l -5.3717 5.3892 c 1.299 1.7906 1.2113 3.9147 1.2113 3.9147 c -0.0878 2.1241 -1.5799 3.8093 -1.5799 3.8093 l -0.1931 0.2107 c -1.8608 1.773 -4.2833 1.773 -4.2833 1.773 c -2.4225 0 -4.2833 -1.773 -4.2833 -1.773 c -1.7906 -1.8783 -1.7906 -4.2921 -1.7906 -4.2921 c 0 -2.4137 1.7906 -4.2921 1.7906 -4.2921 c 1.6852 -1.615 3.8795 -1.7554 3.8795 -1.7554 c 2.1943 -0.1404 4.0551 1.2113 4.0551 1.2113 l 5.3892 -5.3892 h -4.7222 c -0.316 0 -0.553 -0.2107 -0.553 -0.2107 c -0.237 -0.2107 -0.2721 -0.5091 -0.2721 -0.5091 l -0.0176 -0.1229 c 0.0176 -0.3335 0.2194 -0.5617 0.2194 -0.5617 c 0.2019 -0.2282 0.5179 -0.2809 0.5179 -0.2809 l 6.8638 0 h 0 z m 0 0 z m -7.9873 8.8123 c -1.3517 -1.2815 -3.0984 -1.2815 -3.0984 -1.2815 c -1.7467 0 -3.0808 1.2815 -3.0808 1.2815 c -1.2815 1.3517 -1.2815 3.0984 -1.2815 3.0984 c 0 1.7467 1.2815 3.0984 1.2815 3.0984 c 1.3341 1.2815 3.0808 1.2815 3.0808 1.2815 c 1.7467 0 3.0984 -1.2815 3.0984 -1.2815 c 1.2815 -1.3517 1.2815 -3.0984 1.2815 -3.0984 c 0 -1.7467 -1.2815 -3.0984 -1.2815 -3.0984 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Jupiter path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function jupiter( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 12.9552 -17.9758 c 0.3335 0 0.5705 0.2107 0.5705 0.2107 c 0.237 0.2107 0.2721 0.5266 0.2721 0.5266 l 0.0176 11.7088 l 1.8432 0 c 0.3335 0 0.5705 0.2107 0.5705 0.2107 c 0.237 0.2107 0.2721 0.5266 0.2721 0.5266 l 0.0176 0.1053 c 0 0.3335 -0.2107 0.5705 -0.2107 0.5705 c -0.2107 0.237 -0.5266 0.2721 -0.5266 0.2721 l -1.9661 0.0176 v 2.9843 c -0.0176 0.3511 -0.2545 0.5881 -0.2545 0.5881 c -0.237 0.237 -0.5793 0.2458 -0.5793 0.2458 c -0.3423 0.0088 -0.5793 -0.2019 -0.5793 -0.2019 c -0.237 -0.2107 -0.2896 -0.5266 -0.2896 -0.5266 l 0 -3.0896 h -9.1283 c -0.7548 -0.0878 -0.8426 -0.7461 -0.8426 -0.7461 c -0.0878 -0.6583 0.6144 -0.9216 0.6144 -0.9216 l 0.4038 -0.1404 l 0.632 -0.2984 c 1.2815 -0.6144 2.5454 -1.7203 2.5454 -1.7203 c 1.6677 -1.5624 2.3435 -3.8269 2.3435 -3.8269 c 0.6758 -2.2645 -0.2721 -3.6864 -0.2721 -3.6864 c -1.2464 -1.4044 -2.9579 -0.9918 -2.9579 -0.9918 c -1.7116 0.4125 -2.2031 1.9222 -2.2031 1.9222 c -0.1229 0.5969 -0.0351 1.0006 -0.0351 1.0006 c 0.0878 0.4038 0.3511 0.6671 0.3511 0.6671 c 0.1755 0.1755 0.2809 0.2282 0.2809 0.2282 l 0.0351 0.0176 c 0.3335 0.158 0.4564 0.474 0.4564 0.474 c 0.1229 0.316 -0.0176 0.6495 -0.0176 0.6495 c -0.1404 0.3335 -0.4564 0.4564 -0.4564 0.4564 c -0.316 0.1229 -0.6495 -0.0176 -0.6495 -0.0176 c -0.4038 -0.1404 -0.8953 -0.6495 -0.8953 -0.6495 c -0.5442 -0.5793 -0.7461 -1.3868 -0.7461 -1.3868 c -0.2019 -0.8075 0.0263 -1.8257 0.0263 -1.8257 c 0.79 -2.5278 3.4758 -3.1949 3.4758 -3.1949 c 2.6858 -0.6671 4.7046 1.615 4.7046 1.615 c 1.4044 2.089 0.6144 4.9767 0.6144 4.9767 c -0.79 2.8877 -2.9316 4.8538 -2.9316 4.8538 c -0.4389 0.3862 -0.8602 0.7022 -0.8602 0.7022 l -0.1755 0.1404 h 5.6877 v -11.6035 c 0 -0.3511 0.2458 -0.5881 0.2458 -0.5881 c 0.2458 -0.237 0.5969 -0.2545 0.5969 -0.2545 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y-3));
		
		return wrapper;
	};
	
	/*
	 * Saturn path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function saturn( x, y ){
		
		// center symbol
		var xShift = -8; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 7.0744 -17.9758 c 0.3335 0 0.5617 0.2019 0.5617 0.2019 c 0.2282 0.2019 0.2809 0.5179 0.2809 0.5179 v 1.9837 l 1.5448 0 c 0.3686 0 0.6056 0.237 0.6056 0.237 c 0.237 0.237 0.237 0.5793 0.237 0.5793 c 0 0.3423 -0.2019 0.5705 -0.2019 0.5705 c -0.2019 0.2282 -0.5179 0.2809 -0.5179 0.2809 l -1.6677 0.0176 v 1.773 c 0.6144 -0.5617 1.4044 -0.7461 1.4044 -0.7461 c 0.79 -0.1843 1.7554 0.0439 1.7554 0.0439 c 1.5097 0.4038 2.2031 1.4921 2.2031 1.4921 c 0.6934 1.0884 0.5881 2.6332 0.5881 2.6332 c -0.0878 1.1586 -0.553 2.3435 -0.553 2.3435 c -0.4652 1.1849 -1.1849 2.168 -1.1849 2.168 l -0.2107 0.2809 c -0.7724 1.1059 -0.3862 1.6326 -0.3862 1.6326 c 0.3862 0.5266 1.1937 -0.1053 1.1937 -0.1053 c 0.2633 -0.2282 0.5969 -0.2194 0.5969 -0.2194 c 0.3335 0.0088 0.5793 0.2721 0.5793 0.2721 c 0.2458 0.2633 0.2282 0.6056 0.2282 0.6056 c -0.0176 0.3423 -0.2809 0.5881 -0.2809 0.5881 c -2.089 1.5799 -3.4319 0.1317 -3.4319 0.1317 c -1.3429 -1.4482 0.079 -3.8005 0.079 -3.8005 l 0.1053 -0.158 c 0.6671 -0.8251 1.0884 -1.852 1.0884 -1.852 c 0.4213 -1.0269 0.5003 -2.0012 0.5003 -2.0012 c 0.079 -0.9743 -0.2984 -1.5711 -0.2984 -1.5711 c -0.3774 -0.5969 -1.22 -0.8075 -1.22 -0.8075 c -0.7724 -0.1931 -1.3254 0.1053 -1.3254 0.1053 c -0.553 0.2984 -0.9392 1.0533 -0.9392 1.0533 c -0.2458 0.474 -0.3862 0.9831 -0.3862 0.9831 l -0.1053 0.3686 v 3.546 c 0 0.3511 -0.237 0.5881 -0.237 0.5881 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 v -8.865 h -1.5624 c -0.3511 -0.0176 -0.5881 -0.2545 -0.5881 -0.2545 c -0.237 -0.237 -0.237 -0.5793 -0.237 -0.5793 c 0 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2019 -0.2282 0.5179 -0.2809 0.5179 -0.2809 l 1.6677 0 v -1.8608 c 0 -0.3511 0.237 -0.5881 0.237 -0.5881 c 0.237 -0.237 0.5881 -0.2545 0.5881 -0.2545 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Uranus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function uranus( x, y ){
		
		// center symbol
		var xShift = -3; //px
		var yShift = -7; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
								
			var bodyXShift = -7; //7px
			var bodyYShift = 14.5; //14.5px
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + (x + bodyXShift) + ", " + (y + bodyYShift) + " z m 2.5279 -6.6005 c -0.3335 0.158 -0.6495 0.0527 -0.6495 0.0527 c -0.316 -0.1053 -0.4827 -0.4213 -0.4827 -0.4213 c -0.1668 -0.316 -0.0614 -0.632 -0.0614 -0.632 c 0.1053 -0.316 0.4213 -0.4915 0.4213 -0.4915 c 1.0357 -0.5442 1.6413 -1.5097 1.6413 -1.5097 c 0.6056 -0.9655 0.6056 -2.1504 0.6056 -2.1504 c 0 -1.1849 -0.6056 -2.1504 -0.6056 -2.1504 c -0.6056 -0.9655 -1.6413 -1.5097 -1.6413 -1.5097 c -0.316 -0.1755 -0.4213 -0.4915 -0.4213 -0.4915 c -0.1053 -0.316 0.0614 -0.632 0.0614 -0.632 c 0.1668 -0.316 0.4827 -0.4213 0.4827 -0.4213 c 0.316 -0.1053 0.6495 0.0351 0.6495 0.0351 c 1.2639 0.6671 2.0802 1.7906 2.0802 1.7906 c 0.8163 1.1235 1.0269 2.5278 1.0269 2.5278 h 2.5103 l 0 -4.5291 c 0.0176 -0.3511 0.2545 -0.5881 0.2545 -0.5881 c 0.237 -0.237 0.5793 -0.2458 0.5793 -0.2458 c 0.3423 -0.0088 0.5705 0.2019 0.5705 0.2019 c 0.2282 0.2107 0.2809 0.5266 0.2809 0.5266 v 4.6344 h 2.5278 c 0.2107 -1.4044 1.0269 -2.5278 1.0269 -2.5278 c 0.8163 -1.1235 2.0802 -1.7906 2.0802 -1.7906 c 0.3335 -0.1404 0.6495 -0.0351 0.6495 -0.0351 c 0.316 0.1053 0.4827 0.4213 0.4827 0.4213 c 0.1668 0.316 0.0614 0.632 0.0614 0.632 c -0.1053 0.316 -0.4213 0.4915 -0.4213 0.4915 c -1.0357 0.5442 -1.6413 1.5097 -1.6413 1.5097 c -0.6056 0.9655 -0.6056 2.1504 -0.6056 2.1504 c 0 1.1849 0.5969 2.1504 0.5969 2.1504 c 0.5969 0.9655 1.6501 1.5097 1.6501 1.5097 c 0.316 0.1755 0.4213 0.4915 0.4213 0.4915 c 0.1053 0.316 -0.0614 0.632 -0.0614 0.632 c -0.1668 0.316 -0.4827 0.4213 -0.4827 0.4213 c -0.316 0.1053 -0.6495 -0.0527 -0.6495 -0.0527 c -1.2639 -0.6495 -2.0802 -1.773 -2.0802 -1.773 c -0.8163 -1.1235 -1.0269 -2.5454 -1.0269 -2.5454 h -2.5278 v 3.8971 c 1.1586 0.2809 1.8959 1.1586 1.8959 1.1586 c 0.7373 0.8777 0.8251 2.089 0.8251 2.089 l 0.0176 0.2107 c -0.0527 1.5097 -1.0533 2.5191 -1.0533 2.5191 c -1.0006 1.0094 -2.5278 1.0445 -2.5278 1.0445 c -1.5097 -0.0351 -2.5191 -1.0445 -2.5191 -1.0445 c -1.0094 -1.0094 -1.0445 -2.5191 -1.0445 -2.5191 c 0.0351 -1.2815 0.7812 -2.2206 0.7812 -2.2206 c 0.7461 -0.9392 1.9398 -1.2376 1.9398 -1.2376 v -3.8971 h -2.5103 c -0.2107 1.4219 -1.0269 2.5454 -1.0269 2.5454 c -0.8163 1.1235 -2.0802 1.773 -2.0802 1.773 h 0 z m 0 0 z m 6.46 1.1586 c -0.79 0.0176 -1.3254 0.5442 -1.3254 0.5442 c -0.5354 0.5266 -0.553 1.3341 -0.553 1.3341 c 0.0176 0.79 0.553 1.3254 0.553 1.3254 c 0.5354 0.5354 1.3254 0.553 1.3254 0.553 c 0.8075 -0.0176 1.3341 -0.553 1.3341 -0.553 c 0.5266 -0.5354 0.5617 -1.3254 0.5617 -1.3254 c -0.0351 -0.8075 -0.5617 -1.3341 -0.5617 -1.3341 c -0.5266 -0.5266 -1.3341 -0.5442 -1.3341 -0.5442 h 0 z");
			body.setAttribute("stroke", "none");
			body.setAttribute("stroke-width", 0);
			body.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild( body );
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
													
		return wrapper;
	};
	
	/*
	 * Neptune path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function neptune( x, y ){
		
		// center symbol
		var xShift = -10; //3px
		var yShift = 9; //-5px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 14.8336 -17.9758 c 0.3335 0 0.5617 0.2107 0.5617 0.2107 c 0.2282 0.2107 0.2809 0.5091 0.2809 0.5091 l 0 1.7554 c -0.0527 2.5981 -1.6852 4.4325 -1.6852 4.4325 c -1.6326 1.8344 -4.1604 2.2031 -4.1604 2.2031 v 2.563 l 3.7742 0 c 0.3686 0.0176 0.6056 0.2545 0.6056 0.2545 c 0.237 0.237 0.237 0.5793 0.237 0.5793 c 0 0.3423 -0.2019 0.5705 -0.2019 0.5705 c -0.2019 0.2282 -0.5179 0.2809 -0.5179 0.2809 h -3.8971 l 0 3.7742 c 0 0.3511 -0.237 0.5881 -0.237 0.5881 c -0.237 0.237 -0.5793 0.2458 -0.5793 0.2458 c -0.3423 0.0088 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2107 -0.2809 -0.5091 -0.2809 -0.5091 l -0.0176 -3.8971 l -3.7567 0 c -0.3686 0 -0.6056 -0.237 -0.6056 -0.237 c -0.237 -0.237 -0.237 -0.5793 -0.237 -0.5793 c 0 -0.3423 0.2019 -0.5793 0.2019 -0.5793 c 0.2019 -0.237 0.5179 -0.2721 0.5179 -0.2721 l 3.8795 -0.0176 v -2.563 c -2.4576 -0.3686 -4.0726 -2.1153 -4.0726 -2.1153 c -1.615 -1.7467 -1.7554 -4.2745 -1.7554 -4.2745 l 0 -1.7554 c 0 -0.3511 0.237 -0.5881 0.237 -0.5881 c 0.237 -0.237 0.5793 -0.2458 0.5793 -0.2458 c 0.3423 -0.0088 0.5705 0.2019 0.5705 0.2019 c 0.2282 0.2107 0.2809 0.5266 0.2809 0.5266 l 0.0176 1.615 c 0.0351 1.8959 1.1849 3.2388 1.1849 3.2388 c 1.1498 1.3429 2.9579 1.694 2.9579 1.694 v -6.5654 c 0.0176 -0.3511 0.2545 -0.5881 0.2545 -0.5881 c 0.237 -0.237 0.5793 -0.2458 0.5793 -0.2458 c 0.3423 -0.0088 0.5705 0.2019 0.5705 0.2019 c 0.2282 0.2107 0.2809 0.5091 0.2809 0.5091 l 0 6.6883 c 1.7554 -0.3335 2.8965 -1.615 2.8965 -1.615 c 1.141 -1.2815 1.2639 -3.0896 1.2639 -3.0896 v -1.8608 c 0.0176 -0.3511 0.2545 -0.5881 0.2545 -0.5881 c 0.237 -0.237 0.5881 -0.2545 0.5881 -0.2545 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Pluto path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pluto( x, y ){
		
		// center symbol
		var xShift = -10; //5px
		var yShift = 8; //-5px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " z m 14.4825 -15.8517 c 0.3686 0.0176 0.6056 0.2545 0.6056 0.2545 c 0.237 0.237 0.237 0.5881 0.237 0.5881 c -0.0527 2.4752 -1.5799 4.2043 -1.5799 4.2043 c -1.5272 1.7291 -3.9147 2.0802 -3.9147 2.0802 v 2.5103 l 3.6864 0 c 0.3686 0 0.6056 0.237 0.6056 0.237 c 0.237 0.237 0.237 0.5793 0.237 0.5793 c 0 0.3423 -0.2019 0.5793 -0.2019 0.5793 c -0.2019 0.237 -0.5179 0.2721 -0.5179 0.2721 l -3.8093 0.0176 l 0 3.6864 c 0 0.3511 -0.237 0.5881 -0.237 0.5881 c -0.237 0.237 -0.5881 0.2458 -0.5881 0.2458 c -0.3511 0.0088 -0.5793 -0.2019 -0.5793 -0.2019 c -0.2282 -0.2107 -0.2633 -0.5266 -0.2633 -0.5266 l -0.0176 -3.7918 l -3.6864 0 c -0.3511 -0.0176 -0.5969 -0.2545 -0.5969 -0.2545 c -0.2458 -0.237 -0.2458 -0.5793 -0.2458 -0.5793 c 0 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2019 -0.2282 0.5179 -0.2809 0.5179 -0.2809 l 3.8093 0 v -2.5103 c -2.3699 -0.3511 -3.9059 -2.0802 -3.9059 -2.0802 c -1.536 -1.7291 -1.5887 -4.2043 -1.5887 -4.2043 c 0.0176 -0.3511 0.2545 -0.5881 0.2545 -0.5881 c 0.237 -0.237 0.5881 -0.237 0.5881 -0.237 c 0.3511 0 0.5881 0.237 0.5881 0.237 c 0.237 0.237 0.2545 0.5881 0.2545 0.5881 c 0.0527 1.9837 1.3605 3.2915 1.3605 3.2915 c 1.3078 1.3078 3.2915 1.3605 3.2915 1.3605 c 1.9837 -0.0527 3.3002 -1.3605 3.3002 -1.3605 c 1.3166 -1.3078 1.3517 -3.2915 1.3517 -3.2915 c 0.0176 -0.3511 0.2545 -0.5881 0.2545 -0.5881 c 0.237 -0.237 0.5881 -0.2545 0.5881 -0.2545 h 0 z m 0 0 z m -5.4946 -2.1241 c 1.1937 0.0351 1.9924 0.8251 1.9924 0.8251 c 0.7987 0.79 0.8338 2.0012 0.8338 2.0012 c -0.0351 1.1937 -0.8338 1.9924 -0.8338 1.9924 c -0.7987 0.7987 -1.9924 0.8163 -1.9924 0.8163 c -1.1937 -0.0176 -1.9924 -0.8163 -1.9924 -0.8163 c -0.7987 -0.7987 -0.8338 -1.9924 -0.8338 -1.9924 c 0.0351 -1.2113 0.8338 -2.0012 0.8338 -2.0012 c 0.7987 -0.79 1.9924 -0.8251 1.9924 -0.8251 h 0 z m 0 0 z m 0 1.6852 c -0.474 0.0176 -0.7987 0.3335 -0.7987 0.3335 c -0.3248 0.316 -0.3248 0.7987 -0.3248 0.7987 c 0 0.4827 0.3248 0.8075 0.3248 0.8075 c 0.3248 0.3248 0.8075 0.3248 0.8075 0.3248 c 0.4827 0 0.7987 -0.3248 0.7987 -0.3248 c 0.316 -0.3248 0.316 -0.8075 0.316 -0.8075 c 0 -0.4827 -0.316 -0.7987 -0.316 -0.7987 c -0.316 -0.316 -0.8075 -0.3335 -0.8075 -0.3335 h 0 z");
			body.setAttribute("stroke", "none");
			body.setAttribute("stroke-width", 0);
			body.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(body);
														
		return wrapper;
	};
	
	/*
	 * Chiron path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function chiron( x, y ){
		
		// center symbol
		var xShift = -8; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " z m 8.9879 -17.9758 c 0.3335 0 0.5617 0.2107 0.5617 0.2107 c 0.2282 0.2107 0.2809 0.5091 0.2809 0.5091 l 0 2.0539 l 2.5278 -2.5278 c 0.2633 -0.2458 0.5969 -0.2458 0.5969 -0.2458 c 0.3335 0 0.5705 0.237 0.5705 0.237 c 0.237 0.237 0.2633 0.5442 0.2633 0.5442 c 0.0263 0.3072 -0.1668 0.5705 -0.1668 0.5705 l -2.5805 2.5981 l 2.2996 2.2996 c 0.2282 0.2282 0.2458 0.5354 0.2458 0.5354 c 0.0176 0.3072 -0.158 0.553 -0.158 0.553 l -0.0878 0.1053 c -0.2282 0.2282 -0.5354 0.2458 -0.5354 0.2458 c -0.3072 0.0176 -0.5705 -0.1755 -0.5705 -0.1755 l -2.405 -2.3874 l 0 2.9667 c 1.7379 0.316 2.8789 1.5887 2.8789 1.5887 c 1.141 1.2727 1.2464 3.0808 1.2464 3.0808 l 0.0176 0.2282 c -0.0527 2.1241 -1.457 3.5285 -1.457 3.5285 c -1.4044 1.4044 -3.5285 1.457 -3.5285 1.457 c -2.1065 -0.0527 -3.5109 -1.457 -3.5109 -1.457 c -1.4044 -1.4044 -1.457 -3.5285 -1.457 -3.5285 c 0.0351 -1.8783 1.1849 -3.2212 1.1849 -3.2212 c 1.1498 -1.3429 2.9404 -1.6765 2.9404 -1.6765 v -7.25 c 0.0176 -0.3511 0.2545 -0.5881 0.2545 -0.5881 c 0.237 -0.237 0.5881 -0.2545 0.5881 -0.2545 h 0 z m 0 0 z m 0 9.7076 c -1.4044 0.0351 -2.326 0.9655 -2.326 0.9655 c -0.9216 0.9304 -0.9567 2.3172 -0.9567 2.3172 c 0.0351 1.4044 0.9567 2.3347 0.9567 2.3347 c 0.9216 0.9304 2.326 0.9655 2.326 0.9655 c 1.4044 -0.0351 2.3347 -0.9655 2.3347 -0.9655 c 0.9304 -0.9304 0.9655 -2.3347 0.9655 -2.3347 c -0.0351 -1.3868 -0.9655 -2.3172 -0.9655 -2.3172 c -0.9304 -0.9304 -2.3347 -0.9655 -2.3347 -0.9655 h 0 z");
			body.setAttribute("stroke", "none");
			body.setAttribute("stroke-width", 0);
			body.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild( body );
											
		return wrapper;
	};
	
	/*
	 * Lilith path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function lilith( x, y ){
		
		// center symbol
		var xShift = -7; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 10.3045 -17.9758 c 1.0182 0 1.9485 0.3862 1.9485 0.3862 c 0.5266 0.2633 0.5266 0.7812 0.5266 0.7812 c 0 0.5179 -0.5266 0.7812 -0.5266 0.7812 c -0.9655 0.4038 -1.536 1.2464 -1.536 1.2464 c -0.5705 0.8426 -0.5705 1.9047 -0.5705 1.9047 c 0 1.062 0.5705 1.9047 0.5705 1.9047 c 0.5705 0.8426 1.536 1.2639 1.536 1.2639 c 0.5266 0.2458 0.5266 0.7724 0.5266 0.7724 c 0 0.5266 -0.5266 0.7724 -0.5266 0.7724 c -0.9304 0.3862 -1.9485 0.3862 -1.9485 0.3862 c -0.2458 0 -0.474 -0.0176 -0.474 -0.0176 v 2.3172 l 2.9492 0 c 0.3511 0.0176 0.5881 0.2545 0.5881 0.2545 c 0.237 0.237 0.237 0.5793 0.237 0.5793 c 0 0.3423 -0.2019 0.5705 -0.2019 0.5705 c -0.2019 0.2282 -0.5179 0.2809 -0.5179 0.2809 h -3.0545 l 0 2.9492 c -0.0176 0.3511 -0.2545 0.5881 -0.2545 0.5881 c -0.237 0.237 -0.5793 0.2458 -0.5793 0.2458 c -0.3423 0.0088 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2107 -0.2809 -0.5091 -0.2809 -0.5091 v -3.072 l -2.9316 0 c -0.3686 0 -0.6056 -0.237 -0.6056 -0.237 c -0.237 -0.237 -0.237 -0.5793 -0.237 -0.5793 c 0 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2019 -0.2282 0.5179 -0.2809 0.5179 -0.2809 l 3.0545 -0.0176 v -2.5454 c 0 -0.1053 0.0351 -0.2107 0.0351 -0.2107 c -1.3341 -0.632 -2.1416 -1.852 -2.1416 -1.852 c -0.8075 -1.22 -0.8251 -2.7824 -0.8251 -2.7824 c 0.0527 -2.1768 1.4921 -3.6162 1.4921 -3.6162 c 1.4395 -1.4395 3.5987 -1.4921 3.5987 -1.4921 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * NNode path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function nnode( x, y ){
		
		// center symbol
		var xShift = -8; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " z m 3.5285 -7.8995 c 1.5097 0.0351 2.5103 1.0357 2.5103 1.0357 c 1.0006 1.0006 1.0357 2.5103 1.0357 2.5103 l 0 -0.1931 h 0 l 0 0.2633 c -0.0702 1.4746 -1.062 2.4489 -1.062 2.4489 c -0.9918 0.9743 -2.484 1.0094 -2.484 1.0094 c -1.4921 -0.0351 -2.4927 -1.0357 -2.4927 -1.0357 c -1.0006 -1.0006 -1.0357 -2.4927 -1.0357 -2.4927 c 0 -0.8777 0.3774 -1.615 0.3774 -1.615 c 0.3774 -0.7373 1.0269 -1.2288 1.0269 -1.2288 c -0.5442 -2.0539 -0.0176 -4.0726 -0.0176 -4.0726 c 0.5266 -2.0188 2.0539 -3.5811 2.0539 -3.5811 c 2.4401 -2.2996 5.5823 -2.2996 5.5823 -2.2996 c 3.1423 0 5.5823 2.2996 5.5823 2.2996 c 1.5272 1.5799 2.0539 3.6074 2.0539 3.6074 c 0.5266 2.0275 -0.0351 4.099 -0.0351 4.099 c 0.6144 0.4915 0.9831 1.2113 0.9831 1.2113 c 0.3686 0.7197 0.3686 1.5799 0.3686 1.5799 c -0.0351 1.4921 -1.0357 2.4927 -1.0357 2.4927 c -1.0006 1.0006 -2.4927 1.0357 -2.4927 1.0357 c -1.5097 -0.0351 -2.5103 -1.0357 -2.5103 -1.0357 c -1.0006 -1.0006 -1.0357 -2.4927 -1.0357 -2.4927 v 0.0527 v -0.0527 c 0.0351 -1.5097 1.0357 -2.5103 1.0357 -2.5103 c 1.0006 -1.0006 2.5103 -1.0357 2.5103 -1.0357 l 0.1931 0 l 0.4038 0.0527 l 0.0176 -0.0351 c 0.3335 -1.4746 -0.0439 -2.9404 -0.0439 -2.9404 c -0.3774 -1.4658 -1.4131 -2.6244 -1.4131 -2.6244 l -0.2107 -0.1931 c -1.8959 -1.8257 -4.3711 -1.8257 -4.3711 -1.8257 c -2.4752 0 -4.3886 1.8257 -4.3886 1.8257 c -1.141 1.1586 -1.5711 2.6771 -1.5711 2.6771 c -0.4301 1.5185 -0.079 3.0633 -0.079 3.0633 v 0.0351 l 0.2809 -0.0176 l 0.2633 -0.0176 h 0 z m 0 0 z m 0 1.6852 c 0 0.0176 -0.0878 0.0176 -0.0878 0.0176 h -0.0878 l -0.1931 0.0351 l 0.1404 -0.0351 l -0.1755 0.0351 h 0.0351 c -0.0878 0.0176 -0.158 0.0351 -0.158 0.0351 l 0.1229 -0.0351 l -0.1755 0.0527 l -0.1755 0.0702 c -0.4915 0.2282 -0.7812 0.6671 -0.7812 0.6671 c -0.2896 0.4389 -0.3072 1.0182 -0.3072 1.0182 c 0.0351 0.7724 0.553 1.2903 0.553 1.2903 c 0.5179 0.5179 1.2903 0.553 1.2903 0.553 c 0.79 -0.0351 1.3078 -0.553 1.3078 -0.553 c 0.5179 -0.5179 0.553 -1.2903 0.553 -1.2903 c -0.0351 -0.79 -0.553 -1.3078 -0.553 -1.3078 c -0.5179 -0.5179 -1.3078 -0.553 -1.3078 -0.553 h 0 h 0 z m 0 0 z m 10.9189 0 c -0.0176 0.0176 -0.0878 0.0176 -0.0878 0.0176 l -0.2458 0.0176 l 0.0878 -0.0176 l -0.1229 0.0176 h 0.0351 l -0.158 0.0351 l 0.1229 -0.0351 l -0.1755 0.0527 l 0.0527 -0.0176 l -0.1404 0.0527 l 0.0878 -0.0351 l -0.1755 0.0702 l 0.0878 -0.0351 l -0.1404 0.0527 l 0.0527 -0.0176 l -0.158 0.0702 l 0.1053 -0.0527 l -0.1404 0.0702 l 0.0351 -0.0176 l -0.1229 0.0702 l 0.0878 -0.0527 l -0.1229 0.0702 l 0.0351 -0.0176 l -0.1229 0.0878 l 0.0878 -0.0702 l -0.1229 0.0878 l 0.0351 -0.0176 c -0.3335 0.2458 -0.5266 0.632 -0.5266 0.632 c -0.1931 0.3862 -0.1931 0.8426 -0.1931 0.8426 l -0.0176 -0.0176 l 0.0176 0.1755 c 0.0702 0.7197 0.5793 1.1937 0.5793 1.1937 c 0.5091 0.474 1.2639 0.4915 1.2639 0.4915 c 0.7724 -0.0351 1.2903 -0.553 1.2903 -0.553 c 0.5179 -0.5179 0.553 -1.2903 0.553 -1.2903 c -0.0176 -0.6144 -0.3423 -1.0708 -0.3423 -1.0708 c -0.3248 -0.4564 -0.8689 -0.6671 -0.8689 -0.6671 l -0.1053 -0.0351 l 0.1053 0.0351 l -0.158 -0.0527 l 0.0527 0.0176 l -0.1404 -0.0351 l 0.0878 0.0176 l -0.158 -0.0351 l 0.0702 0.0176 l -0.1404 -0.0176 h 0.0702 l -0.316 -0.0351 h 0 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.POINTS_COLOR);
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Aries symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aries( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_ARIES));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 13.6048 -17.8178 c 2.1065 -0.474 3.0632 0.5705 3.0632 0.5705 c 0.9567 1.0445 0.869 3.0984 0.869 3.0984 c -0.0527 1.0006 -0.2984 2.0539 -0.2984 2.0539 l -0.0878 0.3862 l -0.2107 0.7373 c -0.1229 0.3335 -0.4213 0.4828 -0.4213 0.4828 c -0.2984 0.1492 -0.6407 0.0439 -0.6407 0.0439 c -0.3423 -0.1053 -0.4915 -0.4125 -0.4915 -0.4125 c -0.1492 -0.3072 -0.0439 -0.6407 -0.0439 -0.6407 l 0.2458 -0.9655 c 0.2107 -0.9304 0.2633 -1.7554 0.2633 -1.7554 c 0.0702 -1.2814 -0.3423 -1.7642 -0.3423 -1.7642 c -0.4125 -0.4828 -1.5009 -0.2019 -1.5009 -0.2019 c -0.8251 0.2107 -1.5623 1.6502 -1.5623 1.6502 c -0.7373 1.4395 -1.3166 3.8971 -1.3166 3.8971 l -0.158 0.7022 c -0.1229 0.5442 -0.2282 1.1411 -0.2282 1.1411 c -0.2282 1.3166 -0.4125 2.7034 -0.4125 2.7034 c -0.1843 1.3868 -0.3247 2.7912 -0.3247 2.7912 l -0.1053 1.3868 l -0.0702 1.1059 c -0.1229 0.8075 -0.8338 0.8075 -0.8338 0.8075 c -0.7109 0 -0.8514 -0.8075 -0.8514 -0.8075 l -0.0351 -0.6846 l -0.1404 -1.8081 c -0.1229 -1.4044 -0.3072 -2.7912 -0.3072 -2.7912 c -0.1843 -1.3868 -0.4301 -2.7034 -0.4301 -2.7034 c -0.1404 -0.79 -0.2984 -1.4921 -0.2984 -1.4921 l -0.158 -0.7022 c -0.5793 -2.2996 -1.2902 -3.6425 -1.2902 -3.6425 c -0.7109 -1.343 -1.5009 -1.5535 -1.5009 -1.5535 c -1.0884 -0.2809 -1.5009 0.2019 -1.5009 0.2019 c -0.4125 0.4828 -0.3423 1.7642 -0.3423 1.7642 c 0.0351 0.8251 0.2458 1.7554 0.2458 1.7554 l 0.0878 0.3511 l 0.1756 0.6144 c 0.1053 0.3335 -0.0527 0.6407 -0.0527 0.6407 c -0.158 0.3072 -0.4915 0.4125 -0.4915 0.4125 c -0.3335 0.1053 -0.632 -0.0439 -0.632 -0.0439 c -0.2984 -0.1492 -0.4213 -0.4828 -0.4213 -0.4828 l -0.0878 -0.2458 l -0.2107 -0.8777 c -0.2458 -1.0533 -0.2984 -2.0539 -0.2984 -2.0539 c -0.1053 -2.0539 0.8602 -3.0984 0.8602 -3.0984 c 0.9655 -1.0445 3.072 -0.5705 3.072 -0.5705 c 1.2814 0.3335 2.2207 1.773 2.2207 1.773 c 0.9391 1.4395 1.6062 3.8795 1.6062 3.8795 l 0.1756 0.7197 c 0.1756 0.7197 0.3511 1.5272 0.3511 1.5272 l 0.2458 1.3693 l 0.1053 -0.5442 c 0.667 -3.6865 1.7028 -5.9159 1.7028 -5.9159 c 1.0357 -2.2294 2.6332 -2.756 2.6332 -2.756 l 0.1756 -0.0527 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y-4));
		
		return wrapper;
	};
	
	/*
	 * Taurus symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function taurus( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_TAURUS));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 17.0279 -17.5545 c 0.4213 0.2458 0.5968 0.474 0.5968 0.474 c 0.2282 0.2633 0.2107 0.6056 0.2107 0.6056 c -0.0175 0.3423 -0.2721 0.5617 -0.2721 0.5617 c -0.2545 0.2195 -0.5617 0.2195 -0.5617 0.2195 c -0.3072 0 -0.553 -0.1931 -0.553 -0.1931 l -0.0878 -0.0878 c -0.0175 -0.0175 -0.1756 -0.1229 -0.1756 -0.1229 c -0.2984 -0.1756 -0.6934 -0.1931 -0.6934 -0.1931 c -0.3949 -0.0175 -0.9216 0.1931 -0.9216 0.1931 c -0.2984 0.1229 -0.5003 0.4125 -0.5003 0.4125 c -0.2019 0.2896 -0.3949 0.9041 -0.3949 0.9041 l -0.2282 0.7197 c -0.2282 0.8426 -0.5705 1.4658 -0.5705 1.4658 c -0.3423 0.6232 -0.8338 1.0445 -0.8338 1.0445 c 1.4219 0.8075 2.2645 2.2119 2.2645 2.2119 c 0.8426 1.4044 0.8602 3.1598 0.8602 3.1598 c -0.0702 2.6332 -1.8081 4.3711 -1.8081 4.3711 c -1.7379 1.7379 -4.3711 1.8081 -4.3711 1.8081 c -2.6332 -0.0702 -4.3711 -1.8081 -4.3711 -1.8081 c -1.7379 -1.7379 -1.8081 -4.3711 -1.8081 -4.3711 c 0.0175 -1.7554 0.8602 -3.1598 0.8602 -3.1598 c 0.8426 -1.4044 2.2645 -2.2119 2.2645 -2.2119 c -0.4565 -0.3862 -0.7812 -0.9567 -0.7812 -0.9567 c -0.3247 -0.5705 -0.553 -1.3078 -0.553 -1.3078 l -0.3511 -1.1411 c -0.1756 -0.5267 -0.3686 -0.7724 -0.3686 -0.7724 c -0.1931 -0.2458 -0.474 -0.3686 -0.474 -0.3686 c -0.5267 -0.2107 -0.9216 -0.1931 -0.9216 -0.1931 c -0.3949 0.0175 -0.6934 0.1931 -0.6934 0.1931 l -0.1756 0.1229 c -0.2458 0.2633 -0.5793 0.2809 -0.5793 0.2809 c -0.3335 0.0175 -0.6056 -0.2107 -0.6056 -0.2107 c -0.2721 -0.2282 -0.2896 -0.5705 -0.2896 -0.5705 c -0.0175 -0.3423 0.2107 -0.6056 0.2107 -0.6056 c 0.1756 -0.2282 0.5968 -0.474 0.5968 -0.474 c 0.632 -0.3686 1.4132 -0.4125 1.4132 -0.4125 c 0.7812 -0.0439 1.6765 0.3247 1.6765 0.3247 c 0.79 0.2984 1.2112 0.8865 1.2112 0.8865 c 0.4213 0.5881 0.7197 1.6589 0.7197 1.6589 l 0.1756 0.5617 c 0.316 1.1762 0.869 1.6677 0.869 1.6677 c 0.553 0.4915 1.7642 0.5091 1.7642 0.5091 h 0.2107 h 0 c 1.2814 0.0175 1.8783 -0.4301 1.8783 -0.4301 c 0.5968 -0.4477 0.9128 -1.5535 0.9128 -1.5535 l 0.1404 -0.4915 c 0.3335 -1.1937 0.7636 -1.8432 0.7636 -1.8432 c 0.4301 -0.6495 1.2551 -0.9655 1.2551 -0.9655 c 0.8953 -0.3686 1.6765 -0.3247 1.6765 -0.3247 c 0.7812 0.0439 1.4132 0.4125 1.4132 0.4125 h 0 z m 0 0 z m -8.0399 6.8814 c -1.9135 0.0527 -3.1774 1.3166 -3.1774 1.3166 c -1.2639 1.2639 -1.3166 3.1774 -1.3166 3.1774 c 0.0527 1.9135 1.3166 3.1774 1.3166 3.1774 c 1.2639 1.2639 3.1774 1.3166 3.1774 1.3166 c 1.9135 -0.0527 3.1774 -1.3166 3.1774 -1.3166 c 1.2639 -1.2639 1.3166 -3.1774 1.3166 -3.1774 c -0.0527 -1.9135 -1.3166 -3.1774 -1.3166 -3.1774 c -1.2639 -1.2639 -3.1774 -1.3166 -3.1774 -1.3166 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	/*
	 * Gemini symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function gemini( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_GEMINI));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 17.5545 -17.6949 c 0.2282 0.2809 0.2107 0.6144 0.2107 0.6144 c -0.0175 0.3335 -0.2809 0.5793 -0.2809 0.5793 c -0.316 0.2984 -0.8953 0.6846 -0.8953 0.6846 c -0.5793 0.3862 -1.4219 0.79 -1.4219 0.79 c -0.9479 0.4565 -1.9837 0.79 -1.9837 0.79 l 0 10.4274 c 1.1586 0.3335 2.1767 0.8602 2.1767 0.8602 c 0.79 0.4213 1.3342 0.8075 1.3342 0.8075 c 0.5442 0.3862 0.8251 0.7022 0.8251 0.7022 c 0.2458 0.2633 0.2458 0.5968 0.2458 0.5968 c 0 0.3335 -0.2545 0.5881 -0.2545 0.5881 c -0.2545 0.2545 -0.5968 0.2545 -0.5968 0.2545 c -0.3423 0 -0.6056 -0.2633 -0.6056 -0.2633 l -0.4037 -0.3335 c -0.5442 -0.4388 -1.3342 -0.8426 -1.3342 -0.8426 c -1.1235 -0.5793 -2.4751 -0.9128 -2.4751 -0.9128 c -1.3517 -0.3335 -2.9316 -0.3335 -2.9316 -0.3335 c -1.5799 0 -2.9843 0.3335 -2.9843 0.3335 c -1.4044 0.3335 -2.6156 0.9304 -2.6156 0.9304 c -0.8602 0.4037 -1.4746 0.8426 -1.4746 0.8426 l -0.4565 0.3511 c -0.2809 0.2458 -0.6144 0.2282 -0.6144 0.2282 c -0.3335 -0.0175 -0.5793 -0.2896 -0.5793 -0.2896 c -0.2458 -0.2721 -0.2282 -0.6056 -0.2282 -0.6056 c 0.0175 -0.3335 0.2809 -0.5793 0.2809 -0.5793 c 0.316 -0.2984 0.9041 -0.6846 0.9041 -0.6846 c 0.5881 -0.3862 1.4132 -0.79 1.4132 -0.79 c 0.9479 -0.4565 1.9837 -0.79 1.9837 -0.79 l 0 -10.4274 c -1.1586 -0.3335 -2.1767 -0.8602 -2.1767 -0.8602 c -0.79 -0.4213 -1.3342 -0.8075 -1.3342 -0.8075 c -0.5442 -0.3862 -0.8251 -0.7022 -0.8251 -0.7022 c -0.2458 -0.2633 -0.2458 -0.5968 -0.2458 -0.5968 c 0 -0.3335 0.2633 -0.5881 0.2633 -0.5881 c 0.2633 -0.2545 0.5968 -0.2545 0.5968 -0.2545 c 0.3335 0 0.5968 0.2633 0.5968 0.2633 l 0.4037 0.3335 c 0.5442 0.4388 1.3342 0.8426 1.3342 0.8426 c 1.1235 0.5793 2.4751 0.9041 2.4751 0.9041 c 1.3517 0.3247 2.9404 0.3247 2.9404 0.3247 c 1.5886 0 2.993 -0.3247 2.993 -0.3247 c 1.4044 -0.3247 2.6156 -0.9216 2.6156 -0.9216 c 0.8426 -0.4037 1.457 -0.8426 1.457 -0.8426 l 0.4565 -0.3511 c 0.2809 -0.2458 0.6232 -0.2282 0.6232 -0.2282 c 0.3423 0.0175 0.5881 0.2809 0.5881 0.2809 h 0 z m 0 0 z m -8.7422 4.1078 c -1.2112 -0.0175 -2.3172 -0.1931 -2.3172 -0.1931 v 9.6374 c 1.2639 -0.2282 2.6683 -0.2458 2.6683 -0.2458 c 1.2112 0 2.3172 0.1931 2.3172 0.1931 v -9.6374 c -1.2639 0.2282 -2.6683 0.2458 -2.6683 0.2458 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	/*
	 * Cancer symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function cancer( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_CANCER));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 14.0787 -11.6211 c 1.6677 0.0527 2.7648 1.1674 2.7648 1.1674 c 1.0972 1.1147 1.1323 2.8 1.1323 2.8 c 0 0.7549 -0.2545 1.4219 -0.2545 1.4219 c -0.2545 0.667 -0.7109 1.1937 -0.7109 1.1937 l 0.0527 -0.0702 c -0.2282 0.3862 -0.7022 0.8865 -0.7022 0.8865 c -0.474 0.5003 -1.2464 1.027 -1.2464 1.027 c -1.1586 0.8075 -2.677 1.2727 -2.677 1.2727 c -1.5185 0.4652 -3.3968 0.5179 -3.3968 0.5179 l -0.7373 0 l -0.79 -0.0702 c -0.3335 -0.0351 -0.7373 -0.1053 -0.7373 -0.1053 c -1.9486 -0.316 -3.7918 -1.2464 -3.7918 -1.2464 c -1.5448 -0.79 -2.7385 -2.0188 -2.7385 -2.0188 c -0.2458 -0.2633 -0.237 -0.6056 -0.237 -0.6056 c 0.0088 -0.3423 0.2633 -0.5881 0.2633 -0.5881 c 0.2545 -0.2458 0.5968 -0.237 0.5968 -0.237 c 0.3423 0.0088 0.5881 0.2545 0.5881 0.2545 c 1.0006 1.0357 2.2996 1.7028 2.2996 1.7028 c 1.5974 0.8075 3.3178 1.0884 3.3178 1.0884 c 0.4388 0.0702 0.8426 0.1053 0.8426 0.1053 l 0.667 0.0527 c 2.5454 -0.0351 4.3009 -0.8075 4.3009 -0.8075 c -1.1937 -0.4037 -1.9398 -1.4132 -1.9398 -1.4132 c -0.7461 -1.0093 -0.7636 -2.3611 -0.7636 -2.3611 c 0.0351 -1.6852 1.1411 -2.8 1.1411 -2.8 c 1.1059 -1.1147 2.756 -1.1674 2.756 -1.1674 h 0 z m 0 0 z m 0 1.6852 c -0.9304 0.0351 -1.5623 0.6758 -1.5623 0.6758 c -0.632 0.6407 -0.6495 1.6062 -0.6495 1.6062 c 0.0175 0.9655 0.6495 1.6062 0.6495 1.6062 c 0.632 0.6407 1.5623 0.6758 1.5623 0.6758 c 0.9479 -0.0351 1.5711 -0.6758 1.5711 -0.6758 c 0.6232 -0.6407 0.6407 -1.6062 0.6407 -1.6062 c -0.0175 -0.9655 -0.6407 -1.6062 -0.6407 -1.6062 c -0.6232 -0.6407 -1.5711 -0.6758 -1.5711 -0.6758 h 0 z m 0 0 z m -4.687 -6.6531 h 0.158 h 0.1404 l 0.5793 0.0527 l 0.9479 0.1229 c 1.9486 0.316 3.7918 1.2464 3.7918 1.2464 c 1.5448 0.79 2.7385 2.0363 2.7385 2.0363 c 0.2458 0.2633 0.237 0.5968 0.237 0.5968 c -0.0088 0.3335 -0.2633 0.5793 -0.2633 0.5793 c -0.2545 0.2458 -0.5968 0.237 -0.5968 0.237 c -0.3423 -0.0088 -0.5881 -0.2545 -0.5881 -0.2545 c -1.0006 -1.0181 -2.2996 -1.6852 -2.2996 -1.6852 c -1.5974 -0.8075 -3.3178 -1.0884 -3.3178 -1.0884 c -0.4388 -0.0878 -0.8426 -0.1229 -0.8426 -0.1229 l -0.667 -0.0351 c -2.5454 0.0175 -4.3009 0.79 -4.3009 0.79 c 1.1937 0.4213 1.9398 1.4307 1.9398 1.4307 c 0.7461 1.0093 0.7636 2.3435 0.7636 2.3435 c -0.0351 1.6852 -1.1411 2.8087 -1.1411 2.8087 c -1.1059 1.1235 -2.756 1.1586 -2.756 1.1586 c -1.6677 -0.0351 -2.7648 -1.1586 -2.7648 -1.1586 c -1.0972 -1.1235 -1.1323 -2.8087 -1.1323 -2.8087 c 0 -0.7549 0.2545 -1.4219 0.2545 -1.4219 c 0.2545 -0.667 0.7285 -1.2112 0.7285 -1.2112 l -0.0702 0.1053 c 0.2282 -0.4037 0.7022 -0.9041 0.7022 -0.9041 c 0.474 -0.5003 1.2464 -1.027 1.2464 -1.027 c 1.2288 -0.8426 2.8614 -1.3166 2.8614 -1.3166 c 1.6326 -0.474 3.6513 -0.474 3.6513 -0.474 h 0 z m 0 0 z m -5.477 3.9848 c -0.9479 0.0175 -1.5711 0.6583 -1.5711 0.6583 c -0.6232 0.6407 -0.6407 1.6062 -0.6407 1.6062 c 0.0175 0.983 0.6407 1.6238 0.6407 1.6238 c 0.6232 0.6407 1.5711 0.6583 1.5711 0.6583 c 0.9304 -0.0175 1.5623 -0.6583 1.5623 -0.6583 c 0.632 -0.6407 0.6495 -1.6238 0.6495 -1.6238 c -0.0175 -0.9655 -0.6495 -1.6062 -0.6495 -1.6062 c -0.632 -0.6407 -1.5623 -0.6583 -1.5623 -0.6583 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
			
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x-18, y));
		return wrapper;
	};
	
	/*
	 * Leo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function leo( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_LEO));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 14.6931 -15.448 c 0.667 0.9655 0.7373 1.9223 0.7373 1.9223 c 0.0702 0.9567 -0.474 2.3435 -0.474 2.3435 l -0.1931 0.4915 l -0.3511 0.79 l -1.4395 3.0018 c -0.5617 1.2112 -0.8338 2.168 -0.8338 2.168 c -0.2721 0.9567 -0.3072 1.8695 -0.3072 1.8695 v 0.3335 c 0.0175 0.1756 0.1229 0.3949 0.1229 0.3949 c 0.1053 0.2195 0.3423 0.3335 0.3423 0.3335 c 0.237 0.1141 0.6934 0.1141 0.6934 0.1141 c 0.7373 -0.0175 1.2814 -0.4565 1.2814 -0.4565 c 0.2809 -0.2282 0.4037 -0.3686 0.4037 -0.3686 l 0.0351 -0.0527 c 0.1931 -0.2984 0.5267 -0.3599 0.5267 -0.3599 c 0.3335 -0.0614 0.632 0.1316 0.632 0.1316 c 0.2984 0.1931 0.3599 0.5267 0.3599 0.5267 c 0.0614 0.3335 -0.1141 0.632 -0.1141 0.632 c -0.2282 0.3686 -0.8075 0.8251 -0.8075 0.8251 c -0.4915 0.3862 -1.0709 0.5968 -1.0709 0.5968 c -0.5793 0.2107 -1.2464 0.2107 -1.2464 0.2107 c -0.9128 0 -1.5535 -0.3511 -1.5535 -0.3511 c -0.6407 -0.3511 -0.9742 -1.0006 -0.9742 -1.0006 c -0.316 -0.6144 -0.316 -1.1235 -0.316 -1.1235 v -0.4565 c 0.0351 -1.2288 0.4388 -2.5015 0.4388 -2.5015 c 0.4037 -1.2727 1.2112 -2.9228 1.2112 -2.9228 l 0.9128 -1.8783 l 0.4213 -0.9479 c 0.5442 -1.2639 0.5617 -1.9925 0.5617 -1.9925 c 0.0175 -0.7285 -0.4037 -1.343 -0.4037 -1.343 c -1.2814 -1.7554 -3.0369 -1.773 -3.0369 -1.773 c -1.7554 -0.0175 -2.7736 1.4395 -2.7736 1.4395 c -0.4037 0.667 -0.1404 2.0539 -0.1404 2.0539 c 0.1931 0.9128 0.632 1.9486 0.632 1.9486 c 0.2633 0.5968 0.5267 1.1059 0.5267 1.1059 l 0.2107 0.3862 c 0.3335 0.474 0.5179 1.0357 0.5179 1.0357 c 0.1843 0.5617 0.1843 1.1762 0.1843 1.1762 c -0.0351 1.6326 -1.1235 2.7122 -1.1235 2.7122 c -1.0884 1.0796 -2.7034 1.1147 -2.7034 1.1147 c -1.6326 -0.0351 -2.7209 -1.1147 -2.7209 -1.1147 c -1.0884 -1.0796 -1.1235 -2.7122 -1.1235 -2.7122 c 0.0351 -1.6326 1.1235 -2.7122 1.1235 -2.7122 c 1.0884 -1.0796 2.7209 -1.1323 2.7209 -1.1323 c 0.2809 0 0.5442 0.0527 0.5442 0.0527 c -0.2809 -0.79 -0.4388 -1.5272 -0.4388 -1.5272 c -0.1931 -0.983 -0.1141 -1.8169 -0.1141 -1.8169 c 0.079 -0.8338 0.5003 -1.4833 0.5003 -1.4833 c 1.5448 -2.2119 4.1516 -2.2119 4.1516 -2.2119 c 2.6069 0 4.4676 2.5279 4.4676 2.5279 h 0 z m 0 0 z m -9.1108 6.1441 c -0.9304 0.0351 -1.536 0.6407 -1.536 0.6407 c -0.6056 0.6056 -0.6232 1.5185 -0.6232 1.5185 c 0.0175 0.9128 0.6232 1.5185 0.6232 1.5185 c 0.6056 0.6056 1.536 0.6232 1.536 0.6232 c 0.9128 -0.0175 1.5185 -0.6232 1.5185 -0.6232 c 0.6056 -0.6056 0.6232 -1.5185 0.6232 -1.5185 c 0 -0.6846 -0.3686 -1.2112 -0.3686 -1.2112 l -0.0351 -0.0527 c -0.2984 -0.4037 -0.7461 -0.6407 -0.7461 -0.6407 c -0.4477 -0.237 -0.9918 -0.2545 -0.9918 -0.2545 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x - 6, y - 13));
		return wrapper;
	};
	
	/*
	 * Virgo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function virgo( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_VIRGO));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 10.796 -17.9582 h 0.0351 l 0.0878 0.0175 c 0.5267 0.1053 1.1235 0.6144 1.1235 0.6144 l 0.1756 0.158 c 1.0709 1.0709 1.1586 3.3529 1.1586 3.3529 l 0.0175 0.1756 l 0.0527 -0.0527 c 0.316 -0.2984 0.6758 -0.4125 0.6758 -0.4125 c 0.3599 -0.1141 0.7461 -0.0088 0.7461 -0.0088 c 1.3693 0.5968 1.536 3.3441 1.536 3.3441 c 0.1668 2.7472 -1.027 5.1523 -1.027 5.1523 c -0.6846 1.2112 -1.8783 2.1241 -1.8783 2.1241 c 0.0702 0.3862 0.1756 0.7549 0.1756 0.7549 c 0.2458 0.7724 0.6144 1.1235 0.6144 1.1235 l 0.1053 0.0702 c 0.2809 0.2282 0.3335 0.5617 0.3335 0.5617 c 0.0527 0.3335 -0.1492 0.6232 -0.1492 0.6232 c -0.2019 0.2896 -0.5354 0.3423 -0.5354 0.3423 c -0.3335 0.0527 -0.632 -0.1404 -0.632 -0.1404 c -0.474 -0.3511 -0.8075 -0.8777 -0.8075 -0.8777 c -0.3335 -0.5267 -0.5442 -1.2112 -0.5442 -1.2112 l -0.0702 -0.2984 l -0.0527 0.0351 c -0.9479 0.4915 -1.931 0.8075 -1.931 0.8075 l -0.5617 0.1756 l -0.5442 0.1404 c -0.3511 0.0702 -0.632 -0.1141 -0.632 -0.1141 c -0.2809 -0.1843 -0.3599 -0.5354 -0.3599 -0.5354 c -0.079 -0.3511 0.1053 -0.632 0.1053 -0.632 c 0.1843 -0.2809 0.5354 -0.3686 0.5354 -0.3686 l 0.2984 -0.0702 l 0.6144 -0.1931 c 1.0884 -0.3511 2.089 -0.9304 2.089 -0.9304 l 0.158 -0.0878 v -9.181 c -0.0175 -0.9479 -0.2019 -1.5623 -0.2019 -1.5623 c -0.1843 -0.6144 -0.5003 -0.9304 -0.5003 -0.9304 c -0.1931 -0.1756 -0.316 -0.2458 -0.316 -0.2458 l -0.0527 -0.0351 v 0.0175 c -0.3686 0.316 -0.7724 1.4746 -0.7724 1.4746 l -0.0878 0.2458 c -0.2809 0.8426 -0.5267 2.0539 -0.5267 2.0539 v 8.0224 c 0 0.3686 -0.237 0.6056 -0.237 0.6056 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5793 -0.2019 -0.5793 -0.2019 c -0.237 -0.2019 -0.2721 -0.5179 -0.2721 -0.5179 l -0.0175 -9.1634 c 0 -0.9479 -0.1843 -1.5623 -0.1843 -1.5623 c -0.1843 -0.6144 -0.5179 -0.9304 -0.5179 -0.9304 c -0.1756 -0.1756 -0.2984 -0.2458 -0.2984 -0.2458 l -0.0527 -0.0351 l -0.0175 0.0175 c -0.3511 0.316 -0.7724 1.4746 -0.7724 1.4746 l -0.0702 0.2458 c -0.2809 0.8426 -0.5267 2.0539 -0.5267 2.0539 v 8.0224 c -0.0175 0.3686 -0.2545 0.6056 -0.2545 0.6056 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 l 0 -9.1634 c 0 -0.9479 -0.1931 -1.5623 -0.1931 -1.5623 c -0.1931 -0.6144 -0.5091 -0.9304 -0.5091 -0.9304 c -0.2809 -0.2633 -0.4037 -0.2984 -0.4037 -0.2984 h -0.0351 c -0.3511 -0.0527 -0.5617 -0.3247 -0.5617 -0.3247 c -0.2107 -0.2721 -0.1756 -0.6232 -0.1756 -0.6232 c 0.0527 -0.2984 0.2458 -0.4915 0.2458 -0.4915 c 0.1931 -0.1931 0.474 -0.2282 0.474 -0.2282 l 0.1229 -0.0175 l 0.1053 0.0175 c 0.316 0.0351 0.6846 0.2195 0.6846 0.2195 c 0.3686 0.1843 0.7549 0.5705 0.7549 0.5705 c 0.3511 0.3511 0.5968 0.8426 0.5968 0.8426 c 0.474 -0.9479 1.0093 -1.343 1.0093 -1.343 c 0.5354 -0.3949 1.1147 -0.2896 1.1147 -0.2896 l 0.1229 0.0175 c 0.5267 0.1053 1.1235 0.6144 1.1235 0.6144 l 0.158 0.158 c 0.3511 0.3511 0.5968 0.8426 0.5968 0.8426 c 0.474 -0.9479 1.0093 -1.343 1.0093 -1.343 c 0.5354 -0.3949 1.1147 -0.2896 1.1147 -0.2896 h 0 z m 0 0 z m 3.6163 5.6877 l -0.0351 0.0351 c -0.158 0.1756 -0.3335 0.4388 -0.3335 0.4388 l -0.1053 0.1756 c -0.2458 0.3862 -0.4565 0.8075 -0.4565 0.8075 l -0.0878 0.2107 l 0 4.8977 c 0.2984 -0.3511 0.5091 -0.7373 0.5091 -0.7373 c 0.4915 -0.8777 0.6934 -1.9573 0.6934 -1.9573 c 0.2019 -1.0796 0.1316 -2.2031 0.1316 -2.2031 c -0.0527 -0.8075 -0.2282 -1.4044 -0.2282 -1.4044 l -0.0878 -0.2633 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
			
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	/*
	 * Libra symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function libra( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_LIBRA));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 17.1332 -4.1605 c 0.3511 0.0175 0.5881 0.2545 0.5881 0.2545 c 0.237 0.237 0.2458 0.5793 0.2458 0.5793 c 0.0088 0.3423 -0.2019 0.5705 -0.2019 0.5705 c -0.2107 0.2282 -0.5091 0.2809 -0.5091 0.2809 h -16.4134 c -0.3511 -0.0175 -0.5881 -0.2545 -0.5881 -0.2545 c -0.237 -0.237 -0.2458 -0.5793 -0.2458 -0.5793 c -0.0088 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2107 -0.2282 0.5091 -0.2809 0.5091 -0.2809 h 16.4134 h 0 z m 0 0 z m -8.3384 -11.3577 c 2.247 0.0702 3.7303 1.5535 3.7303 1.5535 c 1.4833 1.4833 1.536 3.7128 1.536 3.7128 c 0 1.2814 -0.5793 2.3874 -0.5793 2.3874 l -0.0175 0.0527 l 3.6689 0 c 0.3335 0 0.5617 0.2107 0.5617 0.2107 c 0.2282 0.2107 0.2809 0.5267 0.2809 0.5267 v 0.1053 c 0 0.3335 -0.2107 0.5617 -0.2107 0.5617 c -0.2107 0.2282 -0.5091 0.2809 -0.5091 0.2809 h -5.5121 c -0.5968 -0.0351 -0.7812 -0.5354 -0.7812 -0.5354 c -0.1843 -0.5003 0.2195 -0.9391 0.2195 -0.9391 c 0.5793 -0.5091 0.8865 -1.1937 0.8865 -1.1937 c 0.3072 -0.6846 0.3072 -1.457 0.3072 -1.457 c -0.0351 -1.5272 -1.0445 -2.5279 -1.0445 -2.5279 c -1.0093 -1.0006 -2.5366 -1.0533 -2.5366 -1.0533 c -1.5097 0.0527 -2.5191 1.0533 -2.5191 1.0533 c -1.0093 1.0006 -1.0445 2.5279 -1.0445 2.5279 c 0 0.7724 0.3072 1.457 0.3072 1.457 c 0.3072 0.6846 0.869 1.1937 0.869 1.1937 c 0.4037 0.4037 0.2458 0.8865 0.2458 0.8865 c -0.158 0.4828 -0.6846 0.5881 -0.6846 0.5881 h -5.1259 c -0.3511 -0.0175 -0.5881 -0.2545 -0.5881 -0.2545 c -0.237 -0.237 -0.2458 -0.5793 -0.2458 -0.5793 c -0.0088 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2107 -0.2282 0.5091 -0.2809 0.5091 -0.2809 l 3.4231 0 l -0.0351 -0.0527 c -0.4915 -0.9655 -0.5617 -2.1065 -0.5617 -2.1065 v -0.2809 c 0.0527 -2.2294 1.536 -3.7128 1.536 -3.7128 c 1.4833 -1.4833 3.7128 -1.5535 3.7128 -1.5535 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
			
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x - 6, y));
		return wrapper;
	};
	
	/*
	 * Scorpio symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function scorpio( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_SCORPIO));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 9.6023 -17.9582 l 0.0527 0.0175 h 0.0527 c 0.5091 0.1053 1.0884 0.5968 1.0884 0.5968 l 0.158 0.158 c 1.0357 1.0357 1.1235 3.1949 1.1235 3.1949 v 6.5478 l 0.0527 0.4915 c 0.0702 0.5793 0.2282 1.1235 0.2282 1.1235 c 0.2282 0.7197 0.5617 1.0357 0.5617 1.0357 l 0.2282 0.1931 c 0.1053 0.1404 0.667 0.4388 0.667 0.4388 c 0.3511 0.1756 0.79 0.2984 0.79 0.2984 l -1.0006 -1.457 c -0.1931 -0.2633 -0.158 -0.5705 -0.158 -0.5705 c 0.0351 -0.3072 0.2633 -0.5179 0.2633 -0.5179 l 0.1053 -0.0878 c 0.2633 -0.1756 0.5705 -0.1404 0.5705 -0.1404 c 0.3072 0.0351 0.5179 0.2633 0.5179 0.2633 l 2.089 3.0018 c 0.0527 0.0878 0.0878 0.158 0.0878 0.158 l 0.0175 0.0878 c 0.0702 0.158 0.0702 0.3335 0.0702 0.3335 c 0 0.3335 -0.2107 0.5705 -0.2107 0.5705 c -0.2107 0.237 -0.5442 0.2721 -0.5442 0.2721 l -2.6156 1.8081 c -0.2984 0.1931 -0.6232 0.1316 -0.6232 0.1316 c -0.3247 -0.0614 -0.5267 -0.3423 -0.5267 -0.3423 c -0.2019 -0.2809 -0.1668 -0.5881 -0.1668 -0.5881 c 0.0351 -0.3072 0.2633 -0.5179 0.2633 -0.5179 l 1.1937 -0.8426 c -0.4565 -0.1404 -0.8777 -0.3511 -0.8777 -0.3511 c -0.7373 -0.3862 -1.0709 -0.7197 -1.0709 -0.7197 l -0.1229 -0.1053 c -0.6846 -0.5968 -1.0357 -1.5974 -1.0357 -1.5974 l -0.0878 -0.2633 c -0.2107 -0.6846 -0.2984 -1.4219 -0.2984 -1.4219 l -0.0351 -0.4565 l -0.0175 -6.4601 c 0 -0.8953 -0.1756 -1.4658 -0.1756 -1.4658 c -0.1756 -0.5705 -0.474 -0.869 -0.474 -0.869 c -0.158 -0.1756 -0.2633 -0.2282 -0.2633 -0.2282 l -0.0351 -0.0175 l -0.0527 0.0527 c -0.2984 0.3335 -0.6495 1.3166 -0.6495 1.3166 l -0.0878 0.2458 c -0.2458 0.79 -0.474 1.931 -0.474 1.931 v 7.5835 c -0.0175 0.3511 -0.2545 0.5881 -0.2545 0.5881 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 v -8.6544 c 0 -0.8953 -0.1756 -1.4658 -0.1756 -1.4658 c -0.1756 -0.5705 -0.474 -0.869 -0.474 -0.869 c -0.1229 -0.1404 -0.2282 -0.1931 -0.2282 -0.1931 l -0.0702 -0.0527 l -0.0527 0.0527 c -0.316 0.3335 -0.667 1.3166 -0.667 1.3166 l -0.0702 0.2282 c -0.2633 0.8075 -0.4915 1.931 -0.4915 1.931 l 0 7.6011 c -0.0175 0.3511 -0.2545 0.5881 -0.2545 0.5881 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 v -8.6544 c 0 -0.8953 -0.1756 -1.4658 -0.1756 -1.4658 c -0.1756 -0.5705 -0.474 -0.869 -0.474 -0.869 c -0.2458 -0.2458 -0.3686 -0.2633 -0.3686 -0.2633 l -0.0175 -0.0175 c -0.3511 -0.0527 -0.5617 -0.316 -0.5617 -0.316 c -0.2107 -0.2633 -0.1756 -0.632 -0.1756 -0.632 c 0.0527 -0.2809 0.2458 -0.474 0.2458 -0.474 c 0.1931 -0.1931 0.474 -0.2458 0.474 -0.2458 h 0.2282 c 0.2984 0.0351 0.6583 0.2195 0.6583 0.2195 c 0.3599 0.1843 0.7285 0.553 0.7285 0.553 c 0.2984 0.316 0.5267 0.7197 0.5267 0.7197 c 0.4565 -0.8602 0.9655 -1.22 0.9655 -1.22 c 0.5091 -0.3599 1.0533 -0.2721 1.0533 -0.2721 l 0.1229 0.0175 c 0.5091 0.1053 1.0884 0.5968 1.0884 0.5968 l 0.158 0.158 c 0.2984 0.316 0.5267 0.7197 0.5267 0.7197 c 0.4388 -0.8602 0.9567 -1.2288 0.9567 -1.2288 c 0.5179 -0.3686 1.0621 -0.2633 1.0621 -0.2633 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	/*
	 * Sagittarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function sagittarius( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_SAGITTARIUS));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 9.2336 -17.9758 h 0.0527 l 7.8469 0 l 0.1931 0.0175 l 0.2282 0.0878 l 0.1756 0.1404 c 0.0527 0.0527 0.1053 0.1229 0.1053 0.1229 l 0.1053 0.1931 l 0.0351 0.158 v 8.0575 c -0.0175 0.3511 -0.2545 0.5881 -0.2545 0.5881 c -0.237 0.237 -0.5793 0.237 -0.5793 0.237 c -0.3423 0 -0.5705 -0.2019 -0.5705 -0.2019 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 v -6.0212 l -6.6883 6.6883 l 3.862 3.862 c 0.2458 0.2633 0.2458 0.5968 0.2458 0.5968 c 0 0.3335 -0.237 0.5793 -0.237 0.5793 c -0.237 0.2458 -0.5442 0.2633 -0.5442 0.2633 c -0.3072 0.0175 -0.553 -0.158 -0.553 -0.158 l -3.9673 -3.9497 l -6.9691 6.9691 c -0.2633 0.2458 -0.5968 0.2458 -0.5968 0.2458 c -0.3335 0 -0.5793 -0.237 -0.5793 -0.237 c -0.2458 -0.237 -0.2633 -0.5354 -0.2633 -0.5354 c -0.0175 -0.2984 0.158 -0.5617 0.158 -0.5617 l 7.0569 -7.0745 l -3.4582 -3.4582 c -0.2633 -0.2633 -0.2633 -0.5968 -0.2633 -0.5968 c 0 -0.3335 0.2458 -0.5793 0.2458 -0.5793 c 0.2458 -0.2458 0.5442 -0.2633 0.5442 -0.2633 c 0.2984 -0.0175 0.5617 0.158 0.5617 0.158 l 3.5636 3.546 l 6.6883 -6.6883 l -5.7579 0.0175 c -0.3335 -0.0175 -0.5617 -0.2195 -0.5617 -0.2195 c -0.2282 -0.2019 -0.2809 -0.5179 -0.2809 -0.5179 v -0.1053 c 0 -0.3335 0.2107 -0.5617 0.2107 -0.5617 c 0.2107 -0.2282 0.5267 -0.2809 0.5267 -0.2809 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x - 12, y));
		return wrapper;
	};
	
	/*
	 * Capricorn symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function capricorn( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_CAPRICORN));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");		
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 7.9698 -17.2736 c 0.0175 0.0175 0.1053 0.0351 0.1053 0.0351 l 0.0878 0.0175 c 0.5442 0.158 1.1235 0.8426 1.1235 0.8426 l 0.1404 0.1756 c 0.9304 1.2639 1.0006 3.8883 1.0006 3.8883 c 0.0702 2.6244 0.5793 4.3623 0.5793 4.3623 l 0.0351 0.0878 v -0.0175 c 0.6495 -1.2288 1.3254 -1.852 1.3254 -1.852 c 0.6758 -0.6232 1.6062 -0.7636 1.6062 -0.7636 l 0.1756 -0.0351 c 1.6852 -0.1404 2.7209 0.8426 2.7209 0.8426 c 1.0357 0.983 1.1059 2.5981 1.1059 2.5981 c 0.0175 1.6151 -0.9742 2.6946 -0.9742 2.6946 c -0.9918 1.0796 -2.7472 1.1147 -2.7472 1.1147 c -1.8607 -0.0175 -3.0018 -0.9655 -3.0018 -0.9655 l -0.0527 -0.0527 l -0.1053 0.1931 c -1.0357 2.0363 -2.2733 2.8614 -2.2733 2.8614 c -1.2376 0.8251 -3.0984 0.474 -3.0984 0.474 l -0.2458 -0.0527 c -0.3511 -0.0878 -0.5354 -0.3686 -0.5354 -0.3686 c -0.1843 -0.2809 -0.1053 -0.632 -0.1053 -0.632 c 0.079 -0.3511 0.3599 -0.5354 0.3599 -0.5354 c 0.2809 -0.1843 0.632 -0.1141 0.632 -0.1141 c 1.3517 0.316 2.247 -0.3599 2.247 -0.3599 c 0.8953 -0.6758 1.7906 -2.5893 1.7906 -2.5893 l 0.1756 -0.3511 l -0.0702 -0.1229 c -0.5617 -1.1235 -0.8514 -2.6332 -0.8514 -2.6332 c -0.2896 -1.5097 -0.3599 -3.3705 -0.3599 -3.3705 v -0.3511 c -0.0351 -1.0884 -0.2195 -1.8256 -0.2195 -1.8256 c -0.1843 -0.7373 -0.5003 -1.1586 -0.5003 -1.1586 c -0.1756 -0.2458 -0.2809 -0.316 -0.2809 -0.316 l -0.0527 -0.0351 l -0.0702 -0.0351 c -0.0527 -0.0175 -0.158 0.0439 -0.158 0.0439 c -0.1053 0.0614 -0.2633 0.2721 -0.2633 0.2721 c -0.2633 0.316 -0.4915 0.9655 -0.4915 0.9655 c -0.316 0.9479 -0.5968 2.4751 -0.5968 2.4751 c -0.2458 1.2814 -0.4037 2.6507 -0.4037 2.6507 l -0.158 1.2639 l -0.0702 0.2107 l -0.1053 0.1756 l -0.158 0.158 l -0.1931 0.1053 l -0.158 0.0351 l -0.2282 0.0175 l -0.1756 -0.0351 l -0.2107 -0.1053 l -0.0878 -0.0702 l -0.1404 -0.158 l -0.0702 -0.1053 l -0.0702 -0.2282 l -0.1404 -1.2639 c -0.1756 -1.3693 -0.4037 -2.6507 -0.4037 -2.6507 l -0.158 -0.7197 c -0.2107 -1.0533 -0.4565 -1.7554 -0.4565 -1.7554 c -0.2984 -0.8251 -0.8075 -1.0884 -0.8075 -1.0884 c -0.3686 -0.1931 -0.7373 -0.1756 -0.7373 -0.1756 h -0.158 c -0.3511 0.0702 -0.6407 -0.1053 -0.6407 -0.1053 c -0.2896 -0.1756 -0.3686 -0.5267 -0.3686 -0.5267 c -0.079 -0.3511 0.1053 -0.632 0.1053 -0.632 c 0.1843 -0.2809 0.5179 -0.3686 0.5179 -0.3686 l 0.1931 -0.0351 c 0.4565 -0.0527 0.9391 0.0263 0.9391 0.0263 c 0.4828 0.079 0.9742 0.3423 0.9742 0.3423 c 1.0709 0.5968 1.5799 2.0188 1.5799 2.0188 c 0.2107 0.6144 0.4037 1.4219 0.4037 1.4219 c 0.1756 -0.8075 0.4037 -1.4219 0.4037 -1.4219 c 0.316 -0.9128 0.7549 -1.4746 0.7549 -1.4746 c 0.474 -0.5968 1.0181 -0.8075 1.0181 -0.8075 c 0.5442 -0.2107 1.0533 -0.1053 1.0533 -0.1053 h 0 z m 0 0 z m 6.3722 8.4262 c -0.4915 0.0351 -0.9128 0.4565 -0.9128 0.4565 c -0.4213 0.4213 -0.9128 1.3342 -0.9128 1.3342 l -0.5267 1.0709 l 0.0527 0.0527 c 0.79 0.8953 2.0188 0.9655 2.0188 0.9655 l 0.1931 0 c 1.0006 -0.0175 1.5272 -0.5881 1.5272 -0.5881 c 0.5267 -0.5705 0.5003 -1.4746 0.5003 -1.4746 c -0.0263 -0.9041 -0.5442 -1.4044 -0.5442 -1.4044 c -0.5179 -0.5003 -1.3956 -0.4125 -1.3956 -0.4125 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
			
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	/*
	 * Aquarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aquarius( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_AQUARIUS));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 16.115 -8.3208 l 0.0351 0.0527 l 1.7554 3.7391 c 0.1404 0.3335 0.0263 0.6495 0.0263 0.6495 c -0.1141 0.316 -0.4213 0.4565 -0.4213 0.4565 c -0.3072 0.1404 -0.6056 0.0614 -0.6056 0.0614 c -0.2984 -0.079 -0.474 -0.3423 -0.474 -0.3423 l -1.2814 -2.7209 l -2.8438 2.8438 c -0.2984 0.2984 -0.6846 0.2545 -0.6846 0.2545 c -0.3862 -0.0439 -0.6144 -0.3774 -0.6144 -0.3774 l -1.2814 -2.7209 l -2.8438 2.8438 c -0.316 0.2984 -0.6934 0.2545 -0.6934 0.2545 c -0.3774 -0.0439 -0.6056 -0.3774 -0.6056 -0.3774 l -1.2814 -2.7209 l -2.8614 2.8438 c -0.2282 0.2282 -0.5267 0.2545 -0.5267 0.2545 c -0.2984 0.0263 -0.5617 -0.1668 -0.5617 -0.1668 l -0.0878 -0.0878 c -0.2282 -0.2282 -0.2545 -0.5267 -0.2545 -0.5267 c -0.0263 -0.2984 0.1668 -0.5617 0.1668 -0.5617 l 3.7742 -3.7918 c 0.316 -0.2809 0.6934 -0.237 0.6934 -0.237 c 0.3774 0.0439 0.6232 0.3774 0.6232 0.3774 l 1.2639 2.7034 l 2.8614 -2.8438 c 0.2984 -0.2809 0.6846 -0.237 0.6846 -0.237 c 0.3862 0.0439 0.6144 0.3774 0.6144 0.3774 l 1.2814 2.7034 l 2.8438 -2.8438 c 0.2809 -0.2633 0.632 -0.2458 0.632 -0.2458 c 0.3511 0.0175 0.5968 0.2809 0.5968 0.2809 l 0.0702 0.1053 h 0 z m 0 0 z m 0 -5.951 l 0.0351 0.0527 l 1.7554 3.7567 c 0.1404 0.316 0.0263 0.632 0.0263 0.632 c -0.1141 0.316 -0.4213 0.4652 -0.4213 0.4652 c -0.3072 0.1492 -0.6056 0.0614 -0.6056 0.0614 c -0.2984 -0.0878 -0.474 -0.3511 -0.474 -0.3511 l -1.2814 -2.7034 l -2.8438 2.8438 c -0.2984 0.2809 -0.6846 0.237 -0.6846 0.237 c -0.3862 -0.0439 -0.6144 -0.3774 -0.6144 -0.3774 l -1.2814 -2.7034 l -2.8438 2.8438 c -0.316 0.2809 -0.6934 0.237 -0.6934 0.237 c -0.3774 -0.0439 -0.6056 -0.3774 -0.6056 -0.3774 l -1.2814 -2.7034 l -2.8614 2.8438 c -0.2282 0.2282 -0.5267 0.2458 -0.5267 0.2458 c -0.2984 0.0175 -0.5617 -0.1756 -0.5617 -0.1756 l -0.0878 -0.0702 c -0.2282 -0.2458 -0.2545 -0.5442 -0.2545 -0.5442 c -0.0263 -0.2984 0.1668 -0.5617 0.1668 -0.5617 l 3.7742 -3.7918 c 0.316 -0.2809 0.6934 -0.237 0.6934 -0.237 c 0.3774 0.0439 0.6232 0.3774 0.6232 0.3774 l 1.2639 2.7209 l 2.8614 -2.8614 c 0.2984 -0.2809 0.6846 -0.237 0.6846 -0.237 c 0.3862 0.0439 0.6144 0.3774 0.6144 0.3774 l 1.2814 2.7209 l 2.8438 -2.8614 c 0.2809 -0.2633 0.632 -0.2458 0.632 -0.2458 c 0.3511 0.0175 0.5968 0.2984 0.5968 0.2984 l 0.0702 0.0878 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));			
		return wrapper;
	};
	
	/*
	 * Pisces symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pisces( x, y ){
		
		// center symbol
		var xShift = -9; //px
		var yShift = 9; //px
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_PISCES));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " z m 4.5817 -17.0805 c 0.2809 0.2984 0.6495 0.8514 0.6495 0.8514 c 0.3686 0.553 0.7549 1.3605 0.7549 1.3605 c 1.1059 2.2294 1.3166 5.0381 1.3166 5.0381 h 3.3881 c 0.0702 -1.4921 0.4125 -2.8 0.4125 -2.8 c 0.3423 -1.3078 0.9216 -2.4137 0.9216 -2.4137 c 0.4037 -0.7724 0.7724 -1.2902 0.7724 -1.2902 c 0.3686 -0.5179 0.667 -0.7987 0.667 -0.7987 c 0.2633 -0.2282 0.5968 -0.2282 0.5968 -0.2282 c 0.3335 0 0.5705 0.2458 0.5705 0.2458 c 0.237 0.2458 0.2545 0.5442 0.2545 0.5442 c 0.0175 0.2984 -0.158 0.5617 -0.158 0.5617 l -0.2458 0.2633 l -0.158 0.1931 c -0.4037 0.5267 -0.79 1.2639 -0.79 1.2639 c -0.4915 0.9479 -0.79 2.0627 -0.79 2.0627 c -0.2984 1.1147 -0.3686 2.3962 -0.3686 2.3962 h 4.7572 c 0.3511 0 0.5881 0.237 0.5881 0.237 c 0.237 0.237 0.2458 0.5881 0.2458 0.5881 c 0.0088 0.3511 -0.2019 0.5793 -0.2019 0.5793 c -0.2107 0.2282 -0.5091 0.2633 -0.5091 0.2633 l -4.8626 0.0175 c 0.2107 2.3874 1.1411 4.3009 1.1411 4.3009 c 0.4037 0.8075 0.8075 1.3868 0.8075 1.3868 l 0.3335 0.4388 c 0.2282 0.2633 0.2107 0.6056 0.2107 0.6056 c -0.0175 0.3423 -0.2809 0.5793 -0.2809 0.5793 c -0.2633 0.237 -0.5968 0.2195 -0.5968 0.2195 c -0.3335 -0.0175 -0.5793 -0.2809 -0.5793 -0.2809 c -0.2809 -0.2984 -0.6495 -0.8602 -0.6495 -0.8602 c -0.3686 -0.5617 -0.7549 -1.3517 -0.7549 -1.3517 c -0.5442 -1.1235 -0.8865 -2.3786 -0.8865 -2.3786 c -0.3423 -1.2551 -0.4301 -2.6595 -0.4301 -2.6595 h -3.3881 c -0.0702 1.4921 -0.4213 2.8 -0.4213 2.8 c -0.3511 1.3078 -0.9304 2.4137 -0.9304 2.4137 c -0.3862 0.7549 -0.7549 1.2727 -0.7549 1.2727 c -0.3686 0.5179 -0.667 0.7987 -0.667 0.7987 c -0.2633 0.2458 -0.5968 0.2458 -0.5968 0.2458 c -0.3335 0 -0.5705 -0.2458 -0.5705 -0.2458 c -0.237 -0.2458 -0.2545 -0.5442 -0.2545 -0.5442 c -0.0175 -0.2984 0.158 -0.5617 0.158 -0.5617 l 0.2458 -0.2633 l 0.158 -0.2107 c 0.4037 -0.5267 0.79 -1.2639 0.79 -1.2639 c 1.0006 -1.8783 1.1586 -4.4413 1.1586 -4.4413 h -4.7923 c -0.3511 -0.0175 -0.5881 -0.2545 -0.5881 -0.2545 c -0.237 -0.237 -0.2458 -0.5793 -0.2458 -0.5793 c -0.0088 -0.3423 0.2019 -0.5705 0.2019 -0.5705 c 0.2107 -0.2282 0.5091 -0.2809 0.5091 -0.2809 l 4.8977 0 c -0.2107 -2.4049 -1.1411 -4.3009 -1.1411 -4.3009 c -0.4037 -0.8075 -0.8075 -1.3868 -0.8075 -1.3868 l -0.3335 -0.4388 c -0.2282 -0.2809 -0.2107 -0.6144 -0.2107 -0.6144 c 0.0175 -0.3335 0.2809 -0.5705 0.2809 -0.5705 c 0.2633 -0.237 0.5968 -0.2195 0.5968 -0.2195 c 0.3335 0.0175 0.5793 0.2809 0.5793 0.2809 h 0 z");
			node.setAttribute("stroke", "none");
			node.setAttribute("stroke-width", 0);
			node.setAttribute("fill", astrology.SIGNS_COLOR);
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));										
		return wrapper;
	};
	
	/**
	 * Draw As symbol
	 */
	function ascendant( x, y ){
		// center symbol
		var xShift = 12; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
		
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0");									
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
			node.setAttribute("fill", "none");	
																			
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw Ds symbol
	 */
	function descendant(x,y){
		// center symbol
		var xShift = 22; //px						
		var yShift = -1; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0");				
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
			node.setAttribute("fill", "none");											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw MC symbol
	 */
	function mediumCoeli(x,y){
		// center symbol
		var xShift = 19; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881");				
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
			node.setAttribute("fill", "none");											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw IC symbol
	 */
	function immumCoeli(x,y){
		// center symbol
		var xShift = 19; //px						
		var yShift = 2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 m -11.4840902,-10.8796629 0,12.6929401");				
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));		
			node.setAttribute("fill", "none");											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	function number1(x,y){
		// center symbol
		var xShift = 0; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_1));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number2(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_2));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number3(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_3));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.45454549,0 0,0.9090909 -0.90909089,0 0,-0.9090909 0.4545454,-0.9090909 0.45454549,-0.4545455 1.36363636,-0.4545454 1.36363635,0 1.3636364,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.4545455,0.4545454 -0.9090909,0.4545455 -1.36363635,0.4545454 m 2.27272725,-4.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.4545454,0.4545454 m -0.4545455,-3.6363636 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -0.90909095,0.4545454 m -0.9090909,0 0.9090909,0 1.36363635,0.4545455 0.4545455,0.45454542 0.4545454,0.90909091 0,1.36363637 -0.4545454,0.9090909 -0.9090909,0.4545455 -1.3636364,0.4545454 -1.3636364,0 -1.3636363,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.90909091 0.9090909,0 0,0.90909091 -0.4545455,0 0,-0.45454546 m 5,-1.81818182 0.4545455,0.90909091 0,1.36363637 -0.4545455,0.9090909 m -1.36363635,-4.0909091 0.90909095,0.4545455 0.4545454,0.90909088 0,1.81818182 -0.4545454,0.9090909 -0.45454549,0.4545455 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number4(x,y){
		// center symbol
		var xShift = 1; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_4));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.28678383,7.7750651 0.91471356,0 m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651 m 3.20149736,-9.6044922 -2.74414057,9.6044922 m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);

			if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number5(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_5));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.27272725,4.5454545 m 2.27272725,-4.5454545 4.54545455,0 m -4.54545455,0.4545454 3.63636365,0 m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454 m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909 m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number6(x,y){
		// center symbol
		var xShift = 3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_6));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545455 -0.4545455,0 0,0.9090909 0.9090909,0 0,-0.9090909 -0.4545454,-0.9090909 -0.909091,-0.4545454 -1.3636363,0 -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 1.36363637,0 1.36363633,-0.4545454 0.9090909,-0.9090909 0.4545455,-0.90909096 0,-1.36363636 -0.4545455,-0.90909088 -0.4545454,-0.4545455 -0.9090909,-0.4545454 -1.36363638,0 -0.90909092,0.4545454 -0.4545454,0.4545455 -0.4545455,0.90909088 m 1.36363636,-4.54545458 -0.90909086,1.3636364 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 4.0909091,-0.4545454 0.4545454,-0.90909096 0,-1.36363636 -0.4545454,-0.90909088 m -0.9090909,-5 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 1.36363637,0 0.90909093,-0.4545454 0.4545454,-0.4545455 0.4545455,-1.36363636 0,-1.81818182 -0.4545455,-0.90909092 -0.4545454,-0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number7(x,y){
		// center symbol
		var xShift = -4; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_7));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.9090909,2.7272727 m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818 m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818 m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0 m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363 m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));											
		return wrapper;
	};
	
	function number8(x,y){
		// center symbol
		var xShift = -1; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_8));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3631244,0.4543748 -0.4543748,0.4543748 -0.4543748,0.9087496 0,1.3631244 0.4543748,0.9087496 0.9087496,0.4543748 1.3631244,0 1.3631244,-0.4543748 0.9087496,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 -0.9087496,-0.4543748 -1.8174992,0 m 0.9087496,0 -2.271874,0.4543748 m 0,0.4543748 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.4543748 m -0.4543748,0 1.3631244,0.4543748 m 0.4543748,0 1.8174992,-0.4543748 m 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 m 0.4543748,0 -1.8174992,-0.4543748 m -0.9087496,0 -0.9087496,0.9087496 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.9087496 m 1.3631244,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.8174992 -0.4543748,-0.9087496 m -2.7262488,4.543748 -1.8174992,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 1.3631244,0.4543748 1.8174992,0 1.8174992,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 -0.4543748,-0.45437484 -0.9087496,-0.4543748 m -0.9087496,0 -2.271874,0.4543748 m 0.4543748,0 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 m -0.4543748,0 2.271874,0.4543748 2.7262488,-0.4543748 m 0,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 m 0,-0.45437484 -1.3631244,-0.4543748 m -0.9087496,0 -0.9087496,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 0.4543748,0.4543748 m 1.8174992,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.81749916 -0.4543748,-0.90874964 -0.4543748,-0.4543748");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
	
	function number9(x,y){
		// center symbol
		var xShift = 1; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_9));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.4545455,0.9090909 -0.4545454,0.4545455 -0.9090909,0.45454542 -1.36363638,0 -0.90909092,-0.45454542 -0.4545454,-0.4545455 -0.4545455,-0.9090909 0,-1.3636364 0.4545455,-0.9090909 0.90909086,-0.9090909 1.36363637,-0.4545454 1.36363637,0 0.9090909,0.4545454 0.4545455,0.4545455 0.4545454,1.3636363 0,1.3636364 -0.4545454,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 -0.9090909,0.9090909 -1.36363638,0.4545454 -1.36363632,0 -0.909091,-0.4545454 -0.4545454,-0.9090909 0,-0.90909096 0.9090909,0 0,0.90909096 -0.4545455,0 0,-0.4545455 m 1.3636364,-3.1818182 -0.4545454,-0.9090909 0,-1.3636364 0.4545454,-0.9090909 m 4.0909091,-0.4545454 0.4545455,0.9090909 0,1.8181818 -0.4545455,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 m -1.81818178,-2.72727278 -0.45454546,-0.45454542 -0.45454546,-0.9090909 0,-1.8181819 0.45454546,-1.3636363 0.45454546,-0.4545455 0.90909091,-0.4545454 m 1.36363637,0 0.4545454,0.4545454 0.4545455,0.9090909 0,2.2727273 -0.4545455,1.81818182 -0.4545454,1.36363637 -0.4545455,0.90909091 -0.90909087,1.3636364 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
			
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));											
		return wrapper;
	};
	
	function number10(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3.5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_10));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6.5; //px						
			var numberYShift = -1.5; //px
			var zero = document.createElementNS( context.root.namespaceURI, "path");
			zero.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 0.90909092,0 1.36363638,-0.4545454 0.9090909,-0.9090909 0.9090909,-1.36363641 0.4545455,-1.36363637 0.4545454,-1.81818182 0,-1.3636364 -0.4545454,-1.3636363 -0.4545455,-0.4545455 -0.9090909,-0.4545454 -0.9090909,0 m -1.36363638,0.9090909 -0.90909092,0.9090909 -0.4545454,0.9090909 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 3.1818182,0 0.9090909,-0.9090909 0.4545454,-0.90909091 0.4545455,-1.36363637 0.4545455,-1.81818182 0,-1.8181818 -0.4545455,-0.9090909 m -1.8181818,-0.9090909 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 0.90909092,0 0.90909091,-0.4545454 0.90909087,-1.3636364 0.4545455,-0.90909091 0.4545454,-1.36363637 0.4545455,-1.81818182 0,-2.2727273 -0.4545455,-0.9090909 -0.4545454,-0.4545454");
			zero.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			zero.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			zero.setAttribute("fill", "none");												
			wrapper.appendChild( zero );
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));													
		return wrapper;
	};
	
	function number11(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_11));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6; //px						
			var numberYShift = 0; //px
			var one2 = document.createElementNS( context.root.namespaceURI, "path");
			one2.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");
			one2.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one2.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one2.setAttribute("fill", "none");												
			wrapper.appendChild( one2 );

		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));
		return wrapper;
	};
		
	function number12(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_12));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 4; //px						
			var numberYShift = 1; //px
			var two = document.createElementNS( context.root.namespaceURI, "path");
			two.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");
			two.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			two.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			two.setAttribute("fill", "none");												
			wrapper.appendChild( two );
		
		if(astrology.ADD_CLICK_AREA) wrapper.appendChild(createRectForClick(x, y));													
		return wrapper;
	};	
			
	/**
	 * Draw circular sector
	 * 
	 * @param {int} x - circle x center position
	 * @param {int} y - circle y center position
	 * @param {int} radius - circle radius in px
	 * @param {int} a1 - angleFrom in degree
	 * @param {int} a2 - angleTo in degree
	 * @param {int} thickness - from outside to center in px  	
	 * 
	 * @return {SVGElement} segment
	 *  
	 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 */  
	astrology.SVG.prototype.segment = function segment( x, y, radius, a1, a2, thickness, lFlag, sFlag){
									            	 	            	
	 	// @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 	var LARGE_ARC_FLAG = lFlag || 0;
	 	var SWEET_FLAG = sFlag || 0;
            	 	                
        a1 = ((astrology.SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180;
        a2 = ((astrology.SHIFT_IN_DEGREES - a2 ) % 360) * Math.PI / 180;
		
		var segment = document.createElementNS( context.root.namespaceURI, "path");
		segment.setAttribute("d", "M " + (x + thickness * Math.cos(a1)) + ", " + (y + thickness * Math.sin(a1)) + " l " + ((radius-thickness) * Math.cos(a1)) + ", " + ((radius-thickness) * Math.sin(a1)) + " A " + radius + ", " + radius + ",0 ," +  LARGE_ARC_FLAG + ", " + SWEET_FLAG + ", " + ( x + radius * Math.cos(a2) ) + ", " + ( y + radius * Math.sin(a2) ) + " l " + ( (radius-thickness)  * -Math.cos(a2) ) + ", " + ( (radius-thickness) * -Math.sin(a2) ) + " A " + thickness + ", " + thickness + ",0 ," +  LARGE_ARC_FLAG + ", " + 1 + ", " + ( x + thickness * Math.cos(a1) ) + ", " + ( y + thickness * Math.sin(a1)));
		segment.setAttribute("fill", "none");						
		return segment;
	};
	
	/**
	 * Draw line in circle
	 * 
	 * @param {int} x1
	 * @param {int} y2
	 * @param {int} x2
	 * @param {int} y2 
	 * @param {String} color - HTML rgb	 
	 * 
	 * @return {SVGElement} line
	 */  
	astrology.SVG.prototype.line = function line( x1, y1, x2, y2, color){									            	 	            	
		var line = document.createElementNS( context.root.namespaceURI, "line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);	
  	    line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);											
		return line;
	};
	
	/**
	 * Draw a circle
	 * 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius	
	 * 
	 * @return {SVGElement} circle
	 */  
	astrology.SVG.prototype.circle = function circle( cx, cy, radius){						            	 	            		
		var circle = document.createElementNS( context.root.namespaceURI, "circle");
		circle.setAttribute("cx", cx);	
  	    circle.setAttribute("cy", cy);
		circle.setAttribute("r", radius);
		circle.setAttribute("fill", "none");							
		return circle;
	};
	
	/**
	 * Draw a text
	 * 
	 * @param {String} text
	 * @param {int} x
	 * @param {int} y
	 * @param {String} size - etc. "13px"
	 * @param {String} color - HTML rgb
	 * 
	 * @return {SVGElement} text
	 */  
	astrology.SVG.prototype.text = function text( txt, x, y, size, color){						            	 	            		
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x);	
  	    text.setAttribute("y", y);
		text.setAttribute("font-size", size);
		text.setAttribute("fill", color);
		text.setAttribute("font-family", "Arial, Helvetica, sans-serif");
		text.setAttribute("dominant-baseline", "central");
		text.appendChild( document.createTextNode( txt ));
		text.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");	
		return text;
	};

	/**
	 * Draw title
	 *
	 * @param {String} text
	 *
	 * @return {SVGElement} title
	 */
	astrology.SVG.prototype.title = function title(text){
		var title = document.createElementNS( context.root.namespaceURI, "title");
		title.textContent = text;
		return title;
	};
										  
}( window.astrology = window.astrology || {}));
// ## CHART ###################################
(function( astrology ) {
    
	/**
	 * Displays astrology charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {String} elementId - root DOMElement 
	 * @param {int} width
	 * @param {int} height
	 * @param {Object} settings
	 */
	astrology.Chart = function( elementId, width, height, settings ){
		
		if(settings){
			Object.assign(astrology, settings);
			if(!('COLORS_SIGNS' in settings)) astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
		}
		
		if (elementId && !document.getElementById( elementId )){
			var paper = document.createElement('div');					
			paper.setAttribute('id', elementId);			
			document.body.appendChild( paper );
		}
										
		this.paper = new astrology.SVG( elementId, width, height); 
		this.cx = this.paper.width/2;
		this.cy = this.paper.height/2;
		this.radius = this.paper.height/2 - astrology.MARGIN;
									
		return this;
	};
	
	/**
	 * Display radix horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274] 
	 *	}
	 * 
	 * @return {astrology.Radix} radix
	 */
	astrology.Chart.prototype.radix = function( data ){
												
		var radix = new astrology.Radix(this.paper, this.cx, this.cy, this.radius, data);
		
		radix.drawBg();				
		radix.drawRuler();									
		radix.drawCusps();		
		radix.drawAxis();	 
		radix.drawCircles();
		radix.drawUniverse();
		radix.drawPoints();

		return radix;
	 };
	 	
	 /**
	 * Scale chart
	 * 
	 * @param {int} factor 
	 */
	astrology.Chart.prototype.scale = function( factor ){			
		this.paper.root.setAttribute("transform", "translate(" + ( -this.cx * (factor - 1)) + "," + (-this.cy * (factor - 1)) + ") scale(" + factor + ")");		
	};
	
	/**
	 * Draw the symbol on the axis.
	 * For debug only.
	 * 	
	 */
	astrology.Chart.prototype.calibrate = function calibrate(){
		var positions, circle, line;
		var startRadius = 60;
		
		var planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron", "Lilith", "NNode"];
		
		for(var i = 0; i < planets.length; i++){		
			positions = astrology.utils.getPointPosition(this.cx, this.cy, this.radius*2, i * 30 );
			
			line = this.paper.line(this.cx, this.cy, positions.x, positions.y);
			line.setAttribute("stroke", astrology.LINE_COLOR);	
			this.paper.root.appendChild( line);
			
			circle = this.paper.circle(this.cx, this.cy, startRadius + startRadius * i );
			circle.setAttribute("stroke", astrology.LINE_COLOR);		 
			circle.setAttribute("stroke-width", 1);
			this.paper.root.appendChild( circle );
						
		}
						
		for(var n = 0, ln = planets.length; n < ln; n++){
			
			var radius = startRadius + startRadius*n; 
			
			for(var i = 0; i < 12; i++){
				positions = astrology.utils.getPointPosition(this.cx, this.cy, radius, i * 30 );
			
				circle = this.paper.circle(positions.x, positions.y, astrology.COLLISION_RADIUS *astrology.SYMBOL_SCALE );
				circle.setAttribute("stroke", "red");		 
				circle.setAttribute("stroke-width", 1);
				this.paper.root.appendChild( circle );
							
				this.paper.root.appendChild( this.paper.getSymbol( planets[n], positions.x, positions.y));	
			}
		
		}
											
		return this;		
	};
		 		  
}( window.astrology = window.astrology || {}));

// ## Radix chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Radix charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.SVG} paper 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius
	 * @param {Object} data
	 */
	astrology.Radix = function( paper, cx, cy, radius, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
		
		this.data = data;								
		this.paper = paper; 
		this.cx = cx;
		this.cy = cy;
		this.radius = radius;
		
		// after calling this.drawPoints() it contains current position of point
		this.locatedPoints = [];
		this.rulerRadius = ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/astrology.RULER_RADIUS);
		this.pointRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + 2*this.rulerRadius + (astrology.PADDING * astrology.SYMBOL_SCALE));
					
		//@see astrology.Radix.prototype.aspects()
		//@see astrology.Radix.prototype.setPointsOfInterest() 
        this.toPoints = JSON.parse(JSON.stringify(this.data.planets)); // Clone object
                	
		this.shift = 0;		
		if(this.data.cusps && this.data.cusps[0]){
			var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
			this.shift = deg360 - this.data.cusps[0];	
		}	
		
		// preparing wrapper for aspects. It is the lowest layer
		var divisionForAspects = document.createElementNS(this.paper.root.namespaceURI, "g");
		divisionForAspects.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_ASPECTS);
		this.paper.root.appendChild( divisionForAspects );
				
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_RADIX);
		this.paper.root.appendChild( this.universe );														
						
		context = this;
			
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Radix.prototype.drawBg = function(){				
		var universe = this.universe;	
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_BG);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );					
	};
		
	/**
	 * Draw universe.
	 */
	astrology.Radix.prototype.drawUniverse = function(){
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_SIGNS);
						
		// colors 
        for( var i = 0, step = 30, start = this.shift, len = astrology.COLORS_SIGNS.length; i < len; i++ ){ 
        	        	        	       	        	                	        	        	     
        	var segment = this.paper.segment( this.cx, this.cy, this.radius, start, start+step, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);        	        	
					segment.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLORS_SIGNS[i]);
					segment.setAttribute("id", astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_SIGNS + "-" + i)
        	segment.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.CIRCLE_COLOR: "none");		 				 				 		
 					segment.setAttribute("stroke-width", astrology.STROKE_ONLY ? 1 : 0); 				
        	wrapper.appendChild( segment );
        	        	        	        	        	        	               	
					start += step;
        };
                       
        // signs
        for( var i = 0, step = 30, start = 15 + this.shift, len = astrology.SYMBOL_SIGNS.length; i < len; i++ ){ 
        	var position = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2, start);       	        	                	
        	wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_SIGNS[i], position.x, position.y));        	        	        	               		
			start += step;
        }        
	};
	
	/**
	 * Draw points
	 */
	astrology.Radix.prototype.drawPoints = function(){
		if(this.data.planets == null){
			return;
		}
				
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*(astrology.PADDING* astrology.SYMBOL_SCALE) ) / Object.keys(this.data.planets).length;
					
		var pointerRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius);
		var startPosition, endPosition;
		
		for (var planet in this.data.planets) {
 		   if (this.data.planets.hasOwnProperty( planet )) {
 		   	 		   	 		   		 		   		
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, this.pointRadius, this.data.planets[planet][0] + this.shift); 		   	
 		   		var point = {name:planet, x:position.x, y:position.y, r:(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle:this.data.planets[planet][0] + this.shift, pointer:this.data.planets[planet][0] + this.shift}; 		   		 		   		 		   		 		  
 		   		this.locatedPoints = astrology.utils.assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius});   
 		   	} 		
		}
		
		if( astrology.DEBUG ) console.log( "Radix count of points: " + this.locatedPoints.length );
		if( astrology.DEBUG ) console.log( "Radix located points:\n" + JSON.stringify(this.locatedPoints) );

		this.locatedPoints.forEach(function(point){
						        
        	// draw pointer        	
        	startPosition = astrology.utils.getPointPosition( this.cx, this.cy, pointerRadius, this.data.planets[point.name][0] + this.shift);
        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, pointerRadius-this.rulerRadius/2, this.data.planets[point.name][0] + this.shift );
        	var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
        	pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
			pointer.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        	wrapper.appendChild(pointer);
        	
        	// draw pointer line
        	if( !astrology.STROKE_ONLY && (this.data.planets[point.name][0] + this.shift) != point.angle){	        	
	        	startPosition = endPosition;
	        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, this.pointRadius + (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), point.angle );
	        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
	        	line.setAttribute("stroke", astrology.LINE_COLOR);	
	        	line.setAttribute("stroke-width", 0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));        	
	        	wrapper.appendChild(line);
        	}        	
        	
        	// draw symbol						
			var symbol = this.paper.getSymbol(point.name, point.x, point.y);
        	symbol.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS + "-" + point.name);        	
        	wrapper.appendChild( symbol );

					var title = this.paper.title(astrology.utils.decimalDegreesToString(this.data.planets[point.name][0] % 30));
					symbol.setAttribute("pointer-events", "bounding-box");
					symbol.appendChild(title);
        	        	        	        
        	// draw point descriptions
        	var textsToShow = [(Math.round(this.data.planets[point.name][0]) % 30).toString()];
        	
        	var zodiac = new astrology.Zodiac(this.data.cusps);
        	
        	if(this.data.planets[point.name][1] && zodiac.isRetrograde(this.data.planets[point.name][1])){
        		textsToShow.push("R");
        	}else{
        		textsToShow.push("");
        	}
        	textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":this.data.planets[point.name][0]}, astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
        	        	        	        	        	        	      	        	         	        	        	      
        	var pointDescriptions = astrology.utils.getDescriptionPosition(point, textsToShow);         	
        	pointDescriptions.forEach(function(dsc){        		        		        		     
				wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.SIGNS_COLOR) );	        		
        	}, this);
        	        	        	        	       	              	        	          			
		}, this);		
	};
	
	astrology.Radix.prototype.drawAxis = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_AXIS);
		
		var axisRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/4);
					
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var overlapLine, 
		startPosition, 
		endPosition, 
		line,
		lines;
				
		[AS,IC,DC,MC].forEach( function(i) {
																    								    								    								    								    																		 	 					 				 				 
			// overlap 												
			startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, this.data.cusps[i] + this.shift);
			endPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius, this.data.cusps[i] + this.shift);
			overlapLine = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y); 				 			
			overlapLine.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
			overlapLine.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
			wrapper.appendChild( overlapLine ); 
						 				 																
			// As
		 	if(i == AS){ 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (20 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_AS, textPosition.x, textPosition.y));
		 	}
		 	 		 	 		 	 		
		 	// Ds
		 	if(i == DC){  		 		 		 		 		 		 		 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (2 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_DS, textPosition.x, textPosition.y));
		 	}
		 	 		 	
		 	// Ic
		 	if(i == IC){ 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] - 2 + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_IC, textPosition.x, textPosition.y));
		 	}
		 	
		 	// Mc
		 	if(i == MC){ 		 		 		 	
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] + 2 + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_MC, textPosition.x, textPosition.y));
		 	} 
	 	}, this);
	};
	
	/**
	 * Draw cusps
	 */
	astrology.Radix.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var startPosition, endPosition, lines, line;
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_CUSPS);
				
		var numbersRadius = this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO + (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var mainAxis = [AS,IC,DC,MC];
											
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
 			
 			// Draws a dashed line when an point is in the way
 			lines = astrology.utils.getDashedLinesPositions(
 				this.cx, 
 				this.cy, 
 				this.data.cusps[i] + this.shift, 
 				this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, 
 				this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius),
 				this.pointRadius,
 				this.locatedPoints
 				);
 				
 			lines.forEach(function(line){ 				
 				line = this.paper.line( line.startX, line.startY, line.endX, line.endY);
 				line.setAttribute("stroke", astrology.LINE_COLOR);	 				 			 				 			
 				
 				if(mainAxis.indexOf(i) != -1){ 					
 					line.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
 				}else{
 					line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));	 					
 				}	 			 			 	
 				 				 				 				 			 						 			 			 	
 		 		wrapper.appendChild( line );  				
 			}, this);	
 			 			 			 			 		 			 		 	 		
 		 	// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 		 	  		 			  		 			
		}						      	      
	};
	
	/**
	 * Draw aspects
	 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
	 */
	astrology.Radix.prototype.aspects = function( customAspects ){
															
		var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						  customAspects : 
						  new astrology.AspectCalculator( this.toPoints, astrology.RADIX_ASPECTS_SETTINGS ).radix( this.data.planets );
						  						  						 						  										
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_ASPECTS);
								
		var duplicateCheck = [];
		
		for(var i = 0, ln = aspectsList.length; i < ln; i++){
			
			var key 		= aspectsList[i].aspect.name + "-" + aspectsList[i].point.name + "-" + aspectsList[i].toPoint.name;
			var opositeKey	= aspectsList[i].aspect.name + "-" + aspectsList[i].toPoint.name + "-" + aspectsList[i].point.name;									
			if( duplicateCheck.indexOf( opositeKey ) == -1 ){			
				duplicateCheck.push( key );
																			
				var startPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].toPoint.position + this.shift );
				var endPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].point.position + this.shift);
									
				var line = this.paper.line( startPoint.x, startPoint.y, endPoint.x, endPoint.y);       		       		       
				line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.LINE_COLOR : aspectsList[i].aspect.color);		 				 				 		
				line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));    
				
				line.setAttribute("data-name", aspectsList[i].aspect.name);
				line.setAttribute("data-degree", aspectsList[i].aspect.degree);				
				line.setAttribute("data-point", aspectsList[i].point.name);   		
				line.setAttribute("data-toPoint", aspectsList[i].toPoint.name);
				line.setAttribute("data-precision", aspectsList[i].precision);
				
				wrapper.appendChild( line );			
			}
		}
										     
        // this
        return context;
	};
	
	/**
	 * Add points of interest for aspects calculation
	 * @param {Obect} points, {"As":[0],"Ic":[90],"Ds":[180],"Mc":[270]} 
	 * @see (astrology.AspectCalculator( toPoints) )
	 */
	astrology.Radix.prototype.addPointsOfInterest = function( points ){
		
		for(point in points){
			this.toPoints[ point ] = points[point]; 	
		}
						
        return context;	
	};
		
	astrology.Radix.prototype.drawRuler = function drawRuler(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_RULER);
				
		var startRadius = (this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius));		
		var rays = astrology.utils.getRulerPositions( this.cx, this.cy, startRadius, startRadius + this.rulerRadius, this.shift);
		
		rays.forEach(function( ray ){
			var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
			line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       		
			wrapper.appendChild( line );				
		}, this);

		var circle;			
		circle = this.paper.circle( this.cx, this.cy, startRadius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );       	       	
	};
	
	/**
	 * Draw circles
	 */
	astrology.Radix.prototype.drawCircles = function drawCircles(){
	
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_CIRCLES);
														
		var circle;
						      
        //indoor circle
        circle = this.paper.circle( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
        circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));		
       	wrapper.appendChild( circle );     
       	
       	//outdoor circle
		circle = this.paper.circle( this.cx, this.cy, this.radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );
       	
       	//inner circle
       	circle = this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
       	circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );  	       	       	       	       	   
	};
			
	/**
	 * Display transit horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"planets":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],	*		 
	 *	} 
	 * 
	 * @return {astrology.Transit} transit
	 */
	astrology.Radix.prototype.transit = function( data ){
		
		// remove axis (As, Ds, Mc, Ic) from radix
		astrology.utils.getEmptyWrapper( this.universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_AXIS);
		
		var transit = new astrology.Transit(context, data);
		transit.drawBg();					
		transit.drawCusps();	
		transit.drawRuler();			
		transit.drawCircles();	
		transit.drawPoints();
		return transit; 			
	};
		
}( window.astrology = window.astrology || {}));

// ## Transit chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Transit charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.Radix} radix 
	 * @param {Object} data
	 */
	astrology.Transit = function( radix, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
						
		this.data = data;								
		this.paper = radix.paper; 
		this.cx = radix.cx;
		this.cy = radix.cy;
		this.toPoints = radix.toPoints;
		this.radius = radix.radius;
				
		this.rulerRadius = ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/astrology.RULER_RADIUS);
		this.pointRadius = this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO +  (astrology.PADDING * astrology.SYMBOL_SCALE));
											
		this.shift = radix.shift;		
						
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', this.paper.elementId + "-" + astrology.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		context = this; 
												
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Transit.prototype.drawBg = function(){				
		var universe = this.universe;		
						
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_BG);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius+this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );							
	};
				
	/**
	 * Draw planets
	 * 
	 * @param{undefined | Object} planetsData, posible data planets to draw
	 */
	astrology.Transit.prototype.drawPoints = function( planetsData ){
		
		var planets = (planetsData == null) ? this.data.planets : planetsData;		
		if(planets == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*(astrology.PADDING * astrology.SYMBOL_SCALE)) / Object.keys(planets).length;
					
		var pointerRadius = this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
		var startPosition, endPosition;
		
		this.locatedPoints = [];																			
		for (var planet in planets) {
 		   if (planets.hasOwnProperty( planet )) {
 		   	 		   	 		   		 		   		
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, this.pointRadius, planets[planet][0] + this.shift); 		   	
 		   		var point = {name:planet, x:position.x, y:position.y, r:(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle:planets[planet][0] + this.shift, pointer:planets[planet][0] + this.shift}; 		   		
 		   		this.locatedPoints = astrology.utils.assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius});   
 		   	} 		
		}
		
		if( astrology.DEBUG ) console.log( "Transit count of points: " + this.locatedPoints.length );
		if( astrology.DEBUG ) console.log( "Transit located points:\n" + JSON.stringify(this.locatedPoints) );
													
		this.locatedPoints.forEach(function(point){
						        
        	// draw pointer        	
        	startPosition = astrology.utils.getPointPosition( this.cx, this.cy, pointerRadius, planets[point.name][0] + this.shift);
        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, pointerRadius+this.rulerRadius/2, planets[point.name][0] + this.shift );
        	var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
        	pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
			pointer.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        	wrapper.appendChild(pointer);
        	
        	// draw pointer line
        	if( !astrology.STROKE_ONLY && (planets[point.name][0] + this.shift) != point.angle){	        	
	        	startPosition = endPosition;
	        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, this.pointRadius-(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), point.angle );
	        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
	        	line.setAttribute("stroke", astrology.LINE_COLOR);		        	
	        	line.setAttribute("stroke-width", 0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       	
	        	wrapper.appendChild(line);
        	}        	
        	
        	// draw symbol						
			var symbol = this.paper.getSymbol(point.name, point.x, point.y);
        	symbol.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS + "-" + point.name);
        	wrapper.appendChild( symbol );
        	        	        	        
					var title = this.paper.title(astrology.utils.decimalDegreesToString(planets[point.name][0] % 30));
					symbol.setAttribute("pointer-events", "bounding-box");
					symbol.appendChild(title);

        	// draw point descriptions
        	var textsToShow = [(Math.round(planets[point.name][0]) % 30).toString()];
        	
        	var zodiac = new astrology.Zodiac(this.data.cusps);
        	if(planets[point.name][1] && zodiac.isRetrograde(planets[point.name][1])){
        		textsToShow.push("R");
        	}else{
        		textsToShow.push("");
        	}
        	textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":planets[point.name][0]}, astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
        	         	           	        	        	        	 
        	var pointDescriptions = astrology.utils.getDescriptionPosition(point, textsToShow);         	
        	pointDescriptions.forEach(function(dsc){        		        		        		     
				wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.SIGNS_COLOR) );	        		
        	}, this);
        	        	        	        	       	              	        	          			
		}, this);										
	};
	
	/**
	 * Draw circles
	 */
	astrology.Transit.prototype.drawCircles = function drawCircles(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CIRCLES);
		var radius = this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO;
			
		var circle;			
		circle = this.paper.circle( this.cx, this.cy, radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );										
	};
	
	/**
	 * Draw cusps
	 * @param{undefined | Object} cuspsData, posible data cusps to draw
	 */
	astrology.Transit.prototype.drawCusps = function( cuspsData ){
		
		var cusps = (cuspsData == null) ? this.data.cusps : cuspsData;		
		if(cusps == null){
			return;
		}
						
		var startPosition, endPosition, lines, line;
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);		
		var numbersRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius)/2);
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var mainAxis = [AS,IC,DC,MC];
		
		//Cusps
		for (var i = 0, ln = cusps.length; i < ln; i++) {
			// Lines 			 			 		 		
 			var startPosition = bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, cusps[i] + this.shift);
 			var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius, cusps[i] + this.shift);
 			var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
 			line.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
 			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE)); 
 			
 			wrapper.appendChild( line );
 			 			 		
 			// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = cusps[i];
 		 	var endOfCusp = cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 						
		}				
	};
		
	astrology.Transit.prototype.drawRuler = function drawRuler(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_RULER);
				
		var startRadius = (this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO));		
		var rays = astrology.utils.getRulerPositions( this.cx, this.cy, startRadius, startRadius - this.rulerRadius, this.shift);
		
		rays.forEach(function( ray ){
			var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
			line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       		
			wrapper.appendChild( line );				
		}, this);

		var circle;			
		circle = this.paper.circle( this.cx, this.cy, startRadius - this.rulerRadius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );       	       	
	};
		
	/**
	 * Draw aspects
	 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
	 */
	astrology.Transit.prototype.aspects = function( customAspects ){
		
		var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						  customAspects : 
						  new astrology.AspectCalculator( this.toPoints, astrology.TRANSIT_ASPECTS_SETTINGS ).transit( this.data.planets );
							
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_ASPECTS);
																										
		for(var i = 0, ln = aspectsList.length; i < ln; i++){
														
			var startPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].toPoint.position + this.shift );
			var endPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].point.position + this.shift);
								
			var line = this.paper.line( startPoint.x, startPoint.y, endPoint.x, endPoint.y);       		       		       
			line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.LINE_COLOR : aspectsList[i].aspect.color);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));  
			
			line.setAttribute("data-name", aspectsList[i].aspect.name);
			line.setAttribute("data-degree", aspectsList[i].aspect.degree);				
			line.setAttribute("data-point", aspectsList[i].point.name);   		
			line.setAttribute("data-toPoint", aspectsList[i].toPoint.name);
			line.setAttribute("data-precision", aspectsList[i].precision);
						     	
			wrapper.appendChild( line );				
		}         
		         
        // this
        return context;				
	};
		
	/**
	 * Moves points to another position.
	 * 
 	 * @param {Object} data - planets target positions.
 	 * @param {Integer} duration - in seconds
 	 * @param {boolean} isReverse 	  	 
 	 * @param {Function | undefined} callbck - the function executed at the end of animation
	 */
	astrology.Transit.prototype.animate = function( data, duration, isReverse, callback ){
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
							
		// remove aspects
		astrology.utils.getEmptyWrapper( this.universe, astrology._paperElementId + "-" + astrology.ID_ASPECTS);
																				
		var animator = new astrology.Animator( context );			
		animator.animate( data, duration, isReverse, (function(){
			
			// animation is finished
			this.data = data;
			this.drawCusps();
			this.drawPoints();
			this.aspects();
			
			if(typeof callback == 'function'){
				callback();
			}
						
		}).bind(this));
																											
		 // this
        return context;				
	};
		
}( window.astrology = window.astrology || {}));
// ## Transit chart ###################################
(function( astrology ) {
		
	var context;
    
	/**
	 * Aspects calculator
	 * 
	 * @class
	 * @public
	 * @constructor 	 
	 * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
	 * @param {Object | null } settings
	 */
	astrology.AspectCalculator = function( toPoints, settings ){
		
		if(toPoints == null){
			throw new Error( "Param 'toPoint' must not be empty." );
		}
		
		this.settings = settings || { orbits: {} };
		this.settings.aspects = settings && settings.aspects || astrology.ASPECTS;
							
		this.toPoints = toPoints;
																																												
		context = this; 
												 
		return this;
	};
	
	/**
	 * Getter for this.toPoints
	 * @see constructor
	 * 
	 * @return {Object} 
	 */
	astrology.AspectCalculator.prototype.getToPoints = function(){
		return this.this.toPoints;
	};

	/**
	 * Get orbit for certain point and aspect
	 *
	 * @param {string} point
	 * @param {string} aspect
	 * @returns {number} orbit
	 */
	astrology.AspectCalculator.prototype.orbitFor = function(point, aspect) {
		return this.settings.orbits != null && this.settings.orbits[point] != null ? this.settings.orbits[point][aspect] : this.settings.aspects[aspect]["orbit"];
	};

	/**
	 * Compute orbit for two given points of an aspect
	 *
	 * @param {string} point
	 * @param {string} toPoint
	 * @param {object} aspect
	 * @returns {number} orbit
	 */
	astrology.AspectCalculator.prototype.computeOrbit = function(point, toPoint, aspect) {
		var specialPoints = ['As','H2','H3','Ic','H5','H6','Ds','H8','H9','Mc','H11','H12'];
		if (specialPoints.includes(point) || specialPoints.includes(toPoint)) {
			return Math.min(this.orbitFor(point, aspect), this.orbitFor(toPoint, aspect));
		} else {
			return Math.max(this.orbitFor(point, aspect), this.orbitFor(toPoint, aspect));
		}
	};
	
	/**
	 * Radix aspects
	 * 
	 * In radix calculation is the param "points" the same as param "toPoints" in constructor 
	 * , but without special points such as: As,Ds, Mc, Ic, ...
	 * 
	 * @param {Object} points; {"Sun":[0], "Moon":[90]}
	 * 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.radix = function( points ){
		if(!points){
			return []; 
		}
							
		var aspects = [];			
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) {
 		   	 		   	 		   
 		   	for (var toPoint in this.toPoints) {
 		   		if (this.toPoints.hasOwnProperty( toPoint )) { 		   			 		   			 		   		
 		   			
 		   			if( point != toPoint){ 		   				 		   			 		   			 		   
              for(var aspect in this.settings.aspects){
                if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect], this.computeOrbit(point, toPoint, aspect) )){
	 		   						
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision": calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]).toFixed(4)
	 		   								}
	 		   							)
	 		   				}
	 		   				
	 		   			}
 		   			} 		   		 		   						 
 		   		} 		   		
 		   	} 		   	 		   	 		  
 		   } 		
 		}
 		 		 		  		 		 
		return aspects.sort( compareAspectsByPrecision );
	}; 
			
	/**
	 * Transit aspects
	 *
	 * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]}; 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.transit = function( points ){	
		if(!points){
			return []; 
		}
		
		var aspects = [];
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) { 		   	
 		   		for (var toPoint in this.toPoints) {
 		   			if (this.toPoints.hasOwnProperty( toPoint )) {
 		   		
              for(var aspect in this.settings.aspects){
                if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect], this.computeOrbit(point, toPoint, aspect) )){
	 		   					
	 		   					var precision = calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]);
	 		   					
	 		   					// -1 : is approaching to aspect
	 		   					// +1 : is moving away
	 		   					if(isTransitPointApproachingToAspect( this.settings.aspects[aspect]["degree"], this.toPoints[toPoint][0], points[point][0] )){
	 		   						precision *= -1;
	 		   					}
	 		   					
	 		   					// if transit has speed value && transit is retrograde
	 		   					if(points[point][1] && points[point][1] < 0 ){ 
	 		   						precision *= -1;
	 		   					}
	 		   						 		   						 		   						 		   							   				
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision":precision.toFixed(4)
	 		   								}
	 		   							)
	 		   				}	 		   				
	 		   			} 		   		 		   		 		   	
 		   			}
 		   		} 		   	
 		   } 		
 		}
 		 		   						
		return aspects.sort( compareAspectsByPrecision );
	};
	
	/*
	* @private
 	* @param {double} point
 	* @param {double} toPoint
 	* @param {Array} aspects; [DEGREE, ORBIT]
	* @param {double} orbit (optional)
	 */
	function hasAspect(point, toPoint, aspect, orbit){
		var result = false;
		
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}
		
		var orbitMin = aspect["degree"] - (orbit != null ? orbit : aspect["orbit"]);
		var orbitMax = aspect["degree"] + (orbit != null ? orbit : aspect["orbit"]);
		
		if(orbitMin <= gap && gap <= orbitMax){											
			result = true;
		}
								
		return result;	
	}
	
	/*
	* @private 
 	* @param {Object} pointAngle
 	* @param {Object} toPointAngle
 	* @param {double} aspectDegree;
	 */
	function calcPrecision(point, toPoint, aspect){
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}			
		return Math.abs( gap - aspect);
	}
	
	/*
	 * Calculate direction of aspect
	 * whether the transiting planet is approaching or is falling
	 * @private
	 * 
	 * //TODO
	 * This method is tested, and for tests gives the right results. 
	 * But the code is totally unclear. It needs to be rewritten.
	 * @param {double} aspect - aspect degree; for example 90.	
	 * @param {double} toPoint - angle of standing point
	 * @param {double} point - angle of transiting planet
	 * @return {boolean}
	 */
	function isTransitPointApproachingToAspect(aspect, toPoint, point){
		
		if( (point - toPoint) > 0 ){
			
			if((point - toPoint) > astrology.utils.radiansToDegree( Math.PI)){
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}			
		}else{
			
			if((toPoint - point) > astrology.utils.radiansToDegree( Math.PI)){
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}										
		}
		
		var _point = point;
		var _toPoint = toPoint;
		
		var difference = _point - _toPoint;
		
		if( Math.abs( difference ) > astrology.utils.radiansToDegree( Math.PI)){			
			_point = toPoint;
			_toPoint = point;
		}
							
		return (_point - _toPoint < 0);				
	}
	
	/*
	 * Aspects comparator
	 * by precision
	 * @private
	 * @param {Object} a 
	 * @param {Object} b 
	 */
	function compareAspectsByPrecision( a , b ) {		
		return a.precision - b.precision;								
	}
		
}( window.astrology = window.astrology || {}));

// ## Zodiac ###################################
(function( astrology ) {
	
	// Zodiac
	var SIGNS_ARIES 		= 1;
	var SIGNS_TAURUS 		= 2;
	var SIGNS_GEMINI 		= 3;
	var SIGNS_CANCER 		= 4;
	var SIGNS_LEO 			= 5;
	var SIGNS_VIRGO 		= 6;
	var SIGNS_LIBRA 		= 7;
	var SIGNS_SCORPIO 		= 8;
	var SIGNS_SAGITTARIUS 	= 9;
	var SIGNS_CAPRICORN 	= 10;
	var SIGNS_AQUARIUS 		= 11;
	var SIGNS_PISCES 		= 12;
    
	/**
	 * Zodiac
	 * 
	 * Gives the position of points in the zodiac.
	 * Position of point in the zodiac.
	 * Position of point in houses.
	 * Dignities of planets.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Array} cusps - cusprs in zodiac; [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
	 * @param {Object | null } settings
	 */
	astrology.Zodiac = function( cusps, settings){
		
		if(cusps == null){
			throw new Error( "Param 'cusps' must not be empty." );
		}
		
		if( !( Array.isArray(cusps) && cusps.length == 12) ){
			throw new Error( "Param 'cusps' is not 12 length Array." );
		}
		
		this.cusps = cusps;
		this.settings = settings || {}; 
						
		return this;
	};
	
	/**
	 * Get astrological sign
	 * 1 - Arise, ... , 12 - Pisces
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ } 
	 */
	astrology.Zodiac.prototype.getSign = function( point ){
		var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);											
		return Math.floor((angle  / 30) + 1);			
	};
	
	/**
	 * Is retrograde
	 * 
 	 * @param {double} speed
 	 * @return {boolean}
	 */
	astrology.Zodiac.prototype.isRetrograde = function( speed ){
		return speed < 0;
	};
	 
	 /**
	 * Get house number
	 * 1 - 12
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ }
	 */
	 astrology.Zodiac.prototype.getHouseNumber = function( point ){
	 	var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);	
	 	
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if(angle >= this.cusps[i] && angle < this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i + 1;
	 		}
	 	}
	 	
	 	// cusp passes over zero
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if( this.cusps[i] > this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i+1;
	 		}	
	 	}
	 		 	
		throw new Error( "Oops, serious error in the method: 'astrology.Zodiac.getHouseNumber'." );
	 };
	 
	 /**
	  * Calculate dignities of planet
	  *   
	  * r - Rulership 
	  * d - Detriment  
	  * e - Exaltation  
	  * E - Exalatation - Exact exaltation
	  * f - Fall 
	  *  
 	  * @param {Object} planet, { name:"Sun", position:60.2 }
 	  * @param {Array<Object> | null } exactExaltation - list of named angles, [{ name:"Sun", position:278, orbit:2 }, { name:"Moon", position:3, , orbit:2 }]
 	  * @return {Array<String>}
	  */
	 astrology.Zodiac.prototype.getDignities = function( planet, exactExaltation ){
	 	if(!(planet && planet.name && planet.position != null)){
	 		return [];
	 	}
	 	
	 	var result = [];	 	
	 	var sign = this.getSign(planet.position);
	 		 		 
	 	var position = planet.position % astrology.utils.radiansToDegree( 2 * Math.PI);
	 	
	 	switch ( planet.name ) {
		  case astrology.SYMBOL_SUN:
		  		
		  		if(sign == SIGNS_LEO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_AQUARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_MOON:
		  		
		  		if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CAPRICORN){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_MERCURY:
		  		
		  		if(sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_SAGITTARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_VENUS:
		  		
		  		if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_MARS:
		  		
		  		if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_JUPITER:
		  		
		  		if(sign == SIGNS_SAGITTARIUS || sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_GEMINI || sign == SIGNS_VIRGO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_SATURN:
		  		
		  		if(sign == SIGNS_CAPRICORN || sign == SIGNS_AQUARIUS){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CANCER || sign == SIGNS_LEO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_URANUS:
		  		
		  		if(sign == SIGNS_AQUARIUS ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_LEO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_NEPTUNE:
		  		
		  		if(sign == SIGNS_PISCES ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_VIRGO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LEO || sign == SIGNS_SAGITTARIUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_AQUARIUS || sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_PLUTO:
		  		
		  		if(sign == SIGNS_SCORPIO ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES ){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		     
		    
		    
		    
		  default:		    
		    break;
		}
									
		if( exactExaltation != null && Array.isArray(exactExaltation)){			
			for(var i = 0, ln = exactExaltation.length; i < ln; i++){
				if(planet.name == exactExaltation[i].name){					
					if( hasConjunction( planet.position, exactExaltation[i].position, exactExaltation[i].orbit)){
						result.push(astrology.DIGNITIES_EXACT_EXALTATION);		
					}								
				}				
			}
		}
			 		 		 		 		 
	 	return result;
	 };
	 
	  /*
	 * To hours:minutes:seconds
	 * @param {Double} d
	 * @return {String}
	 */
	 astrology.Zodiac.prototype.toDMS = function ( d ) {  
	 	d += 0.5/3600./10000.;	// round to 1/1000 of a second
		var deg = parseInt(d);
		d = (d - deg) * 60;
		var min = parseInt(d);
		d = (d - min) * 60;
		var sec = parseInt(d);
		
		return deg + "° " + min + "' " + sec;
	 };
	 
	 /*
	  * Has conjunction with point
	  * 
	  * @private
	  * 
	  * @param {Double} planetPosition
 	  * @param {Double} poitPosition
 	  * @param {Integer} orbit
 	  * @return {boolean}
	  */
	 function hasConjunction(planetPosition, pointPosition, orbit){
	 	var result = false;
	 		 		 		
			var minOrbit = (pointPosition - orbit/2) < 0 ?
				astrology.utils.radiansToDegree( 2 * Math.PI) - (pointPosition - orbit/2) : 
				pointPosition - orbit/2;
				
			var maxOrbit = (pointPosition + orbit/2) >= astrology.utils.radiansToDegree( 2 * Math.PI) ?
				(pointPosition + orbit/2) - astrology.utils.radiansToDegree( 2 * Math.PI) :
				(pointPosition + orbit/2);
			
			if( minOrbit > maxOrbit){ //crossing over zero
			
				if( minOrbit >= planetPosition && planetPosition <= minOrbit){
					result = true;
				}
									
			}else{
				
				if( minOrbit <= planetPosition && planetPosition <= maxOrbit){
					result = true;
				}				
			}				 						
								 		 		 	
	 	return result;
	 };
	 
	
	 					 
}( window.astrology = window.astrology || {}));

// ## Timer ###################################
(function( astrology ) {
		   
	/**
	 * Timer
	 * 
	 * Animation timer
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 */
	astrology.Timer = function( callback ){
						
		if(typeof callback !== "function"){
			throw new Error( "param 'callback' has to be a function." );
		}				
						
		this.callback = callback;				
		this.boundTick_ = this.tick.bind(this); 
										
		return this;
	};
	
	astrology.Timer.prototype.start = function(){	
		if (!this.requestID_){
			this.lastGameLoopFrame = new Date().getTime();	
			this.tick();	
			if( astrology.DEBUG ) console.log("[astrology.Timer] start"); 
		}
	};
	
	astrology.Timer.prototype.stop = function(){	
		if(this.requestID_){    		
			window.cancelAnimationFrame( this.requestID_ );	
			this.requestID_ = undefined;
			if(astrology.DEBUG) console.log("[astrology.Timer] stop");
		}	
	};
	
	astrology.Timer.prototype.isRunning = function(){
		return this.requestID_ ? true : false;
	};
	
	astrology.Timer.prototype.tick = function(){	
		var now = new Date().getTime(); 				
		this.requestID_ = window.requestAnimationFrame( this.boundTick_ );		
		this.callback( now - this.lastGameLoopFrame );		
		this.lastGameLoopFrame = now;				
	};
	 					 
}( window.astrology = window.astrology || {}));
// ## Animator ###################################
(function( astrology ) {
	
	var context;
			  
	/**
	 * Transit chart animator
	 * 
	 * Animates the object on a circle.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Object} from, {"Sun":[12], "Moon":[60]}
	 * @param {Object} to, {"Sun":[30], "Moon":[180]}
	 * @param {Object} settings, {cx:100, cy:100, radius:200, prefix:"astro-chart-"}
	 */
	astrology.Animator = function( transit ){
		
		this.transit = transit;
		
		// Copy data
		this.actualPlanetPos = {};
		for(var planet in this.transit.data.planets){
			this.actualPlanetPos[planet] = this.transit.data.planets[planet];
		}
										
		this.timer = new astrology.Timer( this.update.bind(this) );
		
		// time, passed since the start of the loop
		this.timeSinceLoopStart = 0;
		
		context = this;
									
		return this;
	};
		
	/**
	 * Animate objects
	 
	 * @param {Object} data, targetPositions 
 	 * @param {Integer} duration - seconds
 	 * @param {boolean} isReverse 
 	 * @param {Function} callbck - start et the end of animation
	 */
	astrology.Animator.prototype.animate = function( data, duration, isReverse, callback){
		this.data = data;		 			
		this.duration = duration * 1000;
		this.isReverse = isReverse || false;					
		this.callback = callback; 
		
		this.rotation = 0;				
		this.cuspsElement = document.getElementById(astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		deltaTime = deltaTime || 1; //									
		this.timeSinceLoopStart += deltaTime;					
		if (this.timeSinceLoopStart >= this.duration) {
			this.timer.stop();					
								
			if( typeof this.callback  === "function"){
				this.callback();	
			}
			
			return;					
		}
									
		var expectedNumberOfLoops = (this.duration - this.timeSinceLoopStart) < deltaTime ? 
							1 :		
		 					Math.round( (this.duration - this.timeSinceLoopStart) / deltaTime);		
						 											 
		updatePlanets( expectedNumberOfLoops );
		updateCusps( expectedNumberOfLoops );														
	};
	
	/*
	 * @private
	 */
	function updateCusps( expectedNumberOfLoops ){	
		
		var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI);							
		var targetCuspAngle = context.transit.data.cusps[0] - context.data.cusps[0];					
					
		if( targetCuspAngle < 0 ){
			targetCuspAngle += deg360; 		
		}
						
		// speed
		if(  astrology.ANIMATION_CUSPS_ROTATION_SPEED > 0 ){
			targetCuspAngle += (context.isReverse)?
		 		-1 * ((astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360) + deg360) :
				astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360;
		}
																																													
		var difference = (context.isReverse) ? 
			context.rotation - targetCuspAngle : 
			targetCuspAngle - context.rotation;
								
		// zero crossing
		if( difference < 0 ){
			difference += deg360; 		
		}
			 				
		var increment = difference /  expectedNumberOfLoops;
						
		if(context.isReverse){
			increment *= -1; 				
		}						
		context.rotation += increment;
														 
		context.cuspsElement.setAttribute("transform", "rotate(" + context.rotation + " " + context.transit.cx + " " + context.transit.cy +")");
					
		if( expectedNumberOfLoops == 1){
			context.cuspsElement.removeAttribute("transform");
		}								
	};
	
	/*
	 * @private
	 */
	function updatePlanets( expectedNumberOfLoops ){
		
		for(var planet in context.data.planets){
			var actualPlanetAngle = context.actualPlanetPos[planet][0]; 		
			var targetPlanetAngle = context.data.planets[planet][0];
			var isRetrograde = context.actualPlanetPos[planet][1] != null && context.actualPlanetPos[planet][1] < 0;
								
			var difference;
			if( context.isReverse && isRetrograde){
				difference = targetPlanetAngle - actualPlanetAngle;
			
			}else if( context.isReverse || isRetrograde ){
				difference = actualPlanetAngle - targetPlanetAngle;
								
			}else{
				difference = targetPlanetAngle - actualPlanetAngle;
			}
																
			// zero crossing
			if( difference < 0 ){
				difference += astrology.utils.radiansToDegree( 2 * Math.PI); 		
			}
			
			var increment = difference /  expectedNumberOfLoops;
																																								
			if(context.isReverse){
				increment *= -1; 				
			}
			
			if(isRetrograde){
				increment *= -1; 
			}
			
			var newPos = actualPlanetAngle + increment;
			if( newPos < 0 ){
				newPos += astrology.utils.radiansToDegree( 2 * Math.PI);
			}
			
			context.actualPlanetPos[planet][0] = newPos;										
		}
								
		context.transit.drawPoints( context.actualPlanetPos );		
	}
						 		
}( window.astrology = window.astrology || {}));
// ## UTILS #############################
(function( astrology ) {
	
	astrology.utils = {};
	
	/**
	 * Calculate position of the point on the circle.
	 * 
	 * @param {int} cx - center x 
	 * @param {int} cy - center y
	 * @param {int} radius
	 * @param {double} angle - degree			
	 * 
	 * @return {Object} - {x:10, y:20}
	 */	
	astrology.utils.getPointPosition = function( cx, cy, radius, angle ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );							  		  			
		return {x:xPos, y:yPos};
	};
	
	astrology.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	astrology.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
	
	/**
	 * Calculates positions of the point description
	 * 
	 * @param {Object} point
	 * @param {Array<String>} texts
	 * 
	 * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
	 */
	astrology.utils.getDescriptionPosition = function( point, texts ){
		var RATION = 1.4;
		var result = [];		
		var posX = point.x + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE)  ;
		var posY = point.y - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		texts.forEach(function(text, idx){						
			result.push({text:text, x:posX, y:posY + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE * idx)});					
		}, this);
						
		return result;
	};
	
	/**
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {Object} status
	 */
	astrology.utils.validate = function( data ){
		var status = {hasError:false, messages:[]};
		
		if( data == null ){			
			status.messages.push( "Data is not set." );
			status.hasError = true;
			return status;
		}
		
		if(data.planets == null){					
			status.messages.push( "There is not property 'planets'." );
			status.hasError = true;
		}
		
		for (var property in data.planets) {
    		if (data.planets.hasOwnProperty(property)) {        		
        		if(!Array.isArray( data.planets[property] )){
        			status.messages.push( "The planets property '"+ property +"' has to be Array." );
					status.hasError = true;	
        		}
    		}
		}
					
		if(data.cusps != null && !Array.isArray(data.cusps)){
			status.messages.push( "Property 'cusps' has to be Array." );
			status.hasError = true;
		}
		
		if(data.cusps != null && data.cusps.length != 12){			
			status.messages.push( "Count of 'cusps' values has to be 12." );
			status.hasError = true;
		}
									
		return status;		
	};
	
	/**
	 * Get empty DOMElement with ID
	 * 
	 * @param{String} elementID
	 * @param{DOMElement} parent
	 * @return {DOMElement}
	 */
	astrology.utils.getEmptyWrapper = function( parent, elementID ){
		
		var wrapper = document.getElementById( elementID );		
		if(wrapper){
			astrology.utils.removeChilds( wrapper );
		}else{					
			wrapper = document.createElementNS( document.getElementById( astrology._paperElementId ).namespaceURI, "g");
			wrapper.setAttribute('id', elementID);
			parent.appendChild( wrapper );			
		} 
		
		return wrapper;
	};
	
	/**
	* Remove childs
	* 
	* @param{DOMElement} parent
	*/
	astrology.utils.removeChilds = function(parent){
		if( parent == null ){
			return;
		}
		
		var last;
    	while (last = parent.lastChild){
    		parent.removeChild(last);
    	}
	};
	
	/**
	 * Check circle collision between two objects 
	 * 
 	 * @param {Object} circle1, {x:123, y:123, r:50}
 	 * @param {Object} circle2, {x:456, y:456, r:60}
 	 * @return {boolean} 	 
	 */
	astrology.utils.isCollision = function(circle1, circle2){			
		//Calculate the vector between the circles’ center points
  		var vx = circle1.x - circle2.x;
  		var vy = circle1.y - circle2.y;
  		
  		var magnitude = Math.sqrt(vx * vx + vy * vy);
  		
  		//circle.radius has been set to astrology.COLLISION_RADIUS;
  		var totalRadii = circle1.r + circle2.r;
  		  		  		  		   		  		   	
		return magnitude <= totalRadii; 
	};
		
	/**
	 * Places a new point in the located list 
	 * 
 	 * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
 	 * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96} 
 	 * @param {Object} universe - current universe
 	 * @return {Array<Object>} locatedPoints 	 
	 */
	astrology.utils.assemble = function( locatedPoints, point, universe){
		
		// first item
		if(locatedPoints.length == 0){
			locatedPoints.push(point);
			return locatedPoints; //================>
		}
								
		if( (2 * Math.PI * universe.r) - ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2))  <= 0){							
			if( astrology.DEBUG ) console.log( "Universe circumference: " + (2 * Math.PI * universe.r) + ", Planets circumference: " + ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2)));							
			throw new Error("Unresolved planet collision. Try change SYMBOL_SCALE or paper size.");
		}
													
		var isCollision = false;				
		locatedPoints.sort( astrology.utils.comparePoints );
		for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
			
			if(astrology.utils.isCollision(locatedPoints[i], point)){
				isCollision = true;
				var locatedButInCollisionPoint =  locatedPoints[i];
				locatedButInCollisionPoint.index = i;
				
				if( astrology.DEBUG ) console.log( "Resolve collision: " + locatedButInCollisionPoint.name + " X " + point.name); 
												
				break;
			}
		}
						
		if( isCollision ){
			
			astrology.utils.placePointsInCollision(locatedButInCollisionPoint, point);
																																																																 						 										    				  			  																													
			var newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, locatedButInCollisionPoint.angle);
			locatedButInCollisionPoint.x = newPointPosition.x;
			locatedButInCollisionPoint.y = newPointPosition.y;
			
			newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, point.angle);
			point.x = newPointPosition.x;
			point.y = newPointPosition.y;
																		  		
			// remove locatedButInCollisionPoint from locatedPoints									
			locatedPoints.splice(locatedButInCollisionPoint.index, 1);
																
			// call recursive	
			locatedPoints = astrology.utils.assemble(locatedPoints, locatedButInCollisionPoint, universe);	
			locatedPoints = astrology.utils.assemble(locatedPoints, point, universe);	
														
		}else{
			locatedPoints.push(point);	
		}
		locatedPoints.sort( astrology.utils.comparePoints );									
		return locatedPoints;	
	};
	
	/**
	 * Sets the positions of two points that are in collision.
	 * 
	 * @param {Object} p1, {..., pointer:123, angle:456}
	 * @param {Object} p2, {..., pointer:23, angle:56}
	 */
	astrology.utils.placePointsInCollision = function(p1, p2){
		
		var step = 1;
		var adjustedP1Pointer = p1.pointer == undefined ? p1.angle : p1.pointer;
		var adjustedP2Pointer = p2.pointer == undefined ? p2.angle : p2.pointer;

		// solving problems with zero crossing
		if(Math.abs(adjustedP1Pointer - adjustedP2Pointer) > 180) {
			adjustedP1Pointer = (adjustedP1Pointer + 180) % 360
			adjustedP2Pointer = (adjustedP2Pointer + 180) % 360
		}
		
		if(adjustedP1Pointer <= adjustedP2Pointer){
			p1.angle = p1.angle - step;
			p2.angle = p2.angle + step;											
		} else if(adjustedP1Pointer >= adjustedP2Pointer)
		{
			p1.angle = p1.angle + step;
			p2.angle = p2.angle - step;	
		}
							
		p1.angle = (p1.angle + 360) % 360;
		p2.angle = (p2.angle + 360) % 360;		 					
	};
		
	/**
	 * Check collision between angle and object 
	 * 
 	 * @param {double} angle
 	 * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
 	 * @return {boolean} 	 
	 */
	astrology.utils.isInCollision = function(angle, points){		
		var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
		var collisionRadius = (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) / 2;
							
		var result = false;					
		for(var i = 0, ln = points.length; i < ln ; i++ ){
										
			if( Math.abs(points[i].angle - angle) <= collisionRadius || 
			(deg360 - Math.abs(points[i].angle - angle)) <= collisionRadius){
				result = true;
				break;
			}					
		}				
					
		return result;			
	};
		
	/**
	 * Calculates positions of the dashed line passing through the obstacle.
	 * 	* 
	 * @param {double} centerX
	 * @param {double} centerY
	 * @param {double} angle - line angle
 	 * @param {double} lineStartRadius
 	 * @param {double} lineEndRadius
 	 * @param {double} obstacleRadius 	
 	 * @param {Array<Object>} obstacles, [{x:456, y:456, r:60, angle:123}, ...]
 	 * 
 	 * @return {Array<Object>} [{startX:1, startY:1, endX:4, endY:4}, {startX:6, startY:6, endX:8, endY:8}]
	 */
	astrology.utils.getDashedLinesPositions = function( centerX, centerY, angle, lineStartRadius, lineEndRadius, obstacleRadius, obstacles){
		var startPos, endPos;
		var result = [];	
		
		if( astrology.utils.isInCollision( angle, obstacles)){
			
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle);			
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );
			
			// the second part of the line when is space
			if( (obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)) < lineEndRadius){
				startPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE),angle); 			
				endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);				
				result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} ); 														
			}					
								
		}else{
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );	
		}	
						
		return result;		
	};
	
	/**
	 * Calculate ruler positions.
	 * 
	 * @param {Double} centerX
	 * @param {Double} centerY
	 * @param {Double} startRadius
	 * @param {Double} endRadius
	 * @param {Boolean} startAngle
	 * 
	 * @return {Array<Object>} [ {startX:1,startY:2, endX:3, endX:4 }, ...]
	 */
	astrology.utils.getRulerPositions = function( centerX, centerY, startRadius, endRadius, startAngle ){	
		var result = [];
		
		var rayRadius = endRadius;
		var halfRayRadius = (startRadius <= endRadius) ? rayRadius - (Math.abs(endRadius-startRadius)/2): rayRadius + (Math.abs(endRadius-startRadius)/2); 
		
		for(var i = 0, start = 0, step = 5; i < 72; i++ ){ 
			    var angle = start + startAngle;
			    var startPos = astrology.utils.getPointPosition( centerX, centerY, startRadius, angle);
				var endPos = astrology.utils.getPointPosition( centerX, centerY, (i%2 == 0 ? rayRadius : halfRayRadius), angle);				
				result.push({startX:startPos.x,startY:startPos.y, endX:endPos.x, endY:endPos.y });				
				
				start += step;
		} 
												
		return result;		
	};
	
	/**
	* Compare two points
	* 
	* @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
	* @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
	* @return 
	*/
	astrology.utils.comparePoints = function( pointA, pointB){		
		return pointA.angle - pointB.angle; 			
	};

	/**
	 * Convert decimal degrees to DMS String
	 * @param {String} decimalDegrees
	 * @returns
	 */
	astrology.utils.decimalDegreesToString = function(decimalDegrees) {
		// converts decimal degrees to degrees / minutes / seconds
		// https://stackoverflow.com/a/5786627/6826976
		// * float decimalDegrees
		// => returns { degrees, minutes, seconds }
		var degrees = Math.floor(decimalDegrees);
		var minfloat = (decimalDegrees - degrees) * 60;
		var minutes = Math.floor(minfloat);
		var secfloat = (minfloat - minutes) * 60;
		var seconds = Math.round(secfloat);

		// After rounding, the seconds might become 60. These two
		// if-tests are not necessary if no rounding is done.
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}

		if (minutes === 60) {
			degrees++;
			minutes = 0;
		}

		return degrees + "° " + minutes + "' " + seconds + "''";
	};
									
}( window.astrology = window.astrology || {}));