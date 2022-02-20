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


var dizhi = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
for(var i =0;i<=dizhi.length;i++){
    if(this.yz=="甲"){
      for(var i=0;i<zhuLiuYao.length;i++){
        var zhuLiuYaoDizhi = zhuLiuYao[i].length>4?zhuLiuYao[i].substring(3,4):""; 
        if(zhuLiuYaoDizhi=='癸'){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
        }  
      }
    }else{
      for(var j=0;j<zhuLiuYao.length;j++){
        var zhuLiuYaoDizhi = zhuLiuYao[j].length>4?zhuLiuYao[j].substring(3,4):""; 
        if(zhuLiuYaoDizhi==dizhi[j-1]){
          curShenSha["天医"] = curShenSha["天医"]+zhuLiuYaoDizhi; 
        }  
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


var dizhi = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
for(var i =0;i<=dizhi.length;i++){
    if(this.yz=="甲"){
      for(var i=0;i<fuLiuYao.length;i++){
        var fuLiuYaoDizhi = fuLiuYao[i].length>4?fuLiuYao[i].substring(3,4):""; 
        if(fuLiuYaoDizhi=='癸'){
          curShenSha["天医"] = curShenSha["天医"]+fuLiuYaoDizhi; 
        }  
      }
    }else{
      for(var j=0;j<fuLiuYao.length;j++){
        var fuLiuYaoDizhi = fuLiuYao[j].length>4?fuLiuYao[j].substring(3,4):""; 
        if(fuLiuYaoDizhi==dizhi[j-1]){
          curShenSha["天医"] = curShenSha["天医"]+fuLiuYaoDizhi; 
        }  
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
  for(var i=0;i<fuyaowei.length;i++){ 
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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
  for(var i=0;i<fuyaowei.length;i++){
    var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):"";
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

['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'].forEach(function(item){ 
  if(this.rz=="申" || this.rz=="子" || this.rz=="辰"){
    for(var i=0;i<fuyaowei.length;i++){
      var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):""; 
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
    for(var i=0;i<fuyaowei.length;i++){
      var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):""; 
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
    for(var i=0;i<fuyaowei.length;i++){
      var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):""; 
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
    for(var i=0;i<fuyaowei.length;i++){
      var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):""; 
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
});


var dizhi = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
for(var i =0;i<=dizhi.length;i++){
      if(this.yz=="甲"){
        for(var i=0;i<fuyaowei.length;i++){
          var fuyaoweiDizhi = fuyaowei[i].length>4?fuyaowei[i].substring(3,4):""; 
          if(fuyaoweiDizhi=='癸'){
            curShenSha["天医"] = curShenSha["天医"]+fuyaoweiDizhi; 
          }  
        }
      }else{
        for(var j=0;j<fuyaowei.length;j++){
          var fuyaoweiDizhi = fuyaowei[j].length>4?fuyaowei[j].substring(3,4):""; 
          if(fuyaoweiDizhi==dizhi[j-1]){
            curShenSha["天医"] = curShenSha["天医"]+fuyaoweiDizhi; 
          }  
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





  