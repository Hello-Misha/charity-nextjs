exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 2025:
/***/ ((module) => {

// Exports
module.exports = {
	"DarkBlue": "ElementComponent_DarkBlue__nfwPf",
	"LightBlue": "ElementComponent_LightBlue__nfbLg",
	"Yellow": "ElementComponent_Yellow__9_0Hj",
	"White": "ElementComponent_White__SXlqn",
	"Title": "ElementComponent_Title___rhtu",
	"Text": "ElementComponent_Text__o5AHN",
	"Text-bold": "ElementComponent_Text-bold__y7l8W",
	"Button-blue": "ElementComponent_Button-blue__GkpfA",
	"Button-white": "ElementComponent_Button-white__mZ0Ri",
	"element": "ElementComponent_element__WN12j",
	"element__text": "ElementComponent_element__text__7aX7a"
};


/***/ }),

/***/ 8294:
/***/ ((module) => {

// Exports
module.exports = {
	"DarkBlue": "ExpandedPageComponent_DarkBlue__mxgZs",
	"LightBlue": "ExpandedPageComponent_LightBlue__c_Rls",
	"Yellow": "ExpandedPageComponent_Yellow__mVmGp",
	"White": "ExpandedPageComponent_White__09dUt",
	"Title": "ExpandedPageComponent_Title__Br9XU",
	"Text": "ExpandedPageComponent_Text__MwncD",
	"Text-bold": "ExpandedPageComponent_Text-bold__tzQjp",
	"Button-blue": "ExpandedPageComponent_Button-blue__D1tCN",
	"Button-white": "ExpandedPageComponent_Button-white__b8DTF",
	"section": "ExpandedPageComponent_section__OvUtJ",
	"section__container": "ExpandedPageComponent_section__container__aFXe_",
	"section__container__element": "ExpandedPageComponent_section__container__element__zZfTy",
	"section__container__element__text": "ExpandedPageComponent_section__container__element__text__zp5lx"
};


/***/ }),

/***/ 8302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ExpandedPage_ExpandedPageComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/ExpandedPage/ExpandedPageComponent.module.scss
var ExpandedPageComponent_module = __webpack_require__(8294);
var ExpandedPageComponent_module_default = /*#__PURE__*/__webpack_require__.n(ExpandedPageComponent_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/ExpandedPage/Element/ElementComponent.module.scss
var ElementComponent_module = __webpack_require__(2025);
var ElementComponent_module_default = /*#__PURE__*/__webpack_require__.n(ElementComponent_module);
;// CONCATENATED MODULE: ./components/ExpandedPage/Element/ElementComponent.js



function ElementComponent(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ElementComponent_module_default()).element,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: props.img,
                alt: "testImg",
                width: 700,
                height: 700,
                placeholder: "blur"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ElementComponent_module_default()).element__text,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: `Title DarkBlue`,
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: props.href,
                        className: `Text-bold DarkBlue`,
                        children: props.linkText
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Element_ElementComponent = (ElementComponent);

;// CONCATENATED MODULE: ./components/ExpandedPage/ExpandedPageComponent.js



function ExpandedPageComponent(props) {
    const { t  } = props.page;
    const aboutArr = t(`about`, {
        returnObjects: true
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (ExpandedPageComponent_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `Title DarkBlue`,
                children: t(`aboutTitle`)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ExpandedPageComponent_module_default()).section__container,
                children: aboutArr.map((elem, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Element_ElementComponent, {
                        img: props.img[index],
                        title: elem.title,
                        href: `#`,
                        linkText: elem.linkText
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const ExpandedPage_ExpandedPageComponent = (ExpandedPageComponent);


/***/ })

};
;