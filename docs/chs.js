/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "10 exterminated worlds are required to ascend for one galaxy. The formula for further gain is floor(x^(x/10 - sqrt(x/10))). When you perform an ascension, everything up to the point that you unlocked galaxies is reset. The ONLY things                     other than achievements that you keep after your first ascension are": "一个星系需要 10 个已灭绝的世界才能上升。 进一步增益的公式是 floor(x^(x/10 - sqrt(x/10)))。 当你执行提升时，直到你解锁星系的所有东西都会被重置。 在你第一次扬升之后，除了成就之外，你唯一能保持的东西是",
    "(more sections will appear here as you progress": "（随着您的进展，更多部分将出现在此处",
    "(the upgrade that unlocks galaxies), the prestige autobuyer, and the fast/bulk/advanced autobuyer upgrades (but you still need to buy": "（解锁星系的升级），声望自动购买，以及快速/批量/高级自动购买升级（但你仍然需要购买",
    "again before you can use autobuyers).": "在你可以使用自动购买之前再次）。",
    "All tabs (buildings, construction, time dimensions, time upgrades, and autobuyers) stay unlocked.": "所有选项卡（建筑物、建筑、时间维度、时间升级和自动购买者）保持解锁状态。",
    "Astral brick production is square rooted, but during astral enslavement, you produce Void Research at the same base rate (sqrt(corpse_production^0.2)).": "星界砖的生产是平方根的，但在星界奴役期间，你以相同的基本速率生产虚空研究 (sqrt(尸体生产^0.2))。",
    "Astral bricks": "星体砖",
    "AUTOBUYERS": "汽车买家",
    "Buildings": "建筑物",
    "BUILDINGS": "建筑",
    "CONSTRUCTION": "构造",
    "Construction upgrades": "建筑升级",
    "Corpses": "尸体",
    "Cosmogenesis": "宇宙发生",
    "Cost multipliers by dimension tier: 10, 100, 100, 1000.": "按维度层的成本乘数：10、100、100、1000。",
    "Cost multipliers by unit tier (first tier = zombies): 100, 1e4, 1e4, 1e6, 1e10, 1e11, 1e12, 1e15.": "单位层的成本乘数（第一层 = 僵尸）：100、1e4、1e4、1e6、1e10、1e11、1e12、1e15。",
    "DEAD SUN": "死太阳",
    "Dead Sun upgrades are purchased with nekro-photons and mostly unlock new upgrades and features.": "死日 升级是用 死光子 购买的，主要是解锁新的升级和功能。",
    "Death Factory upgrades are purchased with armaments and will improve the effects of your units.": "死亡工厂升级与武器一起购买，将提高你单位的效果。",
    "DEPLETED GALAXIES": "耗尽的星系",
    "During a research project": "在研究项目期间",
    "FACTORY": "工厂",
    "Final note: the Time Essence effects don't apply at all to time dimensions or essence production, and neither does the time speed nerf from Astral Enslavement.": "最后一点：时间精华效果根本不适用于时间维度或精华生产，也不适用于星界奴役的时间速度削弱。",
    "Finally, there are galaxy milestones. These are permanent rewards that you receive the first time you fully complete 1/2/3/4 galaxies at once. NOTE: the milestones window is draggable.": "最后，还有星系里程碑。 这些是您第一次一次完全完成 1/2/3/4 个星系时获得的永久奖励。 注意：里程碑窗口是可拖动的。",
    "Galaxies": "星系",
    "Galaxy upgrade costs are tripled, AFTER the increase in price from other bought upgrades.": "在其他购买的升级价格上涨之后，星系 升级成本增加了两倍。",
    "Here you buy undead creatures with corpses.": "在这里，您可以购买带有尸体的不死生物。",
    "Units": "单位",
    "UNITS": "单位",
    "VOID RESEARCH": "虚空研究",
    "How To Play Nekromantik": "如何玩 死灵术2",
    "INFINITE RESEARCH": "无限研究",
    "World Stasis 3": "世界静止 3",
    "Refinery": "炼油厂",
    "REFINERY": "炼油厂",
    "THE ARK": "方舟",
    "NECROPOLIS": "大墓地",
    "Necropolis upgrades are purchased with astral bricks, and increase their effectiveness.": "墓地升级是用星体砖购买的，并提高了它们的效率。",
    "NEW WORLDS": "新世界",
    "Time crystals": "时间水晶",
    "Time upgrades": "时间升级",
    "TIME UPGRADES": "时间升级",
    "The sacrifice autobuyer works a bit differently. You specify at what amount of crystals gained it should sacrifice, and then every autobuyer tick it will check your crystal gain and sacrifice if it's greater than                     or equal to what you entered. There is an additional checkbox on the sacrifice autobuyer for \"auto lock in\"; this means if the sacrifice was initiated by the autobuyer, it will automatically lock in your time                     dimensions to start producing essence.": "牺牲自动购买者的工作方式有点不同。 你指定它应该牺牲多少获得的水晶，然后每个自动购买者勾选它会检查你的水晶增益，如果它大于或等于你输入的内容，则牺牲。 在牺牲自动购买者上有一个额外的复选框，用于“自动锁定”； 这意味着如果牺牲是由自动购买者发起的，它将自动锁定您的时间维度以开始生产精华。",
    "Now that you have your first galaxy, you can spend it on a galaxy upgrade. There are four separate galaxy trees, and each has two branches in the middle. You can only take one brach at a time; buying a 2nd row upgrade in any galaxy                     will immediately lock out the two upgrades in that galaxy's other branch. Each upgrade has a base cost of 1 galaxy, but any time you buy an upgrade, the costs of all upgrades in all rows below it are increased by 1, and buying a 4th row                     upgrade increases the first row's costs by 1. A galaxy respec will completely reset all galaxy upgrades, costs, and locked upgrades.": "现在您有了第一个星系，您可以将其用于星系升级。 有四棵独立的星系树，每棵树的中间都有两个分支。 一次只能取一根； 在任何星系购买第二排升级将立即锁定该星系另一个分支中的两个升级。 每次升级的基本成本为 1 个星系，但无论何时购买升级，其下方所有行的所有升级成本都会增加 1，购买第 4 行升级会使第一行的成本增加 1。 将完全重置所有星系升级、成本和锁定升级。",
    "Time Dimensions work similarly to units, except there are only 4 tiers. Each 1st dimension produces 1 time essence per second times the 1st dimension multiplier, which doubles with each 1st dimension purchased. Each higher tier dimension produces 1 per second of the tier below it,                     multiplied by that tier's multiplier. Unlike units, each dimension's multiplier increases at the same rate (x2 with each purchase) and the full multiplier is applied to production; however, the higher tier multipliers don't apply directly to essence production.": "时间维度的工作方式与单位类似，但只有 4 层。 每个 1 维每秒产生 1 个时间精华乘以 1 维乘数，每购买一个 1 维，乘数就翻倍。 每个更高的层维度每秒产生 1 个低于它的层，乘以该层的乘数。 与单位不同，每个维度的乘数以相同的速度增加（每次购买 x2），并且整个乘数应用于生产； 然而，更高等级的乘数并不直接应用于精华生产。",
    "True Time Essence increases the multiplier to normal time speed, while Anti Time Essence increases the multiplier to time speed during Astral Enslavement. The Anti Time Essence boost is twice as powerful as the True Time Essence boost.                     True Time Essence also divides the Anti Time Essence effect, and vice versa, so you receive the strongest boost for either by setting the slider all the way to one side, but then you won't receive any boost at all for the Essence that isn't producing.": "真实时间精华增加正常时间速度的乘数，而反时间精华增加星体奴役期间的时间速度乘数。 反时间精华提升 是 真实时间精华提升 的两倍。 真实时间精华 还划分了 反时间精华 效果，反之亦然，因此通过将滑块一直设置到一侧，您将获得最强的提升，但您将不会收到任何提升 不生产。",
    "To gain Time Crystals, you need to Sacrifice. You need at least 1e20 corpses to sacrifice, and it will reset ALL of your progress up to unlocking Refinery (your corpses, units, exterminated worlds,                     astral bricks, buildings, building upgrades, and construction upgrades) plus any time essence or time dimensions you've produced (not bought). You will gain time crystals based on the amount of corpses you have when you sacrifice. (base formula is floor(10^(corpses_exponent/20 - 0.45))": "要获得时间水晶，您需要牺牲。 你需要至少 1e20 具尸体来牺牲，它会重置你的所有进度，直到解锁炼油厂（你的尸体、单位、灭绝的世界、星体砖、建筑物、建筑升级和建筑升级）以及你的任何时间本质或时间维度 '已经生产（未购买）。 你会根据你牺牲时拥有的尸体数量获得时间水晶。 （基本公式为 floor(10^(尸体指数/20 - 0.45))",
    "Each time autobuyers trigger, they attempt to buy each unit in order of the priority drop-down menus, starting with 1 and ending with 8.                    You will also eventually unlock \"bulk autobuyers\" for units, which attempt to max buy each unit every time instead of just buy one, and a world prestige autobuyer, which works the same as the unit autobuyers. You can toggle whether the game will prioritize prestige or sacrifice when they're both on and ready in the same tick.": "每次自动购买者触发时，他们都会尝试按照优先级下拉菜单的顺序购买每个单位，从 1 开始，以 8 结束。您最终还将为单位解锁“批量自动购买者”，这会尝试最大程度地购买每个单位 每次都不是只买一个，而是一个世界知名的自动购买者，其工作方式与单位自动购买者相同。 您可以切换游戏是否会优先考虑声望或牺牲，当它们同时开启并准备好时。",
    "Each unit also has a corpse multiplier that multiplies your total corpse gain (additively), and a unit multiplier, which multiplies the unit production of that tier and each tier below it. (additively).                     Every time you purchase one of a unit after the first, its cost and corpse multiplier are multiplied by constants. The base unit multiplier is always equal to the square root of the corpse multiplier.": "每个单位还有一个尸体乘数，可以乘以你的总尸体增益（加法），还有一个单位乘数，可以乘以该层及其以下每个层的单位产量。 （另外）。 每次您在第一个单位之后购买一个单位，其成本和尸体乘数都会乘以常数。 基本单位乘数始终等于尸体乘数的平方根。",
    "Each autobuyer attempts to purchase its corresponding unit or reset at regular intervals. When you first unlock them, you only have access to \"slow autobuyers\" - these trigger every 15 REAL WORLD seconds,                     meaning the time speed effects from astral enslavement and time essence have no effect on that interval. Eventually, you'll unlock \"fast autobuyers\", which trigger every game tick (20x/sec).": "每个自动购买者都会尝试购买其相应的单位或定期重置。 当你第一次解锁它们时，你只能访问“缓慢的自动购买者”——它们每 15 秒触发一次，这意味着来自星体奴役和时间本质的时间速度效果对该间隔没有影响。 最终，您将解锁“快速自动购买者”，它会触发每个游戏滴答（20 次/秒）。",
    "Lastly, you will eventually unlock more options for the sacrifice autobuyer's condition. The two additional ones are: \"at x times last\", which sacrifices when your crystal gain is at least x times the amount of crystals                     gained in your last sacrifice, and \"after x seconds\", which simply sacrifices the specified number of seconds after your last sacrifice.": "最后，您最终将为牺牲自动购买者的条件解锁更多选项。 另外两个是：\"至少 x 次\"，当你的水晶增益至少是你最后一次牺牲中获得的水晶数量的 x 倍时牺牲，以及 \" x 秒后\"，它只是牺牲指定的 你最后一次牺牲后的秒数。",
    "Infinite research has all the same effects as Research Project 6, but your corpse production is raised to ^0.9 a second time. The starting goal is 1e16 Void Research. You can complete Infinite Research unlimited times, but the research goal is multiplied by 10 for each completion.                     Each completion also raises your time crystal gain to ^1.01 (multiplicatively).": "无限研究与研究计划 6 具有相同的效果，但您的尸体产量第二次提高到 ^0.9。 起始目标是 1e16 虚空研究。 您可以无限次完成无限研究，但每次完成研究目标乘以 10。 每次完成还会将您的时间晶体增益提高到 ^1.01（乘法）。",
    "To complete a research project, you must reach that project's goal in Void Research. Completing a project performs a galaxy respec WITHOUT forcing an ascension reset and unlocks the corresponding ark component and project reward. Each project completed also doubles the number of galaxies that the galaxy effect softcaps begin at.": "要完成一个研究项目，您必须在虚空研究中达到该项目的目标。 完成一个项目会执行一个星系 重洗 而不会强制重置提升并解锁相应的方舟组件和项目奖励。 每个完成的项目也会使星系效应软帽开始时的星系数量增加一倍。",
    "Each project has a unique effect that is applied in addition to these.": "除了这些之外，每个项目都有一个独特的效果。",
    "Each zombie produces one corpse per second directly, while all other units produce the unit one tier below them at a rate of 1/tier per unit per second.": "每个僵尸每秒直接产生一具尸体，而所有其他单位以每秒每单位 1 个/层的速度产生比它们低一级的单位。",
    "Enabling Astral Enslavement disables corpse production and slows down time by 10x. During this time, you gain Astral Bricks based on your                     corpse gain (base formula is corpse gain^0.2).": "启用星界奴役会禁用尸体生产并将时间减慢 10 倍。在此期间，你会根据你的尸体增益获得星界砖（基本公式是尸体增益^0.2）。",
    "Even in your godlike state, the plans for The Ark are beyond you. You must put your enslaved souls to work studying and deciphering them.": "即使在你神一样的状态下，方舟的计划也超出了你的范围。你必须让你被奴役的灵魂去研究和破译它们。",
    "Eventually, this world will run out of souls to torture and corpses to harvest. When this happens, you must 'world prestige' to move on to a new world.": "最终，这个世界将没有灵魂可供折磨，没有尸体可供收割。发生这种情况时，您必须获得“世界威望”才能进入新世界。",
    "Every time you complete an infinite research, you gain 1 Impossible Theorem. You can use these to buy Ethereal Upgrades, and each unspent theorem raises the exterminated worlds effect to ^1.2 (multiplicatively). Ethereal upgrades can be respecced at any time, but this forces a sacrifice reset.": "每次完成无限研究时，您都会获得 1 个不可能定理。您可以使用这些来购买以太升级，并且每个未使用的定理都会将灭绝世界效应提高到 ^1.2（乘法）。空灵升级可以随时进行，但这会强制重置牺牲。",
    "Here you can use Astral Bricks to improve the infrastructure of your hellish empire machine. These upgrades can be bought repeatedly and indefinitely, although the cost                     increases exponentially at high levels (>25).": "在这里，您可以使用 Astral Bricks 来改善您的地狱帝国机器的基础设施。这些升级可以无限期地重复购买，尽管成本在高水平（> 25）呈指数增长。",
    "Here you will forge Astral Bricks and use them to construct monstrous buildings of death and war. Each building generates its own resource, and has its own set of upgrades                     focused on one aspect of the game.": "在这里，您将锻造星界砖，并用它们来建造可怕的死亡和战争建筑。每栋建筑都会产生自己的资源，并针对游戏的一个方面进行自己的升级。",
    "Here you will produce armaments for your savage hordes. The production rate is based on the number of zombies you have (base formula is log10(zombies+1)^0.5) - someone needs to work the factory, after all.": "在这里，您将为您的野蛮部落生产武器。生产率取决于你拥有的僵尸数量（基本公式是 log10(zombies+1)^0.5）——毕竟有人需要在工厂工作。",
    "Here you will produce nekro-photons. They are produced at a constant rate, but only during astral enslavement (and yes, they are affected by the astral time speed nerf, but also by anti time essence).": "在这里，您将产生 死光子。它们以恒定的速率产生，但仅限于星界奴役期间（是的，它们受到星界时间速度削弱的影响，但也受到反时间本质的影响）。",
    "Here you will use Time Crystals to purchase Time Dimensions, which produce Time Essence in two varieties - True Time and Anti Time.": "在这里，您将使用时间水晶购买时间维度，它会产生两种时间精华 - 真实时间和反时间。",
    "Here you'll buy some very powerful upgrades with Time Crystals. This is the point where you'll start needing to sacrifice frequently and repeatedly to make significant progress, so most of these                     upgrades focus on making sacrifice runs go faster.": "在这里，您将使用时间水晶购买一些非常强大的升级。这是您开始需要频繁且反复牺牲以取得重大进展的点，因此这些升级中的大多数都专注于使牺牲运行更快。",
    "Multiplier multipliers by unit tier: 1.75, 2, 2, 2, 2.2, 2.2, 2.5, 2.5.": "按单位层的乘数乘数：1.75、2、2、2、2.2、2.2、2.5、2.5。",
    "Note: clicking the \"respec slider\" button only counts as a sacrifice (for boosts/achievements based on number of sacrifices) if you actually gain time crystals. If you click the respec button before you reach 1e20 corpses, it won't be counted.": "注意：如果您确实获得了时间水晶，则单击“respec滑块”按钮仅计为牺牲（对于基于牺牲数量的提升/成就）。如果您在到达 1e20 个尸体之前单击 respec 按钮，则不会计算在内。",
    "Of course, if you wish, you can continue your sinister campaign indefinitely.": "当然，如果你愿意，你可以无限期地继续你的险恶战役。",
    "Production of corpses, building resources, time dimensions, and time essence are raised to ^0.9.": "尸体生产、建筑资源、时间维度、时间精华提升至^0.9。",
    "The first four world prestiges require at least one of your highest unlocked unit tier. After that, the requirement in 8th tier units increases by 2 with every prestige.": "前四个世界声望至少需要您的最高解锁单位等级之一。之后，第 8 层单位的要求每增加 2 个威望。",
    "The fourth and fifth columns of time upgrades and the Galactic Vortex/black holes are not reset, but they have no effect during research.": "第四和第五列时间升级和银河漩涡/黑洞没有重置，但在研究过程中没有效果。",
    "There are six research projects, and each unlocks one of the six ark components. Starting a research project inflicts several negative effects:": "有六个研究项目，每个项目都解锁六个方舟组件之一。开始一个研究项目会产生几个负面影响：",
    "They send you what appear to be blueprints for a vessel - a vessel to travel beyond the borders of this reality. It may as well be gibberish, for now.": "他们向你发送似乎是一艘船只的蓝图——一艘超越现实边界的船只。就目前而言，它也可能是胡言乱语。",
    "When you start a project, you do a galaxy respec and a time respec. However, ALL of the following are reset to their starting state/value, regardless of rewards from acheivements/milestones/projects": "当你开始一个项目时，你会做一个星系respec和一个时间respec。但是，无论来自成就/里程碑/项目的奖励如何，以下所有内容都将重置为其初始状态/值",
    "When you world prestige, you lose all of your corpses and units, and you gain one Exterminated World. Your exterminated worlds provide a new multiplier to total corpse gain. Your first three world prestiges                     each also unlock a new feature and a new unit tier.": "当你获得世界声望时，你会失去所有的尸体和单位，并获得一个灭绝世界。你被灭绝的世界为总尸体收益提供了一个新的乘数。你的前三个世界声望也解锁了一个新功能和一个新的单位等级。",
    "You are called from beyond by a cabal of beings of unimaginable power. They have recognized you power, and want to recruit you into their ranks. This is the culmination of all your labors: true extinction of this universe, and power unlimited.": "你被一群拥有难以想象的力量的生物召唤而来。他们已经认识到你的力量，并想招募你加入他们的行列。这是你所有努力的成果：这个宇宙的真正灭绝，以及无限的力量。",
    "You can set the percentage of production from Time Dimensions put towards True/Anti Time Essence however you'd like, but you can't change this setting without doing a sacrifice reset. You won't start Time Essence production until you click \"lock in\", which will disable the slider.": "您可以根据需要设置从时间维度到真/反时间精华的生产百分比，但是如果不进行牺牲重置，则无法更改此设置。在您单击“锁定”之前，您不会开始 Time Essence 制作，这将禁用滑块。",
    "You have deciphered the plans for The Ark, but your thirst for impossible knowledge has only increased. You continue delving deeper into the unknowable mysteries of The Beyond, with Infinite Research.": "你已经破译了方舟的计划，但你对不可能的知识的渴望只会增加。您将继续通过 无限研究 深入探究 超越 的不为人知的奥秘。",
    "You have exterminated countless worlds, and your power begins to reach a point of singularity. You gather your energies and A S C E N D, forming a putrid, macabre Depleted Galaxy from the remains of those empty worlds.": "你消灭了无数世界，你的力量开始达到一个奇点。你聚集你的能量和 A S C E N D，从那些空荡荡的世界的残骸中形成一个腐烂、令人毛骨悚然的耗尽星系。",
    "You must compelete Void Research Projects to unlock each component of the ark. Once unlocked, you spend both astral bricks and time crystals to build them. Once you've built all six components, you win the game.": "您必须完成虚空研究项目才能解锁方舟的每个组件。解锁后，您将花费星体砖和时间水晶来建造它们。一旦你构建了所有六个组件，你就赢得了比赛。",
    "Your Necropolis trains acolytes to assist in channelling the astral void. The energies required to imbue mere mortals with this power is staggering, so you can only gain acolyte": "你的墓地训练侍僧来协助引导星界虚空。将这种力量灌输给凡人所需的能量是惊人的，所以你只能获得追随者",
    "Your Necropolis trains acolytes to assist in channelling the astral void. The energies required to imbue mere mortals with this power is staggering, so you can only gain acolytes                     while you control the most powerful of undead beasts - the Sun Eaters (base formula is sun eaters^2).": "你的墓地训练侍僧来协助引导星界虚空。 将这种力量灌输给普通人所需的能量是惊人的，因此您只能在控制最强大的不死野兽 - 食日者（基本配方为食日者^2）时获得追随者。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);