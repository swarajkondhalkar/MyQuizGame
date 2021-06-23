class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      question.hide();
    //write code to change the background color here
      background("white")
    //write code to show a heading for showing the result of Quiz
    fill(0); 
    textSize(30); 
    text("Result of the Quiz",325, 50); 
    text("------------------------",325, 63);  
    //call getContestantInfo( ) here
      Contestant.getPlayerInfo()
      
    //write condition to check if contestantInfor is not undefined
      if(allContestants !==undefined){
        var display_Answers = 230; 
        fill("orange"); textSize(20); 
        text("*NOTE: Contestants who answered correct are highlighted in blue!",135,225);
      }
    //write code to add a note here
             
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){ 
      debugger; 
      var correctAns = "2"; 
      if (correctAns === allContestants[plr].answer) 
      fill("lightblue") 
      else fill("violet"); 
      display_Answers+=30; 
      textSize(20); 
      text(allContestants[plr].name + " : " + allContestants[plr].answer, 270,display_Answers) 
    }
  }

}
