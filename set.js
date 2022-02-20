 
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
      } 
  };

  this.active = active;
  active.notice();
  
  $('#layerDemo .layui-btn').on('click', function(){
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(this, othis) : '';
  });




  //监听提交
  form.on('submit(demo1)', function(data){
    var title = data.field.title;
    var datetime = data.field.datetime;
    var yao1 = data.field.yao1;
    var yao2 = data.field.yao2;
    var yao3 = data.field.yao3;
    var yao4 = data.field.yao4;
    var yao5 = data.field.yao5;
    var yao6 = data.field.yao6; 

    // if(yao1=='-1' || yao2=='-1' || yao3=='-1' || yao4=='-1' || yao5=='-1' || yao6=='-1'){
    //   layer.msg('请输入完整的六码！', {icon: 5});
    //   return false;
    // }

     //测试
     yao1=1
     yao2=2
     yao3=3
     yao4=0
     yao5=2
     yao6=1
     //测试结束 

    $("#yaowei").append()
    $("#title").text(title);
    $("#theTime").text(datetime);
    $("#beimian").text(yao1+","+yao2+","+yao3+","+yao4+","+yao5+","+yao6); 

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
        "兑":['泽水困','泽水困' ,'泽地萃' ,'泽山咸' ,'水山蹇' ,'地山谦' ,'雷山小过' ,'雷泽归妹'],
      }
      var yaoming = shabagua[0]+xiabagua[0];
      var res;
      for(var key in bagong){ 
        bagong[key].forEach(function(item,index){ 
          if(item.indexOf(yaoming)!=-1){   
            res= [key,item]; 
          }
        }) 
      }  
      return res;
    };  

    var zhu = ["",0,0,0,0,0,0];
    var fu = ["",0,0,0,0,0,0];

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
      zhu[1] = 1;
      fu[1] = 0; 
    } 
    if(yao1==0){
      $("#yiyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#yiyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#yiyao_bianyao").html('&nbsp;✖&nbsp;'); 
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
      zhu[2] = 1;
      fu[2] = 0;
    } 
    if(yao2==0){
      $("#eryao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#eryao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#eryao_bianyao").html('&nbsp;✖&nbsp;'); 
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
      zhu[3] = 1;
      fu[3] = 0;
    } 
    if(yao3==0){
      $("#sanyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#sanyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#sanyao_bianyao").html('&nbsp;✖&nbsp;'); 
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
      zhu[4] = 1;
      fu[4] = 0;
    } 
    if(yao4==0){
      $("#siyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#siyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#siyao_bianyao").html('&nbsp;✖&nbsp;'); 
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
      zhu[5] = 1;
      fu[5] = 0;
    } 
    if(yao5==0){
      $("#wuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#wuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#wuyao_bianyao").html('&nbsp;✖&nbsp;'); 
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
      zhu[6] = 1;
      fu[6] = 0;
    } 
    if(yao6==0){
      $("#liuyao_yaotu").html('<img style="height:10px;width:40px;" src="./yinyao.png">');
      $("#liuyao_yaotu_bian").html('<img style="height:10px;width:40px;" src="./yangyao.png">');
      $("#liuyao_bianyao").html('&nbsp;✖&nbsp;'); 
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
   
    
    //装六亲  挂的地支 世应
    this.guaDizhiShiyin = function(yao){
      if(yao=='乾为天') return ['父母壬戌土','兄弟壬申金','官鬼壬午火','父母甲辰土','妻财甲寅木','子孙甲子水',6,3] 
      if(yao=='天风姤') return ['父母壬戌土','兄弟壬申金','官鬼壬午火','兄弟辛酉金','子孙辛亥水','父母辛丑土',1,4]  
      if(yao=='天山遁') return ['父母壬戌土','兄弟壬申金','官鬼壬午火','兄弟丙申金','官鬼丙午火','父母丙辰土',2,5]
      if(yao=='天地否') return ['父母壬戌土','兄弟壬申金','官鬼壬午火','妻财乙卯木','官鬼乙巳火','父母乙未土',3,6]
      if(yao=='风地观') return ['妻财辛卯木','官鬼辛巳火','父母辛未土','妻财乙卯木','官鬼乙巳火','父母乙未土',4,1] 
      if(yao=='山地剥') return ['妻财丙寅木','子孙丙子水','父母丙戌土','妻财乙卯木','官鬼乙巳火','父母乙未土',5,2] 
      if(yao=='火地晋') return ['官鬼己巳火','父母己未土','兄弟己酉金','妻财乙卯木','官鬼乙巳火','父母乙未土',4,1]
      if(yao=='火天大有') return ['官鬼己巳火','父母己未土','兄弟己酉金','父母甲辰土','妻财甲寅木','子孙甲子水',3,6]
    
      if(yao=='兑为泽') return ['父母丁未土','兄弟丁酉金','子孙丁亥水','父母丁丑土','妻财丁卯木','官鬼丁巳火',6,3] 
      if(yao=='泽水困') return ['父母丁未土','兄弟丁酉金','子孙丁亥水','官鬼戊午火','父母戊辰土','妻财戊寅木',1,4] 
      if(yao=='泽地萃') return ['父母丁未土','兄弟丁酉金','子孙丁亥水','妻财乙卯木','官鬼乙巳火','父母乙未土',2,5] 
      if(yao=='泽山咸') return ['父母丁未土','兄弟丁酉金','子孙丁亥水','兄弟丙申金','官鬼丙午火','父母丙辰土',3,6] 
      if(yao=='水山蹇') return ['子孙戊子水','父母戊戌土','兄弟戊申金','兄弟丙申金','官鬼丙午火','父母丙辰土',4,1] 
      if(yao=='地山谦') return ['兄弟癸酉金','子孙癸亥水','父母癸丑土','兄弟丙申金','官鬼丙午火','父母丙辰土',5,2] 
      if(yao=='雷山小过') return ['父母庚戌土','兄弟庚申金','官鬼庚午火','兄弟丙申金','官鬼丙午火','父母丙辰土',4,1] 
      if(yao=='雷泽归妹') return ['父母庚戌土','兄弟庚申金','官鬼庚午火','父母丁丑土','妻财丁卯木','官鬼丁巳火',3,6] 
      
      if(yao=='离为火') return ['兄弟己巳火','子孙己未土','妻财己酉金','官鬼己亥水','子孙己丑土','父母己卯木',6,3]
      if(yao=='火山旅') return ['兄弟己巳火','子孙己未土','妻财己酉金','妻财丙申金','兄弟丙午火','子孙丙辰土',1,4]
      if(yao=='火风鼎') return ['兄弟己巳火','子孙己未土','妻财己酉金','妻财辛酉金','官鬼辛亥水','子孙辛丑土',2,5]
      if(yao=='火水未济') return ['兄弟己巳火','子孙己未土','妻财己酉金','兄弟戊午火','子孙戊辰土','父母戊寅木',3,6]
      if(yao=='山水蒙') return ['父母丙寅木','官鬼丙子水','子孙丙戌土','兄弟戊午火','子孙戊辰土','父母戊寅木',4,1]
      if(yao=='风水涣') return ['父母辛卯木','兄弟辛巳火','子孙辛未土','兄弟戊午火','子孙戊辰土','父母戊寅木',5,2]
      if(yao=='天水讼') return ['子孙壬戌土','妻财壬申金','兄弟壬午火','兄弟戊午火','子孙戊辰土','父母戊寅木',4,1]
      if(yao=='天火同人') return ['子孙壬戌土','妻财壬申金','兄弟壬午火','官鬼己亥水','子孙己丑土','父母己卯木',3,6]
      
      if(yao=='震为雷') return ['妻财庚戌土','官鬼庚申金','子孙庚午火','妻财庚辰土','兄弟庚寅木','父母庚子水',6,3]
      if(yao=='雷地豫') return ['妻财庚戌土','官鬼庚申金','子孙庚午火','兄弟乙卯木','子孙乙巳火','妻财乙未土',1,4]
      if(yao=='雷水解') return ['妻财庚戌土','官鬼庚申金','子孙庚午火','子孙戊午火','妻财戊辰土','兄弟戊寅木',2,5]
      if(yao=='雷风恒') return ['妻财庚戌土','官鬼庚申金','子孙庚午火','官鬼辛酉金','父母辛亥水','妻财辛丑土',3,6]
      if(yao=='地风升') return ['官鬼癸酉金','父母癸亥水','妻财癸丑土','官鬼辛酉金','父母辛亥水','妻财辛丑土',4,1]
      if(yao=='水风井') return ['父母戊子水','妻财戊戌土','官鬼戊申金','官鬼辛酉金','父母辛亥水','妻财辛丑土',5,2]
      if(yao=='泽风大过') return ['妻财丁未土','官鬼丁酉金','父母丁亥水','官鬼辛酉金','父母辛亥水','妻财辛丑土',4,1]
      if(yao=='泽雷随') return ['妻财丁未土','官鬼丁酉金','父母丁亥水','妻财庚辰土','兄弟庚寅木','父母庚子水',3,6]

      
      if(yao=='巽为风') return ['兄弟辛卯木','子孙辛巳火','妻财辛未土','官鬼辛酉金','父母辛亥水','妻财辛丑土',6,3]
      if(yao=='风天小畜') return ['兄弟辛卯木','子孙辛巳火','妻财辛未土','妻财甲辰土','兄弟甲寅木','父母甲子水',1,4]
      if(yao=='风火家人') return ['兄弟辛卯木','子孙辛巳火','妻财辛未土','父母己亥水','妻财己丑土','兄弟己卯木',2,5]
      if(yao=='风雷益') return ['兄弟辛卯木','子孙辛巳火','妻财辛未土','妻财庚辰土','兄弟庚寅木','父母庚子水',3,6]
      if(yao=='天雷无妄') return ['妻财壬戌土','官鬼壬申金','子孙壬午火','妻财庚辰土','兄弟庚寅木','父母庚子水',4,1]
      if(yao=='火雷噬嗑') return ['子孙己巳火','妻财己未土','官鬼己酉金','妻财庚辰土','兄弟庚寅木','父母庚子水',5,2]
      if(yao=='山雷颐') return ['兄弟丙寅木','父母丙子水','妻财丙戌土','妻财庚辰土','兄弟庚寅木','父母庚子水',4,1]
      if(yao=='山风蛊') return ['兄弟丙寅木','父母丙子水','妻财丙戌土','官鬼辛酉金','父母辛亥水','妻财辛丑土',3,6]

      if(yao=='坎为水') return ['兄弟戊子水','官鬼戊戌土','父母戊申金','妻财戊午火','官鬼戊辰土','子孙戊寅木',6,3]
      if(yao=='水泽节') return ['兄弟戊子水','官鬼戊戌土','父母戊申金','官鬼丁丑土','子孙丁卯木','妻财丁巳火',1,4]
      if(yao=='水雷屯') return ['兄弟戊子水','官鬼戊戌土','父母戊申金','官鬼庚辰土','子孙庚寅木','兄弟庚子水',2,5]
      if(yao=='水火既济') return ['兄弟戊子水','官鬼戊戌土','父母戊申金','兄弟己亥水','官鬼己丑土','子孙己卯木',3,6]
      if(yao=='泽火革') return ['官鬼丁未土','父母丁酉金','兄弟丁亥水','兄弟己亥水','官鬼己丑土','子孙己卯木',4,1]
      if(yao=='雷火丰') return ['官鬼庚戌土','父母庚申金','妻财庚午火','兄弟己亥水','官鬼己丑土','子孙己卯木',5,2]
      if(yao=='地火明夷') return ['父母癸酉金','兄弟癸亥水','官鬼癸丑土','兄弟己亥水','官鬼己丑土','子孙己卯木',4,1]
      if(yao=='地水师') return ['父母癸酉金','兄弟癸亥水','官鬼癸丑土','妻财戊午火','官鬼戊辰土','子孙戊寅木',3,6]
      
      if(yao=='艮为山') return ['官鬼丙寅木','妻财丙子水','兄弟丙戌土','子孙丙申金','父母丙午火','兄弟丙辰土',6,3]
      if(yao=='山火贲') return ['官鬼丙寅木','妻财丙子水','兄弟丙戌土','妻财己亥水','兄弟己丑土','官鬼己卯木',1,4]
      if(yao=='山天大畜') return ['官鬼丙寅木','妻财丙子水','兄弟丙戌土','兄弟甲辰土','官鬼甲寅木','妻财甲子水',2,5]
      if(yao=='山泽损') return ['官鬼丙寅木','妻财丙子水','兄弟丙戌土','兄弟丁丑土','官鬼丁卯木','父母丁巳火',3,6]
      if(yao=='火泽睽') return ['父母己巳火','兄弟己未土','子孙己酉金','兄弟丁丑土','官鬼丁卯木','父母丁巳火',4,1]
      if(yao=='天泽履') return ['兄弟壬戌土','子孙壬申金','父母壬午火','兄弟丁丑土','官鬼丁卯木','父母丁巳火',5,2]
      if(yao=='风泽中孚') return ['官鬼辛卯木','父母辛巳火','兄弟辛未土','兄弟丁丑土','官鬼丁卯木','父母丁巳火',4,1]
      if(yao=='风山渐') return ['官鬼辛卯木','父母辛巳火','兄弟辛未土','子孙丙申金','父母丙午火','兄弟丙辰土',3,6]
      
      if(yao=='坤为地') return ['子孙癸酉金','妻财癸亥水','兄弟癸丑土','官鬼乙卯木','父母乙巳火','兄弟乙未土',6,3]
      if(yao=='地雷复') return ['子孙癸酉金','妻财癸亥水','兄弟癸丑土','兄弟庚辰土','官鬼庚寅木','妻财庚子水',1,4]
      if(yao=='地泽临') return ['子孙癸酉金','妻财癸亥水','兄弟癸丑土','兄弟丁丑土','官鬼丁卯木','父母丁巳火',2,5]
      if(yao=='地天泰') return ['子孙癸酉金','妻财癸亥水','兄弟癸丑土','兄弟甲辰土','官鬼甲寅木','妻财甲子水',3,6]
      if(yao=='雷天大壮') return ['兄弟庚戌土','子孙庚申金','父母庚午火','兄弟甲辰土','官鬼甲寅木','妻财甲子水',4,1]
      if(yao=='泽天夬') return ['兄弟丁未土','子孙丁酉金','妻财丁亥水','兄弟甲辰土','官鬼甲寅木','妻财甲子水',5,2]
      if(yao=='水天需') return ['妻财戊子水','兄弟戊戌土','子孙戊申金','兄弟甲辰土','官鬼甲寅木','妻财甲子水',4,1]
      if(yao=='水地比') return ['妻财戊子水','兄弟戊戌土','子孙戊申金','官鬼乙卯木','父母乙巳火','兄弟乙未土',3,6] 
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
    this.shengKe = function(zj,yj){
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
    this.liuQinShengKe = function(zj,yj){
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
    this.diZhiXiangChongHe = function(zj,yj){
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
      if(zj=="辰" && yj=="戌") return "冲";
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
    this.xunKong=function(){  //旬空
      var xtg=tg.indexOf(this.dGan());
          var xdz=dz.indexOf(this.dZhi());
          var xunk;
          if((xtg-xdz)==0) xunk=dz[10]+dz[11];
          if((xtg-xdz)==-10||(xtg-xdz)==2) xunk=dz[8]+dz[9];
          if((xtg-xdz)==-8||(xtg-xdz)==4) xunk=dz[6]+dz[7];
          if((xtg-xdz)==-6||(xtg-xdz)==6)	xunk=dz[4]+dz[5];
          if((xtg-xdz)==-4||(xtg-xdz)==8)	xunk=dz[2]+dz[3];
          if((xtg-xdz)==-2)	xunk=dz[0]+dz[1];
          return xunk;
    }

    this.ng=this.yGan();
    this.yg=this.mGan();
    this.rg=this.dGan();
    this.sg=this.hGan();
    this.nz=this.yZhi();
    this.yz=this.mZhi();
    this.rz=this.dZhi();
    this.sz=this.hZhi();
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
    $("#yiyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[liushen_index_num]+"</a>")  
    $("#eryao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    $("#sanyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    $("#siyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    $("#wuyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")  
    $("#liuyao_liushen").html("<a class='liushen' href='javascript:void(0);'>"+liushen[++liushen_index_num]+"</a>")   
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
    $("#xunkong").html("(旬空 "+this.xk+")");
    layer.closeAll();
    $('#yaowei').show();


    //长生十二宫于卦吉凶判断的应用 （即五行的生旺墓绝，长生与帝旺代表旺相，墓是中性，绝代表衰相
    this.shierGong = function(yao, gong){
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):"";  
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):""; 
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):""; 
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
    var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):""; 
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
    var zhuLiuYaoDizhi = zhuLiuYao[j].length>4?zhuLiuYao[j].substring(3,4):""; 
    if(this.yz=="寅" ){ 
        if(zhuLiuYaoDizhi=='丑'){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
        }  
    } else{
      if(dizhi.indexOf(zhuLiuYaoDizhi)!=-1){
        curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi;
      } 
    } 
  }  
  
  if(this.yz=="寅" || this.yz=="卯" || this.yz=="辰"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>4?zhuLiuYao[j].substring(3,4):""; 
      if(zhuLiuYaoDizhi=='戌'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="巳" || this.yz=="午" || this.yz=="未"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>4?zhuLiuYao[j].substring(3,4):""; 
      if(zhuLiuYaoDizhi=='丑'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="申" || this.yz=="酉" || this.yz=="戌"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>4?zhuLiuYao[j].substring(3,4):""; 
      if(zhuLiuYaoDizhi=='辰'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="亥" || this.yz=="子" || this.yz=="丑"){
    for(var j=0;j<zhuLiuYao.length;j++){
      var zhuLiuYaoDizhi = zhuLiuYao[j].length>4?zhuLiuYao[j].substring(3,4):""; 
      if(zhuLiuYaoDizhi=='未'){
        curShenSha["天喜"] = curShenSha["天喜"]+zhuLiuYaoDizhi; 
      }  
    }
  }
  
  
  
  
  
  if(this.rg=="甲"){
  for(var i=0;i<fuLiuYao.length;i++){ 
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
    var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):"";
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
      var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):""; 
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
      var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):""; 
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
      var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):""; 
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
      var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):""; 
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
    var zhuLiuYaoDizhi = fuLiuYao[j].length>4?fuLiuYao[j].substring(3,4):""; 
    if(this.yz=="寅" ){ 
        if(zhuLiuYaoDizhi=='丑'){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
        }  
    } else{
      if(dizhi.indexOf(zhuLiuYaoDizhi)!=-1){
        curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi;
      } 
    } 
  } 
       
  
  if(this.yz=="寅" || this.yz=="卯" || this.yz=="辰"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>4?fuLiuYao[j].substring(3,4):""; 
      if(fuLiuYaoDizhi=='戌'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="巳" || this.yz=="午" || this.yz=="未"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>4?fuLiuYao[j].substring(3,4):""; 
      if(fuLiuYaoDizhi=='丑'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="申" || this.yz=="酉" || this.yz=="戌"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>4?fuLiuYao[j].substring(3,4):""; 
      if(fuLiuYaoDizhi=='辰'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
  if(this.yz=="亥" || this.yz=="子" || this.yz=="丑"){
    for(var j=0;j<fuLiuYao.length;j++){
      var fuLiuYaoDizhi = fuLiuYao[j].length>4?fuLiuYao[j].substring(3,4):""; 
      if(fuLiuYaoDizhi=='未'){
        curShenSha["天喜"] = curShenSha["天喜"]+fuLiuYaoDizhi; 
      }  
    }
  }
   
  if(this.rg=="甲"){
    for(var i in fuyaowei){  
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):"";
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):""; 
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):""; 
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):""; 
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
      var fuyaoweiDizhi = fuyaowei[i][1].length>4?fuyaowei[i][1].substring(3,4):""; 
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
      var zhuLiuYaoDizhi = fuyaowei[p][1].length>4?fuyaowei[p][1].substring(3,4):""; 
      if(this.yz=="寅" ){ 
          if(zhuLiuYaoDizhi=='丑'){
            curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
          }  
      } else{
        if(dizhi.indexOf(zhuLiuYaoDizhi)!=-1){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi;
        } 
      } 
    } 
    
     
  
    if(this.yz=="寅" || this.yz=="卯" || this.yz=="辰"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>4?fuyaowei[j].substring(3,4):""; 
        if(fuyaoweiDizhi=='戌'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    if(this.yz=="巳" || this.yz=="午" || this.yz=="未"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>4?fuyaowei[j].substring(3,4):""; 
        if(fuyaoweiDizhi=='丑'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    if(this.yz=="申" || this.yz=="酉" || this.yz=="戌"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>4?fuyaowei[j].substring(3,4):""; 
        if(fuyaoweiDizhi=='辰'){
          curShenSha["天喜"] = curShenSha["天喜"]+fuyaoweiDizhi; 
        }  
      }
    }
    if(this.yz=="亥" || this.yz=="子" || this.yz=="丑"){
      for(var j=0;j<fuyaowei.length;j++){
        var fuyaoweiDizhi = fuyaowei[j].length>4?fuyaowei[j].substring(3,4):""; 
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
  
    
    $("#yiyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();}); 
    $("#eryao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#sanyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#siyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#wuyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#liuyao_yaowei").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#yiyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();}); 
    $("#eryao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#sanyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#siyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#wuyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#yiyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#liuyao_yaowei_bian").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#eryao_fushen").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();}); 
    $("#sanyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#siyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#wuyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#liuyao_fushen").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});


    this.diZhiwuXing=function(gan){  //地支五行
      var wux="";
        if(gan=="甲"||gan=="乙" || gan=="寅" || gan=="卯") wux="木";
        if(gan=="丙"||gan=="丁"|| gan=="丙" || gan=="丁") wux="火";
        if(gan=="戊"||gan=="己"|| gan=="辰" || gan=="巳" || gan=="午" || gan=="未") wux="土";
        if(gan=="庚"||gan=="辛"|| gan=="申" || gan=="酉") wux="金";
        if(gan=="壬"||gan=="癸"|| gan=="子" || gan=="亥") wux="水";
        return wux;
    }
    var benKuaWuxin = guaWuxin[zhuyao[0]];
    var yuelin = this.yz;
    var rilin = this.rz;
    var yueLiuqing = this.wuXinShenke(benKuaWuxin,this.diZhiwuXing(yuelin)); 
    var riLiuqing = this.wuXinShenke(benKuaWuxin,this.diZhiwuXing(rilin));
    console.log(yueLiuqing,riLiuqing)
    $("#yuelin").html(yueLiuqing);
    $("#rilin").html(riLiuqing);
    //日令月令的六亲

    $("#yuelin").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    $("#rilin").click(function(){$("#yongshen").html($(this).text());$("#fenxi").show();});
    
  
    
    
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////
    //////////////数据分析//////////////////////////

    console.log(zhuLiuYao);
    console.log(fuLiuYao)
    console.log(fuyaowei) //伏神位置
    console.log(curShenSha) 

    $("#fenxi").click(function(){
      layer.msg($("#yongshen").text());
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