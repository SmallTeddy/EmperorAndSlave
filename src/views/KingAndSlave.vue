<template>
  <div class="game">
    <div class="game_info">
      <el-button type="primary" @click="start">Start Game</el-button>
      <el-button type="defalut">Round{{round}}</el-button>
      <el-button type="success">Your Score：{{your_score}}</el-button>
      <el-button type="danger">Computer Score：{{computer_score}}</el-button>
      <el-popover placement="bottom" width="400px" trigger="manual" v-model="showGameRules">
        <span>
          <h3>皇帝牌游戏（KingAndSlave）</h3>

          <h4>一、卡牌</h4>
          <p>皇帝牌：kingCard（1张）</p>
          <p>奴隶牌：slaveCard（1张）</p>
          <p>农民牌：peasantCard（14张）</p>

          <h4>二、角色</h4>
          <p>一个玩家扮演皇帝：手里是1张皇帝牌加上7张平民牌</p>
          <p>另一个玩家扮演奴隶：手里是1张奴隶牌加上7张平民牌</p>
          <p>初始化A玩家（电脑computer）、B玩家（user）每人8张牌</p>
          <p>1局游戏结束交换手牌</p>

          <h4>三、规则</h4>
          <p>皇帝牌>农民牌</p>
          <p>农民牌>奴隶牌</p>
          <p>奴隶牌>皇帝牌</p>
          <p>如果皇帝牌赢过平民牌，则皇帝牌获胜</p>
          <p>如果皇帝牌输给奴隶牌，则奴隶牌判负</p>
          <p>每结束一轮游戏，玩家角色互换</p>

          <h4>四、分数</h4>
          <p>玩家可以选择该局的分数，有50、100、150和200分</p>

          <h4>五、胜利方式</h4>
          <p>如果皇帝赢则加分，奴隶赢则加5倍分数</p>
          <p>11局游戏全部结束后，分数高则赢得游戏</p>
        </span>
        <el-button type="warning" slot="reference" @click="showGameRules = !showGameRules">Game Rules</el-button>
      </el-popover>
      <el-button type="info">{{game_time}}</el-button>
    </div>
    <div game_main></div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class KingAndSlave extends Vue {
  private round: number = 1;
  private your_score: number = 0;
  private computer_score: number = 0;
  private showGameRules: boolean = false;
  private game_time: any = "00:00:00";
  private hour: number = 0;
  private minute: number = 0;
  private second: number = 0;
  private ms: number = 0;
  private time: any = "";

  timeStart(){
    this.time = setInterval(this.timer,50)
  }

  timer(): void {
    this.ms += 50; //毫秒
    if (this.ms >= 1000) this.ms = 0, this.second++; //秒
    if (this.second >= 60) this.second = 0, this.minute++; //分钟
    if (this.minute >= 60) this.minute = 0, this.hour++; //小时
    if(this.hour >= 24) this.hour = 0, this.minute = 0, this.second = 0, this.ms = 0;
    this.game_time = `${this.toDub(this.hour)}:${this.toDub(this.minute)}:${this.toDub(this.second)}`;
  }

  toDub(n: any) {
    return n < 10 ? "0" + n : "" + n
  }

  private start(): void {
    this.timeStart();
  }
}
</script>

<style scoped lang='less'>
.game {
  width: 100%;
  background: url("../assets/bg.jpg");
  background-size: cover;

  .game_info {
    text-align: center;
    height: 80px;
    line-height: 80px;

    .el-button {
      font-size: 18px;
      margin: 0 30px;
    }
  }
}
</style>