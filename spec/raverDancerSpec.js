describe("raverDancer", function() {

  var raverDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    raverDancer = new RaverDancer(10, 20, timeBetweenSteps);
    console.log(raverDancer);
  });

  it("should have a jQuery $node object", function(){
    expect(raverDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(raverDancer.$node, 'toggle');
    raverDancer.step();
    expect(raverDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(raverDancer, "step");
      expect(raverDancer.step.callCount).to.be.equal(0);
      //console.log('1');
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);
      expect(raverDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(raverDancer.step.callCount).to.be.equal(2);
    });
  });
});
