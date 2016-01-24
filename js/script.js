var sUrl = 'http://apis.is/currency/lb';

$.getJSON(sUrl, function(data){
	var x;
    for (x in data.results) {
        $('#skemmtanir').append(buaTilHtml(
		data.results[x].shortName,  
		data.results[x].longName, 
		data.results[x].value, 
		data.results[x].askValue, 
		data.results[x].bidValue,
		data.results[x].changeCur,
		data.results[x].changePer));
    }
});
var buaTilHtml = function(shortName, longName, value, askValue, bidValue,changeCur,changePer ){
    return "<tr><td><h3>" + 
	shortName + "</td></h3><td><h3>" + 
	value  + "</td></h3><td><h3>"+ 
	askValue  + "</td></h3><td><h3>"+ 
	bidValue + "</td></h3><td><h3>" + 
	changeCur +  "</td></tr>"  ;
}
