(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js
  var require_slugify = __commonJS({
    "node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js"(exports, module) {
      (function(name, root, factory) {
        if (typeof exports === "object") {
          module.exports = factory();
          module.exports["default"] = factory();
        } else if (typeof define === "function" && define.amd) {
          define(factory);
        } else {
          root[name] = factory();
        }
      })("slugify", exports, function() {
        var charMap = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`);
        var locales = JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');
        function replace(string, options) {
          if (typeof string !== "string") {
            throw new Error("slugify: string argument expected");
          }
          options = typeof options === "string" ? { replacement: options } : options || {};
          var locale = locales[options.locale] || {};
          var replacement = options.replacement === void 0 ? "-" : options.replacement;
          var trim = options.trim === void 0 ? true : options.trim;
          var slug = string.normalize().split("").reduce(function(result, ch) {
            var appendChar = locale[ch];
            if (appendChar === void 0)
              appendChar = charMap[ch];
            if (appendChar === void 0)
              appendChar = ch;
            if (appendChar === replacement)
              appendChar = " ";
            return result + appendChar.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          if (options.strict) {
            slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
          }
          if (trim) {
            slug = slug.trim();
          }
          slug = slug.replace(/\s+/g, replacement);
          if (options.lower) {
            slug = slug.toLowerCase();
          }
          return slug;
        }
        replace.extend = function(customMap) {
          Object.assign(charMap, customMap);
        };
        return replace;
      });
    }
  });

  // node_modules/.pnpm/escaper@2.5.3/node_modules/escaper/dist/escaper.js
  var require_escaper = __commonJS({
    "node_modules/.pnpm/escaper@2.5.3/node_modules/escaper/dist/escaper.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define("Escaper", ["exports"], factory) : factory(global.Escaper = {});
      })(exports, function(exports2) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var Escaper = void 0;
        var escaper = Escaper = {
          VERSION: [2, 5, 3],
          content: [],
          cache: {},
          snakeskinRgxp: null,
          symbols: null,
          replace,
          paste
        };
        var stringLiterals = {
          '"': true,
          "'": true,
          "`": true
        };
        var literals = {
          "/": true
        };
        for (var key in stringLiterals) {
          if (!stringLiterals.hasOwnProperty(key)) {
            break;
          }
          literals[key] = true;
        }
        var singleComments = {
          "//": true,
          "//*": true,
          "//!": true,
          "//#": true,
          "//@": true,
          "//$": true
        };
        var multComments = {
          "/*": true,
          "/**": true,
          "/*!": true,
          "/*#": true,
          "/*@": true,
          "/*$": true
        };
        var keyArr = [];
        var finalMap = {};
        for (var _key in literals) {
          if (!literals.hasOwnProperty(_key)) {
            break;
          }
          keyArr.push(_key);
          finalMap[_key] = true;
        }
        for (var _key2 in singleComments) {
          if (!singleComments.hasOwnProperty(_key2)) {
            break;
          }
          keyArr.push(_key2);
          finalMap[_key2] = true;
        }
        for (var _key3 in multComments) {
          if (!multComments.hasOwnProperty(_key3)) {
            break;
          }
          keyArr.push(_key3);
          finalMap[_key3] = true;
        }
        var rgxpFlags = [];
        var rgxpFlagsMap = {
          "g": true,
          "m": true,
          "i": true,
          "y": true,
          "u": true
        };
        for (var _key4 in rgxpFlagsMap) {
          if (!rgxpFlagsMap.hasOwnProperty(_key4)) {
            break;
          }
          rgxpFlags.push(_key4);
        }
        var escapeEndMap = {
          "-": true,
          "+": true,
          "*": true,
          "%": true,
          "~": true,
          ">": true,
          "<": true,
          "^": true,
          ",": true,
          ";": true,
          "=": true,
          "|": true,
          "&": true,
          "!": true,
          "?": true,
          ":": true,
          "(": true,
          "{": true,
          "[": true
        };
        var escapeEndWordMap = {
          "return": true,
          "yield": true,
          "await": true,
          "typeof": true,
          "void": true,
          "instanceof": true,
          "delete": true,
          "in": true,
          "new": true,
          "of": true
        };
        function mix(obj, p, val) {
          for (var _key5 in obj) {
            if (!obj.hasOwnProperty(_key5)) {
              break;
            }
            if (_key5 in p === false) {
              p[_key5] = val;
            }
          }
        }
        var symbols = void 0;
        var snakeskinRgxp = void 0;
        var uSRgxp = /[^\s/]/;
        var wRgxp = /[a-z]/;
        var sRgxp = /\s/;
        var nRgxp = /[\r\n]/;
        var posRgxp = /\${pos}/g;
        var objMap = {
          "object": true,
          "function": true
        };
        function replace(str, opt_withCommentsOrParams, opt_content, opt_snakeskin) {
          symbols = symbols || Escaper.symbols || "a-z";
          snakeskinRgxp = snakeskinRgxp || Escaper.snakeskinRgxp || new RegExp("[!$" + symbols + "_]", "i");
          var _Escaper = Escaper, cache = _Escaper.cache, content = _Escaper.content;
          var isObj = Boolean(opt_withCommentsOrParams && objMap[typeof opt_withCommentsOrParams === "undefined" ? "undefined" : _typeof(opt_withCommentsOrParams)]);
          var p = isObj ? Object(opt_withCommentsOrParams) : {};
          function mark(pos) {
            if (p["@label"]) {
              return p["@label"].replace(posRgxp, pos);
            }
            return "__ESCAPER_QUOT__" + pos + "_";
          }
          var withComments = false;
          if (typeof opt_withCommentsOrParams === "boolean") {
            withComments = Boolean(opt_withCommentsOrParams);
          }
          if ("@comments" in p) {
            mix(multComments, p, p["@comments"]);
            mix(singleComments, p, p["@comments"]);
            delete p["@comments"];
          }
          if ("@strings" in p) {
            mix(stringLiterals, p, p["@strings"]);
            delete p["@strings"];
          }
          if ("@literals" in p) {
            mix(literals, p, p["@literals"]);
            delete p["@literals"];
          }
          if ("@all" in p) {
            mix(finalMap, p, p["@all"]);
            delete p["@all"];
          }
          var cacheKey = "";
          for (var i = -1; ++i < keyArr.length; ) {
            var el = keyArr[i];
            if (multComments[el] || singleComments[el]) {
              p[el] = withComments || p[el];
            } else {
              p[el] = p[el] || !isObj;
            }
            cacheKey += p[el] + ",";
          }
          var initStr = str, stack = opt_content || content;
          if (stack === content && cache[cacheKey] && cache[cacheKey][initStr]) {
            return cache[cacheKey][initStr];
          }
          var begin = false, end = true;
          var escape = false, comment = false;
          var selectionStart = 0, block = false;
          var templateVar = 0, filterStart = false;
          var cut = void 0, label = void 0;
          var part = "", rPart = "";
          for (var _i = -1; ++_i < str.length; ) {
            var _el = str.charAt(_i);
            var next = str.charAt(_i + 1), word = str.substr(_i, 2), extWord = str.substr(_i, 3);
            if (!comment) {
              if (!begin) {
                if (_el === "/") {
                  if (singleComments[word] || multComments[word]) {
                    if (singleComments[extWord] || multComments[extWord]) {
                      comment = extWord;
                    } else {
                      comment = word;
                    }
                  }
                  if (comment) {
                    selectionStart = _i;
                    continue;
                  }
                }
                if (escapeEndMap[_el] || escapeEndWordMap[rPart]) {
                  end = true;
                  rPart = "";
                } else if (uSRgxp.test(_el)) {
                  end = false;
                }
                if (wRgxp.test(_el)) {
                  part += _el;
                } else {
                  rPart = part;
                  part = "";
                }
                var skip = false;
                if (opt_snakeskin) {
                  if (_el === "|" && snakeskinRgxp.test(next)) {
                    filterStart = true;
                    end = false;
                    skip = true;
                  } else if (filterStart && sRgxp.test(_el)) {
                    filterStart = false;
                    end = true;
                    skip = true;
                  }
                }
                if (!skip) {
                  if (escapeEndMap[_el]) {
                    end = true;
                  } else if (uSRgxp.test(_el)) {
                    end = false;
                  }
                }
              }
              if (begin === "/" && !escape) {
                if (_el === "[") {
                  block = true;
                } else if (_el === "]") {
                  block = false;
                }
              }
              if (!begin && templateVar) {
                if (_el === "}") {
                  templateVar--;
                } else if (_el === "{") {
                  templateVar++;
                }
                if (!templateVar) {
                  _el = "`";
                }
              }
              if (begin === "`" && !escape && word === "${") {
                _el = "`";
                _i++;
                templateVar++;
              }
              if (finalMap[_el] && (_el !== "/" || end) && !begin) {
                begin = _el;
                selectionStart = _i;
              } else if (begin && (_el === "\\" || escape)) {
                escape = !escape;
              } else if (finalMap[_el] && begin === _el && !escape && (begin !== "/" || !block)) {
                if (_el === "/") {
                  for (var j = -1; ++j < rgxpFlags.length; ) {
                    if (rgxpFlagsMap[str.charAt(_i + 1)]) {
                      _i++;
                    }
                  }
                }
                begin = false;
                end = false;
                if (p[_el]) {
                  cut = str.substring(selectionStart, _i + 1);
                  if (p[_el] === -1) {
                    label = "";
                  } else {
                    label = mark(stack.length);
                    stack.push(cut);
                  }
                  str = str.substring(0, selectionStart) + label + str.substring(_i + 1);
                  _i += label.length - cut.length;
                }
              }
            } else if (nRgxp.test(next) && singleComments[comment] || multComments[_el + str.charAt(_i - 1)] && _i - selectionStart > 2 && multComments[comment]) {
              if (p[comment]) {
                cut = str.substring(selectionStart, _i + 1);
                if (p[comment] === -1) {
                  label = "";
                } else {
                  label = mark(stack.length);
                  stack.push(cut);
                }
                str = str.substring(0, selectionStart) + label + str.substring(_i + 1);
                _i += label.length - cut.length;
              }
              comment = false;
            }
          }
          if (stack === content) {
            cache[cacheKey] = cache[cacheKey] || {};
            cache[cacheKey][initStr] = str;
          }
          return str;
        }
        var pasteRgxp = /__ESCAPER_QUOT__(\d+)_/g;
        function paste(str, opt_content, opt_rgxp) {
          return str.replace(opt_rgxp || pasteRgxp, function(str2, pos) {
            return (opt_content || Escaper.content)[pos];
          });
        }
        exports2["default"] = escaper;
        exports2.replace = replace;
        exports2.paste = paste;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/.pnpm/is-regexp@1.0.0/node_modules/is-regexp/index.js
  var require_is_regexp = __commonJS({
    "node_modules/.pnpm/is-regexp@1.0.0/node_modules/is-regexp/index.js"(exports, module) {
      "use strict";
      module.exports = function(re) {
        return Object.prototype.toString.call(re) === "[object RegExp]";
      };
    }
  });

  // node_modules/.pnpm/strip-css-comments@3.0.0/node_modules/strip-css-comments/index.js
  var require_strip_css_comments = __commonJS({
    "node_modules/.pnpm/strip-css-comments@3.0.0/node_modules/strip-css-comments/index.js"(exports, module) {
      "use strict";
      var isRegExp = require_is_regexp();
      module.exports = function(str, opts) {
        str = str.toString();
        opts = opts || {};
        var preserveFilter;
        var comment = "";
        var currentChar = "";
        var insideString = false;
        var preserveImportant = !(opts.preserve === false || opts.all === true);
        var ret = "";
        if (typeof opts.preserve === "function") {
          preserveImportant = false;
          preserveFilter = opts.preserve;
        } else if (isRegExp(opts.preserve)) {
          preserveImportant = false;
          preserveFilter = function(comment2) {
            return opts.preserve.test(comment2);
          };
        }
        for (var i = 0; i < str.length; i++) {
          currentChar = str[i];
          if (str[i - 1] !== "\\") {
            if (currentChar === '"' || currentChar === "'") {
              if (insideString === currentChar) {
                insideString = false;
              } else if (!insideString) {
                insideString = currentChar;
              }
            }
          }
          if (!insideString && currentChar === "/" && str[i + 1] === "*") {
            if (!(preserveImportant && str[i + 2] === "!")) {
              var j = i + 2;
              for (; j < str.length; j++) {
                if (str[j] === "*" && str[j + 1] === "/") {
                  if (preserveFilter) {
                    ret = preserveFilter(comment) ? ret + ("/*" + comment + "*/") : ret;
                    comment = "";
                  }
                  break;
                }
                if (preserveFilter) {
                  comment += str[j];
                }
              }
              i = j + 1;
              continue;
            }
          }
          ret += currentChar;
        }
        return ret;
      };
    }
  });

  // index.js
  var require_scope_css = __commonJS({
    "index.js"(exports, module) {
      "use strict";
      var slugify = require_slugify();
      var escaper = require_escaper();
      var stripComments = require_strip_css_comments();
      module.exports = scope2;
      scope2.replace = replace;
      function scope2(css, parent, o) {
        if (!css)
          return css;
        if (!parent)
          return css;
        if (typeof o === "string")
          o = { keyframes: o };
        if (!o)
          o = { keyframes: false };
        css = replace(css, parent + " $1$2");
        var parentRe = parent.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        css = css.replace(new RegExp("(" + parentRe + ")\\s*\\1(?=[\\s\\r\\n,{])", "g"), "$1");
        css = css.replace(new RegExp("(" + parentRe + ")\\s*:host", "g"), "$1");
        css = css.replace(new RegExp("(" + parentRe + ")\\s*@", "g"), "@");
        css = css.replace(new RegExp("(" + parentRe + ")\\s*:root", "g"), ":root");
        var animations = [], animationNameRe = /@keyframes\s+([a-zA-Z0-9_-]+)\s*{/g, match;
        while ((match = animationNameRe.exec(css)) !== null) {
          if (animations.indexOf(match[1]) < 0)
            animations.push(match[1]);
        }
        var slug = slugify(parent);
        animations.forEach(function(name) {
          var newName = (o.keyframes === true ? slug + "-" : typeof o.keyframes === "string" ? o.keyframes : "") + name;
          css = css.replace(
            new RegExp("(@keyframes\\s+)" + name + "(\\s*{)", "g"),
            "$1" + newName + "$2"
          );
          css = css.replace(
            new RegExp("(animation(?:-name)?\\s*:[^;]*\\s*)" + name + "([\\s;}])", "g"),
            "$1" + newName + "$2"
          );
        });
        css = css.replace(new RegExp("(" + parentRe + " )(\\s*(?:to|from|[+-]?(?:(?:\\.\\d+)|(?:\\d+(?:\\.\\d*)?))%))(?=[\\s\\r\\n,{])", "g"), "$2");
        return css;
      }
      function replace(css, replacer) {
        var arr = [];
        css = stripComments(css);
        css = escaper.replace(css, true, arr);
        css = css.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g, replacer);
        css = escaper.paste(css, arr);
        return css;
      }
    }
  });

  // demo/script.js
  var scope = require_scope_css();
  window.scope = scope;
  document.querySelector("#convert").addEventListener("click", () => {
    let input = document.querySelector("#input").value;
    let scopeSelector = document.querySelector("#scopeSelector").value;
    let output = scope(input, scopeSelector);
    console.log(output);
    document.querySelector("#output").value = output;
  });
})();
/*! Bundled license information:

escaper/dist/escaper.js:
  (*!
   * Escaper v2.5.3
   * https://github.com/kobezzza/Escaper
   *
   * Released under the MIT license
   * https://github.com/kobezzza/Escaper/blob/master/LICENSE
   *
   * Date: Tue, 23 Jan 2018 15:58:45 GMT
   *)
*/
