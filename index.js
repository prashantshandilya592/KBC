var kbc={  
        
        
    'winning_prize': function(question_list,current){
        var price=this.question_list[current].price_amount;
        return price;
    },

    'current_question_no': function(num){
        return num;
    },
    'print_question': function (question_list,val) {

        console.log(this.question_list[val].text);
        document.write(this.question_list[val].text,"<br>");
        console.log(this.question_list[val].options);
        document.write(this.question_list[val].options,"<br>");

     },

    'select_answer': function(real_ans,answer) {
        if(real_ans==answer){

            console.log("correct answer");
            document.write("correct answer","<br>");
            return true;

        }
        else{
            console.log("Wrong answer");
            document.write("Wrong answer","<br>");
            return false;
        }
        
    },
    'question_list':[
        {
            'text': "How many legs cow have?",
            'options': ["One", "Two", "Three", "Four"],
            'correct_answer': "Four",
            'price_amount': 10000
        },
        {
            'text': "we have to play pubg or not",
            'options': ["yes", "no", "never", "not at all"],
            'correct_answer': "yes",
            'price_amount': 20000



        },
        {
            'text': "How many colors are there in a rainbow?",
            'options': ["1", "4", "7", "10"],
            'correct_answer': "7",
            'price_amount': 30000

        },
        {
            'text': "Which animal is called King of Jungle?",
            'options': ["me", "you", "tiger shroff", "lion"],
            'correct_answer': "lion",
            'price_amount': 40000

        },
        {
            'text': "How many letters are there in the English alphabet?",
            'options': ["25", "26", "27", "28"],
            'correct_answer': "26",
            'price_amount': 50000
        },
        {
            'text': "How many sides are there in a triangle?",
            'options': ["One", "Two", "Three", "Four"],
            'correct_answer': "three",
            'price_amount': 1000000
        }],

    'main_fun':function(){
        var final_price=0;

        for(var i=0;i<kbc.question_list.length;i++){
            var val=kbc.current_question_no(i);
            
            var answer=prompt(kbc.print_question(kbc.question_list,val));
            var bool=kbc.select_answer(kbc.question_list[i].correct_answer,answer);
            if(bool==true){
                final_price+=kbc.winning_prize(kbc.question_list,val);
                console.log('Prize money till now',final_price);
                document.write('Prize money till now',final_price,"<br>");

                if(i==kbc.question_list.length-1){
                    console.log("CONGRATULATIONS ANONYMUS WINNING AMOUNT -> ",final_price);
                    document.write("CONGRATULATIONS ANONYMUS WINNING AMOUNT ->a",final_price,"<br>");
                }
            }
            else{
                console.log("BAD LUCK");
                document.write("BAD LUCK","<br>");
                break;
            }

    



        }

    }

}



console.log('CHALIYE SHURU KARTE HAI');

kbc.main_fun();