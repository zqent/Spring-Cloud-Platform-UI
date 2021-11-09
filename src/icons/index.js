import Vue from 'vue'
import SvgIcon from '@/components/d2-icon-svg'// svg组件
      
// register globally
Vue.component('d2-icon-svg', SvgIcon)
      
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)