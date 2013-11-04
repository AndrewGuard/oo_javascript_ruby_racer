# GET =============================================

get '/' do
  session.clear
  erb :index
end

get '/create_game' do
  @game = Game.create()
  PlayerGame.create(player_id: current_player1_id, game_id: @game.id)
  PlayerGame.create(player_id: current_player2_id, game_id: @game.id)
  erb :index
end

#  POST ============================================

post '/login' do
  player1 = Player.find_by_name(params[:player1])
  player2 = Player.find_by_name(params[:player2])

  unless session[:p1_name] && session[:p2_name]
    if player1
      session[:p1_name] = player1.name
    else
      player1 = Player.create(name: params[:player1])
      session[:p1_name] = player1.name
    end

    if player2
      session[:p2_name] = player2.name
    else
      player2 = Player.create(name: params[:player2])
      session[:p2_name] = player2.name
    end
  end

  redirect '/create_game'
end





