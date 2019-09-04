webpackHotUpdate("pages/index",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/HeroIndex.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroIndex.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var canvas;
var c;
var numStars = 1024;
var radius = '100';
var focalLength;
var centerX, centerY;
var stars = [];
var star;
var i;
var animate = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hero-index',
  mounted: function mounted() {
    if (true) {
      canvas = document.getElementById('space');
      c = canvas.getContext('2d');
      focalLength = canvas.width * 2;

      window.requestAnimFrame = function () {
        return window.requestAnimationFrame;
      }();

      this.initializeStars();
      this.executeFrame();
    }
  },
  methods: {
    executeFrame: function executeFrame() {
      if (animate) {
        window.requestAnimFrame(this.executeFrame);
      }

      this.moveStars();
      this.drawStars();
    },
    initializeStars: function initializeStars() {
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      stars = [];

      for (i = 0; i < numStars; i++) {
        star = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          o: '0.' + Math.floor(Math.random() * 99) + 1
        };
        stars.push(star);
      }
    },
    moveStars: function moveStars() {
      for (i = 0; i < numStars; i++) {
        star = stars[i];
        star.z--;

        if (star.z <= 0) {
          star.z = canvas.width;
        }
      }
    },
    drawStars: function drawStars() {
      var pixelX, pixelY, pixelRadius; // Resize to the screen

      if (canvas.width !== window.innerWidth || canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.initializeStars();
      }

      c.fillStyle = 'rgba(0,0,0,1)'; // rgba(0,10,20,1)

      c.fillRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = 'rgba(209, 255, 255, ' + radius + ')';

      for (i = 0; i < numStars; i++) {
        star = stars[i];
        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = focalLength / star.z;
        c.beginPath();
        c.arc(pixelX, pixelY, pixelRadius / 2, 0, 2 * Math.PI);
        c.fillStyle = 'rgba(209, 255, 255, ' + star.o + ')';
        c.fill();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/extract-css-chunks-webpack-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./components/HeroIndex.vue?vue&type=style&index=0&id=0304ee2d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-css-chunks-webpack-plugin/dist/loader.js??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroIndex.vue?vue&type=style&index=0&id=0304ee2d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(true) {
      // 1567581461875
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"reloadAll":true,"hot":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

})