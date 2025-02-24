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
exports.id = "app/api/groupLeague/route";
exports.ids = ["app/api/groupLeague/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgroupLeague%2Froute&page=%2Fapi%2FgroupLeague%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgroupLeague%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgroupLeague%2Froute&page=%2Fapi%2FgroupLeague%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgroupLeague%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspace_src_app_api_groupLeague_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/groupLeague/route.ts */ \"(rsc)/./src/app/api/groupLeague/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/groupLeague/route\",\n        pathname: \"/api/groupLeague\",\n        filename: \"route\",\n        bundlePath: \"app/api/groupLeague/route\"\n    },\n    resolvedPagePath: \"/workspace/src/app/api/groupLeague/route.ts\",\n    nextConfigOutput,\n    userland: _workspace_src_app_api_groupLeague_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZncm91cExlYWd1ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ3JvdXBMZWFndWUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZncm91cExlYWd1ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDTDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZS9zcmMvYXBwL2FwaS9ncm91cExlYWd1ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ3JvdXBMZWFndWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ncm91cExlYWd1ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ3JvdXBMZWFndWUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlL3NyYy9hcHAvYXBpL2dyb3VwTGVhZ3VlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgroupLeague%2Froute&page=%2Fapi%2FgroupLeague%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgroupLeague%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/groupLeague/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/groupLeague/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function GET(request) {\n    const searchParams = request.nextUrl.searchParams;\n    const group = searchParams.get(\"group\");\n    const pool = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n        user: process.env.DB_USER,\n        host: process.env.DB_HOST,\n        database: process.env.DB_NAME,\n        password: process.env.DB_PASSWORD,\n        port: parseInt(process.env.DB_PORT || \"5432\")\n    });\n    try {\n        const client = await pool.connect();\n        // WHERE句を別々に構築\n        const whereClause = `pg2.match_type_id = 1\n \t\t ${group ? `AND c1.group_name = $1` : \"\"}`;\n        const queryText = `\n\tWITH PAIRINGS_AND_GOALS AS (\n\t  select\n\t\tp1.*,\n\t\tcount(g1.pairing_id) as goals\n\t  from\n\t\tpairings p1\n\t\tLeft outer join goals g1 on p1.id = g1.pairing_id\n\t  group by\n\t\tp1.id,\n\t\tp1.kickoff,\n\t\tp1.my_country_id,\n\t\tp1.enemy_country_id,\n\t\tp1.match_type_id\n\t  order by p1.id\n\t)\n\tSELECT\n\t  c1.id,\n\t  c1.name as countryname,\n\t  c1.group_name as groupname,\n\t  sum(case when (pg1.goals - pg2.goals) > 0 then 1 else 0 end) * 3 + sum(case when (pg1.goals - pg2.goals) = 0 then 1 else 0 end) as winpoints,\n\t  count(c1.name) as games,\n\t  sum(case when (pg1.goals - pg2.goals) > 0 then 1 else 0 end) as wins,\n\t  sum(case when (pg1.goals - pg2.goals) = 0 then 1 else 0 end) as draws,\n\t  sum(case when (pg1.goals - pg2.goals) < 0 then 1 else 0 end) as losses,\n\t  sum(pg1.goals) as goals,\n\t  sum(pg2.goals) as goalsagainst,\n\t  sum(pg1.goals - pg2.goals)::smallint as goalsdiff\n\tFROM\n\t  PAIRINGS_AND_GOALS as pg1\n\t  inner join PAIRINGS_AND_GOALS pg2 on pg1.kickoff = pg2.kickoff and pg1.my_country_id = pg2.enemy_country_id and pg1.enemy_country_id = pg2.my_country_id\n\t  inner join countries c1 on pg1.my_country_id = c1.id\n\t  inner join countries c2 on pg2.my_country_id = c2.id\n\t  inner join match_type m1 on pg2.match_type_id = m1.id\n\tWHERE ${whereClause}\n\tGROUP BY c1.id, c1.name, c1.group_name\n\tORDER BY c1.group_name, winPoints DESC, goalsDiff DESC\n  `;\n        const queryParams = group ? [\n            group\n        ] : [];\n        const result = await client.query(queryText, queryParams);\n        client.release();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"success\",\n            data: result.rows\n        });\n    } catch (error) {\n        console.error(\"SQL Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"error\",\n            message: error instanceof Error ? error.message : \"不明なエラー\",\n            details: error instanceof Error ? error.stack : undefined\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ncm91cExlYWd1ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQzlCO0FBRW5CLGVBQWVFLElBQUlDLE9BQW9CO0lBQzVDLE1BQU1DLGVBQWVELFFBQVFFLE9BQU8sQ0FBQ0QsWUFBWTtJQUNqRCxNQUFNRSxRQUFRRixhQUFhRyxHQUFHLENBQUM7SUFFL0IsTUFBTUMsT0FBTyxJQUFJUCxvQ0FBSUEsQ0FBQztRQUNwQlEsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1FBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87UUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztRQUM3QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO1FBQ2pDQyxNQUFNQyxTQUFTVixRQUFRQyxHQUFHLENBQUNVLE9BQU8sSUFBSTtJQUN4QztJQUVBLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1kLEtBQUtlLE9BQU87UUFDakMsZUFBZTtRQUNmLE1BQU1DLGNBQWMsQ0FBQztJQUNyQixFQUFFbEIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsSUFBSTtRQUV6QyxNQUFNbUIsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0NoQixFQUFFRCxZQUFZOzs7RUFHbkIsQ0FBQztRQUVDLE1BQU1FLGNBQWNwQixRQUFRO1lBQUNBO1NBQU0sR0FBRyxFQUFFO1FBQ3hDLE1BQU1xQixTQUFTLE1BQU1MLE9BQU9NLEtBQUssQ0FBQ0gsV0FBV0M7UUFDN0NKLE9BQU9PLE9BQU87UUFFZCxPQUFPN0IscURBQVlBLENBQUM4QixJQUFJLENBQUM7WUFDdkJDLFFBQVE7WUFDUkMsTUFBTUwsT0FBT00sSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsY0FBY0E7UUFDNUIsT0FBT2xDLHFEQUFZQSxDQUFDOEIsSUFBSSxDQUN0QjtZQUNFQyxRQUFRO1lBQ1JLLFNBQVNGLGlCQUFpQkcsUUFBUUgsTUFBTUUsT0FBTyxHQUFHO1lBQ2xERSxTQUFTSixpQkFBaUJHLFFBQVFILE1BQU1LLEtBQUssR0FBR0M7UUFDbEQsR0FDQTtZQUFFVCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZS9zcmMvYXBwL2FwaS9ncm91cExlYWd1ZS9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zO1xyXG4gIGNvbnN0IGdyb3VwID0gc2VhcmNoUGFyYW1zLmdldChcImdyb3VwXCIpO1xyXG5cclxuICBjb25zdCBwb29sID0gbmV3IFBvb2woe1xyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgIHBvcnQ6IHBhcnNlSW50KHByb2Nlc3MuZW52LkRCX1BPUlQgfHwgXCI1NDMyXCIpLFxyXG4gIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgcG9vbC5jb25uZWN0KCk7XHJcbiAgICAvLyBXSEVSReWPpeOCkuWIpeOAheOBq+ani+eviVxyXG4gICAgY29uc3Qgd2hlcmVDbGF1c2UgPSBgcGcyLm1hdGNoX3R5cGVfaWQgPSAxXHJcbiBcdFx0ICR7Z3JvdXAgPyBgQU5EIGMxLmdyb3VwX25hbWUgPSAkMWAgOiBcIlwifWA7XHJcblxyXG4gICAgY29uc3QgcXVlcnlUZXh0ID0gYFxyXG5cdFdJVEggUEFJUklOR1NfQU5EX0dPQUxTIEFTIChcclxuXHQgIHNlbGVjdFxyXG5cdFx0cDEuKixcclxuXHRcdGNvdW50KGcxLnBhaXJpbmdfaWQpIGFzIGdvYWxzXHJcblx0ICBmcm9tXHJcblx0XHRwYWlyaW5ncyBwMVxyXG5cdFx0TGVmdCBvdXRlciBqb2luIGdvYWxzIGcxIG9uIHAxLmlkID0gZzEucGFpcmluZ19pZFxyXG5cdCAgZ3JvdXAgYnlcclxuXHRcdHAxLmlkLFxyXG5cdFx0cDEua2lja29mZixcclxuXHRcdHAxLm15X2NvdW50cnlfaWQsXHJcblx0XHRwMS5lbmVteV9jb3VudHJ5X2lkLFxyXG5cdFx0cDEubWF0Y2hfdHlwZV9pZFxyXG5cdCAgb3JkZXIgYnkgcDEuaWRcclxuXHQpXHJcblx0U0VMRUNUXHJcblx0ICBjMS5pZCxcclxuXHQgIGMxLm5hbWUgYXMgY291bnRyeW5hbWUsXHJcblx0ICBjMS5ncm91cF9uYW1lIGFzIGdyb3VwbmFtZSxcclxuXHQgIHN1bShjYXNlIHdoZW4gKHBnMS5nb2FscyAtIHBnMi5nb2FscykgPiAwIHRoZW4gMSBlbHNlIDAgZW5kKSAqIDMgKyBzdW0oY2FzZSB3aGVuIChwZzEuZ29hbHMgLSBwZzIuZ29hbHMpID0gMCB0aGVuIDEgZWxzZSAwIGVuZCkgYXMgd2lucG9pbnRzLFxyXG5cdCAgY291bnQoYzEubmFtZSkgYXMgZ2FtZXMsXHJcblx0ICBzdW0oY2FzZSB3aGVuIChwZzEuZ29hbHMgLSBwZzIuZ29hbHMpID4gMCB0aGVuIDEgZWxzZSAwIGVuZCkgYXMgd2lucyxcclxuXHQgIHN1bShjYXNlIHdoZW4gKHBnMS5nb2FscyAtIHBnMi5nb2FscykgPSAwIHRoZW4gMSBlbHNlIDAgZW5kKSBhcyBkcmF3cyxcclxuXHQgIHN1bShjYXNlIHdoZW4gKHBnMS5nb2FscyAtIHBnMi5nb2FscykgPCAwIHRoZW4gMSBlbHNlIDAgZW5kKSBhcyBsb3NzZXMsXHJcblx0ICBzdW0ocGcxLmdvYWxzKSBhcyBnb2FscyxcclxuXHQgIHN1bShwZzIuZ29hbHMpIGFzIGdvYWxzYWdhaW5zdCxcclxuXHQgIHN1bShwZzEuZ29hbHMgLSBwZzIuZ29hbHMpOjpzbWFsbGludCBhcyBnb2Fsc2RpZmZcclxuXHRGUk9NXHJcblx0ICBQQUlSSU5HU19BTkRfR09BTFMgYXMgcGcxXHJcblx0ICBpbm5lciBqb2luIFBBSVJJTkdTX0FORF9HT0FMUyBwZzIgb24gcGcxLmtpY2tvZmYgPSBwZzIua2lja29mZiBhbmQgcGcxLm15X2NvdW50cnlfaWQgPSBwZzIuZW5lbXlfY291bnRyeV9pZCBhbmQgcGcxLmVuZW15X2NvdW50cnlfaWQgPSBwZzIubXlfY291bnRyeV9pZFxyXG5cdCAgaW5uZXIgam9pbiBjb3VudHJpZXMgYzEgb24gcGcxLm15X2NvdW50cnlfaWQgPSBjMS5pZFxyXG5cdCAgaW5uZXIgam9pbiBjb3VudHJpZXMgYzIgb24gcGcyLm15X2NvdW50cnlfaWQgPSBjMi5pZFxyXG5cdCAgaW5uZXIgam9pbiBtYXRjaF90eXBlIG0xIG9uIHBnMi5tYXRjaF90eXBlX2lkID0gbTEuaWRcclxuXHRXSEVSRSAke3doZXJlQ2xhdXNlfVxyXG5cdEdST1VQIEJZIGMxLmlkLCBjMS5uYW1lLCBjMS5ncm91cF9uYW1lXHJcblx0T1JERVIgQlkgYzEuZ3JvdXBfbmFtZSwgd2luUG9pbnRzIERFU0MsIGdvYWxzRGlmZiBERVNDXHJcbiAgYDtcclxuXHJcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGdyb3VwID8gW2dyb3VwXSA6IFtdO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5VGV4dCwgcXVlcnlQYXJhbXMpO1xyXG4gICAgY2xpZW50LnJlbGVhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxyXG4gICAgICBkYXRhOiByZXN1bHQucm93cyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU1FMIEVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi5LiN5piO44Gq44Ko44Op44O8XCIsXHJcbiAgICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnN0YWNrIDogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQb29sIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIm5leHRVcmwiLCJncm91cCIsImdldCIsInBvb2wiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJob3N0IiwiREJfSE9TVCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwicGFyc2VJbnQiLCJEQl9QT1JUIiwiY2xpZW50IiwiY29ubmVjdCIsIndoZXJlQ2xhdXNlIiwicXVlcnlUZXh0IiwicXVlcnlQYXJhbXMiLCJyZXN1bHQiLCJxdWVyeSIsInJlbGVhc2UiLCJqc29uIiwic3RhdHVzIiwiZGF0YSIsInJvd3MiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJkZXRhaWxzIiwic3RhY2siLCJ1bmRlZmluZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/groupLeague/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgroupLeague%2Froute&page=%2Fapi%2FgroupLeague%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgroupLeague%2Froute.ts&appDir=%2Fworkspace%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();