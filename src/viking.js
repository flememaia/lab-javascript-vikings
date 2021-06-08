// Soldier
class Soldier {

  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){ 
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }


}

// Saxon
class Saxon extends Soldier {
  

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }
}

//War
class War {

  constructor(){
    this.vikingArmy = []; //ok 39/63
    this.saxonArmy = []; //ok 40/63
  }

  addViking(vikingSoldier){
    this.vikingArmy.push(vikingSoldier) //ok 44/63
  }

  addSaxon(saxonSoldier){
    this.saxonArmy.push(saxonSoldier) //ok 48/63
  }
  
  vikingAttack(){ // só o título ok 50/63 => DÚVIDA: COMO ACESSAR O MÉTODO DAMAGE DA CLASS SAXON?
    
    // const radomIndexSax = Math.floor(Math.random()*this.saxonArmy.length);// retorna um número aleatório, que será utilizado como índice da array de saxonArmy para escolher um saxonSoldier aleatório
    // const radomIndexVik = Math.floor(Math.random()*this.vikingArmy.length);// retorna um número aleatório, que será utilizado como índice da array de saxonArmy para escolher um saxonSoldier aleatório
    // let damage = this.vikingArmy[radomIndexVik].strength

    //receiveDamage(damage){
    //   this.saxonArmy[radomIndexSax].health -=  damage;
    //   if(this.saxonArmy[radomIndexSax].health > 0){
    //     return `A Saxon has received ${damage} points of damage`
    //   }
    //   else {
    //     this.saxonArmy[radomIndexSax].splice([radomIndexSax],1)
    //     return `A Saxon has died in combat`
    //   }
    // }
  }

  saxonAttack(){ // só o título ok 52/63

  }

  // showStatus(){
  //   if (this.vikingArmy.length === 0){
  //     return `Saxons have fought for their lives and survived another day...`
  //   }
  //   if (this.saxonArmy.length === 0){
  //     return `Vikings have won the war of the century!`
  //   }
  //   if (this.saxonArmy.length >== 1 && this.vikingArmy.length >== 1){//poderia ser apenas else?
  //     `Vikings and Saxons are still in the thick of battle.`
  //   }
  // }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
