(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__299ff787._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/i18n/locale.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultLocale": (()=>defaultLocale),
    "localeDetection": (()=>localeDetection),
    "localeNames": (()=>localeNames),
    "localePrefix": (()=>localePrefix),
    "locales": (()=>locales),
    "pathnames": (()=>pathnames)
});
const locales = [
    "en",
    "zh"
];
const localeNames = {
    en: "English",
    zh: "中文"
};
const defaultLocale = "en";
const localePrefix = "as-needed";
const localeDetection = process.env.NEXT_PUBLIC_LOCALE_DETECTION === "true";
const pathnames = {
    en: {
        "privacy-policy": "/privacy-policy",
        "terms-of-service": "/terms-of-service"
    }
};
}}),
"[project]/i18n/messages/en.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"metadata\":{\"title\":\"Ship Any AI SaaS Startups in hours | ShipAny\",\"description\":\"ShipAny is a NextJS boilerplate for building AI SaaS startups, Ship Fast with a variety of templates and components.\",\"keywords\":\"ShipAny, AI SaaS Boilerplate, NextJS Boilerplate\"},\"user\":{\"sign_in\":\"Sign In\",\"sign_out\":\"Sign Out\",\"credits\":\"Credits\",\"api_keys\":\"API Keys\",\"my_orders\":\"My Orders\",\"user_center\":\"User Center\",\"admin_system\":\"Admin System\"},\"sign_modal\":{\"sign_in_title\":\"Sign In\",\"sign_in_description\":\"Sign in to your account\",\"sign_up_title\":\"Sign Up\",\"sign_up_description\":\"Create an account\",\"email_title\":\"Email\",\"email_placeholder\":\"Input your email here\",\"password_title\":\"Password\",\"password_placeholder\":\"Input your password here\",\"forgot_password\":\"Forgot password?\",\"or\":\"Or\",\"continue\":\"Continue\",\"no_account\":\"Don't have an account?\",\"email_sign_in\":\"Sign in with Email\",\"google_sign_in\":\"Sign in with Google\",\"github_sign_in\":\"Sign in with GitHub\",\"close_title\":\"Close\",\"cancel_title\":\"Cancel\"},\"my_orders\":{\"title\":\"My Orders\",\"description\":\"orders paid with ShipAny.\",\"no_orders\":\"No orders found\",\"tip\":\"\",\"activate_order\":\"Activate Order\",\"actived\":\"Activated\",\"join_discord\":\"Join Discord\",\"read_docs\":\"Read Docs\",\"table\":{\"order_no\":\"Order No\",\"email\":\"Email\",\"product_name\":\"Product Name\",\"amount\":\"Amount\",\"paid_at\":\"Paid At\",\"github_username\":\"GitHub Username\",\"status\":\"Status\"}},\"my_credits\":{\"title\":\"My Credits\",\"left_tip\":\"left credits: {left_credits}\",\"no_credits\":\"No credits records\",\"recharge\":\"Recharge\",\"table\":{\"trans_no\":\"Trans No\",\"trans_type\":\"Trans Type\",\"credits\":\"Credits\",\"updated_at\":\"Updated At\",\"status\":\"Status\"}},\"api_keys\":{\"title\":\"API Keys\",\"tip\":\"Please keep your apikey safe to avoid leaks\",\"no_api_keys\":\"No API Keys\",\"create_api_key\":\"Create API Key\",\"table\":{\"name\":\"Name\",\"key\":\"Key\",\"created_at\":\"Created At\"},\"form\":{\"name\":\"Name\",\"name_placeholder\":\"API Key Name\",\"submit\":\"Submit\"}},\"blog\":{\"title\":\"Blog\",\"description\":\"News, resources, and updates about ShipAny\",\"read_more_text\":\"Read More\"},\"my_invites\":{\"title\":\"My Invites\",\"description\":\"View your invite records\",\"no_invites\":\"No invite records found\",\"my_invite_link\":\"My Invite Link\",\"edit_invite_link\":\"Edit Invite Link\",\"copy_invite_link\":\"Copy Invite Link\",\"invite_code\":\"Invite Code\",\"invite_tip\":\"Invite 1 friend to buy ShipAny, reward $50.\",\"invite_balance\":\"Invite Reward Balance\",\"total_invite_count\":\"Total Invite Count\",\"total_paid_count\":\"Total Paid Count\",\"total_award_amount\":\"Total Award Amount\",\"update_invite_code\":\"Set Invite Code\",\"update_invite_code_tip\":\"Input your custom invite code\",\"update_invite_button\":\"Save\",\"no_orders\":\"You can't invite others before you bought ShipAny\",\"no_affiliates\":\"You're not allowed to invite others, please contact us to apply for permission.\",\"table\":{\"invite_time\":\"Invite Time\",\"invite_user\":\"Invite User\",\"status\":\"Status\",\"reward_percent\":\"Reward Percent\",\"reward_amount\":\"Reward Amount\",\"pending\":\"Pending\",\"completed\":\"Completed\"}},\"feedback\":{\"title\":\"Feedback\",\"description\":\"We'd love to hear what went well or how we can improve the product experience.\",\"submit\":\"Submit\",\"loading\":\"Submitting...\",\"contact_tip\":\"Other ways to contact us\",\"rating_tip\":\"How do you feel about ShipAny?\",\"placeholder\":\"Leave your words here...\"}}"));}}),
"[project]/i18n/messages/zh.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"metadata\":{\"title\":\"几小时内构建任何 AI SaaS 创业项目 | ShipAny\",\"description\":\"ShipAny 是一个用于构建 AI SaaS 创业项目的 NextJS 模板，提供各种模板和组件，帮助您快速启动。\",\"keywords\":\"ShipAny, AI SaaS 模板, NextJS 模板\"},\"user\":{\"sign_in\":\"登录\",\"sign_out\":\"退出登录\",\"credits\":\"额度\",\"api_keys\":\"API 密钥\",\"my_orders\":\"我的订单\",\"user_center\":\"用户中心\",\"admin_system\":\"管理后台\"},\"sign_modal\":{\"sign_in_title\":\"登录\",\"sign_in_description\":\"登录您的账户\",\"sign_up_title\":\"注册\",\"sign_up_description\":\"创建新账户\",\"email_title\":\"邮箱\",\"email_placeholder\":\"请输入您的邮箱\",\"password_title\":\"密码\",\"password_placeholder\":\"请输入您的密码\",\"forgot_password\":\"忘记密码？\",\"or\":\"或\",\"continue\":\"继续\",\"no_account\":\"还没有账户？\",\"email_sign_in\":\"使用邮箱登录\",\"google_sign_in\":\"使用 Google 登录\",\"github_sign_in\":\"使用 GitHub 登录\",\"close_title\":\"关闭\",\"cancel_title\":\"取消\"},\"my_orders\":{\"title\":\"我的订单\",\"description\":\"在 ShipAny 上购买的订单。\",\"no_orders\":\"未找到订单\",\"tip\":\"\",\"activate_order\":\"激活订单\",\"actived\":\"已激活\",\"join_discord\":\"加入 Discord\",\"read_docs\":\"阅读文档\",\"table\":{\"order_no\":\"订单号\",\"email\":\"邮箱\",\"product_name\":\"产品名称\",\"amount\":\"金额\",\"paid_at\":\"支付时间\",\"github_username\":\"GitHub 用户名\",\"status\":\"状态\"}},\"my_credits\":{\"title\":\"我的积分\",\"left_tip\":\"剩余积分: {left_credits}\",\"no_credits\":\"没有积分记录\",\"recharge\":\"充值\",\"table\":{\"trans_no\":\"交易号\",\"trans_type\":\"交易类型\",\"credits\":\"积分\",\"updated_at\":\"更新时间\",\"status\":\"状态\"}},\"api_keys\":{\"title\":\"API 密钥\",\"tip\":\"请妥善保管您的 API 密钥，避免泄露\",\"no_api_keys\":\"没有 API 密钥\",\"create_api_key\":\"创建 API 密钥\",\"table\":{\"name\":\"名称\",\"key\":\"密钥\",\"created_at\":\"创建时间\"},\"form\":{\"name\":\"名称\",\"name_placeholder\":\"API 密钥名称\",\"submit\":\"提交\"}},\"blog\":{\"title\":\"博客\",\"description\":\"关于 ShipAny 的新闻、资源和更新\",\"read_more_text\":\"阅读更多\"},\"my_invites\":{\"title\":\"我的邀请\",\"description\":\"查看您的邀请记录\",\"no_invites\":\"未找到邀请记录\",\"my_invite_link\":\"我的邀请链接\",\"edit_invite_link\":\"编辑邀请链接\",\"copy_invite_link\":\"复制邀请链接\",\"invite_code\":\"邀请码\",\"invite_tip\":\"每邀请 1 位朋友购买 ShipAny，奖励 $50。\",\"invite_balance\":\"邀请奖励余额\",\"total_invite_count\":\"总邀请人数\",\"total_paid_count\":\"已充值人数\",\"total_award_amount\":\"总奖励金额\",\"update_invite_code\":\"设置邀请码\",\"update_invite_code_tip\":\"输入你的自定义邀请码\",\"update_invite_button\":\"保存\",\"no_orders\":\"你需要先购买过 ShipAny 才能邀请朋友\",\"no_affiliates\":\"你暂无邀请朋友的权限，请联系我们申请开通。\",\"table\":{\"invite_time\":\"邀请时间\",\"invite_user\":\"邀请用户\",\"status\":\"状态\",\"reward_percent\":\"奖励比例\",\"reward_amount\":\"奖励金额\",\"pending\":\"已注册，未支付\",\"completed\":\"已支付\"}},\"feedback\":{\"title\":\"反馈\",\"description\":\"我们很乐意听取您对产品的看法或如何改进产品体验。\",\"submit\":\"提交\",\"loading\":\"提交中...\",\"contact_tip\":\"其他联系方式\",\"rating_tip\":\"您对 ShipAny 的看法如何？\",\"placeholder\":\"在这里留下您的反馈...\"}}"));}}),
"[project]/i18n/request.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.1.0_next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__rea_25c0fb7c47fb030383685144671c4dee/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [middleware-edge] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    let locale = await requestLocale;
    if (!locale || !__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        locale = __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    if ([
        "zh-CN"
    ].includes(locale)) {
        locale = "zh";
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        locale = "en";
    }
    try {
        const messages = (await __turbopack_context__.f({
            "./messages/en.json": {
                id: ()=>"[project]/i18n/messages/en.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/i18n/messages/en.json (json)"))
            },
            "./messages/zh.json": {
                id: ()=>"[project]/i18n/messages/zh.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/i18n/messages/zh.json (json)"))
            }
        }).import(`./messages/${locale.toLowerCase()}.json`)).default;
        return {
            locale: locale,
            messages: messages
        };
    } catch (e) {
        return {
            locale: "en",
            messages: (await Promise.resolve().then(()=>__turbopack_context__.i("[project]/i18n/messages/en.json (json)"))).default
        };
    }
});
}}),
"[project]/i18n/routing.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Link": (()=>Link),
    "redirect": (()=>redirect),
    "routing": (()=>routing),
    "usePathname": (()=>usePathname),
    "useRouter": (()=>useRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/locale.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.1.0_next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__rea_25c0fb7c47fb030383685144671c4dee/node_modules/next-intl/dist/esm/development/navigation/react-server/createNavigation.js [middleware-edge] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.1.0_next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__rea_25c0fb7c47fb030383685144671c4dee/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"],
    localePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["localePrefix"],
    pathnames: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["pathnames"],
    localeDetection: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["localeDetection"]
});
const { Link, redirect, usePathname, useRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(routing);
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.1.0_next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__rea_25c0fb7c47fb030383685144671c4dee/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$1$2e$0_next$40$15$2e$2$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$rea_25c0fb7c47fb030383685144671c4dee$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"]);
const config = {
    matcher: [
        "/",
        "/(en|en-US|zh|zh-CN|zh-TW|zh-HK|zh-MO|ja|ko|ru|fr|de|ar|es|it)/:path*",
        "/((?!privacy-policy|terms-of-service|api/|_next|_vercel|.*\\..*).*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__299ff787._.js.map