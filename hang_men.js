window.onload = function(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let fruit = document.getElementById('fruit')
    let space = document.getElementById('space')
    let job = document.getElementById('job')
    let country = document.getElementById('country')
    let word_length = document.getElementById('word')
    let game_word
    const words = {
        "fruit": ["apple", "banana", "orange", "pear", "kiwi", "pineapple", "mango", "watermelon", "strawberry", "grape", "cherry", "blueberry", "raspberry", "lemon", "lime", "peach", "plum", "pomegranate", "avocado", "coconut"],
        "space": ["planet", "star", "galaxy", "comet", "asteroid", "nebula", "black hole", "satellite", "spaceship", "moon", "asteroidbelt", "gravity", "orbit", "universe", "cosmos", "alien", "meteor", "supernova", "telescope", "astronaut"],
        "job": ["teacher", "doctor", "lawyer", "nurse", "engineer", "programmer", "artist", "chef", "musician", "scientist", "writer", "athlete", "actor", "politician", "entrepreneur", "journalist", "banker", "architect", "pilot", "designer"],
        "country": ["Canada", "UnitedStates", "Mexico", "Brazil", "Argentina", "Chile", "Peru", "Colombia", "Ecuador", "Spain", "France", "Germany", "United Kingdom", "Italy", "Russia", "China", "Japan", "Australia", "South Africa", "Egypt"]
    }

    const generate_word =(category)=>{
        const random = Math.floor(Math.random() * 20)
        game_word = words [category][random]
        return game_word
    }

    fruit.addEventListener('click', function(){
        game_word = generate_word("fruit")
        console.log(game_word)
        let array=[]
        for(let i = 0;i<game_word.length;i++){
            array.push("_")
        }
        word_length.innerHTML=array.join(" ")
    })
    space.addEventListener('click', function(){
        game_word = generate_word("space")
        let array=[]
        for(let i = 0;i<game_word.length;i++){
            array.push("_")
        }
        word_length.innerHTML=array.join(" ")
    })
    job.addEventListener('click', function(){
        game_word = generate_word("job")
        let array=[]
        for(let i = 0;i<game_word.length;i++){
            array.push("_")
        }
        word_length.innerHTML=array.join(" ")
    })
    country.addEventListener('click', function(){
        game_word = generate_word("country")
        let array=[]
        for(let i = 0;i<game_word.length;i++){
            array.push("_")
        }
        word_length.innerHTML=array.join(" ")
    })


    const draw_first = () =>{
        ctx.beginPath()
        ctx.moveTo(50, 200)
        ctx.lineTo(50, 30)
        ctx.stroke()
    }
    
    const draw_second = () =>{
        ctx.beginPath()
        ctx.moveTo(50, 200)
        ctx.lineTo(220, 30)
        ctx.stroke()
    }

    const draw_third = () =>{
        ctx.beginPath()
        ctx.moveTo(50, 200)
        ctx.lineTo(220, 50)
        ctx.stroke()
    }
    
    const draw_forth = () => {
        ctx.beginPath()
        ctx.arc(220, 70, 20, 0, 2 * Math.PI)
        ctx.stroke()
    }
    
    const draw_fifth = () =>{
        ctx.beginPath()
        ctx.moveTo(220, 90)
        ctx.lineTo(220, 130)
        ctx.stroke()
    }
    
    const draw_sixth = ()=>{
        ctx.beginPath()
        ctx.moveTo(220, 110)
        ctx.lineTo(190, 90)
        ctx.stroke()
    }
    
    const draw_seventh = ()=>{
        ctx.beginPath()
        ctx.moveTo(220, 110)
        ctx.lineTo(250, 90)
        ctx.stroke()
    }
    
    const draw_eighth = ()=>{
        ctx.beginPath()
        ctx.moveTo(220, 130)
        ctx.lineTo(190, 150)
        ctx.stroke()
    }
    
    const draw_ninth = ()=>{
        ctx.beginPath()
        ctx.moveTo(220, 130)
        ctx.lineTo(250, 150)
        ctx.stroke()
    }
    
    const draw_tenth = ()=>{
        ctx.beginPath()
        ctx.moveTo(25, 200)
        ctx.lineTo(155, 200)
        ctx.lineTo(155, 180)
        ctx.stroke()
    }
    
    
    input_button = document.getElementById('input_button')
    let wrong_char = document.getElementById('wrong_char')
    let wrong_input = 0

    input_button.addEventListener('click', function(){
        console.log("entered event")
        user_input = document.getElementById('user_input').value
        if(user_input.length!=1){
            alert("Enter one character")
        }
        else{ 
            let index_array=[] 
            let is_in_string=false
            for(let i = 0; i<game_word.length; i++){
                console.log(game_word[i])
                if(user_input==game_word[i]){
                    is_in_string=true
                    index_array.push(i)
                }
            }
            console.log(is_in_string)

            if(is_in_string==false){
                console.log("ent")
                switch(wrong_input){
                    case 0:draw_first()
                    break
                    case 1:draw_second()
                    break
                    case 2:draw_third()
                    break
                    case 3:draw_forth()
                    break
                    case 4:draw_fifth()
                    break
                    case 5:draw_sixth()
                    break
                    case 6:draw_seventh()
                    break
                    case 7:draw_eighth()
                    break
                    case 8:draw_ninth()
                    break
                    case 9:draw_tenth()
                    break
                }
                wrong_input +=1
                wrong_char.innerHTML+=user_input+" "
            }
        }
    })
}