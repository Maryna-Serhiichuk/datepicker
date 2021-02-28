$( function() {
	$( "#from, #to").button();
	var dateFormat = "mm/dd/yy",
		from = $( "#from" )
			.datepicker({
		        defaultDate: "+1w",
		        changeMonth: true,
		        numberOfMonths: 3,
		        changeYear: true,
		        showButtonPanel: true,
				showOn: "both",
			    buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
			    buttonImageOnly: true,
			    buttonText: "Select date",
			    showAnim: "blind",
        	})
        	.on( "change", function() {
        		to.datepicker( "option", "minDate", getDate( this ) );
        	}),
		to = $( "#to" ).datepicker({
		        defaultDate: "+1w",
		        changeMonth: true,
		        numberOfMonths: 3,
		        changeYear: true,
		        showButtonPanel: true,
				showOn: "both",
				buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
			    buttonImageOnly: true,
			    buttonText: "Select date",
			    showAnim: "blind",
    	})
    	.on( "change", function() {
        	from.datepicker( "option", "maxDate", getDate( this ) );
    	});
 
	function getDate( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( dateFormat, element.value );
		} catch( error ) {
			date = null;
		}
		return date;
	}
} );