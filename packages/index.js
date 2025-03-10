// 导入组件
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Progress from './components/Progress'
import Message from './components/Message'
import Tooltip from './components/Tooltip'
import Icon from './components/Icon'
import Modal from './components/Modal'
import Confirm from './components/Confirm'
import Loading from './components/Loading'
import Tabs  from './components/Tabs'
import TabPane  from './components/TabPane'
import Rate from './components/Rate'
import Switch from './components/Switch'
import Pagination from './components/Pagination'
import Select from './components/Select'
import Option from './components/SelectOption'
import Input from './components/Input'
import Radio from './components/Radio'
import RadioGroup  from './components/RadioGroup'
import Checkbox from './components/Checkbox'
import CheckboxGroup  from './components/CheckboxGroup'
import { Form, FormItem } from './components/Form'
import {Menu,MenuItem,Submenu,MenuItemGroup} from './components/Menu'
import { Timeline, TimelineItem } from './components/Timeline'
import Drawer  from './components/Drawer'
import Carousel  from './components/Carousel'
import CarouselItem  from './components/CarouselItem'
import loadingDirective from './components/Loading/directive'
import "./assets/index.css"
// 组件列表
const components = [
  Button,ButtonGroup,
  Progress,
  Tooltip,
  Icon,
  Modal,
  Tabs,TabPane,
  Rate,
  Switch,
  Pagination,
  Select,Option,
  Input,
  Radio,RadioGroup,
  Checkbox,CheckboxGroup,
  Form,FormItem,
  Menu,MenuItem,Submenu,MenuItemGroup,
  Drawer,
  Carousel,
  CarouselItem,
  Timeline,TimelineItem
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => Vue.component(component.name, component))
  // 自定义全局实例
  Vue.prototype.$msg = Message
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$loading = Loading
  // 自定义加载指令
  loadingDirective(Vue)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  Button,ButtonGroup,
  Progress,
  Tooltip,
  Icon,
  Modal,
  Tabs,TabPane,
  Rate,
  Switch,
  Pagination,
  Select,Option,
  Input,
  Radio,RadioGroup,
  Checkbox,CheckboxGroup,
  Form,FormItem,
  Menu,MenuItem,Submenu,MenuItemGroup,
  Timeline,TimelineItem
}
