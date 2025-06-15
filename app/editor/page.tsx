"use client";

import { Leva, useControls } from "leva";

export default function EditorPage() {
  const { color, size, showTree } = useControls({
    color: "#00ff00",
    size: { value: 1, min: 0.1, max: 3, step: 0.1 },
    showTree: true,
  });

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Leva collapsed={false} />
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">🌟 Конструктор ёлки</h1>
        <p className="text-gray-700">
          Цвет: <span style={{ color }}>{color}</span>
          <br />
          Размер: {size}
          <br />
          Показывать дерево: {showTree ? "Да" : "Нет"}
        </p>
      </div>
    </main>
  );
}
