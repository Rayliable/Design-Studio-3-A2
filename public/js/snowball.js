//Keeping the test code from class down there so I can reference it.
hasSnowball = false; //boolean has snowball

AFRAME.registerComponent("snowball-pickup", {
  schema: {
    duration: { type: "number", default: 500 }, //duration is time for animation in ms
  },
  init: function () {
    // called when component is initialised - after aframe and the scene
    //console.log("called snowball-pickup!");

    const CONTEXT_AF = this; //reference to this component
    CONTEXT_AF.cam = document.querySelector("#main-cam");
    CONTEXT_AF.rightHand = false;
    var ball = document.createElement("a-entity");

    // CONTEXT_AF.ball.setAttribute("enabled", false);
    // CONTEXT_AF.ball.setAttribute("animation", {
    //   property: "rotation.y",
    //   to: 360,
    //   loop: true,
    //   easing: "linear",
    //   dur: CONTEXT_AF.data.duration,
    //   enabled: false,
    // });

    //listen for click
    CONTEXT_AF.el.addEventListener("click", function (e) {
      if (hasSnowball === true) {
        //no snowball
        console.log("already holding a snowball!");
      } else {
        //snowball pickup
        console.log("getting snowball.");
        CONTEXT_AF.cam.appendChild(ball);
        ball.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.15,
        });
        ball.setAttribute("id", "snowball");
        ball.setAttribute("position", { x: 0.65, y: -0.4, z: -0.7 });
        ball.setAttribute("material", "color", "#cce5ff");
        //CONTEXT_AF.ball.setAttribute("visible", true);
        CONTEXT_AF.rightHand = true;
        hasSnowball = true;
      }
    });

    CONTEXT_AF.el.addEventListener("contextmenu", function (e) {
      if (hasSnowball === true && rightHand == true) {
        //switch snowball to left hand
        ball.setAttribute("position", { x: -0.65, y: -0.4, z: -0.7 });
        CONTEXT_AF.rightHand = false;
        console.log("switching hand to L");
      } else if (hasSnowball === true && rightHand == false) {
        //switch snowball to left hand
        ball.setAttribute("position", { x: 0.65, y: -0.4, z: -0.7 });
        CONTEXT_AF.rightHand = true;
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

AFRAME.registerComponent("snowball-throw", {
  schema: {
    duration: { type: "number", default: 500 }, //duration is time for animation in ms
  },
  init: function () {
    // called when component is initialised - after aframe and the scene
    //console.log("called snowball-throw!");

    const CONTEXT_AF = this; //reference to this component
    CONTEXT_AF.cam = document.querySelector("#main-cam");
    // console.log(CONTEXT_AF.cam);
    // console.log(CONTEXT_AF.ball);
    // CONTEXT_AF.ball.setAttribute("enabled", false);
    // CONTEXT_AF.ball.setAttribute("animation", {
    //   property: "rotation.y",
    //   to: 360,
    //   loop: true,
    //   easing: "linear",
    //   dur: CONTEXT_AF.data.duration,
    //   enabled: false,
    // });

    //listen for click
    CONTEXT_AF.el.addEventListener("click", function (e) {
      if (hasSnowball === true) {
        CONTEXT_AF.ball = document.querySelector("#snowball");

        console.log(CONTEXT_AF.ball);
        //has snowball
        console.log("throwing a snowball!");
        // CONTEXT_AF.ball.parentNode.removeChild(CONTEXT_AF.ball);
        CONTEXT_AF.ball.remove();
        hasSnowball = false; //boolean has snowball false
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
