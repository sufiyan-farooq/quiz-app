



var htmlquiz = [
    {
        question :"HTML stands for",
        options: ["Hyper text main language","Hello text my language", "Hyper text main list", "Hyper text markup language",],
        answer:"Hyper text markup language"
    },
    {
        question :"Choose the correct HTML element for the largest heading:",
        options:[    "<h4>","<h3>"," <h1>","<h2>"],
   
        answer:" <h1>",
    },

 
    {
        question :"What is the correct HTML element for inserting a line break",
        options:[ "<break>","<lb>","<br>","<breakline>"],
      
        
        answer:"<br>",
    },
    {
        question :"Which character is used to indicate an end tag?",
        options: ["*","#","<","/"],
  
        answer:"/",
    },
    {
        question :"What is the correct HTML for making a text area",
        options: ["<input type = 'textbox'>","<input type = 'textarea'>", "<textbox>","<textarea>"],
  
        answer:"<textarea>",
    },
    {
        question :"Which doctype is correct for HTML5?",
        options: ["<!DOCTYPE htm5>","<!DOCTYPE5 html>","<!DOCTYPE html>","<!DOCTYPE HTML>",],

        answer:"<!DOCTYPE html>",
    },
    {
        question :"In HTML, which attribute is used to specify that an input field must be filled out?",
        options:["required","placeholder","type","validate"],
    
        
        answer:"required",
    },
    {
        question :"Which HTML tag is used to define an internal style sheet?",
        options: ["<script>","<style>","<link>","<css>"],
       
        
        answer:"<style>",
    },
    



]


for (var key in htmlquiz){
    console.log(htmlquiz[key].options[0])
    console.log(htmlquiz[key].options[1])
    console.log(htmlquiz[key].options[2])
    console.log(htmlquiz[key].options[3])

}







