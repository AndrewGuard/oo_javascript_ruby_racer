$(document).ready(function() {

  function isFinished()
  {
    if ( $('#player1_strip').find('td').last().attr('class') == "active" || $('#player2_strip').find('td').last().attr('class') == "active" )
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  function movePlayer(current, next)
  {
    current.removeAttr('class');
    next.attr('class', 'active');
  }

  function getCurrent(player)
  {
    if (player == 1)
    {
      return $('#player1_strip').find('.active');
    }
    if (player == 2)
    {
      return $('#player2_strip').find('.active');
    }
    return null;
  }

    function getNext(player)
  {
    if (player == 1)
    {
      return $('#player1_strip').find('.active').closest('td').next();
    }
    if (player == 2)
    {
      return $('#player2_strip').find('.active').closest('td').next();
    }
    return null;
  }



  $(document).on('keyup', function(event) {

    if ( event.keyCode == 81 && !isFinished() )
    {
      var player1_current = getCurrent(1);
      var player1_next = getNext(1);
      movePlayer(player1_current, player1_next);
    }

    if ( event.keyCode == 80 && !isFinished() )
    {
      var player2_current = getCurrent(2);
      var player2_next = getNext(2);
      movePlayer(player2_current, player2_next);
    }
  });
});



