const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = new Vue({
  el: "#game",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackCoolDown: 0,
      winner: null,
      logMessages: [],
    };
  },
  methods: {
    attackMonster() {
      const playerPower = getRandomValue(5, 12);
      this.monsterHealth -= playerPower;
      this.attackPlayer();
      this.addLogMessage("player", "attack", playerPower);
      this.countCoolDown();
    },
    attackPlayer() {
      const monsterPower = getRandomValue(8, 15);
      this.addLogMessage("monster", "attack", monsterPower);
      this.playerHealth -= monsterPower;
    },
    specialAttackMonster() {
      const playerPower = getRandomValue(12, 30);
      this.monsterHealth -= playerPower;
      this.addLogMessage("player", "attack", playerPower);
      this.specialAttackCoolDown = 3;
    },
    countCoolDown() {
      if (this.specialAttackCoolDown) {
        this.specialAttackCoolDown -= 1;
      }
    },
    heal() {
      const healValue = getRandomValue(5, 12);
      this.playerHealth += healValue;
      this.addLogMessage("player", "heal", healValue);
      this.countCoolDown();
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
    },
    surrender() {
      this.winner = "monster";
      this.addLogMessage("player", "surrender");
    },
    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackCoolDown = 0;
      this.winner = null;
      this.logMessages = [];
    },
    addLogMessage(who, what, value = null) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0" };
      }
      return { width: `${this.playerHealth}%` };
    },
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0" };
      }
      return { width: `${this.monsterHealth}%` };
    },
    specialAttackState() {
      return this.specialAttackCoolDown !== 0;
    },
    gameState() {
      return this.winner;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
});
