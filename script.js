$(document).ready(function() {
    $('#win').hide();

    $('#start').click(function(){
        var swapColors = function(sq){
            if(sq.hasClass('unhighlighted')){
                sq.removeClass('unhighlighted');
                sq.addClass('highlighted');
            }
            else{
                sq.removeClass('highlighted');
                sq.addClass('unhighlighted');
            }
        };

        var generatePuzzle = function(rowcol){
            for(var i = 0; i < rowcol; i++){
                $('table').append($('<tr id="'+i+'"/>'));
                for(var j = 0; j < rowcol; j++){
                    $('#'+i).append($('<td><div id="'+i+'x'+j+'" class="square unhighlighted"/></td>'));
                }
            }
        };

        $('#start').hide();

        generatePuzzle(4);

        $('div').each(function(){
            if(Math.random() < 0.5){
                swapColors($(this));
            }
        });

        $('table tr td div').click(function(){
            swapColors($(this));

            var xyCoordinates = $(this).attr('id').split('x');
            var yCoordinate = Number(xyCoordinates[0]);
            var xCoordinate = Number(xyCoordinates[1]);

            var upNeighbor = String(yCoordinate - 1) +'x'+ String(xCoordinate);
            var downNeighbor = String(yCoordinate + 1) + 'x' + String(xCoordinate);
            var leftNeighbor = String(yCoordinate) + 'x' + String(xCoordinate - 1);
            var rightNeighbor = String(yCoordinate) + 'x' + String(xCoordinate + 1);

            swapColors($('#' + upNeighbor));
            swapColors($('#' + downNeighbor));
            swapColors($('#' + leftNeighbor));
            swapColors($('#' + rightNeighbor));

            if($('.highlighted').length === $('.square').length){
                $('table').remove();
                $('#win').show();
            }
        });
    });
});