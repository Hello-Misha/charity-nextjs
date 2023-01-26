(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 8926:
/***/ ((module) => {

// Exports
module.exports = {
	"DarkBlue": "Footer_DarkBlue__JpYAg",
	"LightBlue": "Footer_LightBlue__o0R_p",
	"Yellow": "Footer_Yellow__mLXsC",
	"White": "Footer_White__2YMlX",
	"Title": "Footer_Title__0buv8",
	"Text": "Footer_Text__nXo38",
	"Text-bold": "Footer_Text-bold__y0Pva",
	"Button-blue": "Footer_Button-blue__AvUgq",
	"Button-white": "Footer_Button-white__rQhjE",
	"footer": "Footer_footer__5UEAH",
	"footer__content": "Footer_footer__content__whiwc",
	"footer__content__description": "Footer_footer__content__description__vzGHs",
	"footer__content__description__support": "Footer_footer__content__description__support__3rvin",
	"footer__content__nav": "Footer_footer__content__nav__XBWM4"
};


/***/ }),

/***/ 5220:
/***/ ((module) => {

// Exports
module.exports = {
	"DarkBlue": "Header_DarkBlue__LOr63",
	"LightBlue": "Header_LightBlue__UsiL_",
	"Yellow": "Header_Yellow__076pT",
	"White": "Header_White__laBHe",
	"Title": "Header_Title__GN42G",
	"Text": "Header_Text__tCKGC",
	"Text-bold": "Header_Text-bold__Td5t8",
	"Button-blue": "Header_Button-blue__HML5z",
	"Button-white": "Header_Button-white__Rs6UL",
	"header": "Header_header__J8Qn_",
	"header__content": "Header_header__content__sWfSl",
	"header__content__title": "Header_header__content__title__GJAjR",
	"header__content__nav": "Header_header__content__nav__EB1Kc",
	"isMenu": "Header_isMenu__LXbSK",
	"header__content__menuControls": "Header_header__content__menuControls__p38aD",
	"toogler": "Header_toogler__PIEot"
};


/***/ }),

/***/ 3474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./components/Global/Header/Header.module.scss
var Header_module = __webpack_require__(5220);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Global/Header/Nav/LanguageToogler.js





function LanguageToogler() {
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const router = (0,router_.useRouter)();
    const { pathname , asPath , query  } = router;
    const changeLanguage = ()=>{
        if (router.locale === "ua") {
            return "en";
        } else {
            return "ua";
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
            className: `Text White ${(Header_module_default()).toogler}`,
            onClick: ()=>{
                router.push({
                    pathname,
                    query
                }, asPath, {
                    locale: changeLanguage()
                });
            },
            children: t("header.LanguageToogler")
        })
    });
}
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await serverSideTranslations(locale, [
                "common"
            ])
        }
    };
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Global/Header/Header.js







const Header = ()=>{
    const [menuOpen, setMenuOpen] = (0,external_react_.useState)(false);
    const [size, setSize] = (0,external_react_.useState)({
        width: undefined,
        height: undefined
    });
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [
        size.width,
        menuOpen
    ]);
    const menuToggleHandler = ()=>{
        setMenuOpen((p)=>!p);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Header_module_default()).header__content}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(Header_module_default()).header__content__title} ${menuOpen && size.width < 768 ? (Header_module_default()).isMenu : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "White Text-bold",
                            children: "ФОНД"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: `${(Header_module_default()).header__content__nav} ${menuOpen ? (Header_module_default()).isMenu : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Header_module_default()).header__content__nav__LangSwitcher,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LanguageToogler, {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_module_default()).header__content__menuControls,
                    children: menuOpen ? /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {
                        onClick: menuToggleHandler
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiMenu, {
                        onClick: menuToggleHandler
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./components/Global/Footer/Footer.module.scss
var Footer_module = __webpack_require__(8926);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Global/Footer/Footer.js




function Footer(props) {
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).footer__content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).footer__content__description,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).footer__content__description__support,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `Text White`,
                                    children: t("footer.support.title")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `Text White`,
                                    children: t("footer.support.iban")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `Text White`,
                                    children: t("footer.support.bank")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `Text White`,
                                    children: t("footer.address.street")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `Text White`,
                                    children: t("footer.address.city and zip")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `Text White`,
                                    children: t("footer.address.county")
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).footer__content__nav,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/legal",
                            className: `Text White`,
                            children: t("footer.nav.Legal")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            className: `Text White`,
                            children: t("footer.nav.About")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/privacy",
                            className: `Text White`,
                            children: t("footer.nav.Privacy")
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Global/Layout.js



const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
/* harmony default export */ const Global_Layout = (Layout);

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(1663);
;// CONCATENATED MODULE: ./pages/_app.js




const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Global_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(App));


/***/ }),

/***/ 1663:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(3474)));
module.exports = __webpack_exports__;

})();