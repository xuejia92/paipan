layui.use(['form', 'laydate','layer'], function(){
  var form = layui.form
  ,layer = layui.layer 
  ,laydate = layui.laydate;
  
  //日期
  laydate.render({
    elem: '#date'
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
        ,btn: ['排盘','关闭']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: $("#window")
        ,success: function(layero){
          var btn = layero.find('.layui-layer-btn');
          btn.find('.layui-layer-btn0').attr({
            href: '../index.htm' 
            ,target: '_blank'
          });
        }
      });
      layer.full(index);
    } 
  };
  
  $('#layerDemo .layui-btn').on('click', function(){
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(this, othis) : '';
  });
});