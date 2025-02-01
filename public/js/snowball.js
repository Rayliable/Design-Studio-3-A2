//Keeping the test code from class down there so I can reference it.
hasSnowball = false; //boolean has snowball
rightHand = true; //right handed first

AFRAME.registerComponent("snowball-pickup", {
  schema: {
    duration: { type: "number", default: 500 }, //duration is time for animation in ms
  },
  init: function () {
    // called when component is initialised - after aframe and the scene
    //console.log("called snowball-pickup!");

    const CONTEXT_AF = this; //reference to this component
    CONTEXT_AF.cam = document.querySelector("#main-cam");

    //listen for click
    CONTEXT_AF.el.addEventListener("click", function (e) {
      if (hasSnowball === true) {
        //no snowball
        console.log("already holding a snowball!");
      } else {
        var ball = document.createElement("a-entity");
        //snowball pickup
        console.log("getting snowball.");
        CONTEXT_AF.cam.appendChild(ball);
        ball.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.15,
        });
        ball.setAttribute("id", "snowball");
        if (rightHand) {
          ball.setAttribute("position", { x: 0.65, y: -0.4, z: -0.7 });
        } else {
          ball.setAttribute("position", { x: -0.65, y: -0.4, z: -0.7 });
        }

        ball.setAttribute("material", "src", "#snow_map");
        //CONTEXT_AF.ball.setAttribute("visible", true);
        hasSnowball = true;
      }
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

AFRAME.registerComponent("snowball-throw", {
  schema: {
    duration: { type: "number", default: 500 }, //duration is time for animation in ms
  },
  init: function () {
    //referencing https://www.8thwall.com/8thwall/tossobject-aframe/code/toss-object.js
    //also referencing https://www.youtube.com/watch?v=eQtMgt-R0lE
    // called when component is initialised - after aframe and the scene
    //console.log("called snowball-throw!");

    const CONTEXT_AF = this; //reference to this component
    CONTEXT_AF.cam = document.querySelector("#main-cam");
    sceneRef = document.querySelector("a-scene");

    //listen for click
    CONTEXT_AF.el.addEventListener("click", function (e) {
      if (hasSnowball === true) {
        CONTEXT_AF.ball = document.querySelector("#snowball");
        //console.log(CONTEXT_AF.ball);
        //has snowball
        console.log("throwing a snowball!");
        // CONTEXT_AF.ball.parentNode.removeChild(CONTEXT_AF.ball); //deprecated
        CONTEXT_AF.ball.remove();
        hasSnowball = false; //boolean has snowball false

        const throwBall = document.createElement("a-entity");

        throwBall.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.15,
        });
        throwBall.setAttribute("id", "throwball");

        throwBall.setAttribute("material", "src", "#snow_map");
        throwBall.setAttribute("position", CONTEXT_AF.cam.object3D.position);
        throwBall.setAttribute("scale", "1 1 1");

        const velocity = new THREE.Vector3(0, 0, -10);

        // velocity.applyQuaternion(cam.object3D.rotation);

        throwBall.setAttribute("velocity", velocity);

        throwBall.setAttribute("dynamic-body", {
          sphereRadius: 0.15,
          shape: "sphere",
        });

        sceneRef.appendChild(throwBall);

        // Delete the dropped ball

        setTimeout(function () {
          document.querySelector("#throwball").remove();
          console.log("deleted thrown ball");
        }, 2200);
      } else {
        //no snowball to throw
        console.log("no throwable snowball.");
        hasSnowball = false;
      }
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

AFRAME.registerComponent("snowball-switch", {
  schema: {
    duration: { type: "number", default: 500 }, //duration is time for animation in ms
  },
  init: function () {
    // called when component is initialised - after aframe and the scene
    //console.log("called snowball-pickup!");

    const CONTEXT_AF = this; //reference to this component
    CONTEXT_AF.cam = document.querySelector("#main-cam");
    rightHand = true;
    //listen for click

    CONTEXT_AF.el.addEventListener("click", function (e) {
      if (hasSnowball === true && rightHand == true) {
        var ball = document.querySelector("#snowball");
        //switch snowball to left hand
        ball.setAttribute("position", { x: -0.65, y: -0.4, z: -0.7 });
        rightHand = false;
        console.log("switching hand to L");
      } else if (hasSnowball === true && rightHand == false) {
        var ball = document.querySelector("#snowball");
        //switch snowball to left hand
        ball.setAttribute("position", { x: 0.65, y: -0.4, z: -0.7 });
        rightHand = true;
        console.log("switching hand to R");
      }
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

// let obj = {
//   count: 10,
//   countStuff: function () {
//     setTimeout(function () {
//       this.count++;
//       console.log(this.count);
//     }, 300);
//   },
// };

// obj.countStuff();

// let objArrow = {
//   count: 10,
//   countStuff: function () {
//     setTimeout(() => {
//       this.count++;
//       console.log(this.count);
//     }, 300);
//   },
// };

// objArrow.countStuff();

// promises are a way to force synchronous loading.

// events - for example, you will listen for a 'ready' event from a library before you try to access it.

window.addEventListener("load", function (e) {
  console.log("page loaded!");
});

// window.addEventListener("five_seconds_later", function (e) {
//   console.log("Ding dong");
// });

// window.addEventListener("two_seconds_later", function (e) {
//   console.log("Pizza's here");
// });

// const myEvent = new Event("five_seconds_later");
// const myEventTwo = new Event("two_seconds_later");

// setTimeout(function () {
//   window.dispatchEvent(myEvent);
//   setTimeout(function () {
//     window.dispatchEvent(myEventTwo);
//   }, 2000);
// }, 5000);
