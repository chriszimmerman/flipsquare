$(document).ready(function() {
    $('#win').hide();

    $('#start').click(function(){
        var swapColors = function(square){
            if(square.hasClass('unhighlighted')){
                square.removeClass('unhighlighted');
                square.addClass('highlighted');
            }
            else{
                square.removeClass('highlighted');
                square.addClass('unhighlighted');
            }
        };

        var generatePuzzle = function(rowcolumn){
            for(var row = 0; row < rowcolumn; row++){
                $('table').append($('<tr id="'+row+'"/>'));
                for(var column = 0; column < rowcolumn; column++){
                    $('#'+row).append($('<td><div id="'+row+'x'+column+'" class="square unhighlighted"/></td>'));
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