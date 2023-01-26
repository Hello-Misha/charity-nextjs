"use strict";
(() => {
var exports = {};
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 4253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ medicine),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/ExpandedPage/ExpandedPageComponent.js + 1 modules
var ExpandedPageComponent = __webpack_require__(8302);
;// CONCATENATED MODULE: ./public/img/TestMedecine.png
/* harmony default export */ const TestMedecine = ({"src":"/_next/static/media/TestMedecine.115484b3.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AHqUpcXIyePh3b2+voFubEo0MDhAS1hhZwB/goiXm5yosLKjqathQjoqAAA4FAJfZ3EAlJiinJybf3p2a3yMb19gg3dyZVdWd3d7AJugqqWpr7GztJSdqI2bpa62uY2SmI6UmgCgq7exsre0t7uOlaGKl6WrsrafpqyWnqQAg5Ohw8nOqa2zXnCEeoman6euqrK4nKOoAD5bcbu9wbu4ucK8u6Wmq4KOm5ulrJyfowAoSmKXmJ3w6+bz7ei+ubfHyMinm5dvcHfNEG8M4oidFQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/ExpandedPage/MedicineAboutIMGs.js

const MedicineAboutIMGs = [
    TestMedecine,
    TestMedecine,
    TestMedecine,
    TestMedecine
];
/* harmony default export */ const ExpandedPage_MedicineAboutIMGs = (MedicineAboutIMGs);

;// CONCATENATED MODULE: ./pages/medicine.js






function Home() {
    const { t  } = (0,external_next_i18next_.useTranslation)("meta");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: t("medicine.title")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: t("medicine.description")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ExpandedPageComponent/* default */.Z, {
                    page: (0,external_next_i18next_.useTranslation)("medicine"),
                    img: ExpandedPage_MedicineAboutIMGs
                })
            })
        ]
    });
}
/* harmony default export */ const medicine = (Home);
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "medicine",
                "common",
                "meta"
            ])
        }
    };
}


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,302], () => (__webpack_exec__(4253)));
module.exports = __webpack_exports__;

})();