var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            //此处修改字体颜色,最后的 0 和 1 不要改
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "_"; // 此处是末尾字符,如果想用光标样式可以改为"|"
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % wordList.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    //此处改成你自己的诗词
    wordList = [ 
            "最是人间留不住，朱颜辞镜花辞树.   ——王国维《蝶恋花》",
            "人生到处知何似，应似飞鸿踏雪泥.   ——苏轼《和子由渑池怀旧》",
            "今朝有酒今朝醉，明日愁来明日愁.   ——罗隐《自遣》",
            "蜗角虚名，蝇头微利，算来著甚干忙.   ——苏轼《满庭芳》",
            "人生自古谁无死？留取丹心照汗青.   ——文天祥《过零丁洋》",
            "盛年不重来，一日难再晨.   ——陶渊明《杂诗》",
            "人生如逆旅，我亦是行人.   ——苏轼《临江仙》",
            "世事短如春梦，人情薄似秋云.   ——朱敦儒《西江月》",
            "欲穷千里目，更上一层楼.   ——王之涣《登鹳雀楼》",
            "天生我材必有用，千金散尽还复来.   ——李白《将进酒》",
            "曾经沧海难为水，除却巫山不是云.   ——元稹《离思五首·其四》",
            "举头望明月，低头思故乡.   ——李白《静夜思》",
            "十年生死两茫茫，不思量，自难忘.   ——苏轼《江城子·乙卯正月二十日夜记梦》",
            "此情可待成追忆，只是当时已惘然.   ——李商隐《锦瑟》",
            "还君明珠双泪垂，何不相逢未嫁时.   ——张籍《节妇吟》",
            "执手相看泪眼，竟无语凝噎.   ——柳永《雨霖铃》",
            "衣带渐宽终不悔，为伊消得人憔悴.   ——柳永《蝶恋花》",
            "问君能有几多愁？恰似一江春水向东流.   ——李煜《虞美人》",
            "相思相见知何日，此时此夜难为情.   ——李白《三五七言》",
            "物是人非事事休，欲语泪先流.   ——李清照《武陵春·春晚》",
            "曲径通幽处，禅房花木深.   ——常建《题破山寺后禅院》",
            "梨花院落溶溶月，柳絮池塘淡淡风.   ——晏殊《寓意》",
            "大漠孤烟直，长河落日圆.   ——王维《使至塞上》",
            "春色满园关不住，一枝红杏出墙来.   ——叶绍翁《游园不值》",
            "小荷才露尖尖角，早有蜻蜓立上头.   ——杨万里《小池》",
            "明月松间照，清泉石上流.   ——王维《山居秋暝》",
            "天苍苍，野茫茫，风吹草低见牛羊.   ——《敕勒歌》（南北朝民歌）",
            "落霞与孤鹜齐飞，秋水共长天一色.   ——王勃《滕王阁序》",
            "接天莲叶无穷碧，映日荷花别样红.   ——杨万里《晓出净慈寺送林子方》",
            "山光悦鸟性，潭影空人心.   ——常建《题破山寺后禅院》",
            "少壮不努力，老大徒伤悲.   ——《长歌行》（汉乐府）",
            "千淘万漉虽辛苦，吹尽狂沙始到金.   ——刘禹锡《浪淘沙》",
            "老骥伏枥，志在千里.   ——曹操《龟虽寿》",
            "黑发不知勤学早，白首方悔读书迟.   ——颜真卿《劝学》",
            "咬定青山不放松，立根原在破岩中.   ——郑燮《竹石》",
            "莫等闲，白了少年头，空悲切.   ——岳飞《满江红》",
            "长风破浪会有时，直挂云帆济沧海.   ——李白《行路难》",
            "不经一番寒彻骨，怎得梅花扑鼻香.   ——黄檗禅师《上堂开示颂》",
            "千磨万击还坚劲，任尔东西南北风.   ——郑燮《竹石》",
            "少年易老学难成，一寸光阴不可轻.   ——朱熹《偶成》",
            "明日隔山岳，世事两茫茫.   ——杜甫《赠卫八处士》",
            "劝君更尽一杯酒，西出阳关无故人.   ——王维《送元二使安西》",
            "孤帆远影碧空尽，唯见长江天际流.   ——李白《黄鹤楼送孟浩然之广陵》",
            "相见时难别亦难，东风无力百花残.   ——李商隐《无题》",
            "夕阳西下，断肠人在天涯.   ——马致远《天净沙·秋思》",
            "独在异乡为异客，每逢佳节倍思亲.   ——王维《九月九日忆山东兄弟》",
            "故国三千里，深宫二十年.   ——张祜《宫词》",
            "念天地之悠悠，独怆然而涕下.   ——陈子昂《登幽州台歌》",
            "何处合成愁？离人心上秋.   ——吴文英《唐多令·惜别》",
            "欲寄彩笺兼尺素，山长水阔知何处.   ——晏殊《蝶恋花》",
            "人生若只如初见，何事秋风悲画扇.   ——纳兰性德《木兰花令·拟古决绝词》",
            "醉后不知天在水，满船清梦压星河.   ——唐珙《题龙阳县青草湖》",
            "我见青山多妩媚，料青山见我应如是.   ——辛弃疾《贺新郎·甚矣吾衰矣》",
            "一蓑烟雨任平生.   ——苏轼《定风波》",
            "拣尽寒枝不肯栖，寂寞沙洲冷.   ——苏轼《卜算子·黄州定慧院寓居作》"
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
binft(document.getElementById('binft'));