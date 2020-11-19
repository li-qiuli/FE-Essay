(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{312:function(t,r,e){"use strict";e.r(r);var v=e(6),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"两者对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[t._v("#")]),t._v(" 两者对比")]),t._v(" "),e("ul",[e("li",[t._v("redux 将数据保存在单一的 store 中，mobx 将数据分散保存在多个 store 中；")]),t._v(" "),e("li",[t._v("redux 使用 "),e("strong",[t._v("普通对象")]),t._v(" 保存数据，需要手动处理变化后的操作；mobx 使用 "),e("strong",[t._v("可观察对象")]),t._v(" 保存数据，数据变化后自动处理相应的操作；")]),t._v(" "),e("li",[t._v("redux 使用 "),e("strong",[t._v("不可变状态")]),t._v(" ，这意味着状态是只读的，不能直接去修改，而应该返回一个新的状态，同时使用纯函数；mobx 状态是 "),e("strong",[t._v("可以变更的")]),t._v(" ，可以直接对其进行修改；")]),t._v(" "),e("li",[t._v("mobx 相对来说更容易理解，在其中有很多的抽象，mobx 更多的使用面向对象编程的思维；redux 稍显复杂，因为其中函数式的思维比较难以掌握，同时需要借助一系列的中间件来处理异步和副作用；")]),t._v(" "),e("li",[t._v("mobx 因为有更多的抽象和封装，调试的时候会比较困难，同时结果也难以预测；redux 提供能够进行时间回溯的开发工具，同时其纯函数以及其更少的抽象，让调试变得更加容易。")])]),t._v(" "),e("h1",{attrs:{id:"场景辨析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景辨析"}},[t._v("#")]),t._v(" 场景辨析")]),t._v(" "),e("p",[t._v("mobx 更适合数据不复杂的应用：mobx 难以调试，很多状态无法回溯，面对复杂度高的应用往往力不从心。")]),t._v(" "),e("p",[t._v("redux 适合有回溯需求的应用：比如一个画板应用、一个表格应用，很多时候需要撤销、重做的操作，由于 redux 的不可变性，所以天然支持这些操作。")]),t._v(" "),e("p",[t._v("由于面向对象编程特性更加贴近业务开发，所有对于大多数 2b 的业务来说，mobx 更加适合。")]),t._v(" "),e("p",[t._v("当然 mobx 和 redux 并非非此即彼的关系，你可以在项目中使用 redux 作为全局状态管理，用 mobx 作为组件局部状态管理。")])])}),[],!1,null,null,null);r.default=_.exports}}]);