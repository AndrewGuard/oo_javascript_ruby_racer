helpers do

  def current_player1_id
    Player.find_by_name(session[:p1_name]).id
  end

  def current_player2_id
    Player.find_by_name(session[:p2_name]).id
  end

end