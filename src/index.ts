import { Context, Schema } from 'koishi'

import { h } from "koishi"

export const name = 'bf1-gametools'

export const inject = {required: ["database"]}

declare module 'koishi' {
  interface Tables {
    bf_gametools: Bf_gametools
  }
}

export interface Bf_gametools {
  user_id: string;
  EA_id: string;
}

export interface Config {
}

export const Config: Schema<Config> = Schema.object({
})

export const usage = 
'利用GameToools进行战地玩家信息查询，查询需要EA用户名'

export function apply(ctx: Context,config:Config) {
  const logger = ctx.logger("bf1-gametools");
  ctx.database.extend('bf_gametools',{user_id: 'string'   ,  EA_id: 'string',
   },{
    primary: "user_id",
  });


  //战地一
  ctx.command('bf1 <参数名称> 查询战地一玩家信息').action(async ({session},...args)=>{
  {
    let ID = null,QQid = null;
    QQid = await session.userId;
    ID = (await ctx.database.get('bf_gametools',{ user_id:QQid}))[0];
    if ((args[0]) == null) {
      if (ID == null) {
        return '|ω•̀ )  需要输入或绑定EA用户名哦';
      }
      let {EA_id} = ID;
      ID = EA_id;
    } else if ((args[0]).length < 4 || (args[0]).length > 16) {
      return '|ω•̀ )  这一看就不是用户名的说';
    }
      else {
      ID = (args[0]);
    }
      try{
      {
      let 返回对象 = null,res = null, best = null, HTML = null, 信息列表 = null;
      返回对象 = (await ctx.http.get((['https://api.gametools.network/bf1/stats/?format_values=true&name=',ID,'&platform=pc&skip_battlelog=false&lang=en-us'].join('')),{responseType:"json"}));
      信息列表 = ['&#13;EA用户名      ' + 返回对象.userName,
          '等级             ' + 返回对象.rank,
          'K/D              ' + 返回对象.killDeath,
          '技巧值          ' + 返回对象.skill,
          '击杀数          ' + 返回对象.kills,
          'KPM             ' + 返回对象.killsPerMinute,
          '胜率             ' + 返回对象.winPercent,
          '命中率          ' + 返回对象.accuracy,
          '头部命中       ' + 返回对象.headshots,
          '最远爆头       ' + 返回对象.longestHeadShot,
          '最高连杀       ' + 返回对象.highestKillStreak,
          '最佳兵种       ' + 返回对象.bestClass];
    
      best = 信息列表.slice(-1)[0];
      if (best == '最佳兵种       Support') {
        var tmpList = 信息列表;
        tmpList[tmpList.length - 1] = '最佳兵种       支援兵';
      } else if (best == '最佳兵种       Scout') {
        var tmpList2 = 信息列表;
        tmpList2[tmpList2.length - 1] = '最佳兵种       斟茶兵';
      } else if (best == '最佳兵种       Assault') {
        var tmpList3 = 信息列表;
        tmpList3[tmpList3.length - 1] = '最佳兵种       土鸡兵';
      } else if (best == '最佳兵种       Medic') {
        var tmpList4 = 信息列表;
        tmpList4[tmpList4.length - 1] = '最佳兵种       萨尼铁塔';
      } else if (best == '最佳兵种       Pilot') {
        var tmpList5 = 信息列表;
        tmpList5[tmpList5.length - 1] = '最佳兵种       飞行员';
      } else if (best == '最佳兵种       Cavalry') {
        var tmpList6 = 信息列表;
        tmpList6[tmpList6.length - 1] = '最佳兵种       骑兵';
      } else if (best == '最佳兵种       Tanker') {
        var tmpList7 = 信息列表;
        tmpList7[tmpList7.length - 1] = '最佳兵种       坦克驾驶员';
      } else {
        var tmpList8 = 信息列表;
        tmpList8[tmpList8.length - 1] = '最佳兵种       精英兵种';
      }
      res = 信息列表.join('&#10;');
      console.log("战地一玩家查询：",ID);
      logger.success("战地一玩家查询：",ID);
      return (String(h('image',{ url: 返回对象.avatar })) + "            Battlefield 1&#10;" + String(res));
    }
       }
  catch (error) {
       if (error.response && error.response.status === 404) {
        console.log("战地一玩家查询：玩家不存在");
        logger.error("战地一玩家查询：玩家不存在");
        return "找不到这个人...";
    }}return null;
  }
});


//战地五
ctx.command('bf5 <参数名称> 查询战地五玩家信息').action(async ({session},...args)=>{
  {
    let ID = null,QQid = null;
    QQid = await session.userId;
    ID = (await ctx.database.get('bf_gametools',{ user_id:QQid}))[0];
    if ((args[0]) == null) {
      if (ID == null) {
        return '|ω•̀ )  需要输入或绑定EA用户名哦';
      }
      let {EA_id} = ID;
      ID = EA_id;
    } else if ((args[0]).length < 4 || (args[0]).length > 16) {
      return '|ω•̀ )  这一看就不是用户名的说';
    }
      else {
      ID = (args[0]);
    }
      try{
      {
      let 返回对象 = null,res = null, best = null, HTML = null, 信息列表 = null;
      返回对象 = (await ctx.http.get((['https://api.gametools.network/bfv/stats/?format_values=true&name=',ID,'&platform=pc&skip_battlelog=false&lang=en-us'].join('')),{responseType:"json"}));
      信息列表 = ['&#13;EA用户名      ' + 返回对象.userName,
          '等级             ' + 返回对象.rank,
          'K/D              ' + 返回对象.killDeath,
          '技巧值          ' + 返回对象.skill,
          '击杀数          ' + 返回对象.kills,
          'KPM             ' + 返回对象.killsPerMinute,
          '胜率             ' + 返回对象.winPercent,
          '命中率          ' + 返回对象.accuracy,
          '头部命中       ' + 返回对象.headshots,
          '最远爆头       ' + 返回对象.longestHeadShot,
          '最高连杀       ' + 返回对象.highestKillStreak,
          '最佳兵种       ' + 返回对象.bestClass];
    
      best = 信息列表.slice(-1)[0];
      if (best == '最佳兵种       Support') {
        var tmpList = 信息列表;
        tmpList[tmpList.length - 1] = '最佳兵种       支援兵';
      } else if (best == '最佳兵种       Scout') {
        var tmpList2 = 信息列表;
        tmpList2[tmpList2.length - 1] = '最佳兵种       侦察兵';
      } else if (best == '最佳兵种       Assault') {
        var tmpList3 = 信息列表;
        tmpList3[tmpList3.length - 1] = '最佳兵种       突击兵';
      } else if (best == '最佳兵种       Medic') {
        var tmpList4 = 信息列表;
        tmpList4[tmpList4.length - 1] = '最佳兵种       医疗兵';
      } else if (best == '最佳兵种       Pilot') {
        var tmpList5 = 信息列表;
        tmpList5[tmpList5.length - 1] = '最佳兵种       飞行员';
      } else if (best == '最佳兵种       Tanker') {
        var tmpList6 = 信息列表;
        tmpList6[tmpList6.length - 1] = '最佳兵种       坦克驾驶员';
      } else {
        var tmpList7 = 信息列表;
        tmpList7[tmpList7.length - 1] = '最佳兵种       未知';
      }
      res = 信息列表.join('&#10;');
      console.log("战地五玩家查询：",ID);
      logger.success("战地五玩家查询：",ID);
      return (String(h('image',{ url: 返回对象.avatar })) + "            Battlefield 5&#10;" + String(res));
    }
       }
  catch (error) {
       if (error.response && error.response.status === 404) {
        console.log("战地五玩家查询：玩家不存在");
        logger.error("战地五玩家查询：玩家不存在");
        return "找不到这个人...";
    }}return null;
  }
});



//EA用户名绑定
ctx.command('bfbind <参数名称> 绑定EA玩家用户名').action(async ({session},...args)=>{
  
  let ID = null,QQid = null;

    QQid = String(await session.userId);
  
    ID = (await ctx.database.get('bf_gametools',{user_id : QQid}))[0];

    if ((args[0]) == null) {
    return '|ω•̀ )  还没写EA用户名哦';
  } else if ((args[0]).length < 4 || (args[0]).length > 16) {
    return '|ω•̀ )  这一看就不是用户名的说';
  } else {
    {

      let 换绑 = 1;
      
      if ( ID == null) {
        换绑 = 0;
      }
      await ctx.database.upsert('bf_gametools',[{ user_id : QQid, EA_id : args[0]}], ['user_id']);
      console.log("战地用户名绑定")
      
      if (换绑 == 0) {
      
        return '(ˊᗜˋ*)EA账号绑定成功，可直接查询';
      } else {
        return '(ˊᗜˋ*)EA账号已换绑';
      }
    }
  }
  return null;
  });
}
