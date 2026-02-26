(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroBackground",
    ()=>HeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HeroBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationId;
            const particles = [];
            const resize = {
                "HeroBackground.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["HeroBackground.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            for(let i = 0; i < 60; i++){
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.1
                });
            }
            const animate = {
                "HeroBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach({
                        "HeroBackground.useEffect.animate": (p, i)=>{
                            p.x += p.vx;
                            p.y += p.vy;
                            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(240, 124, 28, ${p.opacity})`;
                            ctx.fill();
                            particles.forEach({
                                "HeroBackground.useEffect.animate": (p2, j)=>{
                                    if (i === j) return;
                                    const dx = p.x - p2.x;
                                    const dy = p.y - p2.y;
                                    const dist = Math.sqrt(dx * dx + dy * dy);
                                    if (dist < 150) {
                                        ctx.beginPath();
                                        ctx.moveTo(p.x, p.y);
                                        ctx.lineTo(p2.x, p2.y);
                                        ctx.strokeStyle = `rgba(240, 124, 28, ${0.05 * (1 - dist / 150)})`;
                                        ctx.lineWidth = 0.5;
                                        ctx.stroke();
                                    }
                                }
                            }["HeroBackground.useEffect.animate"]);
                        }
                    }["HeroBackground.useEffect.animate"]);
                    animationId = requestAnimationFrame(animate);
                }
            }["HeroBackground.useEffect.animate"];
            animate();
            return ({
                "HeroBackground.useEffect": ()=>{
                    window.removeEventListener("resize", resize);
                    cancelAnimationFrame(animationId);
                }
            })["HeroBackground.useEffect"];
        }
    }["HeroBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 pointer-events-none",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-background.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(HeroBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = HeroBackground;
var _c;
__turbopack_context__.k.register(_c, "HeroBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$home$2f$hero$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-background.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$home$2f$hero$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroBackground"], {}, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 py-32 lg:py-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-2 w-2 rounded-full bg-primary animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Trusted by 100+ businesses across India"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance",
                            children: [
                                "Empowering Businesses with",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "Smart IT"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                " &",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "Digital Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty",
                            children: "100+ Clients | IT Development | Digital Marketing | Staffing | Compliance"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: [
                                            "Get a Quote",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "outline",
                                    size: "lg",
                                    className: "border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 text-base",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: "Consult Our Experts"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "ghost",
                                    size: "lg",
                                    className: "text-primary hover:bg-accent hover:text-accent-foreground px-8 text-base",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        children: "Explore Services"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                    label: "Happy Clients",
                                    value: "100+"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
                                    label: "Projects Delivered",
                                    value: "250+"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
                                    label: "Campaigns Run",
                                    value: "500+"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                    label: "Years Experience",
                                    value: "5+"
                                }
                            ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                            className: "mx-auto mb-2 h-6 w-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-foreground lg:text-3xl",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-foreground",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, stat.label, true, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/hero-section.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/animated-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedSection",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AnimatedSection({ children, className, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AnimatedSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "AnimatedSection.useEffect": ()=>setIsVisible(true)
                        }["AnimatedSection.useEffect"], delay);
                        observer.unobserve(entry.target);
                    }
                }
            }["AnimatedSection.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "AnimatedSection.useEffect": ()=>observer.disconnect()
            })["AnimatedSection.useEffect"];
        }
    }["AnimatedSection.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-700", isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/animated-section.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(AnimatedSection, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
_c = AnimatedSection;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/lib/utils.ts [app-client] (ecmascript)");
;
;
function SectionHeading({ label, title, description, className, align = "center" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-12", align === "center" && "text-center", className),
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance",
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty",
                children: description
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesOverview",
    ()=>ServicesOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/animated-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
        title: "IT Solutions",
        tagline: "Transform Ideas into Powerful Digital Reality",
        description: "Custom software, web & app development, AI/ML solutions, cloud services, and cybersecurity to drive your digital transformation.",
        href: "/services/it-solutions",
        color: "bg-primary/10 text-primary"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "Graphic Designing",
        tagline: "Design That Drives Brand Success",
        description: "Logo creation, UI/UX design, brochures, brand identity, and packaging design that captivates your audience.",
        href: "/services/graphic-designing",
        color: "bg-chart-5/10 text-chart-5"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        title: "Digital Marketing",
        tagline: "Digital Growth, Guaranteed Results",
        description: "SEO, Google & Meta Ads, PPC campaigns, social media strategy, content marketing, and influencer outreach.",
        href: "/services/marketing",
        color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Staffing Solutions",
        tagline: "Right Talent. Right Time. Every Time.",
        description: "Permanent and contract staffing, RPO, candidate screening, and technical hiring support.",
        href: "/services/staffing",
        color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        title: "GST & Compliance",
        tagline: "Stress-Free Business Compliance",
        description: "GST registration and filing, tax compliance advisory, and monthly/quarterly reports.",
        href: "/services/gst-management",
        color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
        title: "Corporate Services",
        tagline: "Your Partner in Business Registration",
        description: "Company registration, government applications, PAN/TAN/DSC, MSME and Startup India registration.",
        href: "/services/corporate-services",
        color: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    }
];
function ServicesOverview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-secondary py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    label: "Our Services",
                    title: "Everything Your Business Needs to Succeed",
                    description: "From cutting-edge technology to strategic marketing and compliance -- we provide end-to-end solutions that fuel growth."
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                            delay: i * 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: service.href,
                                className: "group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mb-4 inline-flex rounded-xl p-3 ${service.color}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-1 text-lg font-semibold text-card-foreground",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-sm font-medium text-primary",
                                        children: service.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 text-sm leading-relaxed text-muted-foreground",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1",
                                        children: [
                                            "Learn More",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-1 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, service.title, false, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/services-overview.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c = ServicesOverview;
var _c;
__turbopack_context__.k.register(_c, "ServicesOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyChooseUs",
    ()=>WhyChooseUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/animated-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const reasons = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "Proven Expertise",
        description: "Years of hands-on experience delivering IT, marketing, and business solutions across diverse industries."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Cutting-Edge Tech",
        description: "We leverage the latest technologies, AI, and automation to give your business a competitive advantage."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        title: "Client-Centric Approach",
        description: "Your success is our priority. We tailor every solution to match your specific goals and challenges."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        title: "Scalable Solutions",
        description: "Our services grow with you -- from startup to enterprise, we have the tools and talent to scale."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        title: "Innovation Driven",
        description: "We don't just follow trends -- we create them. Our team constantly pushes the boundaries of what's possible."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        title: "Affordable Excellence",
        description: "Premium-quality services at competitive pricing. Maximum ROI without breaking the bank."
    }
];
function WhyChooseUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-background py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    label: "Why StaffArc",
                    title: "Why Businesses Choose StaffArc",
                    description: "We combine expertise, innovation, and a deep commitment to client success. Here's what sets us apart."
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                    children: reasons.map((reason, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                            delay: i * 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 rounded-xl bg-accent p-3 h-fit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(reason.icon, {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-2 text-base font-semibold text-foreground",
                                                children: reason.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed text-muted-foreground",
                                                children: reason.description
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, reason.title, false, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/why-choose-us.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = WhyChooseUs;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const testimonials = [
    {
        name: "Rajesh Patel",
        role: "CEO, TechVista Innovations",
        quote: "StaffArc transformed our digital presence completely. Their IT solutions and marketing strategy helped us increase revenue by 40% in just six months."
    },
    {
        name: "Priya Sharma",
        role: "Founder, GreenLeaf Organics",
        quote: "From website development to social media campaigns, StaffArc delivered everything on time and within budget. Truly a one-stop partner."
    },
    {
        name: "Anand Kumar",
        role: "Director, KumarCorp Industries",
        quote: "Their staffing solutions found us the perfect candidates every time. The quality of talent and the speed of delivery is unmatched."
    },
    {
        name: "Meena Reddy",
        role: "CFO, RedStar Enterprises",
        quote: "GST compliance was a nightmare before StaffArc. Now it's completely handled, letting us focus on growing our business."
    },
    {
        name: "Suresh Naidu",
        role: "CTO, DataFlow Analytics",
        quote: "The AI and data solutions built by StaffArc gave us insights we never had before. Our decision-making is now entirely data-driven."
    }
];
function Testimonials() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Testimonials.useCallback[next]": ()=>{
            setCurrent({
                "Testimonials.useCallback[next]": (prev)=>(prev + 1) % testimonials.length
            }["Testimonials.useCallback[next]"]);
        }
    }["Testimonials.useCallback[next]"], []);
    const prev = ()=>{
        setCurrent((prev)=>(prev - 1 + testimonials.length) % testimonials.length);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const timer = setInterval(next, 5000);
            return ({
                "Testimonials.useEffect": ()=>clearInterval(timer)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], [
        next
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-secondary py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    label: "Testimonials",
                    title: "What Our Clients Say",
                    description: "Real stories from businesses we've helped grow and transform."
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border bg-card p-8 sm:p-12 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    className: "mx-auto mb-6 h-10 w-10 text-primary/30"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "mb-6 text-lg leading-relaxed text-card-foreground sm:text-xl",
                                    children: [
                                        "“",
                                        testimonials[current].quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-card-foreground",
                                            children: testimonials[current].name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: testimonials[current].role
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prev,
                                    className: "rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                                    "aria-label": "Previous testimonial",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: testimonials.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrent(i),
                                            className: `h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`,
                                            "aria-label": `Go to testimonial ${i + 1}`
                                        }, i, false, {
                                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: next,
                                    className: "rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                                    "aria-label": "Next testimonial",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/testimonials.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "W7xpBUcEUSyNtq25njIP2zFzvik=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientsCarousel",
    ()=>ClientsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const clients = [
    {
        name: "Pure Supply",
        logo: "https://www.puresupply.in/logo.jpg"
    },
    {
        name: "Kshiti Organics",
        logo: "https://www.kshitiorganics.com/kshitilogonobg.png"
    },
    {
        name: "Thrisheka Jewels",
        logo: "https://www.thrishekajewels.com/assets/logo-zoom-Db7Vn7XS.png"
    },
    {
        name: "Biryaniwala & Cafe",
        logo: "https://www.biryaniwalacafe.com/logo.png"
    },
    {
        name: "Taxwiz Solutions",
        logo: "https://www.taxwizsolutions.online/assets/logo-x6aq5k0A.png"
    },
    {
        name: "cdmonline",
        logo: "https://www.cdmonline.in/cmdlogo.svg"
    },
    {
        name: "Ganvik Solutions",
        logo: "https://ganvik.vercel.app/assets/logo-B9jBynqB.png"
    },
    {
        name: "The One & Only Salon",
        logo: "https://www.theoneandonlysalonfranchise.in/assets/logo-b3MEGRyL.png"
    },
    {
        name: "The Lassi Story",
        logo: "https://www.lassistory.co.in/assets/lassi-story-logo-FVMNMOF3.png"
    },
    {
        name: "Atlas Fitness Elite",
        logo: "https://www.atlasfitnesselite.com/footer-logo.png"
    },
    {
        name: "Flavor on Wheels",
        logo: "https://flavoronwheels.com/assets/fow-logo-D1v1Be5L.webp"
    }
];
function ClientsCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-b from-background to-muted/20 py-24 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50"
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    label: "Our Clients",
                    title: "Trusted by 100+ Premium Brands",
                    description: "Leading companies across tech, finance, healthcare, and beyond partner with StaffArc for transformative solutions.",
                    className: "text-center"
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                        direction: "ltr",
                        children: clients.map((client, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientCard, {
                                client: client,
                                index: i
                            }, i, false, {
                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                        direction: "rtl",
                        children: clients.slice().reverse().map((client, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientCard, {
                                client: client,
                                index: i
                            }, `r2-${i}`, false, {
                                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = ClientsCarousel;
// Premium marquee wrapper
function MarqueeRow({ children, direction }) {
    _s();
    const [isHovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl",
        initial: false,
        whileHover: {
            scale: 1.02
        },
        onHoverStart: ()=>setHovered(true),
        onHoverEnd: ()=>setHovered(false),
        transition: {
            type: "spring",
            stiffness: 300
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-1"
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex",
                animate: {
                    x: direction === "ltr" ? [
                        "0%",
                        "-100%"
                    ] : [
                        "-100%",
                        "0%"
                    ]
                },
                transition: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                },
                style: {
                    animationPlayState: isHovered ? "paused" : "running"
                },
                children: [
                    children,
                    children,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(MarqueeRow, "1/WgnTKFzToT2ZuGk9bruQ0I+z8=");
_c1 = MarqueeRow;
// Premium client card
function ClientCard({ client, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "mx-6 flex shrink-0 items-center justify-center p-6",
        whileHover: {
            scale: 1.05,
            y: -4,
            transition: {
                type: "spring",
                stiffness: 400
            }
        },
        initial: {
            opacity: 0.7
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative flex h-20 w-48 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-muted shadow-lg backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    src: client.logo,
                    alt: client.name,
                    className: "h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-700 max-h-16 object-contain",
                    whileHover: {
                        scale: 1.1
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute inset-0 flex items-center justify-center px-4 text-xs font-semibold text-muted-foreground/80 group-hover:text-foreground tracking-tight whitespace-nowrap backdrop-blur-sm hidden md:flex",
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: client.logo ? 0.3 : 1
                    },
                    children: client.name
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl -z-10",
                    animate: {
                        scale: [
                            1,
                            1.1,
                            1
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Staffarc Projects/staffArcv0/staffarc/components/home/clients-carousel.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c2 = ClientCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ClientsCarousel");
__turbopack_context__.k.register(_c1, "MarqueeRow");
__turbopack_context__.k.register(_c2, "ClientCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Staffarc%20Projects_staffArcv0_staffarc_components_2306aea2._.js.map