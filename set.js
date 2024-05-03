layui.use(['form', 'laydate','layer'], function(){
  var form = layui.form
  ,layer = layui.layer 
  ,laydate = layui.laydate; 
  //日期
  Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
      "M+": this.getMonth() + 1, // 月份
      "d+": this.getDate(), // 日
      "h+": this.getHours(), // 小时
      "m+": this.getMinutes(), // 分
      "s+": this.getSeconds(), // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
  }

  laydate.render({
    elem: '#datetime' 
    ,type:'datetime'
    ,format: 'yyyy/MM/dd HH:mm:ss'
    ,value: new Date().Format("yyyy/MM/dd hh:mm:ss")
    ,isInitValue: true
  });  

  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
  var active = {
      notice: function(){
        //示范一个公告层 
        var index=layer.open({
          type: 1
          ,title: false //不显示标题栏
          ,closeBtn: false 
          ,shade: 0.8 
          ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
          // ,btn: ['排盘','关闭']
          ,btnAlign: 'c'
          ,moveType: 1 //拖拽模式，0或者1
          ,content: $("#window") 
        });
        layer.full(index);
      },  
  };

  this.active = active;
  active.notice();
  $("#record").click(function(){ 
     location.href = "record.html";
  }); 
  
  $('#layerDemo .layui-btn').on('click', function(){ 
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(this, othis) : '';
  });   

  function GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
              theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
          }
      }
      return theRequest;
  } 
  var Request = new Object();
  Request = GetRequest();  
   
  if(typeof(Request["title"])!="undefined" && typeof(Request["datetime"])!="undefined" && typeof(Request["leibie"])!="undefined" && typeof(Request["yao6"])!="undefined"  && typeof(Request["yao5"])!="undefined" && typeof(Request["yao4"])!="undefined" && typeof(Request["yao3"])!="undefined" && typeof(Request["yao2"])!="undefined" && typeof(Request["yao1"])!="undefined" && typeof(Request["group"])!="undefined"){
   
    // $("input[name='title'").val(Request["title"]);
    // $("input[name='datetime']").val(Request["datetime"]);
    // $("input[name='leibie']").val(Request["leibie"]);
    // $("#yao6_sl").val(Request["yao6"]); 
    // $("#yao5_sl").val(Request["yao5"]); 
    // $("#yao4_sl").val(Request["yao4"]); 
    // $("#yao3_sl").val(Request["yao3"]); 
    // $("#yao2_sl").val(Request["yao2"]); 
    // $("#yao1_sl").val(Request["yao1"]); 

    form.val('example', {
      "title": Request["title"]  
      ,"datetime": Request["datetime"]
      ,"leibie": Request["leibie"]
      ,"yao6": Request["yao6"]  
      ,"yao5": Request["yao5"]  
      ,"yao4": Request["yao4"]  
      ,"yao3": Request["yao3"]  
      ,"yao2": Request["yao2"]  
      ,"yao1": Request["yao1"]  
      ,"group": Request["group"]  
      ,"yuerizhi":  typeof(Request["yuerizhi"])!="undefined"?Request["yuerizhi"]:""  
      ,"remark":  typeof(Request["remark"])!="undefined"?Request["remark"]:""  
    });
  } 
 
   

  //监听提交
  form.on('submit(demo1)', function(data){   
    var title = data.field.title;
    var datetime = data.field.datetime;
    var leibie = data.field.leibie;
    var yao1 = data.field.yao1;
    var yao2 = data.field.yao2;
    var yao3 = data.field.yao3;
    var yao4 = data.field.yao4;
    var yao5 = data.field.yao5;
    var yao6 = data.field.yao6; 
    var group = data.field.group; 
    var yuerizhi = data.field.yuerizhi;   

    if(title.replace(/(^\s*)|(\s*$)/g, "")==""){
      layer.msg('请输入占问内容！', {icon: 5});
      return false;
    }

    if(yao1=='-1' || yao2=='-1' || yao3=='-1' || yao4=='-1' || yao5=='-1' || yao6=='-1'){
      layer.msg('请输入完整的六码！', {icon: 5});
      return false;
    }

    if(group==""){
      layer.msg('请输入分组！', {icon: 5});
      return false;
    }

    yuerizhi = data.field.yuerizhi; 
    remark = $('#pizhu').val(); 
    $("#baocun").click(function(){ 
      var title = data.field.title;
      var datetime = data.field.datetime;
      var leibie = data.field.leibie;
      // yuerizhi = data.field.yuerizhi;
      var yao1 = data.field.yao1;
      var yao2 = data.field.yao2;
      var yao3 = data.field.yao3;
      var yao4 = data.field.yao4;
      var yao5 = data.field.yao5;
      var yao6 = data.field.yao6; 
      var group = data.field.group; 
      var remark = $('#pizhu').val();  

      arrayObj = []
      var jsonData = localStorage.getItem("data") 
      if(jsonData!=null){ 
        arrayObj = JSON.parse(jsonData)
      } 
      var obj ={
        "title": title,
        "datetime": datetime,
        "leibie": leibie,
        "yao1": yao1,
        "yao2": yao2,
        "yao3": yao3,
        "yao4": yao4,
        "yao5": yao5,
        "yao6": yao6,
        "yuerizhi": yuerizhi,
        "group": group,
        "remark": remark,
      }  
      var isExist = -1; 
      for(var i=0;i<arrayObj.length;i++){  
          if(arrayObj[i].title==obj.title && arrayObj[i].datetime==obj.datetime && arrayObj[i].yuerizhi==obj.yuerizhi){
            isExist = i;
            break;
          } 
      } 
      if(isExist==-1){
        arrayObj.unshift(obj)
      }else{
        arrayObj[isExist]=obj;
      }
      
      jsonData=JSON.stringify(arrayObj) 
      localStorage.setItem("data", jsonData); 
      layer.msg("保存成功", {icon: 1,time:1000},function(){
        // location.href="./record.html?fenzu="+group
     });   
    }); 

     //测试
    //  yao1=1
    //  yao2=0
    //  yao3=2
    //  yao4=0
    //  yao5=2
    //  yao6=3
     //测试结束 

    $("#yaowei").append()
    $("#title").text(title);
    $("#theTime").text(datetime); 
    $("#fenzu").text(group); 
    $("#beimian").text(yao1+","+yao2+","+yao3+","+yao4+","+yao5+","+yao6); 
    $("#leibie").text(leibie==1?"事态卦":"心态卦");
    $("#pizhu").html(typeof(Request["remark"])!="undefined"?Request["remark"]:"");

    //八卦判断 321 654 传的是阴阳1,0
    this.bagua = function(yao){   
      if(yao[0]==1 && yao[1]==1 && yao[2]==1){
        return ['天','乾'];
      }
      if(yao[0]==0 && yao[1]==0 && yao[2]==0){
        return ['地','坤'];
      }
      if(yao[0]==1 && yao[1]==0 && yao[2]==1){
        return ['火','离'];
      }
      if(yao[0]==0 && yao[1]==1 && yao[2]==0){
        return ['水','坎'];
      }
      if(yao[0]==0 && yao[1]==1 && yao[2]==1){
        return ['泽','兑'];
      }
      if(yao[0]==1 && yao[1]==1 && yao[2]==0){
        return ['风','巽'];
      }
      if(yao[0]==0 && yao[1]==0 && yao[2]==1){
        return ['雷','震'];
      }
      if(yao[0]==1 && yao[1]==0 && yao[2]==0){
        return ['山','艮'];
      } 
    } 
 
    //六码判断  返回宫位和卦位
    this.yao =function(shabagua,xiabagua){  
      var bagong = {
        "乾":['乾为天', '天风姤' ,'天山遁' ,'天地否' ,'风地观' ,'山地剥' ,'火地晋' ,'火天大有'],
        "坤":['坤为地','地雷复' ,'地泽临' ,'地天泰' ,'雷天大壮' ,'泽天夬' ,'水天需' ,'水地比'],
        "震":['震为雷','雷地豫' ,'雷水解' ,'雷风恒' ,'地风升' ,'水风井' ,'泽风大过' ,'泽雷随'],
        "巽":['巽为风','风天小畜' ,'风火家人' ,'风雷益' ,'天雷无妄' ,'火雷噬嗑' ,'山雷颐' ,'山风蛊'],
        "坎":['坎为水','水泽节' ,'水雷屯' ,'水火既济' ,'泽火革' ,'雷火丰' ,'地火明夷' ,'地水师'], 
        "离":['离为火','火山旅' ,'火风鼎' ,'火水未济' ,'山水蒙' ,'风水涣' ,'天水讼' ,'天火同人'],
        "艮":['艮为山','山火贲' ,'山天大畜' ,'山泽损' ,'火泽睽' ,'天泽履' ,'风泽中孚' ,'风山渐'],
        "兑":['兑为泽','泽水困' ,'泽地萃' ,'泽山咸' ,'水山蹇' ,'地山谦' ,'雷山小过' ,'雷泽归妹'],
      }
      var yaoming = shabagua[0]+xiabagua[0];  
      var res;  
      for(var key in bagong){  
        if(shabagua[0]!=xiabagua[0]){ 
          bagong[key].forEach(function(item,index){ 
            if(item.indexOf(yaoming)!=-1){   
              res= [key,item]; 
            }
          }) 
        }else{
          bagong[key].forEach(function(item,index){ 
            if(item.indexOf("为"+shabagua[0])!=-1){   
              res= [key,item]; 
            }
          }) 
          // res= [key,bagong[key][0]];
        }
      }  
      return res;
    };  

    var zhu = ["",0,0,0,0,0,0];
    var fu = ["",0,0,0,0,0,0];
    var bianyao = {}

    if(yao1==1){
      $("#yiyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#yiyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      zhu[1] = 1;
      fu[1] = 1;
    } 
    if(yao1==2){
      $("#yiyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#yiyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      zhu[1] = 0;
      fu[1] = 0;
    } 
    if(yao1==3){
      $("#yiyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#yiyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#yiyao_bianyao").html('&nbsp;〇&nbsp;');
      bianyao[1] = "阳变阴";
      zhu[1] = 1;
      fu[1] = 0; 
    } 
    if(yao1==0){
      $("#yiyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#yiyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#yiyao_bianyao").html('&nbsp;✖&nbsp;'); 
      bianyao[1] = "阴变阳";
      zhu[1] = 0;
      fu[1] = 1;
    } 
    
    
    if(yao2==1){
      $("#eryao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#eryao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      zhu[2] = 1;
      fu[2] = 1;
    } 
    if(yao2==2){
      $("#eryao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#eryao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      zhu[2] = 0;
      fu[2] = 0;
    } 
    if(yao2==3){
      $("#eryao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#eryao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">'); 
      $("#eryao_bianyao").html('&nbsp;〇&nbsp;'); 
      bianyao[2] = "阳变阴";
      zhu[2] = 1;
      fu[2] = 0;
    } 
    if(yao2==0){
      $("#eryao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#eryao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#eryao_bianyao").html('&nbsp;✖&nbsp;'); 
      bianyao[2] = "阴变阳";
      zhu[2] = 0;
      fu[2] = 1;
    } 

    
    if(yao3==1){
      $("#sanyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#sanyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      zhu[3] = 1;
      fu[3] = 1;
    } 
    if(yao3==2){
      $("#sanyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#sanyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      zhu[3] = 0;
      fu[3] = 0;
    } 
    if(yao3==3){
      $("#sanyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#sanyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#sanyao_bianyao").html('&nbsp;〇&nbsp;'); 
      bianyao[3] = "阳变阴";
      zhu[3] = 1;
      fu[3] = 0;
    } 
    if(yao3==0){
      $("#sanyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#sanyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#sanyao_bianyao").html('&nbsp;✖&nbsp;'); 
      bianyao[3] = "阴变阳";
      zhu[3] = 0;
      fu[3] = 1;
    } 

    
    if(yao4==1){
      $("#siyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#siyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      zhu[4] = 1;
      fu[4] = 1;
    } 
    if(yao4==2){
      $("#siyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#siyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      zhu[4] = 0;
      fu[4] = 0;
    } 
    if(yao4==3){
      $("#siyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#siyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#siyao_bianyao").html('&nbsp;〇&nbsp;'); 
      bianyao[4] = "阳变阴";
      zhu[4] = 1;
      fu[4] = 0;
    } 
    if(yao4==0){
      $("#siyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#siyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#siyao_bianyao").html('&nbsp;✖&nbsp;'); 
      bianyao[4] = "阴变阳";
      zhu[4] = 0;
      fu[4] = 1;
    } 

    
    if(yao5==1){
      $("#wuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#wuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      zhu[5] = 1;
      fu[5] = 1;
    } 
    if(yao5==2){
      $("#wuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#wuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      zhu[5] = 0;
      fu[5] = 0;
    } 
    if(yao5==3){
      $("#wuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#wuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#wuyao_bianyao").html('&nbsp;〇&nbsp;'); 
      bianyao[5] = "阳变阴";
      zhu[5] = 1;
      fu[5] = 0;
    } 
    if(yao5==0){
      $("#wuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#wuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#wuyao_bianyao").html('&nbsp;✖&nbsp;'); 
      bianyao[5] = "阴变阳";
      zhu[5] = 0;
      fu[5] = 1;
    } 

    
    if(yao6==1){
      $("#liuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#liuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      zhu[6] = 1;
      fu[6] = 1;
    } 
    if(yao6==2){
      $("#liuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#liuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      zhu[6] = 0;
      fu[6] = 0;
    } 
    if(yao6==3){
      $("#liuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#liuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#liuyao_bianyao").html('&nbsp;〇&nbsp;'); 
      bianyao[6] = "阳变阴";
      zhu[6] = 1;
      fu[6] = 0;
    } 
    if(yao6==0){
      $("#liuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#liuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#liuyao_bianyao").html('&nbsp;✖&nbsp;'); 
      bianyao[6] = "阴变阳";
      zhu[6] = 0;
      fu[6] = 1;
    } 

    this.liuheOrliuchong=function(guaming){
      if(guaming=="天地否" || guaming=="地天泰" || guaming=="火山旅" || guaming=="山火贲" || guaming=="地雷复" || guaming=="雷地豫" || guaming=="泽水困" || guaming=="水泽节"){
        return "六合";
      }
      if(guaming=="乾为天" || guaming=="兑为泽" || guaming=="离为火" || guaming=="震为雷" || guaming=="巽为风" || guaming=="坎为水" || guaming=="艮为山" || guaming=="坤为地"|| guaming=="天雷无妄" || guaming=="雷天大壮"){
        return "六冲";
      }
      return "";
    } 
    
    //主爻和副爻的名称  
    var zhuyao = this.yao(this.bagua([zhu[6],zhu[5],zhu[4]]),this.bagua([zhu[3],zhu[2],zhu[1]])); 
    var fuyao = this.yao(this.bagua([fu[6],fu[5],fu[4]]),this.bagua([fu[3],fu[2],fu[1]]));
     
    var zhuyaoHechong = this.liuheOrliuchong(zhuyao[1])==''?'':"-"+this.liuheOrliuchong(zhuyao[1]);
    var fuyaoHechong = this.liuheOrliuchong(fuyao[1])==''?'':"-"+this.liuheOrliuchong(fuyao[1]);
    $("#zhuyao").text(zhuyao[1]+"("+zhuyao[0]+zhuyaoHechong+")");
    $("#fuyao").text(fuyao[1]+"("+fuyao[0]+fuyaoHechong+")");

    lssg = {'乾为天':'强健、启始', '天风姤':'疏漏、相遇', '泽雷随':'跟随、归顺、被动',
        '山地剥':'剥落、显露','火地晋':'晋升、前进','火天大有':'收获、丰富、遍布',
        '风地观':'考察、观望','坎为水':'坎凹、陷入','巽为风':'跟风、上行下效',
       '水泽节':'受控、制约','水雷屯':'屯积、初始','水火既济':'顺其自然、顺畅、' ,
       '泽火革':'改变、革新','雷火丰':'丰富、张扬','地水师':'唯一、率众、追究' ,
        '艮为山':'堆积、受阻','山火贲':'粉饰、礼仪','地火明夷':'前有险、动则伤',
       '山泽损':'损失、受损','火泽睽':'反目、背驰','雷山小过':'过火，可补救过失',
       '天泽履':'履行、约定','风山渐':'渐近、缓近','风泽中孚':'坚持、诚信',
       '震为雷':'突发、走动','雷水解':'解决、释放','火风鼎':'独当一面、极致、关键' ,
        '地风升':'进展、提升','水风井':'规划、局束','雷泽归妹':'出嫁、如愿、回报',
       '天山遁':'逃避、隐退','天地否':'受阻、闭塞','泽风大过':'过错、过分、已受损',
       '风雷益':'有益、受益','山雷颐':'礼仪、培养','风天小畜':'初期、浅蓄、不充分',
       '山风蛊':'发动、谋事','离为火':'外露、绚丽','山水蒙':'启蒙、朦胧、蒙蔽',
       '火山旅':'旅行、奔波','风水涣':'涣散、发散','风火家人':'亲人、归家、回收' ,
       '天水讼':'谈论、诉讼','坤为地':'包含、承载','天雷无妄':'没妄行、无过失' ,
       '地雷复':'反复、重复','雷风恒':'恒久、不变','火雷噬嗑':'沟通，切实交流',
       '地泽临':'临近、降临','地天泰':'通泰、通畅','泽天夬':'缺陷、不完整' ,
       '水天需':'等待、筹备','水地比':'亲密、关注','火水未济':'受障碍、未达目的' ,
       '兑为泽':'谈话、争论','泽水困':'受困、被围','天火同人':'随大流、大众化' ,
        '泽地萃':'突出、聚集','泽山咸':'参与、遍布','雷天大壮':'众所周知、正当其用',
       '水山蹇':'行险、难关','雷地豫':'欢愉、犹豫','地山谦':'谦逊、初步、深藏不露' ,
       '山天大畜':'积畜已久、准备充分、末端'}
    $("#zhuyao").click(function(){
      var zy = zhuyao[1]  
      layer.msg(lssg[zy])
    });
    $("#fuyao").click(function(){
      var zy = fuyao[1] 
      layer.msg(lssg[zy])
    });
   
    
    //装六亲  挂的地支 世应
    this.guaDizhiShiyin = function(yao){
      if(yao=='乾为天') return ['父母戌土','兄弟申金','官鬼午火','父母辰土','妻财寅木','子孙子水',6,3] 
      if(yao=='天风姤') return ['父母戌土','兄弟申金','官鬼午火','兄弟酉金','子孙亥水','父母丑土',1,4]  
      if(yao=='天山遁') return ['父母戌土','兄弟申金','官鬼午火','兄弟申金','官鬼午火','父母辰土',2,5]
      if(yao=='天地否') return ['父母戌土','兄弟申金','官鬼午火','妻财卯木','官鬼巳火','父母未土',3,6]
      if(yao=='风地观') return ['妻财卯木','官鬼巳火','父母未土','妻财卯木','官鬼巳火','父母未土',4,1] 
      if(yao=='山地剥') return ['妻财寅木','子孙子水','父母戌土','妻财卯木','官鬼巳火','父母未土',5,2] 
      if(yao=='火地晋') return ['官鬼巳火','父母未土','兄弟酉金','妻财卯木','官鬼巳火','父母未土',4,1]
      if(yao=='火天大有') return ['官鬼巳火','父母未土','兄弟酉金','父母辰土','妻财寅木','子孙子水',3,6]
    
      if(yao=='兑为泽') return ['父母未土','兄弟酉金','子孙亥水','父母丑土','妻财卯木','官鬼巳火',6,3] 
      if(yao=='泽水困') return ['父母未土','兄弟酉金','子孙亥水','官鬼午火','父母辰土','妻财寅木',1,4] 
      if(yao=='泽地萃') return ['父母未土','兄弟酉金','子孙亥水','妻财卯木','官鬼巳火','父母未土',2,5] 
      if(yao=='泽山咸') return ['父母未土','兄弟酉金','子孙亥水','兄弟申金','官鬼午火','父母辰土',3,6] 
      if(yao=='水山蹇') return ['子孙子水','父母戌土','兄弟申金','兄弟申金','官鬼午火','父母辰土',4,1] 
      if(yao=='地山谦') return ['兄弟酉金','子孙亥水','父母丑土','兄弟申金','官鬼午火','父母辰土',5,2] 
      if(yao=='雷山小过') return ['父母戌土','兄弟申金','官鬼午火','兄弟申金','官鬼午火','父母辰土',4,1] 
      if(yao=='雷泽归妹') return ['父母戌土','兄弟申金','官鬼午火','父母丑土','妻财卯木','官鬼巳火',3,6] 
      
      if(yao=='离为火') return ['兄弟巳火','子孙未土','妻财酉金','官鬼亥水','子孙丑土','父母卯木',6,3]
      if(yao=='火山旅') return ['兄弟巳火','子孙未土','妻财酉金','妻财申金','兄弟午火','子孙辰土',1,4]
      if(yao=='火风鼎') return ['兄弟巳火','子孙未土','妻财酉金','妻财酉金','官鬼亥水','子孙丑土',2,5]
      if(yao=='火水未济') return ['兄弟巳火','子孙未土','妻财酉金','兄弟午火','子孙辰土','父母寅木',3,6]
      if(yao=='山水蒙') return ['父母寅木','官鬼子水','子孙戌土','兄弟午火','子孙辰土','父母寅木',4,1]
      if(yao=='风水涣') return ['父母卯木','兄弟巳火','子孙未土','兄弟午火','子孙辰土','父母寅木',5,2]
      if(yao=='天水讼') return ['子孙戌土','妻财申金','兄弟午火','兄弟午火','子孙辰土','父母寅木',4,1]
      if(yao=='天火同人') return ['子孙戌土','妻财申金','兄弟午火','官鬼亥水','子孙丑土','父母卯木',3,6]
      
      if(yao=='震为雷') return ['妻财戌土','官鬼申金','子孙午火','妻财辰土','兄弟寅木','父母子水',6,3]
      if(yao=='雷地豫') return ['妻财戌土','官鬼申金','子孙午火','兄弟卯木','子孙巳火','妻财未土',1,4]
      if(yao=='雷水解') return ['妻财戌土','官鬼申金','子孙午火','子孙午火','妻财辰土','兄弟寅木',2,5]
      if(yao=='雷风恒') return ['妻财戌土','官鬼申金','子孙午火','官鬼酉金','父母亥水','妻财丑土',3,6]
      if(yao=='地风升') return ['官鬼酉金','父母亥水','妻财丑土','官鬼酉金','父母亥水','妻财丑土',4,1]
      if(yao=='水风井') return ['父母子水','妻财戌土','官鬼申金','官鬼酉金','父母亥水','妻财丑土',5,2]
      if(yao=='泽风大过') return ['妻财未土','官鬼酉金','父母亥水','官鬼酉金','父母亥水','妻财丑土',4,1]
      if(yao=='泽雷随') return ['妻财未土','官鬼酉金','父母亥水','妻财辰土','兄弟寅木','父母子水',3,6]

      
      if(yao=='巽为风') return ['兄弟卯木','子孙巳火','妻财未土','官鬼酉金','父母亥水','妻财丑土',6,3]
      if(yao=='风天小畜') return ['兄弟卯木','子孙巳火','妻财未土','妻财辰土','兄弟寅木','父母子水',1,4]
      if(yao=='风火家人') return ['兄弟卯木','子孙巳火','妻财未土','父母亥水','妻财丑土','兄弟卯木',2,5]
      if(yao=='风雷益') return ['兄弟卯木','子孙巳火','妻财未土','妻财辰土','兄弟寅木','父母子水',3,6]
      if(yao=='天雷无妄') return ['妻财戌土','官鬼申金','子孙午火','妻财辰土','兄弟寅木','父母子水',4,1]
      if(yao=='火雷噬嗑') return ['子孙巳火','妻财未土','官鬼酉金','妻财辰土','兄弟寅木','父母子水',5,2]
      if(yao=='山雷颐') return ['兄弟寅木','父母子水','妻财戌土','妻财辰土','兄弟寅木','父母子水',4,1]
      if(yao=='山风蛊') return ['兄弟寅木','父母子水','妻财戌土','官鬼酉金','父母亥水','妻财丑土',3,6]

      if(yao=='坎为水') return ['兄弟子水','官鬼戌土','父母申金','妻财午火','官鬼辰土','子孙寅木',6,3]
      if(yao=='水泽节') return ['兄弟子水','官鬼戌土','父母申金','官鬼丑土','子孙卯木','妻财巳火',1,4]
      if(yao=='水雷屯') return ['兄弟子水','官鬼戌土','父母申金','官鬼辰土','子孙寅木','兄弟子水',2,5]
      if(yao=='水火既济') return ['兄弟子水','官鬼戌土','父母申金','兄弟亥水','官鬼丑土','子孙卯木',3,6]
      if(yao=='泽火革') return ['官鬼未土','父母酉金','兄弟亥水','兄弟亥水','官鬼丑土','子孙卯木',4,1]
      if(yao=='雷火丰') return ['官鬼戌土','父母申金','妻财午火','兄弟亥水','官鬼丑土','子孙卯木',5,2]
      if(yao=='地火明夷') return ['父母酉金','兄弟亥水','官鬼丑土','兄弟亥水','官鬼丑土','子孙卯木',4,1]
      if(yao=='地水师') return ['父母酉金','兄弟亥水','官鬼丑土','妻财午火','官鬼辰土','子孙寅木',3,6]
      
      if(yao=='艮为山') return ['官鬼寅木','妻财子水','兄弟戌土','子孙申金','父母午火','兄弟辰土',6,3]
      if(yao=='山火贲') return ['官鬼寅木','妻财子水','兄弟戌土','妻财亥水','兄弟丑土','官鬼卯木',1,4]
      if(yao=='山天大畜') return ['官鬼寅木','妻财子水','兄弟戌土','兄弟辰土','官鬼寅木','妻财子水',2,5]
      if(yao=='山泽损') return ['官鬼寅木','妻财子水','兄弟戌土','兄弟丑土','官鬼卯木','父母巳火',3,6]
      if(yao=='火泽睽') return ['父母巳火','兄弟未土','子孙酉金','兄弟丑土','官鬼卯木','父母巳火',4,1]
      if(yao=='天泽履') return ['兄弟戌土','子孙申金','父母午火','兄弟丑土','官鬼卯木','父母巳火',5,2]
      if(yao=='风泽中孚') return ['官辛卯木','父母巳火','兄弟未土','兄弟丑土','官鬼卯木','父母巳火',4,1]
      if(yao=='风山渐') return ['官鬼卯木','父母巳火','兄弟未土','子孙申金','父母午火','兄弟辰土',3,6]
      
      if(yao=='坤为地') return ['子孙酉金','妻财亥水','兄弟丑土','官鬼卯木','父母巳火','兄弟未土',6,3]
      if(yao=='地雷复') return ['子孙酉金','妻财亥水','兄弟丑土','兄弟辰土','官鬼寅木','妻财子水',1,4]
      if(yao=='地泽临') return ['子孙酉金','妻财亥水','兄弟丑土','兄弟丑土','官鬼卯木','父母巳火',2,5]
      if(yao=='地天泰') return ['子孙酉金','妻财亥水','兄弟丑土','兄弟辰土','官鬼寅木','妻财子水',3,6]
      if(yao=='雷天大壮') return ['兄弟戌土','子孙申金','父母午火','兄弟辰土','官鬼寅木','妻财子水',4,1]
      if(yao=='泽天夬') return ['兄弟未土','子孙酉金','妻财亥水','兄弟辰土','官鬼寅木','妻财子水',5,2]
      if(yao=='水天需') return ['妻财子水','兄弟戌土','子孙申金','兄弟辰土','官鬼寅木','妻财子水',4,1]
      if(yao=='水地比') return ['妻财子水','兄弟戌土','子孙申金','官鬼卯木','父母巳火','兄弟未土',3,6] 
    }

    //自己 土   别人 火  (生自己，克自己，自己生别人，自己克别人)  获取六爻的六亲
    this.wuXinShenke = function(zj,yj){
      var jmsht = {
        '金':['土','火','水','木','金'],
        '木':['水','金','火','土','木'],
        '水': ['金','土','木','火','水'],
        '火':['木','水','土','金','火'],
        '土': ['火','木','金','水','土'],
      }; 
      var jm = jmsht[zj];
      if(jm[0]==yj) return "父母";
      if(jm[1]==yj) return "官鬼";
      if(jm[2]==yj) return "子孙";
      if(jm[3]==yj) return "妻财"; 
      if(jm[4]==yj) return "兄弟";
    }

    //五行生克
    shengKe = function(zj,yj){ 
      var jmsht = {
        '金':['土','火','水','木','金'],
        '木':['水','金','火','土','木'],
        '水': ['金','土','木','火','水'],
        '火':['木','水','土','金','火'],
        '土': ['火','木','金','水','土'],
      }; 
      var jm = jmsht[zj];
      if(jm[0]==yj) return yj+"生"+zj;
      if(jm[1]==yj) return yj+"克"+zj;
      if(jm[2]==yj) return zj+"生"+yj; 
      if(jm[3]==yj) return zj+"克"+yj;
      if(jm[4]==yj) return zj+"同"+yj; 
    }

    //六亲生克
    liuQinShengKe = function(zj,yj){
      var jmsht = {
        '父母':['官鬼','妻财','兄弟','子孙','父母'],
        '官鬼':['妻财','子孙','父母','兄弟','官鬼'],
        '子孙':['兄弟','父母','妻财','官鬼','子孙'],
        '妻财':['子孙','兄弟','官鬼','父母','妻财'],
        '兄弟':['父母','官鬼','子孙','妻财','兄弟'],
      }; 
      var jm = jmsht[zj];
      if(jm[0]==yj) return yj+"生"+zj;
      if(jm[1]==yj) return yj+"克"+zj;
      if(jm[2]==yj) return zj+"生"+yj; 
      if(jm[3]==yj) return zj+"克"+yj;
      if(jm[4]==yj) return zj+"同"+yj; 
    }

    //判断两个地支相合还是相冲
    diZhiXiangChongHe = function(zj,yj){
      if(zj=="子" && yj=="丑") return "合";
      if(zj=="丑" && yj=="子") return "合"; 
      if(zj=="亥" && yj=="寅") return "合";
      if(zj=="寅" && yj=="亥") return "合";
      if(zj=="卯" && yj=="戌") return "合";
      if(zj=="戌" && yj=="卯") return "合";
      if(zj=="辰" && yj=="酉") return "合";
      if(zj=="酉" && yj=="辰") return "合";
      if(zj=="巳" && yj=="申") return "合";
      if(zj=="申" && yj=="巳") return "合";
      if(zj=="午" && yj=="未") return "合";
      if(zj=="未" && yj=="午") return "合";

      if(zj=="子" && yj=="午") return "冲";
      if(zj=="午" && yj=="子") return "冲";
      if(zj=="丑" && yj=="未") return "冲";
      if(zj=="未" && yj=="丑") return "冲";
      if(zj=="寅" && yj=="申") return "冲";
      if(zj=="申" && yj=="寅") return "冲";
      if(zj=="卯" && yj=="酉") return "冲";
      if(zj=="酉" && yj=="卯") return "冲";
      if(zj=="戌" && yj=="辰") return "冲";
      if(zj=="辰" && yj=="戌") return "冲";
      if(zj=="巳" && yj=="亥") return "冲";
      if(zj=="亥" && yj=="巳") return "冲"; 
    }
 
    var guaWuxin = {
      '乾':'金',
      '坤':'土',
      '震':'木',
      '巽':'木',
      '坎':'水',
      '离':'火',
      '艮':'土',
      '兑':'金', 
    }
    zhuLiuYao = this.guaDizhiShiyin(zhuyao[1])
    fuLiuYao = this.guaDizhiShiyin(fuyao[1])
    //主要世应
    $("#liuyao_yaowei").text(zhuLiuYao[0])
    $("#wuyao_yaowei").text(zhuLiuYao[1])
    $("#siyao_yaowei").text(zhuLiuYao[2])
    $("#sanyao_yaowei").text(zhuLiuYao[3])
    $("#eryao_yaowei").text(zhuLiuYao[4])
    $("#yiyao_yaowei").text(zhuLiuYao[5])

    $("#liuyao_shiyin").html(zhuLiuYao[6]==6?"&nbsp;世&nbsp;":"")
    $("#wuyao_shiyin").html(zhuLiuYao[6]==5?"&nbsp;世&nbsp;":"")
    $("#siyao_shiyin").html(zhuLiuYao[6]==4?"&nbsp;世&nbsp;":"")
    $("#sanyao_shiyin").html(zhuLiuYao[6]==3?"&nbsp;世&nbsp;":"")
    $("#eryao_shiyin").html(zhuLiuYao[6]==2?"&nbsp;世&nbsp;":"")
    $("#yiyao_shiyin").html(zhuLiuYao[6]==1?"&nbsp;世&nbsp;":"")

    $("#liuyao_shiyin").html(zhuLiuYao[7]==6?'&nbsp;应&nbsp;':$("#liuyao_shiyin").text()+"")
    $("#wuyao_shiyin").html(zhuLiuYao[7]==5?"&nbsp;应&nbsp;":$("#wuyao_shiyin").text()+"")
    $("#siyao_shiyin").html(zhuLiuYao[7]==4?"&nbsp;应&nbsp;":$("#siyao_shiyin").text()+"")
    $("#sanyao_shiyin").html(zhuLiuYao[7]==3?"&nbsp;应&nbsp;":$("#sanyao_shiyin").text()+"")
    $("#eryao_shiyin").html(zhuLiuYao[7]==2?"&nbsp;应&nbsp;":$("#eryao_shiyin").text()+"")
    $("#yiyao_shiyin").html(zhuLiuYao[7]==1?"&nbsp;应&nbsp;":$("#yiyao_shiyin").text()+"")

    //变爻世应
    $("#liuyao_yaowei_bian").text(fuLiuYao[0])
    $("#wuyao_yaowei_bian").text(fuLiuYao[1])
    $("#siyao_yaowei_bian").text(fuLiuYao[2])
    $("#sanyao_yaowei_bian").text(fuLiuYao[3])
    $("#eryao_yaowei_bian").text(fuLiuYao[4])
    $("#yiyao_yaowei_bian").text(fuLiuYao[5])

    $("#liuyao_shiyin_bian").html(fuLiuYao[6]==6?"&nbsp;世&nbsp;":"")
    $("#wuyao_shiyin_bian").html(fuLiuYao[6]==5?"&nbsp;世&nbsp;":"")
    $("#siyao_shiyin_bian").html(fuLiuYao[6]==4?"&nbsp;世&nbsp;":"")
    $("#sanyao_shiyin_bian").html(fuLiuYao[6]==3?"&nbsp;世&nbsp;":"")
    $("#eryao_shiyin_bian").html(fuLiuYao[6]==2?"&nbsp;世&nbsp;":"")
    $("#yiyao_shiyin_bian").html(fuLiuYao[6]==1?"&nbsp;世&nbsp;":"")

    $("#liuyao_shiyin_bian").html(fuLiuYao[7]==6?'&nbsp;应&nbsp;':$("#liuyao_shiyin_bian").text()+"")
    $("#wuyao_shiyin_bian").html(fuLiuYao[7]==5?"&nbsp;应&nbsp;":$("#wuyao_shiyin_bian").text()+"")
    $("#siyao_shiyin_bian").html(fuLiuYao[7]==4?"&nbsp;应&nbsp;":$("#siyao_shiyin_bian").text()+"")
    $("#sanyao_shiyin_bian").html(fuLiuYao[7]==3?"&nbsp;应&nbsp;":$("#sanyao_shiyin_bian").text()+"")
    $("#eryao_shiyin_bian").html(fuLiuYao[7]==2?"&nbsp;应&nbsp;":$("#eryao_shiyin_bian").text()+"")
    $("#yiyao_shiyin_bian").html(fuLiuYao[7]==1?"&nbsp;应&nbsp;":$("#yiyao_shiyin_bian").text()+"")

    var benGongWuxin = guaWuxin[zhuyao[0]]
    var fu6 = fuLiuYao[0].charAt(fuLiuYao[0].length-1)
    var fu5 = fuLiuYao[1].charAt(fuLiuYao[1].length-1)
    var fu4 = fuLiuYao[2].charAt(fuLiuYao[2].length-1)
    var fu3 = fuLiuYao[3].charAt(fuLiuYao[3].length-1)
    var fu2 = fuLiuYao[4].charAt(fuLiuYao[4].length-1) 
    var fu1 = fuLiuYao[5].charAt(fuLiuYao[5].length-1)  
    
    fuLiuYao[0] = this.wuXinShenke(benGongWuxin,fu6)+fuLiuYao[0].substring(2)
    fuLiuYao[1] = this.wuXinShenke(benGongWuxin,fu5)+fuLiuYao[1].substring(2)
    fuLiuYao[2] = this.wuXinShenke(benGongWuxin,fu4)+fuLiuYao[2].substring(2)
    fuLiuYao[3] = this.wuXinShenke(benGongWuxin,fu3)+fuLiuYao[3].substring(2)
    fuLiuYao[4] = this.wuXinShenke(benGongWuxin,fu2)+fuLiuYao[4].substring(2)
    fuLiuYao[5] = this.wuXinShenke(benGongWuxin,fu1)+fuLiuYao[5].substring(2) 
    $("#liuyao_yaowei_bian").text(fuLiuYao[0])
    $("#wuyao_yaowei_bian").text(fuLiuYao[1])
    $("#siyao_yaowei_bian").text(fuLiuYao[2])
    $("#sanyao_yaowei_bian").text(fuLiuYao[3])
    $("#eryao_yaowei_bian").text(fuLiuYao[4])
    $("#yiyao_yaowei_bian").text(fuLiuYao[5])
 
    //装伏神
    this.chunGua = function(gua){
      if(gua=="乾") return "乾为天";
      if(gua=="坤") return "坤为地";
      if(gua=="坎") return "坎为水";
      if(gua=="离") return "离为火";
      if(gua=="震") return "震为雷";
      if(gua=="巽") return "巽为风";
      if(gua=="艮") return "艮为山";
      if(gua=="兑") return "兑为泽"; 
    } 
    var guadizhishiyin = this.guaDizhiShiyin(this.chunGua(zhuyao[0]))
    var wuxinLiuqin = {"金":0,"木":0,"水":0,"火":0,"土":0}
    for (key in wuxinLiuqin){ 
      for(var j=0;j<zhuLiuYao.length;j++){
        var theZhi = String(zhuLiuYao[j]); 
        if(theZhi.indexOf(key)!=-1){
          wuxinLiuqin[key]++
        }
      }   
    } 
    var fuyaowei = {}
    for (key in wuxinLiuqin){ 
      if(wuxinLiuqin[key]==0){
        fuyaowei[key] = []
        for(var j=0;j<guadizhishiyin.length;j++){
          var theZhi = String(guadizhishiyin[j]); 
          if(theZhi.indexOf(key)!=-1){
            fuyaowei[key]=[6-j,theZhi]
          }
        } 
      }   
    } 
    for(key in fuyaowei){
      if(fuyaowei[key][0]==1){
        $("#yiyao_fushen").html('<font color="red"  style="font-size: 8px;">↑伏神:'+fuyaowei[key][1]+'</font>')
      }
      if(fuyaowei[key][0]==2){
        $("#eryao_fushen").html('<font color="red"  style="font-size: 8px;">↑伏神:'+fuyaowei[key][1]+'</font>')
      }
      if(fuyaowei[key][0]==3){
        $("#sanyao_fushen").html('<font color="red"  style="font-size: 8px;">↑伏神:'+fuyaowei[key][1]+'</font>')
      }
      if(fuyaowei[key][0]==4){
        $("#siyao_fushen").html('<font color="red"  style="font-size: 8px;">↑伏神:'+fuyaowei[key][1]+'</font>')
      }
      if(fuyaowei[key][0]==5){
        $("#wuyao_fushen").html('<font color="red"  style="font-size: 8px;">↑伏神:'+fuyaowei[key][1]+'</font>')
      }
      if(fuyaowei[key][0]==6){
        $("#liuyao_fushen").html('<font color="red"  style="font-size: 8px;">↑伏神:'+fuyaowei[key][1]+'</font>')
      }
    }
    

    //获取四柱
    var date = new Date(datetime);   
    var y=Number(date.getFullYear());
    var m=date.getMonth();
    var d=Number(date.getDate());
    var h=Number(date.getHours()); 
    var y_d=new Date();
        y_d.setFullYear(y);
        y_d.setMonth(m);
        y_d.setDate(d);
        y_d.setHours(h);
        y_d.setMinutes(0);
        y_d.setSeconds(0);
    var y_t=y_d.getTime();
    var tg=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
    var dz=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
    var dz0=["丑","寅","卯","辰","巳","午","未","申","酉","戌","亥","子"];
    var jq=["小寒","立春","惊蛰","清明","立夏","芒种","小暑","立秋","白露","寒露","立冬","大雪"];
    var jq84=[442208451146,444755924716,447326679845,449936540593,452591457618,455285317308,458000946032,460714673166,463403390187,466051355952,468654332864,471220083199];
    var y_d84=441734400726;
         
    this.yGan=function(){  //年干
      return tg[(y+6)%10];   
    }
    this.yZhi=function(){  //年支
      var nz;
          if(y-1984<=0) nz=dz0[11+(y-1984)%12];
          if(y-1984>0){
            ((y-1984)%12-1)==-1?nz=dz0[11]:nz=dz0[(y-1984)%12-1];
          }
          return nz;
    }
    this.yZhu=function(){  //年柱
      return this.yGan()+this.yZhi();
    }
    this.mGan=function(){  //月干
      var ng=this.yGan();
      var yg;
      if(ng=="甲"||ng=="己") yg=tg[(1+m)%10];
          if(ng=="乙"||ng=="庚") yg=tg[(3+m)%10];
          if(ng=="丙"||ng=="辛") yg=tg[(5+m)%10];
          if(ng=="丁"||ng=="壬") yg=tg[(7+m)%10];
          if(ng=="戊"||ng=="癸") yg=tg[(9+m)%10];
          if(y_t<((y-1984)*31556926009+jq84[m])){
              (tg.indexOf(yg)-1)==-1?yg=tg[9]:yg=tg[tg.indexOf(yg)-1];
          }
          return yg;
    }
    this.mZhi=function(){  //月支
      var yz=dz0[m];        
          if(y_t<((y-1984)*31556926009+jq84[m])){
              yz=dz0[dz.indexOf(yz)-1];
          }
          return yz;
    }
    this.mZhu=function(){  //月柱
      return this.mGan()+this.mZhi();
    }
    this.dGan=function(){  //日干
      var y_r=Math.floor((y_t-y_d84)/86400000)%60;
          var rg;
          y_r>=0?rg=tg[y_r%10]:rg=tg[(4+(60+y_r)%10)%10]; 
          return rg;
    }
    this.dZhi=function(){  //日支
      var y_r=Math.floor((y_t-y_d84)/86400000)%60;
          var rz;
          y_r>=0?rz=dz0[(5+y_r%12)%12]:rz=dz0[(5+(60+y_r)%12)%12];
          return rz;
    }
    this.dZhu=function(){  //日柱
      return this.dGan()+this.dZhi();
    }
    this.hGan=function(){  //时干
      var rg=this.dGan();
      var sz=this.hZhi();
      var sg;
      if(rg=="甲"||rg=="己") sg=tg[(1+dz0.indexOf(sz))%10];
          if(rg=="乙"||rg=="庚") sg=tg[(3+dz0.indexOf(sz))%10];
          if(rg=="丙"||rg=="辛") sg=tg[(5+dz0.indexOf(sz))%10];
          if(rg=="丁"||rg=="壬") sg=tg[(7+dz0.indexOf(sz))%10];
          if(rg=="戊"||rg=="癸") sg=tg[(9+dz0.indexOf(sz))%10];
          return sg;
    }
    this.hZhi=function(){  //时支
      var sz;
          if(h>=0) sz=dz0[11];
          if(h>=1) sz=dz0[0];
          if(h>=3) sz=dz0[1];
          if(h>=5) sz=dz0[2];
          if(h>=7) sz=dz0[3];
          if(h>=9) sz=dz0[4];
          if(h>=11) sz=dz0[5];
          if(h>=13) sz=dz0[6];
          if(h>=15) sz=dz0[7];
          if(h>=17) sz=dz0[8];
          if(h>=19) sz=dz0[9];
          if(h>=21) sz=dz0[10];
          if(h>=23) sz=dz0[11];
          return sz;
    }
    this.hZhu=function(){  //时柱
      return this.hGan()+this.hZhi();
    } 

    this.ng=this.yGan();
    this.yg=this.mGan();
    this.rg=this.dGan();
    this.sg=this.hGan();
    this.nz=this.yZhi();
    this.yz=this.mZhi();
    this.rz=this.dZhi();
    this.sz=this.hZhi();
    

    //手动月日支
    if(yuerizhi!=""){ 
      this.yz=yuerizhi[0];
      this.rg=yuerizhi[1];
      this.rz=yuerizhi[2]; 
    }

    this.xunKong=function(){  //旬空
      var xtg=tg.indexOf(this.rg);
          var xdz=dz.indexOf(this.rz);
          var xunk; 
          if((xtg-xdz)==0) xunk=dz[10]+dz[11];
          if((xtg-xdz)==-10||(xtg-xdz)==2) xunk=dz[8]+dz[9];
          if((xtg-xdz)==-8||(xtg-xdz)==4) xunk=dz[6]+dz[7];
          if((xtg-xdz)==-6||(xtg-xdz)==6)	xunk=dz[4]+dz[5];
          if((xtg-xdz)==-4||(xtg-xdz)==8)	xunk=dz[2]+dz[3];
          if((xtg-xdz)==-2)	xunk=dz[0]+dz[1]; 
          return xunk;
    }

    this.xk=this.xunKong(); 

    //装六神
    var liushen = ['青龙','朱雀','勾陈','螣蛇','白虎','玄武','青龙','朱雀','勾陈','螣蛇','白虎','玄武']
    var liushen_index = {
      "甲":"青龙",
      "乙":"青龙",
      "丙":"朱雀",
      "丁":"朱雀",
      "戊":"勾陈",
      "己":"螣蛇",
      "庚":"白虎",
      "辛":"白虎",
      "壬":"玄武",
      "癸":"玄武"  
    } 
    var liushen_index_num = 0; 
    for (var i = 0; i < liushen.length; i++){
        if (liushen[i] === liushen_index[this.rg]){
          liushen_index_num= i;
          break;
        }
    } 
    var liuShenZu = {}
    $("#yiyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[liushen_index_num]+"</a>")  
    liuShenZu["爻1"] = liushen[liushen_index_num]
    $("#eryao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    liuShenZu["爻2"] = liushen[(liushen_index_num)]
    $("#sanyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    liuShenZu["爻3"] = liushen[(liushen_index_num)]
    $("#siyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    liuShenZu["爻4"] = liushen[(liushen_index_num)]
    $("#wuyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    liuShenZu["爻5"] = liushen[(liushen_index_num)]
    $("#liuyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")   
    liuShenZu["爻6"] = liushen[(liushen_index_num)]
    $('.liushen').click(function(){
      var name = $(this).text();
      if(name=="青龙") layer.msg("青龙：骨架、喜庆、色情、无私、清白、正直、高大、体面、清高、崭新、左面等等");
      if(name=="朱雀") layer.msg("朱雀：发热、炎症、争讼、投诉、打听、言谈、标识、广告、热闹、文书、前面等等");
      if(name=="勾陈") layer.msg("勾陈：堆积、凝结、土地、老实、木讷、肥胖、牢狱、外表、陈旧、历史、居中等等");
      if(name=="螣蛇") layer.msg("螣蛇：筋络、恐惧、惊怕、忐忑、担忧、风险、弯曲、空管、阴暗、内在、通道等等");
      if(name=="玄武") layer.msg("玄武：呼吸、隐私、隐瞒、藏匿、负面、偷盗、主观、细微、小人、难测、后面等等");
      if(name=="白虎") layer.msg("白虎：血液、灾祸、哀怨、不满、疾病、权威、死丧、粗鲁、强硬、破旧、右面等等"); 
    });
  
    $("#nianzhu").html(this.ng+this.nz);
    $("#yuerizhu").html(this.yg+this.yz+"(<a id='yuelin' href='javascript:void(0);'></a>) "+this.rg+this.rz+"(<a id='rilin' href='javascript:void(0);'></a>) ");
    $("#shizhu").html(this.sg+this.sz);
    $("#xunkong").html("[旬空 "+this.xk+"]");
    layer.closeAll();
    $('#yaowei').show();


    //长生十二宫于卦吉凶判断的应用 （即五行的生旺墓绝，长生与帝旺代表旺相，墓是中性，绝代表衰相
    shierGong = function(yao, gong){
        if(yao=="火"){
          if(gong=="寅") return "长生";
          if(gong=="午") return "帝旺";
          if(gong=="戌") return "墓";
          if(gong=="亥") return "绝";
        } 
        if(yao=="金"){
          if(gong=="巳") return "长生";
          if(gong=="酉") return "帝旺";
          if(gong=="丑") return "墓";
          if(gong=="寅") return "绝";
        }
        if(yao=="木"){
          if(gong=="亥") return "长生";
          if(gong=="卯") return "帝旺";
          if(gong=="未") return "墓";
          if(gong=="申") return "绝";
        } 
        if(yao=="水"){
          if(gong=="申") return "长生";
          if(gong=="子") return "帝旺";
          if(gong=="辰") return "墓";
          if(gong=="巳") return "绝";
        }
        return ""
    } 
    
      
    //神煞 
var curShenSha ={
  "贵人":"","禄神":"", "羊刃":"","文昌":"","驿马":"","桃花":"","将星":"","劫煞":"","华盖":"","谋星":"","天医":"","天喜":"", "灾煞":"",
  };
  if(this.rg=="甲"){
  for(var i=0;i<zhuLiuYao.length;i++){ 
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='丑' || zhuLiuYaoDizhi=='未'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='寅'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='卯'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  }
  }
  if(this.rg=="乙"){  
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='子' || zhuLiuYaoDizhi=='申'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='卯'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='寅'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="丙"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='亥' || zhuLiuYaoDizhi=='酉'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='申'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="丁"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='亥' || zhuLiuYaoDizhi=='酉'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="戊"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='丑' || zhuLiuYaoDizhi=='未'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='申'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  }
  }
  if(this.rg=="己"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='子' || zhuLiuYaoDizhi=='申'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="庚"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='午' || zhuLiuYaoDizhi=='寅'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='申'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='亥'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    }  
  } 
  }
  if(this.rg=="辛"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='午' || zhuLiuYaoDizhi=='寅'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='申'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='子'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="壬"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='卯' || zhuLiuYaoDizhi=='巳'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='亥'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='子'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='寅'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="癸"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";
    if(zhuLiuYaoDizhi=='卯' || zhuLiuYaoDizhi=='巳'){
      curShenSha["贵人"] = curShenSha["贵人"]+zhuLiuYaoDizhi; 
    }
    if(zhuLiuYaoDizhi=='子'){
      curShenSha["禄神"] = curShenSha["禄神"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='亥'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='卯'){
      curShenSha["文昌"] = curShenSha["文昌"]+zhuLiuYaoDizhi; 
    } 
  } 
  }  
  
  
  if(this.rz=="申" || this.rz=="子" || this.rz=="辰"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):"";  
    if(zhuLiuYaoDizhi=='寅'){
      curShenSha["驿马"] = curShenSha["驿马"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["桃花"] = curShenSha["桃花"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='子'){ 
      curShenSha["将星"] = curShenSha["将星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["劫煞"] = curShenSha["劫煞"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='辰'){
      curShenSha["华盖"] = curShenSha["华盖"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='戌'){
      curShenSha["谋星"] = curShenSha["谋星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["灾煞"] = curShenSha["灾煞"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rz=="巳" || this.rz=="酉" || this.rz=="丑"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):""; 
    if(zhuLiuYaoDizhi=='亥'){
      curShenSha["驿马"] = curShenSha["驿马"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["桃花"] = curShenSha["桃花"]+zhuLiuYaoDizhi; 
    }  
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["将星"] = curShenSha["将星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='寅'){
      curShenSha["劫煞"] = curShenSha["劫煞"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='丑'){
      curShenSha["华盖"] = curShenSha["华盖"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='未'){
      curShenSha["谋星"] = curShenSha["谋星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='卯'){
      curShenSha["灾煞"] = curShenSha["灾煞"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rz=="寅" || this.rz=="午" || this.rz=="戌"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):""; 
    if(zhuLiuYaoDizhi=='申'){
      curShenSha["驿马"] = curShenSha["驿马"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='卯'){
      curShenSha["桃花"] = curShenSha["桃花"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='午'){
      curShenSha["将星"] = curShenSha["将星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='亥'){
      curShenSha["劫煞"] = curShenSha["劫煞"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='戌'){
      curShenSha["华盖"] = curShenSha["华盖"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='辰'){
      curShenSha["谋星"] = curShenSha["谋星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='子'){
      curShenSha["灾煞"] = curShenSha["灾煞"]+zhuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rz=="亥" || this.rz=="卯" || this.rz=="未"){
  for(var i=0;i<zhuLiuYao.length;i++){
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>3?zhuLiuYao[i].substring(2,3):""; 
    if(zhuLiuYaoDizhi=='巳'){
      curShenSha["驿马"] = curShenSha["驿马"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='子'){
      curShenSha["桃花"] = curShenSha["桃花"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='卯'){
      curShenSha["将星"] = curShenSha["将星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='申'){
      curShenSha["劫煞"] = curShenSha["劫煞"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='未'){
      curShenSha["华盖"] = curShenSha["华盖"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='丑'){
      curShenSha["谋星"] = curShenSha["谋星"]+zhuLiuYaoDizhi; 
    } 
    if(zhuLiuYaoDizhi=='酉'){
      curShenSha["灾煞"] = curShenSha["灾煞"]+zhuLiuYaoDizhi; 
    } 
  } 
  }  
  
  
  var dizhi = ["寅","卯","辰","巳","午","未","申","酉","戌","亥","子","丑"];
  
  for(var j=0;j<zhuLiuYao.length;j++){
    var zhuLiuYaoDizhi = zhuLiuYao[j].length>3?zhuLiuYao[j].substring(2,3):""; 
    if(this.yz=="寅" ){ 
        if(zhuLiuYaoDizhi=='丑'){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
        }  
    } else{
      if(dizhi.indexOf(zhuLiuYaoDizhi)!=-1 && zhuLiuYaoDizhi==dizhi[dizhi.indexOf(zhuLiuYaoDizhi)-1]){
        curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi;
      } 
    } 
  }  
  
  if(this.yz=="寅" || this.yz=="卯" || this.yz=="辰"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>3?zhuLiuYao[j].substring(2,3):""; 
      if(zhuLiuYaoDizhi=='戌'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="巳" || this.yz=="午" || this.yz=="未"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>3?zhuLiuYao[j].substring(2,3):""; 
      if(zhuLiuYaoDizhi=='丑'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="申" || this.yz=="酉" || this.yz=="戌"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>3?zhuLiuYao[j].substring(2,3):""; 
      if(zhuLiuYaoDizhi=='辰'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="亥" || this.yz=="子" || this.yz=="丑"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>3?zhuLiuYao[j].substring(2,3):""; 
      if(zhuLiuYaoDizhi=='未'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  
  
  
  
  
  if(this.rg=="甲"){
  for(var i=0;i<fuLiuYao.length;i++){ 
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='丑' || fuLiuYaoDizhi=='未'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='寅'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='卯'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='巳'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  }
  }
  if(this.rg=="乙"){  
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='子' || fuLiuYaoDizhi=='申'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='卯'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='寅'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='午'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="丙"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='亥' || fuLiuYaoDizhi=='酉'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='巳'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='午'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='申'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="丁"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='亥' || fuLiuYaoDizhi=='酉'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='午'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='巳'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='酉'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="戊"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='丑' || fuLiuYaoDizhi=='未'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='巳'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='午'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='申'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  }
  }
  if(this.rg=="己"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='子' || fuLiuYaoDizhi=='申'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='午'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='巳'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='酉'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="庚"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='午' || fuLiuYaoDizhi=='寅'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='申'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='酉'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='亥'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    }  
  } 
  }
  if(this.rg=="辛"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='午' || fuLiuYaoDizhi=='寅'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='酉'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='申'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='子'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="壬"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='卯' || fuLiuYaoDizhi=='巳'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='亥'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='子'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='寅'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  }
  if(this.rg=="癸"){
  for(var i=0;i<fuLiuYao.length;i++){
    var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):"";
    if(fuLiuYaoDizhi=='卯' || fuLiuYaoDizhi=='巳'){
      curShenSha["贵人"] = curShenSha["贵人"]+fuLiuYaoDizhi; 
    }
    if(fuLiuYaoDizhi=='子'){
      curShenSha["禄神"] = curShenSha["禄神"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='亥'){
      curShenSha["羊刃"] = curShenSha["羊刃"]+fuLiuYaoDizhi; 
    } 
    if(fuLiuYaoDizhi=='卯'){
      curShenSha["文昌"] = curShenSha["文昌"]+fuLiuYaoDizhi; 
    } 
  } 
  } 
  
  if(this.rz=="申" || this.rz=="子" || this.rz=="辰"){
    for(var i=0;i<fuLiuYao.length;i++){
      var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):""; 
      if(fuLiuYaoDizhi=='寅'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='酉'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='子'){
        curShenSha["将星"] = curShenSha["将星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='巳'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='辰'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='戌'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='午'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuLiuYaoDizhi; 
      } 
    } 
  }
  if(this.rz=="巳" || this.rz=="酉" || this.rz=="丑"){
    for(var i=0;i<fuLiuYao.length;i++){
      var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):""; 
      if(fuLiuYaoDizhi=='亥'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='午'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuLiuYaoDizhi; 
      }  
      if(fuLiuYaoDizhi=='酉'){
        curShenSha["将星"] = curShenSha["将星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='寅'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='丑'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='未'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='卯'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuLiuYaoDizhi; 
      } 
    } 
  }
  if(this.rz=="寅" || this.rz=="午" || this.rz=="戌"){
    for(var i=0;i<fuLiuYao.length;i++){
      var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):""; 
      if(fuLiuYaoDizhi=='申'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='卯'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='午'){
        curShenSha["将星"] = curShenSha["将星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='亥'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='戌'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='辰'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='子'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuLiuYaoDizhi; 
      } 
    } 
  }
  if(this.rz=="亥" || this.rz=="卯" || this.rz=="未"){
    for(var i=0;i<fuLiuYao.length;i++){
      var fuLiuYaoDizhi = fuLiuYao[i].length>3?fuLiuYao[i].substring(2,3):""; 
      if(fuLiuYaoDizhi=='巳'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='子'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='卯'){
        curShenSha["将星"] = curShenSha["将星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='申'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='未'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='丑'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuLiuYaoDizhi; 
      } 
      if(fuLiuYaoDizhi=='酉'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuLiuYaoDizhi; 
      } 
    } 
  }  
   

  for(var j=0;j<fuLiuYao.length;j++){
    var zhuLiuYaoDizhi = fuLiuYao[j].length>3?fuLiuYao[j].substring(2,3):""; 
    if(this.yz=="寅" ){ 
        if(zhuLiuYaoDizhi=='丑'){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
        }  
    } else{
      if(dizhi.indexOf(zhuLiuYaoDizhi)!=-1 && zhuLiuYaoDizhi==dizhi[dizhi.indexOf(zhuLiuYaoDizhi)-1]){
        curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi;
      } 
    } 
  } 
       
  
  if(this.yz=="寅" || this.yz=="卯" || this.yz=="辰"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>3?fuLiuYao[j].substring(2,3):""; 
      if(fuLiuYaoDizhi=='戌'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="巳" || this.yz=="午" || this.yz=="未"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>3?fuLiuYao[j].substring(2,3):""; 
      if(fuLiuYaoDizhi=='丑'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="申" || this.yz=="酉" || this.yz=="戌"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>3?fuLiuYao[j].substring(2,3):""; 
      if(fuLiuYaoDizhi=='辰'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="亥" || this.yz=="子" || this.yz=="丑"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>3?fuLiuYao[j].substring(2,3):""; 
      if(fuLiuYaoDizhi=='未'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
   
  if(this.rg=="甲"){
    for(var i in fuyaowei){  
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='丑' || fuyaoweiDizhi=='未'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='寅'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='卯'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='巳'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    }
  }
  if(this.rg=="乙"){  
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='子' || fuyaoweiDizhi=='申'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='卯'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='寅'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='午'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rg=="丙"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='亥' || fuyaoweiDizhi=='酉'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='巳'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='午'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='申'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rg=="丁"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='亥' || fuyaoweiDizhi=='酉'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='午'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='巳'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='酉'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rg=="戊"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='丑' || fuyaoweiDizhi=='未'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='巳'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='午'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='申'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    }
  }
  if(this.rg=="己"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='子' || fuyaoweiDizhi=='申'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='午'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='巳'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='酉'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rg=="庚"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='午' || fuyaoweiDizhi=='寅'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='申'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='酉'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='亥'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      }  
    } 
  }
  if(this.rg=="辛"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='午' || fuyaoweiDizhi=='寅'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='酉'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='申'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='子'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rg=="壬"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='卯' || fuyaoweiDizhi=='巳'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='亥'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='子'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='寅'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rg=="癸"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):"";
      if(fuyaoweiDizhi=='卯' || fuyaoweiDizhi=='巳'){
        curShenSha["贵人"] = curShenSha["贵人"]+fuyaoweiDizhi; 
      }
      if(fuyaoweiDizhi=='子'){
        curShenSha["禄神"] = curShenSha["禄神"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='亥'){
        curShenSha["羊刃"] = curShenSha["羊刃"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='卯'){
        curShenSha["文昌"] = curShenSha["文昌"]+fuyaoweiDizhi; 
      } 
    } 
  } 
   
  if(this.rz=="申" || this.rz=="子" || this.rz=="辰"){ 
    for(var i in fuyaowei){  
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):""; 
      if(fuyaoweiDizhi=='寅'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='酉'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='子'){
        curShenSha["将星"] = curShenSha["将星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='巳'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='辰'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='戌'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='午'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rz=="巳" || this.rz=="酉" || this.rz=="丑"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):""; 
      if(fuyaoweiDizhi=='亥'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='午'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuyaoweiDizhi; 
      }  
      if(fuyaoweiDizhi=='酉'){
        curShenSha["将星"] = curShenSha["将星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='寅'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='丑'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='未'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='卯'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rz=="寅" || this.rz=="午" || this.rz=="戌"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):""; 
      if(fuyaoweiDizhi=='申'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='卯'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='午'){
        curShenSha["将星"] = curShenSha["将星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='亥'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='戌'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='辰'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='子'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuyaoweiDizhi; 
      } 
    } 
  }
  if(this.rz=="亥" || this.rz=="卯" || this.rz=="未"){
    for(var i in fuyaowei){
      var fuyaoweiDizhi = fuyaowei[i][1].length>3?fuyaowei[i][1].substring(2,3):""; 
      if(fuyaoweiDizhi=='巳'){
        curShenSha["驿马"] = curShenSha["驿马"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='子'){
        curShenSha["桃花"] = curShenSha["桃花"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='卯'){
        curShenSha["将星"] = curShenSha["将星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='申'){
        curShenSha["劫煞"] = curShenSha["劫煞"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='未'){
        curShenSha["华盖"] = curShenSha["华盖"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='丑'){
        curShenSha["谋星"] = curShenSha["谋星"]+fuyaoweiDizhi; 
      } 
      if(fuyaoweiDizhi=='酉'){
        curShenSha["灾煞"] = curShenSha["灾煞"]+fuyaoweiDizhi; 
      } 
    } 
  }  
  

    for(var p in fuyaowei){
      var zhuLiuYaoDizhi = fuyaowei[p][1].length>3?fuyaowei[p][1].substring(2,3):""; 
      if(this.yz=="寅" ){ 
          if(zhuLiuYaoDizhi=='丑'){
            curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
          }  
      } else{
        if(dizhi.indexOf(zhuLiuYaoDizhi)!=-1 && zhuLiuYaoDizhi==dizhi[dizhi.indexOf(zhuLiuYaoDizhi)-1]){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi;
        } 
      } 
    } 
    
     
  
    if(this.yz=="寅" || this.yz=="卯" || this.yz=="辰"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>3?fuyaowei[j].substring(2,3):""; 
        if(fuyaoweiDizhi=='戌'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    if(this.yz=="巳" || this.yz=="午" || this.yz=="未"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>3?fuyaowei[j].substring(2,3):""; 
        if(fuyaoweiDizhi=='丑'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    if(this.yz=="申" || this.yz=="酉" || this.yz=="戌"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>3?fuyaowei[j].substring(2,3):""; 
        if(fuyaoweiDizhi=='辰'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    if(this.yz=="亥" || this.yz=="子" || this.yz=="丑"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>3?fuyaowei[j].substring(2,3):""; 
        if(fuyaoweiDizhi=='未'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    
    //展示神煞
    var cou = 0;
    $("#shensha").html("");
    for(var key in curShenSha){
      if(curShenSha[key]=="") continue;
      $("#shensha").append("<span style='width:10%'><a class='shensha' href='javascript:void(0);'>"+key+"</a>--"+curShenSha[key]+" </span>");
      cou++; 
      if(cou%4==0){ 
        $("#shensha").append("<br>");
      }
    } 
    $('.shensha').click(function(){ 
      var name = $(this).text();
      if(name=="贵人") layer.msg("贵人：寓意与个人、社交、人际相关");
      if(name=="禄神") layer.msg("禄神：寓意财禄、待遇、饮食、生活、收益、回报、非专业等方面");
      if(name=="羊刃") layer.msg("羊刃：寓意工作、单位、物件、器质、利器、项目、维护、专业性等方面");
      if(name=="文昌") layer.msg("文昌：寓意技能、能力、水平、聪明、策划、难度、技术性等方面");
      if(name=="驿马") layer.msg("驿马：寓意奔波、远近、流动性、动静性质等方面");
      if(name=="桃花") layer.msg("桃花：寓意女性、孩子、感情、装潢、广告、条文、门面、学历、荣耀等方面");
      if(name=="将星") layer.msg("将星：寓意核心、重要性、程度、幅度、效率等方面");
      if(name=="劫煞") layer.msg("劫煞：寓意难关、阻碍、祸患、劫数、问题、烦恼等方面");
      if(name=="华盖") layer.msg("华盖：寓意被动、无奈、聪明、迥异、怪僻、个性等方面");
      if(name=="谋星") layer.msg("谋星：寓意主动性的计划、谋划、策划、打算、预期等方面");
      if(name=="天医") layer.msg("天医：寓意疾病、医药、医学、医生、保养等方面");
      if(name=="天喜") layer.msg("天喜：寓意喜事、喜庆、好事、商业、铺面、热闹、节假、旅游、玩乐等方面");
      if(name=="灾煞") layer.msg("灾煞：寓意难关、阻碍、劫数、问题、麻烦等方面");
    });
  
    yongshen_wei = [];
    if(leibie==1){
      $("#yiyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻1","主爻"];}); 
      $("#eryao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻2","主爻"];});
      $("#sanyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻3","主爻"];});
      $("#siyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻4","主爻"];});
      $("#wuyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻5","主爻"];});
      $("#liuyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻6","主爻"];});
      $("#yiyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻1","变爻"];}); 
      $("#eryao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻2","变爻"];});
      $("#sanyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻3","变爻"];});
      $("#siyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻4","变爻"];});
      $("#wuyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻5","变爻"];}); 
      $("#liuyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻6","变爻"];});
      $("#yiyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻1","伏神"];}); 
      $("#eryao_fushen").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻2","伏神"];}); 
      $("#sanyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻3","伏神"];});
      $("#siyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻4","伏神"];});
      $("#wuyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻5","伏神"];});
      $("#liuyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=["爻6","伏神"];});
    }else{
      $("#yongshen").html("(直接定位子孙爻或官鬼爻)");
      $("#zuzhi").show();
    } 

    this.diZhiwuXing=function(gan){  //地支五行
      var wux="";
        if(gan=="甲"||gan=="乙" || gan=="寅" || gan=="卯") wux="木";
        if(gan=="丙"||gan=="丁"|| gan=="巳" || gan=="午") wux="火";
        if(gan=="戊"||gan=="己"|| gan=="辰" || gan=="未" || gan=="戌" || gan=="丑") wux="土";
        if(gan=="庚"||gan=="辛"|| gan=="申" || gan=="酉") wux="金";
        if(gan=="壬"||gan=="癸"|| gan=="子" || gan=="亥") wux="水";
        return wux;
    }
    var benKuaWuxin = guaWuxin[zhuyao[0]];
    var yuelin = this.yz;
    var rilin = this.rz;
    var yueLiuqing = this.wuXinShenke(benKuaWuxin,this.diZhiwuXing(yuelin)); 
    var riLiuqing = this.wuXinShenke(benKuaWuxin,this.diZhiwuXing(rilin)); 
    $("#yuelin").html(yueLiuqing+yuelin+this.diZhiwuXing(yuelin));
    $("#rilin").html(riLiuqing+rilin+this.diZhiwuXing(rilin));
    //日令月令的六亲

    if(leibie==1){
      $("#yuelin").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=[$(this).text(),"月令"];});
      $("#rilin").click(function(){$("#yongshen").html($(this).text());$("#zuzhi").show();yongshen_wei=[$(this).text(),"日令"];}); 
    }else{
      $("#yongshen").html("(直接定位子孙爻或官鬼爻)");
      $("#zuzhi").show();
    }  

    //静卦没有变爻 
    if($('#zhuyao').text()==$('#fuyao').text()){
      $('#fuyao').css('visibility','hidden');
      $('#liuyao_yaowei_bian').css('visibility','hidden');
      $('#liuyao_yaotu_bian').css('visibility','hidden');
      $('#liuyao_shiyin_bian').css('visibility','hidden');

      $('#wuyao_yaowei_bian').css('visibility','hidden');
      $('#wuyao_yaotu_bian').css('visibility','hidden');
      $('#wuyao_shiyin_bian').css('visibility','hidden');

      $('#siyao_yaowei_bian').css('visibility','hidden');
      $('#siyao_yaotu_bian').css('visibility','hidden');
      $('#siyao_shiyin_bian').css('visibility','hidden');

      $('#sanyao_yaowei_bian').css('visibility','hidden');
      $('#sanyao_yaotu_bian').css('visibility','hidden');
      $('#sanyao_shiyin_bian').css('visibility','hidden');

      $('#eryao_yaowei_bian').css('visibility','hidden');
      $('#eryao_yaotu_bian').css('visibility','hidden');
      $('#eryao_shiyin_bian').css('visibility','hidden');

      $('#yiyao_yaowei_bian').css('visibility','hidden');
      $('#yiyao_yaotu_bian').css('visibility','hidden');
      $('#yiyao_shiyin_bian').css('visibility','hidden');
    } 
    
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////

    //按用神顺序找到对应的用神
    this.findYongShen = function(yongShen){
         
    }

    var bianyaoZu = {}
    for(var key in bianyao){
      bianyaoZu["爻"+key]=[zhuLiuYao[6-key],fuLiuYao[6-key],bianyao[key]];
    }
    var fuyaoZu = {}
    for(var key in fuyaowei){
      fuyaoZu["爻"+fuyaowei[key][0]]=fuyaowei[key][1];
    }
    //组爻
    var jihe = {
      "爻6":{"主爻":zhuLiuYao[0],"变爻":fuLiuYao[0],"六亲":liuShenZu["爻6"]},
      "爻5":{"主爻":zhuLiuYao[1],"变爻":fuLiuYao[1],"六亲":liuShenZu["爻5"]},
      "爻4":{"主爻":zhuLiuYao[2],"变爻":fuLiuYao[2],"六亲":liuShenZu["爻4"]}, 
      "爻3":{"主爻":zhuLiuYao[3],"变爻":fuLiuYao[3],"六亲":liuShenZu["爻3"]}, 
      "爻2":{"主爻":zhuLiuYao[4],"变爻":fuLiuYao[4],"六亲":liuShenZu["爻2"]}, 
      "爻1":{"主爻":zhuLiuYao[5],"变爻":fuLiuYao[5],"六亲":liuShenZu["爻1"]},  
      "主世":[zhuLiuYao[6-zhuLiuYao[6]],"爻"+String(6-zhuLiuYao[6])],
      "主应":[zhuLiuYao[6-zhuLiuYao[7]],"爻"+String(6-zhuLiuYao[7])],
      "变世":[fuLiuYao[6-fuLiuYao[6]],"爻"+String(6-fuLiuYao[6])],
      "变应":[fuLiuYao[6-fuLiuYao[7]],"爻"+String(6-fuLiuYao[7])],
      "变爻":bianyaoZu,
      "日令":[riLiuqing+rilin+this.diZhiwuXing(rilin),rilin,this.diZhiwuXing(rilin)],
      "月令":[yueLiuqing+yuelin+this.diZhiwuXing(yuelin),yuelin,this.diZhiwuXing(yuelin)],
      "用神":{},
      "标题":title,
      "占类":leibie,
      "时间":datetime,
      "背面":[yao1,yao2,yao3,yao4,yao5,yao6],
      "神煞":curShenSha,
      "伏神":fuyaoZu,
      "用神分析":{},
    };
     
    //月令对用神的旺衰影响
    yueAndYongShen = function(jihe){ 
       jihe["用神分析"]["月令"]=[];
       if(jihe["用神"]["爻支"]==jihe["月令"][1]) jihe["用神分析"]["月令"].push([2,"临月建"]);
       if("合"==diZhiXiangChongHe(jihe["用神"]["爻支"],jihe["月令"][1])) jihe["用神分析"]["月令"].push([2,"月合"]);
       if(jihe["月令"][2]+"生"+jihe["用神"]["五行"]==shengKe(jihe["用神"]["五行"],jihe["月令"][2])) jihe["用神分析"]["月令"].push([1,"月生"]);
       if(jihe["用神"]["爻支"]!=jihe["月令"][1] && jihe["用神"]["五行"]==jihe["月令"][2]) jihe["用神分析"]["月令"].push([1,"月扶"]);

       if("冲"==diZhiXiangChongHe(jihe["用神"]["爻支"],jihe["月令"][1])) jihe["用神分析"]["月令"].push([-2,"逢月破"]); 
       if(jihe["月令"][2]+"克"+jihe["用神"]["五行"]==shengKe(jihe["用神"]["五行"],jihe["月令"][2])) jihe["用神分析"]["月令"].push([-1,"月克"]);
       if(jihe["用神"]["五行"]+"生"+jihe["月令"][2]==shengKe(jihe["用神"]["五行"],jihe["月令"][2])) jihe["用神分析"]["月令"].push([-1,"月上休囚"]);
       if(jihe["用神"]["五行"]+"克"+jihe["月令"][2]==shengKe(jihe["用神"]["五行"],jihe["月令"][2])) jihe["用神分析"]["月令"].push([-1,"月上休囚"]);

       if(jihe["用神"]["五行"]=="水" && "丑"==jihe["月令"][1]) jihe["用神分析"]["月令"].push([0,"月平相"]);
       if(jihe["用神"]["五行"]=="木" && "辰"==jihe["月令"][1]) jihe["用神分析"]["月令"].push([0,"月平相"]);
       if(jihe["用神"]["五行"]=="火" && "未"==jihe["月令"][1]) jihe["用神分析"]["月令"].push([0,"月平相"]);
       if(jihe["用神"]["五行"]=="金" && "戌"==jihe["月令"][1]) jihe["用神分析"]["月令"].push([0,"月平相"]);

        
       //碰上爻与月令相合又相克，如卯与戌；或爻与月令相冲又相扶，如丑与未；两种方向相反的卦理相撞，论旺还是论衰？
       var linshiYueLin = [] 
       for(var i =0;i<jihe["用神分析"]["月令"].length;i++){
          linshiYueLin.push(jihe["用神分析"]["月令"][i][1]) 
       }
       var yuhe = linshiYueLin.indexOf("月合");
       var yuke = linshiYueLin.indexOf("月克"); 
       var yuchong = linshiYueLin.indexOf("月冲"); 
       var yufu = linshiYueLin.indexOf("月扶"); 

       if(linshiYueLin.indexOf("月合")!=-1 && linshiYueLin.indexOf("月克")!=-1){ 
          var ll = layer.open({ 
            title: jihe["用神"]["主"]+"：请选择留下的月合克" 
            ,type:0
            ,closeBtn:0
            ,id: 'LAY_layuipro122' //设定一个id，防止重复弹出  
            ,content: $("#yueheke").html()
            ,yes: function(layero, index){
              var value = $("input[name=yueheke]:checked").val()
              if(typeof(value)=="undefined"){
                alert("请选择");
                return false;
              } 
              if(value==0) jihe["用神分析"]["月令"]=jihe["用神分析"]["月令"].splice(yuhe,1);
              if(value==1) jihe["用神分析"]["月令"]=jihe["用神分析"]["月令"].splice(yuke,1); 
              layer.close(ll)
            }
          }); 
          
       }
       if(linshiYueLin.indexOf("月冲")!=-1 && linshiYueLin.indexOf("逢月破")!=-1){ 
          var ll =  layer.open({ 
            title: jihe["用神"]["主"]+"：请选择留下的月扶冲" 
            ,type:0
            ,closeBtn:0
            ,id: 'LAY_layuipro112' //设定一个id，防止重复弹出  
            ,content: $("#yuechongfu").html()
            ,yes: function(layero, index){
              var value = $("input[name=yuechongfu]:checked").val()
              if(typeof(value)=="undefined"){
                alert("请选择");
                return false;
              }
              if(value==0) jihe["用神分析"]["月令"]=jihe["用神分析"]["月令"].splice(yufu,1);
              if(value==1) jihe["用神分析"]["月令"]=jihe["用神分析"]["月令"].splice(yuchong,1); 
              layer.close(ll) 
            }
          }); 
       } 
       return jihe;
    }

    //日令对用神的旺衰影响
    riAndYongShen = function(jihe){ 
      jihe["用神分析"]["日令"]=[];
      if(jihe["用神"]["爻支"]==jihe["日令"][1]) jihe["用神分析"]["日令"].push([2,"临日建"]);
      if("合"==diZhiXiangChongHe(jihe["用神"]["爻支"],jihe["日令"][1])) jihe["用神分析"]["日令"].push([2,"日合"]);
      if(jihe["日令"][2]+"生"+jihe["用神"]["五行"]==shengKe(jihe["用神"]["五行"],jihe["日令"][2])) jihe["用神分析"]["日令"].push([1,"日生"]);
      if(jihe["用神"]["爻支"]!=jihe["日令"][1] && jihe["用神"]["五行"]==jihe["日令"][2]) jihe["用神分析"]["日令"].push([1,"日扶"]);
      if(jihe["用神"]["爻支"]!=jihe["日令"][1] && (shierGong(jihe["用神"]["五行"],jihe["日令"][1])=="长生" || shierGong(jihe["用神"]["五行"],jihe["日令"][1])=="帝旺")) jihe["用神分析"]["日令"].push([1,"日"+shierGong(jihe["用神"]["五行"],jihe["日令"][1])]);

      if(jihe["日令"][2]+"克"+jihe["用神"]["五行"]==shengKe(jihe["用神"]["五行"],jihe["日令"][2])) jihe["用神分析"]["日令"].push([-1,"日克"]);
      if(jihe["用神"]["爻支"]!=jihe["日令"][1] && shierGong(jihe["用神"]["五行"],jihe["日令"][1])=="绝") jihe["用神分析"]["日令"].push([-1,"日令"+shierGong(jihe["用神"]["五行"],jihe["日令"][1])]);
      
      if(jihe["用神"]["五行"]+"生"+jihe["日令"][2]==shengKe(jihe["用神"]["五行"],jihe["日令"][2])) jihe["用神分析"]["日令"].push([0,"日平相"]);
      if(jihe["用神"]["五行"]+"克"+jihe["日令"][2]==shengKe(jihe["用神"]["五行"],jihe["日令"][2])) jihe["用神分析"]["日令"].push([0,"日平相"]);   

      var linshiYueLin = [] 
       for(var i =0;i<jihe["用神分析"]["日令"].length;i++){
          linshiYueLin.push(jihe["用神分析"]["日令"][i][1]) 
       } 
       var yuhe = linshiYueLin.indexOf("日合");
       var yuke = linshiYueLin.indexOf("日克");   
      //碰上爻与日令相合又相克，如卯与戌；或爻与日令相冲又相扶，如丑与未；两种方向相反的卦理相撞，论旺还是论衰？ 

      if(linshiYueLin.indexOf("日合")!=-1 && linshiYueLin.indexOf("日克")!=-1){ 
         var ll =  layer.open({ 
           title: jihe["用神"]["主"]+"：请选择留下的日合克" 
           ,type:0
           ,closeBtn:0
           ,id: 'LAY_layuipro112' //设定一个id，防止重复弹出  
           ,content: $("#riheke").html()
           ,yes: function(layero, index){
             var value = $("input[name=riheke]:checked").val()
             if(typeof(value)=="undefined"){
               alert("请选择");
               return false;
             } 
             if(value==0) jihe["用神分析"]["日令"]=jihe["用神分析"]["日令"].splice(yuhe,1);
             if(value==1) jihe["用神分析"]["日令"]=jihe["用神分析"]["日令"].splice(yuke,1);  
             layer.close(ll) 
           }
         }); 
      } 
  
      return jihe;
   }

   //用神在日月组合上的旺衰
   yueAndRiYongShen = function(jihe){
      //日月组合的旺衰
      var yueLinFen = 0;
      var riLinFen = 0;
      for(var i=0;i<jihe["用神分析"]["月令"].length;i++){
        yueLinFen = yueLinFen + jihe["用神分析"]["月令"][i][0];
      }
      for(var i=0;i<jihe["用神分析"]["日令"].length;i++){
        riLinFen = riLinFen + jihe["用神分析"]["日令"][i][0];
      } 
      if(yueLinFen+riLinFen==0) jihe["用神分析"]["日月组合"] = "平";
      if(yueLinFen+riLinFen>0) jihe["用神分析"]["日月组合"] = "旺";
      if(yueLinFen+riLinFen<0) jihe["用神分析"]["日月组合"] = "衰";
      return jihe;
   }

    //某一个爻在日月组合下的影响
    yueAndRiYao = function(yaoname){  
       result=[];
       yao = {};
       yao["五行"] = yaoname.substr(-1,1)
       yao["爻支"] = yaoname.substr(-2,1)
       result["月令"] = [];
       result["日令"] = [];
       if(yao["爻支"]==jihe["月令"][1]) result["月令"].push([2,"临月建"]);
       if("合"==diZhiXiangChongHe(yao["爻支"],jihe["月令"][1])) result["月令"].push([2,"月合"]);
       if(jihe["月令"][2]+"生"+yao["五行"]==shengKe(yao["五行"],jihe["月令"][2])) result["月令"].push([1,"月生"]);
       if(yao["爻支"]!=jihe["月令"][1] && yao["五行"]==jihe["月令"][2]) result["月令"].push([1,"月扶"]);

       if("冲"==diZhiXiangChongHe(yao["爻支"],jihe["月令"][1])) result["月令"].push([-2,"逢月破"]);  
       if(jihe["月令"][2]+"克"+yao["五行"]==shengKe(yao["五行"],jihe["月令"][2])) result["月令"].push([-1,"月克"]);
       if(yao["五行"]+"生"+jihe["月令"][2]==shengKe(yao["五行"],jihe["月令"][2])) result["月令"].push([-1,"月上休囚"]);
       if(yao["五行"]+"克"+jihe["月令"][2]==shengKe(yao["五行"],jihe["月令"][2])) result["月令"].push([-1,"月上休囚"]);

       if(yao["五行"]=="水" && "丑"==jihe["月令"][1]) result["月令"].push([0,"月平相"]);
       if(yao["五行"]=="木" && "辰"==jihe["月令"][1]) result["月令"].push([0,"月平相"]);
       if(yao["五行"]=="火" && "未"==jihe["月令"][1]) result["月令"].push([0,"月平相"]);
       if(yao["五行"]=="金" && "戌"==jihe["月令"][1]) result["月令"].push([0,"月平相"]);

        
       //碰上爻与月令相合又相克，如卯与戌；或爻与月令相冲又相扶，如丑与未；两种方向相反的卦理相撞，论旺还是论衰？
       var linshiYueLin = [] 
       for(var i =0;i<result["月令"].length;i++){
          linshiYueLin.push(result["月令"][i][1]) 
       }
       var yuhe = linshiYueLin.indexOf("月合");
       var yuke = linshiYueLin.indexOf("月克"); 
       var yuchong = linshiYueLin.indexOf("月冲"); 
       var yufu = linshiYueLin.indexOf("月扶"); 

       if(linshiYueLin.indexOf("月合")!=-1 && linshiYueLin.indexOf("月克")!=-1){
          var ll = layer.open({ 
            title: yaoname+":请选择留下的月合克" 
            ,type:0
            ,closeBtn:0
            ,id: 'LAY_layuipro122' //设定一个id，防止重复弹出  
            ,content: $("#yueheke").html()
            ,yes: function(layero, index){
              var value = $("input[name=yueheke]:checked").val()
              if(typeof(value)=="undefined"){
                alert("请选择");
                return false;
              } 
              if(value==0) result["月令"]=result["月令"].splice(yuhe,1);
              if(value==1) result["月令"]=result["月令"].splice(yuke,1); 
              layer.close(ll)
            }
          }); 
          
       }
       if(linshiYueLin.indexOf("月冲")!=-1 && linshiYueLin.indexOf("逢月破")!=-1){ 
          var ll =  layer.open({ 
            title: yaoname+":请选择留下的月扶冲" 
            ,type:0
            ,closeBtn:0
            ,id: 'LAY_layuipro112' //设定一个id，防止重复弹出  
            ,content: $("#yuechongfu").html()
            ,yes: function(layero, index){
              var value = $("input[name=yuechongfu]:checked").val()
              if(typeof(value)=="undefined"){
                alert("请选择");
                return false;
              }
              if(value==0) result["月令"]=result["月令"].splice(yufu,1);
              if(value==1) result["月令"]=result["月令"].splice(yuchong,1); 
              layer.close(ll) 
            }
          }); 
       } 

      //日令、、/////////////////////////////////
      if(yao["爻支"]==jihe["日令"][1]) result["日令"].push([2,"临日建"]);
      if("合"==diZhiXiangChongHe(yao["爻支"],jihe["日令"][1])) result["日令"].push([2,"日合"]);
      if(jihe["日令"][2]+"生"+yao["五行"]==shengKe(yao["五行"],jihe["日令"][2])) result["日令"].push([1,"日生"]);
      if(yao["爻支"]!=jihe["日令"][1] && yao["五行"]==jihe["日令"][2]) result["日令"].push([1,"日扶"]);
      if(yao["爻支"]!=jihe["日令"][1] && (shierGong(yao["五行"],jihe["日令"][1])=="长生" || shierGong(yao["五行"],jihe["日令"][1])=="帝旺")) result["日令"].push([1,"日"+shierGong(yao["五行"],jihe["日令"][1])]);

      if(jihe["日令"][2]+"克"+yao["五行"]==shengKe(yao["五行"],jihe["日令"][2])) result["日令"].push([-1,"日克"]);
      if(yao["爻支"]!=jihe["日令"][1] && shierGong(yao["五行"],jihe["日令"][1])=="绝") result["日令"].push([-1,"日令"+shierGong(yao["五行"],jihe["日令"][1])]);

      if("冲"==diZhiXiangChongHe(yao["爻支"],jihe["日令"][1])) result["日令"].push([0,"日冲"]);
      
      if(yao["五行"]+"生"+jihe["日令"][2]==shengKe(yao["五行"],jihe["日令"][2])) result["日令"].push([0,"日平相"]);
      if(yao["五行"]+"克"+jihe["日令"][2]==shengKe(yao["五行"],jihe["日令"][2])) result["日令"].push([0,"日平相"]);   

      var linshiriLin = [] 
       for(var i =0;i<result["日令"].length;i++){
        linshiriLin.push(result["日令"][i][1]) 
       }
       var yuhe = linshiriLin.indexOf("日合");
       var yuke = linshiriLin.indexOf("日克");   
      //碰上爻与日令相合又相克，如卯与戌；或爻与日令相冲又相扶，如丑与未；两种方向相反的卦理相撞，论旺还是论衰？  
      
      if(linshiriLin.indexOf("日合")!=-1 && linshiriLin.indexOf("日克")!=-1){ 
        
        // var value = prompt(yaoname+":请输入留下的日合克（0/1）", "");
        // if(typeof(value)=="undefined"){
        //   alert("请选择");
        //   return false;
        // }    
        // console.log(result["日令"])
        // if(value==0) result["日令"]=result["日令"].splice(yuke,1); 
        // if(value==1) result["日令"]=result["日令"].splice(yuhe,1); 

         var ll =  layer.open({ 
           title: yaoname+":请选择留下的日合克" 
           ,type:0
           ,async:true
           ,closeBtn:0
           ,id: 'LAY_layuipro112' //设定一个id，防止重复弹出  
           ,content: $("#riheke").html()
           ,yes: function(layero, index){
             var value = $("input[name=riheke]:checked").val()
             if(typeof(value)=="undefined"){
               alert("请选择");
               return false;
             }    
             if(value==0) result["日令"]=result["日令"].splice(yuhe,1); 
             if(value==1) result["日令"]=result["日令"].splice(yuke,1); 
              
             layer.close(ll) 
           }
         }); 
      } 
      result["爻名"]=yaoname;

      //日月组合的旺衰
      var yueLinFen = 0;
      var riLinFen = 0;
      for(var i=0;i<result["月令"].length;i++){
        yueLinFen = yueLinFen + result["月令"][i][0];
      }
      for(var i=0;i<result["日令"].length;i++){
        riLinFen = riLinFen + result["日令"][i][0];
      }
      if(yueLinFen+riLinFen==0) result["日月组合"] = "平";
      if(yueLinFen+riLinFen>0) result["日月组合"] = "旺";
      if(yueLinFen+riLinFen<0) result["日月组合"] = "衰";
      return result;
    }

    //三合局判断
    function sanHeJu(dizhiZu){
      if(dizhiZu.indexOf("申")!=-1 && dizhiZu.indexOf("子") && dizhiZu.indexOf("辰")!=-1) return ["水","申子辰合水局","子"];
      if(dizhiZu.indexOf("寅")!=-1 && dizhiZu.indexOf("午") && dizhiZu.indexOf("戌")!=-1) return ["火","寅午戌合火局","午"];
      if(dizhiZu.indexOf("亥")!=-1 && dizhiZu.indexOf("卯") && dizhiZu.indexOf("未")!=-1) return ["木","亥卯未合木局","卯"];
      if(dizhiZu.indexOf("丑")!=-1 && dizhiZu.indexOf("酉") && dizhiZu.indexOf("巳")!=-1) return ["金","巳酉丑合金局","酉"];
      return false;
    }

    //动变组合对用神的影响
    dongBianAndYongShen=function(jihe){
      jihe["动变分析"] = [];
      jihe["动变分析"]["无用动爻"] = [];
      jihe["世爻分析"]["结果"] =[];
      for(var key in jihe["变爻"]){ 
          var dongyao = jihe["变爻"][key][0];
          var bianyao = jihe["变爻"][key][1];
          var yongshen = jihe["用神"]["主"];
          var yongshenWuxin = jihe["用神"]["五行"];
          var dongyaoWuxin = dongyao.substr(-1,1);
          var dongyaoDizhi = dongyao.substr(-2,1);
          var bianyaoWuxin = bianyao.substr(-1,1);
          var bianyaoDizhi = bianyao.substr(-2,1); 
          var shiyao = jihe["主世"][0];
          var shiyaoWuxin = shiyao.substr(-1,1);
          var shiyaoDizhi = shiyao.substr(-2,1);

          //动爻生用神 
          if(dongyaoWuxin+"生"+yongshenWuxin==shengKe(yongshenWuxin,dongyaoWuxin)){
            jihe["动变分析"].push([dongyao,"吉","动爻"+dongyao+"生用神"+yongshen]);  //动变组合对用神的影响
          }  
          if(dongyaoWuxin+"生"+shiyaoWuxin==shengKe(shiyaoWuxin,dongyaoWuxin)){
            jihe["世爻分析"]["结果"].push([dongyao,"吉","动爻"+dongyao+"生世爻"+shiyao]);  //动变组合对用神的影响
          } 

          //动变爻生产三合局生用神
          var bianyaoDizhi = [];
          for(var key in jihe["变爻"]){
            bianyaoDizhi.push(jihe["变爻"][key][0].substr(-2,1));
            bianyaoDizhi.push(jihe["变爻"][key][1].substr(-2,1));
          } 
          //爻被动变组合形成三合局来生
          if(sanhe=sanHeJu(bianyaoDizhi)){
            if(sanhe[0]+"生"+yongshenWuxin==shengKe(yongshenWuxin,sanhe[0])){
              jihe["动变分析"].push([sanhe[1],"吉",sanhe[1]+"三合局生用神"+yongshen]);  //动变组合对用神的影响
            } 
            if(sanhe[0]+"生"+shiyaoWuxin==shengKe(shiyaoWuxin,sanhe[0])){
              jihe["世爻分析"]["结果"].push([sanhe[1],"吉",sanhe[1]+"三合局生世爻"+shiyao]);  //动变组合对用神的影响
            } 
          }  

          //爻动变回头相生 
          if(bianyaoWuxin+"生"+dongyaoWuxin==shengKe(dongyaoWuxin,bianyaoWuxin)){
            jihe["动变分析"].push([bianyao,"吉","变爻"+bianyao+"回头生"+dongyao]);  //动变组合对用神的影响
          }   

          //爻动而化进神  
          if(bianyaoWuxin==dongyaoWuxin && dz.indexOf(bianyaoDizhi)>dz.indexOf(dongyaoDizhi)){
            jihe["动变分析"].push([bianyao,"吉","变爻"+bianyao+"化进神"+dongyao]);  //动变组合对用神的影响
          }  

          //爻动变出临日月之爻，或合月之爻，且变爻不产生回头的生克墓 世用化旺
          var bianyaoYueRi = yueAndRiYao(bianyao); 
          var yueriLs = [] 
          for(var i=0;i<bianyaoYueRi["月令"].length;i++){
              if(bianyaoYueRi["月令"][i][1]=="临月建")  yueriLs.push("临月建");
              if(bianyaoYueRi["月令"][i][1]=="月合")  yueriLs.push("月合"); 
          }  
          for(var i=0;i<bianyaoYueRi["日令"].length;i++){ 
            if(bianyaoYueRi["日令"][i][1]=="临日建") yueriLs.push("临日建");
            if(bianyaoYueRi["日令"][i][1]=="逢月破") yueriLs.push("逢月破");
          }  
          if("冲"==diZhiXiangChongHe(bianyaoDizhi,jihe["日令"][1])) yueriLs.push("逢日破")  
 
          if(bianyaoWuxin+"生"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) &&  bianyaoWuxin+"克"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) &&  "墓"!=shierGong(dongyaoWuxin,bianyaoDizhi)){
            if(yueriLs.indexOf("临月建")!=-1 ){
              jihe["动变分析"].push([dongyao,"吉","变爻"+bianyao+"临月建,动变爻世用化旺"]);  //动变组合对用神的影响
            }
            if( yueriLs.indexOf("月合")!=-1 ){
              jihe["动变分析"].push([dongyao,"吉","变爻"+bianyao+"月合,动变爻世用化旺"]);  //动变组合对用神的影响
            }
            if( yueriLs.indexOf("临日建")!=-1){
              jihe["动变分析"].push([dongyao,"吉","变爻"+bianyao+"临日建,动变爻世用化旺"]);  //动变组合对用神的影响
            }
          }  


            //一般情况趋向衰败的动变组合主要有以下几种

            //爻被有用动爻相克
            if(dongyaoWuxin+"克"+yongshenWuxin==shengKe(yongshenWuxin,dongyaoWuxin)){
              jihe["动变分析"].push([dongyao,"凶","动爻"+dongyao+"克用神"+yongshen]);  //动变组合对用神的影响
            }  
            if(dongyaoWuxin+"克"+shiyaoWuxin==shengKe(shiyaoWuxin,dongyaoWuxin)){
              jihe["世爻分析"]["结果"].push([dongyao,"凶","动爻"+dongyao+"克世爻"+shiyao]);  //动变组合对用神的影响
            }  

            //爻被动变组合形成三合局来克
            if(sanhe=sanHeJu(bianyaoDizhi)){
              if(sanhe[0]+"克"+yongshenWuxin==shengKe(yongshenWuxin,sanhe[0])){
                jihe["动变分析"].push([sanhe[1],"凶",sanhe[1]+"三合局克用神"+yongshen]);  //动变组合对用神的影响
              } 
              if(sanhe[0]+"克"+shiyaoWuxin==shengKe(shiyaoWuxin,sanhe[0])){
                jihe["世爻分析"]["结果"].push([sanhe[1],"凶",sanhe[1]+"三合局克世爻"+shiyao]);  //动变组合对用神的影响
              } 
            } 

            //爻动变回头相克 
            if(bianyaoWuxin+"克"+dongyaoWuxin==shengKe(dongyaoWuxin,bianyaoWuxin)){
              jihe["动变分析"].push([dongyao,"凶","变爻"+bianyao+"回头克动爻"+dongyao]);  //动变组合对用神的影响
            }  

            //爻动而化退神 
            if(bianyaoWuxin==dongyaoWuxin && dz.indexOf(bianyaoDizhi)<dz.indexOf(dongyaoDizhi)){
              jihe["动变分析"].push([dongyao,"凶","变爻"+bianyao+"化退神"]);  //动变组合对用神的影响
            } 

            //爻动而化绝，且不存在回头生  
            if(bianyaoWuxin+"生"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) ){
              if("绝"==shierGong(dongyaoWuxin,bianyaoDizhi)){
                jihe["动变分析"].push([dongyao,"凶","变爻"+bianyao+"动而化绝"]);  //动变组合对用神的影响
              } 
            }   

            //）爻动而化破（化月破或日破），且不产生回头生克墓 
            if(bianyaoWuxin+"生"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) &&  bianyaoWuxin+"克"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) &&  "墓"!=shierGong(dongyaoWuxin,bianyaoDizhi)){ 
              if( yueriLs.indexOf("逢月破")!=-1 ){
                jihe["动变分析"].push([dongyao,"凶","变爻"+bianyao+"逢月破,事败的征兆"]);  //动变组合对用神的影响
              }
              if( yueriLs.indexOf("逢日破")!=-1){
                jihe["动变分析"].push([dongyao,"凶","变爻"+bianyao+"逢日破,事败的征兆"]);  //动变组合对用神的影响
              }
            } 

            //静爻被有用动爻所冲 
            if(bianyaoWuxin+"克"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) ){
              if("冲"==diZhiXiangChongHe(jihe["主世"][0],dongyao)){
                var yueri = yueAndRiYao(jihe["主世"][0]);
                if(yueri["日月组合"]=="旺"){
                  jihe["动变分析"].push([dongyao,"吉","动爻"+dongyao+"冲世爻，世爻在日月下旺，利好"]);  //动变组合对用神的影响
                }
                if(yueri["日月组合"]=="衰"){
                  jihe["动变分析"].push([dongyao,"凶","动爻"+dongyao+"冲世爻，世爻在日月下衰，不利"]);  //动变组合对用神的影响
                }
              }  
            }  

            //静爻被有用动爻所趋合  
            if(bianyaoWuxin+"克"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) && bianyaoWuxin+"生"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin)){
              if("合"==diZhiXiangChongHe(jihe["主世"][0],dongyao)){
                var yueri = yueAndRiYao(jihe["主世"][0]);
                if(yueri["日月组合"]=="旺"){
                  jihe["动变分析"].push([dongyao,"吉","动爻"+dongyao+"合世爻，世爻在日月下旺，利好"]);  //动变组合对用神的影响
                }
                if(yueri["日月组合"]=="衰"){
                  jihe["动变分析"].push([dongyao,"凶","动爻"+dongyao+"合世爻，世爻在日月下衰，不利"]);  //动变组合对用神的影响
                }
              }  
            }  

            //静爻被有用动爻所墓 
            if(bianyaoWuxin+"克"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) && bianyaoWuxin+"生"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin)){
              if("墓"==shierGong(jihe["主世"][0]),dongyao){
                var yueri = yueAndRiYao(jihe["主世"][0]);
                if(yueri["日月组合"]=="旺"){
                  jihe["动变分析"].push([dongyao,"吉","动爻"+dongyao+"墓世爻，世爻在日月下旺，利好"]);  //动变组合对用神的影响
                }
                if(yueri["日月组合"]=="衰"){
                  jihe["动变分析"].push([dongyao,"凶","动爻"+dongyao+"墓世爻，世爻在日月下衰，不利"]);  //动变组合对用神的影响
                }
              }  
            }    
            
            //无用动爻分析
            if(bianyaoWuxin+"克"+dongyaoWuxin==shengKe(dongyaoWuxin,bianyaoWuxin)){  
                jihe["动变分析"]["无用动爻"].push([dongyao,"凶","动爻"+dongyao+"被克，为无用动爻，无能力生克他爻"]);  
            }   
            if(bianyaoWuxin==dongyaoWuxin && dz.indexOf(bianyaoDizhi)<dz.indexOf(dongyaoDizhi)){
              jihe["动变分析"]["无用动爻"].push([dongyao,"凶","动爻"+dongyao+"化退神，为无用动爻，无能力生克他爻"]);  
            }   
            if(yueriLs.indexOf("逢月破")!=-1 ){
              jihe["动变分析"]["无用动爻"].push([dongyao,"凶","变爻"+bianyao+"动而化破(月破)，为无用动爻，无能力生克他爻"]);  
            }
            if(yueriLs.indexOf("逢日破")!=-1){
              jihe["动变分析"]["无用动爻"].push([dongyao,"凶","变爻"+bianyao+"动而化破(日破)，为无用动爻，无能力生克他爻"]);  
            }
            if("绝"==shierGong(dongyaoWuxin,bianyaoDizhi) && bianyaoWuxin+"生"+dongyaoWuxin!=shengKe(dongyaoWuxin,bianyaoWuxin) && "冲"!=diZhiXiangChongHe(dongyao,bianyao)){
              jihe["动变分析"]["无用动爻"].push([dongyao,"凶","动爻"+dongyao+"动而化绝，无能力生克他爻"]);   
            }  

      } 

      jihe["动变分析"]["结果"] = [];
      var wuyongDonyao = [];
      for(key in jihe["动变分析"]["无用动爻"]){
        wuyongDonyao.push(jihe["动变分析"]["无用动爻"][key][0])
      }
      
      for(key in jihe["动变分析"]){
        if(key=="无用动爻" || key=="结果") continue;  
        if(wuyongDonyao.indexOf(jihe["动变分析"][key][0])==-1){ 
          jihe["动变分析"]["结果"].push(jihe["动变分析"][key]);
        }
      } 
      return jihe;
    }
    

    //andong
    var xunkong = this.xunKong();
    andong=function(){
      jihe["暗动"] = [];
      var jinyao = ["爻1","爻2","爻3","爻4","爻5","爻6"];
      var bianyao = jihe["变爻"]; 
      for(key in bianyao){
        index =jinyao.indexOf(key)
        if(index!=-1){
          jinyao.splice(index,1);
        }
        var bk = bianyao[key][0];
        //明动之爻受日冲，不论旺衰，皆属冲起有用
        var yueri = yueAndRiYao(bk);
        
        for(var i=0;i<yueri["日令"].length;i++){
          if(yueri["日令"][i][1]=="日冲"){
            jihe["暗动"].push(bk+"动爻受日冲，不论旺衰，皆属冲起有用");
          }
        }
      }
      for(var key=0;key<jinyao.length;key++){ 
          var jin = jihe[jinyao[key]]["主爻"];
          var yueri = yueAndRiYao(jin);  
          for(var i=0;i<yueri["日令"].length;i++){
            if(yueri["日令"][i][1]=="日冲"){
              var yueCount = 0; 
              for(var j=0;j<yueri["月令"].length;j++){ 
                yueCount = yueCount+yueri["月令"][j][0];
              }  
              if(yueCount>0){
                jihe["暗动"].push(jin+"静爻得月令趋旺而受日冲，为冲起暗动");
              }  
              if((jihe['月令'][1]=='辰' && jin.substring(2,3)=='卯') ||
                (jihe['月令'][1]=='未' && jin.substring(2,3)=='午') ||
                (jihe['月令'][1]=='戌' && jin.substring(2,3)=='酉') ||
                (jihe['月令'][1]=='丑' && jin.substring(2,3)=='子') 
              ){
                jihe["暗动"].push(jin+"静爻得月令之气而受日冲，为冲起暗动");
              } 
              if(xunkong.indexOf(jin.substr(-2,1))!=-1){
                jihe["暗动"].push(jin+"静爻正处于旬空状态下受日冲，为冲起暗动");
              }  
              for(bk in bianyao){
                if(bianyao[bk][0].substr(-1,1)+"生"+jin.substr(-1,1)==shengKe(jin.substr(-1,1),bianyao[bk][0].substr(-1,1)) && yueCount<=0){
                  jihe["暗动"].push(jin+"静爻虽在月令休囚，但在受日冲的同时又得动爻来生旺，为冲起暗动，谓之动爻趋旺");
                }
              } 
            }  
          } 
      }
      //问事若用神得旺相，同时世爻若受日令冲动，谓之用趋世兴。意为用神得旺而令世爻受冲兴起暗动。
      if(bianyao.length==0){
        if(jihe["用神分析"]["日月组合"]=="旺"){
          for(var i=0;i<jihe["世爻分析"]["日月组合"]["日令"].length;i++){
            if(jihe["世爻分析"]["日月组合"]["日令"][i][1]=="日冲"){
              jihe["暗动"].push(jihe["主世"][0]+"用神得旺相，同时世爻若受日令冲动，谓之用趋世兴。意为用神得旺而令世爻受冲兴起暗动。");
            }
          } 
        }
      }
      
      return jihe
    }


    //三绊理论
    sanban=function(){
      jihe["三绊"] = [];
      for(var key in jihe["变爻"]){ 
        var dongyao = jihe["变爻"][key][0];
        var bianyao = jihe["变爻"][key][1];
        var yongshen = jihe["用神"]["主"];
        var yongshenWuxin = jihe["用神"]["五行"];
        var dongyaoWuxin = dongyao.substr(-1,1);
        var dongyaoDizhi = dongyao.substr(-2,1);
        var bianyaoWuxin = bianyao.substr(-1,1);
        var bianyaoDizhi = bianyao.substr(-2,1); 
        var shiyao = jihe["主世"][0];
        var shiyaoWuxin = shiyao.substr(-1,1);
        var shiyaoDizhi = shiyao.substr(-2,1);

         
 
        if("合"==diZhiXiangChongHe(dongyaoDizhi,jihe["日令"][1])){ 
            jihe["三绊"].push(["动爻"+dongyao+"与日建相合,绊住"]);  //日建与卦中动爻或变爻相合
        }  
        if( "合"==diZhiXiangChongHe(bianyaoDizhi,jihe["日令"][1])){ 
          jihe["三绊"].push(["变爻"+bianyao+"与日建相合,绊住"]);  //日建与卦中动爻或变爻相合
        }  

        for(var key1 in jihe["变爻"]){ 
          var dongyao1 = jihe["变爻"][key1][0];
          var bianyao1 = jihe["变爻"][key1][1];
          var yongshen1 = jihe["用神"]["主"];
          var yongshenWuxin1 = jihe["用神"]["五行"];
          var dongyaoWuxin1 = dongyao1.substr(-1,1);
          var dongyaoDizhi1 = dongyao1.substr(-2,1);
          var bianyaoWuxin1 = bianyao1.substr(-1,1);
          var bianyaoDizhi1 = bianyao1.substr(-2,1); 
          var shiyao1 = jihe["主世"][0];
          var shiyaoWuxin1 = shiyao1.substr(-1,1);
          var shiyaoDizhi1 = shiyao1.substr(-2,1);
          if( "合"==diZhiXiangChongHe(dongyaoDizhi,dongyaoDizhi1)){ 
            jihe["三绊"].push([bianyao,"吉",dongyao+"和"+dongyao1+"动爻与另一动爻相合,绊住"]);  //卦中一动爻与另一动爻相合
          }
        }

        if( "合"==diZhiXiangChongHe(bianyaoDizhi,dongyaoDizhi)){ 
          jihe["三绊"].push([bianyao,"吉",dongyao+"和"+bianyao+"动爻与变爻相合,绊住"]);  //动爻与变爻相合
        }

      }
      
      return jihe
    }

    //静卦分析
    jinggua = function(jihe){
      jihe["静卦分析"] = {};
      var jinyao = ["爻1","爻2","爻3","爻4","爻5","爻6"];
      if(jihe["变爻"].length==0){
        var shiyao = jihe["主世"][0];
        var yongshen = jihe["用神"]["主"];
        if(shiyao == yongshen){
          var count=0;
          for(var i=0;i<jinyao.length;i++){
            var zhuyao = jihe[jinyao[i]]["主爻"].substr(-1,1);
            if(shengKe(shiyao.substr(-1,1),zhuyao)){
              count++;
              break; 
            }  
          }
          if(count==0){
            jihe["静卦分析"].push("用神持世，不管世用旺衰与否，即属吉兆");
          }else{
            jihe["静卦分析"].push("用神持世,却无根，没有元神，短期内暂时无虞，但却不利于长久，长远坐实为凶兆");
          }

          for(var i=0;i<jihe["世爻分析"]["日令"].length;i++){
            if(jihe["世爻分析"]["日令"][i][1]=="逢日破"){
              jihe["静卦分析"].push("世爻受日冲，见逢破者，凶兆却是即时生效");
            }
          }
          for(var i=0;i<jihe["世爻分析"]["月令"].length;i++){
            if(jihe["世爻分析"]["月令"][i][1]=="逢月破"){
              jihe["静卦分析"].push("世爻受月冲，见逢破者，凶兆却是即时生效");
            }
          } 
        }else{
          jihe["静卦分析"].push("问仕途得静卦忌神子孙持世、求财禄得静卦忌神兄弟持世、占考学得静卦忌神妻财持世、    占忧患得静卦忧神官鬼持世、男问婚姻得静卦忌神兄弟持世、女问感情得静卦忌神子孙持世等等");
          jihe["静卦分析"].push("判断是否为忌神持世");
          for(var i=0;i<jihe["世爻分析"]["日令"].length;i++){
            if(jihe["世爻分析"]["日令"][i][1]=="逢日破"){
              if(yongshen.substr(-1,1)+"克"+shiyao.substr(-1,1),shengKe(shiyao.substr(-1,1),yongshen.substr(-1,1))){
                jihe["静卦分析"].push("忌神世爻受日冲，见逢破者，用神克世爻，反为吉兆");
              }else{
                jihe["静卦分析"].push("忌神世爻受日冲，凶的兆头");
              } 
            }
          }
          for(var i=0;i<jihe["世爻分析"]["月令"].length;i++){
            if(jihe["世爻分析"]["月令"][i][1]=="逢月破"){
              if(yongshen.substr(-1,1)+"克"+shiyao.substr(-1,1),shengKe(shiyao.substr(-1,1),yongshen.substr(-1,1))){
                jihe["静卦分析"].push("忌神世爻受月冲，见逢破者，用神克世爻，反为吉兆");
              }else{
                jihe["静卦分析"].push("忌神世爻受月冲，凶的兆头");
              }  
            }
          }
        }

        if(yongshen.substr(-1,1)+"生"+shiyao.substr(-1,1),shengKe(shiyao.substr(-1,1),yongshen.substr(-1,1))){
           if(jihe["用神分析"]["日月组合"]=="旺"){
            jihe["静卦分析"].push("用神在日月旺，吉的兆头");
           }
           if(jihe["用神分析"]["日月组合"]=="平"){
            for(var i=0;i<jihe["用神分析"]["日令"].length;i++){
              if(jihe["用神分析"]["日令"][i][1]=="日扶" || jihe["用神分析"]["日令"][i][1]=="日生"){
                jihe["静卦分析"].push("用神在日月平，日扶生，吉的兆头");
              }
            }
            for(var i=0;i<jihe["用神分析"]["月令"].length;i++){
              if(jihe["用神分析"]["月令"][i][1]=="逢月破"){
                if(jihe["用神分析"]["月令"][i][1]=="月扶" || jihe["用神分析"]["月令"][i][1]=="月生"){
                  jihe["静卦分析"].push("用神在日月平，月扶，吉的兆头");
                } 
              }
            }
           } 
           if(jihe["用神分析"]["日月组合"]=="衰"){
            jihe["静卦分析"].push("用神在日月衰，凶的兆头");
           }
        } 

        if(yongshen.substr(-1,1)+"克"+shiyao.substr(-1,1),shengKe(shiyao.substr(-1,1),yongshen.substr(-1,1))){ 
          if(jihe["世爻分析"]['日月组合']="吉"){
            for(var i=0;i<jihe["用神分析"]["日令"].length;i++){
              if(jihe["用神分析"]["日令"][i][1]=="日扶" || jihe["用神分析"]["日令"][i][1]=="日生"){
                if(jihe["用神分析"]["日月组合"]=="平" && yongshen.indexOf("妻财")!=-1){
                  jihe["静卦分析"].push("用神起码是受日月之一生扶的平相，另外受克的世爻也不能衰弱，求财得静卦用神财爻克世反为得财之兆");
                } 
              }
            }
            for(var i=0;i<jihe["用神分析"]["月令"].length;i++){
              if(jihe["用神分析"]["月令"][i][1]=="逢月破"){
                if(jihe["用神分析"]["月令"][i][1]=="月扶" || jihe["用神分析"]["月令"][i][1]=="月生"){
                  if(jihe["用神分析"]["日月组合"]=="平" && yongshen.indexOf("妻财")!=-1){
                    jihe["静卦分析"].push("用神起码是受日月之一生扶的平相，另外受克的世爻也不能衰弱，求财得静卦用神财爻克世反为得财之兆");
                  } 
                } 
              }
            }
          }else{
            jihe["静卦分析"].push("用神克世爻，凶的兆头"); 
          }
        }

      }
      return jihe;
    }

    getLiuhe =function(zhi){
      if(zhi=="子") return "丑";if(zhi=="丑") return "子";
      if(zhi=="寅") return "亥";if(zhi=="亥") return "寅";
      if(zhi=="卯") return "戌";if(zhi=="戌") return "卯";
      if(zhi=="辰") return "酉";if(zhi=="酉") return "辰";
      if(zhi=="巳") return "申";if(zhi=="申") return "巳";
      if(zhi=="午") return "未";if(zhi=="未") return "午";
    }

    getLiuchong =function(zhi){
      if(zhi=="子") return "午";if(zhi=="午") return "子";
      if(zhi=="寅") return "申";if(zhi=="申") return "寅";
      if(zhi=="卯") return "酉";if(zhi=="酉") return "卯";
      if(zhi=="辰") return "戌";if(zhi=="戌") return "辰";
      if(zhi=="巳") return "亥";if(zhi=="亥") return "巳";
      if(zhi=="丑") return "未";if(zhi=="未") return "丑";
    }

    yingqi = function(){
      jihe["应期细节"] = [];
      //爻静，逢值逢冲之期应事
      if(jihe["变爻"].length==0){
        if(jihe["用神分析"]["日月组合"]=="平" || jihe["用神分析"]["日月组合"]=="旺"){
          jihe["应期细节"].push("主事爻静旺者，多会应在逢冲之期；"+getLiuchong(jihe["用神"]["爻支"])); 
        }else{
          jihe["应期细节"].push("而主事爻为衰弱者，较多会应在逢值之期"+jihe["用神"]["爻支"]+"或者"+getLiuhe(jihe["用神"]["爻支"]));
        }
      }
      //爻动，逢合逢值之期应事
      jihe["应期细节"].push("爻动，逢合逢值之期应事");
      //爻月破，逢填实、补破或出月破之期应事。
      for(var i=0;i<jihe["用神分析"]["月令"].length;i++){
        if(jihe["用神分析"]["月令"][i][1]=="逢月破"){
          jihe["应期细节"].push("爻月破，逢填实、补破或出月破之期应事"+jihe["用神"]["爻支"]);
        }
        if(jihe["用神分析"]["月令"][i][1]=="月合"){
          jihe["应期细节"].push("爻遇合，逢两冲之期应事"+getLiuchong(jihe["用神"]["爻支"]));
        }
        if(jihe["用神分析"]["月令"][i][1]=="月合"){
          jihe["应期细节"].push("爻遇冲，逢两合之时应事"+getLiuhe(jihe["用神"]["爻支"]));
        }
      } 
      //日冲者，在应期层面也视为破，一般逢填实、或补破之时应事，当然最快者，也会在当日（期）或次日（期）应事。
      for(var i=0;i<jihe["用神分析"]["日令"].length;i++){
        if(jihe["用神分析"]["日令"][i][1]=="逢日破"){
          jihe["应期细节"].push("爻日破，逢填实、补破或出日破之期应事，也会在当日（期）或次日（期）应事"+jihe["用神"]["爻支"]);
        }
        if(jihe["用神分析"]["日令"][i][1]=="日合"){
          jihe["应期细节"].push("爻遇合，逢两冲之期应事"+getLiuchong(jihe["用神"]["爻支"]));
        }
        if(jihe["用神分析"]["日令"][i][1]=="日合"){
          jihe["应期细节"].push("爻遇冲，逢两合之时应事"+getLiuhe(jihe["用神"]["爻支"]));
        }
      } 
      //旬空者，逢填实、逢冲实、或出空期之时应事。
      if(xunkong.indexOf(jihe["用神"]["爻支"])!=-1){
        jihe["应期细节"].push("旬空者，逢填实、逢冲实、或出空期之时应事。"+jihe["用神"]["爻支"]);
      }
      //动逢月合，一般数后三个月内应事
      jihe["应期细节"].push("动逢月合，一般数后三个月内应事");
      jihe["应期细节"].push("变爻者，若非回头生克，逢值逢冲之期应事之吉凶；若存在回头生克，逢值逢合之期应事。");
      jihe["应期细节"].push("化进神，于逢值、逢合或逢化进之期应事。");
      jihe["应期细节"].push("化退神，逢两冲或逢化退之时应事。");
      jihe["应期细节"].push("遇三合局，局内凶者破局之期应事。吉断者不管局内局外，喜局宜成忌局宜破.三合缺一者，可在补缺成局之时应事");
      jihe["应期细节"].push("定性不吉利之占，也可在世爻（自占自事）或用神逢冲之期应凶");
      return jihe;

    }

    //组织数据 
    zuzhi =function(){
      if(leibie==1){ //事态挂
        var ysText = $("#yongshen").text();
        if(ysText.length<=1) {
          layer.msg("请先选择一个用神");
          return;
        } 
        jihe["旬空"] = xunkong;
        jihe["用神"] = {"主":ysText,"六亲":ysText.length<=5?ysText.substr(0,2):ysText.substr(4,2),"爻支":ysText.substr(-2,1),"五行":ysText.substr(-1,1),"位置":yongshen_wei};  
        
        //月令对用神的旺衰影响
        jihe = yueAndYongShen(jihe);   
        //日令对用神的旺衰影响 
        jihe = riAndYongShen(jihe); 
        
        //世爻分析
        jihe["世爻分析"] = {};
        jihe["世爻分析"]["日月结果"] = ""; 
        var zhushifenxi = yueAndRiYao(jihe["主世"][0]);
        jihe["世爻分析"]["日月组合"] = zhushifenxi; 

        if(zhushifenxi["日月组合"]=="旺"){
          jihe["世爻分析"]["日月结果"] = "吉";
        }else{
          for(key in zhushifenxi){
            if(zhushifenxi["日令"][1]=="日生" || zhushifenxi["日令"][1]=="日扶" || zhushifenxi["月令"][1]=="月生" || zhushifenxi["月令"][1]=="月扶"){
              jihe["世爻分析"]["日月结果"] = "吉";
            } else{
              jihe["世爻分析"]["日月结果"] = "凶";
            }
          }
        } 
        //单一判断爻的日月组合旺衰 有需要就用
        // console.log(yueAndRiYao("父母壬申金"))
       
        //动变组合对用神的影响
        jihe = dongBianAndYongShen(jihe);
        
        //暗动 
        jihe = andong(jihe); 
        //静卦分析
        jihe = jinggua(jihe);

        //旬空分析
        jihe["旬空分析"] = [];
        // jihe["旬空分析"].push("占病吉凶的卦中出现用神旬空，则是病况能短期痊愈或暂见好转的卦兆") 
        // jihe["旬空分析"].push("求财占得兄弟持世空亡，是短期暂时得财的预兆，但这个喜庆的背后却隐藏着巨大的隐忧，用一句词语概括就是“先盈后亏”，先喜而后悲") 
        // jihe["旬空分析"].push("问行人往归，卦得世爻空亡或用神旬空，都是行人即将归来的预兆") 
        // jihe["旬空分析"].push("占仕途而得子孙持世旬空，占问短期数日内结果的，或有功名及身之象，但这不能说是好事，因这功名最终却有不继之忧") 
        // jihe["旬空分析"].push("忧患心态之占，若占得喜神子孙爻逢空，反是忧患短期内无法了结或事主将长期忧心忡忡的征兆") 

        //三绊
        jihe = sanban(jihe);

        //应期细节
        
        jihe = yingqi(jihe);
 
      }else{//心态卦
        var yongshen = $("#yongshen").text();
        layer.msg("心态卦没写");
      }
      $("#zuzhi").hide();
      $("#fenxi").show();
    }

    //分析数据
    fenxi = function(){
      //用神在日月组合上的旺衰 
      jihe = yueAndRiYongShen(jihe); 

      console.log(jihe)
      $("#jixiong").text("");
      $("#yingqi").text("");
      $("#jixiong").append("用神分析：");
      for(var i=0;i<jihe["用神分析"]["月令"].length;i++){
        $("#jixiong").append(jihe["用神分析"]["月令"][i][1]+",");
      }
      for(var i=0;i<jihe["用神分析"]["日令"].length;i++){
        $("#jixiong").append(jihe["用神分析"]["日令"][i][1]+",");
      }
      $("#jixiong").append("总体："+jihe["用神分析"]["日月组合"]+"<br>");

      $("#jixiong").append("<br>世爻分析：");
      for(var i=0;i<jihe["世爻分析"]["日月组合"]["月令"].length;i++){
        $("#jixiong").append(jihe["世爻分析"]["日月组合"]["月令"][i][1]+",");
      }
      for(var i=0;i<jihe["世爻分析"]["日月组合"]["日令"].length;i++){
        $("#jixiong").append(jihe["世爻分析"]["日月组合"]["日令"][i][1]+",");
      }
      $("#jixiong").append("总体："+jihe["世爻分析"]["日月组合"]["日月组合"]+" ");
      $("#jixiong").append("结果："+jihe["世爻分析"]["日月结果"]+"<br>");
 
      if(jihe["动变分析"]["无用动爻"].length>0){
        $("#jixiong").append("<br>无用动爻：");
          for(var i=0;i<jihe["动变分析"]["无用动爻"].length;i++){
            $("#jixiong").append(jihe["动变分析"]["无用动爻"][i][2]+","+jihe["动变分析"]["无用动爻"][i][1]+"<br>");
          }
      }
      

      if(jihe["动变分析"]["结果"].length>0){
        $("#jixiong").append("<br>动变分析结果：");
        for(var i=0;i<jihe["动变分析"]["结果"].length;i++){
          $("#jixiong").append(jihe["动变分析"]["结果"][i][2]+","+jihe["动变分析"]["结果"][i][1]+"<br>");
        }
     }


     if(jihe["暗动"].length>0){
        $("#jixiong").append("<br>暗动：");
        for(var i=0;i<jihe["暗动"].length;i++){
          $("#jixiong").append(jihe["暗动"][i]+"<br>");
        }
      }

      if(jihe["三绊"].length>0){
        $("#jixiong").append("<br>三绊理论：");
        for(var i=0;i<jihe["三绊"].length;i++){
          $("#jixiong").append(jihe["三绊"][i]+"<br>");
        }
      }

      if(jihe["旬空分析"].length>0){
        $("#jixiong").append("<br>旬空分析：");
        for(var i=0;i<jihe["旬空分析"].length;i++){
          $("#jixiong").append(jihe["旬空分析"][i]+"<br>");
        }
      }

      // $("#yingqi").append("应期细节：");
      // for(var i=0;i<jihe["应期细节"].length;i++){
      //   $("#yingqi").append(jihe["应期细节"][i]+"<br>");
      // } 

    }

    $("#zuzhi").click( function(){
        zuzhi(); 
    });
    $("#fenxi").click( function(){
        fenxi();
    });



    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    return false;
  });

  $('#close').click(function(){  
    layer.closeAll();
    return false;
  });

  function isSafari() {
    if (navigator.userAgent.indexOf("Safari") > -1) {
    return true;
    }
    return false;
  }
  if (isSafari()) {
    $(window).bind("pageshow", function (event) {
    if (event.originalEvent.persisted && $('body').hasClass("no-cache")) {
    document.body.style.display = "none";
    window.location.reload();
    }
    });
  }
    
  
});