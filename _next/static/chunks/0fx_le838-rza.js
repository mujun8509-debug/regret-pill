(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,s)=>{t.exports=e.r(76562)},55770,e=>{"use strict";e.i(47167);let t=`你是一名专业的决策分析系统。请对用户的输入进行结构化分析，提取关键信息并分类。

分析维度：
1. 事件识别：提取核心后悔事件
2. 选择对比：区分"当时的选择"与"期望的选择"
3. 情绪识别：识别主要情绪和次要情绪
4. 强度评估：评估情绪强度（1-10）
5. 风险检测：识别是否存在高风险内容

输出格式（严格JSON）：
{
  "event": "事件摘要（15字以内）",
  "original_choice": "当时的选择",
  "desired_choice": "期望的选择",
  "emotion": "主要情绪",
  "category": "分类（学业/感情/家庭/职业/金钱/人际/其他）",
  "risk_level": "normal或high",
  "emotion_analysis": {
    "primary": "主要情绪",
    "secondary": "次要情绪",
    "intensity": 7
  }
}

注意：
1. risk_level为high的情况仅包括：自杀、自残、报复、杀人、严重抑郁等极端内容
2. 保持客观中立，不做价值判断
3. 情绪强度基于文本表达的程度评估`,s=`你是一名路径分析系统。基于用户提供的后悔事件，生成三条分析路径。

输入信息：
- 后悔事件：{regretText}
- 当时选择：{originalChoice}
- 期望选择：{desiredChoice}

路径定义：
1. 现实线（reality）：已发生的选择，分析其实际收益与代价
2. 期望线（dream）：用户期望的选择，分析其潜在收益与代价
3. 隐藏线（hidden）：基于前两者的第三种可能性，通常是折中或创新方案

输出格式（严格JSON）：
{
  "choices": [
    {
      "id": "reality",
      "title": "现实线",
      "choice": "路径描述（客观陈述）",
      "gain": "可能收益（使用'可能'、'也许'等不确定表述）",
      "cost": "可能代价（使用'可能'、'也许'等不确定表述）"
    },
    {
      "id": "dream",
      "title": "期望线",
      "choice": "路径描述（客观陈述）",
      "gain": "可能收益（使用'可能'、'也许'等不确定表述）",
      "cost": "可能代价（使用'可能'、'也许'等不确定表述）"
    },
    {
      "id": "hidden",
      "title": "隐藏线",
      "choice": "路径描述（客观陈述）",
      "gain": "可能收益（使用'可能'、'也许'等不确定表述）",
      "cost": "可能代价（使用'可能'、'也许'等不确定表述）"
    }
  ]
}

原则：
1. 不使用"你"，改用"用户"或直接描述情境
2. 每条路径必须同时包含收益和代价
3. 隐藏线要有创意，不能是简单的折中
4. 所有表述使用不确定语气，避免绝对化`,a=`你是一名路径推演系统。基于用户选择的路径，进行时间轴推演分析。

输入信息：
- 后悔事件：{regretText}
- 选择路径：{choiceTitle}
- 路径描述：{choiceDescription}

推演维度：
1. 选择初期：该选择带来的即时影响
2. 机会窗口：可能出现的新机会
3. 新挑战：该路径必然伴随的新问题
4. 长期状态：数年后的可能状态
5. 可能收获：该路径的潜在收益
6. 无法解决的问题：该路径无法规避的局限
7. 回到现实：基于当前状况的可执行建议

输出格式（严格JSON）：
{
  "story": {
    "beginning": "选择初期的客观描述（2-3句话）",
    "opportunity": "机会窗口的客观描述（2-3句话）",
    "newProblems": "新挑战的客观描述（2-3句话）",
    "yearsLater": "长期状态的客观描述（2-3句话）",
    "gains": "可能收获的客观描述（2-3句话）",
    "unsolvedProblems": "无法解决的问题的客观描述（2-3句话）",
    "nowWhat": "回到现实的可执行建议（具体、可操作）"
  }
}

原则：
1. 不使用"你"，改用"该选择"、"此路径"等客观表述
2. 每个阶段保持2-3句话，简洁明了
3. 使用"可能"、"也许"、"大概率"等不确定表述
4. 最终必须回到现实，给出具体可执行的建议`,r=`你是一名基于循证心理学框架的分析系统。请对用户的后悔事件进行结构化心理分析。

【重要声明】
本分析仅提供心理学视角的自助思考框架，不构成专业心理咨询或诊断。如遇严重心理困扰，建议寻求专业帮助。

输入信息：
- 后悔事件：{regretText}
- 当时选择：{originalChoice}
- 期望选择：{desiredChoice}
- 选择路径：{choiceTitle}

分析框架（基于 CBT + ACT + EFT 整合模型）：

1. 情绪解构（EFT 框架）
   - 表层情绪：用户直接表达的情绪
   - 深层情绪：被掩盖的脆弱情绪（如羞耻、恐惧、孤独）
   - 情绪功能：这种情绪在试图保护什么

2. 思维-情绪-行为链条（CBT）
   - 触发事件 → 自动思维 → 情绪反应 → 行为模式
   - 识别核心信念（如"我不够好"、"我必须完美"）

3. 反事实思维分析
   - 上行反事实："如果当时…就好了"（导致后悔）
   - 下行反事实："幸好没有…"（被忽略的保护性思维）
   - 反刍频率：反复思考的倾向程度

4. 认知偏差识别
   - 幸存者偏差、机会成本高估、理想化过去等

5. 心理灵活性评估（ACT）
   - 经验性回避：逃避痛苦的程度
   - 认知融合：被想法控制的程度
   - 价值清晰度：是否清楚自己真正在意什么

6. 价值澄清与承诺行动
   - 从后悔中反推出的深层价值
   - 当下可行的一小步（基于价值的具体行动）

输出格式（严格JSON）：
{
  "psychological_analysis": {
    "emotion_deconstruction": {
      "surface": "表层情绪（如愤怒、悲伤）",
      "deep": "深层情绪（如羞耻、恐惧、孤独）",
      "function": "情绪的功能（在试图保护什么）"
    },
    "cbt_chain": {
      "trigger": "触发事件",
      "automatic_thought": "自动思维",
      "emotion_response": "情绪反应",
      "behavior_pattern": "行为模式",
      "core_belief": "核心信念"
    },
    "counterfactual": {
      "upward": "上行反事实思维",
      "downward": "下行反事实思维（被忽略的保护性思维）",
      "rumination_level": "反刍程度（低/中/高）"
    },
    "cognitive_biases": [
      "认知偏差1",
      "认知偏差2"
    ],
    "psychological_flexibility": {
      "experiential_avoidance": "经验性回避程度（低/中/高）",
      "cognitive_fusion": "认知融合程度（低/中/高）",
      "value_clarity": "价值清晰度（清晰/模糊/混乱）"
    },
    "value_clarification": {
      "core_values": ["核心价值1", "核心价值2"],
      "committed_action": "基于价值的当下可行的一小步"
    }
  },
  "feedback": "综合分析总结（3-5句话，温暖、赋能导向）",
  "suggestions": [
    "建议1（具体、可执行、基于心理学原理）",
    "建议2（具体、可执行、基于心理学原理）",
    "建议3（具体、可执行、基于心理学原理）"
  ],
  "emotion_breakdown": {
    "primary": "主要情绪",
    "secondary": "次要情绪",
    "intensity": 7
  }
}

原则：
1. 不使用"你"、"我"等主语，保持客观第三人称
2. 所有分析使用"可能"、"也许"、"倾向于"等不确定表述
3. 避免诊断性语言（如"症状"、"障碍"），改用描述性语言
4. 分析导向赋能，帮助用户理解自己而非贴标签
5. 最终必须回到当下可执行的行动建议`,i=`你是一名分析总结系统。基于用户的后悔事件和选择路径，生成结构化分析报告。

输入信息：
- 后悔事件：{regretText}
- 选择路径：{choiceTitle}
- 分析风格：{feedbackStyle}

分析风格定义：
- rational（理性拆解）：侧重逻辑分析、利弊权衡、数据支撑。语言冷静、结构化，使用"从数据角度看"、"概率上"等表述
- emotional（情感梳理）：侧重情绪识别、感受整理、心理机制。语言温暖、有共鸣，适当引用经典文学句子、歌词或网络流行文案来增强共情。引用需自然融入，不突兀。引用后需有1-2句解读，连接用户情境
- realistic（现实对照）：侧重实际情况、可行性分析、资源评估。语言务实、直接，使用"考虑到现实条件"、"实际操作中"等表述

emotional风格引用原则：
1. 每次分析选择1-2条最贴合情境的引用
2. 引用来源可以是：古典诗词、现代文学、歌词、电影台词、网络热评、抖音/小红书文案等
3. 引用后需有1-2句解读，连接用户情境
4. 不堆砌引用，自然融入分析文本中
5. 若找不到合适引用，可不引用，保持温暖共情的语言风格即可

输出格式（严格JSON）：
{
  "feedback": "分析总结（基于选择的风格。emotional风格可包含引用和解读，3-5句话）",
  "suggestions": [
    "建议1（具体、可执行、无主语）",
    "建议2（具体、可执行、无主语）",
    "建议3（具体、可执行、无主语）"
  ],
  "cognitive_biases": [
    "识别出的认知偏差1（如：幸存者偏差）",
    "识别出的认知偏差2（如：机会成本高估）"
  ],
  "emotion_breakdown": {
    "primary": "主要情绪",
    "secondary": "次要情绪",
    "intensity": 7
  }
}

通用原则：
1. 不使用"你"、"我"等主语，保持客观第三人称
2. 反馈内容基于选择的分析风格调整侧重点
3. 建议必须具体、可执行，避免空泛
4. 认知偏差识别要准确，基于常见心理学概念
5. 情绪分解要基于文本分析，给出具体情绪标签`,o=["想死","不想活","自杀","自残","报复","杀人","伤害别人","活不下去","严重抑郁","毁掉别人"],n={4:"死",si:"死",zi:"自",sha:"杀",can:"残",bao:"报",ren:"人",shang:"伤",huo:"活",yi:"抑",hui:"毁"};function c(e){return e.replace(/[\s\u200B\u200C\u200D\uFEFF]+/g,"").replace(/[.,!?;，。！？；]/g,"").replace(/(\S)\1{2,}/g,"$1$1").toLowerCase()}let l=[/ignore\s+(previous|above|all)\s+instructions?/gi,/disregard\s+(previous|above|all)\s+instructions?/gi,/forget\s+(previous|above|all)\s+instructions?/gi,/你现在的?角色?是/gi,/system\s*:/gi,/user\s*:/gi,/assistant\s*:/gi,/<\|im_start\|>/gi,/<\|im_end\|>/gi,/{\s*"role"\s*:\s*"system"/gi];function d(e){for(let t of l)if(t.test(e))return{detected:!0,reason:"输入内容包含可能篡改 AI 指令的语句，已被拦截"};return{detected:!1,reason:""}}function u(e,t){let s=t.replace(/[<>{}\[\]|\\`]/g,"").trim();return`[用户输入:${e}]
${s}
[用户输入结束]`}let m=[{text:"人生如逆旅，我亦是行人",source:"苏轼《临江仙》",tags:["漂泊","人生","释然","孤独"],type:"classic"},{text:"此情可待成追忆，只是当时已惘然",source:"李商隐《锦瑟》",tags:["遗憾","追忆","错过","感情"],type:"classic"},{text:"人生若只如初见，何事秋风悲画扇",source:"纳兰性德《木兰花令》",tags:["遗憾","初见","感情","变质"],type:"classic"},{text:"我们终此一生，就是要摆脱他人的期待，找到真正的自己",source:"伍绮诗《无声告白》",tags:["自我","期待","成长","选择"],type:"classic"},{text:"世界上只有一种真正的英雄主义，那就是认清生活的真相后依然热爱生活",source:"罗曼·罗兰",tags:["现实","勇气","接受","生活"],type:"classic"},{text:"过去都是假的，回忆没有归路",source:"马尔克斯《百年孤独》",tags:["放下","回忆","过去","执念"],type:"classic"},{text:"生命中真正重要的不是你遭遇了什么，而是你记住了什么，又是如何铭记的",source:"马尔克斯《百年孤独》",tags:["记忆","经历","成长","意义"],type:"classic"},{text:"The unexamined life is not worth living",source:"苏格拉底",tags:["反思","人生","意义","审视"],type:"classic"},{text:"What does not kill me makes me stronger",source:"尼采",tags:["韧性","成长","痛苦","坚强"],type:"classic"},{text:"In the middle of difficulty lies opportunity",source:"爱因斯坦",tags:["转折","机遇","困境","希望"],type:"classic"},{text:"你站在桥上看风景，看风景的人在楼上看你。明月装饰了你的窗子，你装饰了别人的梦",source:"卞之琳《断章》",tags:["错过","视角","暗恋","距离"],type:"classic"},{text:"我本可以忍受黑暗，如果我不曾见过太阳",source:"艾米莉·狄金森",tags:["失去","对比","痛苦","曾经拥有"],type:"classic"},{text:"故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方",source:"张嘉佳《从你的全世界路过》",tags:["离别","感情","遗憾","结局"],type:"modern"},{text:"每个人的生命里，都有最艰难的那一年，将人生变得美好而辽阔",source:"《岛上书店》",tags:["困境","成长","转折","希望"],type:"modern"},{text:"愿你出走半生，归来仍是少年",source:"网络",tags:["成长","初心","时间","自我"],type:"modern"},{text:"人总要跟自己握不住的东西说再见",source:"抖音热评",tags:["放下","失去","接受","告别"],type:"modern"},{text:"后来才明白，不是所有的喜欢都有结果",source:"网易云热评",tags:["遗憾","感情","暗恋","无果"],type:"modern"},{text:"成年人的崩溃，从一句'我没事'开始",source:"网络",tags:["压抑","坚强","伪装","情绪"],type:"modern"},{text:"你羡慕的生活背后，都有你熬不了的苦",source:"网络",tags:["羡慕","代价","现实","选择"],type:"modern"},{text:"人生没有白走的路，每一步都算数",source:"李宗盛",tags:["成长","经历","肯定","当下"],type:"modern"},{text:"原来长大就是，把'为什么'改成'算了'",source:"抖音文案",tags:["妥协","接受","成长","无奈"],type:"modern"},{text:"我一直觉得繁体字很高级，因为'愛'中间有个心",source:"抖音文案",tags:["感情","细节","文字","怀旧"],type:"modern"},{text:"后来，我总算学会了如何去爱，可惜你早已远去，消失在人海",source:"刘若英《后来》",tags:["遗憾","错过","成长","感情"],type:"lyric"},{text:"如果当时我们能不那么倔强，现在也不那么遗憾",source:"五月天《后来的我们》",tags:["倔强","遗憾","如果","感情"],type:"lyric"},{text:"我最大的遗憾，是你的遗憾与我有关",source:"陈奕迅《我们》",tags:["遗憾","关联","感情","错过"],type:"lyric"},{text:"得不到的永远在骚动，被偏爱的都有恃无恐",source:"陈奕迅《红玫瑰》",tags:["欲望","偏爱","感情","心理"],type:"lyric"},{text:"像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉",source:"毛不易《像我这样的人》",tags:["迷茫","自我","平凡","困惑"],type:"lyric"},{text:"岁月是一场有去无回的旅行，好的坏的都是风景",source:"金玟岐《岁月神偷》",tags:["时间","接受","经历","成长"],type:"lyric"},{text:"故事的小黄花，从出生那年就飘着",source:"周杰伦《晴天》",tags:["回忆","青春","美好","时光"],type:"lyric"},{text:"醒醒吧，一切只是个刚好而已，而你却爱得如此认真",source:"抖音",tags:["清醒","感情","认真","错付"],type:"net"},{text:"我从来不恨谁，只恨自己无能",source:"抖音",tags:["自责","无力","悔恨","自我"],type:"net"},{text:"人情若比初相识，到底终无怨恨心",source:"抖音/古诗化用",tags:["初见","缘分","怨恨","释然"],type:"net"},{text:"故事鲜艳，而缘分却太浅",source:"抖音",tags:["遗憾","缘分","短暂","美好"],type:"net"},{text:"所以白月光的杀伤力到底有多大呢",source:"抖音",tags:["白月光","初恋","执念","难忘"],type:"net"},{text:"最好的承诺，不是爱你一万年，而是根本不需要承诺",source:"抖音文案",tags:["承诺","现实","感情","清醒"],type:"net"},{text:"我以为爱情可以填满人生的遗憾，然而制造更多遗憾的，却偏偏是爱情",source:"抖音/张爱玲化用",tags:["爱情","遗憾","讽刺","现实"],type:"net"},{text:"每个喜欢文字的孩子，都有一段一碰即痛的回忆",source:"抖音文案",tags:["文字","回忆","敏感","伤痛"],type:"net"},{text:"学着做自己，并优雅地放手所有不属于我的东西",source:"抖音文案",tags:["放手","自我","优雅","接受"],type:"net"},{text:"世界上，没有未完的故事，只有未死的心",source:"抖音文案",tags:["执念","放下","心死","结局"],type:"net"},{text:"不甘心的甘心，渐如野草般铺满整个荒原",source:"抖音/原创诗",tags:["不甘心","执念","蔓延","情绪"],type:"net"},{text:"最初不相识，最终不相认",source:"抖音文案",tags:["陌生","结局","遗憾","过客"],type:"net"},{text:"面朝大海，春暖花开",source:"海子",tags:["希望","美好","向往","新生"],type:"poem"},{text:"黑夜给了我黑色的眼睛，我却用它寻找光明",source:"顾城《一代人》",tags:["黑暗","光明","寻找","希望"],type:"poem"},{text:"假如生活欺骗了你，不要悲伤，不要心急，忧郁的日子里须要镇静",source:"普希金",tags:["欺骗","镇静","希望","等待"],type:"poem"},{text:"卑鄙是卑鄙者的通行证，高尚是高尚者的墓志铭",source:"北岛《回答》",tags:["现实","讽刺","社会","价值观"],type:"poem"}],g={analyze:JSON.stringify({event:"放弃考研选择就业",original_choice:"直接就业",desired_choice:"考研深造",emotion:"遗憾",category:"职业",risk_level:"normal",emotion_analysis:{primary:"遗憾",secondary:"焦虑",intensity:7}}),choices:JSON.stringify({choices:[{id:"reality",title:"现实线",choice:"直接就业，进入互联网公司做程序员，积累工作经验",gain:"获得稳定的收入和职业发展，积累行业经验和人脉资源",cost:"可能面临工作压力大、加班多的问题，职业发展路径相对固定"},{id:"dream",title:"期望线",choice:"选择考研，进入理想大学深造，提升学历背景",gain:"可能获得更高的学历，进入更好的公司，职业发展空间更大",cost:"可能面临考研压力、经济负担，毕业后可能比同龄人晚几年进入职场"},{id:"hidden",title:"隐藏线",choice:"先就业积累经验，同时利用业余时间准备在职研究生考试",gain:"兼顾工作和学习，既有收入又能追求更高学历，风险相对较低",cost:"可能需要平衡工作和学习的时间，压力较大，成功率可能较低"}]}),simulate:JSON.stringify({story:{beginning:"选择刚发生时，可能会感到有些迷茫和不安。进入职场意味着需要适应新的环境，面对新的挑战。",opportunity:"一段时间后，可能会发现工作带来了很多新机会。可以接触到实际的项目，学习到实用的技能。",newProblems:"新的问题也会随之而来。工作压力可能比想象的要大，加班成为常态，可能会感到疲惫和焦虑。",yearsLater:"几年后，可能已经成为了一名经验丰富的程序员，收入稳定，生活相对安逸。但可能也会感到有些迷茫。",gains:"这条路可能带来的收获包括：稳定的收入、丰富的工作经验、实用的技能、一定的社会地位。",unsolvedProblems:"这条路也无法解决的问题：工作压力、职业瓶颈、对未来的迷茫、缺乏深度思考的时间。",nowWhat:"回到现实，现在可以做的是：重新审视自己的职业目标，制定学习计划，寻找工作与生活的平衡。"}}),feedback:JSON.stringify({feedback:"从理性角度分析，两种选择各有利弊。直接就业获得了即时收益，但可能牺牲了长期发展空间；考研则相反。关键在于评估个人的风险承受能力和长期目标。",suggestions:["评估当前的职业状况，明确未来3-5年的职业目标","制定学习计划，考虑在职深造的可能性","寻找工作与生活的平衡，培养新的兴趣爱好"],cognitive_biases:["幸存者偏差：只看到了考研成功的案例，忽略了失败的案例","机会成本高估：可能高估了未选择路径的收益"],emotion_breakdown:{primary:"遗憾",secondary:"焦虑",intensity:7}}),psychological:JSON.stringify({psychological_analysis:{emotion_deconstruction:{surface:"遗憾和焦虑",deep:"对自我能力的怀疑和对未来的恐惧",function:"这种情绪在试图保护，避免未来再次做出类似的选择"},cbt_chain:{trigger:"回想当时的选择",automatic_thought:"如果当时选择了另一条路，现在一定会更好",emotion_response:"遗憾、焦虑、自我怀疑",behavior_pattern:"反复回想、难以释怀",core_belief:"我不够好，我总是做错选择"},counterfactual:{upward:"如果当时考研了，现在可能会有更好的发展",downward:"幸好当时选择了就业，至少有了稳定的收入和经济基础",rumination_level:"中"},cognitive_biases:["幸存者偏差","机会成本高估"],psychological_flexibility:{experiential_avoidance:"中",cognitive_fusion:"中",value_clarity:"模糊"},value_clarification:{core_values:["成长","自主","安全感"],committed_action:"花30分钟列出当前工作中可以学习的3个方向，制定一个为期3个月的小目标"}},feedback:"综合分析来看，遗憾情绪源于对未选择路径的理想化想象。实际上每条路径都有其独特的价值和挑战，重要的是从当前状态出发，找到与内心价值一致的行动方向。",suggestions:['练习"下行反事实"思维：列出当前选择带来的3个积极结果',"明确自己的核心价值，以此为依据制定下一步计划","接纳过去的决定，将注意力转向当下可控的行动"],emotion_breakdown:{primary:"遗憾",secondary:"焦虑",intensity:7}})};function y(e){return g[e]||g.analyze}async function h(e,t,s){try{let a=[];t&&a.push({role:"system",content:t}),a.push({role:"user",content:e});let r=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer sk-a82d96ac8f254a04b3ded6f5a991fe94"},body:JSON.stringify({model:"deepseek-v4-pro",messages:a,temperature:.7,max_tokens:2e3})});if(!r.ok){let e=await r.json().catch(()=>({})),t=e.error?.message||`API 请求失败: ${r.status}`;return console.warn(`[ClientAI] API 调用失败: ${t}，使用模拟数据`),{content:y(s||"analyze"),error:`API 暂时不可用，已切换到演示模式: ${t}`}}let i=await r.json();return{content:i.choices?.[0]?.message?.content||""}}catch(t){let e=t instanceof Error?t.message:"未知错误";return console.warn(`[ClientAI] AI 调用失败: ${e}，使用模拟数据`),{content:y(s||"analyze"),error:`AI 服务暂时不可用，已切换到演示模式: ${e}`}}}function p(e,t){try{let t=e.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();return{data:JSON.parse(t)}}catch{return console.error("[ClientAI] 解析 AI 响应失败，使用降级数据"),{data:t,error:"解析 AI 响应失败，已使用演示数据"}}}async function x(e,s,a,r){let i=`${e} ${s} ${a}`,l=d(i);if(l.detected)throw Error(l.reason);if(function(e){let t=c(e),s=function(e){let t=e;for(let[e,s]of Object.entries(n))t=t.replace(RegExp(e,"gi"),s);return t}(t),a=[];for(let e of o){let r=c(e);(t.includes(r)||s.includes(r))&&a.push(e)}return{isHighRisk:a.length>0,matchedKeywords:a}}(i).isHighRisk)return{event:e,original_choice:s,desired_choice:a,emotion:"需要关注",category:"其他",risk_level:"high",emotion_analysis:{primary:"需要关注",secondary:"未知",intensity:0}};let m=`
${u("后悔事件",e)}
${u("当时的选择",s)}
${u("想重新选择",a)}
期望的分析风格：${r}

请分析这个后悔事件，用JSON格式返回结果。
`,{content:g,error:x}=await h(m,t,"analyze"),{data:f,error:v}=p(g,JSON.parse(y("analyze")));return f}async function f(e,t,a){let r=d(`${e} ${t} ${a}`);if(r.detected)throw Error(r.reason);let i=`
${u("后悔事件",e)}
${u("当时选择",t)}
${u("期望选择",a)}

请基于以上信息生成三条分析路径，用JSON格式返回结果。
`,{content:o,error:n}=await h(i,s,"choices"),{data:c,error:l}=p(o,JSON.parse(y("choices")));return c}async function v(e,t,s){let r=d(`${e} ${t} ${s}`);if(r.detected)throw Error(r.reason);let i=`
${u("后悔事件",e)}
${u("选择路径",t)}
${u("路径描述",s)}

请基于以上信息进行时间轴推演分析，用JSON格式返回结果。
`,{content:o}=await h(i,a,"simulate"),{data:n}=p(o,JSON.parse(y("simulate")));return n}async function b(e,t,s){let a=d(`${e} ${t}`);if(a.detected)throw Error(a.reason);let r=`
${u("后悔事件",e)}
${u("选择路径",t)}
分析风格：${s}

请基于以上信息生成结构化分析报告，用JSON格式返回结果。
`;if("emotional"===s){let t=function(e,t=2){return m.map(t=>{let s=t.tags.filter(t=>e.some(e=>t.includes(e)||e.includes(t))).length;return{quote:t,score:s}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,t).map(e=>e.quote)}(function(e){let t=new Set,s=e.toLowerCase();for(let[e,a]of Object.entries({表白:["感情","遗憾","错过","暗恋"],暗恋:["暗恋","遗憾","感情","错过"],分手:["离别","感情","遗憾","痛苦"],失恋:["离别","感情","遗憾","痛苦"],喜欢:["感情","遗憾","暗恋"],爱:["感情","遗憾","错过"],在一起:["感情","遗憾","错过"],错过:["遗憾","错过","如果"],遗憾:["遗憾","错过","如果"],后悔:["遗憾","悔恨","如果"],考研:["选择","成长","困境"],高考:["选择","成长","困境"],工作:["选择","现实","困境"],辞职:["选择","现实","勇气"],跳槽:["选择","现实","勇气"],失业:["困境","无力","迷茫"],父母:["家庭","遗憾","时间"],家人:["家庭","遗憾","时间"],离婚:["离别","感情","痛苦"],结婚:["选择","感情","现实"],钱:["现实","选择","困境"],投资:["选择","现实","遗憾"],买房:["选择","现实","压力"],朋友:["人际","遗憾","离别"],吵架:["人际","情绪","遗憾"],误会:["人际","遗憾","错过"],自卑:["自我","无力","成长"],害怕:["无力","恐惧","勇气"],焦虑:["焦虑","压力","迷茫"],迷茫:["迷茫","困惑","选择"],孤独:["孤独","漂泊","人生"],压力:["压力","焦虑","困境"],痛苦:["痛苦","伤害","疗愈"],难过:["痛苦","伤感","情绪"],伤心:["痛苦","伤感","情绪"],累:["疲惫","压力","困境"],放弃:["放弃","遗憾","选择"],坚持:["韧性","成长","坚强"],勇敢:["勇气","成长","自我"],梦想:["梦想","现实","选择"],现实:["现实","妥协","接受"],时间:["时间","遗憾","成长"],过去:["过去","回忆","放下"],回忆:["回忆","过去","怀念"],如果:["如果","遗憾","假设"],当初:["如果","遗憾","假设"],曾经:["回忆","过去","曾经拥有"],现在:["当下","接受","现实"],未来:["希望","向往","新生"],成长:["成长","蜕变","经历"],改变:["改变","成长","选择"],接受:["接受","释然","放下"],放下:["放下","释然","接受"],释怀:["释然","放下","接受"],原谅:["释然","放下","疗愈"],理解:["理解","释然","成长"],明白:["清醒","成长","理解"],懂得:["理解","成长","清醒"]}))s.includes(e)&&a.forEach(e=>t.add(e));return 0===t.size?["遗憾","成长","选择"]:Array.from(t)}(e),3);if(t.length>0){let e=t.map(e=>{let t=e.source?`（${e.source}）`:"";return`「${e.text}」${t}`}).join("\n");r+=`
【动态匹配引用】根据用户输入内容，以下引用与情境高度相关，优先选择使用：
${e}

注意：以上仅为推荐引用，AI 可根据实际分析需要选择使用或不使用，也可从已有知识库中选择更合适的引用。`}}let{content:o}=await h(r,i,"feedback"),{data:n}=p(o,JSON.parse(y("feedback")));return n}async function N(e,t,s,a){let i=d(`${e} ${t} ${s} ${a}`);if(i.detected)throw Error(i.reason);let o=`
${u("后悔事件",e)}
${u("当时选择",t)}
${u("期望选择",s)}
${u("选择路径",a)}

请基于以上信息进行结构化心理分析，用JSON格式返回结果。
`,{content:n}=await h(o,r,"psychological"),{data:c}=p(n,JSON.parse(y("psychological")));return c}e.s(["clientAnalyze",0,x,"clientChoices",0,f,"clientFeedback",0,b,"clientPsychological",0,N,"clientSimulate",0,v],55770)},77391,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(18566),r=e.i(55770);e.s(["default",0,function(){let e=(0,a.useRouter)(),[i,o]=(0,s.useState)(!1),[n,c]=(0,s.useState)(""),[l,d]=(0,s.useState)({regretText:"",originalChoice:"",desiredChoice:"",analysisStyle:"rational"}),u=async t=>{t.preventDefault(),o(!0),c("");try{localStorage.setItem("regret_data",JSON.stringify(l));let t=await (0,r.clientAnalyze)(l.regretText,l.originalChoice,l.desiredChoice,l.analysisStyle);if("high"===t.risk_level){localStorage.setItem("regret_high_risk","true"),e.push("/result");return}let s=await (0,r.clientChoices)(l.regretText,l.originalChoice,l.desiredChoice);localStorage.setItem("regret_analysis",JSON.stringify(t)),localStorage.setItem("regret_choices",JSON.stringify(s)),e.push("/choices")}catch(e){c(e instanceof Error?e.message:"提交失败，请重试")}finally{o(!1)}};return(0,t.jsxs)("main",{id:"main-content",className:"dark-container min-h-screen flex flex-col",children:[(0,t.jsx)("div",{className:"w-full dark-nav",children:(0,t.jsxs)("div",{className:"max-w-2xl mx-auto px-4 py-4 flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("button",{onClick:()=>e.push("/"),style:{color:"var(--text-muted)"},className:"hover:text-white transition-colors",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{style:{fontFamily:"var(--font-display)",fontSize:"0.9375rem",fontWeight:600,color:"var(--text-primary)"},children:"输入分析内容"}),(0,t.jsx)("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)",marginTop:"0.25rem"},children:"步骤 1/3"})]})]}),(0,t.jsxs)("div",{className:"step-indicator",children:[(0,t.jsx)("div",{className:"step-dot active"}),(0,t.jsx)("div",{className:"step-dot"}),(0,t.jsx)("div",{className:"step-dot"})]})]})}),(0,t.jsx)("div",{className:"flex-1 px-4 py-10",children:(0,t.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,t.jsxs)("form",{onSubmit:u,className:"space-y-6",children:[(0,t.jsxs)("div",{className:"dark-surface p-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-5",children:[(0,t.jsx)("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",style:{background:"var(--accent-muted)",color:"var(--accent)",fontFamily:"var(--font-mono)"},children:"1"}),(0,t.jsx)("label",{className:"dark-section-title",children:"后悔事件"})]}),(0,t.jsx)("textarea",{required:!0,value:l.regretText,onChange:e=>d({...l,regretText:e.target.value}),className:"dark-input",rows:4,placeholder:"描述一件让你后悔的事，例如：大三时放弃了考研机会，选择直接就业..."})]}),(0,t.jsxs)("div",{className:"dark-surface p-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-5",children:[(0,t.jsx)("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",style:{background:"var(--accent-muted)",color:"var(--accent)",fontFamily:"var(--font-mono)"},children:"2"}),(0,t.jsx)("label",{className:"dark-section-title",children:"当时的选择"})]}),(0,t.jsx)("textarea",{required:!0,value:l.originalChoice,onChange:e=>d({...l,originalChoice:e.target.value}),className:"dark-input",rows:3,placeholder:"你当时实际做了什么选择？"})]}),(0,t.jsxs)("div",{className:"dark-surface p-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-5",children:[(0,t.jsx)("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",style:{background:"var(--accent-muted)",color:"var(--accent)",fontFamily:"var(--font-mono)"},children:"3"}),(0,t.jsx)("label",{className:"dark-section-title",children:"期望的选择"})]}),(0,t.jsx)("textarea",{required:!0,value:l.desiredChoice,onChange:e=>d({...l,desiredChoice:e.target.value}),className:"dark-input",rows:3,placeholder:"如果重来，你希望怎么选择？"})]}),(0,t.jsxs)("div",{className:"dark-surface p-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-5",children:[(0,t.jsx)("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",style:{background:"var(--accent-muted)",color:"var(--accent)",fontFamily:"var(--font-mono)"},children:"4"}),(0,t.jsx)("label",{className:"dark-section-title",children:"分析风格"})]}),(0,t.jsx)("div",{className:"choice-grid",children:[{value:"rational",label:"理性拆解",desc:"逻辑分析，利弊权衡"},{value:"emotional",label:"情感梳理",desc:"情绪识别，感受整理"},{value:"realistic",label:"现实对照",desc:"实际情况，可行性分析"}].map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>d({...l,analysisStyle:e.value}),className:`dark-option-card ${l.analysisStyle===e.value?"selected":""}`,"aria-pressed":l.analysisStyle===e.value,role:"radio","aria-checked":l.analysisStyle===e.value,children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,t.jsx)("p",{style:{fontFamily:"var(--font-display)",fontSize:"0.9375rem",fontWeight:600,color:l.analysisStyle===e.value?"var(--accent)":"var(--text-primary)"},children:e.label}),(0,t.jsx)("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e.desc})]})},e.value))})]}),n&&(0,t.jsx)("div",{className:"p-4 rounded-lg",style:{background:"rgba(220, 38, 38, 0.1)",border:"1px solid rgba(220, 38, 38, 0.2)"},children:(0,t.jsx)("p",{style:{fontSize:"0.875rem",color:"#EF4444"},children:n})}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 pt-2",children:[(0,t.jsx)("button",{type:"submit",disabled:i,className:"dark-btn-primary w-full max-w-xs",children:i?(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"loading-ring",style:{width:"18px",height:"18px",borderWidth:"2px"}}),"分析中..."]}):(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})}),"生成分析报告"]})}),(0,t.jsx)("p",{style:{fontSize:"0.8125rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:"分析过程约需 10-20 秒"})]})]})})})]})}])}]);