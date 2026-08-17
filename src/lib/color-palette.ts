export type BlockColorName =
  | "default"
  | "gray"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "teal";

export type BlockColorOption = {
  value: BlockColorName;
  label: string;
  text: string;
  background: string;
};

export const BLOCK_COLOR_PALETTE: readonly BlockColorOption[] = [
  { value: "default", label: "默认", text: "#45474b", background: "#ffffff" },
  { value: "gray", label: "灰色", text: "#5f6368", background: "#f1f3f4" },
  { value: "brown", label: "棕色", text: "#7a5c4f", background: "#f4eeee" },
  { value: "red", label: "红色", text: "#a4473f", background: "#faeceb" },
  { value: "orange", label: "橙色", text: "#a85f16", background: "#fbecdd" },
  { value: "yellow", label: "黄色", text: "#80620b", background: "#fff4cc" },
  { value: "green", label: "绿色", text: "#2f6f4e", background: "#edf3ec" },
  { value: "blue", label: "蓝色", text: "#27679b", background: "#eaf4ff" },
  { value: "purple", label: "紫色", text: "#72549a", background: "#f3eefd" },
  { value: "pink", label: "粉红色", text: "#9a4d70", background: "#fbeaf2" },
  { value: "teal", label: "青色", text: "#1f6f68", background: "#e7f6f4" },
];

export const BLOCK_TEXT_COLORS: Record<BlockColorName, string> = Object.fromEntries(
  BLOCK_COLOR_PALETTE.map(({ value, text }) => [value, value === "default" ? "inherit" : text]),
) as Record<BlockColorName, string>;

export const BLOCK_BACKGROUND_COLORS: Record<BlockColorName, string> = Object.fromEntries(
  BLOCK_COLOR_PALETTE.map(({ value, background }) => [value, value === "default" ? "transparent" : background]),
) as Record<BlockColorName, string>;