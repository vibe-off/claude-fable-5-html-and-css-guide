# 表单

表单是网页收集用户输入的方式：登录、注册、搜索、问卷……都离不开它。表单也是 HTML 中属性最多、细节最多的部分。

## 表单的基本结构

```html
<form action="/api/register" method="post">
  <label for="username">用户名</label>
  <input type="text" id="username" name="username" required />

  <button type="submit">注册</button>
</form>
```

- `action`：数据提交到哪个地址。
- `method`：提交方式。`get` 把数据拼在网址后面（适合搜索），`post` 放在请求体里（适合注册、登录等）。
- `name`：**提交数据时的字段名**。没有 `name` 的输入框，数据不会被提交——新手常见 Bug。

## label：让表单可点击、可朗读

`label` 的 `for` 属性对应输入框的 `id`，两者关联后：点击文字就能聚焦输入框，读屏软件也能正确朗读。

```html
<!-- 写法一：for + id 关联 -->
<label for="email">邮箱</label>
<input type="email" id="email" name="email" />

<!-- 写法二：直接包裹 -->
<label>
  <input type="checkbox" name="agree" />
  我已阅读并同意用户协议
</label>
```

::: warning placeholder 不能代替 label
`placeholder` 是输入框里的灰色提示文字，用户一开始输入它就消失了。只用 placeholder、不写 label 的表单，用户填到一半会忘记这个框是填什么的。两者应配合使用。
:::

## 常用 input 类型

`<input>` 的 `type` 属性决定了它的形态和行为：

```html
<input type="text" placeholder="普通文本" />
<input type="password" placeholder="密码（输入内容以圆点显示）" />
<input type="email" placeholder="邮箱（提交时自动校验格式）" />
<input type="number" min="0" max="120" placeholder="数字" />
<input type="date" />
<input type="file" accept="image/*" />
<input type="search" placeholder="搜索" />
```

### 单选与多选

```html
<!-- 单选：name 相同的 radio 互斥 -->
<label><input type="radio" name="degree" value="bachelor" checked /> 本科</label>
<label><input type="radio" name="degree" value="master" /> 硕士</label>

<!-- 多选 -->
<label><input type="checkbox" name="skills" value="html" /> HTML</label>
<label><input type="checkbox" name="skills" value="css" /> CSS</label>
```

单选组靠**相同的 `name`** 实现互斥；`value` 是选中后实际提交的值。

## 多行文本与下拉框

```html
<textarea name="bio" rows="4" placeholder="介绍一下你自己"></textarea>

<select name="city">
  <option value="">请选择城市</option>
  <option value="bj">北京</option>
  <option value="sh" selected>上海</option>
  <option value="gz">广州</option>
</select>
```

## 按钮

```html
<button type="submit">提交表单</button>
<button type="reset">重置</button>
<button type="button">普通按钮（交给 JavaScript 处理）</button>
```

::: danger 易错
`<button>` 在 `<form>` 里**默认就是 `type="submit"`**。如果你在表单里放了一个想用 JS 处理的按钮却没写 `type="button"`，点击它会意外触发表单提交、页面刷新——这是前端新人最经典的 Bug 之一。
:::

## 原生校验属性

不写一行 JavaScript 也能做基础校验：

| 属性 | 作用 |
| --- | --- |
| `required` | 必填 |
| `minlength` / `maxlength` | 文本长度范围 |
| `min` / `max` / `step` | 数字范围与步长 |
| `pattern` | 正则表达式校验 |
| `disabled` / `readonly` | 禁用 / 只读 |

## 分组：fieldset

长表单可以用 `fieldset` + `legend` 分区：

```html
<fieldset>
  <legend>联系方式</legend>
  <label for="phone">手机号</label>
  <input type="tel" id="phone" name="phone" />
</fieldset>
```

## 练习

1. 制作一份“课程报名表”：姓名（必填）、邮箱、性别（单选）、感兴趣的课程（多选）、自我介绍（多行文本）、提交按钮。所有输入框都要有正确关联的 label。
2. 提交方式设为 `get`，提交后观察浏览器地址栏——你能看到自己填的数据吗？由此理解为什么密码绝不能用 `get` 提交。
3. 删掉某个输入框的 `name` 再提交一次，观察地址栏里它的数据是否还在。
