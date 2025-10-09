"use client";
import React, { useRef, useEffect, useCallback } from "react";

type Easing = "linear" | "ease-in" | "ease-out" | "ease-in-out";

export interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: Easing;
  extraScale?: number;
  lineWidth?: number;
  className?: string;
  children?: React.ReactNode;

  // ★ 追加: 全ページに効かせる“オーバーレイ”運用
  global?: boolean;
  // ★ 追加: 無効化したい領域（例：<div data-no-spark="true">）
  ignoreSelector?: string;
  // ★ 追加: モバイル取りこぼしを減らす
  eventType?: "click" | "pointerdown";
  // ★ 追加: 一時的に止めたい時
  disabled?: boolean;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export default function ClickSpark({
  sparkColor = "#38bdf8",
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 9,
  duration = 420,
  easing = "ease-out",
  extraScale = 1.0,
  lineWidth = 2,
  className = "",
  children,
  global = false,
  ignoreSelector = '[data-no-spark="true"]',
  eventType = "pointerdown",
  disabled = false,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = global ? document.documentElement : canvas.parentElement;
    if (!parent) return;

    const rect = global
      ? { width: window.innerWidth, height: window.innerHeight }
      : parent.getBoundingClientRect();

    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const targetW = Math.floor(rect.width * dpr);
    const targetH = Math.floor(rect.height * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    // CSSピクセルの見た目サイズも合わせる
    if (!global) {
      (canvas.style.width = `${rect.width}px`), (canvas.style.height = `${rect.height}px`);
    }
  }, [global]);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t); // ease-out
      }
    },
    [easing]
  );

  // リサイズ監視
  useEffect(() => {
    if (disabled || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let t: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (t) clearTimeout(t);
      t = setTimeout(resizeCanvas, 80);
    };

    if (global) {
      window.addEventListener("resize", onResize);
      resizeCanvas();
      return () => {
        window.removeEventListener("resize", onResize);
        if (t) clearTimeout(t);
      };
    } else {
      const parent = canvas.parentElement;
      if (!parent) return;
      const ro = new ResizeObserver(onResize);
      ro.observe(parent);
      resizeCanvas();
      return () => {
        ro.disconnect();
        if (t) clearTimeout(t);
      };
    }
  }, [resizeCanvas, global, disabled, reducedMotion]);

  // 描画ループ
  useEffect(() => {
    if (disabled || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    const draw = (ts: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = ts - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const len = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + len) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + len) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return true;
      });
      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [sparkColor, sparkSize, sparkRadius, duration, easeFunc, extraScale, lineWidth, disabled, reducedMotion]);

  // クリック検知（グローバル or ラッパー）
  useEffect(() => {
    if (disabled || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handler = (clientX: number, clientY: number, target?: EventTarget | null) => {
      if (ignoreSelector && target instanceof Element && target.closest(ignoreSelector)) return;

      const rect = global ? { left: 0, top: 0 } : canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const now = performance.now();

      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x,
          y,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: now,
        });
      }
    };

    if (global) {
      const onEvt = (e: MouseEvent | PointerEvent) => handler(e.clientX, e.clientY, e.target);
      document.addEventListener(eventType, onEvt as any, { passive: true });
      return () => document.removeEventListener(eventType, onEvt as any);
    } else {
      const div = wrapperRef.current;
      if (!div) return;
      const onEvt = (e: MouseEvent | PointerEvent) =>
        handler((e as any).clientX, (e as any).clientY, e.target as any);
      div.addEventListener(eventType, onEvt as any, { passive: true });
      return () => div.removeEventListener(eventType, onEvt as any);
    }
  }, [global, eventType, ignoreSelector, sparkCount, disabled, reducedMotion]);

  if (disabled || reducedMotion) return <>{children}</>;

  // グローバルモード: 画面全体の固定オーバーレイ
  if (global) {
    return (
      <div className={`pointer-events-none fixed inset-0 ${className}`}>
        <canvas ref={canvasRef} className="absolute inset-0" />
        {/* children は描画しない（オーバーレイ専用） */}
      </div>
    );
  }

  // ラップモード
  return (
    <div ref={wrapperRef} className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      {children}
    </div>
  );
}
