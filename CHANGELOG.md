## 2.0.0

React Impression 2.0.0 在最大限度向前兼容的前提下，对整体设计风格做了很大的改变。根据 1.x 版本的使用反馈情况，增强了 Modal 组件、Select 组件的功能，新增 Table 组件，并赋予 Table 组件更强大灵活的数据展示功能。同时还修复了已知漏洞。详细变更情况如下：

### 问题修复

* 修复 **Input 组件**clearable 为 true 时，点击清除输入框内容没有执行回调事件 onChange 的问题

### API 变更

* 废弃 **Breadcrumb 组件** separator 属性，不支持自定义分割标识
* 废弃 **Card 组件** noborder 属性
* 废弃 **Progress 组件** striped 属性，不支持斑马纹样式
* 废弃 **Nav 组件** type 属性可选参数：pill
* 废弃 **Pagination 组件** ellipsis 属性，自动显示省略号
* 新增 **CardHeader 组件** align 属性，可选参数：left，center，right
* 新增 **Checkbox 组件** indeterminate 属性，表示半选中状态
* 新增 **InlineSelect 组件** label 属性，可指定标签名内容
* 新增 **InlineSelect 组件** col 属性，可指定标签名占比，默认值为 1
* 新增 **Message 组件**API 参数列表 closable 值，支持手动关闭消息 [详情](https://newdadafe.github.io/react-impression/#message)
* 新增 **Pagination 组件** lastContent 属性、nextContent 属性，支持自定义翻页控制按钮内容
* 新增 **Popover 组件** trigger 属性，可选参数：click，hover [详情](https://newdadafe.github.io/react-impression/#popover)
* 新增 **Progress 组件** strokeWidth 属性，支持自定义组件高度
* 新增 **Progress 组件** showInfo 属性，可选是否在右侧展示进度信息
* 新增 **Progress 组件** formatter 属性，自定义进度信息显示规则
* 扩展 **Datepicker 组件** type 属性，增加可选参数：year，支持选择年份
* 变更 **Tag 组件** theme 属性默认值为：primary
* 变更 **Upload** 选择文件后显示文件名称

### 组件重构

* 重构 **Navbar 组件**，不兼容 1.x 版本 [详情](https://newdadafe.github.io/react-impression/#navbar)
* 重构 **Modal 组件** [详情](https://newdadafe.github.io/react-impression/#modal)
  * 新增 isOpen 属性，控制组件的显隐状态
  * 新增 scrollInside 属性，可选组件内容滚动方式
  * 新增 closeOnEsc 属性，支持键盘 esc 键关闭组件
  * 新增 closeOnOutsideClick 属性，可选是否点击蒙层关闭组件
  * 新增 onClose 属性，按 esc 键或者点击蒙层关闭组件时回调
* 重构 **Select 组件** [详情](https://newdadafe.github.io/react-impression/#select)
  * 新增 searchable 属性，支持搜索选项
  * 新增 multiple 属性，支持多选
  * 新增 required 属性，优化字段作为必选项未选择时的视觉效果
  * 新增 onDelete 属性，回调方法的返回值为删除项的值，仅在多选模式下有效
  * 新增 filterMethod 属性，支持自定义过滤方法

### 新增组件

* 新增 **Table 组件**，支持 TableColumn/columns 两种用法，支持 rowSelection 多选表格配置 [详情](https://newdadafe.github.io/react-impression/#table)