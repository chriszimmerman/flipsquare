$(document).ready(function() {
    var sw = function(sq){
            if(sq.hasClass('unhighlighted')){
                sq.removeClass('unhighlighted');
                sq.addClass('highlighted');    
            }
            else{
                sq.removeClass('highlighted');
                sq.addClass('unhighlighted');    
            }    
        };
        
    var puzzle = function(rowcol){
        for(var i = 0; i < rowcol; i++){
            $('table').append($('<tr id="'+i+'"/>'));
            for(var j = 0; j < rowcol; j++){
                
                $('#'+i).append($('<td><div id="'+i+'x'+j+'" class="square unhighlighted"/></td>'));
            }
        }  
    };
    
    puzzle(5);
        
    $('div').each(function(){
        if(Math.random() < 0.5){
            sw($(this));    
        }    
    });
    
	$('table tr td div').click(function(){
        sw($(this));
        
        var yx = $(this).attr('id').split('x');
        var y = Number(yx[0]);
        var x = Number(yx[1]);
        
        var upNeighbor = String(y-1) +'x'+ String(x);
        var downNeighbor = String(y+1) + 'x' + String(x);
        var leftNeighbor = String(y) + 'x' + String(x-1);
        var rightNeighbor = String(y) + 'x' + String(x+1);
        
        sw($('#'+upNeighbor));
        sw($('#'+downNeighbor));
        sw($('#'+leftNeighbor));
        sw($('#'+rightNeighbor));
	});
});