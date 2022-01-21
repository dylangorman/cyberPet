class pet {
constructor(name){
this.name = name
this.life = 100 // 100 full life 0 dead
this.thirst = 10// 100 full 0 empty
this.hunger = 100 // 100 full 0 empty
this.energy = 100 //100 full 0 empty
this.hygiene = 53 //100 ok 0 dirty
this.toilet = 53 //100 ok 0 needs toilet

}

drink(){
  this.life += 5
  this.thirst -= 5
  this.hunger -= 5
  this.energy += 5
  this.toilet -= 5

}
feed(){
  this.life += 5
  this.hunger += 5
  this.energy += 5
  this.thirst -= 5
  this.toilet -= 5
}
sleep(){
  this.life += 5 
  this.energy += 5
  this.hunger += 5
  this.thirst += 3
}

clean () {
  this.hygiene += 5
  this.life += 2
}
relieve (){
  this.toilet += 5
  this.hunger -= 2
  this.hygiene -= 2
}

time(){
  this.life -= 3
  this.thirst -= 3
  this.hunger -= 3
  this.energy -= 3
  this.hygiene -= 3
  this.toilet -= 3
}
}


// TIGER unique ACTIONS //
export class siberianTiger extends pet{
constructor(name){
    super(name)
    this.tigerHunt = 0 // 10 max HAPPY
    this.tigerPlay = 0 // 10 max HAPPY
    this.tigerGroom = 0 // 10 max HAPPY  
}
hunt(){
  this.tigerHunt += 2
  this.tigerPlay += 1
  this.tigerGroom -= 1
  this.life -= 1
}
play(){
  this.tigerPlay += 2
  this.life += 2
}
groom(){
  this.tigerGroom += 2
  this.hygiene += 3
  this.life += 1
}
}






// ELEPHANT UNIQUE ACTIONS // 
export class africanElephant extends pet {
constructor(name){
    super(name)
    this.elephantSocialise = 0 // 10 max HAPPY
    this.elephantPlay = 0 // 10 max HAPPY
    this.elephantChill = 0 // 10 max HAPPY
}
socialise(){
  this.elephantSocialise += 2
  this.elephantPlay += 1
}
play(){
  this.elephantPlay += 2
  this.life += 1

}
chill(){
  this.elephantChill += 2
  this.hunger -= 2
}
}


//.shark UNIQUE ACTIONS //
export class whaleShark extends pet {
constructor(name){
    super(name)
    this.sharkSwim = 0 // 10 max HAPPY
    this.sharkHunt = 0 // 10 max HAPPY
    this.sharkTrance = 0 // 10 max HAPPY
}
scratch(){
  this.sharkSwim += 2
  this.hunger -= 2
}
paddle(){
  this.sharkHunt += 2
  this.hunger -= 2
  this.life += 2
}
trance(){
  this.sharkTrance += 2
}
}





