# Bento Blog Post Editor — AI 写作指南

本文档是 AI 代理在 `/editor` 中编写 **Post JSON v2** 文档时需要遵循的规范。

## 目标

- 输出结果必须是单个有效的 JSON 对象。不要输出 Markdown 正文或代码围栏。
- 顶层 `version` 必须是数字 `2`。
- 始终包含 `meta`、`page`、`blocks`。
- 所有块的 `id` 在文档内必须是唯一的字符串。例如：`block-intro`、`block-01`。
- 默认使用易读的中文撰写，事实、引用和链接仅在可验证时使用。

## 基本结构

```json
{
  "version": 2,
  "meta": {
    "title": "文章标题",
    "slug": "post-slug",
    "description": "显示在列表和 RSS 中的简短介绍",
    "pubDate": "2026-08-04",
    "category": "engineering",
    "tags": "astro, editor",
    "status": ["draft"]
  },
  "page": {
    "icon": "📝",
    "cover": { "type": "color", "value": "#eaf4ff", "position": 50 }
  },
  "blocks": []
}
```

`page.icon` 和 `page.cover` 可以省略。封面是 `type: "color"` 或 `type: "image"`，图片时 `value` 填图片 URL。`position` 范围 0~100。

## 通用规则

- 普通段落块使用 `richText` 数组。纯文本写作 `[{ "text": "内容" }]`。
- `richText` 片段可以可选地包含 `href`、`annotations`、`textColor`、`backgroundColor`。
- `annotations` 中只将 `bold`、`italic`、`underline`、`strike`、`code` 设为 `true`。
- 颜色推荐使用 `default`、`gray`、`brown`、`orange`、`yellow`、`green`、`blue`、`purple`、`pink`、`red`、`teal` 之一。
- 块可以可选地包含 `backgroundColor`、`textColor`、`children`。`children` 是子块数组。
- 图片块可以可选地设置 `isHeroImage: true`，整篇文档只能设置一张封面图。`displayWidth` 填 120~760 之间的显示宽度（px）。省略则使用正文全宽。
- 标题应反映文档结构，从 H1 开始按顺序使用。需要目录的文档，在标题后放置一个 `table_of_contents` 块。

## 块参考

### 文本类

```json
{ "id": "p-1", "type": "paragraph", "richText": [{ "text": "正文" }] }
{ "id": "h-1", "type": "heading", "level": 2, "richText": [{ "text": "章节标题" }] }
{ "id": "ul-1", "type": "bulleted_list", "richText": [{ "text": "项目" }] }
{ "id": "ol-1", "type": "numbered_list", "richText": [{ "text": "第一项" }] }
{ "id": "todo-1", "type": "todo", "checked": false, "richText": [{ "text": "待办" }] }
{ "id": "quote-1", "type": "quote", "richText": [{ "text": "引用" }] }
{ "id": "callout-1", "type": "callout", "icon": "💡", "richText": [{ "text": "重要提示" }] }
{ "id": "context-1", "type": "context", "title": "背景", "richText": [{ "text": "背景与前提" }] }
```

### 结构 · 媒体类

```json
{ "id": "toggle-1", "type": "toggle", "richText": [{ "text": "展开详情" }], "children": [{ "id": "toggle-p-1", "type": "paragraph", "richText": [{ "text": "折叠内容" }] }] }
{ "id": "toc-1", "type": "table_of_contents" }
{ "id": "divider-1", "type": "divider" }
{ "id": "code-1", "type": "code", "language": "ts", "code": "const answer = 42;" }
{ "id": "math-1", "type": "equation", "equation": "E = mc^2" }
{ "id": "image-1", "type": "image", "src": "https://example.com/image.webp", "alt": "图片说明", "caption": [{ "text": "图片图注" }], "isHeroImage": true, "displayWidth": 420 }
{ "id": "bookmark-1", "type": "bookmark", "url": "https://example.com", "title": "参考资料", "description": "链接描述" }
```

### 表格

`rows` 是行数组，每个单元格必须是包含 `richText` 的对象。通常第一行作为表头。

```json
{
  "id": "table-1",
  "type": "table",
  "hasHeaderRow": true,
  "rows": [
    [{ "richText": [{ "text": "项目" }] }, { "richText": [{ "text": "说明" }] }],
    [{ "richText": [{ "text": "示例" }] }, { "richText": [{ "text": "内容" }] }]
  ]
}
```

## 行内格式示例

```json
{
  "id": "p-link",
  "type": "paragraph",
  "richText": [
    { "text": "重要的 " },
    { "text": "链接", "href": "https://example.com", "annotations": { "bold": true }, "textColor": "blue" },
    { "text": "。末尾" }
  ]
}
```

## 写作质量检查

- 填写 `meta.title`、`meta.slug`、`meta.description`、`meta.pubDate`。
- `slug` 使用英文小写、数字和连字符。
- 避免块 ID 重复、未知 `type` 或错误的日期格式。
- 代码块中不要放无关的长密钥、令牌或个人信息。
- 仅当图片/书签 URL 真实可访问时才使用。
- 完成后用 `/editor` 的「导入」打开 JSON，检查内容和格式。
