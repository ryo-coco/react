/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/pairing/route";
exports.ids = ["app/api/pairing/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("pg");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpairing%2Froute&page=%2Fapi%2Fpairing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpairing%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpairing%2Froute&page=%2Fapi%2Fpairing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpairing%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspace_src_app_api_pairing_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/pairing/route.ts */ \"(rsc)/./src/app/api/pairing/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/pairing/route\",\n        pathname: \"/api/pairing\",\n        filename: \"route\",\n        bundlePath: \"app/api/pairing/route\"\n    },\n    resolvedPagePath: \"/workspace/src/app/api/pairing/route.ts\",\n    nextConfigOutput,\n    userland: _workspace_src_app_api_pairing_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwYWlyaW5nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwYWlyaW5nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcGFpcmluZyUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVDtBQUNwRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZS9zcmMvYXBwL2FwaS9wYWlyaW5nL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wYWlyaW5nL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGFpcmluZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcGFpcmluZy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi93b3Jrc3BhY2Uvc3JjL2FwcC9hcGkvcGFpcmluZy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpairing%2Froute&page=%2Fapi%2Fpairing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpairing%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/pairing/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/pairing/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function GET(request) {\n    const searchParams = request.nextUrl.searchParams;\n    const group = searchParams.get(\"group\");\n    const stage = searchParams.get(\"stage\");\n    const pool = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n        user: process.env.DB_USER,\n        host: process.env.DB_HOST,\n        database: process.env.DB_NAME,\n        password: process.env.DB_PASSWORD,\n        port: parseInt(process.env.DB_PORT || \"5432\")\n    });\n    try {\n        const client = await pool.connect();\n        const getWhereClause = (stage, group)=>{\n            if (stage == \"1\") {\n                if (group) {\n                    return \"AND c1.group_name = $1 AND pg2.match_type_id = 1\";\n                }\n                return \"\";\n            }\n            return \"AND pg2.match_type_id != 1\";\n        };\n        const whereClause = getWhereClause(stage, group);\n        const queryText = `\n\t\tWITH PAIRINGS_AND_GOALS AS ( \n\t\tselect \n\t\t  p1.* \n\t\t  , count(g1.pairing_id) as goals \n\t\tfrom \n\t\t    pairings p1  \n\t\t  Left outer join goals g1  \n\t\t        on p1.id = g1.pairing_id \n\t\tgroup by \n\t\t  p1.id \n\t\t  , p1.kickoff \n\t\t  , p1.my_country_id \n\t\t  , p1.enemy_country_id \n\t\t  , p1.match_type_id \n\t\torder by p1.id \n\t\t) SELECT \n\t\t    pg1.id as pg1_id  \n\t\t    , to_char(pg1.kickoff, 'YYYY/MM/DD HH24:MI') as kick_off \n\t\t    , c1.id as home_country_id\n        , c1.name as home_team\n\t\t    , pg1.goals as home_goals \n\t\t    ,pg2.id  as pg2_id  \n\t\t    , c2.id as away_country_id\n\t\t    , c2.name as away_team\n\t\t    , pg2.goals as away_goals \n\t\t    , m1.name as category \n\t\t \n\t\tFROM \n\t\t    PAIRINGS_AND_GOALS as pg1 \n\t\t        inner join PAIRINGS_AND_GOALS as pg2  \n\t\t        on pg1.kickoff = pg2.kickoff  \n\t\t        and pg1.my_country_id = pg2.enemy_country_id  \n\t\t        and pg1.enemy_country_id = pg2.my_country_id  \n\t\t        inner join countries as c1 \n\t\t        on pg1.my_country_id = c1.id \n\t\t        inner join countries as c2 \n\t\t        on pg2.my_country_id = c2.id \n\t\t        inner join match_type m1 \n\t\t\t\t\ton pg2.match_type_id = m1.id \n\t\twhere \n\t\t    pg1.id <= 64\n\t\t\t${whereClause}\n\t\torder by \n\t\t    pg1.id \n\t  `;\n        const getWhereParams = (stage, group)=>{\n            if (stage === \"1\") {\n                if (group) {\n                    return [\n                        group\n                    ];\n                }\n                return [];\n            }\n            return [];\n        };\n        const queryParams = getWhereParams(stage, group);\n        const result = await client.query(queryText, queryParams);\n        client.release();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"success\",\n            data: result.rows\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"error\",\n            message: error instanceof Error ? error.message : \"不明なエラー\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wYWlyaW5nL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDOUI7QUFFbkIsZUFBZUUsSUFBSUMsT0FBb0I7SUFDNUMsTUFBTUMsZUFBZUQsUUFBUUUsT0FBTyxDQUFDRCxZQUFZO0lBQ2pELE1BQU1FLFFBQVFGLGFBQWFHLEdBQUcsQ0FBQztJQUMvQixNQUFNQyxRQUFRSixhQUFhRyxHQUFHLENBQUM7SUFFL0IsTUFBTUUsT0FBTyxJQUFJUixvQ0FBSUEsQ0FBQztRQUNwQlMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1FBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87UUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztRQUM3QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO1FBQ2pDQyxNQUFNQyxTQUFTVixRQUFRQyxHQUFHLENBQUNVLE9BQU8sSUFBSTtJQUN4QztJQUVBLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1kLEtBQUtlLE9BQU87UUFDakMsTUFBTUMsaUJBQWlCLENBQ3JCakIsT0FDQUY7WUFFQSxJQUFJRSxTQUFTLEtBQUs7Z0JBQ2hCLElBQUlGLE9BQU87b0JBQ1QsT0FBTztnQkFDVDtnQkFDQSxPQUFPO1lBQ1Q7WUFDQSxPQUFPO1FBQ1Q7UUFFQSxNQUFNb0IsY0FBY0QsZUFBZWpCLE9BQU9GO1FBRTFDLE1BQU1xQixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDcEIsRUFBRUQsWUFBWTs7O0dBR2QsQ0FBQztRQUVBLE1BQU1FLGlCQUFpQixDQUNyQnBCLE9BQ0FGO1lBRUEsSUFBSUUsVUFBVSxLQUFLO2dCQUNqQixJQUFJRixPQUFPO29CQUNULE9BQU87d0JBQUNBO3FCQUFNO2dCQUNoQjtnQkFDQSxPQUFPLEVBQUU7WUFDWDtZQUNBLE9BQU8sRUFBRTtRQUNYO1FBRUEsTUFBTXVCLGNBQWNELGVBQWVwQixPQUFPRjtRQUMxQyxNQUFNd0IsU0FBUyxNQUFNUCxPQUFPUSxLQUFLLENBQUNKLFdBQVdFO1FBRTdDTixPQUFPUyxPQUFPO1FBRWQsT0FBT2hDLHFEQUFZQSxDQUFDaUMsSUFBSSxDQUFDO1lBQ3ZCQyxRQUFRO1lBQ1JDLE1BQU1MLE9BQU9NLElBQUk7UUFDbkI7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPckMscURBQVlBLENBQUNpQyxJQUFJLENBQ3RCO1lBQ0VDLFFBQVE7WUFDUkksU0FBU0QsaUJBQWlCRSxRQUFRRixNQUFNQyxPQUFPLEdBQUc7UUFDcEQsR0FDQTtZQUFFSixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZS9zcmMvYXBwL2FwaS9wYWlyaW5nL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXM7XHJcbiAgY29uc3QgZ3JvdXAgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZ3JvdXBcIik7XHJcbiAgY29uc3Qgc3RhZ2UgPSBzZWFyY2hQYXJhbXMuZ2V0KFwic3RhZ2VcIik7XHJcblxyXG4gIGNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxyXG4gICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuREJfUE9SVCB8fCBcIjU0MzJcIiksXHJcbiAgfSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBwb29sLmNvbm5lY3QoKTtcclxuICAgIGNvbnN0IGdldFdoZXJlQ2xhdXNlID0gKFxyXG4gICAgICBzdGFnZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgZ3JvdXA6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHN0cmluZyA9PiB7XHJcbiAgICAgIGlmIChzdGFnZSA9PSBcIjFcIikge1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiQU5EIGMxLmdyb3VwX25hbWUgPSAkMSBBTkQgcGcyLm1hdGNoX3R5cGVfaWQgPSAxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIkFORCBwZzIubWF0Y2hfdHlwZV9pZCAhPSAxXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHdoZXJlQ2xhdXNlID0gZ2V0V2hlcmVDbGF1c2Uoc3RhZ2UsIGdyb3VwKTtcclxuXHJcbiAgICBjb25zdCBxdWVyeVRleHQgPSBgXHJcblx0XHRXSVRIIFBBSVJJTkdTX0FORF9HT0FMUyBBUyAoIFxyXG5cdFx0c2VsZWN0IFxyXG5cdFx0ICBwMS4qIFxyXG5cdFx0ICAsIGNvdW50KGcxLnBhaXJpbmdfaWQpIGFzIGdvYWxzIFxyXG5cdFx0ZnJvbSBcclxuXHRcdCAgICBwYWlyaW5ncyBwMSAgXHJcblx0XHQgIExlZnQgb3V0ZXIgam9pbiBnb2FscyBnMSAgXHJcblx0XHQgICAgICAgIG9uIHAxLmlkID0gZzEucGFpcmluZ19pZCBcclxuXHRcdGdyb3VwIGJ5IFxyXG5cdFx0ICBwMS5pZCBcclxuXHRcdCAgLCBwMS5raWNrb2ZmIFxyXG5cdFx0ICAsIHAxLm15X2NvdW50cnlfaWQgXHJcblx0XHQgICwgcDEuZW5lbXlfY291bnRyeV9pZCBcclxuXHRcdCAgLCBwMS5tYXRjaF90eXBlX2lkIFxyXG5cdFx0b3JkZXIgYnkgcDEuaWQgXHJcblx0XHQpIFNFTEVDVCBcclxuXHRcdCAgICBwZzEuaWQgYXMgcGcxX2lkICBcclxuXHRcdCAgICAsIHRvX2NoYXIocGcxLmtpY2tvZmYsICdZWVlZL01NL0REIEhIMjQ6TUknKSBhcyBraWNrX29mZiBcclxuXHRcdCAgICAsIGMxLmlkIGFzIGhvbWVfY291bnRyeV9pZFxyXG4gICAgICAgICwgYzEubmFtZSBhcyBob21lX3RlYW1cclxuXHRcdCAgICAsIHBnMS5nb2FscyBhcyBob21lX2dvYWxzIFxyXG5cdFx0ICAgICxwZzIuaWQgIGFzIHBnMl9pZCAgXHJcblx0XHQgICAgLCBjMi5pZCBhcyBhd2F5X2NvdW50cnlfaWRcclxuXHRcdCAgICAsIGMyLm5hbWUgYXMgYXdheV90ZWFtXHJcblx0XHQgICAgLCBwZzIuZ29hbHMgYXMgYXdheV9nb2FscyBcclxuXHRcdCAgICAsIG0xLm5hbWUgYXMgY2F0ZWdvcnkgXHJcblx0XHQgXHJcblx0XHRGUk9NIFxyXG5cdFx0ICAgIFBBSVJJTkdTX0FORF9HT0FMUyBhcyBwZzEgXHJcblx0XHQgICAgICAgIGlubmVyIGpvaW4gUEFJUklOR1NfQU5EX0dPQUxTIGFzIHBnMiAgXHJcblx0XHQgICAgICAgIG9uIHBnMS5raWNrb2ZmID0gcGcyLmtpY2tvZmYgIFxyXG5cdFx0ICAgICAgICBhbmQgcGcxLm15X2NvdW50cnlfaWQgPSBwZzIuZW5lbXlfY291bnRyeV9pZCAgXHJcblx0XHQgICAgICAgIGFuZCBwZzEuZW5lbXlfY291bnRyeV9pZCA9IHBnMi5teV9jb3VudHJ5X2lkICBcclxuXHRcdCAgICAgICAgaW5uZXIgam9pbiBjb3VudHJpZXMgYXMgYzEgXHJcblx0XHQgICAgICAgIG9uIHBnMS5teV9jb3VudHJ5X2lkID0gYzEuaWQgXHJcblx0XHQgICAgICAgIGlubmVyIGpvaW4gY291bnRyaWVzIGFzIGMyIFxyXG5cdFx0ICAgICAgICBvbiBwZzIubXlfY291bnRyeV9pZCA9IGMyLmlkIFxyXG5cdFx0ICAgICAgICBpbm5lciBqb2luIG1hdGNoX3R5cGUgbTEgXHJcblx0XHRcdFx0XHRvbiBwZzIubWF0Y2hfdHlwZV9pZCA9IG0xLmlkIFxyXG5cdFx0d2hlcmUgXHJcblx0XHQgICAgcGcxLmlkIDw9IDY0XHJcblx0XHRcdCR7d2hlcmVDbGF1c2V9XHJcblx0XHRvcmRlciBieSBcclxuXHRcdCAgICBwZzEuaWQgXHJcblx0ICBgO1xyXG5cclxuICAgIGNvbnN0IGdldFdoZXJlUGFyYW1zID0gKFxyXG4gICAgICBzdGFnZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgZ3JvdXA6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHN0cmluZ1tdID0+IHtcclxuICAgICAgaWYgKHN0YWdlID09PSBcIjFcIikge1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgcmV0dXJuIFtncm91cF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gZ2V0V2hlcmVQYXJhbXMoc3RhZ2UsIGdyb3VwKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeVRleHQsIHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICBjbGllbnQucmVsZWFzZSgpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5yb3dzLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCLkuI3mmI7jgarjgqjjg6njg7xcIixcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUG9vbCIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJuZXh0VXJsIiwiZ3JvdXAiLCJnZXQiLCJzdGFnZSIsInBvb2wiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJob3N0IiwiREJfSE9TVCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwicGFyc2VJbnQiLCJEQl9QT1JUIiwiY2xpZW50IiwiY29ubmVjdCIsImdldFdoZXJlQ2xhdXNlIiwid2hlcmVDbGF1c2UiLCJxdWVyeVRleHQiLCJnZXRXaGVyZVBhcmFtcyIsInF1ZXJ5UGFyYW1zIiwicmVzdWx0IiwicXVlcnkiLCJyZWxlYXNlIiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJyb3dzIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/pairing/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpairing%2Froute&page=%2Fapi%2Fpairing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpairing%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();