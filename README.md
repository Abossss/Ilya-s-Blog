# Ilya Chang's Blog

Ilya Chang 的个人博客，基于 [Astro](https://astro.build) 构建。使用 Notion 风格的块编辑器写作，内容以 JSON 文件存储，支持卡片 / 列表 / 网络三种归档视图、标签分类、RSS、深色模式与 Google Drive 图片直传。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器（默认 http://localhost:4321） |
| `npm run build` | 构建生产站点到 `dist/` |
| `npm run preview` | 本地预览生产构建 |

## 写文章

文章是 Post JSON v2 文档，放在 `src/content/blog/` 下（支持子目录）。最小结构：

```json
{
  "version": 2,
  "meta": {
    "title": "文章标题",
    "slug": "post-slug",
    "description": "列表与 RSS 中显示的简介",
    "pubDate": "2026-08-18",
    "category": "随笔",
    "tags": ["随笔", "笔记"],
    "status": ["published"]
  },
  "page": {
    "icon": "📝",
    "cover": { "type": "color", "value": "#eaf4ff", "position": 50 }
  },
  "blocks": []
}
```

- `meta.category` 省略时，使用 `src/content/blog/` 下的文件夹路径作为分类。
- 也可以使用内置编辑器：开发时打开 `/editor/` 写作，完成后点 **JSON 保存** 下载文件，放入 `src/content/blog/` 后重新构建即可。
- 完整的字段与块类型说明见 `public/editor.md`。

## 图片上传（Google Drive）

`/editor/` 支持把图片直接上传到 Google Drive 并生成公开直链。需要一次性配置 Google Cloud OAuth，步骤见 `public/drive-image-upload.md`。不用此功能不影响博客其他部分。

## 站点配置

`src/config.ts` 是唯一配置入口：标题、简介、作者、语言、部署 `url` / `basePath`、品牌文字、社交链接等。

## 部署到 GitHub Pages

1. 保持 `src/config.ts` 中的 `url: "https://abossss.github.io"` 和 `basePath: "/Ilya-s-Blog"`。
2. 推送到 `main` 分支（仓库自带的 Actions 工作流会自动构建并发布）。
3. 在 GitHub **Settings → Pages → Source** 选择 **GitHub Actions**。
4. 站点地址：`https://abossss.github.io/Ilya-s-Blog/`。

## 目录结构

```text
src/
  content/blog/   Post JSON 文章
  components/     归档与块渲染组件
  layouts/        页面布局
  pages/          博客、标签、编辑器、RSS、404 路由
  lib/            块模型与工具函数
  scripts/        编辑器与 Drive 上传逻辑
  styles/         主题样式
  config.ts       站点配置
```

## License

MIT
