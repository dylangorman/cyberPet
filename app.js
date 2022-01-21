import inquirer from "inquirer"

import {siberianTiger, africanElephant, whaleShark} from "./cyberpet.js"
import { initQuestions, tigerQuestions, elephantQuestions, sharkQuestions } from "./questions.js"
let myPet
let ui = new inquirer.ui.BottomBar()

// init game 
const init =  async () =>{
    let response = await inquirer.prompt(initQuestions)
    // TIGER LOOP 
    if (response.type === "Siberian Tiger"){
      myPet = new siberianTiger(response.name)
      tigerGameLoop()
      ui.log.write(
        `${myPet.name} |Life: ${myPet.life}| Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Toilet: ${myPet.hygiene} | Hunt:${myPet.tigerHunt} | Play: ${myPet.tigerPlay} | Groom: ${myPet.tigerGroom}`
    )
    } 
    // 
    // ELEPHANT LOOP 
    else if (response.type === "African Elephant"){
    myPet = new africanElephant(response.name)
    elephantGameLoop()
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life} | Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Toilet: ${myPet.hygiene} | Socialise: ${myPet.elephantSocialise} | Play: ${myPet.elephantPlay} | Chill: ${myPet.elephantChill}`
        )
    } 
    // 
    // whaleShark LOOP 
    else {
    myPet = new whaleShark(response.name)
    sharkGameLoop()
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life}| Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Swim: ${myPet.sharkSwim} | Hunt: ${myPet.sharkHunt} | Trance: ${myPet.shark}`
    )
     } 
    }
    
// run TIGER loop 
const tigerGameLoop = async () => {
    try {
        if(myPet.life <=0 || myPet.hunger <=0){
            console.log("GAME OVER")
            return
        }
        
myPet.time()
    let response = await inquirer.prompt(tigerQuestions)
    // console.log(response)
// TIGER ACTIONS//
// if(myPet.thirst <=0){
//     myPet.thirst = 0;
//     tigerGameLoop()
//   } 
    if (response.action === "drink"){
        myPet.drink()
    }else if (response.action === "feed"){
        myPet.feed()
    }else if (response.action === "sleep"){
        myPet.sleep()
    }else if (response.action === "clean"){
        myPet.clean()
    }else if(response.action === "relieve"){
        myPet.relieve()
    }else if(response.action === "hunt"){
        myPet.hunt()
    }else if(response.action === "play"){
        myPet.play()
    }else if(response.action === "groom"){
        myPet.groom()
    }
// INFO TO DISPLAY IN LOG 
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life}| Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Toilet: ${myPet.hygiene} | Hunt:${myPet.tigerHunt} | Play: ${myPet.tigerPlay} | Groom: ${myPet.tigerGroom}`
    )
// TO CATCH ERRORS 
    
    tigerGameLoop()
    }catch (error){
        console.log(error)
    }
}
// RUN ELEPHANT LOOP 
const elephantGameLoop = async () => {
    try {
        if(myPet.life <=0){
            console.log("GAME OVER")
            return
        }
        
myPet.time()
    let response = await inquirer.prompt(elephantQuestions)
    // console.log(response)
// ELEPHANT ACTIONS 
    if (response.action === "drink"){
        myPet.drink()
    }else if (response.action === "feed"){
        myPet.feed()
    }else if (response.action === "sleep"){
        myPet.sleep()
    }else if (response.action === "clean"){
        myPet.clean()
    }else if(response.action === "relieve"){
        myPet.relieve()
    }else if(response.action === "socialise"){
        myPet.socialise()
    }else if(response.action === "play"){
        myPet.play()
    }else if(response.action === "chill"){
        myPet.chill()
    }
// INFO TO DISPLAY IN LOG 
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life} | Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Toilet: ${myPet.hygiene} | Socialise: ${myPet.elephantSocialise} | Play: ${myPet.elephantPlay} | Chill: ${myPet.elephantChill}`
        )
// TO CATCH ERRORS 
    elephantGameLoop()
    } catch (error){
        console.log(error)
    }
}
    // RUN whaleShark LOOP 
const sharkGameLoop = async () => {
    try {
        if(myPet.life <=0){
            console.log("GAME OVER")
            return
        }
myPet.time()
    let response = await inquirer.prompt (sharkQuestions)
    // console.log(response)
// whaleShark ACTIONS 
    if (response.action === "drink"){
        myPet.drink()
    }else if (response.action === "feed"){
        myPet.feed()
    }else if (response.action === "sleep"){
        myPet.sleep()
    }else if (response.action === "clean"){
        myPet.clean()
    }else if(response.action === "relieve"){
        myPet.relieve()
    }else if(response.action === "swim"){
        myPet.scratch()
    }else if(response.action === "hunt"){
        myPet.paddle()
    }else if(response.action === "trance"){
        myPet.trance()
    }
    // INFO TO DISPLAY IN LOG 
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Swim: ${myPet.sharkSwim} | Hunt: ${myPet.sharkHunt} | Trance: ${myPet.sharkTrance}`
    )
    // TO CATCH ERRORS 
    sharkGameLoop()
    } catch (error){
        console.log(error)
    }
}
init()