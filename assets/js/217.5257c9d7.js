(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{397:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"动态规划和回溯算法到底谁是谁爹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划和回溯算法到底谁是谁爹"}},[t._v("#")]),t._v(" 动态规划和回溯算法到底谁是谁爹")]),t._v(" "),n("p",[t._v("读完本文，你不仅学会了算法套路，还可以顺便去 LeetCode 上拿下如下题目：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode.com/problems/target-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("494.目标和"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("我们前文经常说回溯算法和递归算法有点类似，有的问题如果实在想不出状态转移方程，尝试用回溯算法暴力解决也是一个聪明的策略，总比写不出来解法强。")]),t._v(" "),n("p",[t._v("那么，回溯算法和动态规划到底是什么关系？它俩都涉及递归，算法模板看起来还挺像的，都涉及做「选择」，真的酷似父与子。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F5652c1bb8eee9ef28b27b0508610357c60b041c1.jpg?alt=media",alt:"img"}})]),t._v(" "),n("p",[t._v("那么，它俩具体有啥区别呢？回溯算法和动态规划之间，时否可以互相转化呢？")]),t._v(" "),n("p",[t._v("今天就用力扣第 494 题「目标和」来详细对比一下回溯算法和动态规划，真可谓群魔乱舞：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F2ceac993e4d7c4d38114f2996c73e506cc101949.jpg?alt=media",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"回溯思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回溯思路"}},[t._v("#")]),t._v(" 回溯思路")]),t._v(" "),n("p",[t._v("其实这题用回溯思路非常简单，任何算法的核心都是穷举，回溯算法就是一个暴力穷举算法，我们套用之前说过的回溯算法框架:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("路径"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 满足结束条件"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 选择 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 选择列表"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        做选择\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        撤销选择\n")])])]),n("p",[t._v("关键就是搞清楚什么是「选择」，而对于这道题，「选择」不是明摆着的吗？ "),n("strong",[t._v("对于每个数字 "),n("code",[t._v("nums[i]")]),t._v(" ，我们可以选择给一个正号 "),n("code",[t._v("＋")]),t._v(" 或者一个负号 "),n("code",[t._v("-")]),t._v(" ，")]),t._v(" 然后利用回溯模板琼剧出所有可能的结果，数一数到底有几种组合能够凑出 target 不就行了。")]),t._v(" "),n("p",[t._v("伪代码如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 达到 target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" op "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        选择 op "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 穷举 nums[i + 1] 的选择")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        撤销选择\n")])])]),n("p",[t._v("具体实现：")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findTargetSumWays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择 - 号")]),t._v("\n        rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 撤销选择")]),t._v("\n        rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择 + 号")]),t._v("\n        rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 撤销选择")]),t._v("\n        rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("可能有人会问，为什么选择 + 号的时候是 - ，选择 - 号的时候是 + 呢？")]),t._v(" "),n("p",[t._v("注意看 rest 这个形参的定义，表示剩余值，因此刚好是相反的。")]),t._v(" "),n("p",[t._v("以上算法的时间复杂度是指数级别 "),n("code",[t._v("O(2 ^ N)")]),t._v(" ，原因是每一个元素都会做出 2 次选择，其中 N 表示数组的长度。")]),t._v(" "),n("h2",{attrs:{id:"消除重叠子问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消除重叠子问题"}},[t._v("#")]),t._v(" 消除重叠子问题")]),t._v(" "),n("p",[t._v("动态规划之所以比暴力算法快，就是因为动态规划消除了重叠子问题。")]),t._v(" "),n("p",[t._v("如何发现重叠子问题？看是否可能出现重复的「状态」。对于递归函数来说，函数参数中会变的参数就是「状态」，对于 backtrack 函数来说，会变得参数为 index 和 rest。")]),t._v(" "),n("p",[t._v("我们先尝试抽象出递归框架：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("举个简单的例子，如果 "),n("code",[t._v("nums[i]")]),t._v(" 等于 0 会发生什么？")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("至此，我们可以发现出现了两个完全相同的「状态」的递归函数， "),n("strong",[t._v("这就是重叠子问题，而且只要我们能够找到一个重叠子问题，那一定还存在很多的重叠子问题。")])]),t._v(" "),n("p",[t._v("因此，状态 index 和 和 rest 是可以用备忘录技巧来进行优化的。")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findTargetSumWays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hashmap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rest"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashmap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hashmap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        hashmap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这个解法通过备忘录消除了很多重叠子问题，在效率上有一定的提升，但是这就结束了？")]),t._v(" "),n("h2",{attrs:{id:"动态规划"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),n("p",[t._v("其实，这个问题可以转化为一个子集划分问题，而子集划分问题又是一个典型的背包问题。动态规划总是这么玄学，让人摸不着头脑......")]),t._v(" "),n("p",[t._v("首先，如果我们把 nums 划分成两个子集 A 和 B，分别代表分配 + 的数和分配 - 的数，那么它们和 target 存在如下关系：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("综上，可以推出 "),n("code",[t._v("sum(A) = (target + sum(nums)) / 2")]),t._v("，也就是把原问题转化成："),n("strong",[n("code",[t._v("nums")])]),t._v(" "),n("strong",[t._v("中存在几个子集")]),t._v(" "),n("strong",[n("code",[t._v("A")]),t._v("，使得 "),n("code",[t._v("A")]),t._v(" 中元素的和为")]),t._v(" "),n("strong",[n("code",[t._v("(target + sum(nums)) / 2")])]),t._v("？")]),t._v(" "),n("p",[t._v("类似的子集划分问题我们前文 "),n("a",{attrs:{href:""}},[t._v("经典背包问题：子集划分")]),t._v(" 讲过，现在实现这么一个函数：")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/* 计算 nums 中有几个子集的和为 sum */\nint subsets(int[] nums, int sum) {}\n")])])]),n("p",[t._v("然后，可以这样调用这个函数：")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("int findTargetSumWays(int[] nums, int target) {\n    int sum = 0;\n    for (int n : nums) sum += n;\n    // 这两种情况，不可能存在合法的子集划分\n    if (sum < target || (sum + target) % 2 == 1) {\n        return 0;\n    }\n    return subsets(nums, (sum + target) / 2);\n}\n")])])]),n("p",[t._v("好的，变成背包问题的标准形式：")]),t._v(" "),n("p",[n("strong",[t._v("有一个背包，容量为")]),t._v(" "),n("strong",[n("code",[t._v("sum")]),t._v("****，现在给你")]),t._v(" "),n("strong",[n("code",[t._v("N")])]),t._v(" "),n("strong",[t._v("个物品，第")]),t._v(" "),n("strong",[n("code",[t._v("i")])]),t._v(" "),n("strong",[t._v("个物品的重量为")]),t._v(" "),n("strong",[n("code",[t._v("nums[i - 1]")]),t._v("****（注意")]),t._v(" "),n("strong",[n("code",[t._v("1 <= i <= N")]),t._v("****），每个物品只有一个，请问你有几种不同的方法能够恰好装满这个背包")]),t._v("？")]),t._v(" "),n("p",[t._v("现在，这就是一个正宗的动态规划问题了，下面按照我们一直强调的动态规划套路走流程：")]),t._v(" "),n("p",[n("strong",[t._v("第一步要明确两点，「状态」和「选择」")]),t._v("。")]),t._v(" "),n("p",[t._v("对于背包问题，这个都是一样的，状态就是「背包的容量」和「可选择的物品」，选择就是「装进背包」或者「不装进背包」。")]),t._v(" "),n("p",[n("strong",[t._v("第二步要明确")]),t._v(" "),n("strong",[n("code",[t._v("dp")])]),t._v(" "),n("strong",[t._v("数组的定义")]),t._v("。")]),t._v(" "),n("p",[t._v("按照背包问题的套路，可以给出如下定义：")]),t._v(" "),n("p",[n("code",[t._v("dp[i][j] = x")]),t._v(" 表示，若只在前 "),n("code",[t._v("i")]),t._v(" 个物品中选择，若当前背包的容量为 "),n("code",[t._v("j")]),t._v("，则最多有 "),n("code",[t._v("x")]),t._v(" 种方法可以恰好装满背包。")]),t._v(" "),n("p",[t._v("翻译成我们探讨的子集问题就是，若只在 "),n("code",[t._v("nums")]),t._v(" 的前 "),n("code",[t._v("i")]),t._v(" 个元素中选择，若目标和为 "),n("code",[t._v("j")]),t._v("，则最多有 "),n("code",[t._v("x")]),t._v(" 种方法划分子集。")]),t._v(" "),n("p",[t._v("根据这个定义，显然 "),n("code",[t._v("dp[0][..] = 0")]),t._v("，因为没有物品的话，根本没办法装背包；"),n("code",[t._v("dp[..][0] = 1")]),t._v("，因为如果背包的最大载重为 0，「什么都不装」就是唯一的一种装法。")]),t._v(" "),n("p",[t._v("我们所求的答案就是 "),n("code",[t._v("dp[N][sum]")]),t._v("，即使用所有 "),n("code",[t._v("N")]),t._v(" 个物品，有几种方法可以装满容量为 "),n("code",[t._v("sum")]),t._v(" 的背包。")]),t._v(" "),n("p",[n("strong",[t._v("第三步，根据「选择」，思考状态转移的逻辑")]),t._v("。")]),t._v(" "),n("p",[t._v("回想刚才的 "),n("code",[t._v("dp")]),t._v(" 数组含义，可以根据「选择」对 "),n("code",[t._v("dp[i][j]")]),t._v(" 得到以下状态转移：")]),t._v(" "),n("p",[t._v("如果不把 "),n("code",[t._v("nums[i]")]),t._v(" 算入子集，"),n("strong",[t._v("或者说你不把这第")]),t._v(" "),n("strong",[n("code",[t._v("i")])]),t._v(" "),n("strong",[t._v("个物品装入背包")]),t._v("，那么恰好装满背包的方法数就取决于上一个状态 "),n("code",[t._v("dp[i-1][j]")]),t._v("，继承之前的结果。")]),t._v(" "),n("p",[t._v("如果把 "),n("code",[t._v("nums[i]")]),t._v(" 算入子集，"),n("strong",[t._v("或者说你把这第")]),t._v(" "),n("strong",[n("code",[t._v("i")])]),t._v(" "),n("strong",[t._v("个物品装入了背包")]),t._v("，那么只要看前 "),n("code",[t._v("i - 1")]),t._v(" 个物品有几种方法可以装满 "),n("code",[t._v("j - nums[i-1]")]),t._v(" 的重量就行了，所以取决于状态 "),n("code",[t._v("dp[i-1][j-nums[i-1]]")]),t._v("。")]),t._v(" "),n("p",[t._v("PS：注意我们说的 "),n("code",[t._v("i")]),t._v(" 是从 1 开始算的，而数组 "),n("code",[t._v("nums")]),t._v(" 的索引时从 0 开始算的，所以 "),n("code",[t._v("nums[i-1]")]),t._v(" 代表的是第 "),n("code",[t._v("i")]),t._v(" 个物品的重量，"),n("code",[t._v("j - nums[i-1]")]),t._v(" 就是背包装入物品 "),n("code",[t._v("i")]),t._v(" 之后还剩下的容量。")]),t._v(" "),n("p",[n("strong",[t._v("由于")]),t._v(" "),n("strong",[n("code",[t._v("dp[i][j]")])]),t._v(" "),n("strong",[t._v("为装满背包的总方法数，所以应该以上两种选择的结果求和，得到状态转移方程")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]];\n")])])]),n("p",[t._v("然后，根据状态转移方程写出动态规划算法：")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/* 计算 nums 中有几个子集的和为 sum */\nint subsets(int[] nums, int sum) {\n    int n = nums.length;\n    int[][] dp = new int[n + 1][sum + 1];\n    // base case\n    for (int i = 0; i <= n; i++) {\n        dp[i][0] = 1;\n    }\n\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j <= sum; j++) {\n            if (j >= nums[i-1]) {\n                // 两种选择的结果之和\n                dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]];\n            } else {\n                // 背包的空间不足，只能选择不装物品 i\n                dp[i][j] = dp[i-1][j];\n            }\n        }\n    }\n    return dp[n][sum];\n}\n")])])]),n("p",[t._v("然后，发现这个 "),n("code",[t._v("dp[i][j]")]),t._v(" 只和前一行 "),n("code",[t._v("dp[i-1][..]")]),t._v(" 有关，那么肯定可以优化成一维 "),n("code",[t._v("dp")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/* 计算 nums 中有几个子集的和为 sum */\nint subsets(int[] nums, int sum) {\n    int n = nums.length;\n    int[] dp = new int[sum + 1];\n    // base case\n    dp[0] = 1;\n\n    for (int i = 1; i <= n; i++) {\n        // j 要从后往前遍历\n        for (int j = sum; j >= 0; j--) {\n            // 状态转移方程\n            if (j >= nums[i-1]) {\n                dp[j] = dp[j] + dp[j-nums[i-1]];\n            } else {\n                dp[j] = dp[j];\n            }\n        }\n    }\n    return dp[sum];\n}\n")])])]),n("p",[n("strong",[t._v("对照二维")]),t._v(" "),n("strong",[n("code",[t._v("dp")]),t._v("****，只要把")]),t._v(" "),n("strong",[n("code",[t._v("dp")])]),t._v(" "),n("strong",[t._v("数组的第一个维度全都去掉就行了，唯一的区别就是这里的")]),t._v(" "),n("strong",[n("code",[t._v("j")])]),t._v(" "),n("strong",[t._v("要从后往前遍历，原因如下")]),t._v("：")]),t._v(" "),n("p",[t._v("因为二维压缩到一维的根本原理是，"),n("code",[t._v("dp[j]")]),t._v(" 和 "),n("code",[t._v("dp[j-nums[i-1]]")]),t._v(" 还没被新结果覆盖的时候，相当于二维 "),n("code",[t._v("dp")]),t._v(" 中的 "),n("code",[t._v("dp[i-1][j]")]),t._v(" 和 "),n("code",[t._v("dp[i-1][j-nums[i-1]]")]),t._v("。")]),t._v(" "),n("p",[t._v("那么，我们就要做到："),n("strong",[t._v("在计算新的")]),t._v(" "),n("strong",[n("code",[t._v("dp[j]")])]),t._v(" "),n("strong",[t._v("的时候，****"),n("code",[t._v("dp[j]")])]),t._v(" "),n("strong",[t._v("和")]),t._v(" "),n("strong",[n("code",[t._v("dp[j-nums[i-1]]")])]),t._v(" "),n("strong",[t._v("还是上一轮外层 for 循环的结果")]),t._v("。")]),t._v(" "),n("p",[t._v("如果你从前往后遍历一维 "),n("code",[t._v("dp")]),t._v(" 数组，"),n("code",[t._v("dp[j]")]),t._v(" 显然是没问题的，但是 "),n("code",[t._v("dp[j-nums[i-1]]")]),t._v(" 已经不是上一轮外层 for 循环的结果了，这里就会使用错误的状态，当然得不到正确的答案。")]),t._v(" "),n("p",[t._v("现在，这道题算是彻底解决了。")]),t._v(" "),n("p",[t._v("总结一下，回溯算法虽好，但是复杂度高，即便消除一些冗余计算，也只是「剪枝」，没有本质的改进。而动态规划就比较玄学了，经过各种改造，从一个加减法问题变成子集问题，又变成背包问题，经过各种套路写出解法，又搞出状态压缩，还得反向遍历。")]),t._v(" "),n("p",[t._v("现在我都搞不清楚自己是来干嘛的了。嗯，这也许就是动态规划的魅力吧。")])])}),[],!1,null,null,null);s.default=e.exports}}]);