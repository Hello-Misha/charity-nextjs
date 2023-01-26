"use strict";
(() => {
var exports = {};
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 9949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ education),
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
;// CONCATENATED MODULE: ./public/img/TestEducation.png
/* harmony default export */ const TestEducation = ({"src":"/_next/static/media/TestEducation.8a648124.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AMi8tHBXP4NLN7VYNZl3Q8Cqf7ieeZp1VQCoST1uGQCtfmjgXlKoSRWzcD3Lp3/PupkAUQAAe1FBr4x4kTYzphIjmy4npioSvHFLAF0ABk5LQbuMgXlcTHgAAHEAAIcAIMVmPACPDhs5ODOrhH5nQT1LP0SYRTq5DgDQfkEAsCMrPgAKWz4siouZm6iymo2RtpeWx5hvAKkbJXgCE2IYAKubnKK4zDhljoOasrShhwCGBQ5/Cw1uAABTExWDf5ObKz15ZXirf1iU4kwqCDBWEAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/ExpandedPage/EducationAboutIMGs.js

const EducationAboutIMGs = [
    TestEducation,
    TestEducation,
    TestEducation,
    TestEducation
];
/* harmony default export */ const ExpandedPage_EducationAboutIMGs = (EducationAboutIMGs);

;// CONCATENATED MODULE: ./pages/education.js






function Home() {
    const { t  } = (0,external_next_i18next_.useTranslation)("meta");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: t("education.title")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: t("education.description")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ExpandedPageComponent/* default */.Z, {
                    page: (0,external_next_i18next_.useTranslation)("education"),
                    img: ExpandedPage_EducationAboutIMGs
                })
            })
        ]
    });
}
/* harmony default export */ const education = (Home);
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "education",
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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,302], () => (__webpack_exec__(9949)));
module.exports = __webpack_exports__;

})();