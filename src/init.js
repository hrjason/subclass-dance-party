$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    // put the dancer we just made into dancers array
    // dancers.push(our fin dancer);
    window.dancers.push(dancer);

    $('.img-zoom').mouseover(function() {
      $(this).addClass('transition');
    });
    $('.img-zoom').mouseleave(function() {
      $(this).removeClass('transition');
    });

  });

  $(".lineUpDancers").on("click", function(){
    //$.each(window.dancers, this.lineUp);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
    //$(".dancers").each(function(){
    //  $(this).lineUp();
    //});
  });
//});

  $(".pairDancers").on("click", function(){
    //on pairing click... activate function
  //iterate through values

  // for distances, use dancer's top and left properties

  //var distances = [];
    //calculate distance between two dancers
      //find nearest dancers
      /*
    for(var i=0; i < window.dancers.length; i = i + 2){
      //compare window.dancers[i] and window.dancers[i+1];
      var x $(windows.dancer[i]).css("left")

    }
    */
    });
});

