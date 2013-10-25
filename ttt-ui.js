// $("div.board > div")[0] --first row
// c1  = $("div.row > div")[0].
// $(c1).html("x")

$(function () {



	var ttt_game = new TTT.Game();


	var mark = "x";
	var col = 'red';
  TTT.Game.prototype.turn = function (callback) {

  var game = this;

	$("div.row > div").on("click", function(event) {
		var row = $(event.target).attr("data-id")[9] - 1;
		var column= $(event.target).attr("data-id")[15] - 1;
		var coords =[row,column];
	 $('div').off('click');
		if (game.valid(coords)) {
      game.move(coords);
			$(event.target).html(mark)
			mark === "x" ? mark = "o" : mark = "x";
			$(event.target).css("background-color", col)
			col === 'red' ? col = 'blue' : col = 'red';
      callback();
    } else {
      console.log("Invalid coords!");
      game.turn(callback);
    }
  });
}


ttt_game.run();


});