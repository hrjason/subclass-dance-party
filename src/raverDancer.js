var RaverDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append("<div class='raver'></div>");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = hold.step

  // need a way to access Dancer's step while still overwriting it

};

RaverDancer.prototype = Object.create(Dancer.prototype);
RaverDancer.prototype.constructor = RaverDancer;

RaverDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  //setTimeout(this.oldStep.bind(this), this._timeBetweenSteps);
};
