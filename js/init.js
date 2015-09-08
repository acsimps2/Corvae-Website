(function($){
  $(function(){
    var wallopEl = document.querySelector('.Wallop');
    var wallop = new Wallop(wallopEl);
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });

  //   var lineData = [
  //   {"x": 5, "y": 295}, {"x": 40, "y": 250}, {"x": 100, "y": 200}, {"x": 200, "y": 180}, {"x": 300, "y": 160}, {"x": 400, "y": 140},
  //   {"x": 500, "y": 120}, {"x": 550, "y": 50}, {"x": 585, "y": 5}
  //   ];

  //   var triangleData = [
	 //    {"x": 560, "y": 4}, {"x": 590, "y": 2}, {"x": 590, "y": 30}
  //   ];

  //   var timelineData = [
  //   	{"text": "Student Venture Funding Award", "x": 10,"y": 280}, {"text": "UIUC Lextech Most Marketable Award", "x": 100,"y": 220}, {"text": "Cozad New Venture Competition", "x": 200,"y": 160}, {"text": "Second Round Venture Funding", "x": 300,"y": 120}, {"text": "UIUC Summer Incubator", "x": 550,"y": 5}, {"text": "Senior Design First Prototype", "x": 50,"y": 280}, {"text": "App Prototyping", "x": 400,"y": 150}, {"text": "Faculty mentored Second Prototype", "x": 580,"y": 50}
  //   ];

  //   var insertLinebreaks = function (d) {
	 //    var el = d3.select(this);
	 //    var words = d.text.split(' ');
	 //    el.text('');

	 //    for (var i = 0; i < words.length; i++) {
  //       var tspan = el.append('tspan').text(words[i]);
  //       if (i > 0)
  //         tspan.attr('x', 0).attr('dy', '15');
	 //    }
		// };


  //   var lineFunction = d3.svg.line().x(function(d) {
		// 														    	return d.x;
		// 														    }).y(function(d) {
		// 														    	return d.y;
		// 														    }).interpolate('basis');

		// var triangleFunction = d3.svg.line().x(function(d) {
		// 														    	return d.x;
		// 														    }).y(function(d) {
		// 														    	return d.y;
		// 														    }).interpolate('linear');

  //   var svgContainer = d3.select('#timeline');

  //   var lineGraph = svgContainer.append('path')
  //   														.attr('d', lineFunction(lineData))
  //   														.attr('stroke', '#42a5f5')
  //   														.attr('stroke-width', 10)
  //   														.attr('fill', 'none');

  //   var arrow = svgContainer.append('path')
		// 												.attr('d', triangleFunction(triangleData))
		// 												.attr('stroke', '#42a5f5')
		// 												.attr('stroke-width', 1)
		// 												.attr('fill', '#42a5f5');

		// var text = svgContainer.selectAll('text').data(timelineData).enter().append('text')
		// 																				 .attr('x', function(d) {return d.x;})
		// 																				 .attr('y', function(d) {return d.y;})
		// 																				 .text(function(d) {return d.text})
		// 																				 .attr('font-family', 'Roboto sans-serif')
		// 																				 .attr('font-size', '16px')
		// 																				 .attr('fill', 'black')
		// 																				 .each(insertLinebreaks);
  // //   var line1 = svgContainer.append('line')
  // // 										.attr('x1', 560)
  // // 										.attr('y1', 5)
  // // 										.attr('x2', 590)
		// // 									.attr('y2', 5)
		// // 									.attr('stroke-width', 10)
		// // 								 .attr('stroke', '#42a5f5');

		// // var line2 = svgContainer.append('line')
  // // 										.attr('x1', 587)
  // // 										.attr('y1', 32)
  // // 										.attr('x2', 587)
		// // 									.attr('y2', 2)
		// // 									.attr('stroke-width', 10)
		// // 								 .attr('stroke', '#42a5f5');

		// svgContainer.append('path')
		// 						.attr('d', function(d) {

		// 						});


  }); // end of document ready
})(jQuery); // end of jQuery name space