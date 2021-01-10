# 蝴蝶UI
蝴蝶UI，一个简洁的UI。基于Vue3.0，主要使用Vue3的Composition API。项目使用Vite搭建，源码使用TypeScript书写，样式使用SCSS。代码简洁易读，组件易于使用。

# 安装
执行以下代码即可安装蝴蝶UI

`npm i btfly-ui`

# 使用
### 引入
```
import { Button, Switch, Dialog, Tab, Tabs, openDialog } from 'btfly-ui';
import 'btfly-ui/dist/lib/btfly.css';
```
可以按需引入，只引入需要的组件。
### 修改样式
可以在`node_modules/btfly-ui/dist/lib/btfly.css`中修改样式，也可以直接覆盖样式。