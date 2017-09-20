/*
Navicat MySQL Data Transfer

Source Server         : html5
Source Server Version : 50615
Source Host           : localhost:3307
Source Database       : bookfriend

Target Server Type    : MYSQL
Target Server Version : 50615
File Encoding         : 65001

Date: 2017-03-22 20:31:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for active
-- ----------------------------
DROP TABLE IF EXISTS `active`;
CREATE TABLE `active` (
  `aid` int(10) NOT NULL AUTO_INCREMENT,
  `aname` varchar(30) DEFAULT NULL,
  `abdate` date DEFAULT NULL,
  `aedate` date DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of active
-- ----------------------------

-- ----------------------------
-- Table structure for activerr
-- ----------------------------
DROP TABLE IF EXISTS `activerr`;
CREATE TABLE `activerr` (
  `active` int(10) NOT NULL AUTO_INCREMENT,
  `activeurl` varchar(100) NOT NULL,
  `activetitle` varchar(100) NOT NULL,
  `content` text,
  `activedate` datetime NOT NULL,
  PRIMARY KEY (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activerr
-- ----------------------------
INSERT INTO `activerr` VALUES ('42', 'http://share.renren.com/share/1238047891/3246860673?from=0', 'GoogleCamp开始招新啦!', '<div class=\"partUpBlog partUp\" style=\"display: block;\">\r\n            <div class=\"titleArea\">\r\n                <a class=\"title\">GoogleCamp开始招新啦!</a>\r\n                <div class=\"info\">\r\n                    <span class=\"src\">源自: </span><a class=\"author\">伍加  plus wu</a>\r\n                    <span class=\"visit\">2602</span>\r\n                    <img class=\"visitPic\" src=\"http://s.xnimg.cn/apps/guanke/img/visitPic.png\">\r\n                </div>\r\n            </div>\r\n            <div class=\"content blog\"><span style=\"font-size: 14.0px;\">Google Camp（Google学生俱乐部）</span><span style=\"font-size: 14.0px;\">是Google精神和理念在大学校园里的延伸，</span><span style=\"font-size: 14.0px;\">是Google与高校学生之间的沟通桥梁，</span><span style=\"font-size: 14.0px;\">是由Google资助、并由同学组织和管理的学生社团，</span><span style=\"font-size: 14.0px;\">为培养同学们的组织和创新能力，促进校园和企业互动，</span><span style=\"font-size: 14.0px;\">自发组织有创意的、激励进取和充满乐趣的活动。</span><span style=\"font-size: 14.0px;\">俱乐部并非单纯的技术俱乐部，</span><span style=\"font-size: 14.0px;\">它所倡导的活动内容针对校园生活的方方面面，</span><span style=\"font-size: 14.0px;\">致力于整合管理信息，并使之为同学服务，造福校园。</span><span style=\"font-size: 14.0px;\">俱乐部也是帮助同学展示自我，享受大学生活的重要社团。</span><span style=\"font-size: 14.0px;\">每一位俱乐部成员在组织活动的过程中都会得到学习和锻炼的机会，</span><span style=\"font-size: 14.0px;\">对成才就业产生积极影响。<br>    <br>我们的组织文化：<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;自由民主&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 和谐高效的管理模式<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;开放创新&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 敢想敢做的创造精神<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;团结合作&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 快乐是最强大的凝聚力<br>我们的开放创新：<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;头脑风暴&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;点子就是财富<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;想到就做&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;有点子就要去实现它<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;多元融合&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;兼收并蓄的学习精神<br>我们的团结合作：<br>•&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;快乐至上&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 快乐是凝聚力和战斗力的源泉<br>•&nbsp; &nbsp;&nbsp; &amp;</span>...</div>   \r\n        </div>', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('43', 'http://share.renren.com/share/1652557103/5524344896?from=0', '通知：“上海交通大学——泰乐琪”电梯演讲活动', '<div class=\"partUpBlog partUp\" style=\"display: block;\">\r\n            <div class=\"titleArea\">\r\n                <a class=\"title\">通知：“上海交通大学——泰乐琪”电梯演讲活动</a>\r\n                <div class=\"info\">\r\n                    <span class=\"src\">源自: </span><a class=\"author\">朱杨</a>\r\n                    <span class=\"visit\">2790</span>\r\n                    <img class=\"visitPic\" src=\"http://s.xnimg.cn/apps/guanke/img/visitPic.png\">\r\n                </div>\r\n            </div>\r\n            <div class=\"content blog\"><p>    <strong>&nbsp;</strong>以“让创意的点子飞起来”为主题的“上海交通大学——泰乐琪”电梯演讲活动是由上海交通大学学生科技创新创业中心主办，旨在点燃大学生创业热情、培养创新意识、激发创意思维、提高创造力及鼓励创业精神的一项活动。其意义在于搭建风险投资基金与交大有创业意愿与创业热情的同学之间沟通的桥梁，为众多有创意的同学提供一个展示自我、交流学习的平台。</p><p>一、&nbsp; 活动概述</p><p>1．活动时间：每双周四晚18:30</p><p>2．活动地点：逸夫楼200</p><p>3．选手报名方式：参赛选手在创意沙龙活动开始前48小时通过邮件或短信报名。主办方审查各报名方案后初步选出15-20个创意，并于活动正式开始前24小时以电话或邮件方式通知参赛选手。</p><p>4．观众参加方式：参赛选手于活动前一天在逸夫楼203创业学院办公室领取15张入场券,并邀请15名亲友团成员到现场助威加油（并拥有第二轮投票资格）；其余同学直接进场观看比赛。</p><p>二、&nbsp; 活动流程</p><p>活动入场：参赛选手签到后入场；普通观众直接入场；亲友团成员凭入场券入场，入场券分两联，副券投入票箱，正券于投票环节中使用。</p><p>展示环节：比赛选手依次上台展示创意项目，时间限定一分钟，期间可通过PPT进行说明并鼓励配合实物展示。</p><p>投票环节：</p><p>第一轮投票：所有选手展示完毕后，由观众举手进行投票，投票次数不限，最终选出得票最高的五名同学进入第二轮。</p><p>第二轮投票：由Steve在票箱入场票副票中随机挑选出20名亲友团观众进行投票，观众将正票</p>...</div>   \r\n        </div>', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('44', 'http://share.renren.com/share/1731987059/1884371227?from=0', '欢迎参加“九格子”创意营销竞赛！！！', '<div class=\"partUpBlog partUp\" style=\"display: block;\">\r\n            <div class=\"titleArea\">\r\n                <a class=\"title\">欢迎参加“九格子”创意营销竞赛！！！</a>\r\n                <div class=\"info\">\r\n                    <span class=\"src\">源自: </span><a class=\"author\">艾心IDEA</a>\r\n                    <span class=\"visit\">2254</span>\r\n                    <img class=\"visitPic\" src=\"http://s.xnimg.cn/apps/guanke/img/visitPic.png\">\r\n                </div>\r\n            </div>\r\n            <div class=\"content blog\"><p>    <img src=\"http://fmn.xnimg.cn/fmn043/20100404/2210/b_large_Mpaz_3e150001b91b2d0d.jpg\" alt=\"\"><br>    <br>    <span style=\"font-family: 宋体;font-size: 28.0pt;font-weight: bold;\"><span style=\"color: rgb(255,0,0);\">“九格子”将与中国人民大学国际发展交流协会（IDEA）合作面对在校大学生开展创意营销竞赛活动！</span></span><span style=\"font-family: 宋体;font-size: 28.0pt;font-weight: bold;\"><span style=\"color: rgb(255,0,0);\">             <br>            <img src=\"http://fmn.xnimg.cn/fmn043/20100404/2245/b_large_9GDb_7ee6000141c62d11.jpg\" alt=\"\"><br>        </span></span><span style=\"font-size: 18.0pt;\"></span></p><p>    <span style=\"font-size: 18.0pt;\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-family: 宋体;font-weight: bold;\">“九格子”是一家由来自清华、人大等名校并有海外留学背景的</span><span style=\"font-family: Arial;font-weight: bold;\">IT</span><span style=\"font-family: 宋体;font-weight: bold;\">及通讯业内人士创办的科技企业</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-size: 28.0pt;font-weight: bold;\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-size: 18.0pt;\">•北京九格子健康科技有限责任公司成立2009年，目前入住中国人民大学留学人员创业园<br>•九格子网站于2010年2月正式上线，<span style=\"color: rgb(255,0,0);\">是一个针对都市白领人群健康问题</span>的web 2.0网站，我们的理念是“我的健康，我管理”<br>•我们运用先进的网络和手机技术<span style=\"color: rgb(255,0,0);\">为用户提供一个主动管理自己健康的平台</span>，以中医将中国人划分为九种体质的理论为出发点，以“医食同源”的理念为切入点，<span style=\"color: rgb(255,0,0);\">帮助用户实现个性化的、易实现的健康管理</span></span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\"><span style=\"font-size: 24.0pt;\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-family: 黑体;\">活动目的</span></span>                     <br>                </span>对于九格子：通过在线及线下的创意性营销手段，提高网站在目标用户群（都市白领）中的认知度<br>对于大学生：在真实商业环境中通过团队协作设计并执行营销计划，熟悉公司及项目运作，积累经验，锻炼能力</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-size: 24.0pt;\"><span style=\"font-family: 黑体;\">报名要求</span></span></span>                 <br>大学本科生、研究生、在读MBA均可<br>不限专业，但有医疗卫生、媒体传播、互联网等相关知识背景更佳<br>有创意，有激情，有梦想，有时间<br>以项目组的方式组队参加，不接受个人报名</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-size: 24.0pt;\"><span style=\"font-family: 黑体;\">参与方式</span></span>                     <br>                </span>请有意参与者与志同道合的朋友组队（不限人数），向国际发展交流协会（IDEA）报名，报名时需提交以下材料：<br>                <span style=\"color: rgb(255,0,0);\"><em><span style=\"color: rgb(0,0,0);\">项目组名称（队名），成员简介及分工（须有一名成员担任项目组组长，负责项目的协调及对接等）</span>P.S 组长必须是IDEA的成员~非IDEA成员可作为组员参加~<br>                        <span style=\"color: rgb(0,0,0);\">项目组对九格子网站的了解以及营销方案初稿（包含主要营销手段、目标及考核方式、项目预算等）</span></em>                     <br>                </span>我们对各项目组所提交材料进行审核后，将选出两组参加竞赛<br>我们将为参赛的两个项目组各提供人民币3000元的项目预算<br>整个竞赛为期3个月，我们将每月对参赛小组进行评比，并奖励优胜者</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-size: 24.0pt;\"><span style=\"font-family: 黑体;\">活动流程</span></span></span>                 <br>2010年3月29日-4月9日：活动宣传及报名<br>2010年4月10日-4月11日：参赛小组筛选<br>2010年4月11日：创意营销竞赛正式启动（九格子公司团队与项目组讨论确认营销方案及项目运作方式）<br>2010年4月12日-4月14日：赛前准备<br>2010年4月15日-7月14日：创意营销竞赛</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-size: 24.0pt;\"><span style=\"font-family: 黑体;\">奖励办法</span></span>                     <br>                </span>我们将从项目执行、营销效果、投资回报等角度，每月对参赛小组进行评比（共三轮）<br>每月评比优胜方将获得<span style=\"text-decoration: underline;\"><span style=\"color: rgb(255,0,0);\">人民币1000元</span></span>的现金奖励，此外，三轮评比总比分领先一方还将<span style=\"text-decoration: underline;\"><span style=\"color: rgb(255,0,0);\">额外获得人民币1000元的现金奖励</span>                    <br>                </span>参赛小组成员毕业后如有意加盟我们的创业团队，将得到优先考虑</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\"><span style=\"font-family: 黑体;\"><span style=\"color: rgb(0,0,0);\"><span style=\"font-size: 24.0pt;\">创意营销方案设计建议<br>                        </span></span></span>明确目标人群：白领（请参考附件中MSN研究报告）</span></span></span></p><p>    <span style=\"font-family: 宋体;color: rgb(0,102,102);font-weight: bold;\"><span style=\"font-size: 14.0pt;\"><span style=\"color: rgb(51,51,153);\">结合</span></span></span></p>...</div>   \r\n        </div>', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('45', 'http://share.renren.com/share/221939006/2014704995?from=0', '1up浙大创业团队诚招兼职销售成员！提成丰厚！', '已经删除啦@！', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('46', 'http://share.renren.com/share/223540859/1837423180?from=0', '广告团长陈绍团先生来到第八届学院奖郑州站', '', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('47', 'http://share.renren.com/share/225770256/3992948611?from=0', '创意无限精彩——英特尔4G智慧校园创意大赛携手交大', '', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('48', 'http://share.renren.com/share/225830398/1940520507?from=0', '【置顶】喜欢浙大文化的你，热衷销售的精英们请加入我们吧！--1up团队诚招销售成员咯！', '', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('49', 'http://share.renren.com/share/228934444/2177915077?from=0', '创意市集 ，创意无限!', '', '2016-05-06 00:00:00');
INSERT INTO `activerr` VALUES ('50', 'http://share.renren.com/share/229109244/4579648345?from=301337866', '共谱益曲·大学生公益嘉年华', '', '2016-05-06 00:00:00');

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cityid` int(10) NOT NULL AUTO_INCREMENT,
  `cityname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES ('1', '苏州市');
INSERT INTO `city` VALUES ('2', '河南');
INSERT INTO `city` VALUES ('3', '北京');

-- ----------------------------
-- Table structure for goodthing
-- ----------------------------
DROP TABLE IF EXISTS `goodthing`;
CREATE TABLE `goodthing` (
  `ppid` int(10) NOT NULL,
  `ppcontent` text,
  `pjingpinid` int(10) NOT NULL,
  PRIMARY KEY (`pjingpinid`),
  KEY `FK_Reference_34` (`ppid`) USING BTREE,
  CONSTRAINT `goodthing_ibfk_1` FOREIGN KEY (`ppid`) REFERENCES `p_post` (`ppid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodthing
-- ----------------------------

-- ----------------------------
-- Table structure for p_book
-- ----------------------------
DROP TABLE IF EXISTS `p_book`;
CREATE TABLE `p_book` (
  `plook` int(10) DEFAULT '0',
  `ptitle` varchar(30) DEFAULT NULL,
  `ppimg` varchar(255) DEFAULT NULL,
  `pptime` varchar(50) DEFAULT NULL,
  `uBid` int(10) DEFAULT NULL,
  `pbookid` int(10) NOT NULL AUTO_INCREMENT,
  `ppcontent` text,
  PRIMARY KEY (`pbookid`),
  KEY `uBid` (`uBid`) USING BTREE,
  CONSTRAINT `p_book_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_book
-- ----------------------------
INSERT INTO `p_book` VALUES ('9', '基督山伯爵', 'upload\\book1.jpg', '2016-04-03    22:39:00', '1', '1', '《基督山伯爵》长时间受读者欢迎。故事背景跨越了波旁和七月两个王朝， 这时的阶级矛盾极为复杂社会经济与政权结构正在发生巨大变革， 资产阶级与封建贵族正在进行最后的较量，工人阶级作为一支独立的政治力量也走 上了历史舞台。作者作为一个共和主义者本可以将七月革命前后法国的社会矛盾与 阶级斗争表现出来。');
INSERT INTO `p_book` VALUES ('3', '百年孤独', 'upload\\book2.jpg', '2016-04-03    22:39:00', '2', '2', '孤独是布恩迪亚家族的家徽，每一个成员都自觉不自觉地佩戴着它。 同时，孤独在他们的世界里又是一把双刃剑。 他们害怕自己陷于孤独的泥淖，而以自己独特的方式在反抗孤独， 悖论的是他们的生存又离不开这种孤独，他们渴望保持孤独的高傲姿态。 可见，布恩迪亚家族成员的孤独带有一定的矛盾性。');

-- ----------------------------
-- Table structure for p_module
-- ----------------------------
DROP TABLE IF EXISTS `p_module`;
CREATE TABLE `p_module` (
  `pmid` int(10) NOT NULL AUTO_INCREMENT,
  `pmname` varchar(15) DEFAULT NULL,
  `ppcontent` text NOT NULL,
  PRIMARY KEY (`pmid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_module
-- ----------------------------
INSERT INTO `p_module` VALUES ('1', '自由角', '畅所欲言');
INSERT INTO `p_module` VALUES ('2', '书籍分享', '分享书籍');
INSERT INTO `p_module` VALUES ('3', '黑洞', '匿名聊天');

-- ----------------------------
-- Table structure for p_post
-- ----------------------------
DROP TABLE IF EXISTS `p_post`;
CREATE TABLE `p_post` (
  `ppid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) DEFAULT NULL,
  `ppcontent` text NOT NULL,
  `pptime` varchar(50) DEFAULT NULL,
  `pmid` int(10) DEFAULT NULL,
  `ppimg` varchar(255) DEFAULT NULL,
  `pzan` int(3) DEFAULT '0',
  `ptitle` varchar(30) NOT NULL,
  `plook` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`ppid`),
  KEY `FK_Reference_29` (`pmid`) USING BTREE,
  KEY `FK_Reference_30` (`uBid`) USING BTREE,
  KEY `title` (`ptitle`) USING BTREE,
  CONSTRAINT `p_post_ibfk_1` FOREIGN KEY (`pmid`) REFERENCES `p_module` (`pmid`),
  CONSTRAINT `p_post_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB AUTO_INCREMENT=650 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_post
-- ----------------------------
INSERT INTO `p_post` VALUES ('586', '1', '才', '2016-03-26', '1', 'upload\\1462693466224.jpeg', '3', '打', '1');
INSERT INTO `p_post` VALUES ('588', '1', '飞', '2016-03-26', '1', 'upload\\1462414334393.jpeg', '0', '飞', '1');
INSERT INTO `p_post` VALUES ('636', '6', '有什么需要私聊', '2016-04-15    15:51:15', '1', '', '33', '清空东西啦', '0');
INSERT INTO `p_post` VALUES ('637', '6', '最近浏览58，发现有好多不错的工作。薪水可以，而且是周末兼职。', '2016-04-15    15:51:47', '1', '', '66', '你们谁在58同城找过兼职吗?', '0');
INSERT INTO `p_post` VALUES ('638', '6', '谁能告诉我这是啥子情况…根本不让我输学号密码啊！', '2016-04-15    15:52:13', '1', '', '0', '大四狗马上就要走了，可以免费用校园网了…', '50');
INSERT INTO `p_post` VALUES ('639', '6', '吼吼，已经在西苑餐厅兼职两个月啦，并不觉得累，而且养成了每天早起滴好习惯，你们呢？有没有早起和按时吃早饭啊？更重要滴是都有谁去吃我们那的“”东北火烧“”啊？会不会经常吃啊？反正我天天吃都没吃腻', '2016-04-15    15:53:22', '1', 'upload\\upload_faa2cc001a226fb3fbacf238126609b7', '88', '我是来送表情包哒。', '1100');
INSERT INTO `p_post` VALUES ('641', '6', '东苑三楼这家餐厅、加点米饭还要钱、跟他说了一下、他还争吵着说：有本事儿你别吃我家的、卧槽、真有点受不了了、真以为自己家做的很好吗、难道你不知道做生意就是一个服务 一个细水长流的问题吗', '2016-04-15    15:55:54', '1', 'upload\\upload_9491c291e192b8ec260bb3ee69ac8521', '55', '东苑三楼这家餐厅、加点米饭还要', '102');
INSERT INTO `p_post` VALUES ('642', '6', '二楼开始说。', '2016-04-15    15:56:42', '1', 'upload\\upload_724ed35dab09e1dd4ee392f1016245f9', '77', '寻寻寻，一个有酒窝的男生，有认识的人看到求戳进！', '93');
INSERT INTO `p_post` VALUES ('643', '6', 'rt', '2016-04-15    15:57:27', '1', 'upload\\upload_4aab196091bdc166354e5190e0da0a65', '0', '塞翁失马,请赐予我一场恋爱吧', '107');
INSERT INTO `p_post` VALUES ('644', '6', '期末考试必过！', '2016-04-16    20:16:01', '1', '', '0', '加油！', '15');
INSERT INTO `p_post` VALUES ('645', '1', '哈哈哈', '2016-04-16    20:17:55', '1', '', '0', '欢迎欢迎欢迎欢迎欢迎', '7');
INSERT INTO `p_post` VALUES ('646', '1', '我要上热搜！', '2016-04-17    11:27:42', '1', 'upload/upload_640a5a215b2f633330fc2ad243e3be35', '0', '我。。。', '22');
INSERT INTO `p_post` VALUES ('647', '6', '哈哈哈哈', '2016-05-27    14:50:29', '1', '', '0', '你哈', '0');
INSERT INTO `p_post` VALUES ('648', '6', '哈哈哈哈', '2016-05-27    14:51:13', '1', '', '0', '你好', '0');
INSERT INTO `p_post` VALUES ('649', '6', '好好哈哈', '2016-05-27    14:52:03', '1', '', '0', '你好', '0');

-- ----------------------------
-- Table structure for p_res
-- ----------------------------
DROP TABLE IF EXISTS `p_res`;
CREATE TABLE `p_res` (
  `uBid` int(10) NOT NULL,
  `ppid` int(10) DEFAULT NULL,
  `prflag` int(1) DEFAULT NULL,
  `prid` int(10) NOT NULL AUTO_INCREMENT,
  `p_prid` int(10) DEFAULT NULL,
  `prcontent` text NOT NULL,
  PRIMARY KEY (`prid`),
  KEY `FK_Reference_28` (`p_prid`) USING BTREE,
  KEY `FK_Reference_31` (`ppid`) USING BTREE,
  KEY `FK_Reference_41` (`uBid`) USING BTREE,
  CONSTRAINT `p_res_ibfk_1` FOREIGN KEY (`ppid`) REFERENCES `p_post` (`ppid`),
  CONSTRAINT `p_res_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB AUTO_INCREMENT=859 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_res
-- ----------------------------
INSERT INTO `p_res` VALUES ('1', '588', '588', '71', '71', '我有用户名啦！~');
INSERT INTO `p_res` VALUES ('6', '643', '643', '843', '843', '哈哈哈我也想要这样的');
INSERT INTO `p_res` VALUES ('6', '643', '643', '844', '844', '一脸懵逼');
INSERT INTO `p_res` VALUES ('1', '643', '843', '845', '843', 'hehe ');
INSERT INTO `p_res` VALUES ('1', '643', '844', '846', '844', '啧啧啧');
INSERT INTO `p_res` VALUES ('2', '643', '843', '847', '843', '我也呵呵');
INSERT INTO `p_res` VALUES ('2', '643', '846', '848', '844', '啧啧什么啊！~');
INSERT INTO `p_res` VALUES ('1', '643', '849', '851', '844', '放学别走！~');
INSERT INTO `p_res` VALUES ('1', '644', '644', '853', '853', '好哒');
INSERT INTO `p_res` VALUES ('1', '644', '644', '855', '855', 'haoda');
INSERT INTO `p_res` VALUES ('6', '644', '854', '857', '854', '哈哈');
INSERT INTO `p_res` VALUES ('2', '645', '645', '858', null, '123');

-- ----------------------------
-- Table structure for p_z
-- ----------------------------
DROP TABLE IF EXISTS `p_z`;
CREATE TABLE `p_z` (
  `p_zid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) NOT NULL,
  `ppid` int(10) NOT NULL,
  PRIMARY KEY (`p_zid`),
  KEY `ppid` (`ppid`) USING BTREE,
  KEY `ubi` (`uBid`) USING BTREE,
  CONSTRAINT `p_z_ibfk_1` FOREIGN KEY (`ppid`) REFERENCES `p_post` (`ppid`),
  CONSTRAINT `p_z_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_z
-- ----------------------------
INSERT INTO `p_z` VALUES ('11', '6', '639');
INSERT INTO `p_z` VALUES ('17', '1', '638');
INSERT INTO `p_z` VALUES ('19', '1', '588');
INSERT INTO `p_z` VALUES ('20', '1', '644');
INSERT INTO `p_z` VALUES ('21', '6', '644');
INSERT INTO `p_z` VALUES ('22', '6', '644');
INSERT INTO `p_z` VALUES ('23', '6', '644');
INSERT INTO `p_z` VALUES ('29', '1', '643');
INSERT INTO `p_z` VALUES ('30', '1', '645');
INSERT INTO `p_z` VALUES ('34', '6', '646');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `schoolid` int(10) NOT NULL AUTO_INCREMENT,
  `cityid` int(10) DEFAULT NULL,
  `schoolname` varchar(30) NOT NULL,
  `schooldetail` text,
  PRIMARY KEY (`schoolid`),
  KEY `FK_Reference_38` (`cityid`) USING BTREE,
  CONSTRAINT `school_ibfk_1` FOREIGN KEY (`cityid`) REFERENCES `city` (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('1', '1', '苏州大学', '');
INSERT INTO `school` VALUES ('2', '1', '苏州科技大学', null);
INSERT INTO `school` VALUES ('3', '1', '常熟理工大学', null);
INSERT INTO `school` VALUES ('4', '1', '苏州大学文正学院', null);
INSERT INTO `school` VALUES ('5', '1', '苏州大学应用技术学院', null);

-- ----------------------------
-- Table structure for schoolnews
-- ----------------------------
DROP TABLE IF EXISTS `schoolnews`;
CREATE TABLE `schoolnews` (
  `schoolid` int(10) NOT NULL,
  `news` text,
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`newsid`),
  KEY `FK_Reference_26` (`schoolid`) USING BTREE,
  CONSTRAINT `schoolnews_ibfk_1` FOREIGN KEY (`schoolid`) REFERENCES `school` (`schoolid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of schoolnews
-- ----------------------------

-- ----------------------------
-- Table structure for search
-- ----------------------------
DROP TABLE IF EXISTS `search`;
CREATE TABLE `search` (
  `searchid` int(10) NOT NULL AUTO_INCREMENT,
  `searchoon` text,
  `searchnum` int(6) DEFAULT NULL,
  `searchtime` date DEFAULT NULL,
  PRIMARY KEY (`searchid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of search
-- ----------------------------

-- ----------------------------
-- Table structure for sinanews
-- ----------------------------
DROP TABLE IF EXISTS `sinanews`;
CREATE TABLE `sinanews` (
  `sinaid` int(10) NOT NULL AUTO_INCREMENT,
  `sinaurl` tinytext NOT NULL,
  `sinatitle` varchar(100) NOT NULL,
  `sinadate` datetime NOT NULL,
  PRIMARY KEY (`sinaid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sinanews
-- ----------------------------
INSERT INTO `sinanews` VALUES ('3', 'http://news.sina.com.cn/zl/ruijian/2016-05-04/09345848.shtml', '下一个美国超级英雄——特朗普', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('4', 'http://news.sina.com.cn/zl/ruijian/2016-05-04/09205846.shtml', '支持年轻人构建中国科学的未来', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('5', 'http://news.sina.com.cn/zl/ruijian/2016-05-04/09305847.shtml', '当今世界的130多个共产党', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('6', 'http://edu.sina.com.cn/zl/edu/2016-05-05/15323601.shtml', '重邮校花晒清纯写真 白皙皮肤笑眼迷人', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('7', 'http://fashion.sina.com.cn/zl/love/2016-05-05/14585641.shtml', '你永远不必为了男人改变自己', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('8', 'http://fashion.sina.com.cn/zl/fashion/2016-05-05/14525640.shtml', '邓文迪穿衣上位史：从夜店保姆风到女王范', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('9', 'http://finance.sina.com.cn/zl/bank/2016-05-05/zl-ifxryhhh1628656.shtml', '有几家P2P能洗清非法集资嫌疑', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('10', 'http://finance.sina.com.cn/zl/china/2016-05-05/zl-ifxryhhi8397350.shtml', '格力没必要趟手机那滩浑水', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('11', 'http://fashion.sina.com.cn/zl/fashion/2016-05-05/12105639.shtml', '给牛仔裤来个大翻边，立刻让你时髦到爆炸', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('12', 'http://edu.sina.com.cn/zl/edu/blog/2016-05-05/11453600/1192342862/4711b54e0102w55p.shtml', '中国年轻人最缺乏的爱情观', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('13', 'http://ent.sina.com.cn/zl/bagua/blog/2016-05-05/11374648/2036655340/7964e4ec0102wrns.shtml', '破残遭封杀！有一种衰男人叫张柏芝的前任？', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('14', 'http://finance.sina.com.cn/zl/stock/20160505/113424657124.shtml', '2000家三板公司干一年买不起伯克希尔一股！', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('15', 'http://fashion.sina.com.cn/zl/fashion/2016-05-05/11345638.shtml', '没错，它才是这个夏天的刚需 ', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('16', 'http://edu.sina.com.cn/zl/edu/2016-05-05/11253599.shtml', '2015届本科毕业半年后月薪最高专业', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('17', 'http://finance.sina.com.cn/zl/stock/20160505/111124657015.shtml', '一个拟挂牌新三板企业的证代独白：快要被老板逼疯了', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('18', 'http://edu.sina.com.cn/zl/edu/blog/2016-05-05/11043598/1402756050/539c5bd20102w2oc.shtml', '大学招生 行政和学术谁说了算？', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('19', 'http://finance.sina.com.cn/zl/bank/2016-05-05/zl-ifxryhhh1619126.shtml', '滚床单的美妙和滚钉板的惨叫', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('20', 'http://edu.sina.com.cn/zl/oversea/blog/2016-05-05/10213597/2860998382/aa875eee0102wr79.shtml', '外国人最喜欢的n个汉字', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('21', 'http://ent.sina.com.cn/zl/bagua/blog/2016-05-05/09424647/353750013/1515cbfd80102wazm.shtml', '杨子黄圣依的离婚大戏究竟是不是炒作？', '2016-05-05 00:00:00');
INSERT INTO `sinanews` VALUES ('22', 'http://news.sina.com.cn/zl/ruijian/2016-05-04/09345848.shtml', '下一个美国超级英雄——特朗普', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('23', 'http://news.sina.com.cn/zl/ruijian/2016-05-04/09205846.shtml', '支持年轻人构建中国科学的未来', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('24', 'http://news.sina.com.cn/zl/ruijian/2016-05-04/09305847.shtml', '当今世界的130多个共产党', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('25', 'http://finance.sina.com.cn/zl/stock/20160506/083724661704.shtml', '投资新三板第一股的密码:孩子·女人·吃货 ', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('26', 'http://finance.sina.com.cn/zl/stock/20160506/082824661671.shtml', '要分层了 有三板公司却卷铺盖跑了！ ', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('27', 'http://finance.sina.com.cn/zl/stock/20160506/082324661647.shtml', '新三板“白卷英雄”：忙活一年营收为0 这哥仨是怎么搞的 ', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('28', 'http://finance.sina.com.cn/zl/china/2016-05-06/zl-ifxryhhi8425352.shtml', '限购限贷和加税都无法稳房价', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('29', 'http://edu.sina.com.cn/zl/edu/2016-05-05/15323601.shtml', '重邮校花晒清纯写真 白皙皮肤笑眼迷人', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('30', 'http://fashion.sina.com.cn/zl/love/2016-05-05/14585641.shtml', '你永远不必为了男人改变自己', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('31', 'http://fashion.sina.com.cn/zl/fashion/2016-05-05/14525640.shtml', '邓文迪穿衣上位史：从夜店保姆风到女王范', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('32', 'http://finance.sina.com.cn/zl/bank/2016-05-05/zl-ifxryhhh1628656.shtml', '有几家P2P能洗清非法集资嫌疑', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('33', 'http://finance.sina.com.cn/zl/china/2016-05-05/zl-ifxryhhi8397350.shtml', '格力没必要趟手机那滩浑水', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('34', 'http://fashion.sina.com.cn/zl/fashion/2016-05-05/12105639.shtml', '给牛仔裤来个大翻边，立刻让你时髦到爆炸', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('35', 'http://edu.sina.com.cn/zl/edu/blog/2016-05-05/11453600/1192342862/4711b54e0102w55p.shtml', '中国年轻人最缺乏的爱情观', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('36', 'http://ent.sina.com.cn/zl/bagua/blog/2016-05-05/11374648/2036655340/7964e4ec0102wrns.shtml', '破残遭封杀！有一种衰男人叫张柏芝的前任？', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('37', 'http://finance.sina.com.cn/zl/stock/20160505/113424657124.shtml', '2000家三板公司干一年买不起伯克希尔一股！', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('38', 'http://fashion.sina.com.cn/zl/fashion/2016-05-05/11345638.shtml', '没错，它才是这个夏天的刚需 ', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('39', 'http://edu.sina.com.cn/zl/edu/2016-05-05/11253599.shtml', '2015届本科毕业半年后月薪最高专业', '2016-05-06 00:00:00');
INSERT INTO `sinanews` VALUES ('40', 'http://finance.sina.com.cn/zl/stock/20160505/111124657015.shtml', '一个拟挂牌新三板企业的证代独白：快要被老板逼疯了', '2016-05-06 00:00:00');

-- ----------------------------
-- Table structure for s_comment
-- ----------------------------
DROP TABLE IF EXISTS `s_comment`;
CREATE TABLE `s_comment` (
  `scid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) NOT NULL,
  `ssid` int(10) DEFAULT NULL,
  `sscon` text,
  `ssdate` date DEFAULT NULL,
  PRIMARY KEY (`scid`),
  KEY `FK_Reference_43` (`ssid`) USING BTREE,
  KEY `FK_Reference_44` (`uBid`) USING BTREE,
  CONSTRAINT `s_comment_ibfk_1` FOREIGN KEY (`ssid`) REFERENCES `s_shop` (`ssid`),
  CONSTRAINT `s_comment_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_comment
-- ----------------------------

-- ----------------------------
-- Table structure for s_detail
-- ----------------------------
DROP TABLE IF EXISTS `s_detail`;
CREATE TABLE `s_detail` (
  `sdid` int(11) NOT NULL AUTO_INCREMENT COMMENT '商店商品id',
  `sdtitle` varchar(20) NOT NULL COMMENT '商店商品标题',
  `sdpricein` decimal(10,2) DEFAULT NULL COMMENT '商品卖价',
  `sdpriceout` decimal(10,2) DEFAULT NULL COMMENT '商品进价',
  `sdcount` int(3) DEFAULT NULL COMMENT '商品折扣',
  `sdkind` varchar(10) DEFAULT NULL COMMENT '商品类别',
  `sdgroup` varchar(20) DEFAULT NULL COMMENT '商品分组',
  `ssid` int(10) NOT NULL COMMENT '商品对应商店id',
  `sdimg` varchar(255) DEFAULT NULL COMMENT '商品对应图片',
  `sdnumber` int(5) DEFAULT NULL COMMENT '库存数量',
  `sdlogistics` decimal(4,2) DEFAULT NULL COMMENT '物流价格',
  `sdcontent` varchar(255) DEFAULT NULL COMMENT '商品详细介绍',
  `sdmode` int(1) DEFAULT NULL COMMENT '商品模板',
  `sdpdate` date DEFAULT NULL COMMENT '商品发布时间',
  `sealnow` int(1) DEFAULT '1' COMMENT '立即开售',
  `flog3` varchar(255) DEFAULT NULL,
  `flog4` varchar(255) DEFAULT NULL,
  `flog` varchar(255) DEFAULT NULL,
  `flog5` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sdid`),
  KEY `FK_Reference_45` (`ssid`) USING BTREE,
  CONSTRAINT `s_detail_ibfk_1` FOREIGN KEY (`ssid`) REFERENCES `s_shop` (`ssid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_detail
-- ----------------------------
INSERT INTO `s_detail` VALUES ('4', '薯片多种口味供你选择，提供送货上门。限时', '1.00', '1.01', null, '衣物', '二手信息', '100', 'pic2.jpg', '12', '1.00', '', '0', '2016-06-11', '1', null, null, null, '21');
INSERT INTO `s_detail` VALUES ('5', '一本不错的书', '10.03', '15.31', null, '书籍', '二手', '100', 'pic6.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-11', '1', null, null, null, '22');
INSERT INTO `s_detail` VALUES ('6', '零食好吃不贵', '10.00', '15.32', null, '零食', '食品', '100', 'pic1.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '1');
INSERT INTO `s_detail` VALUES ('7', '薯片多种口味供你选择，提供送货上门。限时', '10.00', '15.32', null, '零食', '食品', '100', 'pic2.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '2');
INSERT INTO `s_detail` VALUES ('8', '零食好吃不贵', '10.00', '15.35', null, '零食', '食品', '100', 'pic3.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '3');
INSERT INTO `s_detail` VALUES ('9', '薯片多种口味供你选择，提供送货上门。限时', '10.00', '15.98', null, '零食', '食品', '100', 'pic5.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '4');
INSERT INTO `s_detail` VALUES ('10', '零食好吃不贵', '10.00', '15.98', null, '零食', '食品', '100', 'pic4.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '5');
INSERT INTO `s_detail` VALUES ('11', '薯片多种口味供你选择，提供送货上门。限时', '10.00', '15.96', null, '零食', '食品', '100', 'pic6.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '6');
INSERT INTO `s_detail` VALUES ('12', '零食好吃不贵', '10.01', '15.95', null, '零食', '食品', '100', 'pic3.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '7');
INSERT INTO `s_detail` VALUES ('13', '薯片多种口味供你选择，提供送货上门。限时', '10.02', '15.98', null, '零食', '食品', '100', 'pic1.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '8');
INSERT INTO `s_detail` VALUES ('14', '零食好吃不贵', '10.03', '15.03', null, '零食', '食品', '100', 'pic2.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '9');
INSERT INTO `s_detail` VALUES ('15', '把最可口的食物带回家', '10.01', '15.05', null, '零食', '食品', '100', 'pic3.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '10');
INSERT INTO `s_detail` VALUES ('16', '零食好吃不贵', '10.00', '15.01', null, '零食', '食品', '100', 'pic4.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '11');
INSERT INTO `s_detail` VALUES ('17', '零食好吃不贵', '10.00', '15.01', null, '零食', '食品', '100', 'pic5.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '12');
INSERT INTO `s_detail` VALUES ('18', '零食好吃不贵', '10.00', '15.09', null, '零食', '食品', '100', 'pic6.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '13');
INSERT INTO `s_detail` VALUES ('19', '零食好吃不贵', '10.00', '15.98', null, '零食', '食品', '100', 'pic6.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '14');
INSERT INTO `s_detail` VALUES ('20', '零食好吃不贵', '10.00', '15.95', null, '零食', '食品', '100', 'pic3.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '15');
INSERT INTO `s_detail` VALUES ('21', '零食好吃不贵', '10.00', '15.96', null, '零食', '食品', '100', 'pic2.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '16');
INSERT INTO `s_detail` VALUES ('22', '零食好吃不贵', '10.00', '15.92', null, '零食', '食品', '100', 'pic1.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '17');
INSERT INTO `s_detail` VALUES ('23', '零食好吃不贵', '10.00', '15.93', null, '零食', '食品', '100', 'pic5.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '18');
INSERT INTO `s_detail` VALUES ('24', '好吃你就多吃点', '10.00', '15.65', null, '零食', '食品', '100', 'pic3.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '19');
INSERT INTO `s_detail` VALUES ('25', '零食好吃不贵', '10.00', '15.95', null, '书籍', '二手', '100', 'pic1.jpg', '20', '5.00', '书本是指装订成册的著作，包括纸质书、绢、，竹简、羊皮卷等。语出《后汉书》：酷吏樊晔为 天水郡 守， 凉州为之歌曰：‘宁见乳虎穴，不入冀府寺。“ 而江南书本‘穴’皆误作‘六’。学士因循，迷而不寤。', '0', '2016-06-07', '1', '', '', '', '20');

-- ----------------------------
-- Table structure for s_res
-- ----------------------------
DROP TABLE IF EXISTS `s_res`;
CREATE TABLE `s_res` (
  `srid` int(10) NOT NULL AUTO_INCREMENT,
  `uidc` int(10) DEFAULT NULL,
  `uids` int(10) DEFAULT NULL,
  `srcon` text,
  `srdate` date DEFAULT NULL,
  PRIMARY KEY (`srid`),
  KEY `FK_Reference_46` (`uidc`) USING BTREE,
  KEY `FK_Reference_47` (`uids`) USING BTREE,
  CONSTRAINT `s_res_ibfk_1` FOREIGN KEY (`uidc`) REFERENCES `u_userbase` (`uBid`),
  CONSTRAINT `s_res_ibfk_2` FOREIGN KEY (`uids`) REFERENCES `s_shop` (`ssid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_res
-- ----------------------------

-- ----------------------------
-- Table structure for s_shop
-- ----------------------------
DROP TABLE IF EXISTS `s_shop`;
CREATE TABLE `s_shop` (
  `ssid` int(10) NOT NULL AUTO_INCREMENT COMMENT '商店表id',
  `uBid` int(10) NOT NULL COMMENT '用户详细信息id',
  `ssname` varchar(30) NOT NULL COMMENT '商店名称',
  `sstype` varchar(20) NOT NULL COMMENT '商店类型',
  `ssrepution` varchar(10) DEFAULT NULL COMMENT '商店信誉',
  `sspraise` varchar(10) DEFAULT NULL COMMENT '商店口碑',
  `ssSchool` varchar(255) NOT NULL COMMENT '商店所在学校',
  `sslocationD` varchar(255) DEFAULT NULL COMMENT '商店所在城市',
  `sslocad` varchar(255) DEFAULT NULL COMMENT '商店详细地址',
  `ssimg` varchar(255) DEFAULT NULL COMMENT '商店图片',
  `ssmodel` int(1) DEFAULT NULL COMMENT '商店选择的模板',
  `ssdate` date DEFAULT NULL COMMENT '创建时间',
  `sskind` varchar(255) DEFAULT NULL COMMENT '本商店所有商品类别',
  `float2` varchar(255) DEFAULT NULL,
  `float3` varchar(255) DEFAULT NULL,
  `spread` int(1) DEFAULT '0' COMMENT '是否推广',
  `ssthemeC` int(2) DEFAULT '0' COMMENT '商店主题颜色',
  PRIMARY KEY (`ssid`),
  KEY `FK_Reference_42` (`uBid`) USING BTREE,
  CONSTRAINT `s_shop_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_shop
-- ----------------------------
INSERT INTO `s_shop` VALUES ('100', '1', '苏大骑行社', '运动户外', null, null, '苏州大学', '苏州市', '苏大逸夫楼前', '1463033013029.jpeg', '1', '2016-05-12', null, '[\"其他\",\"二手\"]', null, '1', '0');
INSERT INTO `s_shop` VALUES ('101', '1', '苏大水果超市', '食品', null, null, '苏州大学', '苏州市', '苏大老餐厅南50米', '1463033013028.jpeg', '0', '2016-05-12', null, null, null, '0', '0');
INSERT INTO `s_shop` VALUES ('104', '6', '123', '礼品鲜花', null, null, '枣阳市', '襄樊市', '123', '1463485014505.jpeg', '1', '0000-00-00', null, null, null, '0', '0');
INSERT INTO `s_shop` VALUES ('105', '1', 'ECHO', '丽人健身', null, null, '苏州大学', '苏州市', '', '1463541826711.jpeg', '1', '0000-00-00', null, null, null, '0', '1');
INSERT INTO `s_shop` VALUES ('106', '24', '', '数码家电', null, null, '南开大学', '天津市', 'dxc', null, null, '0000-00-00', null, null, null, '0', '0');
INSERT INTO `s_shop` VALUES ('107', '1', '11', '其他', null, null, '东湖区', '南昌市-东湖区-', null, '1482891576552.jpeg', '0', '2016-12-28', null, null, null, '0', '0');

-- ----------------------------
-- Table structure for s_shop_nav
-- ----------------------------
DROP TABLE IF EXISTS `s_shop_nav`;
CREATE TABLE `s_shop_nav` (
  `snid` int(10) NOT NULL AUTO_INCREMENT COMMENT '商店导航id',
  `ssid` int(10) NOT NULL,
  `sn_nav0` varchar(255) DEFAULT NULL,
  `sn_nav1` varchar(255) DEFAULT NULL,
  `sn_nav2` varchar(255) DEFAULT NULL,
  `sn_nav3` varchar(255) DEFAULT NULL,
  `sn_nav4` varchar(255) DEFAULT NULL,
  `flog1` varchar(255) DEFAULT NULL,
  `flog2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`snid`),
  KEY `ssid_sdid` (`ssid`) USING BTREE,
  CONSTRAINT `s_shop_nav_ibfk_1` FOREIGN KEY (`ssid`) REFERENCES `s_shop` (`ssid`) ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_shop_nav
-- ----------------------------
INSERT INTO `s_shop_nav` VALUES ('19', '101', '\"首页+/index\"', null, null, null, null, null, null);
INSERT INTO `s_shop_nav` VALUES ('85', '100', '\"首页+/index\"', '\"二手+/book\"', null, null, null, null, null);

-- ----------------------------
-- Table structure for thingsearch
-- ----------------------------
DROP TABLE IF EXISTS `thingsearch`;
CREATE TABLE `thingsearch` (
  `searchedid` int(10) NOT NULL,
  `searcishu` int(9) DEFAULT NULL,
  PRIMARY KEY (`searchedid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thingsearch
-- ----------------------------

-- ----------------------------
-- Table structure for u_address
-- ----------------------------
DROP TABLE IF EXISTS `u_address`;
CREATE TABLE `u_address` (
  `uBid` int(10) DEFAULT NULL,
  `uaddress` varchar(255) DEFAULT NULL,
  `u_address` int(10) NOT NULL AUTO_INCREMENT,
  `ubname` varchar(255) DEFAULT NULL,
  `uphone` varchar(11) DEFAULT NULL,
  `uyoubian` int(10) DEFAULT NULL,
  PRIMARY KEY (`u_address`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_address
-- ----------------------------
INSERT INTO `u_address` VALUES ('6', '中心广场国旗台下！~', '1', '凯凯', '15638899669', '215000');
INSERT INTO `u_address` VALUES ('6', '学生公寓5号楼228', '2', '大胖', '15638326953', '450000');
INSERT INTO `u_address` VALUES ('6', '苏州市吴中区独墅湖高教区文星广场高博培训机构', '3', '凯凯', '15738369683', '215000');
INSERT INTO `u_address` VALUES ('1', '学生公寓5号楼228', '5', '胡侠', '15362269887', '450000');
INSERT INTO `u_address` VALUES ('20', null, '7', null, null, null);
INSERT INTO `u_address` VALUES ('23', null, '8', null, null, null);
INSERT INTO `u_address` VALUES ('2', '高博国际学院', '9', '发凡', '15612345672', '12345');
INSERT INTO `u_address` VALUES ('25', null, '10', null, null, null);
INSERT INTO `u_address` VALUES ('27', null, '11', null, null, null);
INSERT INTO `u_address` VALUES ('26', null, '12', null, null, null);
INSERT INTO `u_address` VALUES ('28', null, '13', null, null, null);
INSERT INTO `u_address` VALUES ('29', null, '14', null, null, null);

-- ----------------------------
-- Table structure for u_card
-- ----------------------------
DROP TABLE IF EXISTS `u_card`;
CREATE TABLE `u_card` (
  `uBid` int(10) DEFAULT NULL COMMENT '收藏人id',
  `ucardid` int(10) NOT NULL AUTO_INCREMENT,
  `ucardkind` varchar(20) DEFAULT NULL,
  `ucardnum` int(19) DEFAULT NULL,
  PRIMARY KEY (`ucardid`),
  KEY `FK_Reference_52` (`uBid`) USING BTREE,
  CONSTRAINT `u_card_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_card
-- ----------------------------

-- ----------------------------
-- Table structure for u_cart
-- ----------------------------
DROP TABLE IF EXISTS `u_cart`;
CREATE TABLE `u_cart` (
  `ucartid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) NOT NULL COMMENT '收藏人id',
  `upid` int(10) DEFAULT NULL COMMENT '商品id',
  `ucartdata` varchar(10) NOT NULL,
  `sdid` int(10) DEFAULT NULL,
  PRIMARY KEY (`ucartid`),
  KEY `FK_Reference_6` (`uBid`) USING BTREE,
  KEY `fk_refe` (`upid`) USING BTREE,
  KEY `sdid` (`sdid`) USING BTREE,
  CONSTRAINT `u_cart_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`),
  CONSTRAINT `u_cart_ibfk_2` FOREIGN KEY (`upid`) REFERENCES `u_publish` (`upid`),
  CONSTRAINT `u_cart_ibfk_3` FOREIGN KEY (`sdid`) REFERENCES `s_detail` (`sdid`)
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_cart
-- ----------------------------
INSERT INTO `u_cart` VALUES ('163', '1', '33', '20160509', null);
INSERT INTO `u_cart` VALUES ('168', '1', '31', '20160515', null);
INSERT INTO `u_cart` VALUES ('169', '8', '36', '20160516', null);
INSERT INTO `u_cart` VALUES ('175', '2', null, '20160614', '4');
INSERT INTO `u_cart` VALUES ('176', '6', null, '20160627', '6');
INSERT INTO `u_cart` VALUES ('177', '6', '25', '20160627', null);
INSERT INTO `u_cart` VALUES ('178', '6', '36', '20160627', null);
INSERT INTO `u_cart` VALUES ('179', '1', '32', '20161128', null);
INSERT INTO `u_cart` VALUES ('180', '1', '27', '20161128', null);
INSERT INTO `u_cart` VALUES ('181', '1', '36', '20161128', null);
INSERT INTO `u_cart` VALUES ('182', '1', '35', '20161129', null);

-- ----------------------------
-- Table structure for u_collect
-- ----------------------------
DROP TABLE IF EXISTS `u_collect`;
CREATE TABLE `u_collect` (
  `ucoid` int(10) NOT NULL AUTO_INCREMENT,
  `ssid` int(10) DEFAULT NULL,
  `upid` int(10) DEFAULT NULL,
  `ppid` int(10) DEFAULT NULL,
  `uBid` int(10) DEFAULT NULL,
  PRIMARY KEY (`ucoid`),
  KEY `FK_Reference_32` (`ppid`) USING BTREE,
  KEY `FK_Reference_33` (`uBid`) USING BTREE,
  KEY `FK_Reference_35` (`upid`) USING BTREE,
  KEY `FK_Reference_36` (`ssid`) USING BTREE,
  CONSTRAINT `u_collect_ibfk_1` FOREIGN KEY (`ppid`) REFERENCES `p_post` (`ppid`),
  CONSTRAINT `u_collect_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`),
  CONSTRAINT `u_collect_ibfk_3` FOREIGN KEY (`upid`) REFERENCES `u_publish` (`upid`),
  CONSTRAINT `u_collect_ibfk_4` FOREIGN KEY (`ssid`) REFERENCES `s_shop` (`ssid`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_collect
-- ----------------------------
INSERT INTO `u_collect` VALUES ('54', null, null, '639', '6');
INSERT INTO `u_collect` VALUES ('56', null, null, '642', '6');
INSERT INTO `u_collect` VALUES ('57', null, '13', null, '6');
INSERT INTO `u_collect` VALUES ('58', null, '14', null, '2');
INSERT INTO `u_collect` VALUES ('59', null, '13', null, '6');

-- ----------------------------
-- Table structure for u_comment
-- ----------------------------
DROP TABLE IF EXISTS `u_comment`;
CREATE TABLE `u_comment` (
  `ucid` int(10) NOT NULL AUTO_INCREMENT,
  `upid` int(10) NOT NULL COMMENT '发布人id',
  `uBid` int(10) NOT NULL COMMENT '用户id',
  `uccon` text NOT NULL COMMENT '评论内容',
  `ucdate` varchar(10) NOT NULL COMMENT '评论时间',
  PRIMARY KEY (`ucid`),
  KEY `FK_Reference_10` (`upid`) USING BTREE,
  KEY `FK_Reference_40` (`uBid`) USING BTREE,
  CONSTRAINT `u_comment_ibfk_1` FOREIGN KEY (`upid`) REFERENCES `u_publish` (`upid`),
  CONSTRAINT `u_comment_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_comment
-- ----------------------------
INSERT INTO `u_comment` VALUES ('8', '19', '1', '我想看看这本书', '201604103');
INSERT INTO `u_comment` VALUES ('31', '19', '1', '这本书很不错。我也想看看', '201604103');
INSERT INTO `u_comment` VALUES ('32', '19', '1', '我想买这本书，方便在什么时候拿书呢', '201604103');
INSERT INTO `u_comment` VALUES ('33', '30', '1', '这本书怎么样', '20160507');
INSERT INTO `u_comment` VALUES ('34', '31', '6', '我也想看看！~', '20160509');
INSERT INTO `u_comment` VALUES ('35', '13', '2', '书可以看吗', '20160605');

-- ----------------------------
-- Table structure for u_deliver
-- ----------------------------
DROP TABLE IF EXISTS `u_deliver`;
CREATE TABLE `u_deliver` (
  `udid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) NOT NULL,
  `udnum` int(1) DEFAULT NULL,
  `uddate` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`udid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_deliver
-- ----------------------------

-- ----------------------------
-- Table structure for u_focus
-- ----------------------------
DROP TABLE IF EXISTS `u_focus`;
CREATE TABLE `u_focus` (
  `ufsid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) DEFAULT NULL,
  PRIMARY KEY (`ufsid`),
  KEY `FK_Reference_53` (`uBid`) USING BTREE,
  CONSTRAINT `u_focus_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_focus
-- ----------------------------

-- ----------------------------
-- Table structure for u_foot
-- ----------------------------
DROP TABLE IF EXISTS `u_foot`;
CREATE TABLE `u_foot` (
  `ssid` int(10) DEFAULT NULL,
  `upid` int(10) DEFAULT NULL,
  `ppid` int(10) DEFAULT NULL,
  `uf_id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`uf_id`),
  KEY `FK_Reference_24` (`upid`) USING BTREE,
  KEY `FK_Reference_25` (`ssid`) USING BTREE,
  KEY `FK_Reference_51` (`ppid`) USING BTREE,
  CONSTRAINT `u_foot_ibfk_1` FOREIGN KEY (`upid`) REFERENCES `u_publish` (`upid`),
  CONSTRAINT `u_foot_ibfk_2` FOREIGN KEY (`ssid`) REFERENCES `s_shop` (`ssid`),
  CONSTRAINT `u_foot_ibfk_3` FOREIGN KEY (`ppid`) REFERENCES `p_post` (`ppid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_foot
-- ----------------------------

-- ----------------------------
-- Table structure for u_friend
-- ----------------------------
DROP TABLE IF EXISTS `u_friend`;
CREATE TABLE `u_friend` (
  `u_friend` int(10) NOT NULL AUTO_INCREMENT,
  `uGroup` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `uBid` int(10) DEFAULT NULL,
  `uFriend` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `uimg` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`u_friend`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of u_friend
-- ----------------------------
INSERT INTO `u_friend` VALUES ('1', '同学', '1', '徐凯', 'upload\\1462507275911.jpeg');
INSERT INTO `u_friend` VALUES ('2', '网友', '1', '胡夏', 'upload\\1461899820367.jpeg');
INSERT INTO `u_friend` VALUES ('3', '网友', '1', '刘宇飞', 'upload\\1462693466185.jpeg');
INSERT INTO `u_friend` VALUES ('4', '网友', '1', '连鹏飞', 'upload\\1462507275911.jpeg');
INSERT INTO `u_friend` VALUES ('5', '同学', '1', '户鑫鑫', 'upload\\1461899820367.jpeg');
INSERT INTO `u_friend` VALUES ('6', '同学', '1', '徐畅', 'upload\\1462693466185.jpeg');

-- ----------------------------
-- Table structure for u_order
-- ----------------------------
DROP TABLE IF EXISTS `u_order`;
CREATE TABLE `u_order` (
  `uoid` int(11) NOT NULL AUTO_INCREMENT,
  `uodpid` varchar(10) NOT NULL,
  `uBid` int(10) NOT NULL,
  `uopay` varchar(20) NOT NULL,
  `uodelivery` varchar(10) NOT NULL,
  `uoaddress` text NOT NULL,
  PRIMARY KEY (`uoid`),
  KEY `FK_Reference_50` (`uBid`) USING BTREE,
  CONSTRAINT `u_order_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_order
-- ----------------------------

-- ----------------------------
-- Table structure for u_present
-- ----------------------------
DROP TABLE IF EXISTS `u_present`;
CREATE TABLE `u_present` (
  `uBid` int(10) DEFAULT NULL,
  `uzid` int(10) NOT NULL AUTO_INCREMENT,
  `uzkind` varchar(10) DEFAULT NULL,
  `uzimg` varchar(255) DEFAULT NULL,
  `uzname` varchar(30) NOT NULL,
  PRIMARY KEY (`uzid`),
  KEY `FK_Reference_54` (`uBid`) USING BTREE,
  CONSTRAINT `u_present_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_present
-- ----------------------------

-- ----------------------------
-- Table structure for u_publish
-- ----------------------------
DROP TABLE IF EXISTS `u_publish`;
CREATE TABLE `u_publish` (
  `upid` int(10) NOT NULL AUTO_INCREMENT COMMENT '发布消息id',
  `uBid` int(10) NOT NULL COMMENT '发布人id',
  `uptitle` varchar(30) NOT NULL COMMENT '发布信息标题',
  `upkind` varchar(20) NOT NULL COMMENT '消息类别',
  `upnewold` varchar(10) NOT NULL COMMENT '新旧',
  `updelivery` int(1) DEFAULT NULL COMMENT '配送方式',
  `upschool` varchar(100) DEFAULT NULL,
  `uppost` int(1) DEFAULT NULL,
  `upappoin` int(1) DEFAULT NULL,
  `upinvite` int(1) DEFAULT NULL,
  `upprice` varchar(10) NOT NULL,
  `noise` text NOT NULL COMMENT '发布消息的内容',
  `up_img` varchar(255) DEFAULT NULL,
  `upauthor` varchar(10) NOT NULL,
  `upphone` varchar(11) NOT NULL,
  `update` varchar(8) NOT NULL DEFAULT '',
  `upflag` int(5) DEFAULT NULL,
  PRIMARY KEY (`upid`),
  KEY `FK_Reference_15` (`uBid`) USING BTREE,
  CONSTRAINT `u_publish_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_user` (`uId`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_publish
-- ----------------------------
INSERT INTO `u_publish` VALUES ('13', '58', '一本很好看的武侠故事', '书籍', '全新', '1', '苏州大学', null, '1', null, '面议', '<p>这是一本很好看的武侠故事书，欢迎你来选购呀</p>', '[\"1461899820360.jpeg\"]', '刘宇飞', '15537136461', '20160329', null);
INSERT INTO `u_publish` VALUES ('14', '58', '文学书', '书籍', '全新', '1', '苏州科技大学', '1', null, null, '面议', '<p>文学的的素养，从来都不会止步。让我们荡漾在文学中，开始我们的学习</p>', '[\"1461899820360.jpeg\",\"1461899820378.jpeg\",\"1461899820367.jpeg\"]', '刘宇飞', '15537136461', '20160329', null);
INSERT INTO `u_publish` VALUES ('15', '58', '《高等数学2》', '书籍', '全新', '1', '苏州大学', null, '1', null, '面议', '<p>这本书上我做了很多笔记，你可以来选购呀</p>', '[\"1461910287228.jpeg\"]', '徐恺', '15537136461', '20160329', null);
INSERT INTO `u_publish` VALUES ('19', '60', '八成新高效能人士七习惯', '书籍', '全新', '1', '苏州科技大学', '1', null, null, '12.00', '<p>这是一本很不错的书，看来会对你有很大的帮助。</p>', '[\"1462000801787.jpeg\"]', '老徐', '15537136461', '20160330', null);
INSERT INTO `u_publish` VALUES ('20', '60', 'java学习必备神器', '书籍', '全新', '1', '苏州大学', '1', '1', null, '面议', '<p>这是一本很不错的java学习入门书籍。欢迎你来选购。价格可以商量</p>', null, '老徐', '15537136461', '20160330', null);
INSERT INTO `u_publish` VALUES ('21', '60', '只为途中与你相见', '书籍', '全新', '1', '苏州大学', '1', null, null, '面议', '<p>仓央嘉措只为途中与你相见</p>', null, '老徐', '15537136461', '20160330', null);
INSERT INTO `u_publish` VALUES ('22', '60', '这是一本很不错的书', '书籍', '全新', '1', '苏州大学', '1', '1', '1', '面议', '<p>这是本很好的书，随时欢迎你来选购。</p>', '[\"1462160159690.jpeg\"]', '那个姑娘', '15537136461', '20160402', null);
INSERT INTO `u_publish` VALUES ('23', '60', '一本很不错的计算机书', '书籍', '全新', '1', '苏州大学', '1', '1', null, '面议', '<p>则是一本很好的书，换你你来买</p>', '[\"1462168868528.jpeg\"]', '老徐', '15537136461', '20160402', null);
INSERT INTO `u_publish` VALUES ('24', '58', '《只为途中与你相见》', '书籍', '全新', '1', '苏州大学', '1', null, null, '面议', '<p>这是一本很不错的书，仓央嘉措带你走进别样的世界</p>', '', '仓央嘉措', '15537136461', '20160403', null);
INSERT INTO `u_publish` VALUES ('25', '58', '一本计算机书', '书籍', '全新', '1', '苏州科技大学', null, null, null, '面议', '<p>java学习之路，永不止步</p>', '[\"1462240687203.jpeg\"]', '老徐', '15537136461', '20160403', null);
INSERT INTO `u_publish` VALUES ('26', '58', '《毛泽东传》自己的书。还比较新', '书籍', '全新', '1', '苏州大学', '1', '1', null, '面议', '<p>很不的一本书，随时拿走</p>', '[\"1462241222583.jpeg\"]', '范翔', '15537136461', '20160403', null);
INSERT INTO `u_publish` VALUES ('27', '58', '《简爱》免费送', '书籍', '全新', '1', '苏州大学', null, null, null, '0.00', '<p>免费送书啦，免费送免费啦</p>', '[\"1462241524954.jpeg\"]', '胡侠', '15537136461', '20160503', null);
INSERT INTO `u_publish` VALUES ('28', '58', '世界名著若干，欢迎选购', '书籍', '全新', '1', '苏州科技大学', '1', '1', '1', '面议', '<p>喜欢世界名著的人可以过来联系我。我这边有好几本世界名著。</p>', '[\"1462257090943.jpeg\",\"1462257090877.jpeg\",\"1462257090851.jpeg\"]', '徐恺', '15537136461', '20160503', null);
INSERT INTO `u_publish` VALUES ('29', '74', 'java学习', '书籍', '全新', '1', '苏州科技大学', '1', null, null, '20', '<p>喜欢java的可以联系我。价格合理。</p>', null, '王干干', '15537136461', '20160505', null);
INSERT INTO `u_publish` VALUES ('30', '60', '法律系《犯罪心理学》', '书籍', '95成新', '1', '苏州大学', '1', '1', null, '面议', '<p>犯罪心理学（Criminal Psychology）是一门研究犯人的意志、思想、意图及反应的学科，和犯罪人类学相关联。</p>', '[\"1462414641292.jpeg\"]', '啊Q', '15534123642', '20160505', null);
INSERT INTO `u_publish` VALUES ('31', '60', '梦的解析', '书籍', '95成新', '1', '苏州大学', null, null, null, '面议', '<p>梦的解析（德语：Die Traumdeutung 英文：The Interpretation of Dreams），是奥地利心理学家西格蒙得·弗洛伊德的一本著作，又译做《解梦》，经典的心理学书籍。</p>', '[\"1462414757374.jpeg\"]', '老K', '15537136461', '20160505', null);
INSERT INTO `u_publish` VALUES ('32', '60', '《围城》', '书籍', '全新', '1', '', null, '1', null, '面议', '<p>《围城》是钱钟书所著的长篇小说，是中国现代文学史上一部风格独特的讽刺小说。被誉为“新儒林外史”。第一版于1947年由上海晨光出版公司出版。故事主要写抗战初期知识分子的群相。围城故事发生于1920到1940年代。</p>', '[\"1462415520273.jpeg\",\"1462415520293.jpeg\"]', '不知道', '15371364623', '20160505', null);
INSERT INTO `u_publish` VALUES ('33', '60', '一本书一个故事，只有你和我', '书籍', '全新', '1', '苏州科技大学', '1', '1', '1', '12.00', '<p>读一本好书，品人间滋味</p>', '[\"1462693466185.jpeg\",\"1462693466224.jpeg\"]', '连鹏飞', '15537136461', '20160508', null);
INSERT INTO `u_publish` VALUES ('34', '60', '一本不错的书', '工艺', '7成新及以下', '1', '苏州大学', '1', null, null, '面议', '<p>这是一本很好的书。不错</p>', '[\"1462934066687.jpeg\"]', '那个男人', '15537136461', '20160511', null);
INSERT INTO `u_publish` VALUES ('35', '60', '这本书很不错呀', '书籍', '全新', '1', '苏州大学', '1', null, null, '面议', '<p>你好，这本书价格实惠，非常适合不同人看。希望爱学习的你能喜欢</p>', '[\"1463382489885.jpeg\"]', '老K', '15537136461', '20160516', null);
INSERT INTO `u_publish` VALUES ('36', '60', '一本不错的书欢迎选购', '书籍', '全新', '1', '苏州大学', '1', null, null, '面议', '<p>一本不错的书欢迎选购										</p>', '[\"1463382489885.jpeg\",\"1463382489889.jpeg\"]', 'kk', '15537136461', '20160516', null);

-- ----------------------------
-- Table structure for u_res
-- ----------------------------
DROP TABLE IF EXISTS `u_res`;
CREATE TABLE `u_res` (
  `ucid` int(10) DEFAULT NULL,
  `urid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) DEFAULT NULL,
  `urcon` text,
  `urdate` date DEFAULT NULL,
  PRIMARY KEY (`urid`),
  KEY `FK_Reference_16` (`ucid`) USING BTREE,
  KEY `FK_Reference_48` (`uBid`) USING BTREE,
  CONSTRAINT `u_res_ibfk_1` FOREIGN KEY (`ucid`) REFERENCES `u_comment` (`ucid`),
  CONSTRAINT `u_res_ibfk_2` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_res
-- ----------------------------

-- ----------------------------
-- Table structure for u_storeg_cart
-- ----------------------------
DROP TABLE IF EXISTS `u_storeg_cart`;
CREATE TABLE `u_storeg_cart` (
  `ucartid` int(10) NOT NULL AUTO_INCREMENT,
  `ssid` int(10) NOT NULL,
  `uid` int(10) NOT NULL,
  `number` int(3) DEFAULT NULL COMMENT '购买的数量',
  `s_detailid` int(10) NOT NULL,
  `ucartdate` datetime DEFAULT NULL,
  PRIMARY KEY (`ucartid`),
  KEY `wai` (`ssid`) USING BTREE,
  KEY `wai2` (`uid`) USING BTREE,
  KEY `wai3` (`s_detailid`) USING BTREE,
  CONSTRAINT `u_storeg_cart_ibfk_1` FOREIGN KEY (`s_detailid`) REFERENCES `s_detail` (`sdid`),
  CONSTRAINT `u_storeg_cart_ibfk_2` FOREIGN KEY (`ssid`) REFERENCES `s_shop` (`ssid`),
  CONSTRAINT `u_storeg_cart_ibfk_3` FOREIGN KEY (`uid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_storeg_cart
-- ----------------------------

-- ----------------------------
-- Table structure for u_user
-- ----------------------------
DROP TABLE IF EXISTS `u_user`;
CREATE TABLE `u_user` (
  `uId` int(10) NOT NULL AUTO_INCREMENT,
  `upass` varchar(20) NOT NULL,
  `uname` varchar(15) NOT NULL,
  `udate` varchar(8) NOT NULL,
  `uimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uId`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_user
-- ----------------------------
INSERT INTO `u_user` VALUES ('58', '123', '123', '20160325', 'img\\user\\user.jpg');
INSERT INTO `u_user` VALUES ('60', '1', '1', '20160325', 'img\\user\\user1.jpg');
INSERT INTO `u_user` VALUES ('74', '123456', '15537136461', '20160505', '');
INSERT INTO `u_user` VALUES ('75', 'fff', 'fff', '20160509', 'img\\user\\user2.png');
INSERT INTO `u_user` VALUES ('76', '123456', '大麻袋', '20160516', null);
INSERT INTO `u_user` VALUES ('77', '121212', 'Tara', '20160516', null);
INSERT INTO `u_user` VALUES ('78', '123456', '123456', '20160517', null);
INSERT INTO `u_user` VALUES ('79', '123456', '15500000000', '20160517', null);
INSERT INTO `u_user` VALUES ('80', '123456', '15600000000', '20160517', null);
INSERT INTO `u_user` VALUES ('81', '1111', 'eee', '20160704', null);

-- ----------------------------
-- Table structure for u_userbase
-- ----------------------------
DROP TABLE IF EXISTS `u_userbase`;
CREATE TABLE `u_userbase` (
  `uBid` int(10) NOT NULL AUTO_INCREMENT,
  `uId` int(10) DEFAULT NULL,
  `ubname` varchar(20) DEFAULT NULL COMMENT '姓名',
  `ubsno` int(12) DEFAULT NULL COMMENT '学号',
  `ubpass` varchar(20) DEFAULT NULL COMMENT '密码',
  `ubschool` varchar(30) DEFAULT NULL COMMENT '学校',
  `ubsex` int(1) DEFAULT '1',
  `ubgold` int(5) unsigned DEFAULT '0' COMMENT '金币',
  `ub_grade` varchar(10) DEFAULT NULL COMMENT '年级',
  `ubemail` varchar(25) DEFAULT NULL COMMENT '邮箱',
  `ublevel` int(2) DEFAULT NULL COMMENT '用户等级',
  `ub_img` varchar(255) DEFAULT NULL,
  `ubtolk` varchar(50) DEFAULT NULL COMMENT '个人名言，用于显示在个人主页上',
  `udeliverid` int(1) DEFAULT NULL,
  `ubbirthday` varchar(50) DEFAULT NULL,
  `dotime` datetime DEFAULT NULL,
  PRIMARY KEY (`uBid`),
  KEY `FK_Reference_39` (`uId`) USING BTREE,
  CONSTRAINT `u_userbase_ibfk_1` FOREIGN KEY (`uId`) REFERENCES `u_user` (`uId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_userbase
-- ----------------------------
INSERT INTO `u_userbase` VALUES ('1', '60', '胡侠', null, null, '苏州大学', '1', '0', null, '792501610@qq.com', null, 'img\\user\\user.jpg', null, null, null, '2016-06-08 09:06:16');
INSERT INTO `u_userbase` VALUES ('2', '58', 'fiefie', null, null, '苏州大学', '1', '1', null, 'wafxdyx@163.com', null, 'img\\user\\user1.jpg', null, null, null, '2016-06-16 08:57:48');
INSERT INTO `u_userbase` VALUES ('6', '75', '凯凯', null, null, null, '1', '1', null, '792501610@qq.com', null, 'img\\user\\user2.jpg', null, null, null, '2016-06-27 14:40:38');
INSERT INTO `u_userbase` VALUES ('20', '91', '鑫鑫', null, null, null, '1', '0', null, '314912145@qq.com', null, 'img\\user\\user2.jpg', null, null, null, '2016-06-11 09:06:32');
INSERT INTO `u_userbase` VALUES ('23', '94', 'fff', null, null, null, '1', '0', null, null, null, 'img\\user\\user.jpg', null, null, null, '2016-06-16 09:06:36');
INSERT INTO `u_userbase` VALUES ('24', '81', null, null, null, null, '1', '0', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for u_usergold
-- ----------------------------
DROP TABLE IF EXISTS `u_usergold`;
CREATE TABLE `u_usergold` (
  `ugid` int(10) NOT NULL AUTO_INCREMENT,
  `uBid` int(10) DEFAULT NULL,
  `uid` int(10) DEFAULT NULL,
  `ugcount` int(5) DEFAULT NULL,
  PRIMARY KEY (`ugid`),
  KEY `FK_Reference_37` (`uBid`) USING BTREE,
  CONSTRAINT `u_usergold_ibfk_1` FOREIGN KEY (`uBid`) REFERENCES `u_userbase` (`uBid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of u_usergold
-- ----------------------------

-- ----------------------------
-- View structure for dianzan
-- ----------------------------
DROP VIEW IF EXISTS `dianzan`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER  VIEW `dianzan` AS select `p_z`.`p_zid` AS `p_zid`,`p_z`.`ppid` AS `ppid`,`u_userbase`.`ub_img` AS `ub_img`,`p_z`.`uBid` AS `uBid` from (`p_z` join `u_userbase` on((`p_z`.`uBid` = `u_userbase`.`uBid`))) ;

-- ----------------------------
-- View structure for fatie
-- ----------------------------
DROP VIEW IF EXISTS `fatie`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER  VIEW `fatie` AS select `p_post`.`ppid` AS `ppid`,`p_post`.`uBid` AS `uBid`,`p_post`.`ppcontent` AS `ppcontent`,`p_post`.`pptime` AS `pptime`,`p_post`.`pmid` AS `pmid`,`p_post`.`ppimg` AS `ppimg`,`p_post`.`pzan` AS `pzan`,`p_post`.`ptitle` AS `ptitle`,`p_post`.`plook` AS `plook`,`u_userbase`.`ubname` AS `ubname`,`u_userbase`.`ub_img` AS `ub_img` from (`p_post` join `u_userbase` on((`p_post`.`uBid` = `u_userbase`.`uBid`))) ;

-- ----------------------------
-- View structure for fatieshoucang
-- ----------------------------
DROP VIEW IF EXISTS `fatieshoucang`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER  VIEW `fatieshoucang` AS select `u_collect`.`uBid` AS `uBid`,`fatie`.`ptitle` AS `ptitle`,`fatie`.`pptime` AS `pptime`,`fatie`.`ubname` AS `ubname`,`u_collect`.`ppid` AS `ppid` from (`u_collect` join `fatie` on((`u_collect`.`ppid` = `fatie`.`ppid`))) ;

-- ----------------------------
-- View structure for huifu
-- ----------------------------
DROP VIEW IF EXISTS `huifu`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER  VIEW `huifu` AS select `p_res`.`uBid` AS `uBid`,`p_res`.`ppid` AS `ppid`,`p_res`.`prcontent` AS `prcontent`,`p_res`.`p_prid` AS `p_prid`,`p_res`.`prid` AS `prid`,`p_res`.`prflag` AS `prflag`,`u_userbase`.`ubname` AS `ubname`,`u_userbase`.`ub_img` AS `ub_img` from (`p_res` join `u_userbase` on((`p_res`.`uBid` = `u_userbase`.`uBid`))) ;

-- ----------------------------
-- View structure for user_ad_ba
-- ----------------------------
DROP VIEW IF EXISTS `user_ad_ba`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER  VIEW `user_ad_ba` AS select `u_address`.`uaddress` AS `uaddress`,`u_address`.`uphone` AS `uphone`,`u_userbase`.`uBid` AS `uBid`,`u_userbase`.`uId` AS `uId`,`u_userbase`.`ubname` AS `ubname`,`u_userbase`.`ubsno` AS `ubsno`,`u_userbase`.`ubpass` AS `ubpass`,`u_userbase`.`ubschool` AS `ubschool`,`u_userbase`.`ubsex` AS `ubsex`,`u_userbase`.`ubgold` AS `ubgold`,`u_userbase`.`ub_grade` AS `ub_grade`,`u_userbase`.`ubemail` AS `ubemail`,`u_userbase`.`ublevel` AS `ublevel`,`u_userbase`.`ub_img` AS `ub_img`,`u_userbase`.`udeliverid` AS `udeliverid`,`u_userbase`.`ubbirthday` AS `ubbirthday` from (`u_userbase` join `u_address` on((`u_address`.`uBid` = `u_userbase`.`uBid`))) ;

-- ----------------------------
-- View structure for view_s_good_nav
-- ----------------------------
DROP VIEW IF EXISTS `view_s_good_nav`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_s_good_nav` AS select `s_shop`.`ssid` AS `ssid`,`s_shop`.`ssname` AS `ssname`,`s_shop`.`sstype` AS `sstype`,`s_shop`.`ssrepution` AS `ssrepution`,`s_shop`.`sspraise` AS `sspraise`,`s_shop`.`ssSchool` AS `ssSchool`,`s_shop`.`sslocationD` AS `sslocationD`,`s_shop`.`sslocad` AS `sslocad`,`s_shop`.`ssimg` AS `ssimg`,`s_shop`.`ssmodel` AS `ssmodel`,`s_shop`.`ssdate` AS `ssdate`,`s_shop`.`sskind` AS `sskind`,`s_shop`.`float2` AS `float2`,`s_shop`.`spread` AS `spread`,`s_shop_nav`.`sn_nav0` AS `sn_nav0`,`s_shop_nav`.`sn_nav1` AS `sn_nav1`,`s_shop_nav`.`sn_nav2` AS `sn_nav2`,`s_shop_nav`.`sn_nav3` AS `sn_nav3`,`s_shop_nav`.`sn_nav4` AS `sn_nav4`,`s_detail`.`sdtitle` AS `sdtitle`,`s_detail`.`sdpriceout` AS `sdpriceout`,`s_detail`.`sdkind` AS `sdkind`,`s_detail`.`sdgroup` AS `sdgroup`,`s_detail`.`sdimg` AS `sdimg`,`s_detail`.`sdnumber` AS `sdnumber`,`s_detail`.`sdlogistics` AS `sdlogistics`,`s_detail`.`sdid` AS `sdid` from ((`s_shop` join `s_shop_nav` on((`s_shop_nav`.`ssid` = `s_shop`.`ssid`))) join `s_detail` on((`s_detail`.`ssid` = `s_shop`.`ssid`))) ;

-- ----------------------------
-- View structure for view_user_comment
-- ----------------------------
DROP VIEW IF EXISTS `view_user_comment`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `view_user_comment` AS SELECT u_userbase.uBid,u_comment.ucid,u_comment.upid,u_userbase.ubname,u_userbase.ub_img,u_comment.uccon
FROM u_userbase INNER JOIN u_comment ON u_userbase.uBid=u_comment.uBid ;
