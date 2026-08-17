# Google Drive 图片上传设置

要在 `/editor` 的图片块中使用 **Upload to Drive**，只需设置一次。

## 1. 创建共享文件夹

1. 在 Google Drive 中创建一个名为 `blog-images` 之类的文件夹。
2. 将文件夹的常规访问权限改为 **知道链接的任何人 · 查看者**。
3. 复制文件夹 URL 中 `/folders/` 后面的字符串，这就是 **文件夹 ID**。

例如：`https://drive.google.com/drive/folders/abc123...`，则文件夹 ID 是 `abc123...`。

## 2. Google Cloud 设置

1. 在 Google Cloud Console 中创建项目。
2. 启用 **Google Drive API**。
3. 创建 OAuth 同意屏幕；测试时把自己 Google 账号加入测试用户。
4. 创建 Web 应用 OAuth 客户端 ID。
5. 在已授权的 JavaScript 来源中添加以下内容：
   - 本地：`http://127.0.0.1:4321`
   - 部署站点：实际站点的 origin（例如 `https://username.github.io`，不含仓库路径）
6. Drive 权限声明 `https://www.googleapis.com/auth/drive.file`。

客户端 ID 形如 `...apps.googleusercontent.com`。**绝不要输入或把客户端密钥（client secret）放到站点上。**

## 3. 在编辑器中使用

1. 在 `/editor` 中添加 **图片** 块。
2. 点击 **Drive settings**，保存 OAuth 客户端 ID 和文件夹 ID。
3. 点击 **Upload to Drive**，用 Google 账号授权后选择文件。
4. 上传完成后，图片 URL 会自动填入并保存到 Post JSON 中。

上传的文件仅使用 Drive API 的窄权限 `drive.file` 处理。编辑器会将新文件设为公开读取权限，因此不要上传私密图片或包含个人信息的照片。
